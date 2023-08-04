import { connect } from "@/dbconfig/dbconfig";
import Post from "@/models/postModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { author, post } = reqBody;
    const user = await User.findOne({ _id: author });
    const foundPost = await Post.findOne({ _id: post });

    if (!user) throw new Error("User not found!");
    if (!foundPost) throw new Error("Post not found!");
    if (user.id !== foundPost.author_id) throw new Error("You are not the original poster.")

    const deletedPost = await foundPost.deleteOne({ _id: post });

    return NextResponse.json({
      success: true,
      deletedPost
    })
  } catch (error: any) {
    return NextResponse.json({
      error: error.message
    });
  }
}
