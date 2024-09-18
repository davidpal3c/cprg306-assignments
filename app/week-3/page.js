import ItemList from "./item-list";

export default function Page() {
    
    return(
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-3xl my-12 font-bold mb-4 text-rose-500">Shopping List</h1>
            <ItemList />
        </main>
    );
}