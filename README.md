# React Movie Cards

A basic application that displays a list of movies as a list of cards. Each card provides movie detail such as title, subtitle, description, image, and rating.

Go **[here](http://react-movie-cards.drminnaar.me/)** for live demo.

This is a good example of using nested components because it illustrates a nesting of components 3 levels deep. A _Movie_ component has a _MovieList_ component has a _MovieCard_ component has a _StarRating_ component. The _Movie_ component also uses a service called _MovieService_ to retrieve a list of movies (this is from a json document).

Futhermore, I have configured webpack to make use of the [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) to copy images into the _public_ folder. I have also included the [json-loader](https://www.npmjs.com/package/json-loader) to load my movie collection from a json file called movies.json.

For styling, I have adopted bootstrap4 beta. I use SCSS for all custom written styles.

The application is composed of the following components:

* Header - A heading that displays application title

* Movies - The primary (root) component that manages state for Movies and all underlying components. It is also responsible for connecting to _MovieService_ to retrieve movie data

* MovieList - Groups a collection of movies

* MovieCard - Represents a single instance of a movie

* StarRating - Indicates average rating of a movie as a list of 5 stars

Component Diagram
![Component Diagram](https://user-images.githubusercontent.com/33935506/34461060-3526427a-ee29-11e7-8e1c-03f91507c184.png)

The following services are used to obtain movie data:

* MovieService - A wrapper that retrieves data from a json file containing a list of movies

Service Diagram
![Service Diagram](https://user-images.githubusercontent.com/33935506/34461059-34f6e87c-ee29-11e7-9678-848e3e3ffee9.png)

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration

**Screenshots:**

![react-movie-cards-1](https://user-images.githubusercontent.com/33935506/33792483-dc335206-dca9-11e7-8f5d-420dc2ce262d.PNG)
![react-movie-cards-2](https://user-images.githubusercontent.com/33935506/33792484-dc73ffc2-dca9-11e7-91a7-829f6df41648.PNG)
![react-movie-cards-3](https://user-images.githubusercontent.com/33935506/33792485-dcb96fda-dca9-11e7-96fd-6c26435d94ce.PNG)

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Surge] - Static web publishing for Front-End Developers

---

## Related Projects

* [react-starter]

  A basic template that consists of the essential elements that are required to start building a React application

* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A basic countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-movie-cards'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-movie-cards.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-movie-cards.git
  ```

* Install node modules

   ```bash
   cd react-movie-cards
   npm install
   npm dedupe
   ```

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-movie-cards/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[Surge]: https://surge.sh/
[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard