import React from "react";
import Container from 'react-bootstrap/Container';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=b63b85c119f74bec909ed2e04dcd6765
&response_type=code
&redirect_uri=https://emilioroche.github.io/react-musify/
&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify`;

export default function Login() {
    return ( 
    <Container 
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: `100vh`}}
    > 
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            login with Spotify
        </a>
    </Container>
    );
}