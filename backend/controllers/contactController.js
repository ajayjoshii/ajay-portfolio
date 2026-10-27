
import Contact from "../models/Contact.js";
import { sendContactEmail } from "../services/emailService.js";
import validator from "validator";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Validate input lengths
    if (
      name.trim().length > 100 ||
      email.trim().length > 254 ||
      subject.trim().length > 200 ||
      message.trim().length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    if (!validator.isEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      emailStatus: "pending",
    });

    try {
      await sendContactEmail({
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
      });

      contact.emailStatus = "sent";
      await contact.save();

      return res.status(201).json({
        success: true,
        message: "Message sent successfully!",
      });
    } catch (emailError) {
      console.error("Email delivery failed:", emailError.message);

      contact.emailStatus = "failed";
      await contact.save();

      // Message is saved even if email delivery fails.
      return res.status(202).json({
        success: true,
        message:
          "Your message was saved, but email delivery failed. Please try again later.",
        emailSent: false,
      });
    }
  } catch (error) {
    console.error("Contact controller error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to process your message. Please try again.",
    });
  }
};
