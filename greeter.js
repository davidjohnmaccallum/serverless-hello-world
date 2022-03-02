function sayHello(name) {
  return `Hello ${name ? name : 'World'}!`
}

function sayGoodbye(name) {
  return `Goodbye ${name ? name : 'World'}!`
}

module.exports = { sayHello, sayGoodbye }