import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Lock from '@mui/icons-material/Lock';
import { keys } from '../../api/constants';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { notifyError, notifySuccess } from '../NotifyButton';

const { API_TOKEN } = keys;
const cookies = new Cookies();

const LoginForm = () => {

   const [uName, setUName] = useState('');
   const [password, setPassword] = useState('');
   const { push } = useRouter();

   const saveLoginToken = (token) => {
      const today = new Date();
      const expires = new Date();
      expires.setDate(today.getDate() + 10);

      cookies.set('admin-sign-in', token, {
         path: '/',
         expires,
      });
   };

   const submitForm = (e) => {
      e.preventDefault();
      axios.post(`/api/admin-sign-in`, { uName, password },
      ).then(r => {
         const { token, success } = r?.data;

         if (success) {
            notifySuccess('Успешно авторизован', 3000);
            saveLoginToken(token);
            push('/');
         } else {
            notifyError('Неверные данные пользователя');
         }
      })
         .catch(e => notifyError('Что-то пошло не так...'));
   };

   return (
      <React.Fragment>
         <form onSubmit={submitForm} autoComplete={'off'}>
            <div className='wrap-input validate-input'>
               <input
                  className='input'
                  required
                  type='text'
                  name='uName'
                  placeholder='Имя пользователя'
                  value={uName}
                  onChange={(e) => setUName(e.target.value)}
                  autoComplete='off'
               />
               <PhoneIcon className={'focus-input user'} />
            </div>

            <div className='wrap-input validate-input'>
               <input
                  className='input'
                  type='password'
                  name='password-spz-bearings'
                  placeholder='Пароль'
                  value={password}
                  required
                  autoComplete='new-password'
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Lock className={'focus-input password'} />
            </div>

            <div>
               <button className='login-form-btn'>
                  Вход
               </button>
            </div>
         </form>
      </React.Fragment>
   );
};

export default LoginForm;