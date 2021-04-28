class CartItem < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :cart
  belongs_to :product

  def total_price
    product.price * quantity
  end

  def name
    product.name
  end

  def price
    product.price
  end

  def main_image
    rails_blob_path(product.main_image, only_path: true)
  end
end
