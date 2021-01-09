import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const SignupButton = () => {
    return (
        <NavLink to="/sign-up" exact={true} activeClassName="active">
            <Button>Sign Up</Button>
        </NavLink>
    );
};

export default SignupButton;

const Button = styled.button`

`
