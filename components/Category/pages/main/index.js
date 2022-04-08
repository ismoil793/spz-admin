import React, { useState } from 'react';
import {
   Paper,
   Table,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
   TableContainer,
   Button,
   IconButton,
   Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import ChoiceModal from '../../../Modal/ChoiceModal';

export default function CategoryMainPage({ isSubCategory }) {

   const [categories, setCategories] = useState([
      {
         id: 1,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
         description_ru: 'Контакторы, тепловые и промежуточные реле, автоматы для защиты двигателя',
         description_uz: 'Kontaktlar, termal va oraliq o\'rni, motorni himoya qilish o\'chirgichlari',
         description_en: 'Contactors, thermal and intermediate relays, motor protection circuit breakers',
      },
      {
         id: 2,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
         description_ru: 'Контакторы, тепловые и промежуточные реле, автоматы для защиты двигателя',
         description_uz: 'Kontaktlar, termal va oraliq o\'rni, motorni himoya qilish o\'chirgichlari',
         description_en: 'Contactors, thermal and intermediate relays, motor protection circuit breakers',
      },
      {
         id: 3,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
         description_ru: 'Контакторы, тепловые и промежуточные реле, автоматы для защиты двигателя',
         description_uz: 'Kontaktlar, termal va oraliq o\'rni, motorni himoya qilish o\'chirgichlari',
         description_en: 'Contactors, thermal and intermediate relays, motor protection circuit breakers',
      },
      {
         id: 4,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
         description_ru: 'Контакторы, тепловые и промежуточные реле, автоматы для защиты двигателя',
         description_uz: 'Kontaktlar, termal va oraliq o\'rni, motorni himoya qilish o\'chirgichlari',
         description_en: 'Contactors, thermal and intermediate relays, motor protection circuit breakers',
      },
      {
         id: 5,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
         description_ru: 'Контакторы, тепловые и промежуточные реле, автоматы для защиты двигателя',
         description_uz: 'Kontaktlar, termal va oraliq o\'rni, motorni himoya qilish o\'chirgichlari',
         description_en: 'Contactors, thermal and intermediate relays, motor protection circuit breakers',
      },
      {
         id: 6,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
         description_ru: 'Контакторы, тепловые и промежуточные реле, автоматы для защиты двигателя',
         description_uz: 'Kontaktlar, termal va oraliq o\'rni, motorni himoya qilish o\'chirgichlari',
         description_en: 'Contactors, thermal and intermediate relays, motor protection circuit breakers',
      },
      {
         id: 7,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
         description_ru: 'Контакторы, тепловые и промежуточные реле, автоматы для защиты двигателя',
         description_uz: 'Kontaktlar, termal va oraliq o\'rni, motorni himoya qilish o\'chirgichlari',
         description_en: 'Contactors, thermal and intermediate relays, motor protection circuit breakers',
      },
      {
         id: 8,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
      },
      {
         id: 9,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
      },
      {
         id: 10,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
      },
      {
         id: 11,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
      },
      {
         id: 12,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
      },
      {
         id: 13,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
      },
      {
         id: 14,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
      },
   ]);
   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
   const [activeCategoryId, setActiveCategoryId] = useState(null);

   const path = isSubCategory ? '/sub-category' : '/category';

   const toggleDeleteModal = (id) => {
      if (isDeleteModalOpen) {
         setActiveCategoryId(null);
      } else {
         setActiveCategoryId(id);
      }
      setDeleteModalOpen(prev => !prev);
   };

   const deleteCategory = () => {
      setCategories([
         ...categories.filter(cat => cat.id !== activeCategoryId),
      ]);
   };

   const renderCategories = () => {
      return categories.map(cat => (
         <TableRow key={cat.id}>
            <TableCell>{cat.id}</TableCell>
            <TableCell>
               <img className='cell-img' src='https://via.placeholder.com/50x50' alt='Placeholder image' />
            </TableCell>
            <TableCell>
               <span className={'fw-500'}>{cat.name_ru}</span>
               <br />
               <div className={'cell-desc'}>
                  {cat.description_ru}
               </div>
            </TableCell>
            <TableCell>
               <span className={'fw-500'}>{cat.name_uz}</span>
               <br />
               <div className={'cell-desc'}>
                  {cat.description_uz}
               </div>
            </TableCell>
            <TableCell>
               <span className={'fw-500'}>{cat.name_en}</span>
               <br />
               <div className={'cell-desc'}>
                  {cat.description_en}
               </div>
            </TableCell>
            <TableCell className={'actions-cell'}>
               {/*<Link href='/'>*/}
               {/*   <a>*/}
               {/*      <Tooltip title='Добавить подкатегоию'>*/}
               {/*         <IconButton variant='contained' color='primary'><AddIcon /></IconButton>*/}
               {/*      </Tooltip>*/}
               {/*   </a>*/}
               {/*</Link>*/}

               <Link
                  href={{
                     pathname: `${path}/[id]`, query: { id: cat.id },
                  }}
                  as={`${path}/${cat.id}`}
               >
                  <a>
                     <Tooltip title='Просмотр/Изменить'>
                        <IconButton variant='contained' color='secondary'><VisibilityIcon /></IconButton>
                     </Tooltip>
                  </a>
               </Link>
               <Tooltip title='Удалить'>
                  <IconButton
                     onClick={() => toggleDeleteModal(cat.id)}
                     variant='contained'
                     color='error'
                  >
                     <DeleteIcon />
                  </IconButton>
               </Tooltip>
            </TableCell>
         </TableRow>
      ));
   };

   return (
      <section className={'category-main default-section'}>

         <div className={'top-head'}>
            <h2>Список {isSubCategory ? 'Подкатегорий' : 'Категорий'}</h2>
            <Link href={`${path}/create`}>
               <a>
                  <Button variant='contained'>
                     <AddIcon /> Новая {isSubCategory && 'под'}категория
                  </Button>
               </a>
            </Link>
         </div>

         <div className='container-fluid p-0'>
            <div className={'row'}>
               <div className='col-lg-12'>
                  <div className={'spz-table'}>
                     <TableContainer component={Paper} className='clinet-table'>
                        <Table className={'category-table'}>
                           <TableHead>
                              <TableRow>
                                 <TableCell>ID</TableCell>
                                 <TableCell>Фото</TableCell>
                                 <TableCell>
                                    Название/Описание <span className={'flag-bg ru'}>ru</span>
                                 </TableCell>
                                 <TableCell>
                                    Название/Описание <span className={'flag-bg uz'}>uz</span>
                                 </TableCell>
                                 <TableCell>
                                    Название/Описание <span className={'flag-bg en'}>en</span>
                                 </TableCell>
                                 <TableCell>Действие</TableCell>
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {renderCategories()}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </div>
               </div>
            </div>
         </div>

         <ChoiceModal open={isDeleteModalOpen} onClose={toggleDeleteModal} callback={deleteCategory} />
      </section>
   );
};