var trashcan = [];
function map() {
    http = {url:localStorage.getItem('http')};
    var newWindow, args = "";
    args += "height=" + http.height + ",width=" + http.width;
    args += "dependent=yes,scrollbars=yes,resizable=yes";
    newWindow = open(http.url, http.target, http.args);
    newWindow.focus(); 
    return newWindow;}
function processFormData() {
    const maphttpElement = document.getElementById('maphttp');
    const passForm = maphttpElement.value;
    alert("現在是"+passForm);
    localStorage.removeItem('http',passForm);
    localStorage.setItem('http',passForm);
    
}
function logout(){
    localStorage.removeItem('log',log);
}
function info(trashcan){
    trashcan[0]=[localStorage.setItem(placeForm,passForm)];
    alert(trashcan[0]);
    return trashcan;
}
