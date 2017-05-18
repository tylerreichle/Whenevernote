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
User.create(username: 'thegraceann', email: 'tyler@aa.io', password: 'password')

users = []
50.times {
  user = Faker::GameOfThrones.character
  user = user.split(' ').join('')
  users << user
}

emails = []
25.times do
  email = ''
  email << Faker::LordOfTheRings.character
  email << '@' << Faker::Hipster.word << '.com'
  emails << email.downcase
end

(0..24).each do |idx|
  User.create!(
    username: users[idx],
    email: emails[idx],
    password: 'password')
end

Note.create(title: 'title', body: 'body', author_id: 1, notebook_id: 1)
Note.create(title: 'titleTwo', body: 'bodyTwo', author_id: 1, notebook_id: 1)
