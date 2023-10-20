<template>
    <div class="container">
      <div>
        <movie-index-header></movie-index-header>
      </div>
      <div class="userMessage">
        <user-message></user-message>
      </div>
      <div class="contentPic">
        <index-header-pic v-for="item in headerItems":key="item._id":recommendImg="item.recommendImg":recommendSrc="item.recommendSrc":recommendTitle="item.recommendTitle"></index-header-pic>
      </div>
      <div class="contentMain">
        <div>
          <div class="contentLeft">
            <ul class="cont-ul">
              <movies-list v-for="item in movieItems" :key="item._id" :id="item._id" :movieName="item.movieName" :movieTime="item.movieTime"></movies-list>
            </ul>
          </div>
        </div>
        <div class="contentRight">
          <ul class="cont-ul">
            <news-list v-for="item in newsItems" :key="item._id" :id="item._id" :articleTitle="item.articleTitle" :articleTime="item.articleTime"></news-list>
          </ul>
        </div>
      </div>
      <common-footer></common-footer>
    </div>
</template>

<script>
    import IndexHeaderPic from "../components/IndexHeaderPic";
    import MoviesList from "../components/MoviesList";
    import NewsList from "../components/NewsList";
    import CommonFooter from "../components/CommonFooter";
    import MovieIndexHeader from "../components/MovieIndexHeader";
    import UserMessage from "../components/UserMessage";
    import axios from "axios";
    export default {
        name: "index",
      data(){
        return {
          headerItems:[],
          newsItems:[],
          movieItems:[]
        }
      },
      components: {CommonFooter, NewsList, MoviesList, IndexHeaderPic,MovieIndexHeader,UserMessage},
      created() {
        let ip="http://localhost:3000";
        axios.get(ip+"/showindex").then((data) => {
          this.headerItems=data.body.data;
          console.log(data.body.data);
        })
        axios.post(ip+"/showArticle", send_data).then((data) => {
          this.newsItems=data.body.data;
          console.log(data.body.data)
        })
        axios.get(ip+'/showRanking').then((data)=>{
          this.movieItems=data.body.data;
          console.log(data.body);
        })
      }
    }
</script>

<style scoped>

  .container{
    width:100%;
    margin:0 auto;
  }
  .contentMain{
    height:50px;

  }
  .userMessage{
    padding-top:60px;
    margin-top:-10px;
    margin-left:-10px;
  }
  .contentPic{
    padding-top:5px;
  }
  .contentLeft{
    width:60%;
    float:left;
    margin-top:5px;
    border-top:1px solid #000;
  }
  .contentRight{
    width:38%;
    margin-left:1%;
    float:left;
    margin-top:5px;
    border-top:1px solid #000;
  }
  .cont-ul{
    padding-top:.5rem;
    background-color:#fff;

  }
  .cont-ul::after{
    content:'';
    display:block;
    clear:both;
    width:0;
    height:0;
  }
</style>
