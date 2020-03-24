import {baseUrl} from './env'

export default async(url='',data={},type='GET',method='fetch') => {
     type = type.toUpperCase();
     url = baseUrl + url;
     if(type == 'GET'){
         let dataStr = '';
         Object.keys(data).forEach(key =>{
             dataStr += key + '=' + '&';
         })
         if(dataStr !== ''){
             dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'));
             url = url + '?' + dataStr;
         }
     }
    //  if(window.fetch && method == 'fetch'){
    //      let requestConfig = {
    //          credentials:'include',
    //          method:type,
    //          headers:{
    //              'Accept':'application/json',
    //              'Content-Type':'application/json'
    //          },
    //          mode:'cors',
    //          cache:'force-cache'
    //      }
    //      if(type == 'POST'){
    //          Object.defineProperty(requestConfig,'body',{
    //              value:JSON.stringify(data)
    //          })
    //      }
    //      try{
    //          const response = await fetch(url,requestConfig);
    //          const responseJson = await response.json();
    //          return responseJson;

    //      }catch(error){
    //          throw new Error(error)

    //      }
    //  }else{
         return new Promise((resolve,reject) =>{
             let xml;
             if(window.XMLHttpRequest){
               xml = new XMLHttpRequest();
             }else{
               xml = new ActiveXObject();
             }
             let sendDate = '';
             if(type == 'POST'){
                 sendDate = JSON.stringify(data);
             }
             xml.open(type,url,true);
             xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
             xml.send(sendDate);
             xml.onreadystatechange = () =>{
                 if(xml.readyState == 4){
                     if(xml.status == 200){
                         let obj = xml.response;
                         if(typeof obj !== 'object'){
                             obj = JSON.parse(obj)
                         }
                         resolve(obj)
                     }else{
                         reject(xml);
                     }
                 }
             }
         })
    //  }






}