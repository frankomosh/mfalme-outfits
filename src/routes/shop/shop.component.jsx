import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';

const Shop = ()=>{
  const dispatch=useDispatch();
    
    useEffect(()=>{
        const getCateriesMap=async()=>{
            const categoryMap= await getCategoriesAndDocuments()
            // console.log(categoryMap)

            dispatch(setCategoriesMap(categoryMap));
        }
        getCateriesMap();
        
    }, []);
   
    return (
        <Routes>
            
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category />}/>

        </Routes>
    );

}

export default Shop;