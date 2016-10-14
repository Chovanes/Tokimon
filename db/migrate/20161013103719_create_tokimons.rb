class CreateTokimons < ActiveRecord::Migration
  def change
    create_table :tokimons do |t|
      t.string :tname
      t.integer :tweight
      t.integer :theight
      t.integer :fly
      t.integer :fight
      t.integer :fire
      t.integer :water
      t.integer :electric
      t.integer :ice
      t.integer :dark
      t.integer :psychic
      t.integer :total
      t.integer :trainer_id

      t.timestamps null: false
    end
  end
end
