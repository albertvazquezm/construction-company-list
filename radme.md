# Construction Company List
This is a React & NodeJS application that shows a table of construction companies. It fetches the data from the NodeJS API. It's developed using TypeScript.

# Run
This monorepo contains two applications. Frontend and Backend. First, install the dependencies of the projects by running `npm i` in the root folder.
## Frontend
Execute `npm start` to run the app in dev mode
## Backend
Execute `npm start` to run the app in dev mode

# TODOS

This application is a work in progress. It requires improvement in different areas:

- Logging: Proper logging in both backend and frontend helps debugging issues in other environments.
- Unit testing: Unit testing is essential to keep the application robust and maintainable. It will reduce bugs and quality regressions.
- End to end testing: It will help to ensure that the application is working as expected before any deployment.
- Pagination and filtering in backend. If the set of data is large, pagination will be required to avoid loading all the data at once in the frontend. Filtering should be executed in the backend, against the database.
- Persistance: Now it's using a JSON file to store the data. To use it at scale, a DB must be used.
- Better styling, design.
- Better error handling in frontend (Global error screen)


