import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: [],
        };
    }

    componentDidMount() {
        fetch('http://tannerv.ddns.net:3000/api/albums')
            .then(response => response.json())
            .then(json => this.setState({
                album: json,
            }))
            .catch(function () {
                console.log("error");
            });;
    }

    render() {

        return (
            <div className="artist">
                <p className="arrow-back"><Link to="/" className="return"> &lsaquo; Library </Link></p>

                <div className="container">
                    <div className='boxartist'>
                        <Container>
                            <Row>
                                {this.state.album.map((item, i) =>

                                    <Col md='3' key={i} className='col-margin'>
                                        <Card className="varialbum" >
                                            <Link to={`/album/${item.album}`}> 
                                            <CardImg top className='images' src={'http://tannerv.ddns.net:12345/SpotiReact/' + item.artwork} alt="album" />
                                                <CardBody>
                                                    <CardTitle className="title">{item.album}</CardTitle>
                                                    <CardSubtitle className="subtitle"> {item.artist}</CardSubtitle>
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
export default Albums;