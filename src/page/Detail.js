import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMealCataQuery, useMealCategoryQuery, useMealIdQuery } from '../features/Mealdb';

const Detail = () => {
  const { id } = useParams();
  const { isLoading, data, } = useMealCataQuery(id);
  console.log(id);
  console.log(data);

  const nav = useNavigate()

  if (isLoading) {
    return <h1>loading...</h1>
  }
  return (
    <div className='grid grid-cols-3 p-5 bg-slate-500 gap-5'>
      {
        data.meals.map((item) => {
          return <div onClick={() => nav(`/detail2/${item.idMeal}`)} className='flex flex-col items-center hover:scale-90 cursor-pointer p-5' key={item.idMeal}>

            <img src={`${item.strMealThumb}`} alt="" />
            <p>{item.strMeal}</p>
          </div>
        })
      }
    </div>
  )
}

export default Detail
