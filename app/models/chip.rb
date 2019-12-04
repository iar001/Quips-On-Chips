class Chip < ApplicationRecord
  has_many :reviews
  # belongs_to :user

  def score_average
    @amount = reviews.count
    @total = reviews.reduce(0) {|sum, review| sum + review[:taste] }
    @total/@amount
  end

end
