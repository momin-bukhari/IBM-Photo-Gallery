import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) => state.cart.items[plant.id]);

  return (
    <div className='border p-4 rounded'>
      <img src={plant.image} alt={plant.name} className='w-full h-40 object-cover mb-2' />
      <h3 className='font-bold'>{plant.name}</h3>
      <p>${plant.price}</p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        disabled={!!isAdded}
        className='bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50 mt-2'
      >
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}