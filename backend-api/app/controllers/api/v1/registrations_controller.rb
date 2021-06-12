class Api::V1::RegistrationsController < ApplicationController
  include CartItemConcern
  include CurrentCart
  
  def create 
    user = User.create!(
      email: params['user']['email'],
      password: params['user']['password']
    )

    if user
      set_cart
      session[:user_id] = user.id 
      add_guest_items_to_user_cart(user, @cart)
      render json: {
        status: :created,
        user: user,
        user_cart: CartSerializer.new(user.cart)
      }
    else
      render json: { status: 500 }
    end
  end
end