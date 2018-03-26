# todos-api

## Technology
- MongoDB
- NodeJS

## Setup
### c9
1. Sign up for a free account at c9.io
2. Create a new workspace
3. name the workspace "my-rest-api" and choose the "blank" template

### setup mongodb
1. open a terminal (right click, open terminal here) at your root folder, i.e. "my-rest-api"
2. install MongoDB using the command
  - sudo apt-get install -y mongodb-org
3. make a new folder at your root folder called "data", i.e. mkdir data
4. run the following commands
  - echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
  - chmod a+x mongod
5. mongod can be run using ./monogd and closed using "ctrl + C"
6. you should see the line "[initandlisten] waiting for connections on port 27017" if installation is successful

### clone repository
1. open a new terminal at the root folder
2. run this command to clone the directory
  - git clone https://github.com/dylantey/todos-api

### Install necessary dependencies
1. change into [username]:~/workspace/todos-api, cd todos-api
2. run the following command
  - npm install --save express mongoose@4.10.8 body-parser
  - npm install --save-dev nodemon

### Install Postman
1. install postman on your computer at https://www.getpostman.com/apps
  
## Run the program
1. open a terminal at root node and run ./mongod
2. open a new terminal and cd into [username]:~/workspace/todos-api
3. run "npm start"
