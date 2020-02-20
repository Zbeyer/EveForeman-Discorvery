import Api from '@/services/Api'

// AuthService.register({
//     email: 'your@email.com',
//     password: '123456'
// })
export default {
    register (credentials) {
        return Api().post('register', credentials)
    },
    login (credentials) {
        return Api().post('login', credentials)
    }
}
