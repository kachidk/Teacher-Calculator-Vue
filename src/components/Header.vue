<script>

export default {
    name: "Header",
}
</script>

<template>
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
        </div>
    </div>
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
        flex-direction: column;
        padding-bottom: 15px;
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
    margin-right: 50px;
    @media(max-width: 768px){
        margin-right: 6px;
    }
}
.header-link-cover ul{
    display: flex;
}
.header-link{
    text-decoration: none;
    color: white;
    margin-left: 10px;
    &:hover{
        color: palevioletred;
    }
}

</style>