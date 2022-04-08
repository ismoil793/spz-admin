import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import CategoryEdit from '../../components/Category/pages/edit';

const SubCategoryPage = () => {
   const { query } = useRouter();

   const onSubCategoryEditSubmit = (e) => {
      e.preventDefault()
      console.log('onSubCategoryEditSubmit');
   }

   return (
      <section className={'category-page default-section'}>
         <form onSubmit={onSubCategoryEditSubmit}>
            <div className={'top-head'}>
               <h2>Имя подкатегории {query?.id}</h2>
               <Button variant={'contained'} type={"submit"}>
                  Сохранить
               </Button>
            </div>
            <div className='container-fluid p-0'>

               <CategoryEdit isSubCategory />

               <div className='row'>
                  <div className='col-lg-12'>
                     <Button variant={'contained'} type={"submit"}>
                        Сохранить
                     </Button>
                  </div>
               </div>
            </div>
         </form>
      </section>);
};

export default SubCategoryPage;