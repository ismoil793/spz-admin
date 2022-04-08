import React from 'react';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
   display: 'none',
});

const MediaInfo = ({ formData, setFormData }) => {

      const { imageUrl } = formData;

      const handleImageUpload = (e) => {
         const image = e.target?.files.length ? e.target?.files[0] : null;
         const imageUrl = URL.createObjectURL(image);

         setFormData(prev => ({
            ...prev,
            imageUrl,
            image
         }));
      };

      return (
         <div className='row'>
            <div className='col-lg-12'>
               <h4>Фотограия (500x400)</h4>
            </div>
            <div className='col-lg-12'>
               <img className={'image-upload'} src={imageUrl} alt='Placeholder image' />
               <div>
                  <label htmlFor='icon-button-file'>
                     <Input
                        accept='image/*'
                        id='icon-button-file'
                        type='file'
                        onChange={handleImageUpload}
                     />
                     Загрузить
                     <IconButton color='primary' aria-label='upload picture' component='span'>
                        <PhotoCamera />
                     </IconButton>
                  </label>
               </div>
            </div>
         </div>
      );
   }
;

export default MediaInfo;