import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
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
    font-size: 1.2rem;
    color: #4b5563;
    max-width: 550px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  @media (max-width: 768px) {
    display: none;
  }
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
  filter: blur(0px);
  transform: scale(0.95);
  opacity: 1;
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
  cursor: pointer;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .video-controls {
    opacity: 1;
  }
`;

const VideoControls = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
`;

const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(230, 57, 70, 0.9);
    transform: scale(1.1);
  }
`;

const FullscreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const ModalContent = styled.div`
  position: relative;
  width: 90vw;
  max-width: 1200px;
  height: 80vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: rgba(230, 57, 70, 0.9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: rgba(230, 57, 70, 1);
    transform: scale(1.1);
  }
`;

const ModalInfo = styled.div`
  position: absolute;
  bottom: -80px;
  left: 0;
  color: white;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    opacity: 0.8;
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
  { id: 1, title: "The Gable House", location: "Igatpuri", video: greenscapesVilla},
  { id: 2, title: "Celestia Villa", location: "Igatpuri", video: heaven21SiteFinal1},
  { id: 3, title: "CloudHaven", location: "Igatpuri", video: heaven21SiteFinal},
  { id: 4, title: "Tiny Trail House", location: "Alibaug", video: nivantSiteFinal},
  { id: 5, title: "Azure Estate", location: "Lonavala", video: novaraVillaWebsite},
  { id: 6, title: "Emerald Heights", location: "Nashik", video: sharvillaWebsite},
  { id: 7, title: "The Glass House", location: "Karjat", video: skyvaleWebsite},
  { id: 8, title: "Royal Palms", location: "Alibaug", video: tasaFarmsWebsite},
  { id: 9, title: "Whispering Pines", location: "Mahabaleshwar", video: villaDeBrisa},
  { id: 10, title: "Sunset Retreat", location: "Goa", video: villaDeBrisa} 
];

function RecentWork() {
  const videoRefs = useRef([]);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [videoMuted, setVideoMuted] = useState({});

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

  const openFullscreen = (villa, videoIndex) => {
    setFullscreenVideo({ villa, videoIndex });
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
  };

  const toggleMute = (videoIndex, event) => {
    event.stopPropagation();
    const video = videoRefs.current[videoIndex];
    if (video) {
      video.muted = !video.muted;
      setVideoMuted(prev => ({
        ...prev,
        [videoIndex]: video.muted
      }));
    }
  };

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      }
    };

    if (fullscreenVideo) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [fullscreenVideo]);

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
                <VideoWrapper onClick={() => openFullscreen(villa, idx)}>
                  <video 
                    ref={el => videoRefs.current[idx] = el}
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                  >
                    <source src={villa.video} type="video/mp4" />
                  </video>
                  
             
                  
                  <VideoControls className="video-controls">
                    <ControlButton 
                      onClick={(e) => toggleMute(idx, e)}
                      title={videoMuted[idx] !== false ? "Unmute" : "Mute"}
                    >
                      {videoMuted[idx] !== false ? <FaVolumeMute /> : <FaVolumeUp />}
                    </ControlButton>
                    <ControlButton 
                      onClick={(e) => {
                        e.stopPropagation();
                        openFullscreen(villa, idx);
                      }}
                      title="View Fullscreen"
                    >
                      <FaExpand />
                    </ControlButton>
                  </VideoControls>
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

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <FullscreenModal onClick={closeFullscreen}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeFullscreen}>
              <FaTimes />
            </CloseButton>
            
            <video 
              autoPlay 
              controls 
              loop 
              playsInline
            >
              <source src={fullscreenVideo.villa.video} type="video/mp4" />
            </video>
            
            <ModalInfo>
              <h3>{fullscreenVideo.villa.title}</h3>
              <p>{fullscreenVideo.villa.location}, Maharashtra</p>
            </ModalInfo>
          </ModalContent>
        </FullscreenModal>
      )}
    </SectionWrapper>
  );
}

export default RecentWork;