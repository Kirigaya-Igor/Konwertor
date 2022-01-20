import React, { FC } from 'react';
import './header.scss'
import { NavLink } from "react-router-dom";

//@ts-ignore 
const setActive = ({ isActive }) => isActive ? 'activeLink' : 'link'

export const Header: FC = () => {
    return (
        <div className='header'>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-sm-4 col-xl-3 col-xxl-2">
                        <h2 className='headerTitle'>Currency APP</h2>
                    </div>
                    <div className="col-12 col-sm-8 col-xl-9 col-xxl-10 d-flex flex-wrap">
                        <NavLink to='/' className={setActive}>Currency Converter</NavLink>
                        <NavLink to='/gold' className={setActive}>Gold price</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}