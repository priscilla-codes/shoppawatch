class Api::V1::ProductsController < ApplicationController
  def index
    @products = Product.all.with_attached_main_image.order(id: :asc)

    render json: @products
  end
  
  def show 
    @product = Product.find(params[:id])

    render json: @product 
  end

  def search
    @products = Product.search_by_term(params[:query])

    render json: @products
  end
end
