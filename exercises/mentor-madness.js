var mentor = 'Zach';

var foo = {
  mentor: 'Sunny',
  bar: {
    mentor: 'Beth',
    getMentor: function() {
      console.log(this.mentor);
    }
  }
};

var findMentor = foo.bar.getMentor;

// What would the following log?
   // 'Beth'
// What binding pattern(s) cause this?
   // method invocation
foo.bar.getMentor();

// this will console log undefined in node, but will log correctly in a browser
// this is free form function invocation
findMentor();

// How would you modify the following invocations of findMentor 
// to log each of the mentor's names?
findMentor(); // Should log 'Zach'  -- does log Zach in the browser.  
findMentor.call(foo); // Should log 'Sunny'

findMentor.call(foo.bar); // Should log 'Beth'

console.log(global);