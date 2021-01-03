<script>
import 'vue-awesome/icons/link';
import 'vue-awesome/icons/file-alt';
export default {
   
}
</script>

<template>
<div>
<Header />
<div class="page-header">
    <v-icon name="file-alt" scale="2"/>  
    <div class="page-header-text">Documentation</div>
</div>
<div class="page-alignment">
<div class="content-main">
  <div class="content-inner">
      <div class="doc-card">
        <div class="doc-header"><v-icon name="link" class="doc-header-icon" scale="2"/>What Its About</div>
        <div class="doc-body">
            This App helps Teachers corrolate and calculate results faster, it helps Teachers find the total scores of subjects both C.A and exams and also calculate the average percentage of all subjects.  
        </div>
      </div>
      <div class="doc-card">
        <div class="doc-header"><v-icon name="link" class="doc-header-icon" scale="2"/>Usage</div>
        <div class="doc-body">
            There are 3 sheets for The FirstTerm, The SecondTerm and The ThirdTerm to aid the calculation to each term session.<br/><br/> Teachers are required to carefully input scores (C.A, exam, FirstTerm Total, etc...) 
        </div>
      </div>
      <div class="doc-card">
        <div class="doc-header"><v-icon name="link" class="doc-header-icon" scale="2"/>Lorem ipsum dolor sit amet consectetur</div>
        <div class="doc-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, fuga ullam blanditiis laudantium hic ipsam neque ab velit excepturi.
        </div>
      </div>
  </div>
</div>
<Footer />
</div>
</div>  
</template>

<style lang="scss" scoped>
.page-alignment{
    display: flex;
    flex-direction: column;
    min-height: 85.9vh;
    //justify-content: space-between;
}
.page-header{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom:30px;
    &-text{
      font-size: 30px;
      margin-left: 8px;
    }
}
.content-main{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
}
.content-inner{
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
    @media (max-width: 768px){
        margin: 0px 10px;
    }
}
.doc-card{
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.doc-header{
    font-size: 25px;
    font-weight: 550;
    margin-bottom: 20px;
    &-icon{
        margin-right: 5px;
    }
}
.doc-body{
    word-break: break-word;
    padding-bottom: 20px;
    border-bottom: 1px solid gray;
}
</style>