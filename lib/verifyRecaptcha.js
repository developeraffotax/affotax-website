import axios from "axios";


export async function verifyRecaptcha(recaptchaToken, minScore = 0.5) {
  if (!recaptchaToken) {
    return { success: false, message: "Missing reCAPTCHA token" };
  }

  try {
    const verifyURL = "https://www.google.com/recaptcha/api/siteverify";
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error("Missing RECAPTCHA_SECRET_KEY in environment variables");
      return { success: false, message: "Internal configuration error" };
    }

    const response = await axios.post(
      verifyURL,
      new URLSearchParams({
        secret: secretKey,
        response: recaptchaToken,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const data = response.data;
    console.log("🧩 reCAPTCHA verification result:", data);

    if (!data.success || data.score < minScore) {
      return {
        success: false,
        message: "Failed reCAPTCHA validation",
        score: data.score,
      };
    }

    return { success: true, score: data.score };
  } catch (error) {
    console.error("❌ reCAPTCHA verification error:", error);
    return { success: false, message: "reCAPTCHA verification failed" };
  }
}
