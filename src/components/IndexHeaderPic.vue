<template>
    <div class="headerPic">
      <div>
        <p class="imgTitle">{{recommendTitle}}</p>
        <a href="baidu.com">
          <img src="图片地址" class="headerImg"/>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexHeaderPic"
    }
</script>

<style scoped>
  .headerPic{
    height:30px;
    width:100%;
    background-color:antiquewhite;
  }
  .headerImg{
    height:300px;
    width:100%
  }
  .imgTitle{
    z-index: 2;
    padding-left:45%;
    paading-top:230px;
    position:absolute;
    color:#fff;
    font-size:20px;
  }
</style>
