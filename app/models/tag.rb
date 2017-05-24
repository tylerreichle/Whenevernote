class Tag < ApplicationRecord
  validates :name, :author, prescence: true

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
end
