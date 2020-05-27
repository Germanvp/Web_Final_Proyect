<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color = "#5A79A5" >
            Add Team
        </v-btn>
      </template>
      <v-card>
        <v-toolbar fluid color="#5A79A5">
          <v-btn icon  @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Team</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items @click="createTeam()">
            <v-btn  text >Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-list-item>
            <v-list-item-content>
            <v-col class="d-flex">
                    <v-text-field
                    v-model= "teamName"
                    label="Name"
                    ></v-text-field>
            </v-col>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-col class="d-flex">
                    <v-text-field
                    v-model="teamMember"
                    label="Team members"
                    ></v-text-field>
                    <v-btn @click="members.push(teamMember)">Add to list</v-btn>
                    <v-text>{{members}}</v-text>
               </v-col>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-col class="d-flex">
                <v-switch v-model="public_goal" class="mx-2" label="Public Team">
                </v-switch>
               </v-col>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-list-item>
            <v-list-item-content>
              <v-textarea
                label="Description"
                v-model="description"
                auto-grow
                outlined
                rows="3"
                row-height="25"
                shaped
                ></v-textarea>      
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
</template>

<script>
  import TeamService from '@/services/TeamService'

  export default {
    data () {
      return {
        teamName: "",
        dialog: false,
        public_goal: false,
        description: "",
        notifications: false,
        sound: true,
        widgets: false,
        picker: new Date().toISOString().substr(0, 10),
        comentarios: "",
        members: [localStorage.user_id],
      }
    },
    methods: {
        async createTeam() {

          const team = {
            description: this.description,
            name: this.teamName,
            users: this.members
          }

          const data = {
            team: team,
            headers: {
                uid: localStorage.user_id,
            }
          }

          console.log(data)
          let resp = await TeamService.postTeam(data);
          console.log(resp)

          this.dialog = false;
        },

    },
  }
</script>

<style scoped>
.v-dialog > .v-card > .v-toolbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>