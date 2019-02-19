# Viamericas Full Stack Technical Challenge

Hi! Welcome to the Viamericas Full Stack Technical Challenge. We are looking forward to your awesome and creative submission! 

```Note: Depending on the position you are applying for, you might have been asked to complete either the `server` or `front-end` or all parts of this challenge. In all cases you will be provided with the necessary instructions and requirements to complete the tasks.```

You have `2 days` to complete this challenge from the day it is sent. Please let us know if you need more time. 


# Setup Instructions

1. Start by creating a git repository on your github profile for your submission. Alternatively you can fork the following repository. `https://github.com/Viamericas/Viamericas-Technical-Challenge`
2. If you clone the repository, make sure to change its `remote` and upload it to your github profile. Once you have completed, please email us a link to the repository.
3. Additional points if you make modular commits and include proper commit messages along the way.
4. Please work on the folders included, based on which part you are going to do.


# General Instructions and Guidelines

1. Be creative! 
2. We love clean/modular code :) 
3. If you have any questions, feel free to ask at any time.
4. Good luck!

# FRONT-END

## Intructions 

1. You are requested to create a front end web/mobile application, using React or React Native. 
2. You may choose a state management library. 
3. You may use any UI components. Please do not forget to put a link to it.
4. In goes without saying, please use ES6 features whereever possible.
5. You can use `create-react-app` or `create-react-native-app` to help you get started.


## User Stories

You have to complete three users story for this sprint: 

1. Create and setup a new application. 
2. Implement user login.
3. Implement a screen to show a list of agencies, differenciated by color to show which are closed. 
This is a screen with a table view, that lists the agenies. 
User is required to sort by 

## APIs

1. Authentication
Endpoint for user authentication.

URL: POST `https://v45hh4g3q5.execute-api.us-east-1.amazonaws.com/Dev/authentication`
Body: `{ "username": "techuser", password: "TechUser123"}`

2. List Agencies 
Endpoint to list agencies.

URL: GET `https://v45hh4g3q5.execute-api.us-east-1.amazonaws.com/Dev/agencias`
HEADER: `Authorization Bearer [token]`

# SERVER

## Instructions

1. Create a back end application in C# .NET, that exposes two APIs.
2. It is recomended you use .NET Core, but you can also use .NET Framework.
3. The APIs should return valid `JSON Objects` and `HTTP Status Codes`.


## User Stories

1. Setup Database

You are free to use any database (relational or document based)
You are required to take the output from:

First Authenticate using: 

URL: POST `https://v45hh4g3q5.execute-api.us-east-1.amazonaws.com/Dev/authentication`
Body: `{ "username": "techuser", password: "TechUser123"}`

Then: 

URL: GET `https://v45hh4g3q5.execute-api.us-east-1.amazonaws.com/Dev/agencias`
HEADER: `Authorization Bearer [token]`

Create a new database (with normalization if required) with the data. You can then use this database for the rest of the project.
Export the database (including schema) to `.sql` and include it in the project repository.

2. List Agencies. 
We need an API to show the list of agencies. This will return all agencies in the database. The API will accept a `filter by` parameter for `cities`. 

3. List of cities.
We need an API to show the list of cities where the agencies reside. 
