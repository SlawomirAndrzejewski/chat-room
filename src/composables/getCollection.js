import { ref, watchEffect } from "vue"
import { firestore } from "../firebase/config"

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = firestore.collection(collection).orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        error.value = "could not fetch"
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { documents, error }
}

export default getCollection