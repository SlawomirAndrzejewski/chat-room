import { ref } from "vue"
import { auth } from "../firebase/config"

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await auth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error("Could not create user")
        }
        await res.user.updateProfile({ displayName })
        error.value = null

        return res
        
    } catch (error) {
        error.value = error.message
    }
}

const useSignup = () => {
    return { error, signup }
}

export default useSignup