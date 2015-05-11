if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        this.name = 'Armno';
        this.myFriends = friendsService.names;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            injectables: [FriendsService]
        }),
        angular2_1.View({
            template: "\n\t\t<p>My name is {{ name }}. I have {{ myFriends.length }} friends!</p>\n\t\t<ul>\n\t\t\t<li *for=\"#name of myFriends\">\n\t\t\t\t{{ name }}\n\t\t\t</li>\n\t\t</ul>\n\t",
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [(typeof FriendsService !== 'undefined' && FriendsService) || Object])
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
