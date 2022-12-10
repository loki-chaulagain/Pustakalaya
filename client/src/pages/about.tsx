import React from "react";
import Testimonial from "../components/about/Testimonial";
import WhoWeAre from "../components/about/WhoWeAre";
import WhyChooseUs from "../components/about/WhyChooseUs";
import styles from "../styles/modules/About.module.css";

export default function about() {
  // const [reviews, setReviews] = useState([]);
  // const fetchAllReview = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/review`);
  //     setReviews(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllReview();
  // }, []);

  const reviews = [
    {
      name: "Lokendra chaulagain",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde quod ea.",
    },

    {
      name: "Lokendra chaulagain",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde quod ea.",
    },
  ];

  return (
    <div className={`${styles.about_page_wrapper} container`}>
      <WhoWeAre />
      <WhyChooseUs />
      <Testimonial reviews={reviews} />
    </div>
  );
}
