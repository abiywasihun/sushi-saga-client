import React, { createContext,useEffect, useContext, useState } from "react";

export const SushiContext = createContext();
export function useSushi() {
    return useContext(SushiContext);
  }
  const API = "http://localhost:3000/sushis"
  export function SushiContextProvider({ children }) {
   
    const [sushis,setSushis]=useState([])
    const [counter,setCounter]=useState(0)
    const [count,setCount]=useState([])
    const [budget,setBudget]=useState(100)
    const getFromApi=()=>{
        fetch(API).then(response=>response.json()).then(json=>{
          setSushis(json)})
      }
      const eatSushis=(id,price)=>{
        if(budget>=price){
          const newSushis=sushis.map((sushi)=>{
            if(sushi.id==id){
              return{...sushi,eaten:true};
            }else{return sushi}
          })
          const newCount=count
          newCount.push(1)
          setCount(newCount)
          setBudget(budget-price)
          setSushis(newSushis)
        }else{alert("Sorry")}
      }
      useEffect(()=>{
        getFromApi()
      },[])
    const getSushis=()=>{
        setCounter(counter+4)
        displaySushis()
        
      }
    const displaySushis=()=>{
        return sushis.slice(counter,counter+4)
      }
    return (
      <SushiContext.Provider value={{sushis,counter,count,budget,getSushis,displaySushis,eatSushis}}>
        {children}
      </SushiContext.Provider>
    );
  }


  


  
