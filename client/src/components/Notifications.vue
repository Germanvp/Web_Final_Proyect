<template>
<v-app style = "background: #DEE7EF;">
  <v-card>
    <v-card-title>
      Notifications
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

  <template>
    <v-data-table
      :headers="headers"
      :items="notifications"
      :search="search"
    >
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.userFrom}}</td>
            <td>{{row.item.userTo}}</td>
            <td>{{row.item.type}}</td>
            <td>{{row.item.comment_text}}</td>
            <td>
              <v-btn @click="updateNotification(row.item.id)">Approve</v-btn>
            </td>
          </tr>
      </template>
    
    </v-data-table>
   </template> 
  </v-card>
</v-app>
</template>

<script>
  import ThreadDialog from './dialogs/ThreadDialog'
  import GoalDialog from './dialogs/GoalDialog'
  import NotificationsService from '@/services/NotificationsService'

  export default {
    components: { ThreadDialog, GoalDialog },
    data () {
      return {
        search: '',
        singleSelect: false,
        notifications: [],
        emptyString: "",
        selected: [],
        headers: [
          { text: 'From', value: 'userFrom' },
          { text: 'To', value: 'userTo' },
          { text: 'Type', value: 'type' },
          { text: 'Message', value: 'comment_text' },
          { text: '', value: '' },
        ]
      }
    },
    methods: {
      async getNotifications() {
          const response = await NotificationsService.getNotifications({
            headers: {
                uid: localStorage.user_id,
            }
          })
          console.log(response.data);
          this.notifications = this.notifications.concat(response.data);
        },

      async updateNotification(notifId) {
          const response = await NotificationsService.patchNotification(notifId, {
            headers: {
                uid: localStorage.user_id,
            }
          })
          .then(resp => {
            alert("You can see the comment in the update now.");
          })
          .catch(err => {
            alert(resp);
          })
          console.log(response);       
      }
    },

    created: function() {
      this.getNotifications();
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: black;
  align-self: center;
  margin: 10px;
}


.v-card {
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
}
</style>
