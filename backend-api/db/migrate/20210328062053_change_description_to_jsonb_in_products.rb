class ChangeDescriptionToJsonbInProducts < ActiveRecord::Migration[6.1]
  def up
    change_column :products, :description, :jsonb, using: 'description::jsonb'
  end

  def down 
    change_column :products, :description, :text
  end

  
end
