import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Banner, Category, Contact, SmallBanner, Subscriber, Color, Size, Review,Product } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),

  tagTypes: ["Banner", "SmallBanner", "Category", "Subscriber", "Contact", "Color", "Size", "Review","Product"],
  endpoints: (builder) => ({
    getBanners: builder.query<Banner[], void>({
      query() {
        return {
          url: `/banner`,
          // credentials: "include",
        };
      },
      transformResponse: (res: Banner[]) => res.sort((a: Banner, b: Banner) => b.id - a.id),
      providesTags: ["Banner"],
    }),

    getBanner: builder.query<Banner, number>({
      query(id) {
        return {
          url: `/banner/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Banner"],
    }),

    createNewBanner: builder.mutation<Banner, FormData>({
      query(newBanner) {
        return {
          url: "/banner",
          method: "POST",
          // credentials: 'include',
          body: newBanner,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    updateBanner: builder.mutation<Banner, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/banner/${id}`,
          method: "PATCH",
          // credentials: 'include',
          body: updatedData,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    deleteBanner: builder.mutation<Banner, number>({
      query(id) {
        return {
          url: `/banner/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Banner"],
    }),

    // Small Banner
    getSmallBanners: builder.query<SmallBanner[], void>({
      query() {
        return {
          url: `/smallBanner`,
        };
      },
      transformResponse: (res: SmallBanner[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["SmallBanner"],
    }),

    createSmallBanner: builder.mutation<SmallBanner, FormData>({
      query(newSmallBanner) {
        return {
          url: "/smallBanner",
          method: "POST",
          body: newSmallBanner,
        };
      },
      invalidatesTags: ["SmallBanner"],
    }),

    deleteSmallBanner: builder.mutation<SmallBanner, number>({
      query(id) {
        return {
          url: `/smallBanner/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["SmallBanner"],
    }),

    //Category ================================================================>
    getCategories: builder.query<Category[], void>({
      query() {
        return {
          url: `/category`,
          // credentials: "include",
        };
      },
      transformResponse: (res: Category[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Category"],
    }),

    getCategory: builder.query<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Category"],
    }),

    createNewCategory: builder.mutation<Category, FormData>({
      query(newCategory) {
        return {
          url: "/category",
          method: "POST",
          // credentials: 'include',
          body: newCategory,
        };
      },
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation<Category, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/category/${id}`,
          method: "PATCH",
          // credentials: 'include',
          body: updatedData,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Category"],
    }),

    // Subscriber------------------------------------->
    getSubscribers: builder.query<Subscriber[], void>({
      query() {
        return {
          url: `/subscriber`,
        };
      },
      transformResponse: (res: Subscriber[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Subscriber"],
    }),

    deleteSubscriber: builder.mutation<Subscriber, number>({
      query(id) {
        return {
          url: `/subscriber/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Subscriber"],
    }),

    // Contact----------------------------------------->
    getContacts: builder.query<Contact[], void>({
      query() {
        return {
          url: `/contact`,
        };
      },
      transformResponse: (res: Contact[]) => res.sort((a: Contact, b: Contact) => b.id - a.id),
      providesTags: ["Contact"],
    }),

    getContact: builder.query<Contact, number>({
      query(id) {
        return {
          url: `/contact/${id}`,
        };
      },
      providesTags: ["Contact"],
    }),

    updateContact: builder.mutation<Contact, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/contact/${id}`,
          method: "PATCH",
          body: updatedData,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    deleteContact: builder.mutation<Contact, number>({
      query(id) {
        return {
          url: `/contact/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Contact"],
    }),

    // Color-------------------------------------------->
    createNewColor: builder.mutation<Color, FormData>({
      query(newColor) {
        return {
          url: "/color",
          method: "POST",
          body: newColor,
        };
      },
      invalidatesTags: ["Color"],
    }),

    getColors: builder.query<Color[], void>({
      query() {
        return {
          url: `/color`,
        };
      },
      transformResponse: (res: Color[]) => res.sort((a: Color, b: Color) => b.id - a.id),
      providesTags: ["Color"],
    }),

    deleteColor: builder.mutation<Color, number>({
      query(id) {
        return {
          url: `/color/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Color"],
    }),

    // Size-------------------------------------------------->
    createNewSize: builder.mutation<Size, FormData>({
      query(newSize) {
        return {
          url: "/size",
          method: "POST",
          body: newSize,
        };
      },
      invalidatesTags: ["Size"],
    }),

    getSizes: builder.query<Size[], void>({
      query() {
        return {
          url: `/size`,
        };
      },
      transformResponse: (res: Size[]) => res.sort((a: Size, b: Size) => b.id - a.id),
      providesTags: ["Size"],
    }),

    deleteSize: builder.mutation<Size, number>({
      query(id) {
        return {
          url: `/size/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Size"],
    }),

    // Review

    createReview: builder.mutation<Review, FormData>({
      query(newReview) {
        return {
          url: "/review",
          method: "POST",
          body: newReview,
        };
      },
      invalidatesTags: ["Review"],
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

    deleteReview: builder.mutation<Review, number>({
      query(id) {
        return {
          url: `/review/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Review"],
    }),

    // Product
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

    createProduct: builder.mutation<Product, FormData>({
      query(newProduct) {
        return {
          url: "/product",
          method: "POST",
          body: newProduct,
        };
      },
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation<Product, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/product/${id}`,
          method: "PATCH",
          body: updatedData,
        };
      },
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation<Product, number>({
      query(id) {
        return {
          url: `/product/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Product"],
    }),


  }),
});

export const {
  useGetBannersQuery,
  useGetBannerQuery,
  useDeleteBannerMutation,
  useCreateNewBannerMutation,
  useUpdateBannerMutation,

  useGetSmallBannersQuery,
  useCreateSmallBannerMutation,
  useDeleteSmallBannerMutation,

  useGetCategoriesQuery,
  useGetCategoryQuery,

  useCreateNewCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,

  useGetSubscribersQuery,
  useDeleteSubscriberMutation,

  useGetContactsQuery,
  useGetContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,

  useCreateNewColorMutation,
  useGetColorsQuery,
  useDeleteColorMutation,

  useCreateNewSizeMutation,
  useGetSizesQuery,
  useDeleteSizeMutation,

  useGetReviewsQuery,
  useCreateReviewMutation,
  useDeleteReviewMutation,

  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = globalApi;
