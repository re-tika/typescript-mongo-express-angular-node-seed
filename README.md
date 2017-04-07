# Installation

First, get the code using

```
git clone https://github.com/bersling/typescript-mongo-express-angular.io-node-seed.git project-name
cd project-name
git submodule init
git submodule update
```

Then, since backend and frontend are separate projects,
they are also installed separately.

To install & run the backend run
```
cd backend && npm install
npm start
```
or alternatively to `npm start`, for running the tests:
```
npm test
```

The frontend is suggested to do with [Angular Cli](https://github.com/angular/angular-cli), therefore no code
needs to be commited here. Like this you're also at Angular's newest (Angular 2, Angular 4, Angular 5, ...). In order to setup a new frontend project
with the angular-cli, first install the cli:
```
npm install -g @angular/cli
```

and then create a new project
```
ng new <project-name>-frontend
```

However, just refer to the Angular Cli Docs.


# Development

The project is split into subprojects that can be developed independently.
Those subprojects are the `backend`, `frontend` and
`models`.

## Backend-Development
The backend is a separate project and is located at `backend`.
To get going, install as described above, then start a server with
```
npm start
```
or run the tests using
```
npm test
```

The tests can be run with `npm test`.
They are located in the same folders as the actual code lives!
This makes the components more self-contained.

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
