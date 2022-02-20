import React from 'react'
import {books} from '../book'
const Home = () => {
  const [data, setData] = React.useState(books)
  const sortBooks = () => {
     data.sort((a,b) => a.year - b.year)
     setData([...data])
  }
  const sortBooksDesc = () => {
    data.sort((a,b) => b.year - a.year)
    setData([...data])
 }
 const filterClassic = () => {
  let res = books.filter((el) => el.category === 'Classics')
  setData([...res])
}
const filterNovel = () => {
  let res = books.filter((el) => el.category === 'novel')
  setData([...res])
}
const filterFantasy = () => {
  let res = books.filter((el) => el.category === 'FAntasy')
  setData([...res])
}
const filterHorror = () => {
  let res = books.filter((el) => el.category === 'Horror')
  setData([...res])
}
  return (
    <>
    <div  className='bg-red-600' style={{display:"flex",gap:"30px",justifyContent:"center",height:"60px",padding:"10px"}} >
    <button className='bg-orange-100' style={{border:'1px solid black',padding:"0 5px",borderRadius: "5px", cursor:'pointer'}} onClick={() => sortBooks()}>
      Sort by Year in Asc
    </button>
    <button className='bg-orange-100' style={{border:'1px solid black',padding:"0 5px",borderRadius:"5px" , cursor:'pointer'}} onClick={() => sortBooksDesc()}>
      Sort by Year in Desc
    </button>
    <button className='bg-orange-100' style={{border:'1px solid black',padding:"0 5px",borderRadius:"5px" , cursor:'pointer'}} onClick={() => filterClassic()}>
      Filter by Classic
    </button>
    <button className='bg-orange-100' style={{border:'1px solid black',padding:"0 5px",borderRadius:"5px" , cursor:'pointer'}} onClick={() => filterNovel()}>
      Filter by Novel
    </button>
    <button className='bg-orange-100' style={{border:'1px solid black',padding:"0 5px",borderRadius:"5px" , cursor:'pointer'}} onClick={() => filterFantasy()}>
      Filter by Fantasy
    </button>
    <button className='bg-orange-100' style={{border:'1px solid black',padding:"0 5px",borderRadius:"5px" , cursor:'pointer'}} onClick={() => filterHorror()}>
      Filter by Horror
    </button>

    </div>
    <div className='bg-red-600'> 
    <div style={{ display:"grid", gridTemplateColumns:"25% 25% 25% 25%", margin:"auto", width:"80%"}}> 
    {data.map((el) => {
      return (
      <div style={{width:'200px',height:'350px', display:'grid', gridTemplateRows: '70% 30%',margin:"10px auto"}}>
        <div>
          <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328847563l/965733.jpg" alt="book_image" />
        </div>
        <div className='bg-orange-100'>
          <h5>Name : {el.book_name}</h5>
          <p>Author : {el.author}</p>
          <p>Category : {el.category}</p>
          <p>Year : {el.year}</p>
        </div>
      </div>
      )
    })}
    </div>
    </div>
    </>

  )
}

export default Home