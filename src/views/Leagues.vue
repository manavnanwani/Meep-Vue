<template>
  <div>
    Leagues
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Leagues",
  methods: {
  beforeMount() {
    var getAPI = axios.create({
      baseURL: "https://mfcrecruitment.herokuapp.com/",
      timeout: 3000,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      }
    });
    this.$store.dispatch("getTechnical").catch(err => {
      console.log(err);
    });
    return new Promise((resolve, reject) => {
      getAPI
        .get("https://mfcrecruitment.herokuapp.com/api/technicalquestions/")
        .then(response => {
          this.questions = response.data;
          resolve(true);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  }
};
</script>

<style scoped>

</style>
