<template>
  <div
    style="
      background: radial-gradient(circle, rgba(0, 0, 0, 0) 35%, rgba(159, 159, 159, 1) 100%);
      margin-top: 0px;
      margin-bottom: 0px;
      height: 1000px;
    "
    id="app"
  >
    <div
      class="col"
      v-if="movieData.length == 0"
      style="display: flex; justify-content: center; align-items: center; height: 100vh"
    >
      <div class="row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="47"
          fill="currentColor"
          class="bi bi-emoji-frown"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path
            d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"
          />
        </svg>
        <p style="font-size: 25px; margin-bottom: 0px; margin-left: 10px">
          You dont have any content in your watchlist
        </p>
      </div>
    </div>

    <div
      v-if="isLoading"
      style="display: flex; justify-content: center; align-items: center; height: 100vh"
      class="d-flex justify-content-center"
    >
      <div class="spinner-border" role="status"></div>
    </div>

    <div style="margin-top: 0px" v-if="!movieData.length == 0" class="container">
      <div style="padding-top: 50px; opacity: 90%" class="text-center mb-5">
        <svg
          style="background-color: white"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-film"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"
          />
        </svg>

        <h3 style="opacity: 95%; margin: 20px">My Movies</h3>
      </div>
      <div v-for="(movie, index) in movieData" :key="index" class="card mb-3">
        <div class="card-body">
          <div class="d-flex flex-column flex-lg-row">
            <img style="height: 250px; object-fit: cover" :src="movie.cover" :alt="movie.title" />
            <div class="row flex-fill">
              <div style="margin-left: 20px" class="col-sm-5">
                <h4 class="h5">{{ movie.title }}</h4>
                <span class="badge bg-secondary">{{ movie.category.name }}</span>
                <span class="badge bg-success">{{ movie.director.name + " " + movie.director.surname }}</span>
                <p>{{ movie.description }}</p>
              </div>

              <div class="col-sm-3 text-lg-end">
                <button class="btn btn-danger" @click="removeFromWatchlist(movie.title)">
                  <div style="text-align: center; padding: 1px" class="row-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-x-octagon"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"
                      />
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                    <p style="display: inline-block; margin-bottom: 0px; margin-left: 5px">Remove</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      movieData: [],
      isLoading: false,
    };
  },

  mounted: function () {
    this.myWatchList();
  },

  methods: {
    async myWatchList() {
      if (localStorage.getItem("token") == "null" || localStorage.getItem("username") == null) {
        alert("Please login to add wathlist");
      } else {
        try {
          this.isLoading = true;
          const response = await axios.get(
            "https://imdbapi.azurewebsites.net/api/UserService/myWatchlist?" +
              "username=" +
              localStorage.getItem("username")
          );

          this.movieData = response.data;
          this.isLoading = false;
        } catch (error) {
          this.error = "error";
          this.loading = false;

          console.log("error");
        }
      }
    },

    async removeFromWatchlist(currentTitle) {
      try {
        this.isLoading = true;
        const response = await axios.get(
          " https://imdbapi.azurewebsites.net/api/UserService/removeFromWatchlist?username=" +
            localStorage.getItem("username") +
            "&title=" +
            currentTitle
        );
        this.isLoading = false;
        if (response.status == "200") {
          alert(currentTitle + " is deleted from your watchlist");
          router.push("/dashboard");
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
