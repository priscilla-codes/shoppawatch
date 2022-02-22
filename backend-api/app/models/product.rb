class Product < ApplicationRecord
  include PgSearch 

  has_many :cart_items
  has_many :order_items
  has_one_attached :main_image

  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true

  pg_search_scope :search_by_term, against: [:name],
    using: {
      tsearch: {
        any_word: true,
        prefix: true
      }
    }
end
