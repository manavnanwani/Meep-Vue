<template>
  <div>
    <b-container>
    <b-row alogn-v="center" align-h="center" class="mt-md-5">
      <b-col cols="11" md="5" class="site-reg-main mt-md-5">
        <b-form @submit="onSubmit" class="text-white site-reg-form">
          <h3 class="text-white text-center site-reg">Sign Up</h3>
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
          <b-form-group
            id="input-group-2"
            label="Email ID"
            label-size="lg"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
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
          <b-button block pill type="submit" class='reg-btn'>
            <strong class="site-reg-btn-text">Register</strong>
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store
        .dispatch("userRegister", {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(err => {
          alert(err);
        });
    },
  }
};
</script>

<style scoped>
.site-reg-main {
  background-color: rgba(128, 179, 240, 0.40);
  border-radius: 10px;
}
.site-reg-logo {
  position: relative;
  top: -60px;
  width: 25%;
  left: 37.5%;
  background-color: #06192d;
  border-radius: 60%;
}
.site-reg-btn-text {
  font-size: 1.25rem;
}
.site-reg {
  position: relative;
}
.site-reg-form {
  position: relative;
  width: 100%;
  left: 0%;
  padding: 30px 0;
}
.site-reg-fp {
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
  background: #7a00da;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  height: 2.75rem;
}
.reg-btn{
  background: black;
}
.form-group,
label {
  margin-bottom: 0.2rem;
}
</style>
