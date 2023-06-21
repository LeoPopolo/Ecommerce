import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 10%;
    position: fixed;
    width: 100%;
    background-color: #fff;
    top: 0;
    z-index: 99;

    div {
        display: flex;
		align-items: center;
		
		.cart-total-amount {
			margin-left: 5px;
		}

		.profile-menu-wrapper {
			position: relative;
	
			.profile-menu-background {
				background-color: #cccccc40;
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
			}
	
			.profile-menu {
				position: absolute;
				right: 0;
				top: 50px;
				background-color: #fff;
				width: 300px;
				height: auto;
				border-radius: 15px;
				box-shadow: 0 0 15px 0 #dddddd80;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
	
				>span {
					font-size: 1.1em;
					text-align: left;
					border-bottom: 1px solid #eeeeee80;
					width: 100%;
					padding: 1em;
				}
	
				.profile-menu-options {
					display: flex;
					flex-direction: column;
					width: 100%;
					
					span {
						border-bottom: 1px solid #eeeeee80;
						width: 100%;
						text-align: left;
						padding: 10px;
						cursor: pointer;
						user-select: none;
						display: inline-flex;
						align-items: center;
						gap: 1em;
						transition: 200ms all;
	
						&:hover {
							background-color: var(--light-primary-color);
						}
					}
				}
			}
		}
	
		.profile-icon-wrapper {
			cursor: pointer;
			display: inline-flex;
			align-items: center;
			margin-left: 20px;
			padding: 10px 20px;
			border-radius: 100px;
			border: 1px solid var(--primary-color);
	
			&:hover {
				background-color: var(--light-primary-color);
			}
	
			.profile-icon {
				margin-right: 20px;
				transform: scale(1.5);
			}
		}
	
		path {
			fill: var(--primary-color);
		}

		.login-icon path {
			fill: #fff;
		}
    }

`;

export const LogoTitle = styled.h1`
    margin: 0;
    font-size: 2em;
    font-weight: 300;
    
    a {
        color: var(--primary-color);
    }
`;

export const NavbarLink = styled(Link)`
    padding: 5px .5em;
    transition: color 200ms;

    &:hover {
        color: var(--primary-color);
    }
`;

export const NavbarLinkButton = styled(Link)`
    padding: 5px 1em;
    border-radius: 100px;
    background-color: var(--primary-color);
    color: #fff;
    display: inline-flex;
    align-items: center;
    gap: .5em;
    margin-left: .5em;
    
    path {
        fill: #fff;
    }
`;