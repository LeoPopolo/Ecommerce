import styled from 'styled-components';

export const Button = styled.button`
    padding: .5em 1em;
    border-radius: 100px;
    font-size: 1em;
    background-color: var(--primary-color);
    color: #fff;
    display: flex;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: .5em;
    cursor: pointer;

	a {
		color: #fff;
	}

	svg {
		stroke: #fff;
	}
`;

export const SecondaryButton = styled.button`
    padding: .5em 1em;
    border-radius: 100px;
    font-size: 1em;
    background-color: #fff;
    color: var(--primary-color);
    display: flex;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: .5em;
    cursor: pointer;

	svg {
		stroke: var(--primary-color);
	}
`;