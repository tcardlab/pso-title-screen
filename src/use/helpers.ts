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