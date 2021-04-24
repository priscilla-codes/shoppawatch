class Cart < ApplicationRecord
  belongs_to :user
  has_many    :cart_items

  def total_items
    item_count = 0  
    cart_items.each do |item|
      item_count += item.quantity
    end
    item_count
  end
end
