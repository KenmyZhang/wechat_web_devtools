'use strict';!function(require,directRequire){const a=require('fs'),b=require('path');module.exports={getFunctionInfo:(a,c)=>{let d=b.posix.relative(a,c).split('/');const e=d.shift();return{filePath:d.join('/'),functionName:e}},checkFunctionDirectory:(b)=>{if(!a.existsSync(b))throw new Error(`目标目录 ${b} 不存在`);let c=a.statSync(b);if(!c.isDirectory())throw new Error(`目标 ${b} 需为目录`);let d=a.readdirSync(b);if(!d||0>=d.length)throw new Error(`目标目录 ${b} 为空目录`)}}}(require('lazyload'),require);