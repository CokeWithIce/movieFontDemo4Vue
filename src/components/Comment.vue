<template>
  <div>
    <label>评论</label>
    <hr>
    <div>
      <li v-for="item in items">
        xxx评论xxx
      </li>
    </div>
    <div style="padding:5px;">
        <textarea v-model="context" style="width:80%; height:50px" placeholder="内容">

        </textarea>

    </div>
    <div style="padding-top:10px;">
      <button v-on:click="send_comment">评论</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Comment"
    }
</script>

<style scoped>

</style>
