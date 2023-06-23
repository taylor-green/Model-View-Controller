# Model-View-Controller

## About the App
The Tech Blog is an application for developers to share their thoughts, opinions, and insights related to technology. Users can create an account, publish blog posts, comment on other posts, and interact with the community.

The app follows the MVC architectural pattern, separating the application into models, views, and controllers. The models define the database structure and handle data operations using Sequelize as the ORM. The views are rendered using Handlebars.js, a templating engine. The controllers handle the logic and routing of the application using Express.js.

## Features

User authentication: Users can sign up and log in to the site.
Homepage: Displays existing blog posts and provides navigation links.
Dashboard: Allows users to view, create, update, and delete their own blog posts.
Blog post page: Shows the details of a specific blog post, including comments and the option to add new comments.

## Code and Tech

Handlebars.js 
Sequelize 
Express.js 
MySQL 
JavaScript 
Node.js 


## Usage
Once the server is running and you've accessed the application in your web browser, you can use the following functionality:

Homepage: View existing blog posts, navigate to the dashboard, and log in or sign up.
Sign up: Create a new user account by providing a username and password.
Log in: Log in to an existing user account using the username and password.
Dashboard: View your own blog posts, create new posts, update or delete existing posts.
Blog post page: View the details of a specific blog post, including comments, and leave new comments.


View the finished application here: https://mvc-controller-a5ff2733b9bb.herokuapp.com/

## Acknowledgments
Handlebars.js
Sequelize
Express.js
MySQL
Node.js
dotenv
bcrypt
express-session
connect-session-sequelize