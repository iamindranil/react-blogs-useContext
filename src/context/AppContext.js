import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";



export const AppContext=createContext();
export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState();
    //data filling 

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`
        console.log(url);
        try{
            const result=await fetch(url); 
            const data=await result.json();
            setPage(data.page)
            // console.log(data.posts[0])
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }catch(error){
            alert("data can't be fetched!")
            setPage(1)
            setPosts([])
            setTotalPages()
        }
        setLoading(false)
    }
    function handlePageChange(page){
        setPage(page)
        fetchBlogPosts(page)
    }
    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}