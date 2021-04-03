<template>
  <b-container>
    <b-row alogn-v="center" align-h="center" class="mt-md-5">
      <b-col cols="11" md="5" class="site-login-main mt-md-5">
        <b-form @submit="onSubmit" class="text-white site-login-form">
          <h3 class="text-white text-center site-login">Login</h3>
          <b-form-group
            id="input-group-1"
            label="Username"
            label-size="lg"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="username"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="Password:" label-size="lg" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="password"
              type="password"
              autocomplete="new-password"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button block pill type="submit" class='login-btn'>
            <strong class="site-login-btn-text">Login</strong>
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Main" });
        })
        .catch(err => {
          alert(err);
        });
    },
  }
};
</script>

<style scoped>
.site-login-main {
  background-color: rgba(128, 179, 240, 0.40);
  border-radius: 10px;
}
.site-login-logo {
  position: relative;
  top: -60px;
  width: 25%;
  left: 37.5%;
  background-color: #06192d;
  border-radius: 60%;
}
.site-login-btn-text {
  font-size: 1.25rem;
}
.site-login {
  position: relative;
}
.site-login-form {
  position: relative;
  width: 100%;
  left: 0%;
  padding: 30px 0;
}
.site-login-fp {
  cursor: pointer;
  position: relative;
  top: -93px;
  font-size: 1.15rem;
  font-weight: 700;
}
body {
  color: white;
}
input,
input:focus {
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 15px;
  height: 2.75rem;
}
.login-btn{
  background: black;
}
.form-group,
label {
  margin-bottom: 0.2rem;
}
</style>