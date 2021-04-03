<template>
<div class="overflow-hidden container mt-5">
    <h1 class="display-1 mb-5"></h1>
    <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
            <div class="card">
            <b-button block type="submit" class='create-league-btn d-flex align-items-center justify-content-center' to='/createGame/'>
                Create Game
            </b-button>
            <div class="card-body">
                <h5 class="card-title">Create Game</h5>
                <p class="card-text">Create a New Game</p>
            </div>
            </div>
        </div>
    </div>
    <h1 class="display-3 mb-5">Your Games</h1>
    <div class="row row-cols-1 row-cols-md-3">
        <div v-for="item in this.games" :key="item.id" class="col mb-4">
            <div class="card">
            <div class="card-body">
                <h4 class="card-title">{{item.name}}</h4>
                <p class="card-text">{{item.description}}</p>
                <p>In Game : {{(item.sub_players).length}}</p>
                <p class="card-text text-center">Bet Amount : {{item.bet}}</p>
                <p class="card-text text-center">Seats left : {{item.capacity-(item.sub_players).length}}</p>
                <b-button block pill type="submit" class='login-btn' :to="`league-detail/${item.id}`">
                    <strong class="site-login-btn-text">Join Game</strong>
                </b-button>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Games",
  data() {
    return {
      games:[],
      id:this.$route.params.id,
    };
  },
  methods: {
    
  },
  beforeMount() {
        var getAPI = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        timeout: 3000,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
        });
        return new Promise((resolve, reject) => {
        getAPI
            .get(`http://127.0.0.1:8000/league/league-detail/${this.id}`)
            .then(response => {
            this.games = response.data;
            console.log(this.games)
            localStorage.setItem('league-number',this.id);
            resolve(true);
            })
            .catch(error => {
            reject(error);
            });
        });
    }

};
</script>

<style scoped>
.card:hover{
    cursor: pointer;
}
.create-league-btn{
    height: 200px;
}
.login-btn{
  background: rgba(0, 0, 0, 0.8);
  max-width: 150px;
  margin: auto;
}
</style>
