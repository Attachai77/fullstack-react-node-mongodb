
import api from "./index"

export default {
    index: async ( payload ) => {
        try{
            const res = await api.get('/users', payload )
            return res
        }catch(err){
            throw err.response
        }
    }
}