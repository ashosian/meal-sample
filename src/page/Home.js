import React from 'react'
import { useGetRandomMealQuery, useMealCategoryQuery } from '../features/Mealdb'
import { useNavigate } from 'react-router';

const Home = () => {
  const { data, isLoading, isError, error } = useMealCategoryQuery();
  const { data: dat, isloading: load } = useGetRandomMealQuery();

  console.log(dat)
  // const { data } = useNowPlayingQuery();
  console.log(data);

  const nav = useNavigate();

  if (isLoading) {
    return <h1 className='w-[500px] mx-auto'><lottie-player src="https://lottie.host/b9efc260-674c-4af3-b79f-88276ab6baee/3lNSGw2JQq.json" background="transparent" speed="1" loop autoplay></lottie-player></h1>
  }

  if (load) {
    return <h1>load....</h1>
  }

  return (
    <>
      <div className='flex justify-between bg-brown-200'>
        <div className="image">
          <img src="	https://www.themealdb.com/images/meal-icon.png" alt="" />
        </div>
        <div className="text  py-5">
          <h1 className='text-4xl font-bold flex justify-center'>Welcome to MealDB</h1>
          <p className='text-sm'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
          </p>
          <p className='text-sm'>
            We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.
          </p>
        </div>
        <div className="image1">
          <img src="	https://www.themealdb.com/images/meal-icon.png" alt="" />
        </div>
      </div>

      <div className='bg-blue-gray-600'>
        <h1 className='text-center text-2xl font-bold'>Meal Categories</h1>
      </div>
      <hr />
      <div className='grid
    grid-cols-4  bg-brown-300 sm:grid-cols-2'>
        {
          data.categories.map((food) => {
            return <div onClick={() => nav(`/detail/${food.strCategory}`)} className='gap-5 p-10 m-5 transition-all delay-75 shadow-lg border-black hover:scale-90 cursor-pointer delay-90' key={food.idCategory}>
              <div className=' flex flex-col items-center '>
                <img src={`${food.strCategoryThumb}`} alt="" />
                <p>{`${food.strCategory}`}</p>
                <p>{food.strCategoryDescription.substring(0, 150) + '...'}</p>
              </div>
            </div>
          })
        }
      </div>
      <hr />
      <div className='bg-brown-300'>

        <h1 className='text-4xl text-center font-bold'> The Random Meal</h1>
      </div>
      <hr />
      <div>
        {dat?.meals?.map((item) => {
          return <div onClick={() => nav(`/detail2/${item.idMeal}`)} className='bg-brown-300 flex flex-col items-center' >
            <img className='transition-all delay-75 shadow-lg hover:scale-90 cursor-pointer delay-90' src={`${item.strMealThumb}`} alt="" width='200px' />
            <p>{`${item.strMeal}`}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default Home
