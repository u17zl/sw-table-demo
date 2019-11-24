# Star Wars Table

This is a test of creating a react table components by the [The Star Wars API(https://swapi.co)](https://swapi.co)  
[Live Demo (https://u17zl.github.io/sw-table-demo)](https://u17zl.github.io/sw-table-demo)

## How to run

```sh
cd sw-table-demo
npm install
npm start
```

then you can access `127.0.0.1:3000` to see how it works

## Tech stacks

- React.js
- Redux
- TypeScript
- axios
- Scss
- Material-UI

## Highlight & Challenges

- The Star Wars API(https://swapi.co) does not support `CORS`(no related headers in response), so I used a CORS agent(https://cors-anywhere.herokuapp.com) to access this API.
- I customized and overrided the origin Material-UI theme from blue theme to company's theme(`#18cdb6`, `#ff811a`)
- Querying list of films needs Promise.all() to make sure each promise is solved, I used axios.all instead.
- Redux suites(react-redux, redux-thunk, redux-devtools)
- TypeScript for type checking
- Loading animation for waiting response. Sometimes The Star Wars API responses in a very long time.

## To Do

- [ ] Unit Test
- [ ] Redux-saga
- [ ] Responsive design
