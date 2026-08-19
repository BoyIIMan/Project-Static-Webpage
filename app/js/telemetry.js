async function trackEvent(eventName) {
    try {
        await fetch("/api/trackEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                event: eventName
            })
        });
    } catch (error) {
        console.error("Telemetry failed:", error);
    }
}

trackEvent("page_view");