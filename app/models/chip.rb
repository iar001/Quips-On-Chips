class Chip < ApplicationRecord
  has_many :reviews
  # belongs_to :user

  def taste_average
    @amount = reviews.count
    @total = reviews.reduce(0) {|sum, review| sum + review[:taste] }
    @total/@amount
  end

  def cost_average
    @amount = reviews.count
    @total = reviews.reduce(0) {|sum, review| sum + review[:cost] }
    @total/@amount
  end

  def guilt_average
    @amount = reviews.count
    @total = reviews.reduce(0) {|sum, review| sum + review[:guilt]}
    @total/@amount
  end

end
