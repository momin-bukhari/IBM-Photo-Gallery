import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

export default function Landing() {
  return (
    <div className='h-screen bg-cover bg-center flex flex-col items-center justify-center text-white' style={{ backgroundImage: `url(${bg})` }}>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Plantify</h1>
      <p className='max-w-md text-center mb-6'>We bring nature to your home. Explore our curated collection of beautiful indoor plants.</p>
      <Link to='/products' className='bg-white text-green-700 font-bold px-6 py-3 rounded'>Get Started</Link>
    </div>
  );
}