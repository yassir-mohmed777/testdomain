import axios from "axios"
import { domain } from "../../zustand-store"



export const indexCategorice = async() => {
    let final = []
    await axios.get(domain + "/api/categorices" , {params : { populate : "*" } }).then((res) => {
        final = res.data.data
    })
    return final
}