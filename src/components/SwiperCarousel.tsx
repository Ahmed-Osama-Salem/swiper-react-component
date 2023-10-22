/* eslint-disable import/no-duplicates */
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import 'swiper/swiper-bundle.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

// import '@/styles/global.css';
import type { ReactElement } from 'react';
import React, { useEffect } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';

interface SwiperProps<T> {
  item: Array<T>;
  children: ReactElement<{ item: T; key: number }>;
  slidesPerView?: number;
  spaceBetween?: number;
  navigation?: boolean;
  pagination?:  undefined | boolean;
  direction?: 'vertical' | 'horizontal';
  swiperSlideClass?: string;
  swiperContainerClass?: string;
  swiperProps?: SwiperOptions;
}

export function SwiperCarousel(props: SwiperProps<{ id: number }>) {
  const {
    item,
    children,
    slidesPerView,
    spaceBetween,
    navigation,
    pagination,
    direction,
    swiperSlideClass,
    swiperContainerClass,
    swiperProps,
  } = props;
  SwiperCore.use([Navigation, Pagination]);

  useEffect(() => {
    // Load Swiper CSS from CDN
    const swiperCSSLink = document.createElement('link');
    swiperCSSLink.rel = 'stylesheet';
    swiperCSSLink.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
    document.head.appendChild(swiperCSSLink);

    // Load Swiper JavaScript from CDN
    const swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
    swiperScript.async = true;
    document.body.appendChild(swiperScript);

    swiperScript.onload = () => {
      // Swiper is ready to use, initialize it here if needed
    };
  }, []);

  const cloneItems = item.map((el) => {
    return (
      <SwiperSlide key={el.id} className={swiperSlideClass}>
        {React.cloneElement(children, {
          item: el,
          key: el.id,
        })}
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      slidesPerView={slidesPerView || 4}
      spaceBetween={spaceBetween || 30}
      navigation={navigation || false}
      pagination={pagination || false}
      direction={direction || 'horizontal'}
      modules={[Navigation, Pagination]}
      className={swiperContainerClass}
      {...swiperProps}
    >
      {cloneItems}
    </Swiper>
  );
}
