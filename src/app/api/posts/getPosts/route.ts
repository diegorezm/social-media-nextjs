import { connect } from "@/dbconfig/dbconfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest) {
  try {
    const getPost = await Post.find({});
    return NextResponse.json({
      success: true,
      data: getPost
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
