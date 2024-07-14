import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import PopularCategoryCard from "../Components/PopularCategoryCard";

const PopularProduct = () => {
  // Initialize Axios instance from custom hook
  const axiosPublic = useAxiosPublic();
  // State to store categories data
  const [cateGories, setCateGories] = useState([]);

  // Carousel breakpoints configuration
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Fetch data from the server on component mount
  useEffect(() => {
    axiosPublic.get("/popularProducts")
      .then((res) => {
        setCateGories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching popular products:", error);
      });
  }, [axiosPublic]);

  return (
    <div className="mt-48 mb-48 container mx-auto ms-12">
      <Carousel responsive={responsive}>
        {cateGories.map((categoryy) => (
          <PopularCategoryCard key={categoryy._id} categoryy={categoryy} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularProduct;
