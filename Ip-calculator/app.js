/////////////////// functions start ////////////////
/**
 * there are two ways to make this function. the easier way is to use .toString(2)
 * **/
function convertToBinary(x) {
  let binString = ''
  let bin = 0;
  let rem
  let i = 1
  while (x != 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  let rest = 8 - bin.toString().length
  for (let i = 0; i < rest; i++) {
    binString += + '0'
  }
  return binString + bin.toString()
}
//new way
/**
 * convert the
 * @param {*} decimal
 * @returns
 */
const ToBinary = (decimal) => {
  return decimal.toString(2)
}
/*********************************************************
 * function convert number from Binary to decimal
 * depend on parsInt() method
 * @param {*} text
 * @returns
 ***********************************************************/

const convertToDecimal = (text) => {
  let bin = parseInt(text, 2);
  return bin
};

const convertHexToDec = (hex) =>{
  let des = parseInt(hex, 16);
  console.log(des);
  return des
}
convertHexToDec('F')

/**
 *
 * @param {*} array
 */
 const convertFullIpToDecimal = (array)=>{
  let FullIpToDecimal= array.map(element=> convertToDecimal(element))
  return FullIpToDecimal
}


const convertFullBinary =(array)=>{
  let FullIpToBinary= array.map(element=> ToBinary(element))
  return FullIpToBinary
}
// let test = convertFullIpToDecimal(["11000000","10101000","00000001","00000000"])
// console.log('convertFullIpToDecimal',test);


// console.log(convertFullBinary([192, 168, 2, 0]));
/***********************************************************
  * create the replaced part from the Binary number
 * this function used just for Sub Net mask  function because it generate 8 number starting form right to left with 0 and 1
 * @param {*} o
 * @returns
 ***************************************************************/
const replacedPart = (o) => {
  let replaced = "";
  for (let i = 8; i > 0; i--) {
    if (i > o) {
      replaced = replaced + '1'
    } else {
      replaced = replaced + "0"
    }
  }
  return replaced
};
/**************************************************************
 *
 * @param {*} suf
 * @returns
 ********************************************************/
const getSubNetMask = (suf) => {
  const result = {
    maskArr: null,
    hostNumber: null,
    SubMask: null
  }
  let mask = ["11111111", "11111111", "11111111", "11111111"]
  let x = 32 - suf;
  if (suf >= 24) {
    mask[3] = replacedPart(x);
  } else if (suf >= 16 && suf < 24) {
    let a = x - 8
    mask[2] = replacedPart(a)
    mask[3] = '00000000';
  } else if (suf >= 8 && suf < 16) {
    let a = x - 16
    mask[1] = replacedPart(a)
    mask[2] = '00000000';
    mask[3] = '00000000';
  }
  let hostNum = Math.pow(2, x) - 2
  const binArray =convertFullIpToDecimal(mask)
  result.maskArr = mask;
  result.hostNumber = hostNum;
  result.SubMask = binArray;
  return result

}
//  console.log('getSubNetMask',getSubNetMask(24));
/************************************************
 *
 * @param {*} ip is array of strings ['binaryNumber','']
 * @param {*} SubMask is array of strings ['binaryNumber',''] , you can get it from getSubNetMask function
 * @returns
 **************************************************/
const netAddressCalculate = (ip, SubMask) => {
  netAddress = [];
  resultArray = [];
  // netNetAddress =[];
  SubMask.forEach((element, idx) => {
    let resultObj = {
      octNum: null,
      firstIndex: null,
      lastIndexOf: null
    };
    resultObj.octNum = idx;
    resultObj.firstIndex = element.indexOf('0');
    resultObj.lastIndexOf = element.lastIndexOf('0');
    resultArray.push(resultObj)
  })
  resultArray.forEach(obj => {
    if (obj.octNum === 0) {
      netAddress.push(ip[0]);

      // netNetAddress.push(ip[0]);
    }
    if (obj.octNum === 1 && obj.firstIndex === -1) {
      netAddress.push(ip[1]);

      // netNetAddress.push(ip[1]);
    } else if (obj.octNum === 1 && obj.firstIndex != -1) {
      netAddress.push(ip[1].slice(0, obj.firstIndex) + SubMask[1].slice(obj.firstIndex, obj.lastIndexOf + 1));
    }
    if (obj.octNum === 2 && obj.firstIndex === -1) {
      netAddress.push(ip[2])

      // netNetAddress.push(ip[2]);
    } else if (obj.octNum === 2 && obj.firstIndex != -1) {
      netAddress.push(ip[2].slice(0, obj.firstIndex) + SubMask[2].slice(obj.firstIndex, obj.lastIndexOf + 1))
    }
    if (obj.octNum === 3 && obj.firstIndex === -1) {
      netAddress.push(ip[3])

      // netNetAddress.push(ip[3]);
    } else if (obj.octNum === 3 && obj.firstIndex != -1) {
      netAddress.push(ip[3].slice(0, obj.firstIndex) + SubMask[3].slice(obj.firstIndex, obj.lastIndexOf + 1))
    }
  })

  const netAddressDecimal = convertFullIpToDecimal(netAddress)

  return {
          netAddressDecimal,
          netAddress
          }
}
//  console.log(netAddressCalculate(['11000000', '10101000', '00000001', '00000000'],['11111111', '11111111', '00000000', '00000000']));
/********************************************************
 * function Broadcast Calculator
 * @param {*} idBinary ip address in Binary
 * @param {*} suFix is th e number of Suffix
 * @param {*} availableHost
 * @returns
 *********************************************************/
const broadcastCalc = (idBinary, suFix) => {
    let x =["11111111", "11111111", "11111111", "11111111"]
    let broadcasts = [];
    let resultArray = [];
    let subMask =getSubNetMask(suFix).maskArr;
    subMask.forEach((element, idx) => {
      let resultObj = {
        octNum: null,
        firstIndex: null,
        lastIndexOf: null
      };
      resultObj.octNum = idx;
      resultObj.firstIndex = element.indexOf('0');
      resultObj.lastIndexOf = element.lastIndexOf('0');
      resultArray.push(resultObj)
    })
    
    resultArray.forEach(obj=>{

      if (obj.octNum === 0) {

        broadcasts.push(idBinary[0]);

      }
      if (obj.octNum === 1 && obj.firstIndex === -1){
        broadcasts.push(idBinary[1]);
      } else if (obj.octNum === 1 && obj.firstIndex != -1) {
        broadcasts.push(idBinary[1].slice(0, obj.firstIndex)+x[1].slice(obj.firstIndex, obj.lastIndexOf + 1));
      }
      if (obj.octNum === 2 && obj.firstIndex === -1){
        broadcasts.push(idBinary[2]);
      } else if (obj.octNum === 2 && obj.firstIndex != -1) {
        broadcasts.push(idBinary[2].slice(0, obj.firstIndex)+x[2].slice(obj.firstIndex, obj.lastIndexOf + 1))

        ;
      }
      if (obj.octNum === 3 && obj.firstIndex === -1){
        broadcasts.push(idBinary[3]);
      } else if (obj.octNum === 3 && obj.firstIndex != -1) {
        broadcasts.push(idBinary[3].slice(0, obj.firstIndex)+x[3].slice(obj.firstIndex, obj.lastIndexOf + 1))

        ;
      }
    })

    let broadcastArr = convertFullIpToDecimal(broadcasts);

    return {
            broadcastArr,
            broadcasts
          }

}
//  console.log('broadcastCalc',broadcastCalc(['11000000', '10101000', '00000001', '000000000'],16));

/**
 *
 */
/** divide the main net  to subnets */

// sorting the subnets inputs  by hostsNumbers
const replaceStringAtIndex =(string,index,newValue)=>{
      if(index > string.length-1){
        return string
      }else{
        return string.substring(0,index)+newValue+string.substring(index+1)
      }

}

const nextNetIpAddress =(broadcast,suffix)=>{
 let broadcastStr = broadcast.toString().replaceAll(",","")

  let firstStepString = replaceStringAtIndex(broadcastStr,suffix-1,'1');
 
  let firstPart = firstStepString.slice(0,suffix);
  
  let nextNetIpAddressStr = firstPart;
  for (let i = suffix; i < broadcastStr.length; i++) {
    nextNetIpAddressStr += '0'
  }
  let nextNetIpAddress2 = nextNetIpAddressStr.slice(0,8)+','+nextNetIpAddressStr.slice(8,16)+','+nextNetIpAddressStr.slice(16,24)+','+nextNetIpAddressStr.slice(24,33);
      let nextNetIpAddress1 = nextNetIpAddress2.split(',')

  let nextNetIpAddressDis = convertFullIpToDecimal(nextNetIpAddress1);
  return {
          nextNetIpAddress1,
          nextNetIpAddressDis
         }
}
//  console.log('nextNetIpAddress',nextNetIpAddress(['11000000', '10101000', '00000001', '01111111'],25));

/**********************************************
 * create comparing list which we will use it to divide the Main Net to sub Nets
 * @param {*} mainIpSuffix
 * @returns
 ************************************************/
const hostSuffixList = (mainIpSuffix) => {
  let resultArray = []
  let n = 0
  for (let i = mainIpSuffix + 1; i <= 31; i++) {
    let obj = {
      s: null,
      h: null
    }
    n = 30 - i;
    obj.s = i;
    obj.h = Math.pow(2, n + 2) - 2;
    resultArray.push(obj);
  }

  return resultArray
}
/*************************************************
 * function  getSubNets
 * @param {*} subNetsNum tis should be an Number
 * @param {*} sufList the result of  hostSuffixList function
 * @param {*} MainnetAddress is the main Net ip in Binary
 ************************************************/
const getSubNets = (subNetsNum, sufList, MainnetAddress) => {
  let subNetRangeArray = []
  let  NetObjArray =[];
  let lastResultArray =[] ;
  let binaryMainNetAddress = MainnetAddress.map(element=>convertToDecimal(element))
  console.log('sufList',sufList);
  // looping  sufLIST ARRAY to create an array of net Object told subNetRangeArray
  sufList.forEach((sufObj, idx, sufList) => {
      if (sufList[idx + 1]) {
        subNetsNum.forEach((subNetObj) => {
          if (sufObj.h >= subNetObj.hostNum && subNetObj.hostNum >= sufList[idx + 1].h) {
            let newNetObj = {
              n: null,
              s: null,
              h: null,
            }
            newNetObj.n = subNetObj.netName
            newNetObj.s = sufObj.s
            newNetObj.h = subNetObj.hostNum
            subNetRangeArray.push(newNetObj)
          }
        })
      }
  });
    // console.log('subNetRangeArray',subNetRangeArray);
    // starting to divide the main Net  to  Sub nets
  let firstNetAddress = MainnetAddress
  for (let i = 0; i < subNetRangeArray.length; i++) {

    /**
     * neded functions :
     *  1- nextNetIpAddress(broadcast,suffix)
     *
     * 2- broadcastCalc(idBinary, suFix)
     *
     * 3-netAddressCalculate(ip, SubMask)
     *
     * 4-getSubNetMask(suf)
     */

     let  NetObj = {
                  netName: null,
                  suffix: null,
                  netId:null,
                  broadcastDisemal:null,
                  broadcastBinary:null,
                  nextNetAddressBin: null,
                  nextNetaddresseDisemal:null,
                  host: null,
                  subMask:null
      }
    if(NetObjArray.indexOf(NetObjArray[i-1]) !==-1){
      console.log('first condition');

      let newNetObjArray = [...NetObjArray]
      // assine the Net Address values to Net object
      let newNetAddBinary = newNetObjArray[i - 1].nextNetAddressBin;
      let newNetAddDisemal = newNetObjArray[i - 1].nextNetaddresseDisemal;   
      NetObj.netId = newNetAddDisemal;
     // assine the Broadcast values to Net object
      let broadcastBinary = broadcastCalc(newNetAddBinary, subNetRangeArray[i].s).broadcasts;
      let broadcastDisemal = broadcastCalc(newNetAddBinary, subNetRangeArray[i].s).broadcastArr;
      NetObj.broadcastBinary = broadcastBinary;
      NetObj.broadcastDisemal = broadcastDisemal;
      // assine the subMask values to Net object
      let subMaskDismal = getSubNetMask(subNetRangeArray[i].s).SubMask;
      let submaskeBinary = getSubNetMask(subNetRangeArray[i].s).maskArr;
      NetObj.subMask = subMaskDismal;
     // assine the nextNetIp values to Net object
      let nextNetAddressBin = nextNetIpAddress(broadcastBinary, subNetRangeArray[i].s).nextNetIpAddress1;
    
     let nextNetaddresseDisemal = nextNetIpAddress(broadcastBinary, subNetRangeArray[i].s).nextNetIpAddressDis;
     NetObj.nextNetAddressBin = nextNetAddressBin;
     NetObj.nextNetaddresseDisemal = nextNetaddresseDisemal;
    // assine the Net Name  value  to Net object
      NetObj.netName = subNetRangeArray[i].n;
      // assine the suffix number value  to Net object
      NetObj.suffix = subNetRangeArray[i].s;
 
      // NetObj.nextNetaddresseDisemal = nextNetIp;
      NetObj.host = subNetRangeArray[i].h;
    //   // push thoe net object to the NetObjArray
       NetObjArray.push(NetObj)

    }else{
      console.log('else');
      NetObj.netName=subNetRangeArray[i].n;
      NetObj.suffix = subNetRangeArray[i].s;
      NetObj.host = subNetRangeArray[i].h;
      // assine the subMask values to Net object
      let subMaskDismal = getSubNetMask(subNetRangeArray[i].s).SubMask;
      let submaskeBinary = getSubNetMask(subNetRangeArray[i].s).maskArr;
      NetObj.subMask = subMaskDismal;
       // assine the Net Address values to Net object
      let netIdAddressBinary = netAddressCalculate(firstNetAddress, submaskeBinary).netAddress;
      let netIdAddressDismal = netAddressCalculate(firstNetAddress, submaskeBinary).netAddressDecimal;
      NetObj.netId = netIdAddressDismal;
      // assine the Broadcast values to Net object
      let broadcastDisemal = broadcastCalc(firstNetAddress, subNetRangeArray[i].s).broadcastArr;
      let broadcastBinary = broadcastCalc(firstNetAddress, subNetRangeArray[i].s).broadcasts;
      NetObj.broadcastDisemal = broadcastDisemal;
      NetObj.broadcastBinary = broadcastBinary;
      
      // assine the nextNetIp  values to Net object
      let nextNetAddressBin = nextNetIpAddress(broadcastBinary, subNetRangeArray[i].s).nextNetIpAddress1;
      let nextNetaddresseDisemal = nextNetIpAddress(broadcastBinary, subNetRangeArray[i].s).nextNetIpAddressDis;
      NetObj.nextNetAddressBin = nextNetAddressBin;
      NetObj.nextNetaddresseDisemal = nextNetaddresseDisemal;
       // push thoe net object to the NetObjArray
      NetObjArray.push(NetObj);

    }
    }
    
     lastResultArray =NetObjArray
    return lastResultArray
}

let obj1 = [{netNum:1,netName:'s',hostNum:500},{netNum:2,netName:'z',hostNum:1},{netNum:3,netName:'a',hostNum:25}];
let subNetsNumSort = obj1 .sort((a, b) => {
  if (a.hostNum < b.hostNum) {
    return 1;
  }
  if (a.hostNum > b.hostNum) {
    return -1;
  }
  return 0;
});
// getSubNets(obj1,hostSuffixList(16),['11000000', '10101000', '00000001', '00000000'])

// /////////////////////////////////////////////////
// / functions end
// /////////////////////////////////////////////////
// / select html Element start
// /////////////////////////////////////////////////////////
const btn = document.querySelector('#btn');
const netsNumberInput = document.querySelector('#nets');
const netsNumberBtn= document.querySelector('#netNum');
const inputContainer = document.querySelector('.input_container')
const form = document.querySelector('#form');
const nameInputs = document.querySelectorAll('.name');
const hostNumbers = document.querySelectorAll('.host');
// ///////////////////////////////////////////////////////////// select html
// Element end /////////////////////////////////////////////////////////
netsNumberBtn.addEventListener('click', (e) => {

  for (let i = 0; i < netsNumberInput.value.trim(); i++) {
   let netCont=  document.createElement("div");
    let labelName = document.createElement("label");
    labelName.setAttribute('for', 'Name')
    labelName.innerText = 'Net Name'
    let inputName = document.createElement("input");
    inputName.setAttribute('id', `name ${i}`);
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('class', 'name')
    inputName.setAttribute('name', 'name')
    let labelHost = document.createElement("label");
    labelHost.innerText = 'How many Hosts'
    labelHost.setAttribute('for', 'host')
    let inputHost = document.createElement("input");
    inputHost.setAttribute('id', `host ${i}`)
    inputHost.setAttribute('type', 'number')
    inputHost.setAttribute('class', 'host')
    inputHost.setAttribute('name', 'host')
    let br = document.createElement("br");
    netCont.append(labelName);
    netCont.append(inputName);
    netCont.append(labelHost);
    netCont.append(inputHost);
    form.append(netCont);
  }

})

/** add event to the button  */

btn.addEventListener('click', (e) => {
  e.preventDefault;
 
  
  //select Ip input and Suffix input  
   
  const ipInput = document.querySelector('#ip');
  const sufInput = document.querySelector('#sufik')



  let ipInputValue = ipInput.value.split('.');
  let idBinary = [];
  let y;
  ipInputValue.forEach(element => {
    y = convertToBinary(element)
    idBinary.push(y)
  });
  let suFix = sufInput.value;
  let availableHost = Math.pow(2, 32 - suFix) - 2;
  let freiBit = 32 - suFix;
/**
     * my functions :
     *  1- nextNetIpAddress(broadcast,suffix)
     *
     * 2- broadcastCalc(idBinary, suFix)
     *
     * 3-netAddressCalculate(ip, SubMask)
     *
     * 4-getSubNetMask(suf)
     * 
     * 5-getSubNets(subNetsNum, sufList, MainnetAddress)
     */
  ;
  
  let MainNetAddress = netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr).netAddressDecimal;
  let MainNetAddressBin = netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr).netAddress;
  console.log(MainNetAddressBin);
  let mainBroadcast = broadcastCalc(idBinary, suFix).broadcastArr;
  let MainHosts = getSubNetMask(suFix).hostNumber
  let MainNetMaskOutput = getSubNetMask(suFix).SubMask;
  let mainSubMasksBinary = getSubNetMask(suFix).maskArr;
  const mainNetObj = {
    hosts:MainHosts,
    Ip:ipInput.value.trim,
    ipBinary:idBinary,
    netAddress: MainNetAddress,
    netAddBin:MainNetAddressBin,
    NetMask:MainNetMaskOutput,
    NetMaskBinary:mainSubMasksBinary,
    broadcast:mainBroadcast,
  }
    //Ip Binary output ipBinary
    const ipBinary = document.querySelector('#ipBinary').children.item(1);
      ipBinary.innerHTML = mainNetObj.ipBinary.toString().replaceAll(",",".");
   //hosts output
    const hostOutput = document.querySelector('#host').children.item(1);
      hostOutput.innerHTML = mainNetObj.hosts
   //subMask  output
    const subMaskDec = document.querySelector('#subMaskDec').children.item(1);
      subMaskDec.innerHTML = mainNetObj.NetMask.toString().replaceAll(",", ".");
   // IpBinary Output
   const netMaskBin = document.querySelector('#netMaskBin').children.item(1);
    netMaskBin.innerHTML = mainNetObj.NetMaskBinary.toString().replaceAll(",",".");
   //Net Address Output

   const netId = document.querySelector('#netId').children.item(1);
    netId.innerHTML = mainNetObj.netAddress.toString().replaceAll(",",".");
   // Net Masks   output
    const netAddBin = document.querySelector('#netAddBin').children.item(1);
      netAddBin.innerHTML = mainNetObj.netAddBin.toString().replaceAll(",",".");
   // Broadcast output
   const broadcastOutput = document.querySelector('#broadcast').children.item(1);
    broadcastOutput.innerHTML = mainNetObj.broadcast.toString().replaceAll(",",".");
 


  if(form.children){
      let subNetsNum=[]
      for (let index = 0; index < form.children.length; index++) {
        let inPutObj ={
        netName: form.children.item(index).children.item(1).value,
        netsNum: index + 1,
        hostNum: form.children.item(index).children.item(3).value
        }
        subNetsNum.push(inPutObj)
      }
    
      let mainIp = {
          ip:idBinary,
          suffix: Number(sufInput.value)
      }

      let subNetsNumSort = subNetsNum.sort((a, b) => {
        if (a.hostNum < b.hostNum) {
          return 1;
        }
        if (a.hostNum > b.hostNum) {
          return -1;
        }
        return 0;
      });
    
    const calculationResult0 = getSubNets(subNetsNumSort, hostSuffixList(mainIp.suffix), mainIp.ip);
    // to remove the repeted elment in array  
    let calculationResult = [...new Set(calculationResult0)]
    console.log(calculationResult);
    
      calculationResult.forEach(element=>{

      const netName = document.createElement("th")
        netName.classList.add('netName')
        netName.innerText = 'subNet Name :'
      const netNameResult =document.createElement("td")
        netNameResult.innerText = element.netName

      const host =document.createElement("th")
        host.innerText = 'Hosts Number :'
      const hostResult =document.createElement("td")
        hostResult.innerHTML = element.host
      const suffix =document.createElement("th")
        suffix.innerText = 'suffix Number :'
      const suffixResult =document.createElement("td")
        suffixResult.innerHTML = element.suffix
      const NetId =document.createElement("th")
        NetId.innerText = 'Net address :'
      const NetIdResult =document.createElement("td")
        NetIdResult.innerHTML = element.netId.toString().replaceAll(",", ".");
      const BroadCast =document.createElement("th")
        BroadCast.innerText = 'BroadCast : '
      const BroadcastResult =document.createElement("td")
        BroadcastResult.innerHTML = element.broadcastDisemal.toString().replaceAll(",", ".");
        let tr1 = document.createElement("tr");
        let tr2 = document.createElement("tr");

      const subNetItem =document.createElement("table")
        subNetItem.classList.add('subNetItem');
        subNetItem.classList.add('table');

      const resultContainer = document.querySelector('.resultContainer');

        resultContainer.append(subNetItem)
        subNetItem.append(tr1);
        subNetItem.append(tr2);
        tr1.append(netName);
        tr2.append(netNameResult);

        tr1.append(host);
        tr2.append(hostResult);

        tr1.append(suffix);
        tr2.append(suffixResult);
        tr1.append(NetId);
        tr2.append(NetIdResult);

        tr1.append(BroadCast);
        tr2.append(BroadcastResult);
      })

  }



})



