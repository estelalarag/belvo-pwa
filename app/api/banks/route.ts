import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    const response = await axios.get(
      "https://sandbox.belvo.com/api/institutions/",
      {
        auth: {
          username: process.env.BELVO_SECRET_ID!,
          password: process.env.BELVO_SECRET_PASSWORD!,
        },
      }
    );

    return NextResponse.json(response.data);

  } catch (error: any) {

    console.log(error.response?.data);

    return NextResponse.json(
      { error: error.response?.data || "Error" },
      { status: 500 }
    );
  }
}