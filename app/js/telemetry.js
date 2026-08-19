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

const resumeLink = document.getElementById("resume-download");

if (resumeLink) {
    resumeLink.addEventListener("click", function () {
        trackEvent("resume_download");
    });
}

trackEvent("page_view");