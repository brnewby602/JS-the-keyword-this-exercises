var computer = {
  name: 'HAL 9000',
  owner: 'Dave',
  condescend: function() {
    console.log('Processing...');
    var context = this;
    setTimeout(function() {
      console.log('I\'m sorry, ' + context.owner + ', I can\'t let you do that.');
    }, 1000);
  }
};

// What would the following log?  
   // 'Processing'
   // 'I'm sorry, undefined, I can't let you do that.'

// What binding pattern causes this?
  // when setTimeout is executed, it is being called from window, not computer object.  
  // free form method invocation.
computer.condescend();

// How would we modify the .condescend method to achieve the expected output?

   // could create a variable inside condescend that stores 'this', and then 
   // reference the variable, or bind the anonymous function to this
   //  function(){...}.bind(this)
