<template>
   <div class="container">
     <div>
       <movie-index-header></movie-index-header>
     </div>
     <div class="contentMain">
       <div class="">
         <h1>{{detail.movieName}}</h1>
         <div class="viewNum">下载次数:{{detail.movieNumDownload}}</div>
       </div>
       <div class="">
         <button @:click=movieDownload()>点击下载</button>
       </div>
       <div>
         <img class="headerImg" :src="detail.movieImg">
       </div>
       <div class="btnPosition" @click="support()">
         <div class="SupportBtn">点赞<div>{{detail.movieNumSuppose}}</div></div>
       </div>
     </div>
     <div>
       <comment v-bind:movie_id="movie_id"></comment>
     </div>
     <div>
       <common-footer></common-footer>
     </div>
   </div>
</template>

<script>
    import CommonFooter from "../components/CommonFooter";
    import MovieIndexHeader from "../components/MovieIndexHeader";
    import Comment from "../components/Comment";
    import axios from "axios";
    let movie_id=0;
    export default {
        name: "movieDetail",
      components: {CommonFooter,MovieIndexHeader,Comment},
      data(){
          return {
            detail:[],
          }
      },
      created() {
          this.movie_id=this.$route.query.id;
          movie_id=this.$route.query.id;
          axios.post("http://localhost:3000/movie/detail",{id:movie_id}).then((data)=>{
            this.detail=data.body.data;
          })
      },
      methods:{
          support:function(event){
            axios.post("http://localhost:3000/movie/support",{id:movie_id}).then((deta1)=>{
              let data_temp=data1.body;
              let that=this;
              console.log(data_temp);
              if(data_temp.status===0){
                axios.post("http://localhost:3000/movie/showNumber",{id:movie_id}).then((data2)=>{
                  this.detail["movieNumSuppose"]=data2.body.data.movieNumSuppose
                });
              }else{
                alert(data_temp.message);
              }
            })
          },
        movieDownload:function (event){
          axios.post("http://localhost:3000/movie/download",{movie_id:movie_id}).then((data)=>{
            if(data.status=1){
                alert(data.message)
            }else{
                window.location=data.data;
              }
          });
        }
      }
    }
</script>

<style scoped>
  .headerImg{
    height:20px;
  }
  .container{
    width:100%;
    margin:0 auto;
  }
  .contentMain{
    padding-top:150px;
  }
  .btnPosition{
    padding-left:48%;
  }
  .SupportBtn{
    border:1px solid #000;
    width:60px;
  }
  .viewNum{
    font-size:10px;
  }
</style>
