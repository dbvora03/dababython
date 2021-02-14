import React, { useState, useEffect } from 'react'
import './landing.css'
import { Card, Button, Navbar } from 'react-bootstrap'
import people from './people.gif'
import logo from './default.png'
import wave from './wave.svg'
import { Link, useHistory } from 'react-router-dom'


const LandingPage = () => {
    return (
        <div>
            <div>
                <div className="container justify-content-center" id="homecont">
                    <Card className="text-center rounded-top" id="homecard">
                        <Card.Body className="">
                            <div>
                                <img src={people} style={{ height: '400px'}} className="float-left insideContent "  />
                                <Card.Title><img src={logo} style={{ height: '130px', marginTop:"60px" }}/></Card.Title>
                                <Card.Text>A virtual assistant.</Card.Text>
                                <Button href="/form" variant="primary">Continue</Button>
                            </div>

                        </Card.Body>
                    </Card>
                    
                </div>
                <img src={wave} className="wave"/>
                <div className="infopart">
                    
                    <div className="container ">
                        <div classname="row darow">
                            <div className="col-md-12">
                                <div>  <h4 className="text-white">Lol, how'd you find me</h4> </div>
                                <Card className="text-center">
                                    <Card.Body id="homecard">
                                        <Card.Title><h4>A reliable calculator for determining blah blah blah blah</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row thatrow">

                            <div className="col-md-4">
                                <Card className="text-center">
                                    <Card.Body id="homecard">
                                        <Card.Title> <img className="demImages" src="https://www.freeiconspng.com/uploads/bag-money-icon--33.png" alt="" /></Card.Title>
                                        <Card.Title><h4>Some basic info</h4></Card.Title>
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className="col-md-4">
                                <Card className="text-center">
                                    <Card.Body id="homecard">
                                        <Card.Title> <img className="demImages" src="https://www.freeiconspng.com/uploads/bag-money-icon--33.png" alt="" /></Card.Title>
                                        <Card.Title><h4>Some basic info</h4></Card.Title>
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className="col-md-4">
                                <Card className="text-center">
                                    <Card.Body id="homecard">
                                        <Card.Title> <img className="demImages" src="https://www.freeiconspng.com/uploads/bag-money-icon--33.png" alt="" /></Card.Title>
                                        <Card.Title><h4>Some basic info</h4></Card.Title>
                                    </Card.Body>
                                </Card>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage