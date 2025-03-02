class Api::V1::PaymentsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def create_payment_intent
    begin
      Stripe.api_key = Rails.application.credentials.stripe[:secret_key]
      
      amount = params[:amount].to_i
      Rails.logger.info "Processing payment amount: #{amount}"
      
      payment_intent = Stripe::PaymentIntent.create(
        amount: amount,
        currency: 'usd',
        metadata: {integration_check: 'accept_a_payment'},
      )
      
      Rails.logger.info "Stripe payment intent created with ID: #{payment_intent.id}"
      
      render json: {
        clientSecret: payment_intent.client_secret
      }
    rescue Stripe::StripeError => e
      Rails.logger.error "Stripe Error: #{e.class.name}: #{e.message}"
      render json: { error: e.message }, status: 400
    rescue => e
      Rails.logger.error "Unexpected Error: #{e.class.name}: #{e.message}"
      Rails.logger.error e.backtrace.join("\n")
      render json: { error: "An unexpected error occurred: #{e.message}" }, status: 500
    end
  end
end