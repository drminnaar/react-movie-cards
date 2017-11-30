# React Movie Cards

A basic application that displays a list of movies as a list of cards. Each card provides movie detail such as title, subtitle, description, image, and rating. This is a good example of using nested components because it illustrates a nesting of components 3 levels deep. A _Movie_ component has a _MovieList_ component has a _MovieCard_ component has a _StarRating_ component. The _Movie_ component also uses a service called _MovieService_ to retrieve a list of movies (this is from a json document).

Futhermore, I have configured webpack to make use of the [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) to copy images into the _public_ folder. I have also included the [json-loader](https://www.npmjs.com/package/json-loader) to load my movie collection from a json file called movies.json.

For styling, I have adopted bootstrap4 beta. I use SCSS for all custom written styles.

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS

---

## Related Projects

* [react-starter]
* [react-clicker]
* [react-clock-basic]
* [react-timer-basic]
* [react-timer-advanced]
* [react-masterminds]

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

[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds