# Product Dashboard Frontend

You will now create the Frontend for your Product Dashboard.

## Phase 0: Getting Started

Inside your product directory, on the same level as your backend, clone the frontend starter from [address].
Change the name of this directory to `frontend`

So you should now have a `frontend` and a `backend` directory.

Test your frontend by navigating into your directory and running `npm start`.

## Explore the frontend application

Your frontend currently contains:

- `index.js` at the root: You will notice that BrowserRouter has already been included
- `App.js`: This component will handle your Navigation Component and your routing.
- `store` directory: Your store boilerplate in the index.js file has been supplied for you except for the reducer that you will add.
- `store -> product.js`: This is where you will add you productReducer, thunks and action creators.
- `Products`: This component will dispatch an action to get all of your products and will also list all of your products
- `ProductDetail`: This component will describe the product as well as handle the delete code.
- `CreateProduct`: This component will contain a form to create a new product

## Add a proxy

To tell your frontend server to [proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/) any unknown requests to your backend server in development add a proxy field to your `package.json`. Place the code beneath your devDependencies as shown in the code below.

```js
  "devDependencies": {
    "redux-logger": "^3.0.6"
  },
  "proxy": "http://localhost:8080"
```

You will now be able to make fetch calls to your backend using a relative path.

## Routes

Now create routes and paths for the components that have already been included.
You want your Navigation to always render at the top of the screen.
You want the Product Component or the CreateProduct Component to render based on your link choice in the Navbar.

First go to the Navigation Component. Create a `ul` with 2 `li`s. Each `li` should contain a Navlink. The first `li` should have a `Navlink` for the url `'/'` which leads to the Products component. The second `li` should have a `NavLink` for the url `/create` which is for the Create Product component

Now go to your App.js and set up the routes for these Navlinks.
First import and add your Navigation component to the jsx at the top.
Next create the routes for the components. Make sure the route for the Products component is an exact path.

Test your links in the browser. You should now be able to go to your browser and click on each option which will render the corresponding component.

## Store

In your store directory in the products file, create a `productReducer` with an empty object as the `initialState`

Now go to your the `index.js` file in your store and add that `productReducer` to your rootReducer. It should be named `product`.

## Create Actions and Thunks

1. Create a thunk and an action creator to retrieve all products from the backend
