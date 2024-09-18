// export default function Item({ name, quantity, category }) {
//     return(
//         <div>
//             <h1>{name}</h1>
//             <p>{quantity}</p>
//             <p>{category}</p>
//         </div>
//     );
// }

export default function Item({ itemObj }) {
    return(
        <div className="ml-5">
            <div className= "flex justify-between w-96 rounded-sm p-2 mt-6 border-indigo-200 bg-zinc-800 transition-colors duration-400 hover:bg-indigo-600 hover:bg-opacity-50 hover:text-amber-500 cursor-pointer">
                <h1 className="text-2xl">{itemObj.name}</h1>
                <div className="justify-end text-right">
                    <p><span className="text-slate-500">Quantity:</span> {itemObj.quantity}</p>
                    <p><span className="text-slate-500">Category:</span> {itemObj.category}</p>
                </div>
            </div>
        </div>
    );
}

