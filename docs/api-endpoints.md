## API Endpoints

### HTML API

#### Root
Load root file with React App
* `GET /`

### JSON API

#### Users
User Sign Up and Edit account details

* `POST /api/users`
* `PATCH /api/users`

#### Session
Sign In and Sign Out functions

* `POST /api/session`
* `DELETE /api/session`

#### Notes
View all Notes, a single Note, and Note CRUD functionality

* `GET /api/notes`
* `GET /api/notes/:id`
* `POST /api/notes`
* `PATCH /api/notes/:id`
* `DELETE /api/notes/:id`

#### Notebooks
View all Notebooks, a single Notebook, and all Notes belonging to single Notebook
Notebook CRUD functionality

* `GET /api/notebooks`
* `GET /api/notebooks/:id`
* `GET /api/notebooks/:id/notes`
* `POST /api/notebooks`
* `PATCH /api/notebooks/:id`
* `DELETE /api/notebooks/:id`

#### Tags

Tags will be shown on the Note show page
Create new Tag or select from existing, Remove Tag from Note

* `GET /api/tags`
* `POST /api/notes/:note_id/tags`
* `DELETE /api/notes/:note_id/tags/:tag_id`
