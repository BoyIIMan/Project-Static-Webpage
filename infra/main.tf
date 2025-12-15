resource "azurerm_resource_group" "webappproject" {
  name     = "webapp-project-rg"
  location = var.location
  
}

resource "azurerm_static_web_app" "static-web-app" {
  name                = "Project-static-web-app"
  location            = "centralus"
  resource_group_name = azurerm_resource_group.webappproject.name
  sku_tier            = "Free"
  
}
