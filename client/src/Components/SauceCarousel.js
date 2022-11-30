import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const SauceCarousel = ({ sauceName }) => {  
    
  return (

      <div className='container-fluid'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {sauceName.map(sauce => 
          <SwiperSlide key={sauce.hot_sauce_name}>
            <h3>{sauce.hot_sauce_name}</h3>
            <p>Average Rating: {Math.round(sauce['hot_sauce_overall'])}</p>
            <p>Average Spiciness: {Math.round(sauce['hot_sauce_spiciness'])}</p>
            <p>Tastings: {sauce['hot_sauce_tastings']}</p>
            {/* <p>Percent Loved: {Math.round(sauce['love_pct'])*100}%</p> */}
            {/* <p>Heat Sources: {sauce['Heat Sources String']}</p> */}
          </SwiperSlide>
          )}
        </Swiper>
      </div>
      )  
    }  
    
export default SauceCarousel  
