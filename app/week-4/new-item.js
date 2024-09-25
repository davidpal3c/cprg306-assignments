"use client"

import { useState } from "react";


export default function NewItemPage() {

    const [quantity, setQuantity] = useState(1);

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
    

    return(
        <div className="flex justify-evenly w-64 rounded-lg p-2 mt-6 items-center border-indigo-200 bg-zinc-800 transition-colors duration-400 ">
            <p className="text-2xl">{quantity}</p>
            
            <div className="flex">
                <div className="bg-slate-600 w-12 flex justify-center mr-5 rounded-md hover:bg-indigo-600 hover:bg-opacity-50 hover:text-amber-500 cursor-pointer" onClick={decrement}>
                    <button onClick={decrement} className="text-4xl"> - </button>
                </div>
                <div className="bg-slate-600 w-12 flex justify-center mr-5 rounded-md hover:bg-indigo-600 hover:bg-opacity-50 hover:text-amber-500 cursor-pointer" onClick={increment}>
                    <button onClick={increment} className="text-4xl"> + </button>
                </div>
            </div>
            
        </div>
    );
}


