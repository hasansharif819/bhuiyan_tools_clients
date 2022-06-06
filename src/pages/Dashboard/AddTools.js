import React from 'react';
import { toast } from 'react-toastify';

const AddTools = () => {

    const handleUpdate = event => {
        event.preventDefault();
        
        const tools = {
            // id: user?.uid,
            // client: user?.email,
            // clientName: user?.displayName,
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            minQuantity: event.target.minQuantity.value,
            maxQuantity: event.target.maxQuantity.value,
            description: event.target.description.value,
            img: event.target.img.value
        }
        fetch('https://damp-bayou-30389.herokuapp.com/service', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(tools)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Successfully tools added.Thank you...`)
                    //to close the modal
                    
                }
                else {
                    toast.error(`Sorry!!! Your request is failed `)

                // to close the modal
                
                    
                }
            })


    }


    return (
        <div>
            <h2>Add new tools</h2>
            {/* Form  */}
            <form 
                    onSubmit={handleUpdate} 
                    className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        
                                                <input type="text" name="name" placeholder='Name' className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="price" placeholder='Price' className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="quantity" placeholder="Quantity" 
                        className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="minQuantity" placeholder="Min Quantity" 
                        className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="maxQuantity" placeholder="Max Quantity" 
                        className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                        <input type="url" name="img" placeholder='Enter valid image link' id="" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Add Tools" className="btn btn-secondary w-full max-w-xs" />
                    </form>
        </div>
    );
};

export default AddTools;