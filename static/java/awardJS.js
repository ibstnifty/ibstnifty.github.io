//Update Name Options
function updateNames(){
  var event=document.getElementById("events").value;
  var nameList=document.getElementById("name");
  if (event=="edcom"){
    nameList.innerHTML = '<option selected>Select Your Name</option>'+
    'option value="Adam Hayashi"> Adam Hayashi </option>'+
    'option value="Bo-Ning Wang"> Bo-Ning Wang </option>'+
    'option value="Justin Sultemeier"> Justin Sultemeier </option>'+
    'option value="Amber Li"> Amber Li </option>'+
    '<option value="Chester Wang"> Chester Wang </option>'+
    'option value="You-Lin Tuan"> You-Lin Tuan </option>'+
    '<option value="Katherine Lee"> Katherine Lee </option>'+
    '<option value="Isabel Li"> Isabel Li </option>'+
    '<option value="William Sultemeier"> William Sultemeier </option>'+
    '<option value="Bjorn Raditya Dhont"> Bjorn Raditya Dhont </option>';
  }else if (event=="ld"){
    nameList.innerHTML = '<option selected> Select Your Name</option>'+
    '<option value="Daisy Tsai"> Daisy Tsai </option>'+
    '<option value="Arthur Bizon"> Arthur Bizon </option>'+
    '<option value="Solomon Ho"> Solomon Ho </option>'+
    '<option value="Bang-Chen Hsueh"> Bang-Chen Hsueh </option>'+
    '<option value="Austin Han-Wen Chiang"> Austin Han-Wen Chiang </option>'+
    '<option value="Ke-Chun Chiu"> Ke-Chun Chiu </option>'+
    '<option value="Victor Kang"> Victor Kang </option>'+
    '<option value="Isabel Li"> Isabel Li </option>'+
    '<option value="S. Iniyan Achyudhan"> S. Iniyan Achyudhan </option>'+
    '<option value="Tim Ma"> Tim Ma </option>';
  }else{
    nameList.innerHTML='<option selected>Select Your Name</option>'+
    '<option value="Anca Li & Jazlyn Shen"> Anca Li & Jazlyn Shen </option>'+
    '<option value="Wei Teng (Austin) Wang & Maggie Yumeng Lee"> Wei Teng (Austin) Wang & Maggie Yumeng Lee </option>'+
    '<option value="Karim Erraji & William Tzu-Yang Jen"> Karim Erraji & William Tzu-Yang Jen </option>'+
    '<option value="Charlotte Wang & Catherine Wu"> Charlotte Wang & Catherine Wu </option>'+
    '<option value="Charlotte Anthea Lloyd & Stanley Yi-Hao Jen"> Charlotte Anthea Lloyd & Stanley Yi-Hao Jen </option>'+
    'option value="Oliver (Hsun) OuYang & Ian Milo Cheng"> Oliver (Hsun) OuYang & Ian Milo Cheng </option>'+
    '<option value="Wen Ling Catherine, Lee & Sabrina Chu"> Wen Ling Catherine, Lee & Sabrina Chu </option>'+
    '<option value="Laila Erraji & Chelsea TsaiHsi Chiang"> Laila Erraji & Chelsea TsaiHsi Chiang </option>'+
    '<option value="Austin Lee & Dylan Pak"> Austin Lee & Dylan Pak </option>'+
    '<option value="Shannon Lo & Shaun Lee"> Shannon Lo & Shaun Lee </option>'+
    '<option value="Benjamin George Smith & Barkley William Wilfred Wang"> Benjamin George Smith & Barkley William Wilfred Wang </option>'+
    '<option value="Eliana Ko & Nethika Jayith Rajapakse"> Eliana Ko & Nethika Jayith Rajapakse </option>';
    
  }
}

//Values for each policy grid
// var ms1 = {"Anca Li & Jazlyn Shen":"Anca Li", "Wei Teng (Austin) Wang & Maggie Yumeng Lee":"Wei Teng (Austin) Wang", "Karim Erraji & William Tzu-Yang Jen":"Karim Erraji",
//            "Charlotte Wang & Catherine Wu":"Charlotte Wang", "Charlotte Anthea Lloyd & Stanley Yi-Hao Jen":"Charlotte Anthea Lloyd", "Oliver (Hsun) OuYang & Ian Milo Cheng":"Oliver (Hsun) OuYang",
//            "Wen Ling Catherine, Lee & Sabrina Chu":"Wen Ling Catherine, Lee", "Laila Erraji & Chelsea TsaiHsi Chiang":"Laila Erraji", "Austin Lee & Dylan Pak":"Austin Lee",
//            "Shannon Lo & Shaun Lee":"Shannon Lo", "Benjamin George Smith & Barkley William Wilfred Wang":"Benjamin George Smith", "Eliana Ko & Nethika Jayith Rajapakse":"Eliana Ko"
//           };

// var ms2 = {"Anca Li & Jazlyn Shen":"Jazlyn Shen", "Wei Teng (Austin) Wang & Maggie Yumeng Lee":"Maggie Yumeng Lee", "Karim Erraji & William Tzu-Yang Jen":"William Tzu-Yang Jen",
//            "Charlotte Wang & Catherine Wu":"Catherine Wu", "Charlotte Anthea Lloyd & Stanley Yi-Hao Jen":"Stanley Yi-Hao Jen", "Oliver (Hsun) OuYang & Ian Milo Cheng":"Ian Milo Cheng",
//            "Wen Ling Catherine, Lee & Sabrina Chu":"Sabrina Chu", "Laila Erraji & Chelsea TsaiHsi Chiang":"Chelsea TsaiHsi Chiang", "Austin Lee & Dylan Pak":"Dylan Pak",
//            "Shannon Lo & Shaun Lee":"Shaun Lee", "Benjamin George Smith & Barkley William Wilfred Wang":"Barkley William Wilfred Wang", "Eliana Ko & Nethika Jayith Rajapakse":"Nethika Jayith Rajapakse"
//           };

var scoreBoard = {
  "Anca Li & Jazlyn Shen":"static/images/policy1.png",
  "Wei Teng (Austin) Wang & Maggie Yumeng Lee":"static/images/policy2.png",
  "Karim Erraji & William Tzu-Yang Jen":"static/images/policy3.png",
  "Charlotte Wang & Catherine Wu":"static/images/policy4.png",
  "Charlotte Anthea Lloyd & Stanley Yi-Hao Jen":"static/images/policy5.png",
  "Oliver (Hsun) OuYang & Ian Milo Cheng":"static/images/policy6.png",
  "Wen Ling Catherine, Lee & Sabrina Chu":"static/images/policy7.png",
  "Laila Erraji & Chelsea TsaiHsi Chiang":"static/images/policy8.png",
  "Austin Lee & Dylan Pak":"static/images/policy9.png",
  "Shannon Lo & Shaun Lee":"static/images/policy10.png",
  "Benjamin George Smith & Barkley William Wilfred Wang":"static/images/policy11.png"
  "Eliana Ko & Nethika Jayith Rajapakse":"static/images/policy12.png"
};

function Awards(){
  var events=document.getElementById("events").value;
  var name=document.getElementById("name").value;
  var info=document.getElementById("info");
  
  info.innerHTML='<img src="'+scoreBoard[name]+'">';
  
}
