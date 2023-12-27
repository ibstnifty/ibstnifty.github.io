function showContent() {
    var x = document.querySelectorAll(".link-text");
    
    x.forEach (each =>{
        if (each.style.display=="none"){
            each.style.display="block";
        }else{
            each.style.display="none";
        }
    })
} 

function showText (id) {
    var x=document.getElementById("pContent");
    var y=document.getElementById("content");
    var foot = document.getElementById("foot");
    var text;
    y.style.textAlign="justify";
    x.style.fontSize="130%";
    foot.style.left="0";


    if (id=="1"){
        x.innerHTML = '<b>(1) Dual Interpretation: </b>: Two competitors team up to deliver an <i><b>8-10-minute performance</i></b> of a script written by the performers.'+
        ' Using off-stage focus, competitors convey emotion and environment through the relationships and interactions between characters through a variety of performance techniques.'+
        ' Performances <b>must</b> also include an introduction written by the students to contextualize the performance and state the title and author.'+
        " Each partner plays a key role in developing the piece's characters, relationships, plot, and more during a duo interpretation. Duo interpretation allows for students to do humorous, dramatic, or pieces that combine both into the performance."+
        ' Age, maturity, and school standards should all be considered when choosing a topic for a duo interpretation.<b>No script is allowed on stage for this event.</b>';
    }else if (id=="2"){
        x.innerHTML='<b>(2) Impromptu Speaking:</b>'+
        ' The impromptu speech is a short narration on a topic unknown to the contestant until right before his performance.'+
        ' This is a short speech with a hooking introduction, logical development, and a good conclusion. Each participant draws three possible topics from the bowl.'+
        ' The speaker has <b>30 seconds</b> to choose a subject and <b>1 minute</b> to prepare his speech.'+
        ' The speech is <b>2 minutes;</b> if he goes over 10 seconds or speaks for less than 2 minutes, he will be <b><u>deducted 5 points.</u></b><br>'+
        ' An example of a prompt might be, “color affects how a person behaves.”';
    }else {
        x.innerHTML=''
    }
}

