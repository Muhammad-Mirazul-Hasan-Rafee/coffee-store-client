import { AiFillEye, AiTwotoneDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this coffee!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };

  return (
    <div className="card card-side mx-2 shadow-sm border border-gray-400 mt-3 bg-slate-900">
      <figure>
        <img className="mr-3" src={photo} alt={name} />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Category: {category}</p>
          <p>Details: {details}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="card-actions justify-end grid grid-rows-1 gap-y-2">
          <button className="btn btn-primary bg-green-950"><AiFillEye /></button>
          <button className="btn btn-primary bg-slate-950"><BiEditAlt /></button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-primary bg-red-700"
          >
            <AiTwotoneDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
