<template>
  <HeaderComp :key="headerKey"></HeaderComp>
  <router-view :key="$route.path"> </router-view>
</template>

<script>
import HeaderComp from "@/components/HeaderComp";
//import DashboardComp from "./components/DashboardComp.vue";

export default {
  components: {
    HeaderComp: HeaderComp,
    //DashboardComp: DashboardComp,
  },
};
</script>

<style></style>
