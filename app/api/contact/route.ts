import { NextResponse } from "next/server"

const TARGET_EMAIL = "adarshraghuwanshi072@gmail.com"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide your name or organization." },
        { status: 400 }
      )
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please provide a valid return electronic mail address." },
        { status: 400 }
      )
    }

    if (!message || typeof message !== "string" || message.trim().length < 3) {
      return NextResponse.json(
        { error: "Message must be at least 3 characters long." },
        { status: 400 }
      )
    }

    // Forward to FormSubmit for adarshraghuwanshi072@gmail.com
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://adarsh-portfolio.vercel.app",
        Referer: "https://adarsh-portfolio.vercel.app/",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: `⚡ New Portfolio Dispatch: ${name.trim()} (${email.trim()})`,
        _template: "table",
        _captcha: "false",
      }),
    })

    const data = await response.json()

    // Successful transmission
    if (data.success === "true" || data.success === true) {
      return NextResponse.json({
        success: true,
        message: "Your transmission was received and forwarded to Adarsh's inbox.",
      })
    }

    // First time activation required for new email endpoint
    if (data.message && data.message.toLowerCase().includes("activation")) {
      return NextResponse.json({
        success: true,
        activationNeeded: true,
        message:
          "Activation required: A one-time activation link was sent to adarshraghuwanshi072@gmail.com. Please confirm it in your Gmail to receive all future dispatches.",
      })
    }

    return NextResponse.json(
      { error: data.message || "Failed to transmit message." },
      { status: 500 }
    )
  } catch (error) {
    console.error("Contact API Transmission Error:", error)
    return NextResponse.json(
      { error: "Failed to connect to mail gateway. Please try again or use direct mail." },
      { status: 500 }
    )
  }
}
