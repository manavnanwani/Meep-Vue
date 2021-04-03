<template>
<div class="overflow-hidden container mt-5">
    
    <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
            <div class="card" to='/main'>
            <b-button block type="submit" class='create-league-btn d-flex align-items-center justify-content-center' to='/join'>
                Join League
            </b-button>
            <div class="card-body">
                <h4 class="card-title">Join League</h4>
                <p class="card-text">Join a league with code</p>
            </div>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card">
            <b-button block type="submit" class='create-league-btn d-flex align-items-center justify-content-center' to='/create'>
                Create League
            </b-button>
            <div class="card-body">
                <h4 class="card-title">Create League</h4>
                <p class="card-text">Create a New League</p>
            </div>
            </div>
        </div>
    </div>
    <h1 class="display-1 mb-5">Your Leagues</h1>
    <div class="row row-cols-1 row-cols-md-3">
        <div v-for="item in this.leagues" :key="item.id" class="col mb-4">
            <div class="card">
            <img src="https://picsum.photos/600/300/" class="card-img-top" alt="">
            <div class="card-body">
                <h4 class="card-title">{{item.name}}</h4>
                <p class="card-text">{{item.description}}</p>
                <b-button block pill type="submit" class='login-btn' :to="`league-detail/${item.id}`">
                    <strong class="site-login-btn-text">Open</strong>
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
  name: "Leagues",
  data() {
    return {
      leagues:[]
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
            .get("http://127.0.0.1:8000/league/league-list/")
            .then(response => {
            this.leagues = response.data;
            console.log(this.leagues)
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
.create-league-btn{
    height: 200px;
}
.login-btn{
  background: rgba(0, 0, 0, 0.8);
  max-width: 150px;
  margin: auto;
}
</style>
