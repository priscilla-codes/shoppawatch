require 'rails_helper'

RSpec.describe "Api::V1::Products", type: :request do
  let!(:product) { create(:product) }

  describe "GET /api/v1/products" do
    it "returns all products" do
      get "/api/v1/products"
      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json.size).to eq(1)
    end
  end

  describe "GET /api/v1/products/:id" do
    it "returns a specific product" do
      get "/api/v1/products/#{product.id}"
      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json["name"]).to eq(product.name)
    end
  end

  describe "GET /api/v1/products/search" do
    it "returns matching products" do
      get "/api/v1/products/search", params: { query: product.name }
      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json.first["name"]).to eq(product.name)
    end
  end
end 