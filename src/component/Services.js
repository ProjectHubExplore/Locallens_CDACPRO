import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../Features.css'

export default function Service(){
    return(
        <>
        <div className="container">
{/* pg service */}

        <h3 className="display-3 text-center fst-italic" style={{marginTop: "8rem",fontFamily:"sans-serif"}}>Services</h3>
        <div className="row mx-auto">
        <div className="col-sm">
            <div className="card" style={{width: "18rem"}}>
  <img src="./images/ps1.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Satwik PG</h5>
    <p className="card-text">Gokhalenagar</p>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Single</NavLink>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Double</NavLink>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Triple</NavLink><br/>
    <p>₹5000</p>
    <NavLink to="#" className="btn btn-success mt-1">Check</NavLink>
  </div>
</div>
</div>

<div className="col-sm">
            <div className="card" style={{width: "18rem"}}>
  <img src="./images/ps2.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">Nishant PG</h5>
    <p className="card-text">Gokhalenagar</p>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Single</NavLink>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Double</NavLink>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Triple</NavLink><br/>
    <p>₹6500</p>
    <NavLink to="#" className="btn btn-success mt-1">Check</NavLink>
  </div>
</div>
</div>

<div className="col-sm">
            <div className="card" style={{width: "18rem"}}>
  <img src="./images/ps3.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">Girls PG</h5>
    <p className="card-text">Gokhalenagar</p>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Single</NavLink>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Double</NavLink>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Triple</NavLink><br/>
    <p>₹7000</p>
    <NavLink to="#" className="btn btn-success mt-1">Check</NavLink>
  </div>
</div>
</div>
<div className="col-sm">
            <div className="card" style={{width: "18rem"}}>
  <img src="./images/ps4.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">Ravi PG</h5>
    <p className="card-text">Gokhalenagar</p>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Single</NavLink>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Double</NavLink>
    <NavLink to="#" className="btn btn-light rounded-5 p-1 btn-sm m-1">Triple</NavLink><br/>
    <p>₹5000</p>
    <NavLink to="#" className="btn btn-success mt-1">Check</NavLink>
  </div>
</div>
</div>
</div>

{/* mess service */}

<div className="row mx-auto mt-5">
        <div className="col-sm">
            <div className="card" style={{width: "18rem"}}>
  <img src="./images/ms1.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Annapurna Mess</h5>
    <p className="card-text">Gokhalenagar</p>
    <NavLink to="#" className="btn btn-success">Check</NavLink>
  </div>
</div>
</div>

<div className="col-sm">
            <div className="card" style={{width: "18rem"}}>
  <img src="./images/ms2.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Sai Mess</h5>
    <p className="card-text">Gokhalenagar</p>
    <NavLink to="#" className="btn btn-success">Check</NavLink>
  </div>
</div>
</div>

<div className="col-sm">
            <div className="card" style={{width: "18rem"}}>
  <img src="./images/ms3.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Kamat Mess</h5>
    <p className="card-text">Model Colony</p>
    <NavLink to="#" className="btn btn-success">Check</NavLink>
  </div>
</div>
</div>
<div className="col-sm">
            <div className="card" style={{width: "18rem"}}>
  <img src="./images/ms4.jpeg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Omkar Mess</h5>
    <p className="card-text">Model Colony</p>
    <NavLink to="#" className="btn btn-success">Check</NavLink>
  </div>
</div>
</div>
</div>
{/* Map Location */}

<div className="flex-grow-1" style={{marginTop:"13rem"}}>
<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30264.766738391576!2d73.82714390235884!3d18.524570572792108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spg%20near%20me!5e0!3m2!1sen!2sin!4v1720249286174!5m2!1sen!2sin" width="500" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                
</div>
</div>

        </>
    );
}