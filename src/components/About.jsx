import React from 'react'
import { Container } from "reactstrap";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import "./about.css"

import "bootstrap/dist/css/bootstrap.min.css";
function About() {

    return (
        <div>
          <Helmet title="About Us">
           <CommonSection title="About Us" subTitle="Here comes the future"/>
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-10 mt-3">

                    <h1>Who Are We</h1>
                    <i>IndianFleetServices is a next generation ecommerce platform for cars. We provide the best experience for car buyers by offering a wide assortment of certified cars that are home delivered in a click of a button while sellers get the best price of their vehicles.</i><br /><br />
                    <h5>Our Mission:</h5>
                    <i>Our mission is to revolutionise the way used cars are bought and sold across the world. With this in mind, we set up in 2022,  And with continuous innovation, more partnerships, and valuable relationships with people, we want to keep solving problems for consumers and add ease and value to their lives.</i><br /><br />
                    <h5>Our Vision</h5>
                    <i>We trust, and build trust<br></br>
                    We invest in employees and partners<br></br>
                    Taking ownership<br></br>
                    Have high standards. Top high results.<br></br>
                    We're in it for the long haul
                    </i>
                </div>
            </div>
            <div>
                <Container>
                    <div className='container-fluid'>

                        <h1 align="middle"><em>TEAM</em></h1>
                        <table class="table table-bordered align-middle">
                            <tbody>
                                <tr>
                                    <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/smvita.png" alt='SM Vita' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>SMVita Staff</em></h4>
                                            <p className='card-text text-secondary'>
                                                <em>
                                                    <b>Project gidance</b>
                                                </em>
                                            </p>
                                        </div>
                                    </div>
                                    </td>

                                    <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/mentor.png" alt='Savinay Patil' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>Mr. SAVINAY PATIL</em></h4>
                                            <p className='card-text text-secondary'><em><b>Team Mentor</b></em>
                                            </p>
                                        </div>
                                    </div>
                                    </td>

                                    <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/viraj.jpg" alt='VIRAJ GOLE' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>Viraj Gole</em></h4>
                                            <p className='card-text text-secondary'>
                                                <em><b>Team Lead</b></em>
                                            </p>
                                        </div>
                                    </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        <br></br><br></br><br></br>
                    </div>
                </Container>
                <Container>
                    <div className='container-fluid'>
                        <table class="table table-bordered align-middle">
                            <tbody>
                                <tr>
                                    <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/Amol.jpg" alt='Amol Mandave' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>AMOL MANDAVE</em></h4>
                                            <p className='card-text text-secondary'>
                                                <em><b>Team Member</b></em>
                                            </p>
                                        </div>
                                    </div>
                                    </td>

                                    <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/rohan.jpg" alt='Rohan Jaiswal' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>ROHAN JAISWAL</em></h4>
                                            <p className='card-text text-secondary'><em>
                                                <b>Team Member</b>
                                            </em>
                                            </p>
                                        </div>
                                    </div>
                                    </td>
                                    <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/rahul1.JPG" alt='Rahul Fatnani' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>RAHUL FATNANI</em></h4>
                                            <p className='card-text text-secondary'><em><b>Team Member</b></em>
                                            </p>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br><br></br><br></br>
                    </div>
                </Container>
                <Container>
                    <div className='container-fluid'>
                        <table class="table table-bordered align-middle">
                            <tbody>
                                <tr>
                                  <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/indra.png" alt='Indrajeet Nikam' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>INDRAJEET NIKAM</em></h4>
                                            <p className='card-text text-secondary'>
                                                <em><b>Team Member</b></em>
                                            </p>
                                        </div>
                                    </div>
                                    </td>
                                    <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/kishor.jpeg" alt='Kishor Pawar' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>KISHOR PAWAR</em></h4>
                                            <p className='card-text text-secondary'>
                                                <em><b>Team Member</b></em>
                                            </p>
                                        </div>
                                    </div>

                                    </td>
                                     <td align="middle"><div className='cards text-centre'>
                                        <div className='overflow'>
                                            <img src="../EmpImages/shubham.jpg" alt='SHUBHAM YADAV' className='card-img-top' />
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className='card-title'><em>SHUBHAM YADAV</em></h4>
                                            <p className='card-text text-secondary'>
                                                <em><b>Team Member</b></em>
                                            </p>
                                        </div>
                                    </div>
                                    </td>

                                   
                                </tr>
                            </tbody>
                        </table>
                        <br></br><br></br><br></br>
                    </div>
                </Container>
            </div>
           </Helmet>
        </div>
    )
}

export default About
