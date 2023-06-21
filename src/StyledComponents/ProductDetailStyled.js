import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #25252580;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 999;
    animation: createWrapper 200ms;
    transition: all 200ms;

    @keyframes createWrapper {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

export const Card = styled.div`
    border-radius: 15px;
    padding: 3em;
    display: flex;
    justify-content: center;
    background-color: #fff;
    animation: show 200ms;
    align-items: flex-start;
    gap: 2em;
    transition: all 200ms;
    z-index: 9999;
    position: relative;

    @keyframes show {
        from {
            opacity: 0;
            transform: scale(0);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export const ImageWrapper = styled.div`
    width: 15vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    overflow: hidden;
`;

export const Image = styled.img`
    height: 100%;
`;

export const Info = styled.div`
    .no-stock, .low-stock {
        display: inline-flex;
        width: 100%;
    }

    .no-stock {
        color: #aaa;
    }

    .low-stock {
        color: var(--secondary-color);
    }
`;

export const Name = styled.h3`
    font-size: 2em;
    font-weight: 300;
    margin-top: 1em;
`;

export const Price = styled.h4`
    color: var(--primary-color);
    font-size: 1.5em;
    font-weight: 500;
`;

export const Brand = styled.h4`
    color: var(--secondary-color);
`;

export const Description = styled.p`
    margin-top: 2em;
`;