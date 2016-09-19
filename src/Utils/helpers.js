import axios from 'axios';


function searchGit(add){
  let address=`https://api.github.com/users/${add}`
  return axios.get(address)
    .then((res) => ({
      data:res.data
    }))
    .catch(function (error) {
      alert(error);
    });
}
export {searchGit}


function getJson(){
  let address=`https://raw.githubusercontent.com/songyingli/demodata/master/card.json?${Math.random()}`
  return axios.get(address)
    .then((res) => ({
      getJson:res.data
    }))
    .catch(function (error) {
      alert(error);
    });
}
export {getJson}


function getMd(add){
  let address=`https://raw.githubusercontent.com/songyingli/demodata/master/blog/${add}.md`
  return axios.get(address)
    .then((res) => ({
      getMd:res.data
    }))
    .catch(function (error) {
      alert(error);
    });
}
export {getMd}
