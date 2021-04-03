<template>
  <div>
      <section>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="landing__btn pt-5">
                        <div class="heading pb-5 mb-5">
                            Welcome
                        </div>
                        <b-button block pill type="submit" class='league-btn'>
                          <strong>Find Players</strong>
                        </b-button>
                        <b-button block pill type="submit" class='league-btn' to='/leagues'>
                          <strong>Your Leagues</strong>
                        </b-button>
                    </div>
                  </div>
                  <div class="col-md-6 text-center">
                    <p class="heading__img"><img class="heading__img mt-5" src="../assets/home.svg"></p>
                  </div>
                
            </div>
        </div>

    </section>
  </div>
</template>

<script>
export default {
    name: "Home",
  };
</script>

<style scoped>
.heading {
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heading__img {
  display: grid;
  place-items: center;
}
.league-btn{
  background: white;
  color: black;
  padding: 10px;
  max-width: 200px;
  margin: auto;
  margin-bottom: 30px;
}
</style>