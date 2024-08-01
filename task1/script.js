
const slidebar=document.getElementById("left-btn")
const hide=document.getElementById("img")
slidebar.addEventListener("click",()=>{
   document.getElementById("slide-bar").classList.add('active')
})
hide.addEventListener("click",()=>{
    document.getElementById("slide-bar").classList.remove('active')
})

async function data() {
    const response = await fetch("data.json");
    const json = await response.json();
    return json;
 }
data().then((json)=>{
console.log(json)
document.getElementById("h1").innerHTML = `${json.title}`;
document.getElementById("Explore").innerHTML=`${json.tasks[0].task_title}`
document.getElementById("discrip").innerHTML=`${json.tasks[0].task_description}`
document.getElementById("Technical").innerHTML=`${json.tasks[0].assets[0].asset_title}`
document.getElementById("onediscrip").innerHTML=`${json.tasks[0].assets[0].asset_description}`
const videoURL = json.tasks[0].assets[0].asset_content.trim();
    document.getElementById("youtube").src = videoURL;
    document.getElementById("Threadbuild").innerHTML=`${json.tasks[0].assets[1].asset_title}`
    document.getElementById("two_disp").innerHTML=`${json.tasks[0].assets[1].asset_description}`
    document.getElementById("Pointers").innerHTML=`${json.tasks[0].assets[2].asset_title}`
    document.getElementById("table3_disp").innerHTML=`${json.tasks[0].assets[2].asset_description}`
     document.getElementById("table4_title").innerHTML=`${json.tasks[0].assets[3].asset_title}`
      document.getElementById("four_disp").innerHTML=`${json.tasks[0].assets[3].asset_description}`
     
    
    


})

