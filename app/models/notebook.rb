# == Schema Information
#
# Table name: notebooks
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notebook < ApplicationRecord
  validates :author, :title, presence: true

  has_many :notes

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
end
