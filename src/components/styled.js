import styled from 'vue-styled-components';


export const ContentMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;

export const ContentInner = styled.div`
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px){
        width: 768px;
    }
    @media (min-width: 1024px){
        width: 1024px;
    }
    @media (min-width: 1028px){
        width: 1028px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
    align-items: center;
    width: 18rem;
`;

export const InputVal = styled.input`
    border: 2px solid gray;
    border-radius: 5px;
    width: 65px;
    height: 40px;

    &:focus{
        outline: none;
        border: 2px solid cadetblue;
    }

`;

export const InputName = styled.span`
    font-size: 20px;
    margin-bottom: -1rem;
`;

export const GridDisplay = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const InputSpan = styled.span`
    font-size: 12px;
`;

export const InputSpanValContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0.5rem;
`;

export const InputItemsRight = styled.div`
    display: flex;
`;