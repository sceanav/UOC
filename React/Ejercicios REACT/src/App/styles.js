import styled from "styled-components";


export const P = styled.p`
	background-color: ${({marcado}) => marcado?"pink":"transparent"};
`;

export const BUTTON = styled.button`
width: 400px;
height: 50px;`
