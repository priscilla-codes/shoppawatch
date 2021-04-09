class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :brand, :description, :price, :main_image

  def main_image
    rails_blob_path(object.main_image, only_path: true) if object.main_image.attached?
  end
end
