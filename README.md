# nashorn-webpack-react-redux-boilerplate #

Boilerplate featuring;
  - Server rendering using Nashorn.
  - Server built with Spring Boot.
  - JavaScript application built with react, redux, react-router.
  - JavaScript packaged with Webpack.
  - JavaScript tests with mocha & chai.
  - Local express development server with hot reloading.

## Instructions ##

### Working locally on the React app ###

`cd src/main/webapp/react-app`

Navigates to React app working directory.

`npm install`

Installs node dependencies.

`npm start`

Starts up a local dev server listening on http://localhost:3000/app.

Supports hot reloading (i.e. won't require refresh after changing React components, etc).
     
`npm run test`

Runs unit tests once.
     
`npm run test-watch`

Runs unit tests in a TDD style, will auto re-run tests when you save files.
     
`npm run build`

Will build the JS with webpack (not a manually required step, see next section).
     
### Building the JAR ###

`mvn clean package`

Building with maven will download and install node, run the tests, build React app with webpack and then package it all up into a JAR.