require 'mini_magick'

# Helper for generating test images for Active Storage attachments
module FileHelper
  def self.create_test_image
    FileUtils.mkdir_p(Rails.root.join('spec', 'fixtures', 'files'))
    image_path = Rails.root.join('spec', 'fixtures', 'files', 'test_watch.jpg')
    
    unless File.exist?(image_path)
      MiniMagick::Tool::Convert.new do |convert|
        convert.size '100x100'
        convert << 'xc:white'
        convert << image_path.to_s
      end
    end
    
    image_path
  end
end 