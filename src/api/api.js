import React from 'react'

const productUrl = "https://fakestoreapi.com/products"
const categoryUrl = " https://fakestoreapi.com/products/categories"
export const productApi = async() =>{
   return await fetch(productUrl).then((res)=>{
    return res.json()
   }).catch((err)=>{
    return err
   })
}
export const categoryApi = async() =>{
    return await fetch(categoryUrl).then((res)=>{
     return res.json()
    }).catch((err)=>{
     return err
    })
 }
 