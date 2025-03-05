module CartItemConcern
  def add_guest_items_to_user_cart(user, cart)
    return unless cart && user&.cart

    ActiveRecord::Base.transaction do
      cart.cart_items.each do |item|
        next unless item.product_id && item.quantity.positive?
        
        current_item = user.cart.add_product(item.product_id, item.quantity)
        
        if current_item.save
          item.destroy
        else
          raise ActiveRecord::Rollback, "Failed to save cart item: #{current_item.errors.full_messages.join(', ')}"
        end
      end

      cart.destroy
      session[:cart_id] = nil
    end
  rescue => e
    Rails.logger.error("Failed to merge cart items: #{e.message}")
    raise
  end
end