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
// Child component definition
var ChildComponent = (function () {
    function ChildComponent() {
        this.message = 'and this is the message from your child!';
    }
    ChildComponent = __decorate([
        angular2_1.Component({
            selector: 'child'
        }),
        angular2_1.View({
            templateUrl: 'parent-child/child.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
})();
// Parent component definition
var ParentComponent = (function () {
    function ParentComponent() {
        this.message = 'Hello from your Parent';
    }
    ParentComponent = __decorate([
        angular2_1.Component({
            selector: 'parent'
        }),
        angular2_1.View({
            templateUrl: 'parent-child/parent.html',
            directives: [ChildComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
})();
angular2_1.bootstrap(ParentComponent);
