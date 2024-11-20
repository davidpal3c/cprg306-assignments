"use client"

import { useState } from "react";
import { useUserAuth } from "../_utils/auth_context";



export default function NewItem({ onAddItem }) {

    const categories = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"]; 
    
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("");
    const { user } = useUserAuth();

    const increment = () => {
        let currentQuantity = quantity;
        if (quantity <= 19) {
            setQuantity(currentQuantity + 1)
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        if (quantity > 1) {
            setQuantity(currentQuantity - 1)
        }
    }

    const handleName = (event) => setName(event.target.value);
    const handleCategory = (event) => setSelectedCategory(event.target.value);

    const submitForm = (event) => {        
        event.preventDefault();


        if (!selectedCategory) {
            alert("Please select a category.")
            return;
        }

        let item = {
            id: user.uid,
            name: name,
            quantity: quantity,
            category: selectedCategory
        }
        
        onAddItem(item);
        setName("");
        setQuantity(1);
        setSelectedCategory("");
    }


    return(
        <div className="flex justify-evenly w-fit rounded-lg mt-6 items-center border-indigo-200 bg-slate-600 transition-colors duration-400 ">         
            <form onSubmit={submitForm} className="p-3 m-4 bg-slate-400 text-zinc-900 max-w-sm w-full rounded-lg">
                <div className="mb-2">
                    <input onChange={handleName} value={name} type="text" className="w-full mt-2 border-2 border-gray-300 p-2 rounded-lg font-sans" placeholder="Item name"/>
                </div>
                <div className="flex flex-row justify-between items-center m-4 mt-4">
                    <div className="flex justify-center items-center border-2 border-gray-300 p-1 rounded-lg w-64 h-10 mt-1 mr-4 font-sans bg-slate-100">
                        <label className="text-neutral-500">Quantity: </label>
                        
                        <p className="text-2sm ml-4 mr-4 font-sans">{quantity}</p>
                        <div className="bg-sky-600 w-7 h-7 flex justify-center items-center mr-2 rounded-md hover:bg-amber-500 hover:bg-opacity-50 cursor-pointer" onClick={decrement}>
                            <button type="button" onClick={decrement} className="text-2xl text-emerald-200"> - </button>
                        </div>
                        <div className="bg-sky-600 w-7 h-7 flex justify-center items-center mr-2 rounded-md hover:bg-amber-500 hover:bg-opacity-50 hover:text-amber-500 cursor-pointer" onClick={increment}>
                            <button type="button" onClick={increment} className="text-2xl text-emerald-200"> + </button>
                        </div>
                    </div>

                    <div className="w-36">
                        <select value={selectedCategory} onChange={handleCategory} className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                            <option value="" disabled=""> Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.toLowerCase()}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                <div>
                    <button className="bg-amber-600 w-24 h-7 rounded-lg text-zinc-900 hover:bg-amber-500 active:bg-sky-300">Submit</button>
                </div>

            </form>
            
            
            
            
            
        </div>
    );
}


