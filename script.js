// http://hp-api.herokuapp.com/api/characters/house/gryffindor

var main_char = ["Harry Potter","Hermione Granger","Ron Weasley"];
var insert_main = document.getElementById('main-char');
// console.log(insert_main);

var insert_house_1 = document.getElementById('house_1_char');
// console.log(insert_house_1);

var insert_house_2 = document.getElementById('house_2_char');
// console.log(insert_house_2);

var insert_house_3 = document.getElementById('house_3_char');
// console.log(insert_house_3);

var insert_house_4 = document.getElementById('house_4_char');
// console.log(insert_house_4);

fetch('http://hp-api.herokuapp.com/api/characters',{
    method:'GET'
}).then((response)=>{
    // console.log(response.status);
    if(response.status==200)
        return response.json()
    else
        return null;
}).then((data)=>{
    if(data!=null){
        // console.log(data);
        var j=0;
        for(var i=0;i<data.length;i++){
            if(data[i].name==main_char[j]){
                //console.log(data[i]);
                j++;
                if(insert_main!=null)
                insert_main.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
                )
            }
        }
    }
})

//house 1
fetch('http://hp-api.herokuapp.com/api/characters/house/Gryffindor',{
    method:'GET'
}).then((response)=>{
    // console.log(response.status);
    if(response.status==200)
        return response.json()
    else
        return null;
}).then((data)=>{
    if(data!=null){
        // console.log(data);
        for(var i=0;i<data.length;i++){
            if(insert_house_1!=null && data[i].image=="")
                insert_house_1.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img not found">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
                )
        }
        for(var i=0;i<data.length;i++){
            if(insert_house_1!=null && data[i].image!="")
                insert_house_1.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img not found">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
                )
        }
    }
    
})

//House 2
fetch('http://hp-api.herokuapp.com/api/characters/house/Slytherin',{
    method:'GET'
}).then((response)=>{
    // console.log(response.status);
    if(response.status==200)
        return response.json()
    else
        return null;
}).then((data)=>{
    if(data!=null){
        // console.log(data);
        for(var i=0;i<data.length;i++){
            if(insert_house_2!=null && data[i].image=="")
                insert_house_2.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img not found">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
                )
        }
        for(var i=0;i<data.length;i++){
            if(insert_house_2!=null && data[i].image!="")
                insert_house_2.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img not found">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
                )
        }
    }
    
})

//Ravenclaw 3 
fetch('http://hp-api.herokuapp.com/api/characters/house/Ravenclaw',{
    method:'GET'
}).then((response)=>{
    // console.log(response.status);
    if(response.status==200)
        return response.json()
    else
        return null;
}).then((data)=>{
    if(data!=null){
        // console.log(data);
        for(var i=0;i<data.length;i++){
            if(insert_house_3!=null && data[i].image=="")
                insert_house_3.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img not found">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
            )
        }
        for(var i=0;i<data.length;i++){
            if(insert_house_3!=null && data[i].image!="")
                insert_house_3.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img not found">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
            )
        }
    }
    
})

//Hufflepuff 4
fetch('http://hp-api.herokuapp.com/api/characters/house/Hufflepuff',{
    method:'GET'
}).then((response)=>{
    // console.log(response.status);
    if(response.status==200)
        return response.json()
    else
        return null;
}).then((data)=>{
    if(data!=null){
        // console.log(data);
        for(var i=0;i<data.length;i++){
            if(insert_house_4!=null && data[i].image=="")
                insert_house_4.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img not found">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
            )
        }
        for(var i=0;i<data.length;i++){
            if(insert_house_4!=null && data[i].image!="")
                insert_house_4.insertAdjacentHTML('afterend',
                    `<div class="card">
                        <img src="${data[i].image}" alt="#img not found">
                        <h3>${data[i].name}</h3> 
                        <p>Species: ${data[i].species}</p>
                        <p>Gender: ${data[i].gender}</p>
                        <p>House : ${data[i].house}</p>
                    </div>`
            )
        }
    }
    
})
