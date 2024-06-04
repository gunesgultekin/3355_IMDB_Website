<template>
  <div
    style="
      background: linear-gradient(131deg, rgba(238, 238, 238, 1) 0%, rgba(255, 255, 255, 1) 100%);
      margin-top: 0px;
      margin-bottom: 20px;
    "
    id="#app"
  >
    <div class="row">
      <p style="margin-top: 10px; margin-bottom: 0px" class="title">{{ title }}</p>
    </div>
    <div id="info-row" class="row">
      <svg
        id="info-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-person-bounding-box"
        viewBox="0 0 16 16"
      >
        <path
          d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"
        />
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      </svg>
      <p class="info-text">{{ age_restriction }}</p>
      <svg
        id="info-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-calendar-week-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"
        />
      </svg>
      <p class="info-text">{{ year }}</p>
      <svg
        id="info-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
      </svg>
      <p class="info-text">{{ movie_length }} {{ $t("detail-min") }}</p>
      <button style="color: white" id="watchlist-btn" class="btn btn-success" @click="addToWatchlist">
        {{ $t("detail-watchlist") }}
      </button>

      <div id="rating-div" style="width: 100px; margin-right: 100px; margin-left: 100px">
        <p style="display: inline-block; font-size: 20px; font-weight: bold">{{ $t("detail-imdb-rating") }}</p>
        <div style="align-items: center" class="row">
          <svg
            style="color: rgb(230, 106, 11)"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <p style="margin-bottom: 0px; margin-left: 10px; font-size: 20px">
            <em style="font-size: 24px">{{ imdb_rating }}</em
            >/10
          </p>
        </div>
      </div>

      <div id="rating-div" style="width: 100px; margin-right: 100px; margin-left: 100px">
        <p style="display: inline-block; margin-bottom: 0px; font-size: 20px; margin-top: 20px; font-weight: bold">
          {{ $t("detail-your-rating") }}
        </p>
        <div style="align-items: center" class="row">
          <Button style="margin-top: 10px" @click="handleRating" class="btn btn-light">
            <div style="padding: 5px" class="row">
              <svg
                style="color: blue"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
                />
              </svg>
              <p style="color: blue; margin-left: 10px; font-size: 20px">RATE</p>
            </div>
          </Button>
        </div>
      </div>

      <div id="rating-div" style="width: 100px; margin-right: 100px; margin-left: 100px">
        <p style="display: inline-block; margin-top: 15px; font-size: 20px; font-weight: bold">
          {{ $t("detail-popularity") }}
        </p>
        <div style="align-items: center" class="row">
          <div class="row">
            <svg
              style="color: green"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              class="ipc-icon ipc-icon--popularity-up sc-5f7fb5b4-3 iRlEdG"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.6 0-5-1.3-6.4-3.3l2.8-3.4 1.3 1.5c.4.4 1 .4 1.3 0l2.9-3.2 1.3 1.4c.3.3.8.1.8-.3V8.5c0-.3-.2-.5-.5-.5h-4c-.4 0-.6.5-.3.8l1.3 1.4-2.2 2.5L9 11.3c-.4-.4-1-.4-1.3 0L4.6 15c-.4-.9-.6-1.9-.6-3 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"
              ></path>
            </svg>
            <p style="color: green; margin-left: 10px; font-size: 20px">{{ popularity }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="details-row" class="row">
      <div class="card">
        <img class="cover-img" :src="cover" alt="title" />
      </div>
      <iframe
        class="video-player"
        :src="clip"
        title="Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div id="mediaInfo" class="col" style="align-items: center; text-align: center; padding: 2px">
        <div style="margin-bottom: 150px; border-color: black; border-width: 10px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-camera-video"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
            />
          </svg>
          <p>{{ Math.ceil(popularity / 10) }} {{ $t("detail-videos") }}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-card-image"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path
              d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          <p>{{ Math.ceil(popularity / 5) }} {{ $t("detail-photos") }}</p>
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
      title: null,
      cover: null,
      description: null,
      category: null,
      director: null,
      imdb_rating: null,
      review_count: null,
      popularity: null,
      movie_length: null,
      year: null,
      age_restriction: null,
      clip: null,
      isRated: false,
    };
  },

  mounted: function () {
    this.getDetails();
  },

  methods: {
    async getDetails() {
      try {
        const response = await axios.get(
          "https://imdbapi.azurewebsites.net/api/MovieService/getMovie?title=" + this.$route.params.title
        );
        this.title = response.data.title;
        this.cover = response.data.cover;
        this.description = response.data.description;
        this.category = response.data.category.name;
        this.director = response.data.director.name + " " + response.data.director.surname;
        this.imdb_rating = response.data.imdb_rating;
        this.review_count = response.data.review_count;
        this.popularity = response.data.popularity;
        this.movie_length = response.data["length"];
        this.year = response.data.year;
        this.age_restriction = response.data.age_restriction;
        this.clip = response.data.clip;
      } catch (error) {
        router.push("/error");
      }
    },

    async addToWatchlist() {
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
              this.title
          );

          if (response.status == 200) {
            alert(this.title + " " + "added to your watchlist");
          }
        } catch (error) {
          this.error = "error";
          this.loading = false;
          //alert("Incorrect Credentials");
          console.log("as");
        }
      }
    },

    async checkIsRated() {},

    async handleRating() {
      if (localStorage.getItem("token") == "null" || localStorage.getItem("username") == null) {
        alert("Please login to rate");
      } else {
        try {
          const response = await axios.post("https://imdbapi.azurewebsites.net/api/MovieService/rate", {
            username: await localStorage.getItem("username"),
            title: this.title,
            rating: document.getElementById("ratePicker").value,
          });

          if (response.status == 404 || response.data == "Incorrect Credentials") {
            this.loading = false;
            alert("Incorrect Credentials");
          } else if (response.status == 500) {
            document.getElementById("yourRate").value = response.data;
          } else {
            document.getElementById("yourRate").value = response.status;
          }
        } catch (error) {
          this.error = "error";
          this.loading = false;
          //alert("Incorrect Credentials");
          console.log("as");
        }
      }
    },
  },
};
</script>

