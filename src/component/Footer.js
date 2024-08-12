import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"

export default function Footer(){
    return(
        <>
            
    <footer data-aos="fade-up" className="" style={{minWidth: "-webkit-fill-available"}}>
        <div className="">
            <footer className="text-center text-dark" style={{backgroundColor: "#A0DFD4",marginTop:"2rem"}}>
                <div className="container">
                    <section className="">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <NavLink to="/#about" className="text-black">About us</NavLink>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <NavLink to="/property/search" className="text-black">Homes</NavLink>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <NavLink to="/#team" className="text-black">Service</NavLink>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <NavLink to="/#help" className="text-black">Help</NavLink>
                                </h6>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="mb-2">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    PG Finder is a platform that helps users find the perfect PG or hostel and Mess in Pune.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center mb-5">
                        <NavLink to="/" target="_blank" className="text-black me-4 fs-1">
                            <i className="fab fa-github"></i>
                        </NavLink>
                    </section>
                </div>
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2024 Copyright: LocalLens
                </div>
            </footer>
        </div>
    </footer>
        </>
    );
}