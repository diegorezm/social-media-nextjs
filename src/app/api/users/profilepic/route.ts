import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { profilePic, email } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User does not exist!');
    }
    user.profilePic = profilePic;
    const updateUser = await user.save();

    return NextResponse.json({
      message: "Profile pic was set!",
      success: true,
      updateUser
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

}
