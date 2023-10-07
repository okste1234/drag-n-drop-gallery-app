"use client"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'
import { db, storage } from '../firebase/config'
import { v4 as uuidv4 } from "uuid"
import { collection, addDoc } from "firebase/firestore";
import AuthConsumer from './AuthConsumer'

const useStorage = () => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const { user } = AuthConsumer()
    console.log(user)

    const startUpload = (file) => {
        if (!file) {
            return
        }
        const fileId = uuidv4();
        const formatFile = file.type.split("/")[1]

        const storageRef = ref(storage, `images/${fileId}.${formatFile}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
        },
            (error) => {
                setError(error)
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                setProgress(progress)


                // store data in firestore
                await addDoc(collection(db, "images"), {
                    imageUrl: downloadURL,
                    createdAt: new Date(),
                    userName: user?.email,
                    firstName: user?.displayName,
                });


            }
        );
    }
    return {
        progress, error, startUpload

    }
}

export default useStorage