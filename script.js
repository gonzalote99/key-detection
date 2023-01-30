const pressed = [];
const secretCode = 'pase';
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
});

window.addEventListener('load', () => {
  cornify_count = 0;
  cornify_setcookie('cornify', cornify_count + '',1000)
} )