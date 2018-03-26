# todos-api

## Technology
- MongoDB
- NodeJS

## Setup
### Setup up Cloud9 IDE
1. Sign up for a free account at c9.io
2. Create a new workspace
3. name the workspace "my-rest-api" and choose the "blank" template

### Setup MongoDB
1. open a terminal (right click, open terminal here) at your root folder, i.e. "my-rest-api"
2. install MongoDB using the command
  - sudo apt-get install -y mongodb-org
3. make a new folder at your root folder called "data", i.e. mkdir data
4. run the following commands
  - echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
  - chmod a+x mongod
5. mongod can be run using ./monogd and closed using "ctrl + C"
6. you should see the line "[initandlisten] waiting for connections on port 27017" if installation is successful

### Clone repository
1. open a new terminal at the root folder
2. run this command to clone the directory
  - git clone https://github.com/dylantey/todos-api

### Install necessary dependencies
1. change into [your username]:~/workspace/todos-api, cd todos-api
2. run the following command
  - npm install --save express mongoose@4.10.8 body-parser
  - npm install --save-dev nodemon

### Install Postman
1. install postman on your computer at https://www.getpostman.com/apps
  
## Run the program
1. open a terminal at root node and run 
  - ./mongod
2. open a new terminal and cd into [your username]:~/workspace/todos-api
3. run 
  - npm start
4. using postman, go to https://my-rest-api-[your username].c9users.io/tasks

## Using the program
1. using GET, navigate to https://my-rest-api-[your username].c9users.io/tasks , you would see [] as there's nothing in the database
2. using POST, navigate to https://my-rest-api-[your username].c9users.io/tasks
  - choose Body->raw->JSON (instead of text) and paste the following
  ```{
  "dropoffs": [
    {
      "day": "Monday",
      "deliveries": [
        {
          "deliveryId": 47,
          "storeId": 1,
          "restaurantName": "Nacho's Mexican Grill",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:00:00",
          "dropoff": "11:15:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": false,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 25,
          "storeId": 2,
          "restaurantName": "Jersey Mike's Subs",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:30:00",
          "dropoff": "11:15:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": false,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 34,
          "storeId": 3,
          "restaurantName": "Mort's Delicatessen",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "09:30:00",
          "dropoff": "11:35:00",
          "soldOut": false,
          "sellingOut": true,
          "isPastCutoff": false,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 87,
          "storeId": 4,
          "restaurantName": "Ham's Sandwich Shop",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:30:00",
          "dropoff": "12:00:00",
          "soldOut": true,
          "sellingOut": true,
          "isPastCutoff": true,
          "isOrderPlaced": false
        }
      ]
    },
    {
      "day": "Tuesday",
      "deliveries": [
        {
          "deliveryId": 68,
          "storeId": 5,
          "restaurantName": "Firehouse Subs",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:30:00",
          "dropoff": "11:20:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 55,
          "storeId": 6,
          "restaurantName": "Which Wich",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:30:00",
          "dropoff": "11:50:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 22,
          "storeId": 7,
          "restaurantName": "Gion Restaurant",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:30:00",
          "dropoff": "12:00:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 62,
          "storeId": 8,
          "restaurantName": "Living Waters Market & Cafe",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:15:00",
          "dropoff": "12:20:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        }
      ]
    },
    {
      "day": "Wednesday",
      "deliveries": [
        {
          "deliveryId": 39,
          "storeId": 4,
          "restaurantName": "Ham's Sandwich Shop",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "21:00:00",
          "dropoff": "11:45:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": false,
          "isOrderPlaced": false
      }
      ]
    },
    {
      "day": "Thursday",
      "deliveries": [
        {
          "deliveryId": 28,
          "storeId": 2,
          "restaurantName": "Jersey Mike's Subs",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:30:00",
          "dropoff": "11:15:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 9,
          "storeId": 9,
          "restaurantName": "Leeann Chin",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:15:00",
          "dropoff": "11:35:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 13,
          "storeId": 10,
          "restaurantName": "Erbert & Gerbert's Sandwich Shop",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:00:00",
          "dropoff": "11:55:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        }
      ]
    },
    {
      "day": "Friday",
      "deliveries": [
        {
          "deliveryId": 15,
          "storeId": 11,
          "restaurantName": "Granite City",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:15:00",
          "dropoff": "11:30:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 97,
          "storeId": 12,
          "restaurantName": "Chili's Grill & Bar",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:00:00",
          "dropoff": "11:55:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 37,
          "storeId": 13,
          "restaurantName": "Godfather's Pizza",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:15:00",
          "dropoff": "11:55:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 36,
          "storeId": 14,
          "restaurantName": "Eddington's",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:00:00",
          "dropoff": "12:00:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        },
        {
          "deliveryId": 99,
          "storeId": 15,
          "restaurantName": "Quiznos",
          "logoUrl": "https://www.placehold.it/300X200",
          "cutoff": "10:30:00",
          "dropoff": "12:00:00",
          "soldOut": false,
          "sellingOut": false,
          "isPastCutoff": true,
          "isOrderPlaced": false
        }
      ]
    },
    {
        "day": "Saturday",
        "deliveries": []
    },
    {
        "day": "Sunday",
        "deliveries": []
    }
  ]
} 
```
  - the JSON is essentially the provided JSON file
 
 ## Shortcomings
  - the JSON file contains `_id` and `__v` identifiers
  - the JSON is queried using `_id` instead of `days`, `deliveryId` and/or other unique identifiers
  - deleting an `_id` would delete the whole dropoff object instead of invididual subdocuments
 
 ## Comment
  - I had to teach myself the whole REST api theory and implementation
  - This is the product of my work that I spent half a day learning and tweaking 
