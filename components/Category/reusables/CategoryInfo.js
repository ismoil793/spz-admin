import React, { useEffect, useState } from 'react';
import { TextField, Switch, IconButton, Button } from '@mui/material';
import TextEditor from '../../TextEditor';

export default function CategoryInfo() {

   const [descriptionRu, setDescriptionRu] = useState();
   const [descriptionUz, setDescriptionUz] = useState();
   const [descriptionEn, setDescriptionEn] = useState();

   return (
      <>
         <div className={'row'}>
            <div className='col-lg-4'>
               <TextField
                  className='category-title'
                  label='Имя категории RU'
                  variant='outlined'
                  required
               />
            </div>
            <div className='col-lg-4'>
               <TextField
                  className='category-title'
                  label='Имя категории UZ'
                  variant='outlined'
                  required
               />
            </div>
            <div className='col-lg-4'>
               <TextField
                  className='category-title'
                  label='Имя категории EN'
                  variant='outlined'
                  required
               />
            </div>
         </div>
         <div className='row'>
            <div className='col-12'>
               <h4>Описание <span className={'flag-bg ru'}>ru</span></h4>
            </div>
            <div className='col-lg-12'>
               <div className='text-editor-wrapper'>
                  <TextEditor
                     setEditorHTML={setDescriptionRu}
                  />
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
                  <TextEditor
                     setEditorHTML={setDescriptionUz}
                  />
               </div>
            </div>
            <div className='col-lg-6'>
               <div className='text-editor-wrapper'>
                  <TextEditor
                     setEditorHTML={setDescriptionEn}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
