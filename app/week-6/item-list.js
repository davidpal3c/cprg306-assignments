"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else {
            return a.quantity - b.quantity;
        }      
    });

    const handleSort = (criteria) => {
        setSortBy(criteria);
    };

    return (
        <main>
            <div className="flex flex-row mt-8">
                <div className="border w-36 rounded-md border-amber-400 flex justify-center hover:bg-amber-500 hover:text-slate-700 active:bg-amber-600">
                    <button onClick={() => handleSort("name")}>Sort by Name </button>                    
                </div>
                <div className="border w-36 ml-5 rounded-md border-amber-400 flex justify-center hover:bg-amber-500 hover:text-slate-700 active:bg-amber-600">
                    <button onClick={() => handleSort("quantity")}>Sort by Quantity </button>
                </div>
            </div>
            {sortedItems.map((item) => (
                <Item key={item.id} itemObj={item} />
            ))}
        </main>
    );
}
