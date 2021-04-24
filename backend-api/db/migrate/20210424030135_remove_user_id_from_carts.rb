class RemoveUserIdFromCarts < ActiveRecord::Migration[6.1]
  def change
    remove_column :carts, :user_id
  end
end