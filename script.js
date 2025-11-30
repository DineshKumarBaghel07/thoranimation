
// const myPromise = new Promise((resolve, reject)=>{
//     let sucess = true;
//     if(sucess){
//         resolve("data");
//     }
//     else{
//         reject("not data");
//     }
// })

// myPromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })



function fatchUser(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("data mile gya")
        },5000)
    })
}



async function getData() {
    try{
        let result = await fetch()
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}