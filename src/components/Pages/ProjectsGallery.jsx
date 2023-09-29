import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { PortfolioData } from '../../contexts/PortfolioData';


const ProjectsGallery = () => {
    const [noOfItems, setNumberOfItems] = useState(-10)
    const slice = PortfolioData.slice(noOfItems)


    const loadMore =() =>{
        
        setNumberOfItems(noOfItems - noOfItems)
    }
  
  

    return (
        <div className="container pgallery">
            <div className="row">
                <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 className="gallery-title">Projects</h1>
                </div>
                
               
             
                   {
                    slice.map((elements,index ) => {
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
             <Button onClick={()=> loadMore()} variant="secondary" size="lg">Load More</Button>
            </div>
        </div>


    );
};

export default ProjectsGallery;