import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalItems = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Object.values(items).reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className='p-4'>
      <h2 className='text-2xl mb-4'>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p className='mb-4'>Total Price: ${totalPrice}</p>
      <div className='space-y-4'>
        {Object.values(items).map(item => (
          <div key={item.id} className='flex items-center border p-4 gap-4'>
            <img src={item.image} alt={item.name} className='w-24 h-24 object-cover' />
            <div className='flex-1'>
              <h3 className='font-bold'>{item.name}</h3>
              <p>${item.price}</p>
              <div className='flex items-center gap-2 mt-2'>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} className='px-2 bg-gray-300 rounded'>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))} className='px-2 bg-gray-300 rounded'>+</button>
                <button onClick={() => dispatch(deleteItem(item.id))} className='ml-4 text-red-500'>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-6 flex gap-4'>
        <Link to='/products' className='bg-green-600 text-white px-4 py-2 rounded'>Continue Shopping</Link>
        <button className='bg-gray-400 text-white px-4 py-2 rounded'>Checkout (Coming Soon)</button>
      </div>
    </div>
  );
}
