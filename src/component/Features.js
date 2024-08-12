import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import '../Features.css'

export default function Features(){
    return(
        <>
             <section id="features" className="w-100">
        <div className="row col-10 mx-auto text-center">
            <h3 className="display-3 fst-italic mb-1" id="id1" >Features</h3>
            <p className="mt-1 border-top border-success pt-3" id="id2">At PG and Mess Finder, we offer a range of services to help you find the perfect PG or hostel and Mess. Whether you're a student, working professional, or just looking for temporary accommodation, we've got you covered.</p>
        </div>

        <hr className="bg-dark-subtle" />

        <div className="d-flex justify-content-evenly column-gap-4 px-4 flex-wrap" id="id3">
            <div className="card shadow-lg m-4 border-0" id="id4" >
                <div className="card-header bg-transparent border-dark-subtle text-primary">
                    <i className="fa-solid fa-magnifying-glass" id="id5"></i>
                </div>
                <div className="card-body">
                    <h4>Accommodation search:</h4>
                    <p>Our user-friendly platform allows you to search for PGs and hostels and Mess in Pune city, filter your search results based on your preferences, and book your accommodation with ease.</p>
                </div>
            </div>
            <div className="card shadow-lg m-4 border-0" id="id6">
                <div className="card-header bg-transparent border-dark-subtle text-primary">
                    <i className="fa-solid fa-money-bill" id="id7"></i>
                </div>
                <div className="card-body">
                    <h4>Accommodation booking:</h4>
                    <p>We offer a hassle-free booking process, allowing users to book their accommodation with just a few clicks. Users can view pictures, read reviews from other users, and compare prices before making their booking.</p>
                </div>
            </div>
            {/* <div className="card shadow-lg m-4 border-0" id="id8">
                <div className="card-header bg-transparent border-dark-subtle text-primary">
                    <i className="fa-solid fa-phone" id="id9"></i>
                </div>
                <div className="card-body">
                    <h4>24/7 customer support:</h4>
                    <p>Our team is available round the clock to answer your queries, resolve any issues you may face, and ensure that your stay is comfortable and memorable.</p>
                </div>
            </div> */}
            <div className="card shadow-lg m-4 border-0" id="id10">
                <div className="card-header bg-transparent border-dark-subtle text-primary">
                    <i className="fa-regular fa-circle-check" id="id11"></i>
                </div>
                <div className="card-body">
                    <h4>Verified listings:</h4>
                    <p>We only list verified and reliable PGs and hostels on our platform, ensuring that you have a safe and secure stay wherever you choose to stay.</p>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}