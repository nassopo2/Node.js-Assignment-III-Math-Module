module.exports = function(){
  return{
    add: function(num1, num2){
      var sum = num1+ num2;
      return sum;
    },
    multiply: function(num1, num2){
      return num1 * num2;
    },
    square: function (num){
      return num * num;
    },
    random: function (num1, num2){
      var min = Math.ceil(num1);
      var max = Math.floor(num2);
      return Math.floor(Math.random()* (max-min)+ min);
    }
  }
};
