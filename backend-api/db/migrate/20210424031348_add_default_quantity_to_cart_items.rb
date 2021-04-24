class AddDefaultQuantityToCartItems < ActiveRecord::Migration[6.1]
  def change
    change_column :cart_items, :quantity, :integer, default: 1
  end
end
