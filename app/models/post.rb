class Post < ApplicationRecord
  has_one_attached :image
  has_many :post_tag_relations
  has_many :tags, through: :post_tag_relations
end
