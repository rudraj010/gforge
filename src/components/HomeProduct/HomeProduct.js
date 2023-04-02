import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeProduct.css'

function HomeProduct() {

  const [data, setData] = useState()
  const [search,setSearch]=useState()

  const keys = ["title", "price", "type"];

  useEffect(() => {
    const handleAllProductData = async () => {
     await fetch('http://localhost:3000/allproduct').then((res) => {
        res.json().then((result) => {
          console.log(result, 'www')
          setData(result)
        })
      })
    }
    if (!search) {
      handleAllProductData();
    } else {
      call();
    }
  }, [search])


  
   const find = () => {
    return data?.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    );
  };
   
   function call() {
    setData(find);
  }

  return (
    <>
      <div className='container mt-5  homeproduct mb-4 '>
        <div className='d-flex justify-content-center  '>
          <h1 className='h1'>Tranding Style's</h1>
        </div>
       <div className='searchbox m-4'> <input type='search' className='searchinput mx-2' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} value={search}/> 
       </div>
        <hr className='hr' />
        <div className=' d-flex flex-wrap justify-content-center mt-4 '>
          {
            data?.map((item) => {
              return (
                <div className='col-md-4 imgmeadia'>
                  <Link to={item?.type === 'men' ? `/mensingleproduct/${item?.id}` : item?.type === 'girls' ? `/womensingleproduct/${item?.id}` : `/electronicsingleproduct/${item?.id}`}
                    className=' my-2  row   flex-wrap justify-content-center '>
                    <img src={item?.image} className='img' />
                  </Link>
                  <div className=' justify-content-center flex-wrap details  text-center '>
                    <p className='h4'>{item?.title}</p>
                    <p> {item?.star}</p>
                    <h5>{item?.price}</h5>
                  </div>
                </div>
              )
            })
          }





        </div>
      </div>

    </>
  )
}

export default HomeProduct