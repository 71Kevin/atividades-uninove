(function agregaTudo(){

    function First(resolve, reject){
        setTimeout(() => {
            console.log('bolo de cenoura é bom');
            resolve();
        }, 2000);
    };
    
    let promise = new Promise(First);
    
    let secondPromise = promise.then(function Third(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Segundo');
                resolve();
            }, 10000);
        });
    });

    secondPromise.then(function Second(){
        setTimeout(() => {
            for(let i = 1; i <= 3; i++){
                console.log(i);
            }
        }, 3000);

    });

    console.log('abc');

})();