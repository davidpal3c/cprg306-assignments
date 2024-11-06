"use client"

import React, { useState, useEffect } from "react";


export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);
    
    async function fetchMealIdeas(ingredient) {
        try {

            // if (ingredient === "") {
            //     return [];
            // }
            console.log(ingredient);

            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );

            if(!response.ok) {
                console.log(`Error: ${response.status}`)
            }
            const data = await response.json();
            return data.meals || [];                

        } catch (error) {
            console.log(`Oops something happened! ${error}`);
            return [];
        }
       
    }

    async function loadMealIdeas(ingredient) {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    }

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);
    
    
    return(
        <main className="flex flex-col items-start">
            <div className="bg-amber-600 w-full">
                <h2 className="text-2xl text font-semibold">Meal Ideas</h2>
            </div>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <button className="flex justify-between w-72 rounded-sm p-2 mt-6 border-indigo-200 bg-zinc-800 transition-colors duration-400 hover:bg-indigo-600 hover:bg-opacity-50 hover:text-amber-500 cursor-pointer">
                            <li key={meal.idMeal}>{meal.strMeal}</li>
                        </button>  
                    ))}                    
                </ul>
            ) : (
                <p>No meal ideas found for ingredient</p>
            )}     
        </main>
    );    
}