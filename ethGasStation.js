const rp = require('request-promise')
const convertToWei = require('./helpers').convertToWei

const getPrice = async () => {
  const response = await rp({
    uri: 'https://ethgasstation.info/json/ethgasAPI.json',
    json: true
  })
  return convertToWei(response.fast, 100000000)
}

exports.getPrice = getPrice
