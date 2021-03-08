const GET_PRODUCTS = 'products/getproducts';
const ADD_ONE_PRODUCT = 'products/addOneProduct';
const REMOVE_ONE_PRODUCT = 'products/removeOneProduct';

const getProducts = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload
  };
};

const addOneProduct = (payload) => {
  return {
    type: ADD_ONE_PRODUCT,
    payload
  };
};

const removeOneProduct = (id) => {
  return { type: REMOVE_ONE_PRODUCT, payload: id };
};

export const getAllProducts = async (dispatch) => {
  const response = await fetch('/products');
  if (response.ok) {
    const data = await response.json();

    dispatch(getProducts(data.products));
  }
};

export const addProduct = async (product, dispatch) => {
  const response = await fetch('/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(addOneProduct(data.product));
  }
};

export const deleteProduct = async (id, dispatch) => {
  const response = await fetch(`/products/${id}`, {
    method: 'DELETE'
  });
  dispatch(removeOneProduct(id));
};

const productReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case GET_PRODUCTS:
      action.payload.forEach((product) => (newState[product.id] = product));
      return newState;
    case ADD_ONE_PRODUCT:
      newState = { ...state, [action.payload.id]: action.payload };
      return newState;
    case REMOVE_ONE_PRODUCT:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default productReducer;
