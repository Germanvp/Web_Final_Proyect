<template>
<div id="app" >
  <v-subtitle>{{userId}}</v-subtitle>
    <v-app-bar class="topnav" color = "#5A79A5" dense>
        <v-btn class="button1" text large to="/usermain/global">Global
          <v-icon  right>mdi-calendar-month</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="button1" text large to="/usermain/local">Local
            <v-icon right>mdi-animation-outline</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="button1" text large to="/usermain/teams">Teams
            <v-icon right>mdi-animation-outline</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="button1" text large to="/usermain/notifications">Notifications
            <v-icon  right>mdi-animation-outline</v-icon>
        </v-btn>
        <v-btn class="button2" @click="logoutUser" outlined>Logout</v-btn>
    </v-app-bar>
    <router-view></router-view>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data: () => ({
      dialog: false,
      description: "",
      img_src: "",
      userId: "My user id: " + localStorage.user_id
    }),
  methods: {
    async logoutUser (){
      this.$router.push("/")
      localStorage.clear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button1 {
  color: white;
}

.button2 {
  color: white;
}

h1 {
  color: white;
  margin-top: 25px;
}

.v-app-bar {
    height: auto;
 }

@media screen and (max-width: 750px) {
  .button1 {
     text-indent: -9999px; 
  }

   .button2 {
     margin-right: 10px;
     font-size: small;
   }
}

.v-btn {
  width: 20%;
  color: white
}

</style>
