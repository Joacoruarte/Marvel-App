import { useState } from "react"
import apiParams from "../config"
export const useGetDetailOfCharacter = () =>{ 
    const [loading , setLoading] = useState(false)
    const { apikey , baseURL , hash , ts} = apiParams

    const getCharacterInfo = async(id) => { 
        setLoading(true)
        let res = await fetch(`${baseURL}/v1/public/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
        let json = await res.json()
        setLoading(false)
        return json.data.results[0]
    }

    const getCharacterComics = async(id) => {
        setLoading(true)
        let res = await fetch(`${baseURL}/v1/public/characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`)
        let json = await res.json()
        setLoading(false)
        return json.data.results
    }

    return { loading , getCharacterInfo , getCharacterComics }
}