import React from "react";
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router,  Routes,  Route, Link} from "react-router-dom"
//change to actual page later
const AUTH_URL = `https://musify-backend-api.herokuapp.com/api/v1/login`;

export default function Login() {
    return (
    <Router>
        <Container 
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: `100vh`}}
    >  
        <Link to={{ pathname: "https://musify-backend-api.herokuapp.com/api/v1/login" }} target="_blank">
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            login with Spotify
        </a>
        </Link>
        
    </Container>
        <Routes>
            <Route exact path="/api/v1/login"></Route>
        </Routes>
    </Router> 
    );
}