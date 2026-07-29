fetch("https://dummyjson.com/recipes/").then((response)=>{
    return response.json();  
}).then((result)=>{
    result.recipes.map((data,index)=>{
        console.log(data);
        
    })
})
