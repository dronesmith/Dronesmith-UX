class AddFirstNameToUsers < ActiveRecord::Migration[5.0]
  def change
  	change_table :users do |t|
      t.string :first_name
    end
  end
end
