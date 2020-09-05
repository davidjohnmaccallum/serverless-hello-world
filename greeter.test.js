const greeter = require('./greeter')

test('Greeting', () => {
  expect(greeter.sayHello('David')).toBe('Hello David!')
  expect(greeter.sayHello()).toBe('Hello World!')
})
