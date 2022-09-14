<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  // import HelloWorld from './HelloWorld.vue';  // auto import still seems to work, tho comp is undef.
   
  export default defineComponent({
    setup() {
      const count = ref(0)
      const increment = () => count.value++

      return { count, increment }
    },
    render() {
      return (
        <>
          <div>
            <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + JSX/TSX" />
          </div>

          <button onClick={this.increment}> { this.count }  </button>
        </>
      );
    },
  });
</script>
  
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
