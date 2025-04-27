
import { useEffect, useState } from 'react';
import Card from '../../../components/product-card/card';
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

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
    <div className='w-10/12 mx-auto my-10'>
      <div>
        <h1 className='text-center text-2xl md:text-4xl font-extrabold mb-6'>All Product Gallery</h1>
      </div>

        {/* Search and filter  */}
        <div className='flex justify-center items-center gap-4 mb-6'>
          {/* Search Input */}
          <div className='relative flex items-center'>
            <input
              type="text"
              placeholder="Search"
              className='border border-gray-300 outline-none px-10 py-2 rounded-lg'
            />
            <IoMdSearch className='absolute left-4 text-gray-500' />
          </div>

          {/* Filter Input */}
          <div className='relative flex items-center'>
            <input
              type="text"
              placeholder="Filter"
              className='border border-gray-300 outline-none px-10 py-2 rounded-lg'
            />
            <CiFilter className='absolute left-4 text-gray-500' />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {
            products.map((item, index) => (
              <Card key={index.id} item={item} />
            ))
          }
        </div>

    </div>
  )
}
