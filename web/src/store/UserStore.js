import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._isAdmin = false;
        this._login = ''
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAdmin(isAdmin){
        this._isAdmin = isAdmin
    }

    get isAdmin(){
        return this._isAdmin;
    }

    setlogin(login){
        this._login = login
    }

    get login(){
        return this._login;
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._isAuth = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get User() {
        return this._user;
    }
}