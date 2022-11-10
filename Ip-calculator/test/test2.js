var ipA = 0;
             
var ipB = 0;
 
var ipC = 0;
 
var ipD = 0;
 
//------Enter IP -------------- 

//---En1 . En2  . En3 .En4

var ipEn1 = 0;
 
var ipEn2 = 0;
 
var ipEn3 = 0;
 
var ipEn4 = 0;


//-------IpWild-------------------

var ipWn1 = 0;
 
var ipWn2 = 0;
 
var ipWn3 = 0;
 
var ipWn4 = 0;
 

//------Network Address------------

var ipNet1 = 0;
 
var ipNet2 = 0;
 
var ipNet3 = 0;
 
var ipNet4 = 0;
 
 
// -------BroadCast Adding Bit---------------------------

 var ipBr1 = 0;
 var ipBr2 = 0;
 var ipBr3 = 0;
 var ipBr4 = 0;
  
// -------BroadCast Adding Bit---------------------------

 var ipBro1 = 0;
 var ipBro2 = 0;
 var ipBro3 = 0;
 var ipBro4 = 0;    

//------Sub and Host -------------------------------------

  var ipSub = 0;
  var ipHost = 0;
               



//---------------------------------------------------------     
var validateIP = 0;
 
var rFormat = false;

var sellComm =0 ;


var selectLog = 0;

var dropSelect =0;
 
//-----------Intermediate Variable-----------
 
var ipLogic = false;

var goWild = 0;
 
var goNetwork = 0;
 
var kase =0;
 
var goBroad =0;
 
var goSubHost =0 ;
 
var subBits =0;
 
var hostBits =0 ;
 
var goUsable =0;
 
var netLIP =0 ;
 
var brLIP =0 ;


// This Function will Get the IP subnet Mask Value from the Selection    

