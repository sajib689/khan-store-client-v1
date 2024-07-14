import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import PopularCategoryCard from "../Components/PopularCategoryCard";

const PopularProduct = () => {
  // here we call the public api
  const axiosPublic = useAxiosPublic();
  // we set a state for data store
  const [cateGories, setCateGories] = useState([]);
  // category slider breakpoints
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // fetch the data from the server
  useEffect(() => {
    axiosPublic.get("/popularProducts").then((res) => {
      setCateGories(res.data);
    });
  }, [axiosPublic]);
  return (
    <div>
      <Carousel responsive={responsive}>
        <div>
          {cateGories.map((category) => (
            <PopularCategoryCard key={category._id} category={category} />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default PopularProduct;
