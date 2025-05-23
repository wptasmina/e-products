

export default function Card({ item }) {

    const { title, desc, img, type, price, discount, review, life, mfg, location, sku, stock } = item;
    console.log(item);

    return (
        <div className='border border-gray-200 shadow-lg rounded-lg flex flex-col justify-between h-full'>
            <div className="flex flex-col h-full p-3 cursor-pointer">
                {/* Image Section */}
            <div className="w-full aspect-[3/3] relative">
                <img src={img} alt="image" className='rounded-t-lg object-cover w-full h-full' />
            </div>
            {/* Content Section */}
            <div className='text-center pt-4 flex flex-col justify-between flex-grow'>
                <h3 className="text-xl text- font-bold">{title}</h3>
                <div className="text-center text-green-600 text-sm md:text-lg">
                <span className="line-through text-sm text-red-600 font-medium mr-2 ">${discount}</span>
                <span className="font-bold">${price}</span>
              </div>
            </div>
            </div>
        </div>
    )
}
