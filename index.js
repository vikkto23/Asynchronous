// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Testing
const array = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(array);


// Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}


async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log('First function');
        resolve();
    }, 1000));
}

async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log('Second function');
        resolve();
    }, 1000));
}

async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log('Third function');
        resolve();
    }, 1000));
}

async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}

// Testing
awaitCall();
chainedAsyncFunctions();

// Task 05: Awaiting Parallel Calls
async function parallelCalls(urls) {
    try {
        const promises = urls.map(url => fetch(url));
        const responses = await Promise.all(promises);
        const responseData = await Promise.all(responses.map(response => response.json()));
        console.log(responseData);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

// Testing
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
parallelCalls(urls);
