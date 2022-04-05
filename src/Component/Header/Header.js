import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='d-flex justify-content-center m-4'>
            <CustomLink className='me-2' to={'/'}>Home</CustomLink>
            <CustomLink className='me-2' to={'/reviews'}>Reviews</CustomLink>
            <CustomLink className='me-2' to={'/dashboard'}>Dashboard</CustomLink>
            <CustomLink className='me-2' to={'/blogs'}>Blogs</CustomLink>
            <CustomLink to={'/about'}>About</CustomLink>
        </div>
    );
};

export default Header;