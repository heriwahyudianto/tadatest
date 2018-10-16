for(i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("maxgood");
    } else {
        if (i%3==0){
            console.log("max");
        }
        if(i%5==0){
            console.log("good");
        }
    }
}