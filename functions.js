// data send form Ls

function dataSend(key , arr){
    let data = JSON.stringify(arr);
    localStorage.setItem(key , data);

    return true;
}

// data get form LS

function dataGet(key){
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
}