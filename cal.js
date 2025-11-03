let str="";
function getnums(input){
    if(str=="0"){
        str="";
    }
    str+=input;
    const out=document.getElementById("view");
    out.innerHTML=str;
}

function getans(){
    if(err()!=1){
    let ans = eval(str);
    const out=document.getElementById("view");
    out.innerHTML=ans;
    str="0";
    }
}

function err(){
    try{ans=eval(str)}
    catch(err){document.getElementById("view").innerHTML='<h6 style="margin:13px;">'+err.name+'</h6>';str="0";return 1;}
}

