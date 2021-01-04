<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ContentMain, ContentInner, InputVal, InputName, InputContainer,AllButtonContainer,
        GridDisplay, InputSpan, InputSpanValContainer,InputItemsRight, AllButton } from '@/components/styled/thirdTermStyled.js';
import Modal from '@/components/Modal.vue';
import Alert from '@/components/Alert.vue';
import styled from 'vue-styled-components';
import {getTotal, getTotalCA, getTotalExam, getTotalFirstTerm, getTotalSecondTerm, getMathsTotal, getGrammarTotal, getCompositionTotal, getComprehensionTotal, getSpellingTotal, getSocialTotal, getScienceTotal, getHealthTotal, getGeographyTotal, getReligiousTotal, getMoralTotal, getVerbalTotal, getVocationalTotal, getQuantitativeTotal, getNigeriaTotal, getFrenchTotal, getComputerTotal, getHistoryTotal, getPoetryTotal, getCitizenshipTotal } from './thirdTermLogic.js';
import 'vue-awesome/icons/home';


const AlertBackground = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`;

const FirstAllButtonContainer = AllButtonContainer.extend`
    justify-content: center;
    margin-top: 40px;
`;

const ModalGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    width: 100%;
    margin-top: 20px;
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }    
`;

const ResultShow = styled.div`
    display: flex;
    font-size: 20px;
    justify-content: center;
    border: 1px solid gray;
    @media(min-width: 768px){
        font-size: 30px;
    }
`;

export default {
    name: "SecondTerm",
    components: {
        Header, Footer,
      //styled --- ??
        ContentMain, ContentInner,InputVal,InputName,InputContainer,
        GridDisplay, InputSpan, InputSpanValContainer,InputItemsRight, AllButton,
        FirstAllButtonContainer, AlertBackground, ModalGrid,ResultShow,
      // styled --- //  
        Modal, Alert
    },
    data: ()=>({
        main: [],
        modalState: false,
        alertResultState: false,
        totalTotal: [],
        totalDivide: [],
        totalCA: [],
        totalExam: [],
        totalFirstTerm: [],
        totalSecondTerm: [],
        totalMaths: [],
        totalGrammar: [],
        totalComposition: [],
        totalComprehension: [],
        totalSpelling: [],
        totalSocial: [],
        totalScience: [],
        totalHealth: [],
        totalGeography: [],
        totalReligious: [],
        totalMoral: [],
        totalVerbal: [],
        totalVocational: [],
        totalQuantitative: [],
        totalNigeria: [],
        totalFrench: [],
        totalComputer: [],
        totalHistory: [],
        totalPoetry: [],
        totalCitizenship: []
    }),     
    methods: {
      getAbc(){
        this.getTotal()
        this.getTotalCA()
        this.getTotalExam()
        this.getTotalFirstTerm()
        this.getTotalSecondTerm()
        this.getMathsTotal()
        this.getGrammarTotal()
        this.getCompositionTotal()
        this.getComprehensionTotal()
        this.getSpellingTotal()
        this.getSocialTotal()
        this.getScienceTotal()
        this.getHealthTotal()
        this.getGeographyTotal()
        this.getReligiousTotal()
        this.getMoralTotal()
        this.getVerbalTotal()
        this.getVocationalTotal()
        this.getQuantitativeTotal()
        this.getNigeriaTotal()
        this.getFrenchTotal()
        this.getComputerTotal()
        this.getHistoryTotal()
        this.getPoetryTotal()
        this.getCitizenshipTotal()
        this.toggleModal()
      },
      getResultAlert(){
        this.toggleResultAlert();
      },
      toggleModal(){
        this.modalState = !this.modalState
      },
      toggleResultAlert(){
        this.alertResultState = !this.alertResultState
      },
      clearAbc(){
        location.reload()
      },

      getTotal, getTotalCA, getTotalExam, getTotalFirstTerm, getTotalSecondTerm, getMathsTotal, getGrammarTotal, getCompositionTotal, getComprehensionTotal, getSpellingTotal, getSocialTotal, getScienceTotal, getHealthTotal, getGeographyTotal, getReligiousTotal, getMoralTotal, getVerbalTotal, getVocationalTotal, getQuantitativeTotal, getNigeriaTotal, getFrenchTotal, getComputerTotal, getHistoryTotal, getPoetryTotal, getCitizenshipTotal,

    }

}

