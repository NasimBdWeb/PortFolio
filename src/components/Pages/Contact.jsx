import React from 'react';
import Email from './Email';

const Contact = () => {
    return (
        <>
            <div class="relative h-screen w-full">
                <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter blur-sm" />
                <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                <Email />
                    
                </div>
            </div>

           
        </>
    );
};

export default Contact;