const sessionStorageManager = {
    get data(){
        return window.localStorage.getItem('reserb-session');
    }, 
    set data(data){
        window.localStorage.setItem('reserb-session',data);
    }
    
}

export default sessionStorageManager;