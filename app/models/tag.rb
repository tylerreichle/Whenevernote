class Tag < ApplicationRecord
  validates :name, :author, presence: true

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User

  has_many :tagged_note
  has_many :notes,
           through: :tagged_note,
           source: :note
end
