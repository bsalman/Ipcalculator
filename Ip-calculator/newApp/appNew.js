
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
    const decimalArray= mask.map(element => convertToDecimal(element))
    result.maskArr = mask;
    result.hostNumber = hostNum;
    result.SubMask = decimalArray;
    return result
  }
  /************************************************
   *
   * @param {*} ip
   * @param {*} SubMask
   * @returns
   **************************************************/
  const netAddressCalculate = (ip, SubMask) => {
    netAddress = [];
    resultArray = [];
    netNetAddress =[];
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
        netNetAddress.push(ip[0]);
      }
      if (obj.octNum === 1 && obj.firstIndex === -1) {
        netAddress.push(ip[1]);
        netNetAddress.push(ip[1]);
      } else if (obj.octNum === 1 && obj.firstIndex != -1) {
        netAddress.push(ip[1].slice(0, obj.firstIndex) + SubMask[1].slice(obj.firstIndex, obj.lastIndexOf + 1)); 
      }
      if (obj.octNum === 2 && obj.firstIndex === -1) {
        netAddress.push(ip[2])
        netNetAddress.push(ip[2]);
      } else if (obj.octNum === 2 && obj.firstIndex != -1) {
        netAddress.push(ip[2].slice(0, obj.firstIndex) + SubMask[2].slice(obj.firstIndex, obj.lastIndexOf + 1))
      }
      if (obj.octNum === 3 && obj.firstIndex === -1) {
        netAddress.push(ip[3])
        netNetAddress.push(ip[3]);
      } else if (obj.octNum === 3 && obj.firstIndex != -1) {
        netAddress.push(ip[3].slice(0, obj.firstIndex) + SubMask[3].slice(obj.firstIndex, obj.lastIndexOf + 1))
      }
    })
  
    const netAddressBinary = netAddress.map(element => convertToDecimal(element));
    
    return netAddressBinary;
  }
  /********************************************************
   * function Broadcast Calculator
   * @param {*} idBinary is a array of strings
   * @param {*} suFix is a number
   * @param {*} availableHost ia a number
   * @returns
   *********************************************************/
  const broadcastCalc = (idBinary, suFix, availableHost) => {
    if (availableHost <= 254) {
      broadcastArr = [];
      broadcastArr.push(netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr, availableHost)[0]);
      broadcastArr.push(netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr, availableHost)[1]);
      broadcastArr.push(netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr, availableHost)[2]);
      broadcastArr[3] = 255 - getSubNetMask(suFix).SubMask[3];
    }
    if (availableHost > 254 && availableHost <= 65534) {
      broadcastArr = [];
      broadcastArr.push(netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr, availableHost)[0]);
      broadcastArr.push(netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr, availableHost)[1]);
      broadcastArr[2] = 255 - getSubNetMask(suFix).SubMask[2]
      broadcastArr[3] = 255;
    }
    if (availableHost > 65534 && availableHost <= 16777214) {
      broadcastArr = [];
      broadcastArr.push(netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr, availableHost)[0]);
      broadcastArr[1] = 255 - getSubNetMask(suFix).SubMask[1];
      broadcastArr[2] = 255;
      broadcastArr[3] = 255;
    }
    return broadcastArr
  }
  
  /**
   *
   */
  /** divide the main net  to subnets */
  
  // sorting the subnets inputs  by hostsNumbers

  /**********************************************
   * create comparing list
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
   * @param {*} subNetsNum
   * @param {*} sufList
   * @param {*} ip
   ************************************************/
  const getSubNets = (subNetsNum, sufList, MainnetAddress) => {
    let subNetRangeArray = []
    let  NetObjArray =[];
    let lastResultArray ;
    let binaryMainNetAddress = MainnetAddress.map(element=>convertToDecimal(element))
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
        let firstNetAddress = MainnetAddress
        let counter =0
        for (let i = 0; i < subNetRangeArray.length; i++) {
        let hostCounter = Math.pow(2,32 -subNetRangeArray[i].s)-2;
        firstNetAddress[3]= ToBinary(hostCounter)
        let BroadcastCounter = []
        let  NetObj = {
        netName: null,
          suffix: null,
         netId:null,
         broadcast:null,
         host:null
        }
        if(subNetRangeArray[i-1]){
            let hostCounter = Math.pow(2,32 -subNetRangeArray[i].s)-2;
            let lastHostCounter = Math.pow(2,32 -subNetRangeArray[i-1].s)-2
            counter += hostCounter +lastHostCounter
            let newNetId =[...NetObjArray[i-1].broadcast] 
            let broadcast = null 
              if (lastHostCounter <= 254 && hostCounter <= 254 ){
                console.log('cond1');
                  BroadcastCounter[0]= binaryMainNetAddress[0]
                  BroadcastCounter[1]= binaryMainNetAddress[1]
                  BroadcastCounter[2]= binaryMainNetAddress[2]
                  console.log(BroadcastCounter[2]);
                  BroadcastCounter[3] = hostCounter+newNetId[3]+2;
                let newNetIdBin = NetObjArray[i-1].broadcast.map(element => ToBinary(element)) 
                newNetId[3]= newNetId[3]+1;
                broadcast = broadcastCalc(newNetIdBin,subNetRangeArray[i].s,subNetRangeArray[i].h)
                console.log('sehr wischtig',broadcast);
                }
                else if(lastHostCounter > 254 && lastHostCounter <= 65534 && hostCounter <= 254 ){
                  console.log('cond2');
                  BroadcastCounter[0]= binaryMainNetAddress[0]
                  BroadcastCounter[1]= binaryMainNetAddress[1]
                  BroadcastCounter[2]= newNetId[2]+1
                  BroadcastCounter[3] = hostCounter+1;

                let newNetIdBin = NetObjArray[i-1].broadcast.map(element => ToBinary(element)) 
                newNetId[2]=newNetId[2]+1;
                newNetId[3]= 0;
                broadcast = broadcastCalc(newNetIdBin,subNetRangeArray[i].s,subNetRangeArray[i].h)
                console.log('sehr wischtig',broadcast);
                }
              else if (lastHostCounter > 254 && lastHostCounter <= 65534 && hostCounter > 254 && hostCounter <= 65534) {
                console.log('cond3');
                BroadcastCounter[0]= binaryMainNetAddress[0]
                BroadcastCounter[1]= binaryMainNetAddress[1]
                BroadcastCounter[2] = newNetId[2]+2;
                BroadcastCounter[3]= 25

                newNetId[2]= newNetId[2]+1;
                newNetId[3]=0
                let newNetIdBin = newNetId.map(element => ToBinary(element))
                broadcast = broadcastCalc(newNetIdBin,subNetRangeArray[i].s,hostCounter)
              }else if (lastHostCounter > 65534 && lastHostCounter <= 16777214) {
                console.log('cond1');
                BroadcastCounter[0]= binaryMainNetAddress[0]
                BroadcastCounter[1]= binaryMainNetAddress[1]
                BroadcastCounter[2] = newNetId[2]+2;
                BroadcastCounter[3]= 25
                newNetId[1] = newNetId[1]+1;
                newNetId[2]=0
                newNetId[3]=0
                let newNetIdBin = newNetId.map(element => ToBinary(element))
                broadcast = broadcastCalc(newNetIdBin,subNetRangeArray[i].s,hostCounter)
              }
              NetObj = {
                netName: subNetRangeArray[i].n,
                suffix: subNetRangeArray[i].s,
                netId: newNetId,
                broadcast:BroadcastCounter,
                host:subNetRangeArray[i].h
              }
                  NetObjArray.push(NetObj) 
        }else{
          let hostCounter = Math.pow(2,32 -subNetRangeArray[i].s);
          let subMasks = getSubNetMask(subNetRangeArray[i].s).maskArr
          let netAddress = netAddressCalculate(firstNetAddress,subMasks);
          let broadcast = broadcastCalc(firstNetAddress,subNetRangeArray[i].s,hostCounter)
          NetObj = {
              netName: subNetRangeArray[i].n,
              suffix: subNetRangeArray[i].s,
              netId: binaryMainNetAddress,
              broadcast:broadcast,
              host:subNetRangeArray[i].h
          }
          NetObjArray.push(NetObj)  
        }
        let uniqueNetObjArray = [...new Set(NetObjArray)];
        lastResultArray=uniqueNetObjArray
      console.log(lastResultArray);
      }
      return lastResultArray
  }
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
    const ipInput = document.querySelector('#ip');
    const sufInput = document.querySelector('#sufik')
    let ip = ipInput.value.split('.');
    let suFix = sufInput.value;
    let availableHost = Math.pow(2, 32 - suFix) - 2;
    let freiBit = 32 - suFix;
    let idBinary = [];
    let y;
    ip.forEach(element => {
      y = convertToBinary(element)
      idBinary.push(y)
    });
    ///////////////////////////////////////////
  // calling the function 
  //////////////////////////////////////////
  console.log(idBinary);
  console.log(getSubNetMask(suFix).maskArr);
    netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr);
    // host <= 16777214 host > 65534 host <= 65534 host > 254 host <= 254
    broadcastCalc(idBinary, suFix, availableHost);
    let netAddress = netAddressCalculate(idBinary, getSubNetMask(suFix).maskArr).toString()
    let dotedNetAddress = netAddress.replaceAll(",", ".")
    let netMaskOutput = getSubNetMask(suFix).SubMask;
