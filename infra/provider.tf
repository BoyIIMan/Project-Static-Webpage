terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.1.0"
}

provider "azurerm" {
  features {}

  subscription_id = "3b038002-b60f-4984-88d1-36bbed7f0487"
  tenant_id = "6ff8e149-f3df-4866-a0b2-59c14f3da8d8"
}