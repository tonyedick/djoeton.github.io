import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'
import Slide from 'react-reveal/Slide'

class Analysis extends Component {

            constructor(){
                super();
                this.state={
                    data:[],
                    techdesc:".."
                }
            }

        componentDidMount(){
            RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({data:result});
                });
            RestClient.GetRequest(AppUrl.HomeTech).then(result=>{
            this.setState({techdesc:result[0]['tech_description']});
                });

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
                        <XAxis dataKey ="Technology" />
                        <Tooltip />
                        
                        <Bar dataKey="Expertise" fill={blue}>

                        </Bar>
                        </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    
                    <Col lg={6} md={12} sm={12}>
                    <p className="analysisDescription text-justify">
                    <Slide right>
                    { ReactHtmlParser(this.state.techdesc)}
                    </Slide>
                    </p>
                    </Col>
                </Row>
            </Container>




        </Fragment>
        )
  }
}

export default Analysis