<script>
import 'vue-awesome/icons/bars';
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/arrow-alt-circle-right';
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/file-alt';
import 'vue-awesome/icons/user-alt';

export default {
    name: "Header",
    data: () => ({
        sidebarState: false,
    }),
    methods: {
        toggleSidebar(){
            this.sidebarState = !this.sidebarState
        }
    }
}
</script>

<template>
<main>
    <div class="header-content">
        <div class="logo">
            T-<div class="logo-inner">Calc</div>
        </div>
        <div class="header-link-cover">
            <ul>
                <li>
                    <router-link to="/" class="header-link">Home</router-link>
                </li>
                <li>
                    <router-link to="/firstTerm" class="header-link">FirstTerm</router-link>
                </li>
                <li>
                    <router-link to="/secondTerm" class="header-link">SecondTerm</router-link>
                </li>
                <li>
                    <router-link to="#" class="header-link">ThirdTerm</router-link>
                </li>
            </ul>
            <div class="sidebar-open-button-cover">
                <v-icon name="bars" @click="toggleSidebar()" class="sidebar-open-button" scale="2" />
            </div>
        </div>
    </div>
     <!-- sidebar -->
    <div v-if="this.sidebarState">
        <div class="sidebar-background" @click="toggleSidebar()"></div>
        <div class="sidebar-nav">
            <div class="sidebar-close-button-cover"><v-icon name="times" class="close-button" scale='2.2' @click="toggleSidebar()"/></div>
            <ul>
                <li>
                    <router-link to="/" class="sidebar-button"><v-icon name="home" class="v-icon-li"/>Home</router-link>
                </li>
                <li>
                    <router-link to="/firstTerm" class="sidebar-button"><v-icon name="arrow-alt-circle-right" class="v-icon-li"/>FirstTerm</router-link>
                </li>
                <li>
                    <router-link to="/secondTerm" class="sidebar-button"><v-icon name="arrow-alt-circle-right" class="v-icon-li"/>SecondTerm</router-link>
                </li>
                <li>
                    <router-link to="#" class="sidebar-button"><v-icon name="arrow-alt-circle-right" class="v-icon-li"/>ThirdTerm</router-link>
                </li>
                <li>
                    <router-link to="/documentation" class="sidebar-button"><v-icon name="file-alt" class="v-icon-li"/>Documentation</router-link>
                </li>
                <li>
                    <router-link to="/contact" class="sidebar-button"><v-icon name="user-alt" class="v-icon-li"/>Contact</router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- end sidebar -->
</main>
</template>


<style lang="scss" scoped>
.header-content{
    display: flex;
    background-color: black;
    color: white;
    width: 100%;
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media(max-width: 768px){
        display: flex;
        padding-bottom: 12px;
        padding-top: 10px;
    }
}
.logo{
    font-size: 30px;
    padding: 10px 20px;
    display: flex;
    &-inner{
        font-size: 30px;
        color: #FF5733;
    }
}
.header-link-cover{
    display: flex;
    align-items: center;
    margin-right: 20px;
    @media(max-width: 768px){
        margin-right: 6px;
    }
}
.header-link-cover ul{
    display: flex;
    @media(max-width: 768px){
        display: none;
    }
}
.header-link{
    text-decoration: none;
    color: white;
    margin-left: 10px;
    &:hover{
        color: $main-color;
        border-bottom: 2px solid $main-color;
        padding-bottom: 3px;
    }
}
.header-link-cover a.router-link-exact-active {
  color: #FF5733;
}
.sidebar-background{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.1);
}
.sidebar-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: black;
    width: 200px;
    transition: 350ms;
}
.sidebar-open-button{
    margin-left: 10px;
    &-cover { & :hover{
        color: $main-color;
        }
    }
    @media(max-width: 768px){
        margin-right: 15px;
    }   
}
.sidebar-close-button-cover{
    display: flex;
    margin-left: 2rem;
    font-size: 2rem;
    height: 85px;
    margin-right: 1rem;
    height: 60px;
    justify-content: flex-end;
    align-items: center;
    color: white;
    .close-button { &:hover{
        color: $main-color; 
        }
    }
    @media(max-width: 768px){
        padding-top: 12px;
        padding-right: 10px;
    }
}
.sidebar-button{
    display: flex;
    height: 60px;
    padding: 20px;
    color: white;
    &:hover {
        background: #252831;
        border-left: 5px solid #FF5733;
        border-right: 5px solid  #FF5733;
        color: #FF5733;
        cursor: pointer;
    }
}
.sidebar-nav a.router-link-exact-active{
    color:  #FF5733;
}
.v-icon-li{
    margin-right: 10px;
}
</style>