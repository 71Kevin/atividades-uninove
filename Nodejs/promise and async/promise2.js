(function(){
    
    let promise = new Promise(t1);
    
    function t1(resolve, reject){

        setTimeout(() => {
            
            fruits = ['banana', 'morango', 'abacate', 'melancia', 'pera', 'uva'];
        
            for (let split in fruits){
                console.log(fruits[split])
            }
        }, 1000);

        resolve();
    };
    
    promise.then(function segundo(){
        
        setTimeout(() => {
            console.log('\nUltimo a ser executado');
        }, 4000);
        
    });
    
    promise.then(function fff(){
        
        setTimeout(() => {

            let i = 10;
            let j = 15;

            if (i < j){
                console.log('\nJ maior que I');
            } else{
                console.log('\nI maior que J');
            }
        }, 3000);
        
    });

    console.log('first\n');
    
})();