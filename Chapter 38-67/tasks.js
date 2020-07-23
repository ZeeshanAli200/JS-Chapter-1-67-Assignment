// Assignment # 38-42

// Task#1
// function power(a, b) {
//     var c,cnst1=1;
//     if (b == 1) {
//         document.write("The power of base ",a," and exponent ",b," is = ",a)
//     }
//     else if (b > 1) {
//         c=a;
//         for (var i = 1; i < b; i++) {         
//             c=c*a;
//         }
//         document.write("The power of base ",a," and exponent ",b," is = ",c)
//     }
//     else if(b==0){
//         document.write("The power of base ",a," and exponent ",b," is = ",cnst1)
//     }
//     else{
//         alert("Incorrect number!")
//     }
// }
// var num1= +prompt("Enter Base: ")
// var num2= +prompt("Enter Exponent: ")
// power(num1,num2)

// Task#2

// function leapYear(year){
//     var con1=year.toString();  
//     if(con1.slice(-1)==="2" || con1.slice(-1)==="6" || con1.slice(-1)==="0"){
//         document.write("Its a leap year")
//     }
//     else{
//         document.write("Not a Leap year")
//     }
// }
// var year1=+prompt("Enter any Year:")
// leapYear(year1)

// Task#3


// function S_cal(a,b,c){
//     return (a+b+c)/2;
// }
// function areaTri(a,b,c){
//     return S_cal(s1,s2,s3)*((S_cal(s1,s2,s3)-a)*(S_cal(s1,s2,s3)-b)*(S_cal(s1,s2,s3)-c));
// }
// var s1=+prompt("Base: ");
// var s2=+prompt("Perpendicular: ")

// var s3=+prompt("Hypotenuse: ")
// document.write("Area Of Triangle is: ",areaTri(s1,s2,s3)," m sq")

// Task#4

// function avg(sub1,sub2,sub3){
//     return (sub1+sub2+sub3)/3
// }
// function perc(sub1,sub2,sub3){
//     return ((sub1+sub2+sub3)/300)*100
// }
// function mainFunction(){
//     document.write("Average Numbers in Subjects is ",avg(s1,s2,s3),"<br>Percentage of Subjects is ",perc(s1,s2,s3)," %")
// }
// var s1=+prompt("First Subject:");

// var s2=+prompt("Second Subject:");

// var s3=+prompt("Third Subject:");
// mainFunction()

// Task#5

// function funcIndex(str,srch){
//     for(var i=0;i<str.length;i++){
//         if(srch===str[i]){
//             break
//         }
//     } 
//     document.write("Index of Your Char ",srch," in string ",str," is: ",i)
// }
// funcIndex("str","r")

// Task#6

// function delVowel(str){
//     if(str.length<=25){
//        document.write(str.replace(/a|e|i|o|u|A|E|I|O|U/g,""))
//     }
//     else{
//         document.write("not")
//     }
// }
// var sent=prompt("Enter a sentence not more than 25 char :")
// delVowel(sent)


// Task#7
// function sentVowel(str) {
//     switch (str) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }   
// }
// var mySent = "please read me"
// function totalDoubleVowel() {

//     var myLowerSent = mySent.toLowerCase();
//     var count = 0;
//     for (var i = 0; i < myLowerSent.length ; i++) {
//         var firstC = myLowerSent[i]
//         var SecondC = myLowerSent[i + 1]
//         if (sentVowel(firstC) && sentVowel(SecondC)) {
//             count++;
//         }
//     }
//     return count
// }
// document.write("In the Sentence: ",mySent," <br>there are ",totalDoubleVowel()," occurences")



// Task#8

// function meter(dis) {
//     document.write(dis, " km is ", dis * 1000, " m<br>")
// }
// function Cmeter(dis) {
//     document.write(dis, " km is ", dis * 100000, " cm<br>")
// }
// function foot(dis) {
//     document.write(dis, " km is ", dis * 3281, " ft<br>")
// }
// function inch(dis) {
//     document.write(dis, " km is ", dis * 39370, " inches<br>")
// }
// var dist=+prompt("Enter distance in km: ")
// meter(dist)
// Cmeter(dist)
// foot(dist)
// inch(dist)


// Task#9

// function overTim(Hwork){
//     var cal,over,rate=12;
//     if(Hwork>40){
//         cal=Hwork*rate;
//         over=cal-(40*rate)
//         return "Your actual pay for "+ 40 + " hours is Rs. "+(40*rate)+ " and Your Overtime pay for "+ (Hwork-40) + " hours is Rs. "+over

//     }
//     else if(Hwork<=40 && Hwork > 0){

//         cal=Hwork*rate;
//         return "Your actual pay for "+ Hwork + " hours is Rs. "+cal
//     }
//     else{
//         alert("Invalid Hours")
//     }
// }
// var hourWork=+prompt("Hours Worked??")
// document.write(overTim(hourWork))



// Task#10

// function demo(withDraw) {
//     var str = withDraw.toString()
//     document.write("You will have ")
//     for (var j = 0; j < str.length - 2; j++) {
//         document.write(str[j])
//     }
//     document.write(" Hundred notes ")

//     if (str[str.length - 2] == 5) {
//         document.write(" 1 fifty note ")
//     }
//     if (str[str.length - 2] < 5 && str[str.length - 2]>0) {
//         document.write(str[str.length - 2]," ten notes")
//     }
//     if(str[str.length - 2]>5 && str[str.length - 2]<10){
//         document.write("1 fifty note ",str[str.length - 2]-5 ," ten note")
//     }
// }
// var amt=+prompt("Enter Your Withdrawal Amount: ");
// demo(amt);



