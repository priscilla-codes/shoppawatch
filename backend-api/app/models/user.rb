class User < ApplicationRecord
  has_many :orders
  has_one :cart
  has_secure_password

  validates :name, presence: true
  validates :email, 
            :presence => true,
            :uniqueness => true,
            :format => { with: URI::MailTo::EMAIL_REGEXP } 

  after_create :create_cart
end
