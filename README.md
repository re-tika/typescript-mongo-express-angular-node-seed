# Installation

First, get the code using

```
git clone https://github.com/bersling/notely.git
```

Then, since backend and frontend are separate projects,
they are also installed separately.

To install & run the backend, run
```
cd notely-be && npm install
npm start
```

The frontend is suggested to do with Angular-CLI, therefore no code
needs to be commited here. In order to setup a new frontend project
with the angular-cli, first install the cli:
```
npm install -g @angular/cli
```

and then create a new project
```
ng new notely-fe
```


# Development

The project is split into subprojects that can be developed independently.
Those subprojects are the `notely-backend`, `notely-frontend` and
`notely-models`.

## Backend-Development
The backend is a separate project and is located at `notely-be`.
To get going run
```
npm start
```
and in a second terminal run
```
gulp
```
(if you don't have gulp installed, also run `npm install -g gulp`)


## Frontend-Development
See [Angular Cli](https://github.com/angular/angular-cli).


## Models
Since both the backend and the frontend are using the same data-structure,
the data-models are stored and maintained independently.

In order to write new models, add a new `my-model.model.ts` file and
export it in `index.d.ts`. Once you're done, you can `npm version patch`
and then `npm publish`. Like this the models are retrievable by `npm`
in the backend- and frontend-projects, in order for them to be truly
independent of the root project.





