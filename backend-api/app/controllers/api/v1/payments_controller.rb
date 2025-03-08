class Api::V1::PaymentsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def create_payment_intent
    begin
      amount = params[:amount].to_i
      
      payment_intent = Stripe::PaymentIntent.create(
        amount: amount,
        currency: 'usd',
        metadata: {integration_check: 'accept_a_payment'},
      )
      
      render json: {
        clientSecret: payment_intent.client_secret
      }
    rescue => e
      Rails.logger.error "Error: #{e.message}"
      render json: { error: e.message }, status: 500
    end
  end
end