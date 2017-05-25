class CreateTaggedNotesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :tagged_notes do |t|
      t.integer :note_id, null: false
      t.integer :tag_id, null: false
    end
    add_index :tagged_notes, [:note_id, :tag_id]
  end
end
