const sessionData = {
    get email(){
        return sessionStorage.getItem('reserb-user-email')
    },
    set email(email){
        sessionStorage.setItem('reserb-user-email',email)
    }
}

export default sessionData;
