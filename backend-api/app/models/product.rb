class Product < ApplicationRecord
  has_many :cart_items
  has_many :order_items
  has_one_attached :main_image

  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true
end
