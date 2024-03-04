import './styles.scss';
import { Button, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import { LogoSVG } from '../logo';
import InputMask from 'react-input-mask';
import { Fragment, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <section className="header__main header__main_mobile">
        <LogoSVG />
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {
              !!!anchorEl
                ? <MenuIcon style={{
                  width: 50,
                  height: 50,
                }} />
                : <CloseIcon style={{
                  width: 50,
                  height: 50,
                }} />

            }
          </IconButton>
          <Menu
            onBackdropClick={handleClose}
            id="menu-appbar"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
          >
            <MenuItem onClick={handleClose}>Как это работает</MenuItem>
            <MenuItem onClick={handleClose}>О нас</MenuItem>
            <MenuItem onClick={handleClose}>Контакты</MenuItem>
            <div style={{ height: 20 }} />
            <MenuItem style={{ fontWeight: 900 }}>+7 495 006 2157</MenuItem>
            <MenuItem style={{ fontWeight: 900, display: 'flex', columnGap: '20px' }} >
              <Button variant="contained">
                Врач
              </Button>
              <Button variant="contained">
                Пациент
              </Button>
            </MenuItem>
          </Menu>
        </div>
      </section>
      <section className="header">
        <div className="header__main header__main_desktop">
          <ul>
            <li>
              <LogoSVG />
            </li>
            <li><a>Как это работает</a>
            </li>
            <li><a>О нас</a></li>
            <li><a>Контакты</a></li>
          </ul>
          <ul>
            <li>+7 495 006 2157</li>
            <li>
              <Button variant="contained">
                Врач
              </Button>
            </li>
            <li>
              <Button variant="contained">
                Пациент
              </Button>
            </li>
          </ul>
        </div>
        <div className="header__sub sub-block">
          <div className="sub-block__first">
            <p className="section-header" style={{ margin: 0 }}>
              <b>Комплексный продукт</b> для сбора лекарственных препаратов в персональные наборы для пациентов клиник
            </p>
            <p className="sub-block__action-title">Есть вопросы, мы с Вами свяжемся?</p>
            <div className="sub-block__form">
              <TextField id="name" variant="outlined" placeholder="Ваше Имя" required />
              <InputMask id="phone" mask="+7 (999) 999 99-99" placeholder="+7 (999) 999 99-99">
                {(inputProps) => <TextField {...inputProps} type="tel" required />}
              </InputMask>
              <Button variant="contained" style={{
                padding: '0 1.4rem',
              }}>Отправить</Button>
            </div>
          </div>
          <div className="sub-block__second"></div>
        </div>
      </section>
      <section className="header-mobile-block">
        <p className="sub-block__action-title">Есть вопросы, мы с Вами свяжемся?</p>
        <div className="sub-block__form">
          <TextField id="name" variant="outlined" placeholder="Ваше Имя" required />
          <InputMask id="phone" mask="+7 (999) 999 99-99" placeholder="+7 (999) 999 99-99">
            {(inputProps) => <TextField {...inputProps} type="tel" required />}
          </InputMask>
          <Button variant="contained" style={{
            padding: '0 1.4rem',
          }}>Отправить</Button>
        </div>
      </section>
    </Fragment>

  );
};