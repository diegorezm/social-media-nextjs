import { NextRequest, NextResponse } from "next/server"

export  function GET(request: NextRequest) {
    try {
        const token =  request.cookies.has("token");
        return NextResponse.json({
            success:true,
            data:token
        })

    } catch (error: any) {
        console.log(error.response.data)
        
    }
        
}