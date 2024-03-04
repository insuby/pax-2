import './styles.scss';

export const Comments = () => {
  return (
    <section id="comments" className="comments">
      <div>
        <div className="comments__first">

        </div>
        <div className="comments__second">
          <p><span className="breadcrumb">Мнение о нас</span></p>
          <p className="section-header"><b>Руслан Ким</b></p>
          <p style={{ opacity: .4}}>Руководитель инноваций РВК</p>
          <p>Об опыте использования, внедрения и доработки программного обеспечения для технологического скаутинга.</p>
        </div>
      </div>
    </section>
  );
};