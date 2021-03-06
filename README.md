# Boilerplate React + Webpack

## What's inside it?

* Webpack 4+
* Babel
* React hot loader
* HTML and CSS generated automatically by webpack
* Jest for tests and Chai for assertions
* Storybook to create isolated components stories
* Async/await
* Dynamic `import()` function
* Webpack tree shaking!
* [Preact](https://preactjs.com/) for production build (optional)

## Dependencies:

- Node.js `>=` v10.13.0;
- npm `>=` v6.4.1;
- Yarn `>=` v1.17.3;

## Up and running

- Clone this repository: `git clone https://github.com/FABJNR/boilerplate-react-webpack.git`;
- Install dependencies: `yarn install (or npm install)`;
- Run `yarn start (or npm start)` to develop on `http://localhost:3000`
- Run `yarn build (or npm run build)` for production build (files will be generated on `dist` directory)

## Troubleshooting

If you are on Windows, and try to run `yarn lint`, you'll get an error
because `spawn` module does not work very well on Windows.

You should install `cross-spawn`, and edit `gulpfile.js`, removing line `4` and
uncomment line `7`.

## Scripts

- `yarn dev (or npm run dev)`: Starts the application on development 
- `yarn start (or npm start)`: Special script reserved to run production code
- `yarn test (or npm test)`: Run tests once
- `yarn test:watch (or npm run test:watch)`: Run tests in watch 
- `yarn storybook (or npm run storybook)`: Run Storybook on 6006 port
- `yarn storybook:build (or npm run storybook:build)`: Build Storybook to static files
- `yarn build (or npm run build)`: Build project to production
- `yarn build:analyzer (or npm run build:analyzer)`: Build project to production and open bundle analyzer on 8888 port
- `yarn update-packages`: Update project dependencies

## License

[MIT](https://github.com/FABJNR/boilerplate-react-webpack/blob/master/LICENSE) &copy; Fernando Albuquerque
