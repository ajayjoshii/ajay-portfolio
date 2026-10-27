
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  if (
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.CONTACT_RECEIVER
  ) {
    throw new Error("Email configuration is incomplete");
  }

  return transporter.sendMail({
    from: {
      name: "Contact Message",
      address: process.env.SMTP_USER,
    },

    to: process.env.CONTACT_RECEIVER,

    replyTo: {
      name,
      address: email,
    },

    subject: `Client Email : ${subject}`,

    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n"),

    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>Contact Message From Client</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `,
  });
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
};
