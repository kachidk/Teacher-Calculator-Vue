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
    height: 50px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}
.logo{
    font-size: 30px;
    padding: 20px;
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
}
.header-link{
    text-decoration: none;
    color: white;
    &:hover{
        color: palevioletred;
    }
}

</style>