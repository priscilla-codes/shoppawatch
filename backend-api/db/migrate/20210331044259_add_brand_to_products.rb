class AddBrandToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :brand, :string
  end
end
