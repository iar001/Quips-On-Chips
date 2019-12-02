class CreateChips < ActiveRecord::Migration[6.0]
  def change
    create_table :chips do |t|
      t.string :name
      t.text :bag_pic_url
      t.text :chip_pic_url

      t.timestamps
    end
  end
end
