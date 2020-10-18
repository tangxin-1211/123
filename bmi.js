let markBMI
let johnBMI
let markmass = 56
let markheight = 1.7
let johnmass = 50
let johnheight = 1.8
markBMI =markmass/(markheight*markheight);
johnBMI = johnmass/(johnheight*johnheight);
let asd = Boolean(markBMI-johnBMI>0);
if(asd===true){
    console.log('mark的BMI比john高')
}
else if (asd===false){
    console.log('mark的BMI比john低')
}else{
    console.log('mark的BMI和john一样')
}