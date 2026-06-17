import { google } from "googleapis";
import { NextResponse } from "next/server";
import { contactSchema } from "../../../lib/validations/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
    } = body;
    /*
     * Google Sheets
     */

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            name,
            email,
            phone,
            message,
          ],
        ],
      },
    });

    /*
     * Email Notification
     */

    // await resend.emails.send({
    //   from: "menumine <noreply@menumine.in>",
    //   to: [process.env.CONTACT_TO!],
    //   subject: `New Contact Form: ${name}`,
    //   html: `
    //     <h2>New Lead</h2>

    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Restaurant:</strong> ${restaurant}</p>

    //     <p>
    //       <strong>Message:</strong><br/>
    //       ${message}
    //     </p>
    //   `,
    // });

    /*
     * Optional Auto Reply
     */

    // if (email) {
    //   await resend.emails.send({
    //     from: "menumine <noreply@menumine.in>",
    //     to: [email],
    //     subject: "We've received your enquiry",
    //     html: `
    //       <p>Hi ${name},</p>

    //       <p>
    //         Thank you for contacting menumine.
    //         We'll get back to you shortly.
    //       </p>

    //       <p>– Team menumine</p>
    //     `,
    //   });
    // }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}