
import api from "./index"

export default {
    register: async ( payload ) => {
        try{
            const res = await api.post('/register', payload )
            return res
        }catch(err){
            throw err.response
        }
    },
    login: async ( payload ) => {
        try{
            const res = await api.post('/login', payload )
            return res
        }catch(err){
            throw err.response
        }
    },
    afterLoginedIn: ({token, user}) => {
        // console.log(user)
        delete user.username
        delete user.password
        let AuthFullname = user.first_name ? user.first_name : "Auth Fullname" 
        AuthFullname = user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : AuthFullname 
        user.fullname = AuthFullname
        const auth = JSON.stringify(user)
        localStorage.setItem("token", token);
        localStorage.setItem("auth", auth);
    }
}