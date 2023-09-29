import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { PortfolioData } from '../../contexts/PortfolioData';


const Projects = () => {
    const [items,setItems] = useState(PortfolioData) 

  
  
    const filterItem = (Category) =>{

        if (Category === 'all'){
            setItems(PortfolioData)
            return;
      } 

            const updatedItems = PortfolioData.filter((currentItems)=>{
                return currentItems.category === Category;
            })
            setItems(updatedItems)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 className="gallery-title">Gallery</h1>
                </div>
                <div className='mb-5 mt-2 ' align="center ">
                    <Button className='m-2' variant="info" onClick={()=> filterItem('all')} >All</Button>
                    <Button className='m-2' variant="info" onClick={()=> filterItem('wordpress')} >Wordpress</Button>
                    <Button className='m-2' variant="success" onClick={()=> filterItem('frontend')}>FrontEnd</Button>
                    <Button variant="warning" onClick={()=> filterItem('backend')}>BackEnd</Button>
                </div>
               
             
                   {
                    items.map((elements,index ) => {
                        const {images, name, text, src} = elements;
                        return (<div key={index} className="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter hdpe items-center">
                            <figure >
                            <img  src={images.png} className="img-thumbnail portfolioimg" />
                            <figcaption>
                            <div>
                                <Link to={src}><FontAwesomeIcon className='eyeicon' icon={faEye} beatFade /></Link>
                                <h5>Client : {name}</h5>
                                <h6>{text}</h6>
                            </div>
                            </figcaption>
                            </figure>
                        </div>
                        )
                    })
                }
             
            </div>
        </div>


    );
};

export default Projects;