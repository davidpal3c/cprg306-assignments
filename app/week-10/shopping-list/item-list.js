"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    
    const sortedItems = [...(items || [])].sort((a, b) => {         // default to empty if items is undefined or null 
        let comparison = 0;
   
        if (sortBy === "name") {                                    //guarding against undefined properties
            comparison = (a.name || "").localeCompare(b.name || "");
        } 
        else if (sortBy === "quantity") {
            comparison = (a.quantity || 0) - (b.quantity || 0);
        }            
        else {
            comparison = (a.category || "").localeCompare(b.category || "");
        }   

        return sortOrder === "asc" ? comparison : -comparison;
    });

    const handleSort = (criteria) => {
        if (sortBy === criteria) {
            setSortOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
        } else {
            setSortBy(criteria);
            setSortOrder("asc");
        }
    };

    // console.log(`basket  ${basket.map(item => item.name)}`);

    return (
        <main className="">
            <div className="flex flex-row mt-12">
                <div className="border w-36 rounded-md border-amber-400 flex justify-center hover:bg-amber-500 hover:text-slate-700 active:bg-amber-600">
                    <button onClick={() => handleSort("name")}>
                        Sort by Name {sortBy === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                    </button>                    
                </div>
                <div className="border w-36 ml-5 rounded-md border-amber-400 flex justify-center hover:bg-amber-500 hover:text-slate-700 active:bg-amber-600">
                    <button onClick={() => handleSort("quantity")}>
                        Sort by Quantity {sortBy === "quantity" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                    </button>
                </div>
                <div className="border w-36 ml-5 rounded-md border-amber-400 flex justify-center hover:bg-amber-500 hover:text-slate-700 active:bg-amber-600">
                    <button onClick={() => handleSort("category")}>
                        Sort by Category {sortBy === "category" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                    </button>
                </div>
            </div>
            <div className="">
                {sortedItems.length === 0 ? (
                    <p>No items to display. Please add an ingredient to your list.</p>
                ) : (
                    sortedItems.map((items) => (
                        <Item key={items.id} itemObj={items} onSelect={onItemSelect}/>        
                    ))
                )}
            </div>

        </main>
    );
}
