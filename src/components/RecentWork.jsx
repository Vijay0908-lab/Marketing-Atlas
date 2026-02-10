import React, { useRef } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

// Asset Imports (Ensure these paths are correct for your project)
import greenscapesVilla from "../assets/videos/GREENSCAPES VILLA_WEBSITE FINAL.mp4";
import heaven21SiteFinal1 from "../assets/videos/HEAVEN 21_SITE FINAL (1).mp4";
import heaven21SiteFinal from "../assets/videos/HEAVEN 21_SITE FINAL.mp4";
import nivantSiteFinal from "../assets/videos/NIVANT SITE_FINAL.mp4";
import novaraVillaWebsite from "../assets/videos/NOVARA VILLA_WEBSITE FINAL.mp4";
import sharvillaWebsite from "../assets/videos/SHARVILLA_WEBSITE FINAL.mp4";
import skyvaleWebsite from "../assets/videos/SKYVALE_WEBSITE FINAL.mp4";
import tasaFarmsWebsite from "../assets/videos/TASA FARMS_WEBSITE FINAL.mp4";
import villaDeBrisa from "../assets/videos/VILLA DE BRISA_WEBSITE.mp4";

// --- Styled Components ---

const SectionWrapper = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
  padding: 0 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 0 2rem;
  }
`;

const HeaderText = styled.div`
  h2 {
    font-size: 2.8rem;
    font-weight: 800;
    color: #101826;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  p {
    font-size: 1.1rem;
    color: #4b5563;
    max-width: 550px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.8rem;

  .nav-btn {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1.5px solid rgba(16, 24, 38, 0.1);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #101826;
    z-index: 10;

    &:hover {
      background: #e63946;
      color: white;
      border-color: #e63946;
    }

    &.swiper-button-disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  height: 100%;
  border: 1px solid #eee;

  /* Blurred State for non-active slides */
  filter: blur(2px);
  transform: scale(0.85);
  opacity: 0.5;
`;

const StyledSwiper = styled(Swiper)`
  padding: 2rem 0 4rem 0;
  overflow: visible !important;

  /* The "Focus" Effect on Active Slide */
  .swiper-slide-active ${Card} {
    filter: blur(0px);
    transform: scale(1.1);
    opacity: 1;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  height: 500px;
  background: #000;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PropertyTag = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(16, 24, 38, 0.8);
  color: white;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(4px);
  z-index: 2;
`;

const CardInfo = styled.div`
  padding: 2rem 1.5rem;
  text-align: center;
  h3 {
    font-size: 1.25rem;
    font-weight: 800;
    color: #101826;
    margin-bottom: 0.4rem;
  }
  .location {
    font-size: 0.9rem;
    color: #6b7280;
  }
`;

// --- Data ---
const VILLA_DATA = [
  { id: 1, title: "The Gable House", location: "Igatpuri", video: greenscapesVilla, tag: "2 BHK" },
  { id: 2, title: "Celestia Villa", location: "Igatpuri", video: heaven21SiteFinal1, tag: "2 BHK" },
  { id: 3, title: "CloudHaven", location: "Igatpuri", video: heaven21SiteFinal, tag: "11 BHK" },
  { id: 4, title: "Tiny Trail House", location: "Alibaug", video: nivantSiteFinal, tag: "3 BHK" },
  { id: 5, title: "Azure Estate", location: "Lonavala", video: novaraVillaWebsite, tag: "4 BHK" },
  { id: 6, title: "Emerald Heights", location: "Nashik", video: sharvillaWebsite, tag: "5 BHK" },
  { id: 7, title: "The Glass House", location: "Karjat", video: skyvaleWebsite, tag: "3 BHK" },
  { id: 8, title: "Royal Palms", location: "Alibaug", video: tasaFarmsWebsite, tag: "6 BHK" },
  { id: 9, title: "Whispering Pines", location: "Mahabaleshwar", video: villaDeBrisa, tag: "4 BHK" },
  { id: 10, title: "Sunset Retreat", location: "Goa", video: villaDeBrisa, tag: "2 BHK" } 
];

function RecentWork() {
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      
      // Compare data index with Swiper's realIndex (required for Loop mode)
      if (idx === swiper.realIndex) {
        video.play().catch((err) => console.log("Autoplay blocked or failed", err));
      } else {
        video.pause();
        video.currentTime = 0; // Resets video when it leaves focus
      }
    });
  };

  return (
    <SectionWrapper>
      <Container>
        <HeaderFlex>
          <HeaderText>
            <h2>Our Recent Masterpieces</h2>
            <p>High-end cinematic property marketing for elite villa owners.</p>
          </HeaderText>
          
          <NavButtons>
            <div className="nav-btn prev-villas"><FaChevronLeft /></div>
            <div className="nav-btn next-villas"><FaChevronRight /></div>
          </NavButtons>
        </HeaderFlex>

        <StyledSwiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1.4}
          centeredSlides={true}
          loop={true}
          speed={800} // Smooth transition speed
          navigation={{ prevEl: ".prev-villas", nextEl: ".next-villas" }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            // Initial play for the first slide
            setTimeout(() => handleSlideChange(swiper), 500);
          }}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1440: { slidesPerView: 4 },
          }}
        >
          {VILLA_DATA.map((villa, idx) => (
            <SwiperSlide key={villa.id}>
              <Card>
                <VideoWrapper>
                  <video 
                    ref={el => videoRefs.current[idx] = el}
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                  >
                    <source src={villa.video} type="video/mp4" />
                  </video>
                  <PropertyTag>{villa.tag}</PropertyTag>
                </VideoWrapper>

                <CardInfo>
                  <h3>{villa.title}</h3>
                  <p className="location">{villa.location}, Maharashtra</p>
                </CardInfo>
              </Card>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Container>
    </SectionWrapper>
  );
}

export default RecentWork;