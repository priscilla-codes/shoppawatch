class Api::V1::CartsController < ApplicationController
  include CurrentCart
  before_action :set_cart, only: [:add_item, :get_cart]

  def add_item
    product = Product.find(params[:product_id])
    quantity = params[:quantity]
    cart_item = @cart.add_product(product, quantity)

    if cart_item.save
      render json: cart_item.cart, status: :created
    else 
      render cart_items.errors, status: :unprocessable_entity
    end
  end

  def get_cart
    render json: @cart
  end
end