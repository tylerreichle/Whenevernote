## Schema Information

### users

| Column Name |	Data Type |	Details |
|----------|------------|---------|
| `id` |	`integer` |	`not null, primary key` |
| `username`	| `string` | `not null, indexed, unique` |
| `email`	| `string`	| `not null, indexed, unique` |
| `password_digest`	| `string`	| `not null` |
| `session_token`	| `string`	| `not null, indexed, unique` |

### notes

| Column Name | Data Type |	Details |
|-------------|-----------|---------|
| `id` |	`integer` |	`not null, primary key` |
| `title` |	`string` |	`not null` |
| `body` |	`text` |	`not null` |
| `author_id` |	`integer` |	`not null, foreign key (reference to users), indexed` |
| `notebook_id` |	`integer` |	`not null, foreign key (reference to notebooks), indexed` |

### notebooks

| Column Name |	Data Type |	Details |
|-------------|-----------|----------|
| `id` |	`integer` |	`not null, primary key` |
| `author_id` |	`integer` |	`not null, foreign key (reference to users), indexed` |
| `title` |	`string` |	`not null` |
| `description` |	`string` |

### tags

| Column Name |	Data Type |	Details |
|-------------|-----------|---------|
| `id` |	`integer` |	`not null, primary key` |
| `name` |	`string` |	`not null` |

### tagged_notes - Join Table (tags and notes)

| Column Name |	Data Type |	Details |
|-------------|-----------|---------|
| `id` |	`integer` |	`not null, primary key` |
| `note_id` |	`integer` |	`not null, foreign key (reference to notes), indexed` |
| `tag_id` |	`integer` |	`not null, foreign key (reference to tags), indexed` |
