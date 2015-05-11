import { Component, View,	bootstrap, For } from 'angular2/angular2';

@Component({
	selector: 'display',
	injectables: [FriendsService]
})

@View({
	template: `
		<p>My name is {{ name }}. I have {{ myFriends.length }} friends!</p>
		<ul>
			<li *for="#name of myFriends">
				{{ name }}
			</li>
		</ul>
	`,
	directives: [For]
})
class DisplayComponent {
	name: string;
	myFriends: Array<string>;

	constructor(friendsService: FriendsService) {
		this.name = 'Armno';
		this.myFriends = friendsService.names;
	}
}

bootstrap(DisplayComponent);
