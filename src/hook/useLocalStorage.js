import { useEffect, useState } from "react";

export default function useLocalStorageNumber(key, initialValue){
  const [value, setValue] = useState(initialValue)
  useEffect(()=> {
    const valueStr = localStorage.getItem(key)
    if(valueStr) {
      setValue(Number(valueStr))
    }
  }, [key])
  useEffect(()=> {
    const prev = localStorage.getItem(key)
    const next = String(value)
    if(prev !== next) {
      localStorage.setItem(key, next)
    }
  }, [key, value])
  return [value, setValue]
}