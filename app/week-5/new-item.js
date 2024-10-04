"use client"

import { useState } from "react";


export default function NewItemPage() {

    const categoriesArr = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"]; 

    // const mapCat = () => categoriesArr.map()

    
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState(categoriesArr[0]);


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
    // const handleQuantity = (event) => setName(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);


    //handle quantity
    //handle category
    
    const submitForm = (event) => {

        let basket = {
            name: name,
            quantity: quantity,
            category: category
        }

        alert(`
                Name: ${basket.name}, 
                Quantity: ${basket.quantity}, 
                Category: ${basket.category}`)

        setName("");
        setQuantity("");
        setCategory("");
    }


    return(
        <div className="flex justify-evenly w-96 rounded-lg p-2 mt-6 items-center border-indigo-200 bg-blue-800 transition-colors duration-400 ">
            
            <form onSubmit={submitForm} className="p-2 m-4 bg-blue-900 text-black max-w-sm w-full">

                <div className="mb-2">
                    <input onChange={handleName} type="text" className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" placeholder="Item name"/>
                </div>


                <div className="flex flex-row justify-evenly">
                    <div className="flex items-center border">
                        <p className="text-2xl mr-5 font-sans">{quantity}</p>
                        <div className="bg-slate-600 w-8 flex justify-center mr-5 rounded-md hover:bg-indigo-600 hover:bg-opacity-50 hover:text-amber-500 cursor-pointer" onClick={decrement}>
                            <button type="button" onClick={decrement} className="text-4xl"> - </button>
                        </div>
                        <div className="bg-slate-600 w-8 flex justify-center mr-5 rounded-md hover:bg-indigo-600 hover:bg-opacity-50 hover:text-amber-500 cursor-pointer" onClick={increment}>
                            <button type="button" onClick={increment} className="text-4xl"> + </button>
                        </div>
                    </div>

                    <div className="w-36">
                        <select onChange={handleCategory} className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                            <option value="" disabled=""> Category</option>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                </div>

                <div>
                    <button className="bg-yellow-500 border w-24 h-7"></button>
                </div>

            </form>
            
            
            
            
            
        </div>
    );
}


