<template lang="html">
  <div class="message">
    <div>
      {{title}}
    </div>
    <div>
      {{fromUser}}
    </div>
    <div>
      {{context}}
    </div>
  </div>
</template>
<script>
export default{
  props:["title","fromUser","context"],

}
</script>
<style>
.message{
  border:1px solid;
}
</style>
