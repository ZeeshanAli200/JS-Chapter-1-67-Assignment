                                 // CHAPTER# 21-25



//TASK#1

// var s1=prompt("Enter First name");

// var s2=prompt("Enter Last name");

// var s3=s1+" "+s2;

// alert("Hello!! "+s3);


//TASK#2

// var favMob=prompt("Your Favourite phone:");

// document.write("My favourite Phone is: ",favMob,"<br>","Length of string: ",favMob.length)


//TASK#3

// var nation=prompt("Nationality:");
// var indx=nation.indexOf("n");

// document.write("String:",nation,"<br>","Index of 'n' ",indx)

//TASK#4

// var nation=prompt("Greet!:");
// var indx=nation.lastIndexOf("l");

// document.write("String:",nation,"<br>","Index of 'l' ",indx)

//TASK#5

// var nation=prompt("Nationality:");
// var indx=nation.charAt(3);

// document.write("String:",nation,"<br>","Char at Index 3 is ",indx)


//TASK#6


// var s1=prompt("Enter First name");

// var s2=prompt("Enter Last name");

// var s3=s1.concat(" ",s2);

// alert("Hello!! "+s3);


//TASK#7

// var cit1="Hyderabad";
// var s1=cit1.replace("Hyder","Islam");

// document.write("City:",cit1,"<br>","After replacement: ",s1)


//TASK#8

// var message ="Ali and Sami are best friends. They play cricket and football together"; 
// var s1=message.replace(/and/g,"&");

// document.write("Message: ",message,"<br>","After replacement: ",s1)


//TASK#9

// var str ="472";
// var num=472; 
// var con1=num.toString();
// var con2=Number(str)

// document.write("Value: ",num,"<br>","Type: ",typeof con1,"<br>","Value: ",str,"<br>","Type: ",typeof con2)

//TASK#10

// var inp=prompt("User Input: ");
// document.write("User Input: ",inp,"<br>","UpperCase: ",inp.toUpperCase())


//TASK#11

// var inp=prompt("User Input: ");
// var inp1=inp.slice(0,1).toUpperCase()
// var inp2=inp.slice(1).toLowerCase();
// document.write("User Input: ",inp,"<br>","Title Case: ",inp1+inp2)

//TASK#12
// var num=35.36;
// var str=num.toString();
// var rep=str.replace(".","");
// document.write("Number:",num,"<br>","Result:",rep);

//TASK#13

// var user=prompt("Enter Username:");

// if(user.charAt(user.indexOf("@"))===String.fromCharCode(64) || user.charAt(user.indexOf("!"))===String.fromCharCode(33) ||user.charAt(user.indexOf(","))===String.fromCharCode(44) || user.charAt(user.indexOf("."))===String.fromCharCode(46)){
//     alert("Please enter a valid username")
// }
// else{
//     alert("Correct username")
// }


//TASK#14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"] 
// var srch1=prompt("Welcome to ABC bakery What do you want to order sir/ma'am?");

// srch2=srch1.toLowerCase();

// for(var i=0;i<A.length;i++){
//     if(srch2===A[i]){
//         break
//     }
// }
// if(srch2===A[i]){
//     document.write(srch2," is available at index ",i," in our bakery<br>")

// }
// else{
//     document.write("We are sorry ",srch2," is not available in our bakery")
// }

//TASK#15

// var userPass = prompt("Enter Password:");
// document.write("Entered Password: ",userPass,"<br>")
// if (userPass[0].charCodeAt() >= 48 && userPass[0].charAt() <= 57) {
//     document.write("Password cannot begin with a number!", "<br>Please Enter a valid Password")
// }
// else {
//     if (userPass.length < 6 ) {
//         document.write("Password should be at least 6 characters", "<br>Please Enter a valid Password")
//     }
//     else {
//         if (userPass.match(/^[0-9a-zA-Z]+$/)) {
//             document.write("Password format is correct!!")
//         }
//         else {
//             document.write("Please Insert Numbers and Letters only!<br>","Please Enter a valid Password")
//         }
//     }
// }
//TASK#16

// var university = "University of Karachi"; 
// var sp=university.split("")

// for(var i=0;i<sp.length;i++){
//     document.write(sp[i],"<br>")
// }

//TASK#17

// var count=prompt("Enter Country:");

// var print=count.charAt(count.length-1)
// document.write("User Input:",count,"<br>","Last Character of Input:",print)


//TASK#18

// var str="The quick brown fox jumps over the lazy dog";
// var case1=str.toLowerCase();
// var str1=case1.split(" ");
// var str3=[];
// for(var i=0;i<str1.length;i++){
//     if(str1[i]==="the"){
//         str3.push(str1[i])        
//     }
// }
// document.write("Text: ",str,"<br>","There are ", str3.length, " occurences of the word 'the' ")

                        // CHAPTER# 26-30

//TASK#1

// var num1=+prompt("Enter a +ve integer");
// if(num1>0){
//     document.write("Number: ",num1,"<br>","Round off Value: ",Math.round(num1),"<br>","floor value: ",Math.floor(num1),"<br>","Ceil value: ",Math.ceil(num1))

