# THUNK

1. clone the starter at whatever address, make a starter for github with names of components, css
2. change directory name to frontend
3. Notice file structure

## Add a proxy

To tell your frontend server to [proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/) any unknown requests to your backend server in development by adding a proxy field to your package.json.

```js
  "devDependencies": {
    "redux-logger": "^3.0.6"
  },
  "proxy": "http://localhost:8080"
```

You will now run your front end and your backend separately
Backend will run on port:8080
Frontend will run on port:3000

If you look inside your index.js file in the root of your src folder, you will notice that BrowserRouter has already been connected to the application.

## Routes

Let's create routes for the components that have already been included.
We want our Navigation to always render at the top of the screen
We want either the Product Component or the CreateProduct Component to always render based on our choice in the Nav bar. The default path or '/' will be the Product Component and the /create will be the CreateProduct path

## Store

In your store directory in the products file, create a `productReducer` with an empty object as the `initialState`

Now go to your the `index.js` file in your store and add that `productReducer` to your rootReducer. It should be named `product`.

## Create Actions and Thunks

1. Create a thunk and an action creator to retrieve all products from the backend
