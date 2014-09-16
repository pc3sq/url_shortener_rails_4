class CreateUrls < ActiveRecord::Migration
  def change
    create_table :urls do |t|
      t.integer :click_count
    end
  end
end
