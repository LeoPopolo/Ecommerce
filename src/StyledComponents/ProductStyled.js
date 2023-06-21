import styled from 'styled-components';

export const Card = styled.div`
    border-radius: 15px;
    border: 1px solid #ccc;
    padding: 1em;
    transition: all 200ms;

    &:hover {
        box-shadow: 0 0 15px 0 #dddddd80;
        transform: translate(-3px, -3px);
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 20vh;
    overflow: hidden;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    position: relative;

    span {
        position: absolute;
        bottom: 0;
        text-align: center;
        color: #fff;
        width: 100%;
    }

    .no-stock {
        background-color: #aaa;
    }

    .low-stock {
        background-color: var(--secondary-color);
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Price = styled.h3`
    text-align: center;
    margin-top: 1em;
    font-weight: 300;
    font-size: 1.5em;
`;

export const Name = styled.h3`
    text-align: center;
    margin-bottom: 1em;
`;

export const AddToCart = styled.button`
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
    transition: all 200ms;

    &:hover {
        box-shadow: 0 0 15px 0 #dddddd80;
        transform: translateY(-5px);
    }

    &.disable-add-to-cart {
        background-color: #aaa;
        cursor: not-allowed;
    }
`;