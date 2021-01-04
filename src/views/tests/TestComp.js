import Vue from 'vue';

/*  export */  const TestC = Vue.extend({
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
            <div> from test Comp: { this.vstate }</div> 
            <button onClick={this.increment}>Click</button>
            </div>
        )
    }
})

  export default TestC


  