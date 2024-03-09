import './styles.scss';
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';
import InputMask from 'react-input-mask';

export const Service = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="service" className="service">
      <div>
        <p className="section-header section-header_desktop">Попробуйте наш сервис <br /> <b>уже сегодня</b></p>
        <p className="section-header section-header_mobile">Попробуйте наш сервис <b> <br /> уже сегодня</b></p>
        <Button
          variant="contained"
          style={{
            padding: '0.7rem 1.4rem',
          }}
          onClick={handleClickOpen}>
          Начать
        </Button>
      </div>
      <Dialog
        onClose={handleClose}
        className="customized-dialog"
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle className="dialog-title">
          <p className="section-header"><b>Связаться с нами</b></p>
          <p>Оставьте свой телефон или почту <br /> и мы с вами свяжемся!</p>
        </DialogTitle>
        <DialogContent dividers>
          <div className="dialog-content">
            <div>
              <TextField id="name" variant="outlined" placeholder="Ваше Имя" required />
            </div>
            <div>
              <InputMask id="phone" mask="+7 (999) 999 99-99" placeholder="+7 (999) 999 99-99">
                {(inputProps) => <TextField {...inputProps} type="tel" required />}
              </InputMask>
            </div>
            <div />
            <div><Button variant="contained">Отправить</Button></div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};