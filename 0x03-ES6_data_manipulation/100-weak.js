const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  let numCalled = weakMap.get(endpoint);
  if (numCalled >= 4) {
    throw new Error('Endpoint load is high');
  } else {
    numCalled += 1;
    weakMap.set(endpoint, numCalled);
  }
}

export { weakMap, queryAPI };
