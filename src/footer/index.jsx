import './styles.scss';
import { LogoSVG } from '../logo';
import { Button } from '@mui/material';

export const Footer = () => {
    return (
      <section className="footer">
          <div className="footer__main">
              <div>
                  <LogoSVG />
              </div>
              <div>
                  <ul>
                      <li>Как это работает</li>
                      <li>О нас</li>
                      <li>Контакты</li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li>8 800-654-64-64</li>
                      <li>pharm.pax@gmail.com</li>
                      <li>Москва, Долгопрудная 112</li>
                  </ul>
              </div>
              <div>
                  <Button variant="contained">
                      Связаться с нами
                  </Button>
              </div>
          </div>
          <div className="footer__sub">
              <span>© 2024 | PAX HOSPITAL SOLUTIONS</span>
              <span><a href="#">Политика конфиденциальности</a></span>
          </div>
      </section>
    );
};