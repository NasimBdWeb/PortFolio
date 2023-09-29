import React from 'react';


const Services = () => {
    return (
        <>
            <div className="container-fluid">
                <h1 className="gallery-title">What I Do</h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="serviceBox">
                            <div className="service-icon">
                                <span><i className="fa fa-globe" /></span>
                            </div>
                            <h3 className="title">Web Design</h3>
                            <p className="description">⚡Devlop Highly Interactive Front End / User Interfaces For your Web</p>
                            
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="serviceBox red">
                            <div className="service-icon">
                                <span><i className="fa fa-rocket" /></span>
                            </div>
                            <h3 className="title">Backend Development</h3>
                            <p className="description">⚡ Experience Hosting and Managing Website </p>
                            <p className="description">⚡Integration of third party services such as Firebase/ Mongodb </p>
                            
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="serviceBox blue">
                            <div className="service-icon">
                                <span><i className="fa fa-mobile" /></span>
                            </div>
                            <h3 className="title">Responsive Design</h3>
                            <p className="description"> ⚡Building responsive website front end using ReactJS and Wordpress</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="serviceBox green">
                            <div className="service-icon">
                                <span><i className="fa fa-briefcase" /></span>
                            </div>
                            <h3 className="title">Pixel-Perfect</h3>
                            <p className="description">⚡PSD to html figma to html </p>
                            <p className="description">⚡PSD to Wordpress figma to Wordpress </p>
                        </div>
                    </div>
                </div>
            </div>


           

        </>
    );
};

export default Services;