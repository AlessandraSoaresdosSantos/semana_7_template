import {convertJsonToObject, readDataPeople} from './class/People.js'
import {getDataFromURL} from './functions/function-promise.js'

const divTela = document.querySelector('#div-tela')
const apiURL = "https://swapi.dev/api/people/1";

//using Promise
getDataFromURL(apiURL)
.then(result  =>
    {
    let json = convertJsonToObject(result);
      let jsonResult = readDataPeople(json);
      for (var key in jsonResult)
      {
        var value = jsonResult[key];
        divTela.innerHTML += `<li>${key} : ${value} </li>`;
      } 
   })
.catch(error => console.log(error))
.finally()

 