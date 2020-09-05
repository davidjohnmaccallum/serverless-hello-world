function sayHello(name) {
  return `Hello ${name ? name : 'World'}!`
}

module.exports = { sayHello }