import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TextField, Switch, IconButton, Button } from '@mui/material';
import TextEditor from '../../components/TextEditor';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
   display: 'none',
});

const CategoryPage = () => {
   const { query } = useRouter();
   const [editorHTML, setEditorHTML] = useState();
   const [isSeoEnabled, setSeoEnabled] = useState(true);

   const handleSwitchSEO = () => {
      setSeoEnabled(prev => !prev);
   };

   return (<section className={'category-page default-section'}>
      <div className={'top-head'}>
         <h2>Имя категории {query?.id}</h2>
         <Button variant={"contained"}>
            Сохранить
         </Button>
      </div>
      <div className='container-fluid p-0'>
         <div className={'row'}>
            <div className='col-lg-4'>
               <TextField
                  className='category-title'
                  label='Имя категории RU'
                  variant='outlined'
               />
            </div>
            <div className='col-lg-4'>
               <TextField
                  className='category-title'
                  label='Имя категории UZ'
                  variant='outlined'
               />
            </div>
            <div className='col-lg-4'>
               <TextField
                  className='category-title'
                  label='Имя категории EN'
                  variant='outlined'
               />
            </div>
         </div>
         <div className='row'>
            <div className='col-12'>
               <h4>Описание <span className={'flag-bg ru'}>ru</span></h4>
            </div>
            <div className='col-lg-12'>
               <div className='text-editor-wrapper'>
                  {
                     typeof window === 'object' &&
                     <TextEditor setEditorHTML={setEditorHTML} />
                  }
               </div>
            </div>
         </div>
         <div className='row'>
            <div className='col-6'>
               <h4>Описание <span className={'flag-bg uz'}>uz</span></h4>
            </div>
            <div className='col-6'>
               <h4>Описание <span className={'flag-bg en'}>en</span></h4>
            </div>
            <div className='col-lg-6'>
               <div className='text-editor-wrapper'>
                  {
                     typeof window === 'object' &&
                     <TextEditor setEditorHTML={setEditorHTML} />
                  }
               </div>
            </div>
            <div className='col-lg-6'>
               <div className='text-editor-wrapper'>
                  {
                     typeof window === 'object' &&
                     <TextEditor setEditorHTML={setEditorHTML} />
                  }
               </div>
            </div>
         </div>
         <div className='row'>
            <div className='col-lg-12'>
               <h4>Фотограия (500x400)</h4>
            </div>
            <div className='col-lg-12'>
               <img src='https://via.placeholder.com/500x400' alt='Placeholder image' />
               <div>
                  <label htmlFor="icon-button-file">
                     <Input accept="image/*" id="icon-button-file" type="file" />
                     Загрузить
                     <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                     </IconButton>
                  </label>
               </div>
            </div>
         </div>
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
         <div className='row'>
            <div className='col-lg-12'>
               <Button variant={"contained"}>
                  Сохранить
               </Button>
            </div>
         </div>
      </div>
   </section>);
};

export default CategoryPage;