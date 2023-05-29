import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png'
const Header = () => {
    return (
        <>
            <nav style={{ backgroundColor: "#D0D3D4" }} className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img style={{ width: "150px" }} src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Add</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;


