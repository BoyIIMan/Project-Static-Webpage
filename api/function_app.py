import azure.functions as func
import logging 


app = func.FunctionApp()


@app.route(route="trackEvent", methods=["POST"], auth_level=func.AuthLevel.ANONYMOUS)

def track_event(req: func.HttpRequest) -> func.HttpResponse:
    try:
        body = req.get_json()
    except ValueError:
        return func.HttpResponse(
            "Invalid JSON payload",
            status_code=400
        )
    
    event_type = body.get("event")

    allowed_events = ["page_view", "resume_download"]

    if event_type not in allowed_events:
        return func.HttpResponse(
            "Invalid event type",
            status_code=400
        )

    logging.info(f"Tracking event: {event_type}")


    return func.HttpResponse(
        f"Event tracked: {event_type}",
        status_code=200
    )