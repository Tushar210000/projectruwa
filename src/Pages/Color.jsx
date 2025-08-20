
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

const ActiveAdsSlider = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [activeAds, setActiveAds] = useState([]);

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem('my-ads')) || [];
    const filtered = storedAds.filter(ad => ad.status === 'Active');
    setActiveAds(filtered);
  }, []);

  const handleSlideChange = (swiper) => {
    const currentAd = activeAds[swiper.realIndex];

    if (currentAd?.mediaType === 'image') {
      // For images, go to next slide after 3s
      setTimeout(() => swiper.slideNext(), 3000);
    } else if (currentAd?.mediaType === 'video') {
      // For videos, wait until video ends
      const videoEl = document.getElementById(`video-${currentAd.id}`);
      if (videoEl) {
        videoEl.currentTime = 0;
        videoEl.play();
        videoEl.onended = () => {
          swiper.slideNext();
        };
      }
    }
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center py-4">
      <div className="w-100 d-flex justify-content-end pe-4">
        <button className="btn btn-secondary" onClick={() => navigate('/final-ads')}>
          Back to Final Ads
        </button>
      </div>

      {activeAds.length === 0 ? (
        <div className="alert alert-info text-center mt-4">No active ads available.</div>
      ) : (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => handleSlideChange(swiper), 100);
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          style={{ width: '70vw', height: '40vh' }}
        >
          {activeAds.map((ad) => (
            <SwiperSlide key={ad.id}>
              <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                {ad.mediaType === 'image' ? (
                  <img
                    src={ad.media}
                    alt="ad"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <video
                    id={`video-${ad.id}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    controls={false}
                  >
                    <source src={ad.media} />
                  </video>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ActiveAdsSlider;
