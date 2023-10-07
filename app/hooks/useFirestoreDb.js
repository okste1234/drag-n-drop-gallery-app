"use client"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"

const useFirestoreDb = (collectionName) => {
    const [docs, setDocs] = useState([])
    const [isLoadingg, setIsLoading] = useState(true)

    useEffect(() => {
        let unsubscribe
        const getData = async () => {
            try {
                const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images = [];
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data());
                        const imageUrl = doc.data().imageUrl
                        const createdAt = doc.data().createdAt.toDate()
                        const userName = doc.data().userName
                        const firstName = doc.data().firstName
                        images.push({ imageUrl, createdAt, userName, firstName })
                    });
                    setDocs(images)
                    setIsLoading(false)
                });


            } catch (error) {
                console.error(error);
                setIsLoading(false)
            }
        }
        getData()

        // return ()=>unsubscribe && unsubscribe()

    }, [collectionName])

    return { docs, isLoadingg }
}

export default useFirestoreDb