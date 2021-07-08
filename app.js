function getnine(a){
document.getElementById('display').value+=a;


}
function getc(){
    document.getElementById('display').value="";
    
    }
   
    function operation(){
        if (document.getElementById('display').value == '' ) alert('Undefined'); else document.getElementById('display').value=eval(document.getElementById('display').value) 
    }