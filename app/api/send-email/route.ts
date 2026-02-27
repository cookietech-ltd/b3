
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, businessName, challenge } = body;

        const { data, error } = await resend.emails.send({
            from: 'B³ Solutions Website <onboarding@resend.dev>',
            to: ['akashshahriar55@gmail.com'], // Updated to verified email for testing
            subject: `New B³ Inquiry from ${firstName} ${lastName}`,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry | B³ Solutions</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; margin-top: 40px; margin-bottom: 40px;">
        <!-- Header -->
        <div style="background-color: #000000; padding: 30px 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 2px;">B³ SOLUTIONS</h1>
        </div>

        <!-- Content -->
        <div style="padding: 40px;">
            <h2 style="color: #000000; font-size: 20px; font-weight: 600; margin-top: 0; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">New Strategic Inquiry</h2>
            
            <p style="color: #666666; font-size: 14px; line-height: 1.6; margin-bottom: 30px;">
                You have received a new inquiry from the website contact form.
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; width: 120px;">
                        <strong style="color: #000000; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333;">
                        ${firstName} ${lastName}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                        <strong style="color: #000000; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333;">
                        <a href="mailto:${email}" style="color: #000000; text-decoration: none; border-bottom: 1px solid #000000;">${email}</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                        <strong style="color: #000000; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Business</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333;">
                        ${businessName}
                    </td>
                </tr>
            </table>

            <div style="background-color: #f8f8f8; padding: 25px; border-left: 4px solid #000000; margin-bottom: 30px;">
                <strong style="display: block; color: #000000; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">The Challenge</strong>
                <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.7;">
                    ${challenge.replace(/\n/g, '<br>')}
                </p>
            </div>

            <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 14px 28px; text-decoration: none; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Reply to Lead</a>
            </div>
        </div>

        <!-- Footer -->
        <div style="padding: 20px 40px; background-color: #f8f8f8; border-top: 1px solid #eeeeee; text-align: center;">
            <p style="margin: 0; color: #999999; font-size: 11px; letter-spacing: 0.5px;">
                Sent from B³ Solutions Website
            </p>
        </div>
    </div>
</body>
</html>
            `
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
