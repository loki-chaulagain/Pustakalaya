import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import styles from "../../styles/modules/Blog.module.css";
import SectionHeader from "../../components/SectionHeader";
import BlogHero from "../../components/blog/BlogHero";
import demo from "../../assets/bookDemo.jpg";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: demo,
      title: "111",
      description: "1111111111",
    },

    {
      id: 1,
      image: demo,
      title: "111",
      description: "1111111111",
    },

    {
      id: 1,
      title: "111",
      image: demo,
      description: "1111111111",
    },
  ];

  return (
    <div className={`${styles.blog_page_wrapper} container`}>
      <BlogHero />
      <div className={`${styles.blog_card_wrapper}`}></div>
      <SectionHeader
        title={"Our Recent Blogs"}
        description={"Our latest item collection of 2021"}
      />
      <div className="row ">
        {blogs &&
          blogs.map((blog: any, index: any) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-4">
              <BlogCard blog={blog} />
            </div>
          ))}
      </div>
    </div>
  );
}
