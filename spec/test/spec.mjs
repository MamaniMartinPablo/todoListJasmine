// ? ToDoList

import ToDoList from "../../src/index.mjs"

describe('La clase ToDoList', () => {
    it('Debe ser una clase',() => {
        expect(typeof ToDoList.prototype.constructor).toBe("function")
    })
    it('Debe tener implementado el metodo getTodos()',() => {
        const lista = new ToDoList()
        expect(lista.getTodos).toBeDefined()
    })
    it('Debe tener implementado el metodo addTodo()',() => {
        const lista = new ToDoList()
        expect(lista.addTodo).toBeDefined()
    })
    it('Debe tener implementado el metodo deleteTodo()',() => {
        const lista = new ToDoList()
        expect(lista.deleteTodo).toBeDefined()
    })
    it('El metodo getTodos() debe retornar un array', () => {
        const lista = new ToDoList()
        expect(Array.isArray(lista.getTodos())).toBeTrue()
    })
    it('El metodo addTodo() debe agregar un nuevo elemento', () => {
        const lista = new ToDoList()
        lista.addTodo("Realizar los ejercicios del dia")
        expect(lista.getTodos()).toContain("Realizar los ejercicios del dia")
    })
    it('El metodo deleteTodo() debe eliminar la ultima tarea', () => {
        const lista = new ToDoList()
        lista.addTodo("A")
        lista.addTodo("B")
        lista.addTodo("C")
        lista.deleteTodo()
        expect(lista.getTodos()).toContain("A")
        expect(lista.getTodos()).toContain("B")
        expect(lista.getTodos()).not.toContain("C")
    })
})