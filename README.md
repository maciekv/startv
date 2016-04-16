# Title

Link [AngularJS](http://angularjs.org/) web app. 


## Subtitle 
Lorem:

* punktator
* punktator

## Getting Started

To get you started you can simply clone the angular-seed-styleguided-stylguided repository and install the dependencies:

### subsub

You need git to clone the angular-seed-styleguided repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed-styleguided

Clone the angular-seed-styleguided repository using [git][git]:

```
code example
```
or

```bash
code bash example <your-project-name>
```

### Tool Dependencies

* `npm`, the [node package manager][npm] for build deps.
* `bower`, a [client-side code package manager][bower] for app deps.

`npm` will automatically invoke bower for you.

```
npm install
```

This will result in the following third-part modules.
* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed-styleguided changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.


## Directory Layout

```
app/                    --> all of the source files for the application
  css/app.css           --> default stylesheet
  components/           --> all app specific modules
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the angular-seed-styleguided application: Unit tests and End to End tests.

### Running Unit Tests

Unit tests are written in [Jasmine][jasmine], and run with [Karma Test Runner][karma]. 

* configuration file: `karma.conf.js`
* test files are next to the code and named: `*.spec.js`.

To run, use the npm script:

```
npm test
```

Karma will run and stay running watching files for changes, then rerunning the tests.

If you just want a single run then...

```
npm run test-single-run
```


### End to end testing

The angular-seed-styleguided app comes with end-to-end tests written in [Jasmine][jasmine] and run with [Protractor][protractor].
 
* the configuration is found at `protractor-conf.js`
* the end-to-end tests are found alongside the components they are testing.

**NOTE: The webserver must be running to test it start it with:**

```
npm start
```
To test, run:

```
npm run protractor
```
 