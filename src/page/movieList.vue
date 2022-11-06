<template>
  <div class="container">
    <div>
      <movie-index-header></movie-index-header>
    </div>
    <div class="contentMain">
      <div>
        <div class="contentLeft">
          <ul class="cont-ul">
            <movies-list>

            </movies-list>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
    import MoviesList from "../components/MoviesList";
    import MovieIndexHeader from "../components/MovieIndexHeader";
    import CommonFooter from "../components/CommonFooter";
    export default {
        name: "moveList",
      components: {CommonFooter, MoviesList,MovieIndexHeader}
    }
</script>

<style scoped>
  .container{
    width:100%;
    margin:0 auto;
  }
  .contentMain{
    padding-top:150px;
  }
  .contentText{
    font-size:15px;
    padding-top:20px;
  }

</style>
