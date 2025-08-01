import PlantCard from '../components/PlantCard';
import plant1 from '../assets/plant1.jpg';
import plant2 from '../assets/plant2.jpg';
import plant3 from '../assets/plant3.jpg';
import plant4 from '../assets/plant4.jpg';
import plant5 from '../assets/plant5.jpg';
import plant6 from '../assets/plant6.jpg';

const categories = {
  "Succulents": [
    { id: 1, name: 'Aloe Vera', price: 12, image: plant1 },
    { id: 2, name: 'Echeveria', price: 10, image: plant2 },
  ],
  "Ferns": [
    { id: 3, name: 'Boston Fern', price: 15, image: plant3 },
    { id: 4, name: 'Maidenhair Fern', price: 14, image: plant4 },
  ],
  "Cacti": [
    { id: 5, name: 'Barrel Cactus', price: 11, image: plant5 },
    { id: 6, name: 'Prickly Pear', price: 13, image: plant6 },
  ],
};

export default function Products() {
  return (
    <div className='p-4'>
      {Object.keys(categories).map(cat => (
        <div key={cat} className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>{cat}</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container'>
            {categories[cat].map(plant => <PlantCard key={plant.id} plant={plant} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
