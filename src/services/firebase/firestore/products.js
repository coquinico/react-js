import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../firebaseConfig'
import { createProductAdaptedFromFirestore } from "../../../adapters/createProductAdaptedFromFirestone"

export const getProducts = (categoryId) => {
        const productsCollection = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        return getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    return createProductAdaptedFromFirestore(doc)
                })

                return productsAdapted
            })
            .catch(error => {
                return error
            })
}

export const getProductById = () => {
}