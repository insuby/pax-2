import './styles.scss';
import { Button } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

export const Automatisation = () => {
  return (
    <section id="automatisation" className="automatisation">
      <div className="automatisation__first">
        <p style={{ color: '#79867F'}}>Как PAX может вам помочь? </p>
        <p className="section-header"><b>Полная автоматизация</b> <br /></p>
        <p>Для сортировки и сбора лекраственных препаратов по рецепту используются передовое оборудование и
          программное обеспечение, разработанное специалистами компании.</p>
        <p className="automatisation__action-btn">
          <Button variant="contained" className="play-button"><PlayArrow /></Button>
          <span>Подробнее об автоматизации</span></p>
      </div>
      <div className="automatisation__second">
      </div>
    </section>
  );
};