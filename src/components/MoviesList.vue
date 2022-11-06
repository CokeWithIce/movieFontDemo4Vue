<template>
    <div class="movieList">
      <div>
        <router-link :to="电影地址" class="goods-list-link">
          电影名称。。。等
        </router-link>
      </div>
      <div>
        <router-link :to="电影地址" class="goods-list-link">
          电影名称。。。等
        </router-link>
      </div>
      <div>
        <router-link :to="电影地址" class="goods-list-link">
          电影名称。。。等
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MoviesList"
    }
</script>

<style scoped>
  .movieList{
    padding:5px;
    border-bottom:1px dashed #ababab;
  }
</style>
