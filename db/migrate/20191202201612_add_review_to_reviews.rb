class AddReviewToReviews < ActiveRecord::Migration[6.0]
  def change
    add_column :reviews, :review, :string
  end
end
