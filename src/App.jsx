import { useLoaderData } from 'react-router-dom';
import './app.css';


const App = () => {

    const coffees = useLoaderData();




    return (
        <div>
            <h2 className='h-4 text-center'>Coding restarted Now</h2>
            <p className='text-center'>Total coffee order {coffees.length}</p>
        </div>
    );
};

export default App;