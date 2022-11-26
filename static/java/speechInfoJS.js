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
        x.innerHTML='<b>(1) Dramatic Interpretation: </b>'+
        'In this event, participants will have to give a <b><u>7-10 minute</u></b> performance based on a memorized <b>speech/script/scene</b>'+
        ' from any source of media. The speaker will have to <b>memorize and physically act</b> out the script.'+
        ' Performances must also include an introduction written by the student to contextualize the performance and state the title and author.<br><br>'+
        ' <i><b>No props are allowed,</i></b></i> so if the script requires an object, the speaker must act like it is there.<br><br>'+
        ' The performance will be graded on: <br>'+
        ' <b><u><i>Delivery:</b></u></i> Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?<br>'+
        ' <b><u><i>Stage presence:</b></u></i> Did the speaker maintain eye contact? Did they face the audience? Did they use movement to convey emotion?';
    }else if (id=="2"){
        x.innerHTML = '<b>(2) Dual Interpretation: </b>: In this event, participants in teams of 2 will act out a <b>7-10 minute performance</b> based on a memorized speech/script/scene from any source of media.'+
        ' The speakers will have to memorize and physically act out the script.'+
        ' Before you give your speech, the speaker must give context to whatever they will act out (all that is needed is the source of the speech/script/scene and the setting of the scene).'+
        '<br><br><b><i>No props are allowed, so if the script requires an object, the speaker must act like it is there.</i></b><br><br>'+
        'The performance will be graded on the: <br>'+
        '<b><u><i>Chemistry</i></u></b>: Did the duo give their lines in a smooth manner that seemed natural? Did both members remember their lines?'+
        '<br><u><b><i>Delivery</i></b></u>: Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?';
    }else if (id=="3"){
        x.innerHTML = '<b>(3) Editorial Commentary</b>: In this event participants must deliver a scripted original speech that analyzes an event that has happened in the news.'+
        ' The speech should be between <b>1:45 and 2:00 minutes</b> long.'+
        ' The topic is chosen by the participant before the event and can be any topic that has appeared in recent news.'+
        ' The participant can write a script and use it during the speech.'+
        ' During the speech the participant will be seated.<br><br>'+
        'The speech will be graded on:   <br>'+
        '<b><u><i>Organization</i></u></b>: How well the speaker organized their speech. Did the speech have a clear structure, and did the development of the speech go smoothly?'+
        '<br><u><b><i>Analysis</b></i></u>: How well did the speaker address the prompt? Did the speech have points that were justified and significant?'+
        '<br><u><b><i>Delivery</b></i></u>: Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?';
    }else if (id=="4"){
        x.innerHTML='<b>(4) Impromptu Speaking:</b> The impromptu speech is an extemporaneous narration on a topic'+
        ' unknown to the contestant until immediately before his/her performance. It is a SHORT speech'+
        ' with an effective introduction, logical development, and fitting conclusion. Each contestant will'+
        ' draw 3 possible topics from the bowl. Speakers will be given 30 seconds to choose a topic, and'+
        ' then 1 minute to prepare their speech. Speeches must be <b><u>2 minutes long</u></b>, with 5 points being'+
        ' deducted for going 10 seconds over or 10 seconds under 2 minutes.'+
        '<br><br><b>Note cards are provided and permitted for this event.</b><br>The speech will be graded based on the:<br>'+
        '<b><i><u>Organization:</u></i></b> How well the speaker organized their speech. Did the speech have a clear structure, and did the development of the speech go smoothly?<br>'+  
        '<b><i><u>Analysis:</u></i></b> How well did the speaker address the prompt? Did the speech have points that were justified and significant?<br>'+
        '<b><i><u>Delivery:</u></i></b> Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?'+
        '<br>';
    }else{
        x.innerHTML='<b>(5) Story-Telling: </b>'+
        'In this event participants will have to tell a story as if they are presenting it to an audience.'+
        ' Storytelling themes range widely and may include mysteries, heroism, or fairy tales.'+
        ' Participants may use a chair.'+
        ' The performance must be <b>at least 5 minutes long</b> and must not exceed 6 minutes.'+
        ' The story must be presented from memory, with no manuscript.<br><br>'+
        'The performance will be graded on:<br>'+
        '<u><b><i>Chemistry:</i></b></u> Did the duo give their lines in a smooth manner that seemed natural? Did both members remember their lines?'+
        '<br><u><b><i>Delivery:</i></b></u> Did the speaker have to deliver the speech smoothly? Did their voice sound confident, and did they have appropriate volume?<br><br>';

    }
}

