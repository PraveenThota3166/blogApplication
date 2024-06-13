# BlogApplication

Welcome to BlogApplication, where you can create and manage your own blog posts. This project aims to build a Blog web application using Node.js, Express.js, and EJS. The application allows users to create and view blog posts. Note that posts will not persist between sessions as no database is used in this version of the application.

## Features

1. **Post Creation:** Users can create new blog posts.
2. **Post Viewing:** The home page displays all the user's blog posts.
3. **Post Update/Delete:** Users can edit and delete their blog posts as needed.

## Logic

### Post Creation

Posts are stored in arrays for titles and content. When the submit button is clicked, the data is received through body-parser, added to the arrays, and then rendered again.

### Post Deletion

Each post has a hidden input that provides the index of the post to be deleted. The post is removed from the array using the splice function, and the page is re-rendered.

### Post Editing

A hidden form is initially available for editing. When the edit button is clicked, the form becomes visible. The index and updated information are passed, and the page is rendered again.

## User Interface

The application features a simple yet great UI for an enjoyable user experience.
