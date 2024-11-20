import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query} from "firebase/firestore"; 



export async function dbGetMyItems(userId, itemsListStateSetter) {
    try {
        const allItemsRef = collection(db, "users", userId, "items");
        const allItemsQuery = query(allItemsRef);
        const querySnapShot = await getDocs(allItemsQuery);
        let allItemsList = [];

        if (querySnapShot.empty) {
            console.log("No items found for this user.");
        }

        querySnapShot.forEach((item) => {
            let thisItem = {
                id: item.id,
                ...item.data()
            };
            allItemsList.push(thisItem);
        });

        console.log("fetched items: ", allItemsList);
        itemsListStateSetter(allItemsList); 
    } catch (error) {
        console.log(error);
    }
}



export async function addItem(userId, newItem) {

    try {
        const newItemPromise = await addDoc(collection(db, "users", userId, "items"), newItem);
        console.log(newItemPromise.id);
    } catch (e) {
        console.log(e);
    }

}