import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import {

  Button,
  Input,
} from "@material-tailwind/react";


const Header = () => {


  const nav = useNavigate()

  const formik = useFormik({
    initialValues: {
      anything: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/searchmeal/${val.anything}`)
      resetForm();
    }

  })


  return (
    <div className='flex justify-between header  bg-black h-[10vh] text-white  p-3'>
      <div className="title">
        <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
      </div>
      <div className="flex items-center space-x-3 font-bold">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>




        <form onSubmit={formik.handleSubmit}>

          <div className="box2 space-x-7 flex items-center">

            <div className="relative flex w-full gap-2 md:w-max">
              <Input
                type="search"
                name='anything'
                value={formik.values.anything}
                onChange={formik.handleChange}
                label="Type here..."
                className="pr-20"
                containerProps={{
                  className: "min-w-[200px]",
                }}
              />
              <Button type='submit' size="sm" className="!absolute right-1 top-1 rounded">
                Search
              </Button>
            </div> {/* search*/}



          </div>


        </form>

      </div>



    </div>
  )
}

export default Header
