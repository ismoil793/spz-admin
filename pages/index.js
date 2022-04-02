import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { keys } from '../api/constants';
import ClientModal from '../components/ClientModal';

const { API_TOKEN, BASE_URL } = keys;

// const API_TOKEN = '$2a$12$9o.c7thWW10m1PCtmDvto.DEoRn1Pye7jfU0vtXuJZJl02lij2sRy';
// const API_TOKEN2 = '$2a$12$Jp44MNjPGIYnvfdI5QzwzOjybfwdLQYTdxV9SRzmxa1tGBqL16Ph6';

export default function Home() {

   const [loading, setLoading] = useState(false);
   const [isClientModalOpen, setClientModalOpen] = useState(false);
   const [clientModalId, setClientModalId] = useState(-1);
   const [clients, setClients] = useState([]);

   useEffect(() => {
      setLoading(true);
      axios.get(`${BASE_URL}/get-customers`, {
         headers: {
            Authorization: `Bearer ${API_TOKEN}`,
         },
         params: {
            perPage: 10000,
         },
      })
         .then(res => {
            setClients(res?.data?.data || []);
            setLoading(false);
         })
         .catch(err => {
            console.log(err);
            setLoading(false);
         });
   }, []);

   const columns = [
      {
         field: 'Кредиты', headerName: 'Кредиты', width: 100, sortable: false,
         valueGetter: () => 'Посмотреть',
      },
      { field: 'id', headerName: 'ID', width: 20 },
      { field: 'client_id', headerName: 'Клиент ID' },
      // { field: 'firstName', headerName: 'First name', width: 200 },
      // { field: 'lastName', headerName: 'Last name', width: 200 },
      {
         field: 'fullName',
         headerName: 'Имя',
         // description: 'This column has a value getter and is not sortable.',
         sortable: false,
         valueGetter: (params) =>
            `${params.row.first_name || ''} ${params.row.last_name || ''}`,
         width: 150,
      },
      {
         field: 'birth_date',
         headerName: 'Дата рождения',
         width: 150,
         // type: 'number',
      },
      {
         field: 'birth_country',
         headerName: 'Страна Рождения',
         width: 170,
      },
      {
         field: 'сitizenship',
         headerName: 'Гражданство',
         width: 150,
      },
      {
         field: 'birth_place',
         headerName: 'Город',
         width: 150,
      },
      {
         field: 'phone',
         headerName: 'Телефон',
         width: 150,
      },
      {
         field: 'series',
         headerName: 'Серия',
         width: 80,
      },
      {
         field: 'tin',
         headerName: 'tin',
         width: 150,
      },
      {
         field: 'pin',
         headerName: 'pin',
         width: 150,
      },
      {
         field: 'doc_issue_date',
         headerName: 'Дата выдачи',
         width: 150,
      },
      {
         field: 'doc_expire_date',
         headerName: 'Действителен до',
         width: 150,
      },
      {
         field: 'doc_issue_place',
         headerName: 'Выдано',
         width: 150,
      },
   ];

   const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
   ];

   const onCellClick = (params) => {
      const { field, row } = params;
      if (field === 'Кредиты' && row?.id) {
         setClientModalOpen(true);
         setClientModalId(row.id);
      }
   };

   const onClientModalClose = () => {
      setClientModalOpen(false);
      setClientModalId(-1);
   };

   return (
      <div className={styles.container}>
         <Head>
            <title>Клиенты</title>
            <meta name='description' content='Fintech Labs' />
         </Head>

         <h2>Список Клиентов</h2>

         <div className={'clients-data-grid'}
            // style={{height: 200, width: '100%'}}
         >
            <DataGrid
               rows={clients}
               columns={columns}
               pageSize={10}
               rowsPerPageOptions={[5]}
               autoHeight={true}
               loading={loading}
               // checkboxSelection
               disableColumnMenu={true}
               isRowSelectable={() => false}
               onCellClick={onCellClick}
            />
         </div>


         <ClientModal
            id={clientModalId}
            open={isClientModalOpen}
            onClose={onClientModalClose}
         />
      </div>
   );
}
