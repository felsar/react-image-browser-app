import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import ImageList from './components/ImageList';

function App() {

  const [imageList, setImageList] = useState([]);
  const [term, setTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [paginator, setPaginator] = useState(1);

  
  useEffect(
    () => { 
      const searchImage = async () => {
      
        if (term === '') return;

        const API_KEY = '16742063-a42f3dcdd018258f4776838b6'
        const LANGUAGE = 'es'
        const PAGINATOR = 30;
        const API_URL = `https://pixabay.com/api?key=${API_KEY}&q=${term}&per_page=${PAGINATOR}&page=${currentPage}`;

        const response = await fetch(API_URL);

        const result = await response.json();
        setPaginator(Math.ceil(result.totalHits / PAGINATOR))
        setImageList(result.hits);

        //go to top
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior: 'smooth'});
      }

      searchImage();

    }
    ,[term, currentPage]
  );

  const handlePrevious = () => {
    console.log("hereeee")
    //e.preventDefault();
    setCurrentPage(currentPage-1)
  }

  const handleNext = () => {
    console.log("hereeee")
    //e.preventDefault();
    setCurrentPage(currentPage + 1)
  }

  const previusButton =
    (<button
      type="button"
      className="btn btn-info mr-1"
      onClick={handlePrevious}
  >&laquo; Previous</button >);

const nextButton = (<button
  type="button"
  className="btn btn-info mr-1"
  onClick={handleNext}
> Next &raquo;</button >);
    
  

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image Browser</p>
        <Form
          setTerm={setTerm}
        />
      </div>
      <div className="row justify-content-center"> 
        <ImageList
          imageList={imageList}
        />
        {(currentPage > 1) ? previusButton : null}
        
        -
        {(currentPage < paginator) ? nextButton : null}
      </div>
    </div>
  );
}

export default App;
