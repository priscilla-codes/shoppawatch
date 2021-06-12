class Api::V1::SessionsController < ApplicationController
  include CartItemConcern
  include CurrentUserConcern
  include CurrentCart

  def create
    set_cart
    user = User
            .find_by(email: params["user"]["email"])
            .try(:authenticate, params["user"]["password"])

    if user
      session[:user_id] = user.id
      add_guest_items_to_user_cart(user, @cart)
      render json: {
        status: :created,
        logged_in: true,
        user: user,
        user_cart: CartSerializer.new(user.cart)
      }
    else 
      render json: { status: 401 }
    end
  end
  
  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def logout
    reset_session
    set_cart
    render json: { status: 200, logged_out: true, cart: CartSerializer.new(@cart) }
  end
end