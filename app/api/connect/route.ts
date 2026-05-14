import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { institution } = body;

    const secretId = process.env.BELVO_SECRET_ID;
    const secretPassword = process.env.BELVO_SECRET_PASSWORD;

    const credentials = Buffer.from(
      `${secretId}:${secretPassword}`
    ).toString("base64");

    const response = await fetch(
      "https://sandbox.belvo.com/api/links/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${credentials}`,
        },

        body: JSON.stringify({
          institution,
          username: "sandbox_user",
          password: "sandbox_password",
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Failed to connect bank" },
      { status: 500 }
    );
  }
}