import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"


export default function Mainbody(){
    return(
        <>
            <section className="overflow-x-hidden">
    <section id="hero">
        <div className="container min-vh-100 d-flex align-items-center mt-5 mt-lg-0">
            <div className="w-100 d-flex flex-lg-row flex-column justify-content-between align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-3" data-aos="fade-right" data-aos-duration="1000">
                    <h1>Welcome to <br/> <span className="display-3">PG & Mess Finder LocalLens</span></h1>
                    <h3 className="fw-light">A solution for all your PG Hunting needs.</h3>
                    <hr/>

                    <NavLink role='button' to="/property/search" className="btn btn-outline-success btn-lg rounded-6 font-weight-bold">Search PGs</NavLink>
                </div>
                <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="1000">
                    <img src="./images/home.svg" alt="Logo" className="img-fluid"/>
                </div>
            </div>
        </div>

    </section>
    </section>
        </>
    );
}