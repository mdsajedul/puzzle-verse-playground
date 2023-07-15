import './App.css';
import items from './data';
import Select from './components/Select';
import UnitCard from './components/UnitCard';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="bg-[#F0FFFF] shadow-lg rounded-lg p-6 w-1/2 border">
          <h1 className='text-center text-gray-800 font-bold text-2xl py-5'>Mass Converter</h1>

          <div className='px-5'>
              <Select data={items} key={'select'}/>
          </div>

          <div className='flex justify-around py-5'>
              <div className=''>
                  <UnitCard
                    data={items?.units}
                  />
              </div>
              <div className='flex items-center '>
                <span className='font-extrabold text-3xl'> = </span>
              </div>
              <div>
                  <UnitCard
                    data={items?.units}
                  />
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
