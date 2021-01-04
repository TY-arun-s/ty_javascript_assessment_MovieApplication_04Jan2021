let content = document.getElementById("content"); //div with id
function getData() {
    url = `http://www.omdbapi.com/?apikey=fd1533a4&s=`
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}
getData();







