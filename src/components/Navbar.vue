<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#"> <img src="../assets/logo.svg" alt="logo"> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mr-auto"></div>
            <ul class="navbar-nav">
                
                <li class="nav-item">
                    <b-button class="b-btn" to='/'><a class="nav-link">Home</a></b-button>
                </li>
                <li class="nav-item">
                    <b-button class="b-btn" to='/user/register'><a class="nav-link">Sign Up</a></b-button>
                </li>
                <li class="nav-item">
                    <b-button class="b-btn" to='/user/login'><a class="nav-link">Login</a></b-button>
                </li>
                <li class="nav-item">
                    <b-button class="b-btn" to='/about'><a class="nav-link">About</a></b-button>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<style scoped>

.navbar-nav .nav-item {
  padding-left: 5rem;
}

.nav-link {
  font-size: 17px;
  line-height: 36px;
  color: black !important;
}
.b-btn{
  background: transparent !important;
  outline: none !important;
  border: none !important;
}
.b-btn:hover{
  background: transparent;
}
</style>