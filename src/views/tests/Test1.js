import Vue from 'vue';

 const Test1 = Vue.extend({
   // name: Test1,
   data: () => ({
    vstate: 0
   }),
   methods: {
    increment(){
        this.vstate++
    }
   },
    render(){
        return(
            <div> 
            <div>{ this.vstate }</div> 
            <HelloWorld />
            <button onClick={this.increment}>Click</button>
            </div>
        )
    }
})



 export default Test1

//  const HelloWorld = () => <p>hello Test 1</p>



    


// import { defineComponent } from '@vue/composition-api';
// import TestC from './TestComp.js'

// const Test1 = defineComponent({
//     name: Test1,

//     render(){
//         return (
//             <div>
//             <HelloWorld />
//             <TestC />
//             </div>
//         )  
//     }
// })

// export default Test1