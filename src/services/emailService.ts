import nodemailer from "nodemailer";

interface EmailPayload {
  name: string;
  phone: string;
  interest: string;
  customText?: string;
}

export const sendInquiryEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // vishu.codebug@gmail.com
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "info.shreegoholidays@gmail.com",
    subject: ` ${new Date().toLocaleDateString()} - New Inquiry from ${data.name} - JourneyOn Wheels`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #008080;">New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Interest:</strong> ${data.interest}</p>
        <p><strong>Note:</strong> ${data.customText || "N/A"}</p>
        <br/>
        <p style="font-size: 12px; color: #888;">Sent from Journey On Wheels Website</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
