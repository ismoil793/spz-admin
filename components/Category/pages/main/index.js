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
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import ChoiceModal from '../../../Modal/ChoiceModal';

export default function CategoryMainPage() {

   const [categories, setCategories] = useState([
      {
         id: 1,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
      },
      {
         id: 2,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
      },
      {
         id: 3,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
      },
      {
         id: 4,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
      },
      {
         id: 5,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
      },
      {
         id: 6,
         slug: '/vali',
         name_ru: 'Валы',
         name_uz: 'Val',
         name_en: 'Shafts',
      },
      {
         id: 7,
         slug: '/podshipniki',
         name_ru: 'Подшипники',
         name_uz: 'Podshipniklar',
         name_en: 'Bearings',
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

   const toggleDeleteModal = (id) => {
      if(isDeleteModalOpen) {
         setActiveCategoryId(null)
      }
      else {
         setActiveCategoryId(id)
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
            <TableCell>{cat.name_ru}</TableCell>
            <TableCell>{cat.name_uz}</TableCell>
            <TableCell>{cat.name_en}</TableCell>
            <TableCell>{cat.slug}</TableCell>
            <TableCell className={'actions-cell'}>
               <Tooltip title='Добавить'>
                  <Link href='/'>
                     <a>
                        <IconButton variant='contained' color='primary'><AddIcon /></IconButton>
                     </a>
                  </Link>
               </Tooltip>
               <Tooltip title='Изменить'>
                  <Link href='/'>
                     <a>
                        <IconButton variant='contained' color='secondary'><EditIcon /></IconButton>
                     </a>
                  </Link>
               </Tooltip>
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
      <section className={'category-main'}>

         <div className={'d-flex justify-content-between align-items-center'}>
            <h2>Список Категорий</h2>
            <Link href='/'>
               <a>
                  <Button variant='contained'><AddIcon /> Новая категория</Button>
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
                                 <TableCell>ID категории</TableCell>
                                 <TableCell>Название ru</TableCell>
                                 <TableCell>Название uz</TableCell>
                                 <TableCell>Название en</TableCell>
                                 <TableCell>Slug</TableCell>
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