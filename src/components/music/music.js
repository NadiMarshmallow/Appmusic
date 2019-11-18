import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioPlayer from "react-h5-audio-player";

const mapStateToProps = state => {
  return { music_url: state.music_url };
};
const ConnectedMusic = ({ music_url }) => (
    <AudioPlayer
        autoPlay
        src={'http://tannerv.ddns.net:12345/SpotiReact/' + music_url}
        className='musicPlayer'
    />
);

const Music = connect(mapStateToProps)(ConnectedMusic);

export default Music;