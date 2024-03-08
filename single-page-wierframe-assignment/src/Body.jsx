import { data } from './assets/data';
import Card from './components/Card';

function Body() {
  return (
    <div className='mt-6 p-4'>
      <div className='flex flex-col justify-center items-center flex-wrap'>
        <h3 className='text-3xl font-thin m-2'>Classes</h3>
        <p className='text-gray-500/85 text-wrap'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quia beatae tempore quo neque nam consectetur quae officiis unde impedit!</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-5 mt-4'>
        {data.map((item) => 
          <Card key={item.ID} item={item} />
        )}
      </div>
    </div>
  )
}

export default Body;