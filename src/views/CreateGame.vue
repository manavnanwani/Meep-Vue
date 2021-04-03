<template>
    <div class="overflow-hidden container">
        <b-container>
            <b-row alogn-v="center" align-h="center" class="mt-md-5">
            <b-col cols="11" md="5" class="create-league-main mt-md-5">
                <b-form @submit="onSubmit" class="text-white create-league-form">
                <h3 class="text-white text-center create-league">Create Game</h3>
                <b-form-group
                    id="input-group-1"
                    label="Game Name"
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
                    label="Game Capacity"
                    label-size="lg"
                    label-for="input-2"
                >
                    <b-form-input
                    id="input-2"
                    v-model="cap"
                    type="number"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-4"
                    label="Game Bet Amount"
                    label-size="lg"
                    label-for="input-4"
                >
                    <b-form-input
                    id="input-4"
                    v-model="bet"
                    type="number"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-3"
                    label="Game Description"
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
import axios from "axios";
export default {
  name: "CreateGame",
  data() {
    return {
      name: "",
      cap:0,
      bet:"",
      desc: "",
      id:localStorage.getItem('league-number'),
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    //   this.$store
    //     .dispatch("createGame", {
    //       name: this.name,
    //       cap: this.cap,
    //       bet: this.bet,
    //       desc: this.desc,
    //     })
    //     .then(() => {
    //       this.$router.push({ name: "Games" });
    //     })
    //     .catch(err => {
    //       alert(err);
    //     });
    var getAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    timeout: 3000,
    headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
    }
    });
    return new Promise((resolve, reject) => {
        getAPI.post(`http://127.0.0.1:8000/league/league-detail/${this.id}/game-create/`, {
            name: this.name,
            capacity: this.cap,
            bet: this.bet,
            description: this.desc,
        })
            // eslint-disable-next-line
            .then(({ data, status }) => {
                if (status === 201) {
                    resolve(true);
                }
            })
            .catch(error => {
                if (error.response.status === 400) {
                    reject(
                        new Error(
                            'Error while creating Game'
                        ),
                        null
                    );
                } else reject(error.response.data.message);
            });
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
