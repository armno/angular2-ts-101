import { Component, View,	bootstrap, For } from 'angular2/angular2';

@Component({
	selector: 'display',
	injectables: [FriendsService]
})

@View({
	templateUrl: 'profiles/profiles.html',
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
