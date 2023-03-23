fetch('https://api.github.com/repos/evanw/esbuild')
  .then((response) => response.json())
  .then((data) => console.log(data));

//console.log('End of File');

function printEnd () {
    console.log('End of File');
};

setTimeout(printEnd, 200);