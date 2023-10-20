<template>
  <div>
    <div>
      <input v-model="toUserName" placeholder="发送用户名称"/>
    </div>
    <div>
      <input v-model="title" placeholder="发送标题"/>
    </div>
    <div style="padding:5px">
      <textarea v-model="context" style="width:80%; height:50px;" placeholder="内容"></textarea>
    </div>
    <div style="padding-top:10px;">
      <button @click="send_mail()">发送站内短信</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default{
  props:[],
  data(){
    return{
      toUserName:'',
      context:'',
      title:''
    }
  },
  methods:{
    send_mail(){
      let send_data={
        token:localStorage.token,
        user_id:localStorage._id,
        toUserName:this.toUserName,
        title:this.title,
        context:this.context
      }
      axios.post('http://localhost:3000/users/sendEmail',send_data).then((data)=>{
        if(data.body.status==1){
          alert(data.body.message);
        }else{
          alert("发送成功")
        }
      })
    }
  }
}
</script>
