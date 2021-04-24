class Cart < ApplicationRecord
  belongs_to :user
  has_many    :cart_items

  def add_product(product, quantity)
    current_item = cart_items.find_by(product_id: product.id)
    if current_item
      if quantity > 1
        current_item.quantity += quantity
      else
        current_item.quantity += 1
      end
    else 
      current_item = cart_items.build(product_id: product.id, quantity: quantity)
    end
    current_item
  end

  def total_items
    item_count = 0  
    cart_items.each do |item|
      item_count += item.quantity
    end
    item_count
  end
end