// create an Main Net Objet  Object to set out put
    let mainNetObj = {
            hosts: getSubNetMask(suFix).hostNumber,
            Ip:ip,
            ipBinary: idBinary.toString().replaceAll(",", "."),
            netAddress: dotedNetAddress,
            NetMask: getSubNetMask(suFix).maskArr,
            NetMaskBinary: netMaskOutput.toString().replaceAll(",", "."),
            broadcast: broadcastArr.toString().replaceAll(",", ".")
    }
    //hosts output
    const hostOutput = document.querySelector('#host').children.item(1);
    hostOutput.innerHTML = mainNetObj.hosts
    // IpBinary Output
    const ipBinary = document.querySelector('#ipBin').children.item(1);
    ipBinary.innerHTML = mainNetObj.ipBinary;
    //Net Address Output
    const netAddOutput = document
      .querySelector('#netAdd').children.item(1);
    netAddOutput.innerHTML = mainNetObj.netAddress;
  
    const netMaskBin = document.querySelector('#netMaskBin').children.item(1);
    netMaskBin.innerHTML = mainNetObj.NetMaskBinary;
    // Net Masks   output
    const netMask = document
      .querySelector('#netMask')
      .children
      .item(1);
    netMask.innerHTML = mainNetObj.NetMask;
    // Broadcast output
    const broadcastOutput = document
      .querySelector('#broadcast')
      .children
      .item(1);
    broadcastOutput.innerHTML = mainNetObj.broadcast;
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
  // 
    let subNetsNumSort = subNetsNum.sort((a, b) => {
      if (a.hostNum < b.hostNum) {
        return 1;
      }
      if (a.hostNum > b.hostNum) {
        return -1;
      }
      return 0;
    });
    
    // .map(element=>convertToDecimal(element)
    const calculationResult = getSubNets(subNetsNumSort, hostSuffixList(mainIp.suffix),mainIp.ip );
    if (calculationResult) {
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
      NetIdResult.innerHTML = element.netId
      const BroadCast =document.createElement("th")
      BroadCast.innerText = 'BroadCast : '
      const BroadcastResult =document.createElement("td")
      BroadcastResult.innerHTML = element.broadcast
      let tr1 = document.createElement("tr")
      let tr2 = document.createElement("tr")
  
      const subNetItem =document.createElement("table")
      subNetItem.classList.add('subNetItem');
      subNetItem.classList.add('table');
      const resultContainer = document.querySelector('.resultContainer')
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
    }
    
  })
  
  
  
  