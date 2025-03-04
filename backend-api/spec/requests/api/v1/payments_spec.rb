require 'rails_helper'

RSpec.describe "Api::V1::Payments", type: :request do
  describe "POST /api/v1/create_payment_intent" do
    it "creates a Stripe payment intent" do
      post "/api/v1/create_payment_intent", params: { amount: 2000 }
      
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to have_key("clientSecret")
    end
  end
end 