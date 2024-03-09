import './styles.scss';
import { Button, TextField } from '@mui/material';
import InputMask from 'react-input-mask';

export const Process = () => {
  return (
    <section id="process" className="process">
      <div>
        <div className="process__first">
          <p className="section-header"><b>Как видит процесс</b> <br /> ваш пациент?</p>
          <ul className="process__list">
            <li>
              <span>1</span>
              <div>
                <h6>Регистрация</h6>
                <p>Закупка, расфасовка и упаковка персональных лекарств для клиента</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <h6>Отслеживание статусов</h6>
                <p>Автоматизированная система контроля цикла назначения и доставки лекарств</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <h6>Получение заказа</h6>
                <p>Система контроля и работы через личные кабинета врача и пациента</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="process__second">
          <p className="section-header">
            <b>Хотите узнать <br />
              больше?</b>
          </p>
          <p>Оставьте свой телефон или почту и мы с вами свяжемся!</p>
          <div>
            <TextField id="name" variant="outlined" placeholder="Ваше Имя" required />
            <InputMask id="phone" mask="+7 (999) 999 99-99" placeholder="+7 (999) 999 99-99">
              {(inputProps) => <TextField {...inputProps} type="tel" required />}
            </InputMask>
            <Button variant="contained">Отправить</Button>
          </div>
        </div>
      </div>
    </section>
  );
};