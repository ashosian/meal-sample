import React from 'react'
import { useParams, useNavigate } from 'react-router';
import { useGetMealBySearchQuery } from '../features/Mealdb';
const Search = () => {
  const { search } = useParams();

  const { isLoading, isError, data, error } = useGetMealBySearchQuery(search);

  const nav = useNavigate();
  if (isLoading) {
    return <h1>loading</h1>
  }
  console.log(search);
  console.log(data);
  return (
    <div className='grid
    grid-cols-3  bg-yellow-600'>
      {
        data.meals.map((items) => {
          return <div onClick={() => nav(`/detail2/${items.idMeal}`)} className='gap-10 border p-10 m-5 border-black' key={items.idMeal}>
            <div className='hover:scale-90 cursor-pointer delay-75 flex flex-col items-center '>
              <img src={`${items.strMealThumb}`} alt="" />
              <p>{`${items.strMeal}`}</p>
              <p>{items.strInstructions.substring(0, 150) + '...'}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Search
