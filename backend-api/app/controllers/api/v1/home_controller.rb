class Api::V1::HomeController < ApplicationController
  def index
    @products = Product.all.with_attached_main_image.order(id: :desc)

    render json: @products
  end
end