// Chap 43-48

//Task#1

// function clicAlert(){
//     alert("Trojan Virus hahah");
// }

//Task#2

// function clikAlert(){
//     alert("Thanks For Puchasing a phone for us!!")
// }


//Task#3

// var r1=document.getElementById("del1")
// var r2 =document.getElementById("indexId")
// function delRow(){
//     r1.deleteRow(r2.innerHTML.valueOf()+1)
// }


//Task#4

// var c1=document.getElementById("chang");
// function imgover(){
//     c1.src="/images/car2.jpg"
// }
// function imgout(){
//     c1.src="/images/car1.jpg"
// }

//Task#5

// var c=0;
// var counth1=document.getElementById("displyCount")
// function inc(){
//     c++
//     counth1.innerHTML=c
// }
// function dec(){
//     c--
//     counth1.innerHTML=c
// }



// Chap 49-52
//Task#1

// var hid1=document.getElementById("hide")
// var sh1=document.getElementById("show")
// sh1.style.visibility='hidden'
// var inpName=document.getElementById("inName")
// var inpEmail=document.getElementById("inEmail")
// var inpPhone=document.getElementById("inPhone")
// var inpSub=document.getElementById("inSub")

// var headName=document.getElementById("hName")
// var headEmail=document.getElementById("hEmail")
// var headPhone=document.getElementById("hPhone")
// var headSub=document.getElementById("hSub")
// function hiding(){
//     hid1.style.visibility='hidden'
//     sh1.style.visibility='visible'

//     headName.innerHTML=inpName.value
//     headEmail.innerHTML=inpEmail.value
//     headPhone.innerHTML=inpPhone.value
//     headSub.innerHTML=inpSub.value
// }





//Task#2

// var tempText=document.getElementById("text2")
// var origText=document.getElementById("text1")
// function readmore(){
//     var longTxt="The iPhone is a line of touchscreen-based smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by Apple co-founder Steve Jobs on January 9, 2007. Since then Apple has periodically released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold The iPhones user interface is built around a multi-touch screen with a virtual keyboard. The iPhone connects to cellular networks or Wi-Fi, and can make calls, browse the web, take pictures, play music and send and receive emails and text messages. Since the iPhones launch further features have been added, including larger screen sizes, shooting video, waterproofing and the ability to install third-party mobile apps through an app store, as well as accessibility support. Up to 2017, iPhones used a layout with a single button on the front panel that returns the user to the home screen. Since 2017, more expensive iPhone models have switched to a nearly bezel-less front screen design with app switching activated by gesture recognition"
//     tempText.innerHTML=longTxt
// }

//Task#3

//     var r1=document.getElementById("del1")
//     var r2 =document.getElementById("indexId")
//     function delRow(){
//         r1.deleteRow(r2.innerHTML.valueOf()+1)
//     }

// var tdName=document.getElementById('name1')
// var tdemail=document.getElementById('emal')
// var sh1=document.getElementById('del1')
// var hid1=document.getElementById('hide')
// var NameInp=document.getElementById('inName')
// var emailInp=document.getElementById('inEmail')
// sh1.style.visibility='hidden'
// function saveData(){
//     hid1.style.visibility='hidden'
//     sh1.style.visibility='visible'
//     tdName.innerHTML=NameInp.value
//     tdemail.innerHTML=emailInp.value
// }




// Chap 53-57
//Task#1
// function shImg(attr){
//     var modimg=document.getElementById("modalImg")
//     modimg.src=attr.src;
// }

//Task#2

// var fontSiz1=16,siz1=0;
// function zoomIn(){
//     if(siz1<16){
//     siz1=fontSiz1
//     }
//     siz1+=10
//     document.getElementById("par1").style.fontSize=siz1+"px";
// }
// function zoomOut(){
//     if(siz1>fontSiz1){
//     siz1-=10
//     }
//     document.getElementById("par1").style.fontSize=siz1+"px"
// }


// Chap 58-67
//Task#1

// i

// var mainCon=document.getElementById("main-content")
// var ren=document.getElementsByClassName("render");
// var formIn=document.getElementById('form-content')

//ii

// console.log(mainCon.childNodes)

//iii

// the inner html content is already displayed in html Code the ques is not clear to me
// console.log(ren)

//iv

// formIn.firstChild.nextSibling.value="Zeeshan"

// formIn.firstChild.nextSibling.nextSibling.nextSibling.value="Ali"

// formIn.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value="zeeshan998811@gmail.com"

//Task#2
//i

// var formIn=document.getElementById('form-content')
// console.log(formIn.nodeType)

//ii

// var lname=document.getElementById('lastName')

// console.log(lname.nodeType)

// console.log(lname.childNodes.nodeType)

//iii

// var lname=document.getElementById('lastName');                                                                          
// lname.innerHTML="Last Name: Ali";


//iv

// var mainCon=document.getElementById("main-content")

// console.log(mainCon.firstChild)

// console.log(mainCon.lastChild)

//v

// var lname=document.getElementById('lastName');
// console.log(lname.previousSibling)
// console.log(lname.nextSibling)

//vi

// var emal=document.getElementById("email");

// console.log(emal.parentNode)

// console.log(emal.nodeType)




