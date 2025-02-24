require 'rails_helper'

RSpec.describe Product, type: :model do
  subject { build(:product) }

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:main_image) }
    it { should validate_numericality_of(:price).is_greater_than_or_equal_to(0) }
  end

  describe 'associations' do
    it { should have_many(:cart_items) }
    it { should have_many(:order_items) }
    it { should have_one_attached(:main_image) }
  end

  describe 'search' do
    let!(:fossil_watch) { create(:product, name: 'Fossil Nate Watch') }
    let!(:timex_watch) { create(:product, name: 'Timex Expedition') }

    it 'finds products by name' do
      results = Product.search_by_term('Fossil')
      expect(results).to include(fossil_watch)
      expect(results).not_to include(timex_watch)
    end
  end
end 