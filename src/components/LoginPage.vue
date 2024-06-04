<template>
  <div id="app">
    <section
      class="h-100 gradient-form"
      style="
        background-color: #eee;
        background-image: url('https://i.pinimg.com/originals/3c/f6/56/3cf656908a2481110485bac3bf1297d9.jpg');
      "
    >
      <div class="container py-5 h-100" style="opacity: 97%">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <h2 class="mt-1 mb-5 pb-1">{{ $t("login-signin") }}</h2>
                    </div>

                    <form>
                      <p>{{ $t("login-desc") }}</p>
                      <div v-if="loading" class="text-center">
                        <div id="loading-spinner" class="spinner-border" role="status">
                          <span class="visually-hidden"></span>
                        </div>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="email"
                          id="credentialsForm"
                          class="form-control"
                          :placeholder="$t('login-username')"
                        />
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input type="password" id="passwordForm" class="form-control" />
                        <label class="form-label" for="form2Example22">{{ $t("login-password") }}</label>
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          @click="login"
                        >
                          {{ $t("login-btn") }}
                        </button>

                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          @click="googleLogin"
                        >
                          {{ $t("signin-google") }}
                        </button>

                        <a class="text-muted" href="#!">{{ $t("login-forgot") }}</a>
                      </div>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">{{ $t("login-register-desc") }}</p>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-dark">
                          {{ $t("login-register-btn") }}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          class="d-block w-100"
                          src="https://m.media-amazon.com/images/M/MV5BZTU3MTU5OGEtZDllMS00ZTBjLTk3ZGItZWUzMDMyM2Y4YTgzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src="https://m.media-amazon.com/images/M/MV5BMGFjYWUwZWUtNDg2Mi00NzBhLThkMzUtYmU1YzM1MmFmY2FhXkEyXkFqcGdeQXVyNjc1OTk4NjA@._V1_.jpg"
                          alt="Second slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src="https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
                          alt="Second slide"
                        />
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//import router from "@/router";

import { useAuth0 } from "@auth0/auth0-vue";
import router from "@/router";
import axios from "axios";
import { reactive, watch, onMounted } from "vue";

export default {
  setup() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();
    const userState = reactive({
      name: null,
    });

    const googleLogin = async () => {
      await loginWithRedirect();
    };

    onMounted(() => {
      watch(
        () => user.value,
        (newUser) => {
          if (isAuthenticated.value && newUser) {
            userState.name = newUser.name;
            localStorage.setItem("username", newUser.name);
          }
        },
        { immediate: true } // Trigger immediately if the user is already logged in
      );
    });

    return {
      googleLogin,
      userState,
    };
  },

  data() {
    return {
      loading: false,
      token: null,
    };
  },

  methods: {
    async login() {
      var credential = document.getElementById("credentialsForm").value;
      var password = document.getElementById("passwordForm").value;
      if (credential == null || credential == "" || password == null || password == "") {
        alert("provide credentials");
      } else {
        try {
          this.loading = true;
          const response = await axios.post("https://imdbapi.azurewebsites.net/api/UserService/login", {
            credential: credential,
            password: password,
          });
          this.loading = false;
          if (response.status == 404 || response.data == "Incorrect Credentials") {
            this.loading = false;
            alert("Incorrect Credentials");
          } else if (response.status == 500) {
            router.push("/error");
          } else {
            await localStorage.setItem("token", response.data);
            await localStorage.setItem("username", credential);
            window.location.reload();
          }
        } catch (error) {
          this.error = "error";
          this.loading = false;
          alert("Incorrect Credentials");
        }
      }
    },
  },
};
</script>

<style>
#loading-spinner {
  width: 45px;
  height: 45px;
  margin: 10px;
}
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #717170;
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>
