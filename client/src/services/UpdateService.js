import Api from '@/services/Api'

export default {
  getUpdate (updateId, credentials) {
    return Api().get('update/' + updateId, credentials)
  },

  patchUpdate(updateId, credentials) {
    return Api().patch('update/' + updateId, credentials)
  },
  
}
