class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :brand, :description, :price, :main_image

  def main_image
     object.main_image.url if object.main_image.attached?
  end
end
