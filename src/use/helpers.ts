// This is from David Walshes Blog Post 
// https://davidwalsh.name/javascript-debounce-function
// A very simplified but effective version of Underscores debounce function

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

interface debounceOptions {
  immediate?: undefined | boolean, 
  catchCallback?: undefined | null | (()=>void), 
  catchFirst?:undefined | boolean
}

export function debounce ( func:()=>void, wait:number, options:debounceOptions={}) {
  let timeout:ReturnType<typeof setTimeout>|null|undefined;
  return function(this:void, ...args:any) {
    var context = this
    var later = function() {
      timeout = null;
      if (!options?.immediate) func.apply(context, args);
    };
    var callNow = options?.immediate && !timeout;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) { func.apply(context, args)}
    else if (options?.catchCallback) { 
      options.catchCallback() 
      if (options?.catchFirst) options.catchCallback = null
    };
  };
};


// https://jsfiddle.net/jonathansampson/m7G64/
export function throttle (callback:()=>void, limit:number) { 
  var wait = false;              // Initially, we're not waiting
                                 // We return a throttled function
  return function (this:void, ...v:any) {
    if (!wait) {                 // If we're not waiting
      callback.call(v);          // Execute users function
      wait = true;               // Prevent future invocations
      setTimeout(() => {         // After a period of time
        wait = false;            // And allow future invocations
      }, limit);
    }
  }
}


// for all inputs, if not an array, it will wrap it.
export const ensureArr = (...args:any) => args.map( (v:any) => Array.isArray(v) ? v : [v])


// Get device OS (web version)
export function getOS() {
  //@ts-ignore
  var platform = navigator?.userAgentData?.platform || navigator.platform 
  var userAgent = navigator.userAgent

  if (/mac|Mac/.test(platform)) return 'Mac';

  if (/iPhone|iPad|iPod/.test(platform)) return 'iOS';

  if (/^win|^Win/.test(platform)) return 'Win';

  if (/Android/.test(userAgent)) return 'Android'; 
  
  if (/Linux/.test(platform)) return 'Linux';

  return null;
}


