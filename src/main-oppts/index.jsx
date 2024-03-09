import './styles.scss';

export const MainOppts = () => {
  return (
    <section id="main-oppts" className="main-oppts">
      <div className="main-oppts__first">
        <p className="section-header section-header_desktop"><b>Ключевые возможности</b> <br /> для клиник</p>
        <p className="section-header section-header_mobile"><b>Ключевые возможности</b> <br /> для клиник</p>
        <ul className="main-oppts__list">
          <li>
            Закупка, расфасовка и упаковка персональных лекарств для клиента
          </li>
          <li>
            Автоматизированная система контроля цикла назначения и доставки лекарств
          </li>
          <li>
            Система контроля и работы через личные кабинета врача и пациента
          </li>
        </ul>
      </div>
      <div className="main-oppts__second" />
    </section>
  );
};