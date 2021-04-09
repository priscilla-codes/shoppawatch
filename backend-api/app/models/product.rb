class Product < ApplicationRecord
  has_many :cart_items
  has_many :order_items

  has_one_attached :main_image
end
