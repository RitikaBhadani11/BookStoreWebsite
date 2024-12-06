import React ,{useEffect,useState}from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import list from '../../public/list.json'; // Adjust path if necessary
import Slider from "react-slick";
import Cards from './Cards'; // Import Cards component
import axios from "axios";
function FreeBook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === 'Free'));
      }catch(error){
        console.log(error);

      }
    }
    getBook();
  },[])
  //const filterData = list.filter((data) => data.category === 'Free');
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
        <p>Loremipsum, elit. Blanditiis, persolutaoptio minusuamobcaecatisimilique nobis ipsam voluptate, asperiores perferendis non repudiandae ducimus tempora nulla et. Cupiditate, magnam.</p>
      </div>
      <Slider {...settings}>
        {book.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default FreeBook;
