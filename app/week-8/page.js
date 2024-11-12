"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
    
    const [itemsData, setItemsData] = useState(items);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        setItemsData([...itemsData, item])
    }
    // console.log(itemsData);

    const handleItemSelect = (rawName) => {       
        const itemName = cleanString(rawName);
        setSelectedItemName(itemName);
    }

    const cleanString = (rawText) => {
        // return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g);
        
        rawText = rawText.replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, ' ').trim();
        let text = rawText.split(' ');

        if (text.length > 0) {
            text = text[0];
        }

        if (text[0].endsWith("s")) {
            text.slice(0, -1);
        }
        return text;
    }

    // const handleIngredientSelect = (recipe) => {
    //     setSelectedRecipe(recipe);
    // }


    return(
        <main className="flex flex-row w-full mx-12">
            <div className="flex items-center flex-col">
                <h1 className="text-3xl my-12 font-bold mb-4 text-rose-500">Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={itemsData} onItemSelect={handleItemSelect}/>
            </div>
            <div className="border border-amber-400 w-full ml-12 my-32 rounded-md">
                <MealIdeas ingredient={selectedItemName}/>
            </div>

            
        </main>
    );
}