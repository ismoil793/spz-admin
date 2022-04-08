import React from 'react';
import { Button } from '@mui/material';
import CategoryEdit from '../../components/Category/pages/edit';

const CategoryCreatePage = () => {

   const onCategoryCreate = (e) => {
      e.preventDefault()
      console.log('onCategoryCreate');
   }

   return (
      <section className={'category-page default-section'}>
         <form onSubmit={onCategoryCreate}>
            <div className={'top-head'}>
               <h2>Создать категорию</h2>
               <Button variant={'contained'} type={"submit"}>
                  Сохранить
               </Button>
            </div>
            <div className='container-fluid p-0'>

               <CategoryEdit />

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

export default CategoryCreatePage;