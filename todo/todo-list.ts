import { Component, View, bootstrap, For } from 'angular2/angular2';

@Component({
	selector: 'todo-list'
})

@View({
	templateUrl: 'todo/todo-list.html',
	directives: [For]
})

class TodoList {
	todos: Array<string>;

	constructor() {
		this.todos = [
			'Walk the cat',
			'Plug in the cable',
			'Start recording'
		];
	}

	addTodo(todo) {
		this.todos.push(todo.value);
		todo.value = '';
	}

	doneTyping($event, todo) {
		if ($event.which === 13) {
			this.addTodo(todo);
		}
	}
}

bootstrap(TodoList);
