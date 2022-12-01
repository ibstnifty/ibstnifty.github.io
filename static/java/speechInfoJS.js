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
        x.innerHTML='<b>(1) Solo Interpretation: </b>'+
                'In this event, participants will have to give a <b><u>7-10 minute</u></b> performance based on a memorized <b>speech/script/scene</b>'+
                ' from any source of media. The speaker will have to <b>memorize and physically act</b> out the script.'+
                ' Performances must also include an introduction written by the student to contextualize the performance and state the title and author.<br><br>'+
                ' <b><i>No props are allowed,</i></b> so if the script requires an object, the speaker must act like it is there. Participants <b>may act as one or more characters however;</b> no props or costumes are allowed. No script is allowed on stage for this event either.<br><br>'+
                ' The performance will be graded on: <br>'+
                ' <b><u><i>Delivery:</i></u></b> Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?<br>'+
                ' <b><u><i>Stage presence:</i></u></b> Did the speaker maintain eye contact? Did they face the audience? Did they use movement to convey emotion';
    }else if (id=="2"){
        x.innerHTML = '<b>(2) Dual Interpretation: </b>: Two competitors team up to deliver an <i><b>8-10-minute performance</i></b> of a script written by the performers.'+
        ' Using off-stage focus, competitors convey emotion and environment through the relationships and interactions between characters through a variety of performance techniques.'+
        ' Performances <b>must</b> also include an introduction written by the students to contextualize the performance and state the title and author.'+
        " Each partner plays a key role in developing the piece's characters, relationships, plot, and more during a duo interpretation. Duo interpretation allows for students to do humorous, dramatic, or pieces that combine both into the performance."+
        ' Age, maturity, and school standards should all be considered when choosing a topic for a duo interpretation.'+
        ' The performance will be graded on the: <br>'+
        ' <b><u><i>Chemistry</i></u></b>: Did the duo give their lines in a smooth manner that seemed natural? Did both members remember their lines?'+
        '<br><u><b><i>Delivery</i></b></u>: Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?';
    }else if (id=="3"){
        x.innerHTML='<b>(3) Impromptu Speaking:</b>'+
        ' The impromptu speech is a short narration on a topic unknown to the contestant until right before his performance.'+
        ' This is a short speech with a hooking introduction, logical development, and a good conclusion. Each participant draws three possible topics from the bowl.'+
        ' The speaker has <b>30 seconds</b> to choose a subject and <b>1 minute</b> to prepare his speech.'+
        ' The speech is <b>2 minutes;</b> if he goes over 10 seconds or speaks for less than 2 minutes, he will be <b><u>deducted 5 points.</u></b><br>'+
        ' An example of a prompt might be, “color affects how a person behaves.”'+

        '<br><br><b>Note cards are provided and permitted for this event.</b><br>The speech will be graded based on the:<br>'+
        '<b><i><u>Organization:</u></i></b> How well the speaker organized their speech. Did the speech have a clear structure, and did the development of the speech go smoothly?<br>'+  
        '<b><i><u>Analysis:</u></i></b> How well did the speaker address the prompt? Did the speech have points that were justified and significant?<br>'+
        '<b><i><u>Delivery:</u></i></b> Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?'+
        '<br>';
    }else if (id=="4"){
         x.innerHTML = '<b>(4) Editorial Commentary</b>: In this event participants must deliver a scripted original speech that analyzes an event that has happened in the news.'+
        ' The speech should be between <b>1:45 and 2:00 minutes</b> long.'+
        ' The topic is chosen by the participant before the event and can be any topic that has appeared in recent news.'+
        ' The participant can write a script and use it during the speech.'+
        ' During the speech the participant will be seated.<br><br>'+
        'The speech will be graded on:   <br>'+
        '<b><u><i>Organization</i></u></b>: How well the speaker organized their speech. Did the speech have a clear structure, and did the development of the speech go smoothly?'+
        '<br><u><b><i>Analysis</b></i></u>: How well did the speaker address the prompt? Did the speech have points that were justified and significant?'+
        '<br><u><b><i>Delivery</b></i></u>: Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?';
    }else{
        x.innerHTML='<b>(5) Story-Telling: </b>'+
        ' Story telling entails the art of presenting a published story appropriate for a child audience, defined in this case as those between the ages of 5-12.'+
        ' Students tell the story as if presenting to that audience.'+
        ' Storytelling themes range widely and may include mysteries, heroism, or fairy tales. Students may use a chair.'+
        ' A storyteller <b>must choose words and concepts carefully, not only to reach this younger audience but also to hold their attention.</b>'+
        ' Note that, due to the relatively low level of English in the target audience, the language chosen must match the vocabulary of the audience.'+
        'The performance will be graded on:<br>'+
        '<u><b><i>Chemistry:</i></b></u> Did the duo give their lines in a smooth manner that seemed natural? Did both members remember their lines?'+
        '<br><u><b><i>Delivery:</i></b></u> Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?<br><br>';

    }
}

