class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.float :cost
      t.float :taste
      t.float :guilt
      t.references :user, null: false, foreign_key: true
      t.references :chip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
