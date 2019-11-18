import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/playlist.jpg'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Row, Col,
} from 'reactstrap';

import '../../App.css';

class Playlist extends Component {

    render() {

        return (
            <div className='playlistcontainer'>
                <p><Link to="/" className="return"> &lsaquo; Library </Link></p>

                <div className='boxartist'>
                    <h2><strong>Playlist</strong></h2>
                    <Card className="varialbum">
                        <Link to="/Newplaylist" className="return">
                            <Container>
                                <Row>
                                    <Col md='2'><CardImg top className='playlist' src={Image} alt="playlist" /></Col>

                                    <Col md='5'>
                                        <CardBody>
                                            <CardTitle className='return'>New Playlist..</CardTitle>

                                            <CardSubtitle></CardSubtitle>

                                        </CardBody>
                                    </Col>
                                </Row>
                            </Container>
                        </Link>
                    </Card>

                </div>

            </div>
        )
    }


}
export default Playlist;