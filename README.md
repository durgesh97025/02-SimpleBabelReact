# 02-SimpleBabelReact
A simple example to understand how babel compile react source code

To install the node modules
> npm install

To compile the react code from src folder to ES6
> npm run buildReact

or

> npx babel src --out-dir reactCompiled --presets @babel/preset-react

To compile the reactCompiled folder JS to ES5
> npm run buildES6

or

> npx babel src --out-dir reactCompiled --presets @babel/preset-env

To compile directly from React code to ES5
> npm run build

or

> npx babel src --out-dir reactCompiled --presets @babel/preset-react,@babel/preset-env

The command show above is written in package.json

The example just show how babel uses presets to compile react code to es5

### Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