// }
// else{
//     document.write("Not +ve Integer")
// }


//TASK#2

// var num1=+prompt("Enter a -ve integer");
// if(num1<0){
//     document.write("Number: ",num1,"<br>","Round off Value: ",Math.round(num1),"<br>","floor value: ",Math.floor(num1),"<br>","Ceil value: ",Math.ceil(num1))

// }
// else{
//     document.write("Not -ve Integer")
// }

//TASK#3

// var num=+prompt("Enter Number");
// document.write("The absolute value of ",num," is ",Math.abs(num))

//TASK#4

// var a=Math.random()*6;
// var b=Math.ceil(a);
// document.write("Random dice value: ",b)

//TASK#5

// var a=Math.random()*2;
// var b=Math.ceil(a);
// if(b===1){  
//     document.write(b,"<br>Random coin value: tails")
// }
// else{
//     document.write(b,"<br>Random coin value: heads")
// }

//TASK#6

// var a=Math.random()*100;
// var b=Math.ceil(a);
// document.write("Random value b/w 1 and 100: ",b)

//TASK#7

// var usr=prompt("Enter weight in kg:");
// var usr1=parseFloat(usr);

// document.write("The weight of User is ",usr1," Kilograms")

//TASK#8

// var a=Math.random()*10;
// var b=Math.ceil(a);
// var usr1=+prompt("Enter a number b/w 1 and 10:")
// if(usr1===b){
//     alert("Congratulation!!")
// }
// else{
// document.write("Try again")
// }

                            // CHAPTER# 31-34


//TASK#1

// var currDate=new Date();
// document.write(currDate)


//TASK#2

// var currdate=new Date();
// var Months=["January","February","March","April","May","June","July","August","September","October","November","December"]

// document.write("Current Month: ",Months[currdate.getMonth()])

//TASK#3

// var currDate=new Date();
// document.write("Today is ",currDate.toString().slice(0,3))

//TASK#4

// var currdate = new Date();

// if (currdate.toString().slice(0, 3) === "Sat" || currdate.toString().slice(0, 3) === "Sun") {
//     document.write("Its Fun day")
// }
// else {
//     document.write("Its not Fun day")
// }


//TASK#5

// var currdate = new Date();
// if(currdate.toString().slice(8,10)>=0 && currdate.toString().slice(8,10)<=15){
//     document.write("First Fifteen days of Month")
// }
// else{
//     document.write("Last days of the month")
// }

//TASK#6

// var currdate = new Date();
// var milliSec=currdate.getTime();
// document.write("Current Date: ",currdate,"<br>","Elapsed milliseconds since Jan 1, 1970: ",milliSec ,"<br>","Elapsed minutes since Jan 1, 1970: ",milliSec/60000);

//TASK#7

// var currdate = new Date();

// if (currdate.toString().slice(16, 18) >= "00" && currdate.toString().slice(16, 18) < "12" ) {
//     document.write("Its AM")
// }
// else {
//     document.write("Its PM")
// }

//TASK#8

//  var laterDate = new Date("December 31,2020");
//  document.write("Later Date: ",laterDate)


//TASK#9


// var currdate = new Date();

// var ramDate=new Date("April 24,2020");

// var ramMill=ramDate.getTime();
// var currMilli=currdate.getTime();

// var minCal=currMilli-ramMill;
// var dayCal=(minCal/60000)/1440
// document.write(Math.ceil(dayCal)," days has passed Since 1st Ramazan, 2020")

//TASK#10

// var currdate = new Date();

// var ramDate=new Date("January 1,2020");

// var ramMill=ramDate.getTime();
// var currMilli=currdate.getTime();

// var refMil=currMilli-ramMill;

// document.write("On reference date ",currdate,"<br>",refMil/1000," Seconds has passed since beginning of 2020")

//TASK#11

// var currdate = new Date();
// var currdate1 = new Date();

// currdate.setHours(currdate.getHours()-1);
// document.write("Current date: ",currdate1,"<br>","1 hour ago it was ",currdate)

//TASK#12

// var currdate = new Date();
// var currdate1 = new Date();

// currdate.setFullYear(currdate.getFullYear()-100);
// document.write("Current date: ",currdate1,"<br>","100 years ago it was ",currdate)

//TASK#13

// var currdate = new Date();
// var age=prompt("Your birth day and year in this order (January 1,2020):")
// var sli=age.slice(-4,age.length)

// var currdate1= new Date(age);
// var currMill=currdate.getTime();
// var birthMil=currdate1.getTime();

// var bithCalMili=currMill-birthMil;
// document.write("Your age is ",Math.floor((bithCalMili/60000)/525600),"<br>","Your birth year is ",sli)


