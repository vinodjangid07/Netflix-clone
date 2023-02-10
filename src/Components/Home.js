import React, {useState} from 'react'
// import {useRef} from 'react'
import Menu from "./Menu";


export default function Home() {
 const [items, setItems] = useState(Menu);
 const filterItem = (cateItem) => {
    const updatedItems = Menu.filter((curElem) =>{
            return curElem.category === cateItem;
            
    });
    setItems(updatedItems);
 }
 
 
 
  return (
    <div className="container">
      <article className='heading'>Unlimited movies, TV shows and more.<p className='quote'>"Watch anywhere. Cancel anytime."</p> </article>
      
      <div className="menu-tabs-container">
      <button className="menu-button" onClick={() => setItems(Menu)}>All</button>
        <button className="menu-button" onClick={() => filterItem('Action')}>Action</button>
        <button className="menu-button" onClick={() => filterItem('Comedy')}>Comedy</button>
        <button className="menu-button" onClick={() => filterItem('Horror')}>Horror</button>
        <button className="menu-button" onClick={() => filterItem('Drama')}>Drama</button>
        <button className="menu-button" onClick={() => filterItem('Thriller')}>Thriller</button>

      </div>
      <div className="daddy-flexbox">
      {
      items.map((elem) => {
        const {image, description, name, category, rating, context,link } = elem;
        return(
          
          <div className='card-container' id='card-container'>
          <div className="img"><img src={image} alt={name} /></div>
          <div className="info">
            <p className='description'>{description}</p>
            <article className='name'>{name}</article>
            <article className='category'>{category}</article>
            <div className="watch-container">
            <article className='rating'><span class="fa fa-star checked"></span>&nbsp;{rating}<p>/10</p></article>
            <a href={link} className='watch-btn'><button>Watch Now</button></a>
           
            </div>
            <div className="context">{context}</div>
          </div>
        </div>
        

        )
      })
      }
        
      </div>
    </div>
  )
  
}
