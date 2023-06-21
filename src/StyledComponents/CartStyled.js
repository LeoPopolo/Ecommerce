import styled from 'styled-components';

export const CartItem = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 1em;
    box-shadow: 0 0 15px 0 #dddddd80;
    padding: 1em;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;

        &:first-child {
            justify-content: flex-start;

            div {
                border-radius: 50%;
    			box-shadow: 0 0 15px 0 #dddddd80;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        &:nth-child(3) {
            justify-content: flex-end;
        }

        span {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }
    }
`;

export const ImageWrapper = styled.div`
    width: 2.5em;
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    overflow: hidden;
`;

export const Image = styled.img`
    height: 100%;
`;
