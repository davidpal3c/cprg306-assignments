"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";

export default function Page() {
    
    const [itemsData, setItemsData] = useState(items);

    const handleAddItem = (item) => {
        setItemsData([...itemsData, item])
    }

    console.log(itemsData);

    return(
        <main className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl my-12 font-bold mb-4 text-rose-500">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={itemsData}/>
        </main>
    );
}