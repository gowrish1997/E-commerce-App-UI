import React, { useState } from 'react'
import { useEffect } from 'react';

const useResize=()=>{
    const[size,setSize]=useState({width:window.innerWidth,height:window.innerHeight})
    useEffect(()=>{
      
        function handlesize(){
            console.log("resizing")
            setSize({width:window.innerWidth,height:window.innerHeight})
        }
        window.addEventListener('resize',handlesize)
        
        return ()=>{
          
            window.removeEventListener('resize',handlesize)
        }
    },[])

    return size;
}
export default useResize