<style>
@media screen and (max-width: 1400px) {
  #rating-div {
    margin-left: 10px;
    width: 50px;
  }
}

@media screen and (max-width: 1270px) {
  .video-player {
    width: 600px;
  }

  #mediaInfo {
    display: none;
  }
}

@media screen and (max-width: 950px) {
  .video-player {
    display: none;
  }
  .cover-img {
    width: 100%;
    margin-left: 40%;
  }
}

@media screen and (max-width: 600px) {
  #info-row {
    margin-left: 0px;
  }
  .cover-img {
    width: 100%;
    margin-left: 10px;
  }

  #watchlist-btn {
    margin-left: 0px;
    margin-top: 20px;
  }

  #rating-div {
    display: none;
  }
}

#rating-div {
  transition: all 0.6s;
}

.cover-img {
  transition: all 0.5s;
}

.rating-div {
  margin-right: 20px;
}
#title-row {
  margin-left: 300px;
}
.rating-text {
  margin: 0px;
}
#star-rating {
  color: rgb(248, 175, 40);
}
#your-rating {
  color: rgb(20, 162, 233);
}
#info-row {
  margin-left: 30px;
  vertical-align: middle;
  align-items: center;
}

.info-text {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 20px;
}

.title {
  margin-left: 40px;
  font-size: 50px;
  font-weight: bold;
}

#info-icon {
  margin-top: 5px;
  margin-right: 5px;
}
.episode-guide {
  margin-left: 45px;
  font-size: 20px;
  font-weight: bold;
}

#details-row {
  text-align: center;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
}
.cover-img {
  height: 500px;
}

.video-player {
  width: 60%;
}

em {
  color: rgb(230, 106, 11);
  font-weight: bolder;
  font-size: 20px;
  font-style: normal;
}
</style>
