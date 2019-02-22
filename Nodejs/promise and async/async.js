// async function aaa () {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 3000);
//     });
//     return 'ok';
// };

// (async function() {
//     console.log(await aaa());
// }());


(function includeEverything(){

    let n1 = (async function loop(){
        for (let i = 1; i <= 3; i++){
            await new Promise(function(resolve){
                setTimeout(resolve, 1000);
                console.log(i);
            });
        };
    })();

    let n2 = (async function loop2(){
        await n1;
        for (let i = 4; i <= 6; i++){
            await new Promise(function(resolve){
                setTimeout(resolve, 1000);
                console.log(i);
            });
        };
    })();

    let n3 = (async function loop3(){
        await n1;
        await n2;
        for (let i = 7; i <= 9; i++){
            await new Promise(function(resolve){
                setTimeout(resolve, 1000);
                console.log(i);
            });
        };
    })();

})();



// (async function loop(){
//     for (let i = 1; i <= 10; i++){
//         await new Promise(function(resolve, reject){
//             setTimeout(resolve, 1000);    
//             console.log(i);
//         });
//     };
//     console.log('done');
// })();
