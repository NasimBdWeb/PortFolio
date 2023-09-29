import React, { useEffect, useRef, useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography, MDBTextArea } from 'mdb-react-ui-kit';
import emailjs from '@emailjs/browser';

export default function Email() {

    const [statusMessage, setStatusMessage] = useState("");

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nxknue4', 'template_v38f1vp', form.current, 'AWnm_nILJ44o7O4kw')
            .then(
                (result) => {
                    console.log(result.text, result.status);
                    //   clearState();
                    setStatusMessage("Thanks! Email Sent Successfully");
                }, (error) => {
                    console.log(error.text);
                    setStatusMessage(`${error.text} happened`);
                });

        e.target.reset();
    }

    useEffect(()=>{
        if (statusMessage === 'Thanks! Email Sent Successfully') {
            setTimeout(()=>{
              setStatusMessage('')
            },4000)
        }
    },[statusMessage])


    return (
        <div>
            <h1 className="gallery-title mt-8">Contact</h1>
            <div className="mx-auto gradient-custom mt-8 " style={{ maxWidth: '1200px', height: '500px' }}>
                <MDBRow className="pt-5 mx-3">
                    <MDBCol md="3">
                        <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
                            <MDBIcon fas icon="fas fa-envelope text-white" size="3x" />
                            <MDBTypography tag="h3" className="text-white">Contact Me</MDBTypography>
                            <p className="white-text">Email Me for General Queries and Hiring for Your Projects</p>
                        </div>

                    </MDBCol>
                    <MDBCol md="9" className="justify-content-center ">
                        <MDBCard className="card-custom pb-6">
                            <MDBCardBody className="mt-0 mx-5">
                            <div className="text-center mb-3 pb-2 ">
                                    <MDBTypography tag="h4" style={{ color: '#495057' }} > </MDBTypography>
                                </div>
                                <form ref={form} onSubmit={handleSubmit} className="mb-0 ">
                                    <MDBRow className="mb-4">
                                        <MDBCol>
                                            <MDBInput label='Name' type='text' name="user_name" />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className="mb-4">
                                        <MDBCol>
                                            <MDBInput label='Email' type='email' name="user_email" />
                                        </MDBCol>

                                        <MDBCol>
                                            <MDBInput label='Phone' type='tel' name="user_number" />
                                        </MDBCol>

                                    </MDBRow>
                                    <MDBRow className="mb-4">
                                        <MDBCol>
                                            <MDBInput label='Address' type='text' name="user_address" />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='Subject' type='text' name="user_subject" />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className="mb-4">

                                        <MDBCol>
                                            <MDBTextArea label='Message' name="message" rows={4} className="mb-2" />
                                        </MDBCol>
                                    </MDBRow>

                                    <div className="float-end">
                                        <MDBBtn type="submit" value="Send" rounded style={{ backgroundColor: '#0062CC' }}>Submit</MDBBtn>
                                    </div>
                                </form>

                                <div className="text-center mb-3 pb-2 ">
                                    <MDBTypography tag="h4" style={{ color: '#495057' }} > <p>{statusMessage}</p></MDBTypography>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        
                    </MDBCol>
                </MDBRow>

            </div>
        </div>
    );
}

