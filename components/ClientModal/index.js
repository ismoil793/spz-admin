import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { keys } from '../../api/constants';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import FormatPrice from '../helpers/FormatPrice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const { API_TOKEN, BASE_URL } = keys;

const ClientModal = ({ id, open, onClose }) => {

   const [credits, setCredits] = useState([]);
   const [customer, setCustomer] = useState({});
   const [modalLoading, setModalLoading] = useState(false);

   useEffect(() => {
      if (id && id > 0) {
         setModalLoading(true);
         setCredits([]);
         axios.get(`${BASE_URL}/get-credits/${id}`, {
            headers: {
               Authorization: `Bearer ${API_TOKEN}`,
            },
         })
            .then(r => {
               setCredits(r.data?.credits?.data || []);
               setCustomer(r.data?.customer || {});
               setModalLoading(false);
            })
            .catch(err => {
               console.log(err);
               setModalLoading(false);
            });
      }
   }, [id]);

   return (
      <div>
         <Modal
            open={open}
            onClose={onClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <div className={'client-modal'}>
               {
                  modalLoading ?
                     <div className={'modal-loader flex-center'}>
                        <CircularProgress
                           size={50}
                           thickness={5}
                        />
                     </div>
                     :
                     <div className={'credits-modal'}>
                        <div className={'main-info'}>
                           <h4>Клиент: {customer.first_name} {customer.last_name}</h4>
                           <div className={'text-right'}>
                              <span><strong>Id:</strong> {customer.id}</span>
                              <br />
                              <span><strong>Client ID:</strong> {customer.client_id}</span>
                           </div>
                        </div>

                        <TableContainer component={Paper} className="clinet-table">
                           <Table>
                              <TableHead>
                                 <TableRow>
                                    <TableCell>ID кредита</TableCell>
                                    <TableCell>Id заявки</TableCell>
                                    <TableCell>Intend creditId</TableCell>
                                    <TableCell>Дата заявки</TableCell>
                                    <TableCell>Статус</TableCell>
                                    <TableCell>Цель кредитной линии</TableCell>
                                    <TableCell>Контракт</TableCell>
                                    <TableCell>employment_sign</TableCell>
                                    <TableCell>Сумма</TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 {
                                    credits?.length && credits.map(credit => (
                                       <TableRow key={credit.id}>
                                          <TableCell>{credit.id}</TableCell>
                                          <TableCell>{credit.claim_id}</TableCell>
                                          <TableCell>{credit.intend_credit_id}</TableCell>
                                          <TableCell>{credit.claim_date}</TableCell>
                                          <TableCell>
                                             <span className={`status s-${credit?.status}`}>
                                                {credit.message}
                                             </span>
                                          </TableCell>
                                          <TableCell>{credit.loan_line_purpose}</TableCell>
                                          <TableCell>{credit.has_contract ? 'да' : 'нет'}</TableCell>
                                          <TableCell>{credit.employment_sign}</TableCell>
                                          <TableCell><FormatPrice price={credit.summ_claim} /></TableCell>
                                       </TableRow>
                                    ))
                                 }
                              </TableBody>
                           </Table>
                        </TableContainer>

                        {/* <div>
                           {credits.map(credit => (
                              <div key={credit.id}>
                                 <h4>Id заявки: {credit.claim_id}</h4>
                                 <ul className={'credit'}>
                                    <li>Intend creditId: {credit.intend_credit_id}</li>
                                    <li>Дата заявки: {credit.claim_date}</li>
                                    <li>Статус: <span
                                       className={`status s-${credit?.status}`}>{credit.message}</span>
                                    </li>
                                    <li>Цель кредитной линии: {credit.loan_line_purpose}</li>
                                    <li>Has contract: {credit.has_contract}</li>
                                    <li>employment_sign: {credit.employment_sign}</li>
                                    <li>Сумма: <FormatPrice price={credit.summ_claim} /></li>
                                 </ul>
                              </div>
                           ))}
                        </div> */}

                     </div>
               }
            </div>
         </Modal>
      </div>
   );
};

export default ClientModal;