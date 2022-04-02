import React from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const ChoiceModal = ({ open, onClose, callback }) => {

   const handleChoiceApprove = async () => {
      await callback()
      onClose()
   }

   return (
      <div>
         <Modal
            open={open}
            onClose={onClose}
            aria-labelledby='modal-choice'
            aria-describedby='modal-modal-choose'
         >
            <div className={'choice-modal'}>
               <div>
                  <div className={'mb-3'}>Вы уверены?</div>
                  <Button onClick={handleChoiceApprove} variant='contained'>Да</Button>
                  <Button onClick={onClose} variant='contained' color={'error'} className={'ml-1'}>Нет</Button>
               </div>
            </div>
         </Modal>
      </div>
   );
};

export default ChoiceModal;