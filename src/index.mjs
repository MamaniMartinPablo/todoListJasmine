export default class ToDoList{
    constructor(){
        this.todoList =[] 
    }
    deleteTodo(){
        this.todoList.pop()
    }
    getTodos(){
        return this.todoList
    }
    addTodo(todo){
        return this.todoList.push(todo)
    }
    
}
