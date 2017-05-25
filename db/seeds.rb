# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'user', email: 'user@aa.io', password: 'password')
User.create(username: 'demo', email: 'demo@aa.io', password: 'password')
User.create(username: 'test', email: 'test@aa.io', password: 'password')
User.create(username: 'tyler', email: 'tyler@aa.io', password: 'password')
User.create(username: 'treichle', email: 'treichle@aa.io', password: 'password')
User.create(username: 'thegraceann', email: 'grace@aa.io', password: 'password')

nb_titles = []
5.times { nb_titles << Faker::StarWars.planet }

descriptions = []
5.times { descriptions << Faker::ChuckNorris.fact }

Notebook.create(
  author_id: 2,
  title: 'Personal Notes',
  description: 'personal stuff here'
)

Notebook.create(
  author_id: 2,
  title: 'Work Notes',
  description: 'Notes from Work'
)

(0..4).each do |idx|
  Notebook.create(
    author_id: 2,
    title: nb_titles[idx],
    description: descriptions[idx]
  )
end

Note.create(
  title: "Algorithms",
  body: '{"entityMap":{},"blocks":[{"key":"9ec8t","text":"Singly Linked List:","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4ch9m","text":"like unary tree, pointers to next element","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4q48","text":"easy to delete, just change pointers, element garbage collected","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4oee5","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7ifaa","text":"Doubly Linked List:","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"10ci7","text":"@prev","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6dppl","text":"@next","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2mn1v","text":"@head and @tail sentinel nodes (always exit)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"odr9","text":"deletion and insertion in O(1) time","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1qhas","text":"finding index is O(n)\n","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"er97u","text":"Hash Map:","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eiip1","text":"each bucket is a linked list with key, value pairs","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6ims6","text":"send key through hash function % #buckets","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9jkm4","text":"change #buckets when max density reached","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4j14t","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5u6hb","text":"In Place Quick-sort:","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"18cmp","text":"regular solution creates new array for each recursive call","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8t9k","text":"swap with first element to right of partition","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d42s3","text":"swap pivot with element to left of partition","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"507ud","text":"modifying the input array","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9gul5","text":"how to choose the pivot? (O(n) with already sorted array)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a33qg","text":"random pivot —> O(nlogn) = more robust","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6dij4","text":"does take up some space in the call stack","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bqn30","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4ipqs","text":"Binary Search Tree:","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8qdo9","text":"O(logn) for insert, find, delete","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ecvbi","text":"all nodes are BSTs","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1au54","text":"nodes on left are < root, nodes on right are > root","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fp8l6","text":"find, insert —> # decisions determined by depth of tree —> O(depth)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bl2hj","text":"delete —> replace w/ max in left subtree —> right as far as possible O(depth)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9medv","text":"Hibbard Deletion","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6mr9t","text":"worst case —> all elements on same side O(n)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3nf8s","text":"Balanced BST —> O(logn)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e61fm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
  author_id: 2,
  notebook_id: 4
)

Tag.create(name: 'tagOne', author_id: 2)
Tag.create(name: 'tagTwo', author_id: 2)

TaggedNote.create(note_id: 1, tag_id: 1)
TaggedNote.create(note_id: 1, tag_id: 2)

# titles = []
# 25.times { titles << Faker::Zelda.character }
#
# bodies = []
# 25.times { bodies << Faker::Hipster.paragraph }
#
# (0..24).each do |idx|
#   Note.create(
#     title: titles[idx],
#     body: bodies[idx],
#     author_id: 2,
#     notebook_id: 1
#   )
# end
