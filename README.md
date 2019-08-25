# Code Challenge for Scoutbase

If you’re reading this, then you’ve applied for a position at Scoutbase.

This directory includes two subdirectories:

- `front-end` with focus on React, SSR, Apollo & `styled-components`
- `back-end` with focus on SQL, Node.js, GraphQL

You can do one or you can do two.

## Instructions

You have received this directory within the .zip archive.

1. Create a repo out of the directory with this `README.md` in the root of it.
2. Work on either task following the guidelines in `README.md` within chosen directory.
3. Follow best practices of saving changes to the repo.
4. Upload the repo to your personal Github account and share it with two collaborators:
  1. `Yaass` username – Yassin Askar, co-founder of Scoutbase
  2. `kuka` username – Kuanysh, consultant
5. Expect a response within 10 working days after sharing the task, you’ll be contacted with the info you’ve provided during initial registration.

# Front-end task of Code Challenge for Scoutbase

This task is for demonstrating your understanding of HTML, CSS, Javascript, React & related libraries.

If you’re doing the front-end only, you must use the https://countries.trevorblades.com endpoint for GraphQL API.

Preferred libraries:
  1. `styled-components` for styling
  2. `apollo-client` for consuming GraphQL API
  3. `react-router` or any alternative to implement routing

Instructions:

1. Create a `create-react-app` repo.
2. Add a router with routes:
  - `/` - for displaying basic links for the other routes
  - `/countries` - for requesting GraphQL API and rendering the list
  - `/countries/(:code)` - for requesting GraphQL API and rendering the properties of a continent
3. Design is totally by you.
4. Countries list at `/countries` must contain the list of countries and the languages spoken in that country. Both in English and native languages. It should also contain the continent it is located in.
5. `/countries/(:code)` must render the currency and a area code (phone) of that country.
6. Routes must be fully loadable with a direct link. `/countries/CI` must render the page for Ivory Coast, for example.
7. End.