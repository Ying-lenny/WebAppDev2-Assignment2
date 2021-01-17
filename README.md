## Assignment 2 - Web API.
Name: Owen Lenihan

## Features.
...... A bullet-point list of the ADDITIONAL features you have implemented in the API THAT WERE NOT IN THE LABS ......,

Feature 1 - Helmet support
## Installation Requirements
Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json).

Describe getting/installing the software, perhaps:

git clone https://github.com/Ying-lenny/WebAppDev2-Assignment2
followed by installation

git install
npm install

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an .env and what variables to put in it. Give an example of how this might be structured/done. REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY= tmdb key
mongoDB=mongodb+srv://<username>:<your_password>@cluster0.ld9tg.mongodb.net/<DBName>?retryWrites=true&w=majority
SEED_DB=true
SECRET=YourJWTSecret
```

## API Design
Give an overview of your web API design, perhaps similar to the following:

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A | N/A | N/A  
| /api/movies/upcoming | Gets list of upcoming movies| N/A | N/A | N/A
| /api/movies/popular | Get list of popular movies | N/A | N/A | N/A
| /api/movies/now_playing | Get list of now playing movies | N/A | N/A | N/A
| /api/people | Get list of people | N/A | N/A | N/A
| /api/people/:id | Get a person | N/A | N/A | N/A
| /api/users | Get list of users | User Authentication | N/A | N/A
| /api/users/userNames/favourites| List user's favourites | Add movie to user's favourites | N/A | N/A
...	...	...	...	...
If you have your API design on an online platform or graphic, please link to it (e.g. Swaggerhub).

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
+ Added simple password validation for registration and login
+ Installed helmet npm module
+ Restricted access to Users only using schema
+ Protecting server routes with passport authentication 

## Integrating with React App
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example:

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  }; 
  ~~~

## Extra features
+ Added Helmet - to express to help improve secuirity

## Independent learning.
. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .
