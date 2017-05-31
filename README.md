
# Foreword
The interest in the MEAN Stack (Mongo-Express-Angular-Node) seems to have peaked in May 2016
according to Google Trends.
While I can imagine a multitude of reasons for this
(from Anguar
now being Angular4 , to mean
/ meanjs.org being
quite out of date or the rise of other frameworks / libs like ReactJS or MeteorJS)
, it's still a viable full-stack-js solution.
For me, however, with one big change:
MEAN-JS becomes **MEAN-TS** (TS = Typescript).

The use of typescript is literally exploding at the moment. Angular is now
completely written in typescript. So is RxJS. The list of projects
migrating is long, which is a good thing for friends of typed languages.
However, for the backend-part (Mongo-Express-Node) of the MEAN stack, I haven't
found a good typescript boilerplate yet. By good I mean 100% typescript,
including the unit tests. So I set out to create this boilerplate.
And this is what's resulted from it.



# Installation

First, get the code using

```
git clone https://github.com/bersling/typescript-mongo-express-angular-node-seed.git project-name
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

The backend has good test coverage for the boilerplate code using mocha and chai.
The tests are also written in typescript.

## Frontend Setup
The frontend is suggested to be setup with [Angular Cli](https://github.com/angular/angular-cli).
Like this you're also at Angular's newest version (Angular 2, Angular 4, Angular 5, ...).
Refer to the Angular-Cli docs for more information.

In case you're not into Angular, you could also just use any other
frontend architecture, since the backend is just a REST-API to consume.
For example you could go with ReactJS & Redux, or no framework at all!


# Development

The project is split into subprojects that can be developed independently.
Those subprojects are the `backend` and `frontend`.

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

## A Full Tutorial on the Typescript-MEAN Stack

I've documented the steps of the journey here:
[www.tsmean.com](http://www.tsmean.com).

