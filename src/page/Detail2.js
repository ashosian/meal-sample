import React from 'react'
import { useParams } from 'react-router'
import { useMealIdQuery } from '../features/Mealdb';

const Detail2 = () => {
  const { ids } = useParams();
  console.log(ids);

  const { isLoading, data, } = useMealIdQuery(ids);
  if (isLoading) {
    return <h1>loading...</h1>
  }
  console.log(data)

  const youtbeid = data?.meals[0].strYoutube?.split("=");
  console.log(youtbeid[1])
    ;
  return (
    <div className='bg-orange-400'>
      {
        data.meals.map((poke) => {
          return <div key={poke.idMeal}>
            <div className="title flex justify-center text-lg font-bold"><h1>{poke.strMeal}</h1></div>{/*title*/}

            <div className="image grid grid-cols-4 p-5">
              <div className="box1 col-span-2 p-10">
                <img src={poke.strMealThumb} alt="" />
              </div> {/*image*/}

              <div className="box2 col-span-2 text-center items-center  space-y-10">
                <div className="ingredients  font-bold text-lg ">
                  <h1 className='underline'>Ingredients</h1>
                </div> {/*ingredients*/}

                <div className="items grid grid-cols-2">



                  <div className="box3 space-y-10 flex flex-col items-center">
                    <p>{poke.strIngredient1}</p>
                    <p>{poke.strIngredient2}</p>
                    <p>{poke.strIngredient3}</p>
                    <p>{poke.strIngredient4}</p>
                    <p>{poke.strIngredient5}</p>
                    <p>{poke.strIngredient6}</p>
                    <p>{poke.strIngredient7}</p>
                    <p>{poke.strIngredient8}</p>
                  </div> {/*box3*/}
                  <div className="box4 space-y-10 flex flex-col items-center">
                    <p>{poke.strMeasure1}</p>
                    <p>{poke.strMeasure2}</p>
                    <p>{poke.strMeasure3}</p>
                    <p>{poke.strMeasure4}</p>
                    <p>{poke.strMeasure5}</p>
                    <p>{poke.strMeasure6}</p>
                    <p>{poke.strMeasure7}</p>
                    <p>{poke.strMeasure8}</p>
                  </div> {/*box4*/}
                </div>{/*items*/}


              </div>

            </div>

            <div className="instructions p-5">
              <p>{poke.strInstructions}</p>
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtbeid[1]}`} allowFullScreen></iframe>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Detail2


