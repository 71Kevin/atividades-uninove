(function includeEverything(){

    function firstPromise(resolve, reject){

        fruits = ['banana', 'abacate', 'uva'];

        setTimeout(() => {           
            for(split in fruits){
                console.log(fruits[split]);
            };
            resolve();
        }, 2000);
    };

    let promise = new Promise(firstPromise);

    let promiseTwo = promise.then(function SecondPromise(){

        return new Promise(function(resolve){
            setTimeout(() => {
                console.log('XXX Segundo XXX');
                resolve();
            }, 6000);
        });
    });

    promiseTwo.then(function Third(){

        setTimeout(() => {
            console.log('3');
        }, 3000);
    });
    
    console.log('abc');

})();