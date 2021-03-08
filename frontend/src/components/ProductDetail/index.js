import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/products';

const ProductDetail = ({ id, image, name, price }) => {
  const dispatch = useDispatch();
  return (
    <div className='product-detail'>
      <img src={image} alt={name} />
      <span style={{ fontWeight: 'bold', color: 'gray' }}>{name}</span>
      <span>${price}</span>
      <div className='button-row'>
        <button
          onClick={() => deleteProduct(id, dispatch)}
          className='delete-button'
        >
          Delete
        </button>
        <button className='update-button'>Update</button>
      </div>
    </div>
  );
};
export default ProductDetail;
