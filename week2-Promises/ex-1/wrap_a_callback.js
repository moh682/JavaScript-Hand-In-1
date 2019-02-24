
// Wrap a callback implementation in a promise based implementation 

// a - before you start, convince yourself that this exercise would be impossible to implement without a way to handle asynchronous behaviour (callbacks, promises, etc.).
// b - First implement the functionality without promises, using callbacks.
//

// function randomsNoPromise(size) {
//   require('crypto').randomBytes(size, callback)
// }

// function callback(err, buffer) {
//   if (err) console.log(err)
//   console.log(buffer.toString('hex'))
// }
// randomsNoPromise(48)

// c - Use es2015 Promises to solve the problem



function makeSecureRandoms(array) {
  var randoms = array.map((value) => {
    let random;
    createRandom(length).then((value) => {
      random = value;
    })
    return { 'length': value , 'random': random}
  })
  return new Promise((res, rej) => {
    res({'title':`${array.length} Secure Randoms`, 'randoms': randoms});
    rej('i suck dick');
  })
  
}

function createRandom(size){
  return new Promise((res, rej) => {
    require('crypto').randomBytes(size, function (err, buffer) {
      if (err) rej(err);
      res(buffer.toString('hex'))
    })
  });
}

// makeSecureRandom(21)
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((reject) => {
//     console.log(reject)
//   })

// 

// d - Refactor your solution into a module and export it

module.exports.makeSecureRandoms = makeSecureRandoms;

// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------