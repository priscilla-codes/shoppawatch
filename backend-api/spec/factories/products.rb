FactoryBot.define do
  factory :product do
    name { "Fossil Nate Watch" }
    description { "A stylish Fossil watch for testing" }
    price { 99.99 }
    brand { "Fossil" }

    after(:build) do |product|
      image_path = FileHelper.create_test_image
      
      product.main_image.attach(
        io: File.open(image_path),
        filename: 'test_watch.jpg',
        content_type: 'image/jpeg'
      )
    end
  end
end 