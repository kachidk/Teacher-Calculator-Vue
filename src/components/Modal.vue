<script>
import styled from 'vue-styled-components';

const ModalMain = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`;

const MainContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    color: black;
    border-radius: 4px;
`;

const ModalHeader = styled.div`
    font-size: 30px;
    width: 100;
    background-color: #30364C;
    color: white;
    padding: 20px;
    height: 50px;
    align-items: center;
    display: flex;
    border-radius: 4px;
`;

const ModalShow = styled.div`
    display: flex;
`;

const TopButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`;

const ModalTitle = styled.div`
    
`;

export default {
    components: {
        ModalMain, MainContent, ModalHeader, ModalShow, TopButtonContainer, ModalTitle
    }
}
</script>

<template>
        <ModalMain>
            <MainContent>
             <TopButtonContainer>
            <slot name="modalSlotButtons"></slot>
             </TopButtonContainer>   
            <ModalHeader>
                <slot name="modalSlotHeader"></slot>
            </ModalHeader>
            <ModalTitle>
                <slot name="modalSlotTitle"></slot>
            </ModalTitle>
            <ModalShow>
                <slot name="modalShowContent"></slot>
            </ModalShow> 
            </MainContent>
        </ModalMain>
</template>

<style scoped>

</style>