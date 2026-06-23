"use server"

import nodemailer from "nodemailer"

export async function sendEmail(formData) {
  const GMAIL_USER = process.env.GMAIL_USER
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
  const TARGET_EMAIL = process.env.TARGET_EMAIL

  const messageText = formData?.message

  // Configure the Gmail SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  })

  try {
    // Dispatch the email
    await transporter.sendMail({
      from: GMAIL_USER,
      to: TARGET_EMAIL,
      subject: formData?.subject ?? "New message from Portfolio",
      html: `<p>
      You got message from <strong>${formData?.name}</strong> ( Email: <strong>${formData?.email}</strong>, Mobile: <strong>${formData?.mobile}</strong> ).
      <br/>
      Message:
      <br/>
      ${messageText}</p>`,
    })

    return { success: true }
  } catch (error) {
    console.error("Email error:", error)
    return { success: false, error: "Failed to send email." }
  }
}
