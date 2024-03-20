export const someSuccessAsyncJob = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello success!');
    }, 5000);
  })
};

export const someFailAsyncJob = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Hello err!'));
    }, 5000);
  })
};