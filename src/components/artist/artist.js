import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { RouteComponentProps, match } from 'react-router';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
import '../../App.css'


class Artist extends Component {
    constructor(props) {
        super(props);
        const artist = props.match.params.artist_id;
        this.state = {
            artist: artist,
            artists: [],
        };
    }
    componentDidMount() {
        fetch('http://tannerv.ddns.net:3000/api/artist/' + this.state.artist)
            .then(response => response.json())
            .then(json => this.setState({
                artists: json,
            }))
            .catch(function () {
                console.log("error");
            });
    }
    render() {
        return (
       
             <div className="artist">
                <p className="arrow-back"><Link to="/artists" className="return"> &lsaquo; Artists </Link></p>

                <div className="container">
                    <div className='boxartist'>
                        <Container>
                            <Row>
                                <Col xs = '12' >
                                    <h1>{this.state.artist}</h1>
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                {this.state.artists.map((artist, index) =>

                                    <Col md='3'>
                                        <Card className="varialbum" >
                                            <Link to={`/album/${artist.album}`}> 
                                            <CardImg top className='images' src={'http://tannerv.ddns.net:12345/SpotiReact/' + artist.artwork} alt="album" />
                                                <CardBody>
                                                    <CardTitle className="title">{artist.album}</CardTitle>
                                                </CardBody>
                                            </Link>
                                        </Card>
                                    </Col>



                                )}
                            </Row>
                        </Container>
                    </div>

                </div>
                <br />
            </div>
        )
    }
}
export default Artist