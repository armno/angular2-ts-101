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

	addTodo(todo: string) {
		this.todos.push(todo);
	}

	doneTyping($event) {
		if ($event.which === 13) {
			this.addTodo($event.target.value);
			$event.target.value = null;
		}
	}
}

bootstrap(TodoList);
