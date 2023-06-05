
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3b970f302msh2f7df4a0c9be985p179c03jsn36cd9b3ac0f7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
document.getElementById('btn').addEventListener('click',function(){
    var city=document.getElementById('myText').value
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then((response)=>response.json())
	.then((response)=>{
        document.getElementsByClassName("city")[0].innerText=city
        document.getElementsByClassName("temp")[0].innerText=response.temp+"°"
    })
    .catch((error)=> console.log(error))

})


