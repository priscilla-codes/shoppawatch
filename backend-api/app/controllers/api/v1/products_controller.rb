class Api::V1::ProductsController < ApplicationController
  def show 
    @product = Product.find(params[:id])

    render json: @product 
  end
end
