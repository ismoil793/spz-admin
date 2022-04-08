import React from 'react';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
   display: 'none',
});

const MediaInfo = () => {
   return (
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
   );
};

export default MediaInfo;