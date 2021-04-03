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
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sign Up</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/user/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar{
  padding: 0 100px;
}
.navbar-nav .nav-item {
  padding-left: 5rem;
}

.nav-link {
  font-size: 17px;
  line-height: 36px;
  color: black !important;
}
</style>