import React from 'react'
import PropTypes from 'prop-types';


const Header = ({title}) => {
    // const onClick = () => {
    //     console.log('click')
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <div id="navigation">
                <ul>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact-me">Contact</a></li>
                    <li>
                    <a
                        href="https://docs.google.com/document/d/14yti_k0GQCLeKrqTCVWKKsfx3TdvEYrY/edit"
                        >Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Daniel Bradley',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
