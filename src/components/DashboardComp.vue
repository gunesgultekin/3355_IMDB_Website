<template>
  <div
    style="background: linear-gradient(131deg, rgba(238, 238, 238, 1) 0%, rgba(255, 255, 255, 1) 100%); margin-top: 0px"
    id="app"
  >
    <div>
      <ol v-if="isSearching" class="list-group list-group-numbered">
        <div v-if="moviesFound.length > 0">
          <div style="margin-left: 10px; font-weight: bold" class="fw-bold">
            <p class="searchListText">{{ $t("search-title") }}</p>
          </div>
          <li
            v-for="(movie, index) in moviesFound"
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-start"
            @click="getDetails(movie.title)"
          >
            <div class="row">
              <img id="searchListCover" :src="movie.cover" alt="" />
              <div id="searchCol" class="col">
                <p class="searchItemTitle">{{ movie.title }}</p>
                <div style="margin-left: 5px" class="row">
                  <svg
                    style="margin-top: 3px; margin-right: 3px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                    />
                  </svg>
                  <p style="margin-bottom: 0px; font-size: 15px">{{ movie.year }}</p>
                </div>
                <div style="margin-left: 5px" class="row">
                  <svg
                    style="margin-top: 3px; margin-right: 3px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-camera2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4" />
                    <path
                      d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0"
                    />
                  </svg>
                  <p>{{ movie.director.name + " " + movie.director.surname }}</p>
                </div>
                <p style="font-size: 12px">{{ movie.description }}</p>
              </div>
            </div>

            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
        </div>

        <div v-if="actorsFound.length > 0">
          <div style="margin-left: 10px; font-weight: bold" class="fw-bold">
            <p class="searchListText">{{ $t("search-actors") }}</p>
          </div>
          <li
            v-for="(people, index) in actorsFound"
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="row">
              <img id="searchListCover" :src="people.photo" alt="-" />
              <div id="searchCol" class="col">
                <p class="searchItemTitle">{{ people.name + " " + people.surname }}</p>
                <div style="margin-left: 5px" class="row">
                  <div style="margin-left: 5px" class="row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-body-text"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                    <p style="font-size: 12px">{{ people.knownAs }}</p>
                  </div>
                </div>
              </div>
            </div>

            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
        </div>

        <div v-if="directorsFound.length > 0">
          <div style="margin-left: 10px; font-weight: bold" class="fw-bold">
            <p class="searchListText">{{ $t("search-directors") }}</p>
          </div>
          <li
            v-for="(people, index) in directorsFound"
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="row">
              <img id="searchListCover" :src="people.photo" alt="-" />
              <div id="searchCol" class="col">
                <p class="searchItemTitle">{{ people.name + " " + people.surname }}</p>
                <div style="margin-left: 5px" class="row">
                  <div style="margin-left: 5px" class="row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-body-text"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                    <p style="font-size: 12px">{{ people.knownAs }}</p>
                  </div>
                </div>
              </div>
            </div>

            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
        </div>
      </ol>
    </div>

    <div class="gallery" style="margin-top: 0px; margin-bottom: 0px">
      <div class="header">
        <p style="margin-left: 15%; padding-top: 50px; font-size: 30px; color: " class="header-text">
          {{ $t("gallery-header") }}
        </p>
      </div>
      <!-- Carousel wrapper -->

      <div class="d-flex justify-content-center">
        <div v-if="loading" id="spinner" class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>

      <div
        id="carouselMulti"
        data-mdb-carousel-init
        class="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div class="d-flex justify-content-center mb-4"></div>
        <!-- Inner -->
        <div class="carousel-inner py-4">
          <div>
            <div class="container">
              <div class="row">
                <div class="col-lg-4" v-for="movie in movieData" :key="movie.id">
                  <div class="card">
                    <img
                      @click="getDetails(movie.title)"
                      id="cover-img"
                      :src="movie.cover"
                      class="card-img-top"
                      :alt="movie.title"
                    />
                    <div class="card-body">
                      <div class="row">
                        <button id="rating-icon" class="btn btn-light">&#9733;</button>
                        <p class="rating-tag">{{ movie.imdb_rating ?? "No Rating" }}</p>
                        <button id="your-rating-icon" class="btn btn-light">&#9734;</button>
                      </div>
                      <h2 class="card-title">{{ movie.title }}</h2>
                      <button
                        @click="addToWatchlist(movie.title)"
                        id="watchlist-btn"
                        type="button"
                        class="btn btn-dark"
                      >
                        + {{ $t("watchlist") }}
                      </button>
                    </div>
                    <button @click="openTrailer(movie.clip)" id="trailer-btn" type="button" class="btn btn-dark">
                      &#9658; {{ $t("trailer") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Inner -->
      </div>
      <!-- Carousel wrapper -->
    </div>
  </div>
</template>

<style>
#app {
}

#searchListCover:hover {
  cursor: pointer;
  opacity: 75%;
}

#searchList:active {
  opacity: 60%;
}

#searchCol {
  margin-left: 4px;
}

.searchItemTitle {
  font-weight: bold;
}

.searchItemDescription {
}

