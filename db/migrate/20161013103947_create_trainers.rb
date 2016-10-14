class CreateTrainers < ActiveRecord::Migration
  def change
    create_table :trainers do |t|
      t.string :trname
      t.integer :trlevel

      t.timestamps null: false
    end
  end
end
