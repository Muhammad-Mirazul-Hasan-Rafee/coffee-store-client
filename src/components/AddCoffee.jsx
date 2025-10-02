const AddCoffee = () => {
    const handleAddCoffee = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name , quantity , supplier ,taste , category , details , photo};
        console.log(newCoffee);
    
    }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="font-extrabold text-3xl">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
          
              <input
                type="text" name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
          
              <input
                type="text" name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
          
              <input
                type="text" name="supplier"
                placeholder="Supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
          
              <input
                type="text" name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Category and details row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
          
              <input
                type="text" name="category"
                placeholder="Coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
          
              <input
                type="text" name="details"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="md:flex mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
          
              <input
                type="text" name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       
        <input type="submit" value="Add Coffee" className="btn justify-center" />
      </form>
    </div>
  );
};

export default AddCoffee;
