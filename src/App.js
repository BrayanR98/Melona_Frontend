
//import axios from 'axios';
import './App.css';
import React, { createElement, useEffect,useState,useRef} from 'react';
import local from './img/local.jpg'
import logoNaranja from './img/logoNaranja.jpg'
import logowasap from './img/whatsapp.ico'
import promo1 from './img/promos1.jpg'
import promo2 from './img/promos2.jpg'
import promo3 from './img/promos3.jpg'
import promo4 from './img/promos4.jpg'

function App() {
  const imagesArray = [local, logoNaranja, promo1,promo2,promo3,promo4];
  const [productos, setProductos] = useState({});
  
  
  useEffect(() => {
     //fetch('http://melonaservices.somee.com/api/Productos')
    //fetch('https://localhost:7258/api/Productos')
    fetch('https://jsonplaceholder.typicode.com/todos/1')  
      .then(response => response.json())
      .then(data =>{
        setProductos(data) ;
         console.log(data);
      });

  },[])
   const dropdownList = (idcategoria) => {
     const arrayProductos = objcard.filter(element => element.categoria == idcategoria) ;
     const productosCategoria = arrayProductos.map((item) => (
       <li><a class="dropdown-item active" onClick={() => scrollProducto(`#${item.nombre}`)}>{item.nombre}</a></li>
     )) 
     return <>{productosCategoria}</>
   }
   const scrollIntoView = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollProducto = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const Component = ( items ) => {
    
    const renderedItems = items.map((item, index) => (
      <div key={index}>
        <li class="nav-item">
        
          <div class="dropdown categoria">
            <a class="nav-link text-light active " aria-current="page"  onClick={() => scrollIntoView(`#${item.nombre}`)}>{item.nombre}</a>
            <button class="btn btn-dark dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              {
                dropdownList(item.id)
              }             
            </ul>
          </div>
        </li>
      </div>
      
    ));
  
    return <div>{renderedItems}</div>;
  };
   let objcard = [{
    nombre:"Hamburguesa",
    categoria:1,
    descripcion:"pan,con cargne y ensalada",
    imagen:'https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=',
    precio:5000
   },
   {
    nombre:"papitas",
    categoria:1,
    descripcion:"pan,con cargne y ensalada",
    imagen:'https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=',
    precio:5000
   },
   {
    nombre:"carne de cerdo",
    categoria:2,
    descripcion:"pan,con cargne y ensalada",
    imagen:'https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=',
    precio:5000
   },
   {
    nombre:"carne de res",
    categoria:2,
    descripcion:"pan,con cargne y ensalada",
    imagen:"https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=",
    precio:5000
   }]
   {/*RENDERIZADO DE CARDS DE PRODUCTOS */}
   const ordenarCards = (idcategoria) => {
    let arrayProductos = objcard.filter(element => element.categoria == idcategoria)
    const cardsProductos = arrayProductos.map((item) => (
      <div class="card mb-3 espaciointerno" id={`#${item.nombre}`}  >
      <div class="row g-0" >
        <div class="col-md-4">
          <img src={item.imagen} class="img-fluid rounded-start" alt={item.nombre}/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{item.nombre}</h5>
            <p class="card-text">{item.descripcion}</p>
            <p class="card-text"><small class="text-body-secondary">{item.precio}</small></p>
          </div>
        </div>
      </div>
    </div>
    ));

      return <> {cardsProductos} </>
   }
  let categorias = [
    {
      id:1,
      nombre:"Papas"
    },
    {
      id:2,
      nombre:"Carnes"
    },
    {
      id:3,
      nombre:"Arepas"
    },
    {
      id:4,
      nombre:"Maicitos"
    },
    {
      id:5,
      nombre:"Patacones"
    },
  ]
  const cards = (data) => {
    const renderCards = data.map((item,index) => (
      
      <div class="row" id={`#${item.nombre}`}>
        <h1>{item.nombre}</h1>
        {
          ordenarCards(item.id)
        }
      </div>
      
    ));

    return <>{renderCards}</>;
  }
    
    const slides = ["https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=","https://media.istockphoto.com/id/1398630614/es/foto/hamburguesa-con-queso-de-tocino-en-un-bollo-tostado.jpg?s=612x612&w=0&k=20&c=KLPvSrqnisFDDyWr-R8LiT9UHEeNgSmriFQm4yqVGM4="];
    //const slides = document.querySelectorAll('.foto')
    const slidesProms = ["https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=","https://media.istockphoto.com/id/1398630614/es/foto/hamburguesa-con-queso-de-tocino-en-un-bollo-tostado.jpg?s=612x612&w=0&k=20&c=KLPvSrqnisFDDyWr-R8LiT9UHEeNgSmriFQm4yqVGM4="];

    
   

  const listRef = useRef();
  // const listRefProm = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentIndexProm, setCurrentIndexProm] = useState(0);


  useEffect(() => {
    const listNode = listRef.current;
    // const listNodeprom = listRefProm.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
    // const imgNodeProm = listNodeprom.querySelectorAll("li > img")[currentIndexProm];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }

    // if (imgNodeProm) {
    //   imgNodeProm.scrollIntoView({
    //     behavior: "smooth"
    //   });
    // }
    

  }, [currentIndex]);


  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? imagesArray.length - 1 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === imagesArray.length - 1;
       !isLastSlide?setCurrentIndex(curr => curr + 1) : setCurrentIndex(0);
        
      
    }
  }
  // const scrollToImageProm = (direction) => {
  //   if (direction === 'prev-prom') {
  //     setCurrentIndexProm(curr => {
  //       const isFirstSlideProm = currentIndexProm === 0;
  //       return isFirstSlideProm ? 0 : curr - 1;
  //     })
  //   } else {
  //     const isLastSlideProm = currentIndexProm === slidesProms.length - 1;
  //     if (!isLastSlideProm) {
  //       setCurrentIndexProm(curr => curr + 1);
  //     }
  //   }
  // }

  

  // const goToSlideProm = (slideIndex) => {
  //   setCurrentIndexProm(slideIndex);
  // }

      
     

  return (
    <div >
      {/* ESLIDER DE FOTOS */}
      <div className="main-container  margen">
          <div className="slider-container margen">
            <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
            <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
            <div className="container-images">
              <ul ref={listRef}>
                {
                  imagesArray.map((item,key) => {
                    return( 
                       <li key={key}>
                      <img src={item} width={500} height={280}  className='img-fluid'/>
                    </li>)
                    
                  })
                }
              </ul>
            </div>
          </div>
          
        
                <button type="button" class=" btn  fixed-bottom "   ><a href="https://w.app/Melona"  title="gmail iconos"><img className='btn' id='wasap' src={logowasap} alt="GMAIL"/> </a> </button>
        
            
      </div>
        
      
      <header>
        
       

        
        <nav class="navbar nav  navbar-toggler navbar-dark bg-dark  fixed-top">
          <div class="container-fluid">
          <a class="navbar-brand text-light" href="#" id="nombrenav">LA MELONA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-toggler  text-light" id="navbarSupportedContent">
                          <ul class="navbar-nav navbar-toggler me-auto mb-2 mb-lg-0">                         
                              {
                                Component(categorias)
                              }
                          </ul>    
              </div>
          </div>
        </nav>
      </header>
      {/* <div className="main-containerprom">
          <div className="slider-containerprom">
            <div className='leftArrowprom' onClick={() => scrollToImageProm('prev-prom')}>&#10092;</div>
            <div className='rightArrowprom' onClick={() => scrollToImageProm('next-prom')}>&#10093;</div>
            <div className="container-imagesprom">
              <ul ref={listRefProm}>
                {
                  slides.map((item,key) => {
                    return <li key={key}>
                      <img src={item} width={800} height={400} />
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
      </div> */}
      <center>
        <div className='justify-content-center align-items-center'>
        {
          cards(categorias)
        }
        </div>
      </center>
      
    </div>
  );
  };

export default App;
