<script>

export default {
  name: "Home",
}
</script>

<template>
  <div class="background">
    <div class="logo">
      T-<span class="logo-inner">Calc</span>
    </div>
    <div class="content">
      <div class="title">Welcome</div>
      <div class="button-cover">
        <router-link to="/" class="button" style="padding: 12px 65px;">Home</router-link>
        <router-link to="/firstTerm" class="button b2">First Term</router-link>
        <router-link to="#" class="button">Second Term</router-link>
        <router-link to="#" class="button b2">Third Term</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background{
    background-color: #232531;
    color: white;
    width: 100%;
    height: 100vh;
}
.content{
    position: absolute;
    width: 200px;
    height: auto;
    top: 40%;
    left: 20%;
    @media (min-width: 768px){
      width: 400px;
    }
}
.logo{
    display: flex;
    font-size: 30px;
    padding: 20px;
}
.logo-inner{
    font-size: 30px;
    color: #FF5733;
}
.button{
    background-color: #3F4046;
    color: white;
    padding: 12px 30px;
    border: 2px solid;
    border-color: #3F4046;
    border-radius: 5px;
    text-transform: uppercase;
    margin-bottom: 10px;
    &:hover{
        background-color: #CC0839;
        border: 2px solid;
        border-color: #CC0839;
        color: white;
        cursor: pointer;
    }
    &:focus{
        outline: none;
        box-shadow: none;
    }
}
.button-cover{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 200px;
    @media (min-width: 768px){
      max-width: 400px;
    }
}
.title{
    font-size: 50px;
    color: #C80139;
}
.b2{
  @media (max-width: 768px){
      padding: 12px 40px !important;
  }
}
</style>

