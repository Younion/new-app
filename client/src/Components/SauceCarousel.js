import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const SauceCarousel = ({ sauceName }) => {  
    
  return (

      <div className='container-fluid'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {sauceName.map(items => 
          <SwiperSlide key={items.id}>
            <h3>{items.fields.Name}</h3>
            <p>Average Rating: {Math.round(items.fields['Average Rating'])}</p>
            <p>Average Spiciness: {Math.round(items.fields['Spiciness Dots'])}</p>
            <p>Tastings: {items.fields.Tastings}</p>
            <p>Percent Loved: {Math.round(items.fields['Percent Loved'])*100}%</p>
            <p>Heat Sources: {items.fields['Heat Sources String']}</p>
          </SwiperSlide>
          )}
        </Swiper>
      </div>
      )  
    }  
    
export default SauceCarousel  
