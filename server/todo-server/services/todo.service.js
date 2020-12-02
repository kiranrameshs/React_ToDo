import Todo from './../models/todo';

/*
use the filter such as id to find todo and return the promise containing the obj
*/
const search = (filter) => {
    const promise = Todo.find(filter).exec();
    return promise;
};

/*
use the filter such as id to find todo and return the promise containing the obj
*/
const get = (id) => {
    const promise = Todo.findById(id).exec();
    return promise;
}

/*
Create new todo
*/
const create = (newTodo) => {
    const todo = new Todo(newTodo);
    const promise = todo.save();
    return promise;
}

/*
update existing todo using findByIdAndUpdate of mongoose
*/
const update = (id, updatedTodo) => {
    let currentdate = new Date();
    updatedTodo.lastmodifiedDate = currentdate.toLocaleString();
    console.log(updatedTodo)
    const promise = Todo.findByIdAndUpdate(
        { _id: id },
        updatedTodo,
        { new: true }
    ).exec();
    return promise;
}

/*
delete todo using id as filter
*/
const remove = (id) => {
    const promise = Todo.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove
}