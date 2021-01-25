class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name, length: 80
      t.string :email

      t.timestamps
    end

    add_index :users, :name
    add_index :users, :email, unique: true
  end

  
end