#searchListCover {
  height: 200px;
}
.searchListText {
  font-size: 25px;
}

#cover-img:hover {
  cursor: pointer;
  opacity: 75%;
}

#cover-img:active {
  opacity: 62.5%;
}

.card-title {
  font-size: 25px;
}
#rating-icon {
  color: rgb(201, 233, 18);
}

#your-rating-icon {
  color: rgb(24, 141, 237);
}
.rating-tag {
  text-align: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 0px;
}

.gallery {
  margin: 50px;
}

#watchlist-btn {
  color: rgb(24, 141, 237);
  padding-left: 60px;
  padding-right: 60px;
}

#trailer-btn {
  padding: 8px;
  margin: 10px;
}

p {
}
.header-text {
  font-weight: bold;
  font-size: 25px;
}

#spinner {
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 100px;
}

#cover-img {
}
</style>

<script>
import router from "@/router";
import axios from "axios";

//import { EventBus } from "@/event-bus";

export default {
  data() {
    return {
      movieData: null,
      loading: true,
      isLoggedIn: false,
      isSearching: false,
      searchKeys: [],
      searchType: "All",
      moviesFound: [],
      directorsFound: [],
      actorsFound: [],
    };
  },

  mounted: function () {
    this.fetchData();

    this.emitter.on("searchType", (searchType) => {
      this.searchType = searchType;
    });

    this.emitter.on("searchKeys", (searchKeys) => {
      if (searchKeys.length >= 3) {
        this.isSearching = true;
        this.searchKeys = searchKeys;
        if (this.searchType == "All" || this.searchType == "Tüm") {
          this.genericSearch(searchKeys);
        }

        if (this.searchType == "Titles" || this.searchType == "Başlıklar") {
          this.TitleSearch(searchKeys);
        }

        if (this.searchType == "Actors" || this.searchType == "Aktörler") {
          this.actorsSearch(searchKeys);
        }

        if (this.searchType == "Directors" || this.searchType == "Yönetmenler") {
          this.directorsSearch(searchKeys);
        }
      }
      if (searchKeys.length === 0) {
        this.isSearching = false;
      }
    });
  },

  beforeUnmount() {
    this.emitter.off("searchKeys");
    this.emitter.off("searchType");
  },

  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://imdbapi.azurewebsites.net/api/MovieService/topTen");
        this.movieData = response.data;
        this.loading = false;
      } catch (error) {
        router.push("/error");
      } finally {
        this.loading = false;
      }
    },

    async addToWatchlist(currentTitle) {
      if (localStorage.getItem("token") == "null" || localStorage.getItem("username") == null) {
        alert("Please login to add wathlist");
      } else {
        try {
          const response = await axios.get(
            "https://imdbapi.azurewebsites.net/api/UserService/addToWatchlist?" +
              "username=" +
              localStorage.getItem("username") +
              "&" +
              "title=" +
              currentTitle
          );

          if (response.status == 404 || response.data == "Incorrect Credentials") {
            this.loading = false;
            alert("Incorrect Credentials");
          } else if (response.status == 500) {
            document.getElementById("yourRate").value = response.data;
          } else {
            alert(currentTitle + " added to your watchlist");
          }
        } catch (error) {
          this.error = "error";
          this.loading = false;
          //alert("Incorrect Credentials");
          console.log("as");
        }
      }
    },

    async genericSearch(keyword) {
      try {
        var splitted = keyword.join("");
        const response = await axios.get(
          "https://imdbapi.azurewebsites.net/api/Search/genericSearch?keyword=" + splitted
        );
        this.moviesFound = response.data.item1;
        this.directorsFound = response.data.item2;
        this.actorsFound = response.data.item3;
        console.log(this.moviesFound, this.directorsFound);
      } catch (error) {
        router.push("/error");
      }
    },

    async TitleSearch(keyword) {
      try {
        var splitted = keyword.join("");
        const response = await axios.get(
          "https://imdbapi.azurewebsites.net/api/Search/titleSearch?keyword=" + splitted
        );
        this.moviesFound = response.data;
        this.actorsFound = [];
        this.directorsFound = [];
      } catch (error) {
        router.push("/error");
      }
    },

    async actorsSearch(keyword) {
      try {
        var splitted = keyword.join("");
        const response = await axios.get(
          "https://imdbapi.azurewebsites.net/api/Search/actorSearch?keyword=" + splitted
        );
        this.actorsFound = response.data;
        this.moviesFound = [];

        this.directorsFound = [];
      } catch (error) {
        router.push("/error");
      }
    },

    async directorsSearch(keyword) {
      try {
        var splitted = keyword.join("");
        const response = await axios.get(
          "https://imdbapi.azurewebsites.net/api/Search/directorSearch?keyword=" + splitted
        );
        this.directorsFound = response.data;
        this.actorsFound = [];
        this.moviesFound = [];
      } catch (error) {
        router.push("/error");
      }
    },

    async getDetails(title) {
      router.push({ name: "details", params: { title: title } });
    },

    openTrailer(trailer_url) {
      window.open(trailer_url, "_blank");
    },
  },
};
</script>
