# Recrutiment task - Allegro Spring TECH e-Xperience 2022

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A web application that displays lists the repositories of any GitHub user.
It consists of two main components:

1. A form that allows you to enter a GitHub username (e.g. Allegro)
2. List of repositories of the searched user sorted by popularity (number of
   stars)

---

## Installation

To clone and run this application, you'll need **Git and Node.js** installed on your computer. From your command line:

```sh
# Clone this repository
$ git clone https://github.com/KlaudiaDabrowska/recruitment-task-allegro

# Go into the repository
$ cd allegro-app

# Install dependencies
$ npm install

# Run the app
$ npm start

```

#### Open app in the browser

Open [http://localhost:3000]

---

## Comments
1. Validation includes characters such as "." and ".." as the application is run on localhost, these characters can make that:


   ⋅⋅⋅user stay on the same view even though entered the user name
   
   
   ⋅⋅⋅user move to the parent directory of the current directory, or the directory one level up from the current directory.

2. If user is not found or user has no repository - appropriate errors will be displayed

3. When sending a link to a friend (e.g [localhost:3000/repositories/allegro]), the name of the searched user will be displayed in the input (e.g allegro), so that the friend knows whose repo it is.

---

**TODO**: Add pagination. The default max items per page are 100. When someone has more repos, they do not appear on the application
