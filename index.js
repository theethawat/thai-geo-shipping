const RemoteArea = require('./remoteArea.json')
const PostcodeRegion = require('./postcodeRegion.json')
const _ = require('lodash')
/**
 * @function checkIfRemoteArea
 * @description check if your postcode is remote area in shipping provider in Thailand or not
 * @param {string} postcode postcode of the area that you want to check
 * @param {string} provider use flash,kerry,thaipost now available only flash
 * @returns {boolean} yes or no
 */
function checkIfRemoteArea(postcode, provider) {
  if (provider == 'flash') {
    let isRemoteAreaResult = false
    RemoteArea.flash.forEach((element) => {
      if (postcode == element) {
        isRemoteAreaResult = true
      }
    })
    return isRemoteAreaResult
  } else {
    return undefined
  }
}

/**
 * @function findRegion
 * @description Find that your postcode located in what region in Thailand, when use
 * Thailand has 4 regions and 1 Bangkok.
 * @param {string} postcode postcode of place where you want to search Region
 * @returns {string} region it will be 'bangkok','north','northeast','central', and 'south'
 */
function findRegion(postcode) {
  if (typeof postcode !== 'string') {
    postcode = postcode.toString()
  }
  let firstTwoAlphabet = postcode.slice(0, 2)
  let region
  if (_.includes(PostcodeRegion.bangkok, firstTwoAlphabet)) {
    region = 'bangkok'
  } else if (_.includes(PostcodeRegion.central, firstTwoAlphabet)) {
    region = 'central'
  } else if (_.includes(PostcodeRegion.east, firstTwoAlphabet)) {
    region = 'central'
  } else if (_.includes(PostcodeRegion.west, firstTwoAlphabet)) {
    region = 'central'
  } else if (_.includes(PostcodeRegion.north, firstTwoAlphabet)) {
    region = 'north'
  } else if (_.includes(PostcodeRegion.northeast, firstTwoAlphabet)) {
    region = 'northeast'
  } else if (_.includes(PostcodeRegion.south, firstTwoAlphabet)) {
    region = 'south'
  } else {
    region = undefined
  }
  return region
}

/**
 * @function findRegionGeoType
 * @description Find that your postcode located in what region in Thailand, when use
 * Thailand has 6 regions and 1 Bangkok.
 * @param {string} postcode postcode of place where you want to search Region
 * @returns {string} region it will be 'bangkok','north','northeast','central','west','east' and 'south'
 */
function findRegionGeoType(postcode) {
  if (typeof postcode !== 'string') {
    postcode = postcode.toString()
  }
  let firstTwoAlphabet = postcode.slice(0, 2)
  let region
  if (_.includes(PostcodeRegion.bangkok, firstTwoAlphabet)) {
    region = 'bangkok'
  } else if (_.includes(PostcodeRegion.central, firstTwoAlphabet)) {
    region = 'central'
  } else if (_.includes(PostcodeRegion.east, firstTwoAlphabet)) {
    region = 'east'
  } else if (_.includes(PostcodeRegion.west, firstTwoAlphabet)) {
    region = 'west'
  } else if (_.includes(PostcodeRegion.north, firstTwoAlphabet)) {
    region = 'north'
  } else if (_.includes(PostcodeRegion.northeast, firstTwoAlphabet)) {
    region = 'northeast'
  } else if (_.includes(PostcodeRegion.south, firstTwoAlphabet)) {
    region = 'south'
  } else {
    region = undefined
  }
  return region
}

exports.checkIfRemoteArea = checkIfRemoteArea
exports.findRegionGeoType = findRegionGeoType
exports.findRegion = findRegion
