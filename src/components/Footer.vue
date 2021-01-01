<script>

export default {
  
}
</script>

<template>
  <div class="footer-content">
      <div class="info-cover">
          <div class="info">©2020 Interstellar</div>
          <a class="info" href="mailto:nwangumav@gmail.com">Contact</a>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-content{
    display: flex;
    //position: relative;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: black;
    color: white;
    margin-top: 80px;
    align-items: center;
    justify-content: center;
    @media (min-width: 1440px ){   //we should still resolve this
       // position: fixed;
    }
}
.info-cover{
    display: flex;
}
.info{
    font-size: 12px;
    margin-left: 10px;
}
</style>