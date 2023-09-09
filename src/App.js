import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import local from './img/local.jpg';
import logoNaranja from './img/logoNaranja.jpg';
import logowasap from './img/whatsapp.ico';
import promo1 from './img/promos1.jpg';
import promo2 from './img/promos2.jpg';
import promo3 from './img/promos3.jpg';
import promo4 from './img/promos4.jpg';

function App() {
  const imagesArray = [local, logoNaranja, promo1, promo2, promo3, promo4];
  const [productos, setProductos] = useState({});

  console.log(productos);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        console.log(data);
      });
  }, []);

  const dropdownList = idcategoria => {
    const arrayProductos = objcard.filter(element => element.categoria === idcategoria);
    const productosCategoria = arrayProductos.map(item => (
      <li key={item.nombre}>
        <a className="dropdown-item active" onClick={() => scrollProducto(`#${item.nombre}`)}>
          {item.nombre}
        </a>
      </li>
    ));
    return <>{productosCategoria}</>;
  };

  const scrollIntoView = targetId => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollProducto = targetId => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Component = items => {
    const renderedItems = items.map((item, index) => (
      <div key={index}>
        <li className="nav-item">
          <div className="dropdown categoria">
            <a className="nav-link text-light active" aria-current="page" onClick={() => scrollIntoView(`#${item.nombre}`)}>
              {item.nombre}
            </a>
            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {dropdownList(item.id)}
            </ul>
          </div>
        </li>
      </div>
    ));

    return <div>{renderedItems}</div>;
  };

  let objcard = [
    {
      nombre: "Hamburguesa",
      categoria: 1,
      descripcion: "pan, con carne y ensalada",
      imagen: 'https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=',
      precio: 5000
    },
    {
      nombre: "papitas",
      categoria: 1,
      descripcion: "pan, con carne y ensalada",
      imagen: 'https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=',
      precio: 5000
    },
    {
      nombre: "carne de cerdo",
      categoria: 2,
      descripcion: "pan, con carne y ensalada",
      imagen: 'https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=',
      precio: 5000
    },
    {
      nombre: "carne de res",
      categoria: 2,
      descripcion: "pan, con carne y ensalada",
      imagen: "https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=",
      precio: 5000
    }
  ];

  const ordenarCards = idcategoria => {
    let arrayProductos = objcard.filter(element => element.categoria === idcategoria);
    const cardsProductos = arrayProductos.map((item) => (
      <div className="card mb-3 espaciointerno" id={`#${item.nombre}`} key={item.nombre}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.imagen} className="img-fluid rounded-start" alt={item.nombre} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.descripcion}</p>
              <p className="card-text"><small className="text-body-secondary">{item.precio}</small></p>
            </div>
          </div>
        </div>
      </div>
    ));

    return <>{cardsProductos}</>;
  };

  let categorias = [
    {
      id: 1,
      nombre: "Papas"
    },
    {
      id: 2,
      nombre: "Carnes"
    },
    {
      id: 3,
      nombre: "Arepas"
    },
    {
      id: 4,
      nombre: "Maicitos"
    },
    {
      id: 5,
      nombre: "Patacones"
    },
  ];

  const cards = (data) => {
    const renderCards = data.map((item, index) => (
      <div className="row" id={`#${item.nombre}`} key={index}>
        <h1>{item.nombre}</h1>
        {
          ordenarCards(item.id)
        }
      </div>
    ));

    return <>{renderCards}</>;
  };

  const slides = ["https://media.istockphoto.com/id/520410807/es/foto/hamburguesa-con-queso.jpg?s=612x612&w=0&k=20&c=YDYCsfNMOHATJlvcswo7mjebVeLOtctrQeUPJGlR3jc=", "https://media.istockphoto.com/id/1398630614/es/foto/hamburguesa-con-queso-de-tocino-en-un-bollo-tostado.jpg?s=612x612&w=0&k=20&c=KLPvSrqnisFDDyWr-R8LiT9UHEeNgSmriFQm4yqVGM4="];
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? imagesArray.length - 1 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === imagesArray.length - 1;
      !isLastSlide ? setCurrentIndex(curr => curr + 1) : setCurrentIndex(0);
    }
  };

  return (
    <div>
      <div className="main-container">
        <div className="slider-container margen">
          <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
          <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
          <div className="container-images">
            <ul ref={listRef}>
              {
                imagesArray.map((item, key) => {
                  return (
                    <li key={key}>
                      <img src={item} width={500} height={280} className='img-fluid' alt={`slide-${key}`} />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <button type="button" className="btn fixed-bottom">
          <a href="https://w.app/Melona" title="gmail iconos">
            <img className='btn' id='wasap' src={logowasap} alt="GMAIL" />
          </a>
        </button>
      </div>

      <header>
        <nav className="navbar nav navbar-toggler navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#" id="nombrenav">LA MELONA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-toggler text-light" id="navbarSupportedContent">
              <ul className="navbar-nav navbar-toggler me-auto mb-2 mb-lg-0">
                {
                  Component(categorias)
                }
              </ul>
            </div>
          </div>
        </nav>
      </header>

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
