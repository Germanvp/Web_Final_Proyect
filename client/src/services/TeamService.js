import Api from '@/services/Api'

export default {
  getTeams (credentials) {
    return Api().get('teams', credentials)
  },

  postTeam(credentials) {
    return Api().post('teams', credentials)
  },

  
}
