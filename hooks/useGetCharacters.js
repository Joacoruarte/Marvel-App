import { useState } from "react"
import apiParams from "../config"
export const useGetCharacters = () => {
    const [loading , setLoading] = useState(false)
    const { apikey , baseURL , hash , ts} = apiParams

    const getCharacters = async () => {
        setLoading(true)        
        let res = await fetch(`${baseURL}/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`)
        let characters = await res.json()
        setLoading(false)
        return characters.data.results
    }

    const searchCharacter = async (search) => {        
        let res = await fetch(`${baseURL}/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${search}`)
        let characters = await res.json()
        setLoading(false)
        return characters.data.results
    }

    return { loading , getCharacters, searchCharacter }
}