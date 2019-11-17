<template>
  <div class="hello">
    <h1>state---------------------------------------------------</h1>
    <h1>我是从页面上直接获取的:{{ this.$store.state.count }}</h1>
    <h1>mapState------------------------------------------------</h1>
    <h1>我是从mapState获取的:{{ count }}</h1>
    <h1>我是从mapState获取的:{{ count1 }}</h1>
    <br />
    <br />
    <h1>getters-------------------------------------------------</h1>
    <h1>我是从Getter获取的计算后的值:{{ this.$store.getters.getStateCount }}</h1>
    <h1>mapGetters----------------------------------------------</h1>
    <h1>我是从mapGetters获取的计算后的值:{{ getStateCountNew }}</h1>
    <br />
    <br />
    <h1>mapMutations--------------------------------------------</h1>
    <button @click="newAdd">+</button>
    <br />
    <br />
    <h1>actions-------------------------------------------------</h1>
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>
    <br />
    <br />
    <h1>mapActions----------------------------------------------</h1>
    <button @click="newAdd2">+</button>
  </div>
</template>

<script>
/* eslint-disable */
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // this.$store.dispatch('addViews') // 直接通过store的方法 触发action, 改变 views 的值
    this.newAdd2() // 通过mapActions 触发mutation 从而commit ，改变state的值
  },
  computed:{
    ...mapState({
      count:state=>state.count,
      count1:'count'
    }),
    ...mapGetters({
      getStateCountNew:'getStateCount'
    })
  },
  methods: {
    addFun() {
      // this.$store.commit('add')
      this.$store.dispatch('addFun')
    },
    reductionFun() {
      const n = 10;
      // this.$store.commit('reduction')
      this.$store.dispatch('reductionFun', n)
    },
    ...mapMutations({
      newAdd:'add'
    }),
    ...mapActions({
      newAdd2:'addFun'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
