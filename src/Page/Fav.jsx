import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Fav() {
    const [favs,setFavs]=useState([])
   useEffect(()=>{
    setFavs(JSON.parse(localStorage.getItem("favs"))??[])
   },[])

  return (
    <>
    <h1>Favorites</h1>
   <div className="list-group">
        {favs.map((item) => (
          <Link
            className="list-group-item list-group-item-action"
            key={item.id}
            to={`/products/product/${item.id}`}
          >
            {item.title.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Fav