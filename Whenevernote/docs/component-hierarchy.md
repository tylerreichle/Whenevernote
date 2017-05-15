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
|"/sign-up" |	"AuthFormContainer" |
|"/sign-in" |	"AuthFormContainer" |
|"/home" |	"HomeContainer" |
|"/home/note/:noteId" |	"NotesContainer" |
|"/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
|"/home/tag/:tagId/" |	"TagContainer" |
|"/home/search-results" |	"SearchResultsContainer" |
|"/new-note" |	"NewNoteContainer" |
|"/search" |	"NoteSearch" |
|"/new-notebook" |	"NewNotebook" |
|"/new-tag" |	"NewTag" |
|"/tag-search" |	"TagSearch" |
|"/notebook-search" |	"NotebookSearch" |
