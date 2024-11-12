"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth_context";
import Link from "next/link";
import { useRouter } from "next/router";



export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    // const router = useRouter();
    
    const [itemsData, setItemsData] = useState(items);
    const [selectedItemName, setSelectedItemName] = useState("");

    //mounting state var to prevent useRouter loading on the server-side/checking if component is mounted
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])


    const handleAddItem = (item) => {
        setItemsData([...itemsData, item])
    }
    // console.log(itemsData);

    const handleItemSelect = (rawName) => {       
        const itemName = cleanString(rawName);
        setSelectedItemName(itemName);
    }


    const handleSignIn = async() => {
        try {
            if (isMounted) {
                await gitHubSignIn();
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleSignOut = async() => {
        try {
            if (isMounted) {
                await firebaseSignOut();
                // router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const cleanString = (rawText) => {

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


    
    if (!isMounted) {
        return null;  
    }


    return(

        user ? ( 
            <main>
                <div className="flex justify-between items-center mt-4">
                    <Link href="/week-9/"><button className="ml-6 text-md bg-indigo-600 text-white rounded px-1 py-1 w-32 transform transition-all duration-300 hover:scale-110">Back to Home</button></Link>
                    <p>User: <span className="text-indigo-500 font-semibold">{user.displayName}</span></p>
                    <button onClick={handleSignOut} className="mr-6 text-sm bg-indigo-600 text-white rounded px-1 py-1 w-24 transform transition-all duration-300 hover:scale-110">Sign Out</button>
                </div>
                <div className="flex flex-row w-full mx-12">
                    <div className="flex items-center flex-col">
                        <h1 className="text-3xl my-12 font-bold mb-4 text-indigo-500">Shopping List</h1>
                        <NewItem onAddItem={handleAddItem}/>
                        <ItemList items={itemsData} onItemSelect={handleItemSelect}/>
                    </div>
                    <div className="border border-amber-400 w-full ml-12 my-32 rounded-md">
                        <MealIdeas ingredient={selectedItemName}/>
                    </div> 

                </div>
            </main>
        ) : (
            <main className="flex flex-row w-full mx-12">
                <div className="flex justify-evenly items-center mt-4 w-full">
                    <Link href="/week-9/"><button className="ml-6 text-md bg-indigo-600 text-white rounded px-1 py-1 w-32 transform transition-all duration-300 hover:scale-110">Back to Home</button></Link>
                    <p>Please Sign In to View this page</p>
                    <button onClick={handleSignIn} className="mr-6 text-sm bg-indigo-600 text-white rounded px-1 py-1 w-24 transform transition-all duration-300 hover:scale-110">Sign In</button>
                </div>
            </main>
        )

    );
}
