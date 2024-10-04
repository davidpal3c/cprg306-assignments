import NewItemPage from "./new-item";

export default function Page({quantityDisplay}) {
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-3xl my-12 font-bold mb-4 text-rose-500">Increase / Decrease Counter</p>
            <NewItemPage />
        </div>
    );  
}