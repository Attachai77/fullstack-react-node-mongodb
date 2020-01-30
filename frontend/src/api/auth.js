
import api from "./index"

export default {
    register: async () => {
        try{
            const users = await api.get('/users')
            return users
        }catch(e){
            console.log("Error : "+e)
        }
    }
}