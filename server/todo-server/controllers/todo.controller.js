import todoService from './../services/todo.service';

/**
 * 
 * @param  request 
 * @param  response todos
 * return all todos when /todos is requested with GET
 */
const index = (request, response) => {
    todoService.search({})
        .then((todos) => {
            response.status(200);
            response.json(todos);
        })
        .catch(handleError(response));
};

/**
 * 
 * @param {/todos/id} request 
 * @param {todo} response 
 * search todo by ID and return todo
 */
const get = (request, response) => {
    const id = request.params.id;
    todoService.get(id)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

/**
 * 
 * @param {/todo/id} request 
 * @param {todo} response 
 * return newly created todo using json body for POST 
 */
const create = (request, response) => {
    const newTodo = Object.assign({}, request.body);
    todoService.create(newTodo)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

/**
 * 
 * @param {updated json obj for /todo/id} request 
 * @param {updated todo} response 
 * update the last modified date and replace existing todo with new todo content 
 * after searching the todo using id for PUT
 */
const update = (request, response) => {
    const id = request.params.id;
    const updateTodo = Object.assign({}, request.body);
    let currentdate = new Date();
    updateTodo.lastModifiedDate = currentdate;
    todoService.update(id, updateTodo)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

/**
 * 
 * @param {/todo/id} request 
 * @param {success message for DELETE} response 
 */
const remove = (request, response) => {
    const id = request.params.id;
    todoService.remove(id)
        .then((todo) => {
            response.status(200);
            response.json({
                message: "Delete Successful"
            });
        })
        .catch(handleError(response));
};

/**
 * 
 * @param {return error message} response 
 */
const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

/*
mapping for export
*/
export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}