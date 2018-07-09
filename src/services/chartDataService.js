import Axios from "../../node_modules/axios";

Axios.defaults.baseURL='/api/CrmData/'
Axios.defaults.headers.post["Content-type"]='application/json'
Axios.defaults.headers.common["bearer"]='ZhQ4nHP6AkMuEkoqQzA9AoJRfvVKAQ4ekHbcMF7mWz3JUgAZjAcGiS_hHbeQswpkUekfgosf4137qsquDyeRgOUEywFbOe4osGtrj-rlPcdDmVllwxtZTdikk9GBtk0WAgLy6HXzs6ccsfo_3DUhCBY3Y0uHJe7mrR8AYJYBzhsyucz6izGUWJlTG3zDXEWaFHp02y19BUE5abTRdZIqcKJ0hd4'

class chartDataService{
    getData(){
        return Axios.post('uri',{
            param:''
        })
    }
}