function myBind(func, callingObj) {
  return function (...args) {
    return func.apply(callingObj, args);
  };
}
