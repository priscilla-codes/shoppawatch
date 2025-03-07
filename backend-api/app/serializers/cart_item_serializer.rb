class CartItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :quantity, :price, :name, :total_price, :main_image, :created_at, :product_id
  belongs_to :cart
end