'use strict';
var getNthFibo,
    N, d;

N = prompt('Insert N');

  function getNthFibo(n) {
  if ( n <= 2) return n;

  return ( getNthFibo(n - 1) + getNthFibo(n - 2) );
  };



for (var i=1; i<=N; i++) {
  d = i % 10;
  if (i === 11 || i === 12 || i === 13) {d = 4};
  switch(d) {
    case 1:  console.log(i + '-st Fibo = ' + getNthFibo(i));
             break;
    case 2:  console.log(i + '-nd Fibo = ' + getNthFibo(i));
             break;
    case 3:  console.log(i + '-rd Fibo = ' + getNthFibo(i));
             break;
    default: console.log(i + '-th Fibo = ' + getNthFibo(i));
  }

  
};