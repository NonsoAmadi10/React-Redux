# simple-react-app

[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

But you still get it.

Simple base app with react, react-router v4, hot-reload &amp; sass.

`npm i -g simple-react-app` to install the package.

`simple-react-app folderName` to start the boilerplate into `folderName` folder.

Or if you're using `npm@5.2.0` or above, you can simply run `npx simple-react-app folderName`, without the need to install the package globally.

## What is this?
- This is a simple POST app I created using redux and react. The features in this app include 'Fetchin Post' from a fake rest [JSON API](https://jsonplaceholder.typicode.com/posts) and 'adding a new post'. It was bootstrapped using 'Simple-react-app'

## Project structure

The boilerplate structure and files are the same as this repo minus the *bin* folder, everything else is exactly the same.

```
*root*
|
├── */src/*
│   ├── */assets/* where images and stuff are stored
│   ├── */containers/* react-router jsx pages
│   ├── *App.jsx* main layout
│   ├── *Routes.jsx* front-end routes
│   ├── *index.html* entry point
│   ├── *index.jsx* javascript entry point
│   ├── *style.scss* styling
│   └── */tests/* contains test environment (Jest + Enzyme)
│       ├── */__mock__/* contains setup to provide a valid path for imports
│       ├── */_tests__/* the actual tests
│       └── *setup.js* setup for enzyme for react 16
├── *package.json* the whole package.json with every dependency and script, nothing is kept hidden
├── *.eslintrc* eslint config
├── *.babelrc* babel config (polyfills)
├── *webpack.config.js* webpack config, it has a dev and prod environment
└── *README.md* this file
```


## Tests

The testing environment is written in Jest and Enzyme.
The included tests are very basic and only check the proper render of base components + routes, there are no snapshot tests, I did not feel they were needed being the components really basic, at the first change they would need to be updated, imho setting the wrong approach of _"hey tests are broken, let's regenerate snapshots again"_.
While still basic, the default tests are easy to manage and expand, providing a smoother curve into testing with JavaScript and React.


## Eslint

This project uses AirBnB Javascript specs so you can write error-free react and javasctipt code, if you use Visual Studio Code, you can install eslint from the extension tab to activate this function, other editors just google _name of the editor + eslint_ you will find how to enable it for your editor.



