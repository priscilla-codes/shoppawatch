class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description
      t.decimal :price, precision: 8, scale: 2, default: "0.0", null: false

      t.timestamps
    end
    add_index :products, :name
  end
end