// add commas to long numbers
export function commafy(n:string|number) {
  if (!['string', 'number'].includes(typeof n)) return
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


/*** 
  Proxy with Target Access 
  (sets "getPrototypeOf" handler, but its rarely ever used...)
***/
// creates proxies with OG-target access
function MyProxy (this: any, target: any[] | Object , handler = {}) {
  return new Proxy(
    structuredClone( this.OG = target ),
    {getPrototypeOf: target => this.OG, ...handler}
  )
}
/*
  let tmp = MyProxy({test: 999})
  tmp['pushed'] = 555
  console.log( tmp, Object.getPrototypeOf(tmp) )
*/

// replaces the proxy class and can generate new proxies with OG-target access
/* let oldProxy;
Proxy = (() => {
  if ('wrapped' in Proxy) return Proxy  // prevents over-wrapping
  oldProxy = Proxy  // if ur still leaving access to the old one, whats the point... just rename the new version
  function wrapper (target, handler={}) {
    return new oldProxy(
      structuredClone(OG = target), 
      { getPrototypeOf:()=>OG, ...handler }
    )
  }
  wrapper.wrapped = true
  return wrapper
})()
 */


/*** 
  Better Switch
  Note: could use Map and set, thou gotta catch hasOwnProperty and use .has() instead
***/
//https://gist.github.com/joelnet/9f0ec931e37bb3ed6d8f434ba908b715
const executeIfFunction = (f: Function, ...args:any) =>
  typeof f === 'function' ? f(...args) : f

const switchcase = (cases: Object | Array<any> | Map<any, any> ) => (defaultCase: any) => (key:any) => {
  if (cases instanceof Map) return cases.has(key) ? cases.get(key) : defaultCase
  // @ts-ignore: a bad type just defaults, nbd
  return cases.hasOwnProperty(key) ? cases[key] : defaultCase 
}

// Switch alternative witch function support
const betterSwitch = (cases: Object | Array<any> | Map<any, any> ) => (defaultCase: any) => (key:string|number, ...args:any) =>
  executeIfFunction(switchcase(cases)(defaultCase)(key), ...args)


// Arr intersect
function intersect(arr1: any[], arr2: any[]) {
  return arr1.filter(el => arr2.includes(el))
}


// Auth wrap
/* let authorize = (auth:any) : boolean => { console.log('requires auth function'); return false}
const authWrap = (auth:any) => (ogF:()=>any, ...args:any) => {
  if (authorize(auth)) return ogF.apply(this, args)
  console.log("just what do you think you're doing Dave?")
} */


/***
 Basic Wrapper 
***/
//wrap is a function that takes original function
function defaultWrap(this:any, ogF:()=>void, ...args:any) {
  //console.log('pre-wrap')
  ogF.apply(this, args)
  //console.log('post-wrap')
}

function wrapper (ogFunc:()=>any, wrap = defaultWrap) {
  return function () {
    /* work before the function is called */
    try {
      return wrap(ogFunc, arguments)
    }
    catch (e) {
      /* work in case there is an error */
      throw e;
    }
  }
}


// timeConversion
function timeConversion(millisec:number) {
  let seconds = Math.round(millisec / 1000);
  let minutes = Math.round(millisec / (1000 * 60));
  let hours = Math.round(millisec / (1000 * 60 * 60));
  let days = Math.round(millisec / (1000 * 60 * 60 * 24));

  if (seconds < 60) {
      return seconds + " seconds";
  } else if (minutes < 60) {
      return minutes + " minutes";
  } else if (hours < 24) {
      return hours + " hours";
  } else {
      return days + " days"
  }
}

function solveTime (time:number) {
  const diff = Date.now() - time
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7,
        month = day * 30, // sort of
        year = day * 365; // usually

  const times = Object.entries({second, minute, hour, day, week, month, year })
  let [duration, str, i] = [Math.floor(diff / year), 'year', 1]
  for (const [k, time] of times) {
    if (i === times.length) break
    if ( diff < times[i][1] ) { [duration, str] = [Math.floor(diff / time), k]; break }
    i++
  }
  return `${duration} ${str + (duration===1 ? '' : 's') }`
}



//random from array
const rnd = (arr:any[]) => { return arr[Math.floor(Math.random() * arr.length)] };
// option to return selected index may be nice too

// weighted random from dict


// Adds alias to Object (what if og and alias are equal?)
function addAlias(obj: object, og: string, alias: string ) {
  Object.defineProperty(obj, alias, { get() { return this[og] } });
}

function aliasAssignment(commandKey: Record<string, any>, alias: string | Array<string>, val: any) {
  // Assign one or many aliases
  switch (alias.constructor) {
    case String:
      commandKey[alias as string] = val
      break;
    case Array:
      //alias.forEach( a => commandKey[a] = val )   // redundant
      //alias.forEach((a, i) => commandKey[a] = !i ? val : commandKey[alias[0]])  // self-ref
      (alias as string[]).forEach((a:string, i:number) => {   // getters
        return !i ? commandKey[a] = val : addAlias(commandKey, alias[0] as string, a)
      }) 
      break;
    default:
      console.log(`CommandRouter Error: invalid alias type for ${alias}`)
  }
  return commandKey
}



/***
  Sleep / Wait

  // NOTE: looping with delay
  //  - setInterval(foo, n)
  //  - for() {await sleep(n)}
  //  - recursive await foo() {await bar(); foo()} // need sentinel/iterator/yield/break conditions
***/
let sleep, wait;
sleep = wait = async (ms:number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}



function between(x:number, min:number, max:number, inclusive = true) {
  if (inclusive === true) return x >= min && x <= max;
  if (inclusive === false) return x > min && x < max;
  if (Array.isArray(inclusive)) {
    return (
      (inclusive[0] ? x >= min : x > min)
        &&
      (inclusive[0] ? x <= max : x < max)
    )
  }
}



/*
  An easier way to add ans subtract hours

  uses prototype, best to opt-in or rewrite.
*/
/* 
  Date.prototype.addHrs = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }

  Date.prototype.hrDiff = function(dt2) {
    const milliseconds = Math.abs(dt2 - this);
    return milliseconds / 36e5 // ms in an hr
  } 
*/


/***
 stringify objects w/ functions
***/

function JSONstringifyWithFuncs(obj:object|any[]) {
  interface PrintObj extends Object{
    toJSON?(): Object;
  }

  interface PrintArr extends Array<any> {
    toJSON?(): Array<any>;
  }

  (Object.prototype as PrintObj).toJSON = function() {
    let sobj = {};
    for (let i in this) 
      if (this.hasOwnProperty(i)) {
        // @ts-ignore 
        sobj[i] = typeof this[i] == 'function' ? this[i].toString() : this[i]
      }
    return sobj;
  };
  (Array.prototype as PrintArr).toJSON = function() {
    let sarr = [];
    for (let i = 0 ; i < this.length; i++) {
      sarr.push(typeof this[i] == 'function' ? this[i].toString() : this[i])
    }
    return sarr;
  };

  var str = JSON.stringify(obj);

  delete (Object.prototype as PrintObj).toJSON;
  delete (Array.prototype as PrintArr).toJSON;

  return str; //.replaceAll(/\\r\\n/g, '\n')
}

// version without using prototype.
function JSONstringifyWithFuncs2 (obj: object|any[]) {
  let isArray = Array.isArray(obj)
  let output = []

  for(let [k,v] of Object.entries(obj)) {
    let strFn = typeof v == 'function' ? v.toString() : v
    output.push(isArray ? strFn : [k, strFn])
  }

  return JSON.stringify(isArray ? output : Object.fromEntries(output))
}


/*
  // I don't think either of them are deep tho...
  // maybe check if iterable and traverse downward
  function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }
*/





/***
 Import vs CMD-line call
***/
/* if (require.main === module) {
  console.log('called directly');
} else {
  console.log('required as a module');
} */




/*********   FUTURE   **********/
future: {
    

  /***
   Simple reactive system
  (not deep, no proxy)
  just a SubManager that watches for changes
  ***/




  /***
    My logging debug system idea

    tag based logging:
      - tagLog( value  , ['tag1', 'tag2'])

    listen(['tag1']) // all tagLog's with tag1 will print
  ***/



  // destructure patterns


  // flip kv object relation
  // duplicates to arr



  /*** 
    Proxy with Time Travel
  ***/


  // ... ?



  /***
    Deep Object Re-mapper
  ***/
}
