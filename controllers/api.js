exports.install = function () {
    CORS();
    ROUTE('GET       /todos/list/                     *Todos   --> list');                     // list todos
    ROUTE('POST      /todos/create/                   *Todos   --> create');                   // create new todo
    ROUTE('GET       /todos/read/{id}/                *Todos   --> read');                     // read specific todo
    ROUTE('PUT       /todos/update/{id}/              *Todos   --> update');                   // update todo
    ROUTE('DELETE    /todos/remove/{id}/              *Todos   --> remove');                   // update todo
    ROUTE('GET       /todos/toggle/{id}/              *Todos   --> done');                     // read specific todo
}