function ipMask(s2){
                             
      
                     var s2 = document.getElementById(s2);
                             
                            
                             if(s2.value == "1"){
                                  
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 255;    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 0;
                                    
                                    subBits =32;
 
                                    hostBits =0 ;
                                    
                                  kase = 1 ;
                      
                                  dropSelect =1;
                                     
  
                                                    } 
       
                              else if(s2.value == "2"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 254; 
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 1;
                                    
                                   subBits =31;
 
                                   hostBits =1 ;
                                    
                                    
                                    
                                   kase = 2 ;
                                   dropSelect =1;                                              
                                 
                                   
                            }


                             else if(s2.value == "3"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 252; 
                                    
                                    
                                    //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 3;
                                    
                                    
                                   subBits =30;
 
                                   hostBits =2 ;
                                    
                                    kase = 3 ;
                                    dropSelect =1;           
                                 
                                   
                            }




                            else if(s2.value == "4"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 248; 
                                    
                                    //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 7;
                                    
                                   subBits =29;
 
                                   hostBits =3 ;
                                    
                                   kase = 4 ;           
                                   dropSelect =1;
                                   
                            }



                           else if(s2.value == "5"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 240; 
                                    
                                    
                                    //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 15;
                                    
                                   subBits =28;
 
                                   hostBits =4 ;
                            
                                  kase = 5 ;              
                                  dropSelect =1;
                                   
                            }


                            else if(s2.value == "6"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 224; 
                                    
                                    //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 31;
                                    
                                   subBits =27;
 
                                   hostBits =5 ;
                                    
                                    
                                    
                                    
                                    
                                    
                                   kase = 6 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            else if(s2.value == "7"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 192; 
                                    
                                    //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 63;
                                    
                                   subBits =26;
 
                                   hostBits =6 ;
                                    
                                    
                                    
                                    
                                   kase = 7 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            else if(s2.value == "8"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 128; 
                                    
                                     //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 127;
                                    
                                   subBits =25;
 
                                   hostBits =7 ;
                                    
                                    
                                    
                                    
                                   kase = 8 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            //-------------------------------------------------------------------------------------------------
                             
                             
                            else if(s2.value == "9"){
                                  
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 255;
 
                                   ipD = 0;    
                                    
                                     //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 0;
                                   ipBr4 = 255;
                                    
                                   subBits =24;
 
                                   hostBits =8 ;
                                    
                                    
                                    
                                  
                                  kase = 9 ;  
                                  dropSelect =1;
                                     
  
                                                    } 
       
                              else if(s2.value == "10"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 254;
 
                                   ipD = 0; 
                                    
                                    
                                     //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 1;
                                   ipBr4 = 255;
                                    
                                   subBits =23;
 
                                   hostBits =9 ;
                                    
                                    
                                    
                                   kase = 10 ;  
                                   dropSelect =1;                                              
                                 
                                   
                            }


                             else if(s2.value == "11"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 252;
 
                                   ipD = 0; 
                                    
                                    //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 3;
                                   ipBr4 = 255;
                                    
                                   subBits =22;
 
                                   hostBits =10 ;
                                    
                                    
                                    
                                    
                                    kase = 11 ;  
                                    dropSelect =1;           
                                 
                                   
                            }




                            else if(s2.value == "12"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 248;
 
                                   ipD = 0; 
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 7;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =21;
 
                                   hostBits =11 ;
                                    
                                    
                                   kase = 12 ;             
                                   dropSelect =1;
                                   
                            }



                           else if(s2.value == "13"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 240;
 
                                   ipD = 0; 
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 15;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =20;
 
                                   hostBits =12 ;
                                    
                                    
                                   kase = 13 ;             
                                  dropSelect =1;
                                   
                            }


                            else if(s2.value == "14"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 224;
 
                                   ipD = 0; 
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 31;
                                   ipBr4 = 255;
                                    
                                    
                                    
                                   subBits =19;
 
                                   hostBits =13 ;
                                    
                                    
                                    
                                    
                                   kase = 14 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            else if(s2.value == "15"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 192;
 
                                   ipD = 0; 
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 63;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =18;
 
                                   hostBits =14 ;
                                    
                                    
                                    
                                   kase = 15 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            else if(s2.value == "16"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 128;
 
                                   ipD = 0; 
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 127;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =17;
 
                                   hostBits =15 ;
                                    
                                    
                                    
                                   kase = 16 ;   
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                             
                             
                            //----------------------------------------------------------------------------------------------------
                             
                             
                             
                            else if(s2.value == "17"){
                                  
                                   ipA = 255;
 
                                   ipB = 255;
 
                                   ipC = 0;
 
                                   ipD = 0;  

                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 0;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    
                                    
                                   subBits =16;
 
                                   hostBits =16 ;


                                    
                                  
                                   kase = 17 ;  
                                  dropSelect =1;
                                     
  
                                                    } 
       
                              else if(s2.value == "18"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 254;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 1;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =15;
 
                                   hostBits =17 ;
                                    
                                    
                                    
                                   kase = 18 ;  
                                   dropSelect =1;                                              
                                 
                                   
                            }


                             else if(s2.value == "19"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 252;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                    
                                    //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 3;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                   subBits =14;
 
                                   hostBits =18 ;
                                    
                                    
                                    
                                    
                                    
                                    kase = 19 ;  
                                    dropSelect =1;           
                                 
                                   
                            }




                            else if(s2.value == "20"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 248;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 7;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                     
                                   kase = 20 ;  
                                   dropSelect =1;
                                    
                                    
                                   subBits =13;
 
                                   hostBits =19 ;
                                   
                            }



                           else if(s2.value == "21"){
                                   
                                   
                                   ipA = 255;
 
                                   ipB = 240;
 
                                   ipC = 0;
 
                                   ipD = 0;
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 15;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                   subBits =12;
 
                                   hostBits =20 ;
                                       


                                    
                                  kase = 21 ;              
                                  dropSelect =1;
                                   
                            }


                            else if(s2.value == "22"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 224;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 31;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                   subBits =11;
 
                                   hostBits =21 ;
                                    
                                    
                                    
                                   kase = 22 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            else if(s2.value == "23"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 192;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 63;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =10;
 
                                   hostBits =22;
                                    
                                    
                                    
                                    
                                    
                                   kase = 23 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            else if(s2.value == "24"){
                                   
                                   
                                    
                                   ipA = 255;
 
                                   ipB = 128;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 127;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =9;
 
                                   hostBits =23;
                                    
                                    
                                    
                                    
                                    
                                   kase = 24 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            //------------------------------------------------------------------------------------------------------------------
                             
                            else if(s2.value == "25"){
                                  
                                   ipA = 255;
 
                                   ipB = 0;
 
                                   ipC = 0;
 
                                   ipD = 0; 

                            //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 0;
                                   ipBr2 = 255;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =8;
 
                                   hostBits =24;
                                    

                                  kase = 25 ;  
                                  dropSelect =1;
                                     
  
                                                    } 
       
                              else if(s2.value == "26"){
                                   
                                   
                                   ipA = 254;
 
                                   ipB = 0;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 1;
                                   ipBr2 = 255;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                   subBits =7;
 
                                   hostBits =25;
                                    
                                    
                                    
                                   kase = 26 ;  
                                   dropSelect =1;                                              
                                 
                                   
                            }


                             else if(s2.value == "27"){
                                   
                                   
                                   ipA = 252;
 
                                   ipB = 0;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 3;
                                   ipBr2 = 255;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    
                                    
                                   subBits =6;
 
                                   hostBits =26;
                                    
                                    kase = 27 ;  
                                    dropSelect =1;           
                                 
                                   
                            }




                            else if(s2.value == "28"){
                                   
                                   
                                   ipA = 248;
 
                                   ipB = 0;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 7;
                                   ipBr2 = 255;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =5;
 
                                   hostBits =27;
                                    
                                     
                                   kase = 28 ;  
                                   dropSelect =1;
                                   
                            }



                           else if(s2.value == "29"){
                                   
                                   
                                   ipA = 240;
 
                                   ipB = 0;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 15;
                                   ipBr2 = 255;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    subBits =4;
 
                                   hostBits =28;
                                    
                                    
                                  kase = 29 ;              
                                  dropSelect =1;
                                   
                            }


                            else if(s2.value == "30"){
                                   
                                   
                                    
                                   ipA = 224;
 
                                   ipB = 0;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 31;
                                   ipBr2 = 255;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                   subBits =3;
 
                                   hostBits =29;
                                    
                                    
                                   kase = 30 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            else if(s2.value == "31"){
                                   
                                   
                                    
                                   ipA = 192;
 
                                   ipB = 0;
 
                                   ipC = 0;
 
                                   ipD = 0; 
                                    
                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 63;
                                   ipBr2 = 255;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                    
                                   subBits =2;
 
                                   hostBits =30;
                                    
                                   kase = 31 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                            else if(s2.value == "32"){
                                   
                                   
                                    
                                   ipA = 128;
 
                                   ipB = 0;
 
                                   ipC = 0;
 
                                   ipD = 0;

                                   //-------Value to add for Broad Cast --------------
                                    
                                   ipBr1 = 127;
                                   ipBr2 = 255;
                                   ipBr3 = 255;
                                   ipBr4 = 255;
                                    
                                   subBits =1;
 
                                   hostBits =31;
                                    
                                   kase = 32 ;  
                                   dropSelect =1;          
                                 
                                   
                            }
                             
                             







}

//------------------------------------ Default Selection--------------------------------------------


function resetSelectElement(selectElement) {
var options = selectElement.options;

// Look for a default selected option
for (var i=0, iLen=options.length; i<iLen; i++) {

if (options[i].defaultSelected) {
selectElement.selectedIndex = i;
return;
}
}

// If no option is the default, select first or none as appropriate
selectElement.selectedIndex = 0; // or -1 for no option selected
}


//--------------------------Calculate Wild Card------------------------------------------------------------

function  calWildCard(w1,w2,w3,w4){

var outWild = [];

outWild[1] = 255 -w1 ;
outWild[2] = 255 -w2 ;
outWild[3] = 255 -w3 ;
outWild[4] = 255 -w4 ;


return [ outWild[1], outWild[2], outWild[3], outWild[4] ];

}


//-----------------------------Calculate Network Address ---------------------------------------------------------

// This function will accept parameter from User Input IP Address and Subnet Mask Selected by User, broken into Single Digits

function  calNetworkAddress(en1,en2,en3,en4,ss1,ss2,ss3,ss4 ){

//-----------Network Address Output --------------------------------------

var netOut = [] ;

//--------Convert all input Value to Binary-------------------------------

       //-----Enter IP Portion ------
       //  cen1 = en1.toString(2);
       // cen2 = en2.toString(2);
        // cen3 = en3.toString(2);
         //cen4 = en4.toString(2);
        //----Subnet IP Portion
        // css1  = ss1.toString(2);
        // css2 = ss2.toString(2);
        // css3 = ss3.toString(2);
         //css4 = ss4.toString(2);
          
          
//--------------'And 'the User Input Value with the Subnet Value Selected to get the Network Address ------------------------------------------------
          
       netOut[1] = en1 & ss1 ;
       netOut[2] = en2 & ss2 ;
       netOut[3] = en3 & ss3 ;
       netOut[4] = en4 & ss4 ;
        
        
//-----------Convert Binary Value Back to Decimal-----------------------------------------------------------------------------------------------------------
        
return [netOut[1],netOut[2],netOut[3],netOut[4] ];                

}




//----------Calculate the BroadCast Address ------------------------------------------

// Broad Cast Address is Derive by filling up the last few host bit Address with 1s 

// This Function will take in the Network Address Parameter  and fill the  last few host Bit with 1s

// The Value for  ipBr1 to ipBr4 is derive  in the ipMasks Function

function  calBroadcast(net1,net2,net3,net4 ){

  var broadOut = [] ;


       broadOut[1] = net1 | ipBr1 ;
       broadOut[2] = net2 | ipBr2 ;
       broadOut[3] = net3 | ipBr3 ;
       broadOut[4] = net4 | ipBr4 ;
  


return [broadOut[1],broadOut[2],broadOut[3],broadOut[4] ]; 





}


//----------Calculate  Number of Host and Subnet-----------------------------------------

// Total Bits in an IPv4 Address is 32 bit = Subnet Bit  + Host Bit
// This Function will take in the Subnet bit and Host Bit and Return the Number of Host and the Number of subnet


function  calHostSub(net,hosts){

var subnHost = [] ;




//-------Calculate the Number of Subnet --------------

subnHost[1] =  Math.pow(2, net);



//--------Calculate the Number of Host ----------------


subnHost[2] =  Math.pow(2, hosts) -2;

//-------- Minus 2 is because 1 is the Broadcast Address other is Network Address


return [subnHost[1],subnHost[2]];            

}


//---------------------------Usable Ip Range -------------------------------------------------------
//This fuction will get the Paramater of the Network Adress and BroadCast Address


function  calIpRange(netL,brL){

var lastOctet = [] ; 

// First Host IP of the Network
lastOctet[1] = netL + 1;

// Last Host Ip of the Network

lastOctet[2] = brL - 1;


return [lastOctet[1],lastOctet[2]];    


}
//-------------------------This Function will check is it a  Valid IP  --------------------------///

function CheckIP(IPText){

ValidIP = false; 
//-----declare  the Return Value 


var intIP = [];


// Split the User Inputed IP and split into 4 array  by .
ipParts = IPText.split(".");

// If the Array Length is 4

if(ipParts.length==4){
// Loop through the Array
for(i=0;i<4;i++){
// assign the array Value into TheNum 
TheNum = parseInt(ipParts[i]);
// Check whether the User inputed number is Between  0 to 255
if(TheNum >= 0 && TheNum <= 255){
//Yes Assign the Value
intIP[i]= TheNum; 

}
//No Break out of the Loop
else{break;}

}

// If length equals 4 is a Valid IP
if(i==4)ValidIP=true; 
}
return [ValidIP,intIP[0],intIP[1],intIP[2],intIP[3] ];
}





  
function calculateOrigin(){

              
               

               validateIP = document.getElementById("getIp").value;
           

// --------------Check Whether the User Enter Enter Correct Format----Check whether User Enter IP Address

              ipLogic = CheckIP(validateIP);
              rFormat =   ipLogic[0] ;
               
                

// If All Conditions is Valid Proceed Calculation

if(!dropSelect || !rFormat  ) {
       alert("You must Select a Subnet Mask and Enter Correct IP format ");
        
        
        
                                                   } 


else {

        
//Move in the Input Value
 
   ipEn1  = ipLogic[1];
   ipEn2  = ipLogic[2];
   ipEn3  = ipLogic[3];
   ipEn4  = ipLogic[4];
    
// Calculate WildCard
 
   goWild = calWildCard(ipA,ipB,ipC,ipD);
 
   ipWn1  = goWild[0];
   ipWn2  = goWild[1];
   ipWn3  = goWild[2];
   ipWn4  = goWild[3];
    
    
    
// Calculate Network Address
 
 
  
     goNetwork   = calNetworkAddress(ipEn1,ipEn2,ipEn3,ipEn4,ipA,ipB ,ipC ,ipD );
  
  
   ipNet1  = goNetwork[0];
   ipNet2 = goNetwork[1];
   ipNet3 = goNetwork[2];
   ipNet4  = goNetwork[3];
    
    
    
    
  //Calculate Broad Cast Address
    
        goBroad    =  calBroadcast(ipNet1,ipNet2,ipNet3,ipNet4 );
         
     
         
        ipBro1  =  goBroad[0];
        ipBro2 =  goBroad[1];
        ipBro3 =  goBroad[2];
        ipBro4  =  goBroad[3];
         
         
 // Calculate Number of Subnet and Host
    
        goSubHost = calHostSub(subBits,hostBits );
         
        ipSub = goSubHost[0];
        ipHost = goSubHost[1];
         
         
 // Calculate Usable IP Range       
 
       goUsable = calIpRange(ipNet4,ipBro4);
        
       netLIP = goUsable[0];
        
       brLIP = goUsable[1];
  
  
 
         }
          
          
         document.getElementById("ipDisplay").innerHTML = "IP ADDRESS : "+ ipEn1  +"." + ipEn2 +"." + ipEn3 +"." + ipEn4 ;
          
         document.getElementById("subnetDisplay").innerHTML = "Net Mask : " + ipA  +"." + ipB +"." + ipC +"." + ipD ;
          
         document.getElementById("wildDisplay").innerHTML = "Wild Card : " + ipWn1 +"." + ipWn2 +"." + ipWn3 +"." + ipWn4 ;
          
         document.getElementById("networkDisplay").innerHTML = "Network : " + ipNet1 +"." + ipNet2 +"." + ipNet3 +"." + ipNet4 ;
          
          
         document.getElementById("broadDisplay").innerHTML = "Broadcast Address : " + ipBro1 +"." + ipBro2 +"." + ipBro3 +"." + ipBro4;
          
         document.getElementById("subnetnumDisplay").innerHTML = " Number of Subnet : " + ipSub ;
          
          
         document.getElementById("hostDisplay").innerHTML = " Number of Host : " + ipHost ;
          
          
         document.getElementById("firstIpDisplay").innerHTML = " First IP of the Network : " + ipNet1 +"." + ipNet2 +"." + ipNet3 +"." + netLIP ;
          
          
         document.getElementById("lastIpDisplay").innerHTML = "  Last IP of the Network : " + ipBro1 +"." + ipBro2 +"." + ipBro3 +"." + brLIP ;
          
          
          
        
dropSelect = 0;

kase =0;

resetSelectElement(slct2);




document.getElementById("getIp").value="";


}
