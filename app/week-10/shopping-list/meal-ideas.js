"use client"

import React, { useState, useEffect } from "react";


export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);
    const [selectedMealId, setSelectedMealId] = useState(null);
    const [mealDetails, setMealDetails] = useState(null);
    
    async function fetchMealIdeas(ingredient) {
        try {

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
        if (ingredient){
            loadMealIdeas(ingredient);
        } 
    }, [ingredient]);
    

    const handleSelectedMeal = (idMeal) => {
        setSelectedMealId(idMeal);
    }


    async function fetchMeal( idMeal ) {
        try {
            // console.log(idMeal);
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
            );

            if (!response.ok) {
                console.log(`Error: ${response.status}`);
                // return null;
            }

            const data = await response.json();

            console.log(data.meals);
            return data.meals ? data.meals[0] : null;

        } catch (error) {
            console.log(`Oops something happened! ${error}`);
            return [];
        }
    }

    useEffect(() => {
        if (selectedMealId) {
            fetchMeal(selectedMealId).then(setMealDetails);       
        }       
    }, [selectedMealId]);


    const handleReset = () => {
        setMeals([]);
        setSelectedMealId(null);
        setMealDetails(null);
    }
    
    return(
        <main className="flex flex-col items-start">
            <div className="flex flex-row justify-evenly bg-amber-600 w-full rounded-md">
                <h2 className="text-2xl text font-semibold">Meal Ideas</h2>
                <button onClick={handleReset} className="border-indigo-200 bg-zinc-800 rounded-md w-20 my-1 hover:bg-indigo-600 active:bg-red-400">
                    Reset
                </button>
            </div>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <button 
                            key={meal.idMeal}
                            onClick={() => handleSelectedMeal(meal.idMeal)} className="flex justify-between w-72 rounded-md p-2 mt-6 border-indigo-200 bg-zinc-800 transition-colors duration-400 hover:bg-indigo-600 hover:bg-opacity-50 hover:text-amber-500 cursor-pointer">
                            <li>{meal.strMeal}</li>
                        </button>  
                    ))}    
                    {mealDetails && (
                        <div>
                            <p>Ingredients Needed</p>
                            <p>{mealDetails.strIngredient1}</p>
                        </div>      
                    )}                
                </ul>
            ) : (
                <p>No meal ideas found for ingredient</p>
            )}     
        </main>
    );    
}