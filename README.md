# todos-api

## Technology
- MongoDB
- NodeJS

## Setup
###c9
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
