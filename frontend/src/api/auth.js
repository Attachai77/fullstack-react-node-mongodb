
import api from "./index"

export default {
    register: async ( payload ) => {
        try{
            const users = await api.post('/register', payload )
            return users
        }catch(err){
            throw err.response
        }
    }
}