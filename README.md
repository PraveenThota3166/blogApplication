# blogApplication
We can write our own blog
he goal of this project is to create a Blog web application using Node.js, Express.js, and EJS. The application will allow users to create and view blog posts. Posts will not persist between sessions as no database will be used in this version of the application. 
Features
1. Post Creation: Users will be able to create new posts.

2. Post Viewing: The home page will allow the user to view all their posts.

3. Post Update/Delete: Users can edit and delete posts as needed.

Logic for Post Creation: I have used arrays for storing the title and content of the posts.  After the submit button is clicked i will receive them from body parser and push it into arrays and render it again.



Logic for Delete Post:  I have added an hidden input that will give the index of the post deleted and i will delete it from the array by using splice function and re render it.


Logic for Edit Post: I have added an hidden form initially.  When the edit button is clicked it will be unhidden.  After that i will pass the index to be edited and information and render the file again.
Simple but great UI.
