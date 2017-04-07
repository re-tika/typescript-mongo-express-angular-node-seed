# Installation

First, get the code using

```
git clone https://github.com/bersling/typescript-mongo-express-angular.io-node-seed.git project-name
cd project-name
git submodule init
git submodule update
```

Then, since backend and frontend are well separated through a REST-API,
they are also installed separately.

## Backend Setup
To install & run the backend run
```
cd backend && npm install
npm start
```
or alternatively to `npm start`, for running the tests:
```
npm test
```

## Frontend Setup
The frontend is suggested to be setup with [Angular Cli](https://github.com/angular/angular-cli).
Like this you're also at Angular's newest version (Angular 2, Angular 4, Angular 5, ...).
Refer to the Angular-Cli docs for more information.

In case you're not into Angular, you could also just use any other
frontend architecture, since the backend is just a REST-API to consume.
For example you could go with ReactJS & Redux, or no framework at all!

## Models / Shared Code
One advantage of using NodeJs in the backend, is that front- and backend
can share pieces of code. One example where it's pretty obvious that
sharing makes sense are the data-models. Since backend and frontend should
run independently (e.g. if you just want to send someone the backend code),
this shared code is a separate npm library. Like this, the backend / frontend
just pull the models from `npm` and can run totally independently, while still
writing the code only once. Of course, having to `npm version patch` and
`npm publish` the models all the time in order to use them in the backend / frontend
is a bit annoying, that's the tradeoff of modular code.


# Development

The project is split into subprojects that can be developed independently.
Those subprojects are the `backend`, `frontend` and
`models`.

## Backend-Development
The backend is a separate git submodule and is located at `backend`.
To get going, install as described above, then start a server with
```
npm start
```
or run the tests using
```
npm test
```


For further details, consult the backend repository's readme.

## Frontend-Development
See [Angular Cli](https://github.com/angular/angular-cli).


## Models
Since both the backend and the frontend are using the same data-structure,
the data-models are stored and maintained independently.

In order to write new models, add a new `my-model.model.ts` file and
export it in `index.d.ts`. Once you're done, you can `npm version patch`
and then `npm publish`. Like this the models are retrievable by `npm`
in the backend- and frontend-projects, in order for them to be truly separated into their own git repos.
