class Cart < ApplicationRecord
  has_many  :cart_items
  belongs_to :user, optional: true

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

  def total_price
    cart_items.to_a.sum {|item| item.total_price}
  end
end
