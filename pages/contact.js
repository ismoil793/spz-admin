import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
   return (
      <section className={'contact'}>
         <h3 className={'flex-center'}>
            По всем вопросам звонить по номеру
            <span className={'ml-1 flex-center'}><PhoneIcon color={'primary'} /> +998900000000</span>
         </h3>
         <Divider />

         <p className={'flex-center'}>Почта &nbsp; <span
            className={'flex-center'}><EmailIcon color={'primary'} />info@fintechlab.uz</span></p>
      </section>
   );
};