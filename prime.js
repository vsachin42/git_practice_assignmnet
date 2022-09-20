function check_prime(n){
    if (n<2 || n==undefined){
        return false;
    } else{
        for (let i=2; i<=Math.sqrt(n); i++){
            if(n%i==0){
                return false;
            }
            return true;
        }
    }
}

console.log(check_prime(13));