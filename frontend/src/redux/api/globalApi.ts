import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Banner, Category, Contact, SmallBanner, Review, Product, Subscriber } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),

  tagTypes: ["Banner", "SmallBanner", "Category", "Subscriber", "Contact", "Color", "Size", "Review", "Product"],
  endpoints: (builder) => ({
    getBanners: builder.query<Banner[], void>({
      query() {
        return {
          url: `/banner`,
        };
      },
      transformResponse: (res: Banner[]) => res.sort((a: Banner, b: Banner) => b.id - a.id),
      providesTags: ["Banner"],
    }),

    getBanner: builder.query<Banner, number>({
      query(id) {
        return {
          url: `/banner/${id}`,
        };
      },
      providesTags: ["Banner"],
    }),

    createContact: builder.mutation<Contact, FormData>({
      query(newContact) {
        return {
          url: "/contact",
          method: "POST",
          body: newContact,
        };
      },
      invalidatesTags: ["Contact"],
    }),

    createSubscriber: builder.mutation<Subscriber, FormData>({
      query(newSubscriber) {
        return {
          url: "/subscriber",
          method: "POST",
          body: newSubscriber,
        };
      },
      invalidatesTags: ["Subscriber"],
    }),

    getSmallBanners: builder.query<SmallBanner[], void>({
      query() {
        return {
          url: `/smallBanner`,
        };
      },
      transformResponse: (res: SmallBanner[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["SmallBanner"],
    }),

    getCategories: builder.query<Category[], void>({
      query() {
        return {
          url: `/category`,
        };
      },
      transformResponse: (res: Category[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Category"],
    }),

    getCategory: builder.query<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
        };
      },
      providesTags: ["Category"],
    }),

    getReviews: builder.query<Review[], void>({
      query() {
        return {
          url: `/review`,
        };
      },
      transformResponse: (res: Review[]) => res.sort((a: Review, b: Review) => b.id - a.id),
      providesTags: ["Review"],
    }),

    getProducts: builder.query<Product[], void>({
      query() {
        return {
          url: `/product`,
        };
      },
      transformResponse: (res: Product[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Product"],
    }),

    getProduct: builder.query<Product, number>({
      query(id) {
        return {
          url: `/product/${id}`,
        };
      },
      providesTags: ["Product"],
    }),
  }),
});

export const { useCreateSubscriberMutation,useCreateContactMutation,useGetBannersQuery, useGetBannerQuery, useGetSmallBannersQuery, useGetCategoriesQuery, useGetCategoryQuery, useGetReviewsQuery, useGetProductsQuery, useGetProductQuery } = globalApi;
