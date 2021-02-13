# Google Books Search App
## Description
 This is a React-based Google Books Search app. This is a MERN (MongoDB, Express, React, Node) stack that allows users to save books to review or purchase later.

## Overview
 * Project link: https://googlebookreactapp.herokuapp.com/
 
![main](https://user-images.githubusercontent.com/57735283/107840514-2a61a200-6d68-11eb-80a5-8a27b055f485.PNG)

### Search Page

![search](https://user-images.githubusercontent.com/57735283/107840517-2b92cf00-6d68-11eb-8280-cc9f3170426c.gif)

### Saved Page

![saved](https://user-images.githubusercontent.com/57735283/107840515-2a61a200-6d68-11eb-81f8-dd403add1850.gif)

### Link on each book

![link](https://user-images.githubusercontent.com/57735283/107840512-2897de80-6d68-11eb-90ac-d3684f09f21a.gif)


## React Components

Search Page
  Users are able to search google books by title and the page will display 10 results. Users can save a book they want to the saved page.

Saved Page
  Users can see a history of saved books. Users can also delete books off of the saved list.


## Express Routes

/api/books (get) - Should return all saved books as JSON.

/api/books (post) - Will be used to save a new book to the database.

/api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.

/api/google (get) - Should return a search to this endpoint: https://www.googleapis.com/books/v1/volumes?q=title:the%20book%title, where the q param is a string to search the google books database by book title. Notice that q is "title:"+myBookTitle

(get) - Will load a single HTML page in client/build/index.html. 


## Badges
<a href="https://img.shields.io/badge/HTML-11.7%25-red"><img alt="HTML usage" src="https://img.shields.io/badge/HTML-11.7%25-red"> <a href="https://img.shields.io/badge/JavaScript-88.3%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-88.3%25-yellow"></a> <a href="https://img.shields.io/badge/Frameworks-Bootstrap-blue"><img alt="Bootstrap framework" src="https://img.shields.io/badge/Frameworks-Bootstrap-blue"></a> <a href="https://img.shields.io/badge/Library-React-blue"><img alt="React" src="https://img.shields.io/badge/Library-React-blue"></a>

# React
Create React Express App

About This Boilerplate
This setup allows for a Node/Express/React app which can be easily deployed to Heroku.
The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

Starting the app locally
Start by installing front and backend dependencies. While in this directory, run the following command:
npm install
This should install node modules within the server and the client folder.
After both installations complete, run the following command in your terminal:
npm start
Your app should now be running on http://localhost:3000. The Express server should intercept any AJAX requests from the client.

Deployment (Heroku)
To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

