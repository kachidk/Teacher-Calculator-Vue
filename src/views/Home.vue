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
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/documentation" class="button">Documentation</router-link>
        <router-link to="/firstTerm" class="button">First Term</router-link>
        <router-link to="/secondTerm" class="button">Second Term</router-link>
        <router-link to="#" class="button">Third Term</router-link>
        <router-link to="/contact" class="button">Contact</router-link>
        <router-link to="/testHome" class="button">Test Home</router-link>
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
    display: flex;
    width: 190px;
    height: 50px;
    align-items: center;
    justify-content: center;
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
</style>