// //TASK#14
// var cN,rate=16,latePay=350,unit,kE="K-Electric Bill";
// var Months=["January","February","March","April","May","June","July","August","September","October","November","December"]
// var currDate=new Date();
// cN=prompt("Customer Name: ")
// unit=+prompt("Number of units?")
// document.write(kE.bold().fontsize(6),"<br>")
// document.write("Customer Name: ",cN,"<br>","Month: ",Months[currDate.getMonth()],"<br>","Number of units: ",unit,"<br>","Charges per unit: ",rate,"<br><br>","Net amount payable (within duedate): ",unit*rate,"<br>","Late payment surcharges: ",latePay,"<br>","Gross amount payable (after duedate): ",(unit*rate)+latePay);


                            // CHAPTER# 35-38
//TASK#1

// function currDate(){
//     var cur=new Date();
//     return cur
// }
// document.write(currDate())

//TASK#2

// function Fname(fname,lname){
//     return fname+" "+lname;
// }
// var fir=prompt("First name: ")
// var last=prompt("Last name: ")
// alert(Fname(fir,last))

//TASK#3

// function add(num1,num2){
//     return num1+num2;
// }
// var fir=+prompt("First number: ")
// var last=+prompt("Second number: ")
// alert("Addition: ",add(fir,last))


//TASK#4

// function cal(num1, num2, op) {
//     if (op === "+") {
//         return "Addition "+num1 + num2
//     }
//     else if (op === "-") {
//         return "Subtraction "+num1 - num2
//     }
//     else if (op === "*") {
//         return "Multiplication "+num1 * num2;
//     }

//     else if (op === "/") {
//         return "Division "+num1 / num2;
//     }
// }
// var fir = +prompt("First number: ")
// var last = +prompt("Second number: ")

// var oper = prompt("Operator?: ")
// alert(cal(fir,last,oper))

//TASK#5

// function square(num1) {
//     return Math.pow(num1, 2)
// }
// var fir = +prompt("Any number: ")

// document.write(square(fir))

//TASK#6

// function fact(num1){
//     var val=1;


//     for(var i=1;i<=num1;i++){
//         val=val*i

//     }
//     return val
// }
// var a=+prompt("Enter Number: ");
// document.write("Factorial of ",a," is ",fact(a))


//TASK#7

// function count(start,stop){
//     for(var i=start;i<=stop;i++){
//         document.write(i,"<br>")
//     }
// }
// var a=+prompt("Enter Start Number: ");
// var b=+prompt("Enter Stop Number: ")
// count(a,b)  

//TASK#8

// function  calculateHypotenuse(base,height){
//     function calculateSquare(b,h){
//         var sq=Math.pow(b,2)+Math.pow(h,2);
//         return sq
//     }
//     var hype=Math.sqrt(calculateSquare(base,height))
//     return hype

// }

// var a=+prompt("Enter Base: ");
// var b=+prompt("Enter height: ");

// document.write("Hypotenuse calculated is: ",calculateHypotenuse(a,b))

//TASK#9

// function area(width,height){
//     return width*height
// }
// var a=+prompt("Enter width: ");
// var b=+prompt("Enter height: ");
// document.write("Area of rectangle: ",area(a,b))

// document.write("<br>Area of rectangle: ",area(2,4))

//TASK#10

// function palen(str) {
//     var str1=[];
//     for (var i = str.length -1; i >=0; i--) {
//         str1.push(str[i])   
//     } 
//     if (str1.join("") === str) {
//         document.write("Its a Palendrome")
//     }
//     else {
//         document.write("Its not Palendrome")
//     }
// }
// var text=prompt("Enter your text for checking Palendrome")
// palen(text)

//TASK#11

// function conv(str){
//     var str1=str.replace(/ /g,",")
//     var str2=str1.split(",")
//     for(var i=0;i<str2.length;i++){
//         document.write(str2[i].slice(0,1).toUpperCase(),str2[i].slice(1,str2.length+1).toLowerCase()," ")

//     }

// }
//conv("the quick brown fox")


// //TASK#12
// function big(str) {
//     var str1 = str.replace(/ /g, ",")
//     var long=0,bigWord=null,str2 = str1.split(",")

//     for(var i=0;i<str2.length;i++){
//         if(long<str2[i].length){
//             long=str2[i].length;
//             bigWord=str2[i]
//         }
//     }
//     return bigWord+ " is the longest string of length "+long
// }
// document.write(big("Web Development Tutorial"))


//TASK#13

// function occur(str,letter){
//     var count=0
//     for(var i=0;i<str.length;i++){
//         if(letter===str[i])
//         count++;


//     }
// return count
// }
// var a=prompt("Enter String: ");
// var b=prompt("Enter Letter: ");

// document.write("String: ",a,"<br>","Letter: ",b,"<br>","Number of Occurences: ",occur(a,b))

//TASK#14

// function calcCircumference(radius){
//     return 2*3.142*radius
// }
// function calcArea(radius1){
//     return 3.142*Math.pow(radius1,2)
// }
// var rad=+prompt("Enter radius: ")

// document.write("Circumference of Circle is ",calcCircumference(rad),"<br>","Area of Circle is ",calcArea(rad))
