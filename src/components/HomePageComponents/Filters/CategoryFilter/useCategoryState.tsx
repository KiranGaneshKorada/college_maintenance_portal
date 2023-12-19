import { create } from "zustand";


interface CategoryStateInterface{
    category:string;
    onClickingOnCategory:(category:string)=>void
}



const useCategoryState=create<CategoryStateInterface>(setState=>({category:"",onClickingOnCategory:(category)=>(setState(()=>({category:category})))}))


export default useCategoryState