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

titles = []
25.times { titles << Faker::Zelda.character }

bodies = []
25.times { bodies << Faker::Hipster.paragraph }

(0..24).each do |idx|
  Note.create(
    title: titles[idx],
    body: bodies[idx],
    author_id: 2,
    notebook_id: 1
  )
end
