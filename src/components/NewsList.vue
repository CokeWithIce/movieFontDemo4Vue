<template>
    <li class="goods-list">
      <div class="newsList">
        <router-link :to="新闻标签" class="goods-list-link">
          文章标题，时间等等
        </router-link>
      </div>
    </li>
</template>

<script>
    export default {
        name: "NewsList"
    }
</script>

<style scoped>
.newsList{
  padding:5px;
  font-size:10px;
  border-bottom:1px dashed #ababab;
}
</style>