</script>

<template>
<div class="take-full-width">
  <Header />
  <div class="page-header">
    <v-icon name="home" scale="2"/>  
    <div class="page-header-text">Third Term</div>
  </div>
  <ContentMain>
    <div v-if="this.alertResultState">
    <AlertBackground @click="toggleResultAlert()"/>  
    <Alert>
      <AllButton Secondary @click="toggleResultAlert()" slot="alertSlotButtons">Close</AllButton> 
      <AllButton Secondary @click="toggleModal()" slot="alertSlotButtons">view</AllButton> 
    </Alert>
    </div>
    <div v-if="this.modalState">
    <Modal>
      <AllButton Secondary @click="toggleModal()" slot="modalSlotButtons">Close</AllButton>
      <span slot="modalSlotHeader">Results</span>
      <ModalGrid slot="modalShowContent">
        <ResultShow>Mathematic Total: {{ this.totalMaths }} </ResultShow>
        <ResultShow>Grammar Total: {{ this.totalGrammar }}</ResultShow>
        <ResultShow>Composition Total: {{ this.totalComposition }}</ResultShow>
        <ResultShow>Comprehension Total: {{ this.totalComprehension }}</ResultShow>
        <ResultShow>Spelling Total: {{ this.totalSpelling }}</ResultShow>
        <ResultShow>Social Total: {{ this.totalSocial }}</ResultShow>
        <ResultShow>Science Total: {{ this.totalScience }}</ResultShow>
        <ResultShow>Health Total: {{ this.totalHealth }}</ResultShow>
        <ResultShow>Geography Total: {{ this.totalGeography }}</ResultShow>
        <ResultShow>Religious Total: {{ this.totalReligious }}</ResultShow>
        <ResultShow>Moral Total: {{ this.totalMoral }}</ResultShow>
        <ResultShow>Verbal Total: {{ this.totalVerbal }}</ResultShow>
        <ResultShow>Vocational Total: {{ this.totalVocational }}</ResultShow>
        <ResultShow>Quantitative Total: {{ this.totalQuantitative }}</ResultShow>
        <ResultShow>Nigeria Languages Total: {{ this.totalNigeria }}</ResultShow>
        <ResultShow>French Total: {{ this.totalFrench }}</ResultShow>
        <ResultShow>Computer Total: {{ this.totalComputer }}</ResultShow>
        <ResultShow>History Total: {{ this.totalHistory }}</ResultShow>
        <ResultShow>Poetry Total: {{ this.totalPoetry }}</ResultShow>
        <ResultShow>Citizenship Total: {{ this.totalCitizenship }}</ResultShow>
        <ResultShow> Total: {{ this.totalTotal }}</ResultShow>
        <ResultShow>Total C.A: {{ this.totalCA }}</ResultShow>
        <ResultShow>Total Exam: {{ this.totalExam }}</ResultShow>
        <ResultShow>Total FirstTerm: {{ this.totalFirstTerm }}</ResultShow>
        <ResultShow>Total SecondTerm: {{ this.totalSecondTerm }}</ResultShow>
        <ResultShow>Average: {{ this.totalDivide }}%</ResultShow>
      </ModalGrid>   
    </Modal>
    </div>
      <ContentInner>
          <GridDisplay>
            <InputContainer>
              <InputName>Mathematic</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="mathsCA" id="mathsA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="mathsExam" id="mathsB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="mathsFirstTerm" id="mathsC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="mathsSecondTerm" id="mathsD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Grammar</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="grammarCA" id="grammarA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="grammarExam" id="grammarB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="grammarFirstTerm" id="grammarC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="grammarSecondTerm" id="grammarD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>
            
            <InputContainer>
              <InputName>Composition</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="compositionCA" id="compositionA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="compositionExam" id="compositionB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="compositionFirstTerm" id="compositionC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="compositionSecondTerm" id="compositionD"  />
                </InputSpanValContainer>
              </InputItemsRight>  
            </InputContainer>

            <InputContainer>
              <InputName>Comprehension</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="comprehensionCA" id="comprehensionA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="comprehensionExam" id="comprehensionB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="comprehensionFirstTerm" id="comprehensionC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="comprehensionSecondTerm" id="comprehensionD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Spelling/<br/>Dictation</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="spellingCA" id="spellingA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="spellingExam" id="spellingB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="spellingFirstTerm" id="spellingC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="spellingSecondTerm" id="spellingD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Social<br/>Studies</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="socialCA" id="socialA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="socialExam" id="socialB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="socialFirstTerm" id="socialC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="socialSecondTerm" id="socialD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Science</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="scienceCA" id="scienceA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="scienceExam" id="scienceB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="scienceFirstTerm" id="scienceC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="scienceSecondTerm" id="scienceD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Health<br/>Education</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="healthCA" id="healthA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="healthExam" id="healthB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="healthFirstTerm" id="healthC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="healthSecondTerm" id="healthD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Geography</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="geographyCA" id="geographyA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="geographyExam" id="geographyB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="geographyFirstTerm" id="geographyC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="geographySecondTerm" id="geographyD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Religious<br/>Studies</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="religiousCA" id="religiousA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="religiousExam" id="religiousB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="religiousFirstTerm" id="religiousC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="religiousSecondTerm" id="religiousD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Moral<br/>Instruction</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="moralCA" id="moralA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="moralExam" id="moralB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="moralFirstTerm" id="moralC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="moralSecondTerm" id="moralD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Verbal<br/>Aptitude</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="verbalCA" id="verbalA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="verbalExam" id="verbalB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="verbalFirstTerm" id="verbalC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="verbalSecondTerm" id="verbalD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Vocational<br/>Aptitude</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="vocationalCA" id="vocationalA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="vocationalExam" id="vocationalB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="vocationalFirstTerm" id="vocationalC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="vocationalSecondTerm" id="vocationalD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Quantitative<br/>Aptitude</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="quantitativeCA" id="quantitativeA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="quantitativeExam" id="quantitativeB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="quantitativeFirstTerm" id="quantitativeC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="quantitativeSecondTerm" id="quantitativeD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Nigeria<br/>Languages</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="nigeriaCA" id="nigeriaA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="nigeriaExam" id="nigeriaB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="nigeriaFirstTerm" id="nigeriaC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="nigeriaSecondTerm" id="nigeriaD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>French</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="frenchCA" id="frenchA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="frenchExam" id="frenchB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="frenchFirstTerm" id="frenchC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="frenchSecondTerm" id="frenchD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Computer</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="computerCA" id="computerA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="computerExam" id="computerB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="computerFirstTerm" id="computerC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="computerSecondTerm" id="computerD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>History</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="historyCA" id="historyA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="historyExam" id="historyB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="historyFirstTerm" id="historyC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="historySecondTerm" id="historyD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Poetry</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="poetryCA" id="poetryA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="poetryExam" id="poetryB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="poetryFirstTerm" id="poetryC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="poetrySecondTerm" id="poetryD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>

            <InputContainer>
              <InputName>Citizenship<br/>Education</InputName>
              <InputItemsRight>
                <InputSpanValContainer>
                  <InputSpan>C.A</InputSpan>
                  <InputVal type="number" class="citizenshipCA" id="citizenshipA"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>EXAM</InputSpan>
                  <InputVal type="number" class="citizenshipExam" id="citizenshipB"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>First Term</InputSpan>
                  <InputVal type="number" class="citizenshipFirstTerm" id="citizenshipC"  />
                </InputSpanValContainer>
                <InputSpanValContainer >
                  <InputSpan>Second Term</InputSpan>
                  <InputVal type="number" class="citizenshipSecondTerm" id="citizenshipD"  />
                </InputSpanValContainer>
              </InputItemsRight>
            </InputContainer>
        </GridDisplay>
        <FirstAllButtonContainer>
          <AllButton Primary v-on:click="getAbc()">Result</AllButton>
          <AllButton Secondary v-on:click="clearAbc()" style="margin-left: 10px;">Clear</AllButton>  
        </FirstAllButtonContainer>   
      </ContentInner>
  </ContentMain>
<Footer/>  
</div>  
</template>

<style lang="scss" scoped>
.take-full-width{
    width: 100%;
}
.page-header{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom:20px;
    &-text{
      font-size: 30px;
      margin-left: 8px;
    }
}
</style>

