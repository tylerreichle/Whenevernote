## Whenevernote

[Heroku](www.heroku.com)

[Trello](https://trello.com/b/SQD6TvvD/full-stack-project)

### Minimum Viable Product

Whenevernote is a full-stack web application inspired by Evernote built using Ruby on Rails and React/Redux. Whenevernote allows users to take notes, create to-do lists, and quickly write down their thoughts. These notes can be tagged and stored in notebooks for quick lookup whenever they needed.

* New account creation, login, and guest/demo login
* A production README
* Hosting on Heroku
* Notes
* Notebooks to organize Notes
* Tags to categorize Notes
* Rich-Text Editing

##### Bonus Features:

* Auto-Save
* Reminders
* User Chat
* Multiple Sessions

## Design Docs

* [View Wireframes](./docs/wireframes)
* [React Components](./docs/component-hierarchy.md)
* [API endpoints](./docs/api-endpoints.md)
* [DB schema](./docs/schema.md)
* [Sample State](./docs/sample_state.md)

### Implementation Timeline

#### Phase 1: Rails back end setup and User Authentication (2 days)

**Objective:** Functioning Ruby on Rails project with necessary routes, models, controllers, and database seeds. User Authentication in the front and back end.

#### Phase 2: Notes API and components (2 days)

**Objective:** Notes can be created, read, updated and destroyed using the API. This will be accomplished by creating appropriate actions, reducers, and components.

#### Phase 3: Notebooks API and components (2 days)

**Objective:** Notebooks will have many notes, Notebooks can be created, read, updated, and destroyed using the API. This will be accomplished by creating appropriate actions, reducers, and components.

#### Phase 4: Tags API and components (2 days)

**Objective:** Notes can be tagged with multiple tags. Tags will be searchable and list all tagged notes.

#### Phase 5: Rich-Text Styling in Notes (1 day)

**Objective:** Allow rich text editing of notes and creation of lists.

#### Phase 6: - Pagination on Notes Index, Any additional CSS (1 day)

**Objective:** Add infinite scroll to Notes Index and searches, add final touches to make site pixel perfect

#### Bonus Features (TBD)

* Auto-Save Notes while editing
* Create Reminders for Notes
* User Chat
* Multiple Sessions
