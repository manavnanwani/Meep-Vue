<template>
  <div>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div>
                        <img src="../assets/landing.svg">
                    </div>
                    <div class="d-flex">
                      <b-button size="lg" to="/user/login" class="landing__btn mt-5">
                        <div class="login-btn">Login</div>
                      </b-button>
                      <b-button size="lg" to="/user/register" class="landing__btn mt-5">
                        <div class="login-btn">Register</div>
                      </b-button>
                    </div>
                    
                </div>

                <div class="col-md-6">
                    <p class="heading">meet and play</p>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
  }
};
</script>

<style scoped>
.landing__btn {
  max-width: 150px;
  background: #ffffff;
  color: black;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: 37px;
}
.btn-light {
  background: #ffffff;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 211px;
  height: 40px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.heading {
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  font-size: 130px;
  text-align: center;
}
</style>
