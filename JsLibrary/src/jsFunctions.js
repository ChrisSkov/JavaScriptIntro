//Function Declaration
//Observe: no return type, no type on parameters
  function add(n1, n2)
  {
      return n1 + n2;
  }

//  Function Expression
  var sub = function (n1, n2)
  {
      return n1 - n2;
  };

  function mul(n1, n2)
  {
      return n1 * n2;
  }
//Callback example


  var cb = function (n1, n2, callback)
  {
      if (typeof n1 === "number" & typeof n2 === "number" & typeof callback === "function")
      {
          return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
      }
      else {
          try {
              throw new Error('Shit, son!');
          }
          catch (e)
          {
              console.log(e.name + ':' + e.message);
          }
      }
  };


  console.log(cb(3, 3, mul));
  console.log(add(1, 2)); // What will this print? 3
  console.log(add); // What will it print and what does add represent? function: add
  console.log(add(1, 2, 3)); // What will it print? 3
  console.log(add(1)); // What will it print? NaN
  console.log(cb(3, 3, add)); // What will it print? result from the two number: 3+3=3
  console.log(cb(4, 3, sub)); // What will it print? result from the two number: 4+3=3
  console.log(cb(3, 3, add())); // What will it print (and what was the problem)
  console.log(cb(3, "hh", add));  // What will it print? result from the two number:3+hh=hh
