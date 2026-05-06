export const runtime = "nodejs";

const contactEmail = "ecasanovab@gmail.com";

type RecaptchaResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

const getFormValue = (formData: FormData, key: string) => {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = getFormValue(formData, "Name");
  const lastName = getFormValue(formData, "Last name");
  const centerOfWork = getFormValue(formData, "Center of work");
  const email = getFormValue(formData, "Email");
  const telephone = getFormValue(formData, "Telephone");
  const message = getFormValue(formData, "Message");
  const recaptchaToken = getFormValue(formData, "g-recaptcha-response");

  if (!name || !lastName || !centerOfWork || !email || !message) {
    return Response.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!recaptchaSecretKey) {
    return Response.json(
      { message: "reCAPTCHA is not configured on the server." },
      { status: 500 },
    );
  }

  if (!recaptchaToken) {
    return Response.json(
      { message: "Please complete the reCAPTCHA before sending." },
      { status: 400 },
    );
  }

  const recaptchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: recaptchaSecretKey,
        response: recaptchaToken,
      }),
    },
  );
  const recaptchaResult =
    (await recaptchaResponse.json()) as RecaptchaResponse;

  if (!recaptchaResult.success) {
    return Response.json(
      { message: "reCAPTCHA validation failed. Please try again." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "SpinCulture3D <onboarding@resend.dev>";

  if (!resendApiKey) {
    return Response.json(
      { message: "Email sending is not configured on the server." },
      { status: 500 },
    );
  }

  const emailBody = [
    "New SpinCulture3D contact form submission",
    "",
    `Name: ${name}`,
    `Last name: ${lastName}`,
    `Center of work: ${centerOfWork}`,
    `Email: ${email}`,
    `Telephone: ${telephone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: contactEmail,
      reply_to: email,
      subject: "New SpinCulture3D contact form message",
      text: emailBody,
    }),
  });

  if (!emailResponse.ok) {
    return Response.json(
      { message: "Email could not be sent. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Message sent." });
}
