import { Component, View, bootstrap } from 'angular2/angular2';

// Child component definition
@Component({
	selector: 'child'
})

@View({
	templateUrl: 'parent-child/child.html'
})

class ChildComponent {
	message: string;
	constructor() {
		this.message = 'and this is the message from your child!';
	}
}


// Parent component definition
@Component({
	selector: 'parent'
})

@View({
	templateUrl: 'parent-child/parent.html'
	directives: [ChildComponent]
})

class ParentComponent {
	message: string;

	constructor() {
		this.message = 'Hello from your Parent';
	}
}

bootstrap(ParentComponent);
