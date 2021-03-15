import {useContext} from 'react'
import {Navbar, Nav} from'react-bootstrap'

import Link from 'next/link'

import UserContext from '../userContext'

export default function NavBar(){

    const {user} = useContext(UserContext)

    console.log(user)

    return(
        <Navbar bg="light" expand="lg">
            <Link href="/">
                <a className="navbar-brand">Next-Booking</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/">
                        <a className="nav-link" role="button">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="nav-link" role="button">About</a>
                    </Link>
                    {
                        user.email
                        ?
                        <>  
                             <Link href="/search">
                                 <a className="nav-link" role="button">Search</a>
                            </Link>
                             <Link href="/balance">
                                 <a className="nav-link" role="button">Balance</a>
                            </Link>
                            <Link href="/income">
                                 <a className="nav-link" role="button">Income</a>
                            </Link>
                            <Link href="/expense">
                                 <a className="nav-link" role="button">Expense</a>
                            </Link>
                            <Link href="/logout">
                                <a className="nav-link" role="button">Logout</a>
                            </Link>
                        </>
                                  
                        :
                        <>
                            <Link href="/register">
                                    <a className="nav-link" role="button">Register</a>
                            </Link>   

                            <Link href="/login">
                                <a className="nav-link" role="button">Login</a>
                            </Link>
                        </>
                    }                                                                                                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}