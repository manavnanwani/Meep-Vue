<template>
    <b-container>
    <b-row alogn-v="center" align-h="center" class="mt-md-5">
      <b-col cols="11" md="5" class="join-league-main mt-md-5">
        <b-form @submit="onSubmit" class="text-white join-league-form">
          <h3 class="text-white text-center join-league">Join League</h3>
          <b-form-group
            id="input-group-1"
            label="League Code"
            label-size="lg"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="code"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button block pill type="submit" class='login-btn' >
            <strong class="join-league-btn-text">Join</strong>
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "JoinLeague",
  data() {
    return {
      code: "",
    };
  },
  methods: {
    onSubmit(event) {
        console.log(this.code)
      event.preventDefault();
      this.$store
        .dispatch("joinLeague", {
          code: this.code,
        })
        .then(() => {
          this.$router.push({ name: "Leagues" });
        })
        .catch(err => {
          alert(err);
        });
    },
  }
};
</script>

<style scoped>
.join-league-main {
  background-color: rgba(128, 179, 240, 0.40);
  border-radius: 10px;
}
.join-league-btn-text {
  font-size: 1.25rem;
}
.join-league {
  position: relative;
}
.join-league-form {
  position: relative;
  width: 100%;
  left: 0%;
  padding: 30px 0;
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
