### Component Hierarchy

##### AuthFormContainer
- AuthForm
 - ErrorsContainer
    - Errors

##### HomeContainer

- Home
- Sidebar
 - NewNoteButton
 - Search

##### NotesContainer

- NotesHeader
- NoteIndex
  - NoteIndexItem

##### NoteDetails
- Notebook
- Tags
  - Tag
- RichTextBar
- Note

##### NotebookContainer

- NotebookHeader
- NoteIndex

##### SearchResultsContainer
- NoteSearch
- NoteIndex

##### TagContainer
- NotebookHeader
- NoteIndex
- TagSearch

##### NoteIndexItem
- NoteDetail
- NoteTools
- NotebookSearch
- Tags
- Tag
- Note

##### NewNoteContainer
- NewNote
- NewNoteButton

#### Search

##### NoteSearch
- NoteIndex
- NoteIndexItem
- NoteShow

##### NotebookSearch
- NewNotebook
- AutoSearch
- AutoSearchResults

##### TagsSearch
- New Tag
- AutoSearch
- AutoSearchResults

#### Routes
| Path |	Component |
|------|------------|
|"/" |	"AuthFormContainer" |
|"/signin" |	"AuthFormContainer" |
|"/" |	"HomeContainer" |
|"/note/:noteId" |	"NotesContainer" |
|"/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
|"/tag/:tagId/" |	"TagContainer" |
|"/search-results" |	"SearchResultsContainer" |
|"/note/new" |	"NewNoteContainer" |
|"/search" |	"NoteSearch" |
|"/notebook/new" |	"NewNotebook" |
|"/tag/new" |	"NewTag" |
|"/search-tag" |	"TagSearch" |
|"/search-notebook" |	"NotebookSearch" |
