import React from "react";
import Container from 'react-bootstrap/Container';

const client_id = process.env.REACT_APP_CLIENT_KEY;

const AUTH_URL = `http://localhost:3000/api/login`;
/*const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}
&response_type=code
&redirect_uri=https://emilioroche.github.io/react-musify/
&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify`;
*/
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