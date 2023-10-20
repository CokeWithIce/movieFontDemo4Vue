<template>
    <div v-if=!isLogin class="header">
      <router-link to="/loginPage">
        <div class="header_menu">登录</div>
      </router-link>
    </div>
  <div v-else class="header">
    <router-link to="{path:'/userInfo',query:{id:id}}">
      <div class="header_menu">已登录:{{username}}</div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "UserMessage",
      data(){
          return {
            isLogin:false,
            username:""
          }
      },created() {
          let token=localStorage.getItem("token");
          if(token){
            this.isLogin=true;
            this.username=localStorage.getItem("username");
            this.id=localStorage.getItem("id");
          }else{
            console.log("用户登录失败");
          }
      }
    }
</script>

<style scoped>
  .header{
    width:103%;
    height:30px;
    left:0;
    top:0;
    color:#000;
    background-color:#c3bd5c;
  }
  .header_menu{
    padding-right:60px;
    padding-top:10px;
    float:right;
    color:#fff;
    font-size:8px;
  }
</style>
