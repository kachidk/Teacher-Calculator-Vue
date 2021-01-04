<script>
import 'vue-awesome/icons/user-alt';
export default {
    
}
</script>

<template>
<div>
<Header />
<div class="page-header">
    <v-icon name="user-alt" scale="2"/>  
    <div class="page-header-text">Contact Me</div>
</div>
<div class="page-alignment">
    <div class="content-main">
        <div class="content-inner">
            
        </div>
    </div>
</div>
<Footer />
</div>
</template>

<style lang="scss" scoped>
.page-alignment{
    display: flex;
    flex-direction: column;
    min-height: 56.5vh;
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
</style>