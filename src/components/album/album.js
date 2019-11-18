import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, ListGroupItem, ListGroup,
    CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
import AudioPlayer from "react-h5-audio-player";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { playMusic } from "../../redux/action";
import Music from '../music/music';

function mapDispatchToProps(dispatch) {
    return {
        playMusic: music_url => dispatch(playMusic(music_url))
    };
}

class ConnectedAlbum extends Component {
    constructor(props) {
        super(props);
        const album = props.match.params.album_id;
        this.state = {
            album: album,
            tracks: [],
            artwork: '',
            artist: '',
            music_url: '',
        };

    }

    playMusic(music) {
        this.props.playMusic(music);
        this.setState({
            music_url: music
        });
    };

    componentDidMount() {
        fetch('http://tannerv.ddns.net:3000/api/album/' + this.state.album)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    tracks: json,
                    artwork: json[0].artwork,
                    artist: json[0].artist
                })
            })
            .catch(function () {
                console.log("error");
            });;
    }
    

    render() {

        return (
            <div className="artist">
                <p className="arrow-back"><Link to="/albums" className="return"> &lsaquo; Albums </Link></p>
                <div className="container">
                    <div className='boxartist'>
                        <Container>
                            <Row>
                                <Col md='4'>
                                        <Card className="varialbum" >
                                            <CardImg top className='images' src={'http://tannerv.ddns.net:12345/SpotiReact/' + this.state.artwork} alt="album" />
                                            <CardBody>
                                                <CardTitle className="title">{this.state.album}</CardTitle>
                                                <CardSubtitle className="subtitle"> {this.state.artist}</CardSubtitle>
                                            </CardBody>
                                        </Card>
                                </Col>
                                <Col md='8'>
                                    <ListGroup>
                                        {this.state.tracks.map((item, i) =>
                                            <ListGroupItem key={i} className="clickable" onClick={() => this.playMusic(item.url)} > {item.name} </ListGroupItem>                                        
                                        )}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }


}

const Album = connect(
    null,
    mapDispatchToProps
)(ConnectedAlbum);

export default Album;