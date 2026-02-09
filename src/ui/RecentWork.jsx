import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// Asset Imports
import villa1 from "../assets/videos/villa1.mp4";
import villa2 from "../assets/videos/villa2.mp4";
import villa3 from "../assets/videos/villa3.mp4";
import villa4 from "../assets/videos/villa4.mp4";
import villa5 from "../assets/videos/villa5.mp4";
import villa6 from "../assets/videos/villa6.mp4";
import villa7 from "../assets/videos/villa7.mp4";
import villa8 from "../assets/videos/villa8.mp4";
import villa9 from "../assets/videos/villa9.mp4";
import villa10 from "../assets/videos/villa10.mp4";

// --- Styled Components ---

const SectionWrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  overflow: hidden; /* Prevents horizontal scrollbar during transitions */
`;

const Container = styled.div`
  max-width: 1400px; /* Increased width to show more videos */
  margin: 0 auto;
`;

const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
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
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1.5px solid rgba(16, 24, 38, 0.1);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #101826;

    &:hover {
      background: #e63946; /* Brand Red */
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
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  height: 100%;
  border: 1px solid #eee;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  height: 450px; /* Taller reels-style height */
  background: #000;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PropertyTag = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(16, 24, 38, 0.85);
  color: white;
  padding: 5px 12px;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 700;
  backdrop-filter: blur(4px);
  z-index: 2;
`;

const CardInfo = styled.div`
  padding: 1.5rem;
  h3 {
    font-size: 1.1rem;
    font-weight: 800;
    color: #101826;
    margin-bottom: 0.3rem;
  }
  .location {
    font-size: 0.85rem;
    color: #6b7280;
  }
`;

// --- Data ---
const VILLA_DATA = [
  { id: 1, title: "The Gable House", location: "Igatpuri", video: villa1, tag: "2 BHK" },
  { id: 2, title: "Celestia Villa", location: "Igatpuri", video: villa2, tag: "2 BHK" },
  { id: 3, title: "CloudHaven", location: "Igatpuri", video: villa3, tag: "11 BHK" },
  { id: 4, title: "Tiny Trail House", location: "Alibaug", video: villa4, tag: "3 BHK" },
  { id: 5, title: "Azure Estate", location: "Lonavala", video: villa5, tag: "4 BHK" },
  { id: 6, title: "Emerald Heights", location: "Nashik", video: villa6, tag: "5 BHK" },
  { id: 7, title: "The Glass House", location: "Karjat", video: villa7, tag: "3 BHK" },
  { id: 8, title: "Royal Palms", location: "Alibaug", video: villa8, tag: "6 BHK" },
  { id: 9, title: "Whispering Pines", location: "Mahabaleshwar", video: villa9, tag: "4 BHK" },
  { id: 10, title: "Sunset Retreat", location: "Goa", video: villa10, tag: "2 BHK" }
];

function RecentWork() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay play slightly for smoother scrolling
            setTimeout(() => entry.target.play().catch(() => {}), 100);
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.7 } // Must be 70% visible to play
    );

    videoRefs.current.forEach((v) => v && observer.observe(v));
    return () => observer.disconnect();
  }, []);

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

        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={20}
          slidesPerView={1.2} // Shows a peek of the next video
          freeMode={true}
          navigation={{ prevEl: ".prev-villas", nextEl: ".next-villas" }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
            1440: { slidesPerView: 4.5 }, // Shows maximum videos on large screens
          }}
          style={{ overflow: 'visible' }}
        >
          {VILLA_DATA.map((villa, idx) => (
            <SwiperSlide key={villa.id}>
              <Card>
                <VideoWrapper>
                  <video 
                    ref={el => videoRefs.current[idx] = el}
                    muted loop playsInline preload="auto"
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
        </Swiper>
      </Container>
    </SectionWrapper>
  );
}

export default RecentWork;