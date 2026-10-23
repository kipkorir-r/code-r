const p = document.getElementById("para");

async function getdata() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.jason();
    const user = data.results[0];

    p.innerText = `${user.name.title}  ${user.name.first} ${user.name.last}`; 
}