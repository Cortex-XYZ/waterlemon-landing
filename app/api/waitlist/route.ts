export async function POST(request: Request) {
    let body;

    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    const email =
        typeof body?.email === "string"
            ? body.email.trim().toLowerCase()
            : "";

    if (
        email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        /^[=+\-@]/.test(email)
    ) {
        return Response.json(
            { error: "Enter a valid email address." },
            { status: 400 },
        );
    }

    const url = process.env.GOOGLE_WAITLIST_URL;
    const secret = process.env.WAITLIST_SECRET;

    if (!url || !secret) {
        return Response.json(
            { error: "Signup is temporarily unavailable." },
            { status: 503 },
        );
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, secret }),
            redirect: "follow",
            signal: AbortSignal.timeout(20000),
            cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok || result.ok !== true) {
            throw new Error("Signup failed");
        }

        return Response.json({ ok: true });
    } catch {
        return Response.json(
            { error: "Couldn't save your email. Please try again." },
            { status: 503 },
        );
    }
}