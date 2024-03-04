import './styles.scss';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <p className="section-header">Как это <b>работает?</b></p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={150}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div>
            <div className="how-it-works__slide how-it-works__slide_1"></div>
            <div>
              <div>
                <p className="section-header"><small>Регистрация</small></p>
                <p>Врач через собственную систему <br />
                  клиники / личный кабинет Pax <br />
                  регистрирует клиента (создается <br />
                  ЛК клиента), вносит общую <br />
                  информацию по клиенту.</p></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="how-it-works__slide how-it-works__slide_2"></div>
            <div>
              <div>
                <p className="section-header"><small>Создание заказа</small></p>
                <p>Врач создает и прикрепляет заказ <br />
                  к созданному клиенту. В заказе <br /> указываются препараты, <br />
                  их количество, частота приема,<br /> период приема.</p></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="how-it-works__slide how-it-works__slide_3"></div>
            <div>
              <div>
                <p className="section-header"><small>Оплата заказа</small></p>
                <p>Клиент получает уведомление о <br />необходимости оплатить заказ, либо <br />
                  заказ оплачивается со стороны <br />
                  клиники, о чем врач указывает в ЛК <br />
                  Pax или в системе клинки.</p></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="how-it-works__slide how-it-works__slide_4"></div>
            <div>
              <div>
                <p className="section-header"><small>Сбор заказа</small></p>
                <p>После оплаты заказа Pax принимает <br />заказ в работу,
                  осуществляет сборку,<br /> проверку и подготовку
                  заказа.</p></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="how-it-works__slide how-it-works__slide_5"></div>
            <div>
              <div>
                <p className="section-header"><small>Доставка заказа</small></p>
                <p>После сбора заказа, через сервис Pax <br />
                  индивидуально, либо через службу <br />
                  доставки клинки заказ отправляется <br />
                  клиенту. Оповещение отправляется <br />
                  через каналы и в ЛК.</p></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="how-it-works__slide how-it-works__slide_6"></div>
            <div>
              <div>
                <p className="section-header"><small>Закрытие заказа</small></p>
                <p>После получения заказа клиентом <br />
                  врач получает уведомление в ЛК. <br />
                  При необходимости врач может <br />
                  вести переписку с пациентом в ЛК. <br />
                  Заказ закрывается в системе.</p></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};