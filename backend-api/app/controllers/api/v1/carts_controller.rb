class Api::V1::CartsController < ApplicationController
  include CurrentCart
  include CurrentUserConcern
  before_action :set_cart, only: [:add_item, :get_cart, :update_item, :remove_item]

  def add_item
    product = Product.find(params[:product_id])
    quantity = params[:quantity]
    if @current_user     
      cart_item = @current_user.cart.add_product(product.id, quantity)
    elsif @cart
      cart_item = @cart.add_product(product.id, quantity)
    end

    if cart_item.save
      render json: cart_item.cart, status: :created
    else 
      render cart_item.errors, status: :unprocessable_entity
    end
  end

  def update_item
    cart_item = CartItem.find(params[:cart_item_id])
    quantity = params[:new_quantity]

    if cart_item.update(quantity: quantity)
      if @current_user  
        render json: @current_user.cart, status: :created 
      elsif @cart
        render json: @cart,  status: :created
      end
    else 
      render json: cart_item.errors, status: :unprocessable_entity
    end
  end

  def remove_item
    cart_item = CartItem.find(params[:cart_item_id])
    
    cart_item.destroy
    
    if @current_user
      render json: @current_user.cart
    elsif @cart
      render json: @cart
    end
  end

  def get_cart
    if @current_user
      render json: @current_user.cart 
    elsif @cart 
      render json: @cart
    end
  end
end