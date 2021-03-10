# WIP

(go to product-thunk branch for a complete thunk version)

# NO THUNK

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

Let's create routes and paths for the components that have already been included.
We want our Navigation to always render at the top of the screen
We want either the Product Component or the CreateProduct Component to always render based on our choice in the Navbar.

First go to the Navigation Component. Create a `ul` with 2 `li`s. Each `li` should contain a Navlink. The first `li` should have a `Navlink` for the url `'/'` which leads to the Products component. The second `li` should have a `NavLink` for the url `/create` which is for the Create Product component

Now go to your App.js and set up the routes for these Navlinks.
First import and add your Navigation component to the jsx at the top.
Next create the routes for the components. Make sure the route for the Products component is an exact path.

Test your links in the browser. You should now be able to go to your browser and click on each option which will render the corresponding component.

## Store

In your store directory in the products file, create a `productReducer` with an empty object as the `initialState`

Now go to your the `index.js` file in your store and add that `productReducer` to your rootReducer. It should be named `product`.

## Create Functions and Action Creators

1. Create a function and an action creator to retrieve all products from the backend
