<template>

</template>

<script>
  import api from 'api/test/'
  export default {
    created(){
      api.test().then((res)=>{
        console.log(res)
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
