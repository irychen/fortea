import queryJsonStr from "./queryJsonStr"
import base64, { Base64 } from "./base64"
import delayAsync from "./delayAsync"
import classNames from "./classNames"
import cloneArrayShallow from "./cloneArrayShallow"
import cloneDeep from "./cloneDeep"
import cloneShallow from "./cloneShallow"
import isNil from "./isNil"
import isNumber from "./isNumber"
import isString from "./isString"
import toNumber from "./toNumber"
import map from "./map"
import mergePath from "./mergePath"
import isInteger from "./isInteger"
import isFunc from "./isFunc"
import isBoolean from "./isBoolean"
import isObject from "./isObject"
import toBoolean from "./toBoolean"
import toPercentage from "./toPercentage"
import skipTake from "./skipTake"
import isTokenExpired from "./isTokenExpired"
import arrayUpsert from "./arrayUpsert"
import isArray from "./isArray"
import isEmpty from "./isEmpty"
import isClient from "./isClient"

const fortea = {
    arrayUpsert,
    base64,
    Base64,
    classNames,
    cloneArrayShallow,
    cloneDeep,
    cloneShallow,
    delayAsync,
    isArray,
    isBoolean,
    isClient,
    isEmpty,
    isFunc,
    isInteger,
    isNil,
    isNumber,
    isObject,
    isString,
    isTokenExpired,
    map,
    mergePath,
    queryJsonStr,
    skipTake,
    toBoolean,
    toNumber,
    toPercentage,
}

export {
    fortea as default,
    arrayUpsert,
    base64,
    Base64,
    classNames,
    cloneArrayShallow,
    cloneDeep,
    cloneShallow,
    delayAsync,
    isArray,
    isBoolean,
    isClient,
    isEmpty,
    isFunc,
    isInteger,
    isNil,
    isNumber,
    isObject,
    isString,
    isTokenExpired,
    map,
    mergePath,
    queryJsonStr,
    skipTake,
    toBoolean,
    toNumber,
    toPercentage,
}
