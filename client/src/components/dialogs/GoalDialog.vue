<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color = "#5A79A5" >
            Add Goal
        </v-btn>
      </template>
      <v-card>
        <v-toolbar fluid color="#5A79A5">
          <v-btn icon  @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Goal</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn  text @click="postGoal">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-list-item>
            <v-list-item-content>
              <v-col class="d-flex">
                    <v-text-field
                    v-model= "name"
                    label="Name"
                    ></v-text-field>
            </v-col>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-col class="d-flex">
                    <v-text-field
                    v-model= "team"
                    item-text="Team"
                    label="Team"
                    ></v-text-field>
               </v-col>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-col class="d-flex">
                <v-switch v-model="public_goal" class="mx-2" label="Public">
                </v-switch>
               </v-col>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-date-picker
                    full-width
                    v-model="picker"
                    :landscape="$vuetify.breakpoint.smAndUp"
                    class="mt-4"
                    color="#5A79A5"
               >
               </v-date-picker>        
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
  import GoalsService from '@/services/GoalsService'

  export default {
    data () {
      return {
        dialog: false,
        public_goal: false,
        notifications: false,
        sound: true,
        widgets: false,
        name: "",
        team: "",
        description: "",
        teamName: "",
        picker: new Date().toISOString().substr(0, 10),
      }
    },
    methods: {
        // Funcion que registra cita en base de datos.
        async postGoal() {
          const goal = {
            name: this.name,
            teamName: this.team,
            team_ref: this.team,
            end: this.picker,
            is_public: this.public_goal,
            description: this.description,
            userName: localStorage.name,
            user_ref: localStorage.user_id,
          }

          console.log(goal)
          GoalsService.postGoal(goal, {})
          .then(res => {
            console.log(res)
            alert("Goal saved succesfully")
            this.dialog = false
          })
          .catch(err => {
            console.log(err)
          })

        }
    },
    created: function() {
      
    }
  }
</script>

<style scoped>
.v-dialog > .v-card > .v-toolbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>