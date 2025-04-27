
import { useEffect, useState } from 'react';
import Card from '../../../components/product-card/card';

export default function All_Product() {
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);;
      })
      .catch(err => {
        console.error('Error loading data:', err);
      });
  }, []);
  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-[#022dbb]">
        <p className="text-sm">Loading all-product...</p>
      </div>
    );
  }

  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <h1>All Product Gallery</h1>
      </div>
      <div className=''>
        <div>search filter</div>
        <div className='gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
          {
            products.map((item, index)=> (
              <Card key={index.id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
