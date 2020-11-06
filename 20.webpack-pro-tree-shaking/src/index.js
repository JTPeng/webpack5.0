import './css/a.css';
import './css/b.less';
import './css/iconfont.css';
import { count } from './js/test';

const sum = (a, b) => a + b;
const promise = new Promise(() => {
  setTimeout(() => {
    console.log('promise');
  }, 1000);
});

console.log(sum(3, 5));
console.log(count(5, 5, 6));
console.log(promise);
