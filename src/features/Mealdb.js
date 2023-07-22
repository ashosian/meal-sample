import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const Mealdb = createApi({
  reducerPath: 'Mealdb',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1'
  }),

  endpoints: (builder) => ({


    mealCategory: builder.query({
      query: () => ({
        url: '/categories.php',
        method: 'GET',

      })
    }),



    mealCata: builder.query({
      query: (id) => ({
        url: '/filter.php',
        method: 'GET',
        params: {
          c: id
        }
      })
    }),

    mealId: builder.query({
      query: (id) => ({
        url: '/lookup.php',
        method: 'GET',
        params: {
          i: id
        }
      })
    }),



    getMealBySearch: builder.query({
      query: (search) => ({
        url: `/search.php?s=${search}`,
        method: 'GET',




      })

    }),





  })


})

export const { useMealCategoryQuery, useMealIdQuery, useMealCataQuery, useGetMealBySearchQuery } = Mealdb;