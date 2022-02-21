import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

class Analysis extends Component {
            constructor(){
                super();
                this.state={
                    data:[
                        {Technology: 'WebDev',Expertise:100},
                        {Technology: 'Design',Expertise:85},
                        {Technology: 'AppDev',Expertise:90},
                        {Technology: 'Frontend',Expertise:95},
                        {Technology: 'Backend',Expertise:70},
                        {Technology: 'UI',Expertise:80},
                        {Technology: 'UX',Expertise:81},
                        {Technology: 'Blockchain',Expertise:80}
                    ]
                }
            }

  render() {
      var blue = "#000221"
    return (
        <Fragment>
            <Container>
            <h1 className="analysisMainTitle">OUR SCHOOLS</h1>
            <div className="bottom"></div>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                        <BarChart width={100} height={300} data={this.state.data}>
                        <XAxis dataKey = "Technology" />
                        <Tooltip />
                        
                        <Bar dataKey="Expertise" fill={blue}>

                        </Bar>
                        </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    
                    <Col lg={6} md={12} sm={12}>
                    <p className="analysisDescription text-justify">We are the leading <strong>TECH EDUCATION</strong> company 
                    in Sub-Saharan Africa that helps people learn premium technology skills
                    virtually and helps get people off the street by providing access to training
                    for in-demand tech opportunities.<br></br><br></br>
                    
                    Our TECH training kiosts is all about getting young people in remote areas and cities
                    off the streets, by engaging them in a 6 months intensive TECH bootcamp called CODE & EARN.<br></br><br></br>
                    
                    We also organise onsite and virtual trainings, focused on building talents at the 
                    undergraduate level. This is aimed at fueling passion of young people to the right direction
                    early enough before they get into the job market.<br></br><br></br>

                    Our TECH training hubs are aimed at combarting the rising issue of internet crimes, online betting
                    and other vises that rubs young people of their creative niche. Our learning system will
                    be flexible, built to run offline in our customized sojilearn tablets.</p>
                    </Col>
                </Row>
            </Container>




        </Fragment>
        )
  }
}

export default Analysis