import React, { useState } from 'react';
import { Switch, TextField } from '@mui/material';

const SeoInfo = () => {

   const [isSeoEnabled, setSeoEnabled] = useState(true);

   const handleSwitchSEO = () => {
      setSeoEnabled(prev => !prev);
   };

   return (
      <>
         <div className='row'>
            <div className='col-lg-12'>
               <h4>
                  SEO оптимизация <Switch checked={isSeoEnabled} onChange={handleSwitchSEO} />
               </h4>
            </div>
         </div>
         {
            isSeoEnabled &&
            <div className={'row'}>
               <div className='row mb-3'>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_title_ru'
                        variant='outlined'
                     />
                  </div>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_title_uz'
                        variant='outlined'
                     />
                  </div>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_title_en'
                        variant='outlined'
                     />
                  </div>
               </div>

               <div className='row mb-3'>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_description_ru'
                        variant='outlined'
                     />
                  </div>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_description_uz'
                        variant='outlined'
                     />
                  </div>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_description_en'
                        variant='outlined'
                     />
                  </div>
               </div>

               <div className='row mb-3'>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_keyword_ru'
                        variant='outlined'
                     />
                  </div>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_keyword_uz'
                        variant='outlined'
                     />
                  </div>
                  <div className='col-lg-4'>
                     <TextField
                        className='category-seo-title'
                        label='meta_keyword_en'
                        variant='outlined'
                     />
                  </div>
               </div>
            </div>
         }
      </>
   );
};

export default SeoInfo;