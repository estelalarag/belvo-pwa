import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    const response = await axios.post(
      "https://sandbox.belvo.com/api/invoices/",
      {
        link: "02d28106-9a1a-4bb0-9b6a-cf9c343374f4",

        date_from: "2024-01-01",
        date_to: "2024-12-31",

        type: "OUTFLOW"
      },
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