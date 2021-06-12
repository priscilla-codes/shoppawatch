module CartItemConcern
  def add_guest_items_to_user_cart(user, cart)
    cart.cart_items.each do |item|
      current_item = user.cart.add_product(item.product_id, item.quantity)
      current_item.save
      item.destroy
    end
    Cart.destroy(session[:cart_id])
    session[:cart_id] = nil
  end
end