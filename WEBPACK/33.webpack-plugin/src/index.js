import { flatten, join } from 'lodash'


/**
 * import {flatten,join} from 'lodash' 转换以后
 * import flatten from 'lodash/flatten'
 * import join from 'lodash/join'
 */

// let _ = require("lodash")
// import flatten from 'lodash/flatten'


let arr = [1, [2, 3], [4, [5]]]
let result = _.flatten(arr)
console.log(result)