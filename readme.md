# angular2-ts-101

Learning Angular 2 from "Step by step guide" on angular.io, TypeScript version.

I have very little knowledge about ES6 and TypeScript. Bare with me.

## 1. Getting started `index.html`

- Be sure to take a look on [5 min quickstart](https://angular.io/docs/js/latest/quickstart.html) before starting this tutorial because it assumes that you know these already:
	- run `tsc --watch` on `main.ts` to transpile TypeScript into JavaScript code.
	- bringing Traceur compiler into the page

## 2. Displaying data `profiles.html`

- I typed less code than in my [ES5 version](https://github.com/armno/angular2-es5-101).
- For the first time I use [ES6 template strings](https://github.com/lukehoban/es6features#template-strings). It's just a syntax sugar and pretty convenient. But I have committed to myself to always use `templateUrl`. So this part differs from the code in the website.
- The way the app is bootstrapped looks similar with ES5 (but again, shorter), especially config objects in `Component` and `View`.
- Only `import` thing looks completely new to me. It seems that `import` brings all the modules/classes available in the later code.
- `DisplayComponent.parameters = [[FriendsService]];` is missing from ES5 version, which is cool because I have no idea what it does in ES5 version.
- A component is just an ES6 class.

### `FriendsService`

- A service is also just a class.
- I created a separated file for `FriendsService` class instead of putting everying together in `display.ts`.
- And with `SystemJS`, it's easy to bring another class in using `System.import()` function. Just pass the path of the file into `import()` function.
- SystemJS is a module loader. In this case we are loading CommonJS modules which are the output of TypeScript.
- Since we are injecting `FriendsService` to `DisplayComponent`, we need to call `System.import('services/friends')` **before** importing `DisplayComponent`
