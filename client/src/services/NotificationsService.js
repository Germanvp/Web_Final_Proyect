import Api from '@/services/Api'

export default {

  getNotifications (credentials) {
    return Api().get('notifications', credentials)
  },

  patchNotification(notifId, credentials) {
    return Api().patch('notifications/' + notifId, credentials)
  },
  
}
