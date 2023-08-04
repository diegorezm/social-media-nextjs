import { getDataFromToken } from "@/helpers/getTokenData";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const user_id = await getDataFromToken(request);
    const user = await User.findOne({ _id: user_id }).select("-password");
    if (!user.profilePic) {
      user.profilePic = "https://cdn-icons-png.flaticon.com/512/1104/1104294.png?w=740&t=st=1690905206~exp=1690905806~hmac=c16902112931996c7b8c0cdb829b02e39bd8ad4b4fb5fa9ebc17a467979f2a94";
    }
    return NextResponse.json({
      message: "User found!",
      data: user
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
