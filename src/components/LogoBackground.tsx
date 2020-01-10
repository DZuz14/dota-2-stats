import React from 'react'
import styled from '@emotion/styled'

const LogoStyled = styled.div`
background-image: url('${props => props.logoUrl}');
background-repeat: no-repeat;
background-position: 50% 50%;
background-size: cover;
height: 30px;
width: 30px;
margin-right: 15px;
display: inline-block;
`

const LogoBackground = ({ logoUrl }) => <LogoStyled logoUrl={logoUrl} />

export default LogoBackground
