import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"
import { Autoplay, FreeMode, Pagination , Navigation } from "swiper/modules"
import { FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"


const ReviewSlider = () => {

    const[reviews, setReviews] = useState([])
    const truncateWords = 15

    useEffect(() => {
        ;(async ()=> {
            const {data} = await apiConnector(
                "GET",
                ratingsEndpoints.REVIEWS_DETAILS_API
            )
            if(data?.success){
                setReviews(data?.data)
            }
        })()
    },[])

  return (
    <div className='text-white'>
        <div className='h-[190px] max-w-maxContentTab lg:max-w-maxContent my-[50px] '>
            <Swiper
              slidesPerView={4}
              spaceBetween={25}
              loop={true}
              freeMode={true}
              autoplay={{
                delay:2500,
                disableOnInteraction:false,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className='w-[100vw]'
              >
               {reviews.map((review,i) => {
                return(
                    <SwiperSlide key={i}>
                        <div>
                            <div>
                                <img
                                  src={
                                    review?.user?.image
                                     ? review?.user?.image
                                     :`https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                                  }
                                  alt=''
                                  className='h-9 rounded-full object-cover'
                                  />
                                  <div>
                                    <h1 className='font-semibold text-richblack-5'>
                                          {`${review?.user?.firstName} ${review?.user?.lastName}`}
                                    </h1>
                                    <h2 className='text-[12px] font-medium text-richblue-500'>
                                        {review?.course?.courseName}
                                    </h2>
                                  </div>
                            </div>
                            <p>
                                {review?.review.split(" ").length > truncateWords
                                ? `${review?.review.split(" ").slice(0,truncateWords).join(" ")}...`
                                :`${review.review}`}
                            </p>
                            <div>
                                <h3>
                                    {review.rating.toFixed(1)}
                                </h3>
                                <ReactStars
                                count={5}
                                value={review.rating}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar/>}
                                fullIcon={<FaStar/>}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                )
               })}
               {/* <SwiperSlide>Slide 1</SwiperSlide> */}
            </Swiper>
        </div>
    </div>
  )
}

export default ReviewSlider