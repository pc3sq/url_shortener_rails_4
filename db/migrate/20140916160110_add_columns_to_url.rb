class AddColumnsToUrl < ActiveRecord::Migration
  def change
  	add_column :urls, :string, :string
  end
end
