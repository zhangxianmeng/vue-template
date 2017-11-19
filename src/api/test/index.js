import axios from 'axios'

function getUrl(url) {
  let baseUrl = ''
  return baseUrl + url
}

function test(reqData) {
  reqData = reqData || null
  return axios({
    method: 'post',
    url: getUrl('/mobi/getAllNews.php'),
    data:reqData,
    timeout: 10000,
    headers: {"content-type": "application/json;charset=utf-8"}
  }).then((res)=>{
    return Promise.resolve(res.data)
  }).catch(function (error) {
    return Promise.resolve(error)
  })
}

export default {
  test
}

