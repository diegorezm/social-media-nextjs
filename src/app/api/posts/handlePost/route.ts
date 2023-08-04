import User from "@/models/userModel";
import Post from "@/models/postModel"
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { post, userId } = req;
    const user = await User.findOne({ _id: userId });
    if (!user) throw new Error("User not found!");


    const newPost = new Post({
      post: post,
      author: user.username,
      author_id: user._id,
      author_pfp: user.profilePic
    });


    const savePost = await newPost.save();


    return NextResponse.json({
      message: "Post created!",
      succes: true,
      savePost
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
