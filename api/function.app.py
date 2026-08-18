import azure.functions as func



app = func.FunctionApp()

@app.route(route="trackEvent", methods=["POST"], auth_level=func.AuthLevel.ANONYMOUS)
def track_event(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse("Event tracked successfully!", status_code=200)