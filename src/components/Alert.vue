<script>
import styled from 'vue-styled-components';
import 'vue-awesome/icons/sync';

const AlertMain = styled.div`
    position: fixed;
    top: 30%;
    left: 10%
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    color: black;
    border-radius: 4px;
`;
export default {
    components: {
        AlertMain
    }
    
}
</script>

<template>
  <AlertMain>
      <slot name="alertSlotButtons"></slot>
      testing
      <v-icon name="sync" spin/>
  </AlertMain>
</template>

<style scoped>

</style>