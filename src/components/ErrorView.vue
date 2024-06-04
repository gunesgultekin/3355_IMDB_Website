<template>
  <div class="text-center" id="app">
    <svg
      id="bug-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-exclamation-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
    </svg>
    <h2>Server Error</h2>
    <h6>Please try again</h6>
    <RouterLink to="/">Retry</RouterLink>
  </div>
</template>

<style>
#app {
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
#bug-icon {
  margin-top: 15%;
  width: 100px;
  height: 100px;
}
</style>
