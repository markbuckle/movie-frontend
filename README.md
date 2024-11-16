## Install dependencies

Create the structure for your react app with:

```pwsh
npx create-react-app <app-name>
```

Delete the test files within the src/ folder as we won't need them. Also remove
the eslintConfig setting from our package.json file. Lastly, remove the
reportWebVitals() function from our index.js file.

Next install Axios. Axios makes it easy for us to make HTTP requests from our
React client to the relevant API hosted on a distant remote machine. In our case
in will allow us to retrieve relevant movie data from our MongoDB database.

```pwsh
npm install axios
```

Next install bootstrap for the React layout and styling:

```pwsh
npm install bootstrap
```

and the bootstrap related components also for layout and styling purposes:

```pwsh
npm i react-bootstrap bootstrap
```

Install fontawesome icons:

```pwsh
npm i @fortawesome/react-fontawesome
npm i @fortawesome/free-solid-svg-icons
```

To play movie trailers from within our app install the react player component:

```pwsh
npm i react-player
```

Install the React-router DOM:

```pwsh
npm i react-router-dom
```

Install the movie carousel with:

```pwsh
npm install @mui/material @emotion/react @emotion/styled
```

and the carousel package:

```pwsh
npm i react-material-ui-carousel
```

## Set up Axios

Set up your axiosConfig.js file in the src/api/ folder.

Next open app.js and write code to call an endpoint that will return an array of
movie data.

To test your app, run:

```pwsh
npm start
```

Make sure your axiosConfig file is setup with the correct baseURL and headers.
abs

## Create Home and Hero Component

Create a file called Layout.js inside the src/components/ folder.

Type "rafc" and press tab for boilerplate.

Go to your app.js code and import the layout we just created along with the
routes.

Create a new file called Home.js within the src/components/home folder. rafc +
tab for boilerplate. Also create a new file called Hero.js and Hero.css within
the src/components/hero folder. Rafce + tab for boilerplate in Hero.js.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the
best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn't feel obligated to use this
feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
