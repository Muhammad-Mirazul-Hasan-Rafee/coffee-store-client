import { AiFillEye , AiTwotoneDelete} from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img className="mr-3"
          src={photo}
          
        />
      </figure>
      <div className="flex justify-between w-full pr-4">
       <div>
         <h2 className="card-title">Name: {name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <p>Taste: {taste}</p>
       </div>
        <div className="card-actions justify-end grid grid-rows-1 gap-y-2">
          <button className="btn btn-primary bg-green-950"><AiFillEye/></button>
          <button className="btn btn-primary bg-slate-950"><BiEditAlt/></button>
          <button className="btn btn-primary bg-red-700"><AiTwotoneDelete/></button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
