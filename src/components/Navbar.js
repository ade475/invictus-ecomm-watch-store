import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import logo from '../img/prod-02.jpg';
const Navbar = () => {
  return (
    <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      <Link to='/'>
        <img src={logo} className='navbar-brand' alt='logo' />
      </Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
          <Link to='/product' className='nav-link'>
            product
          </Link>
        </li>
        <li className='nav-item ml-5'>
          <Link to='/Signin' className='nav-link'>
            signin
          </Link>
        </li>
        <li className='nav-item ml-5'>
          <Link to='/Signup' className='nav-link'>
            signup
          </Link>
        </li>
      </ul>
      <Link to='cart' className='ml-auto'>
        <ButtonContainer>
          <span className='mr-2'>
            <i className='fas fa-cart-plus' />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: blue;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
    color: black;
    margin-right: 15px;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

export default Navbar;
