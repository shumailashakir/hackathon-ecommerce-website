import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
    *[_type == "product"]{
    _id,
    title,
    description,
    price,
    discountPercentage,
    tags,
    "imageUrl" : image.asset->url
    
    }`)



    export const fourpro = defineQuery(`
        *[_type == "product"][0..3]{
        _id,
        title,
        description,
        price,
        discountPercentage,
        tags,
        "imageUrl" : image.asset->url
        
        }`)