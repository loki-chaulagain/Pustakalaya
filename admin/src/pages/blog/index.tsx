import React, { useEffect } from "react";
import BlogTable from "../../components/blog/BlogTable";
import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteBlog, fetchAllBlog } from "../../app/blog/blogAction";

function Blog() {
  const { loading, blogs, error } = useAppSelector((state: any) => state.blog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBlog());
  }, [dispatch]);

  const removeBlog = (id: any) => {
    dispatch(deleteBlog(id));
  };

  return (
    <>
      <Header pageTitle={"Blogs"} />
      <BlogTable
        blogs={blogs}
        removeBlog={removeBlog}
      />
    </>
  );
}

export default Blog;
