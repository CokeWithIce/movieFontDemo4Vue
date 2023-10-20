<template>
  <div class="container">
    <div>
      <movie-index-header></movie-index-header>
    </div>
    <div class="userMessage">
      <user-message></user-message>
    </div>
    <label>收件箱</label>
    <div>
      <email-list v-for="item in receive_items" :title="item.title" :fromUser="item.fromUser" :context="item.context"></email-list>
    </div>
    <label>发件箱</label>
    <div>
      <email-list v-for="item in send_items" :titl="item.title" :fromUser="item.fromUser" :context="item.context"></email-list>
    </div>
    <send-talk-box></send-talk-box>
    <common-footer></common-footer>
  </div>
</template>
<script setup>
import UserMessage from "../components/UserMessage.vue";
import MovieIndexHeader from "../components/MovieIndexHeader.vue";
import CommonFooter from "../components/CommonFooter.vue";
import EmailList from "../components/EmailList.vue";
import SendTalkBox from "../components/SendTalkBox.vue";
import axios from "axios";
export default{
  name:'helloworld',
  data(){
    return{
      receive_items:[],
      send_items:[],
      detail:[]
    }
  },
  components:{
    MovieIndexHeader,
    CommonFooter,
    UserMessage,
    EmailList,
    SendTalkBox
  },
  created(){
    let userId=localStorage._id;
    let send_data={
      token:localStorage.token,
      user_id:userId,
      receive:0
    }
    let receive_data={
      token:localStorage.token,
      user_id:userId,
      receive:1
    }
    if(userId){
      axios.post('http://localhost:3000/users/showEmail',send_data).then((data)=>{
        if(data.body.status==1){
          alert(data.body.message);
        }else{
          this.send_items=data.body.data;
        }
        console.log(data.body.data);
      })
      axios.post('http://localhost:3000/users/showEmail',receive_data).then((data)=>{
        if(data.body.status==1){
          alert(data.body.message);
        }else{
          this.receive_items=data.body.data;
        }
        console.log(data.body.data);
      })
    }else{
      alert("用户信息错误");
    }
  }
}
</script>
<style>
.box{
  display:inline-flex;;
}
.container{
  width:100%;
  margin:0 auto;

}
.userMessage{
  padding-top:60px;
  margin-top:-10px;
  margin-left:-10px;
}
</style>
