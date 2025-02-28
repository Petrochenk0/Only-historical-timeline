import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TimelineEvent } from '../../../shared/types/timeline';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './EventsSlider.scss';

interface EventsSliderProps {
  events: TimelineEvent[];
}

export const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  return (
    <div className="events-slider">
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        className="events-swiper">
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="event-card">
              <div className="event-year">{event.year}</div>
              <div className="event-description">{event.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
