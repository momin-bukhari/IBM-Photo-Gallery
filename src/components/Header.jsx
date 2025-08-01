import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const items = useSelector((state) => state.cart.items);
  const itemCount = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className='flex justify-between p-4 shadow bg-green-100'>
      <h1 className='text-xl font-bold'>Plantify</h1>
      <nav className='space-x-4'>
        <Link to='/products'>Shop</Link>
        <Link to='/cart'>Cart ({itemCount})</Link>
      </nav>
    </header>
  );
}