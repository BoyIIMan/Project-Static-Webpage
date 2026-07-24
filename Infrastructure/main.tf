terraform {
  required_providers {
    azurerm = {
      source  = "azurerm"
      version = "4.80.0"
    }
  }
}
provider "azurerm" {
  features {}
}
resource "azurerm_static_web_app" "res-0" {
  configuration_file_changes_enabled = true
  location                           = "centralus"
  name                               = "Project-static-web-app"
  preview_environments_enabled       = true
  public_network_access_enabled      = true
  repository_token                   = var.github_pat
  repository_url                     = "https://github.com/BoyIIMan/Project-Static-Webpage"
  repository_branch                  = "main"
  resource_group_name                = "webapp-project-rg"
  sku_size                           = "Free"
  sku_tier                           = "Free"
  tags                               = {}
}


resource "azurerm_static_web_app_custom_domain" "www" {
  static_web_app_id = azurerm_static_web_app.res-0.id
  domain_name       = "www.kanaanwray.com"
  validation_type = "cname-delegation"
}