<template>
  <div>
    Register
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
</style>
