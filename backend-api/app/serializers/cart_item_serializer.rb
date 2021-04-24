class CartItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :quantity
end