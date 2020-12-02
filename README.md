# Assignment 9

#### ToDo React Application using Rest APIs (NodeJs, Mongoose, MongoDb, Express)

  - fetch all existing todo items using Todo Resource
  - see detailed view of a particular Todo
  - add a Todo item using Todo Resource
  - update a Todo item using Todo Resource
  - delete a Todo item using Todo Resource
  - mark a Todo item as complete
  
  ToDo Object Attributes:
  - id
  - title
  - description
  - createdDate
  - lastModifiedDate
  - duedate

#### Approach!
  - Develop REST APIs for the server with Controller, models, Routes, Services
  - Develop Components for the Application 
  - Use fetch API to fetch data from the Nodejs server
  

#### Installation
1. Clone the repository `git clone
2. Navigate to server directory.
3. Run `npm install`
4. Navigate to todoapp directory.
5. Run `npm install`
6. Install Chrome/Firefox to view the running application
7. Install visual StudioCode/ IntelliJ to view to source Code.


#### Run
1. Navigate to server directory
2. `npm run dev` (builds, runs the bin from the dist folder) - PORT 3000 - Open [http://localhost:3000]
3. Navigate to todoapp directory.
4. Run `npm run start` - PORT 3001 - - Open [http://localhost:3001]


#### Test Cases
Use PostMan to test the REST APIs on GET, PUT, POST, DELETE for server and similar operations on the brower for e2e
  - GET localhost:3000/todos/
  - GET localhost:3000/todos/{:id}
  - POST localhost:3000/todos/  -> JSON body example
	{
	"title": "My first Todo updated",
	"description": "My first Todo"
	}
  - PUT localhost:3000/todos/{:id}
  - DELET localhost:3000/todos/{:id}


#### Dependencies
  - babel
  - cookie-parser
  - morgan
  - win-node-env
  - node-sass