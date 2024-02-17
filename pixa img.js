
let btn=document.getElementById("btn")
console.log(btn);

btn.addEventListener("click",async()=>{
    let search=document.getElementById("search").value 
    console.log(search);

    let per_page=15
    let data1=await window.fetch(`https://pixabay.com/api/?key=40806069-3c067ae78c47a2ca6cffbcdd6&q=${search}&image_type=photo&pretty=true&per_page=${per_page}`)
    console.log(data1);

    let res=await data1.json()
    console.log(res);

    for(let ele of res.hits)
    {
        console.log(ele);
        let demo=document.getElementById("demo")
        console.log(demo);
        let image=`
        <img src=${ele.previewURL} />
        `
        demo.innerHTML+=image
    }
})
