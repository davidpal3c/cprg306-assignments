"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth_context";

export default function LandingPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async() => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleSignOut = async() => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    if (user) {
        console.log("User :", user.uid);
    }
    
    return(
        <main className="m-5">
            <header>
                <h1 className="text-3xl text-center">Welcome</h1>
            </header>
            {user ? (
                <section className="flex flex-col">
                    <div className="flex flex-row justify-between mt-10">
                        <p>Welcome <span className="text-indigo-500 font-semibold">{user.displayName}</span></p>
                        <p>{user.email}</p>
                        <button className="hover:scale-125 hover:border-amber-400 hover:border rounded transform transition-all duration-300 ">
                            <img src={user.photoURL} alt="" className="w-10 h-10 rounded" />
                        </button>
                        
                    </div>
                    <div className="border border-amber-400 w-44 hover:bg-amber-600 hover:scale-105 p-1 items-center justify-center rounded transform transition-all duration-300">
                        <Link href="/week-10/shopping-list">Go To Shopping List</Link>
                    </div>
                    <button 
                        type="button"
                        onClick={handleSignOut}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-40 w-28"
                    >Sign Out</button>
                </section>                
            ) : (                
                <section>
                    <button 
                        type="button"
                        onClick={handleSignIn}
                        className="text-lg bg-indigo-600 text-white rounded px-2 py-1 mt-4"
                    >Sign In</button>
                </section>
        )}
        </main>    
    );

}