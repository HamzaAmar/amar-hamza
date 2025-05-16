export const verifyToken = async (token: string) => {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",

      body: JSON.stringify({
        token,
        secret: process.env.SECRET_KEY!,
      }),
      headers: {
        "content-type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error("Captcha verification failed");
  }

  return await res.json();
};
