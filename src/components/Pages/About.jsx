import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div class="bg-gray-100">
            <div class="container mx-auto py-36">
                <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div class="col-span-4 sm:col-span-3">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="flex flex-col items-center">
                                <img src="https://i.ibb.co/fSCNn4Q/Md-Nasim-Ahmad-jpeg.jpg" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                </img>
                                <h1 class="text-xl font-bold">MD NASIM AHMAD</h1>
                                <p class="text-gray-600">FrontEnd Developer</p>
                                <div class="mt-6 flex flex-wrap gap-4 justify-center">
                                    <a href="https://api.whatsapp.com/send?phone=8801764545654" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                    <Link to='/resume' class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</Link>
                                </div>
                            </div>
                            <hr class="my-6 border-t border-gray-300" />
                            <div class="flex flex-col">
                                <span class="text-gray-600 uppercase font-bold tracking-wider mb-2">Skills</span>
                                <ul>
                                    <li class="mb-2">JavaScript</li>
                                    <li class="mb-2">React</li>
                                    <li class="mb-2">Node.js</li>
                                    <li class="mb-2">HTML/CSS</li>
                                    <li class="mb-2">Bootstrap</li>
                                    <li class="mb-2">Wordpress</li>
                                    <li class="mb-2">Elementor/WpBakery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 sm:col-span-9">
                        <div class="bg-white shadow rounded-lg p-6">
                            <h2 class="text-xl font-bold mb-4">About Me</h2>
                            <p class="text-gray-700">
                                <span><strong>Hello,I Am MD NASIM AHMAD</strong></span>
                                <br/><br />
                                I fell in love with programming and I have at least learnt something, I think…
                                I am fluent in classics like Wordpress, Javascript and React, I will deliver professional and modern  Website Design that will promote your brand frequently. I complete all my project with absolute devotion and perfection. 

                                Expert in all aspects of WordPress website creation, including design, plug-ins and implementation. Skilled in creating engaging and interactive websites. Dedicated to superior customer service at all levels from the first meeting with a client to the website maintenance after launch.
                                I customize Responsive  Website regularly and can help customize yours, so you can get your site up and running.
                            </p>

                            <h3 class="font-semibold text-center mt-3 -mb-2">
                                Find me on
                            </h3>
                            <div class="flex justify-center items-center gap-6 my-6 ">
                                <Link className='facebookiconabout' to="http://www.facebook.com/nasimbd.net" target="_blank" ><FontAwesomeIcon icon={faFacebook} beatFade /></Link>
                                <Link className='linkediniconabout' to="http://www.facebook.com/nasimbd.net" target="_blank" ><FontAwesomeIcon icon={faLinkedin} beatFade /></Link>
                                <Link className='whatsappiconabout' to="https://api.whatsapp.com/send?phone=8801764545654" target="_blank" ><FontAwesomeIcon icon={faWhatsapp} beatFade /></Link>
                                <Link className='githubiconabout' to="http://www.facebook.com/nasimbd.net" target="_blank" ><FontAwesomeIcon icon={faGithub} beatFade /></Link>
                            </div>


                            <h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
                            <div class="mb-6">
                                <div class="flex justify-between">
                                    <span class="text-gray-600 font-bold">Web Developer</span>
                                    <p>
                                        <span class="text-gray-600 mr-2">The Marketer</span>
                                        <span class="text-gray-600">2022 - 2023</span>
                                    </p>
                                </div>
                                <p class="mt-2">Worked as Wordpress developer</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;