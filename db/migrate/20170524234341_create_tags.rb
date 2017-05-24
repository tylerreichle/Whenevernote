class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :tags, :author_id
  end
end
