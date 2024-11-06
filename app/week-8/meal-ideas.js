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
        <main className="flex flex-col">
            <h2>Meal Ideas</h2>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))}                    
                </ul>
            ) : (
                <p>No meal ideas found for ingredient</p>
            )}
        </main>
    );    
}