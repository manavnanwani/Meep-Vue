<template>
    <div class="overflow-hidden container">
        <b-container>
            <b-row alogn-v="center" align-h="center" class="mt-md-5">
            <b-col cols="11" md="5" class="create-league-main mt-md-5">
                <b-form @submit="onSubmit" class="text-white create-league-form">
                <h3 class="text-white text-center create-league">Create League</h3>
                <b-form-group
                    id="input-group-1"
                    label="League Name"
                    label-size="lg"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="name"
                    type="text"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-2"
                    label="League Pic"
                    label-size="lg"
                    label-for="input-1"
                >
                   <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    ></b-form-file>
                    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
                </b-form-group>
                <b-form-group
                    id="input-group-3"
                    label="League Description"
                    label-size="lg"
                    label-for="input-3"
                >
                    <b-form-input
                    id="input-3"
                    v-model="desc"
                    type="text"
                    required
                    ></b-form-input>
                </b-form-group>
                <br />
                <b-button block pill type="submit" class='login-btn'>
                    <strong class="create-league-btn-text">Create</strong>
                </b-button>
                </b-form>
            </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: "CreateLeague",
  data() {
    return {
      name: "",
      file1: null,
      desc: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store
        .dispatch("createLeague", {
          name: this.name,
          desc: this.desc,
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

.create-league-main {
  background-color: rgba(128, 179, 240, 0.40);
  border-radius: 10px;
}
.create-league-btn-text {
  font-size: 1.25rem;
}
.create-league {
  position: relative;
}
.create-league-form {
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
