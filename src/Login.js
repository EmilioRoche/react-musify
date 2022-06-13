import React from "react";
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router,  Routes,  Route, Link} from "react-router-dom"
//change to actual page later
const AUTH_URL = `https://musify-backend-api.herokuapp.com/api/v1/login`;
/*const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}
&response_type=code
&redirect_uri=https://emilioroche.github.io/react-musify/
&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify`;
*/
export default function Login() {
    return (
    <Router>
        <Container 
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: `100vh`}}
    >   render() {
        <Link to="/api/v1/login">
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            login with Spotify
        </a>
        </Link>
        }
        
    </Container>
        <Routes>
            <Route exact path="/api/v1/login"></Route>
        </Routes>
    </Router> 
    );
}