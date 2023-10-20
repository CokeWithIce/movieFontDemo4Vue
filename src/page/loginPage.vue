<template>
    <div>
      <div>
        <div>
          <div class="box">
            <label>输入用户名:</label>
            <input v-model="username" placeholder="用户名">
          </div>
          <div class="box">
            <label>密码：</label>
            <input v-model="password" placeholder="密码" type="password">
          </div>
          <div class="box">
            <button @click="userLogin()">登录</button>
            <button @click="userRegister()" style="margin-left:10px;">注册</button>
            <button @click="findBackPassword()" style="margin-left:10px;">忘记密码</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "loginPage",
      data(){
          return {
            username:"",
            password:""
          }
      },
      methods:{
          userLogin:function(){
            axios.post("http://localhost:3000/users/login",{username:this.username,password:this.password}).then((data)=>{
              if(data.body.status==1){
                alert(data.body.message);
              }else{
                let save_token={
                  token:data.body.data.token,
                  username:this.username
                }
                localStorage.setItem("token",data.body.data.token);
                localStorage.setItem("username",data.body.data.user[0].username);
                localStorage.setItem("id",data.body.data.user[0]._id);
                this.$router.go(-1);
              }
            })
          },
        userRegister:function(){
            this.$router.push({path:'register'});
        },
        findBackPassword:function(){
            this.$router.push({path:'findPassword'})
        }
      }
    }
</script>

<style scoped>
.box{
  display:flex;
  justify-content: center;
  align-items:center;
  padding-top:10px;
}
</style>
