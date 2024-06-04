<template>
  <p>WAITING..</p>
</template>

<script>
import auth from "../auth";

export default {
  async mounted() {
    await auth.handleRedirectCallback();
    this.$router.push("/details/Inception");
  },
};
</script>
