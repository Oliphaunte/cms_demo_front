# Structure

* The structure of this project is based around Atomic Design. Information on Atomic Design can be found here http://atomicdesign.bradfrost.com/chapter-2/.

* Individual elements like h1 tags, are defined inside the 'atoms' folder. Components that take multiple atoms, like the madlib-form, are 'molecules', and groups of molecules are organisms.

* Flexbox is used to position elements, and breakpoints are used to make the app mobile-compatible. The structure was built from a mobile-first approach, so elements do shift upon re-sizing of the browser.

### SETUP -- Front-end
1. Clone Repo
2. Run `touch .env` and copy input from `.env.example` into it
3. Run `yarn install`
4. Run `npm start` and open browser to port 3200

### SETUP -- Front-end + Server
1. Clone Repo
2. Run `touch .env` and copy input from `.env.example` into it
3. Run `yarn install`
4. Setup a Postgres database to use for the project
5. Insert Postgres credentials into the .env file 
6. Run `knex migrate:latest --env development`
7. Run `knex seed:run --env development`
8. Run `npm run server`