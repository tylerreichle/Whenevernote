class TaggedNote < ApplicationRecord
  validates :tag, :note, prescence: true
  validates_uniqueness_of :tag_id, scope: :note_id

  belongs_to :note
  belongs_to :tag

end
