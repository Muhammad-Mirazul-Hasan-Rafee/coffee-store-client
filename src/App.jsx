import { useLoaderData } from 'react-router-dom';
import './app.css';
import CoffeeCard from './components/CoffeeCard';


const App = () => {

    const coffees = useLoaderData();




    return (
        <div className='m-20'>
            <h2 className='text-center'>Coding restarted for COFFEE ☕</h2>
            <p className='text-center'>Total coffee order {coffees.length}</p>

          <div className='grid md:grid-cols-2 gap-4'>  {coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} ></CoffeeCard>)}  </div>
        </div>
    );
};

export default App;