# School Application UI

This is a React-based user interface for a school application. It allows users to add scores, view scores, and check averages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/school-ui.git
    cd school-ui
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:
```sh
npm start
```

This will start the application on `http://localhost:3000`.

To build the application for production, run:
```sh
npm run build
```

## Available Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm test`: Runs the test suite.

## Project Structure

```
school-ui/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AverageScores.js
│   │   ├── CumulativeAverages.js
│   │   ├── Navbar.js
│   │   ├── ScoreForm.js
│   │   ├── ScoreList.js
│   │   └── TopScores.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .babelrc
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

## Dependencies

- `axios`: ^1.6.2
- `bootstrap`: ^5.3.2
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.20.0

## Dev Dependencies

- `@babel/core`: ^7.23.5
- `@babel/preset-env`: ^7.23.5
- `@babel/preset-react`: ^7.23.3
- `babel-loader`: ^9.1.3
- `css-loader`: ^6.8.1
- `html-webpack-plugin`: ^5.5.3
- `style-loader`: ^3.3.3
- `webpack`: ^5.89.0
- `webpack-cli`: ^5.1.4
- `webpack-dev-server`: ^5.2.0