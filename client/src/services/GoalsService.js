import Api from '@/services/Api'

export default {
  getGlobalGoals () {
    return Api().get('global_goals')
  },

  getPersonalGoals (credentials) {
    return Api().get('goals', credentials)
  },

  postGoal(goal, credentials) {
    return Api().post('goals', goal, credentials)
  },

  patchGoal(goalId, credentials) {
    return Api().patch('goals/' + goalId, credentials)
  },

  deleteGoal(goalId, credentials) {
    return Api().delete('goals/' + goalId, credentials)
  },
  
}
