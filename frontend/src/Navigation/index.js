import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to='/'>Products</NavLink> |
        <NavLink to='/create'>Create Product</NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
