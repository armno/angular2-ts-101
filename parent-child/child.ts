import { Component, View } from 'angular2/angular2';

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

