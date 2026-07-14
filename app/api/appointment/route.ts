import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Dental Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Appointment - ${body.name}`,
      html: `
        <h2>New Appointment Request</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Phone:</strong> ${body.phone}</p>

        <p><strong>Service:</strong> ${body.service}</p>

        <p><strong>Date:</strong> ${body.date}</p>

        <p><strong>Time:</strong> ${body.time}</p>

        <p><strong>Message:</strong></p>

        <p>${body.message || "No message provided."}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}