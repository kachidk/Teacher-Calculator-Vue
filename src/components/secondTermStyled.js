import styled from 'vue-styled-components';

const primaryColor = '#26B2F3';
const secondaryColor = 'red';
const tertiaryColor = 'gray';
const defaultColor = 'yellow';

const btnProps = { Primary: Boolean,
                   Secondary: Boolean,
                   Tertiary: Boolean
    }

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
    width: 22.5rem;
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

export const AllButton = styled('button', btnProps)`
    background-color: ${props => props.Primary ? primaryColor : props.Secondary ? secondaryColor : props.Tertiary ? tertiaryColor : defaultColor } ;
    color: white;
    padding: 10px 20px;
    border: 2px solid;
    border-radius: 5px;
    &:hover{
        background-color: transparent;
        border: 2px solid;
        border-color: ${props => props.Primary ? primaryColor : props.Secondary ? secondaryColor : props.Tertiary ? tertiaryColor : defaultColor };
        color: ${props => props.Primary ? primaryColor : props.Secondary ? secondaryColor : props.Tertiary ? tertiaryColor : defaultColor };
        cursor: pointer;
    }
    &:focus{
        outline: none;
        box-shadow: none;
    }
`;

export const AllButtonContainer = styled.div`
    display: flex;
`;

