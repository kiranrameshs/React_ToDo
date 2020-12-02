# Assignment 8

#### ToDo Rest APIs using NodeJs, Mongoose, MongoDb, Express

  - fetch all existing todo items using Todo Resource
  - add a todo item using Todo Resource
  - update a todo item using Todo Resource
  - delete a todo item using Todo Resource
  
  ToDo Object Attributes:
  - id
  - title
  - description
  - createdDate
  - lastModifiedDate

#### Approach!
  - Controller, models, Routes, Services
  - Develop REST APIs 
  

#### Installation
1. Clone the repository `git clone
2. Navigate to project directory.
3. Run `npm install`.
4. Install Chrome/Firefox to view the running application
5. Install visual StudioCode/ IntelliJ to view to source Code.


#### Run
1. npm run dev (builds, runs the bin from the dist folder)


#### Test Cases
Use PostMan to test the REST APIs on GET, PUT, POST, DELETE
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