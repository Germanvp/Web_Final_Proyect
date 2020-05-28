<template>
  <div>
    <h1>Welcome to untitled</h1>
    <div class="b-div-2">
          <v-btn x-large to="/login">Login</v-btn>
    </div>
    <div class="b-div" >
          <v-btn x-large to="/register">Register</v-btn>
    </div>
    <div>
    <h2>What is this thing?</h2>
    <p>Untitled is a service used by people to
        post what they are currently working and offer advice, help, or simply support other people. Users
        can see other users goals and comment on them.</p>
    <h2>Why?</h2>
    <p>This project will allow individuals/teams have an organized way
        of keeping track of what they want to achieve.</p>
  </div>
    <img class = "ola" src="@/assets/ola.png" />
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
  margin-top: 25px;
}

p {
  margin-bottom: 40px;
}

.b-div {
  padding: 10px;
  width: 100%;
  align-content: center;
}

.b-div {
  padding: 10px;
  width: 100%;
  align-content: center;
  margin-bottom: 70px;

}

.v-btn {
  width: 50%;
  padding: 15%;
}

.ola {
  height: 20%;
  width: 20%;
  margin-top: 50px;
  margin-right: -70%;
}

</style>
