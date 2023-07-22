import React from 'react'
import { useMealCategoryQuery } from '../features/Mealdb'
import { useNavigate } from 'react-router';

const Home = () => {
  const { data, isLoading, isError, error } = useMealCategoryQuery()
  // console.log(data)
  // const { data } = useNowPlayingQuery();
  console.log(data);

  const nav = useNavigate();

  if (isLoading) {
    return <h1>loading...</h1>
  }

  return (
    <div className='grid
    grid-cols-3  bg-yellow-600'>
      {
        data.categories.map((food) => {
          return <div onClick={() => nav(`/detail/${food.strCategory}`)} className='gap-10 border p-10 m-5 border-black' key={food.idCategory}>
            <div className='hover:scale-90 cursor-pointer delay-75 flex flex-col items-center '>
              <img src={`${food.strCategoryThumb}`} alt="" />
              <p>{`${food.strCategory}`}</p>
              <p>{food.strCategoryDescription.substring(0, 150) + '...'}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Home
