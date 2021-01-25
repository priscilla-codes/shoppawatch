class Product < ApplicationRecord
  has_many :cart_items
  has_many :order_items
end
