console.log('something')
var namelist = [
  'starmorning', 'chitpiti', 'golden', 'stargold', 'kalyan', 'shubhlakshmi',
  'starnight', 'mainmatka'
];
var starmorning = [];
var chitpiti = [];
var golden = [];
var stargold = [];
var kalyan = [];
var shubhlakshmi = [];
var starnight = [];
var mainmatka = [];

var starmorningln 
var chitpitiln
var goldenln
var stargoldln
var kalyanln
var shubhlakshmiln
var starnightln
var mainmatkaln

const getRecord =
    async (str) => {
      console.log("here");
  await fetch('https://starmatkaagain.onrender.com/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'title': str})
  })
      .then(response => {
        console.log("again");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let s
        switch (str) {
          case 'starmorning':
            starmorning.push(...data)
            s = `${starmorning[starmorning.length - 1]['patti1'][1]}${starmorning[starmorning.length - 1]['patti1'][2]}${starmorning[starmorning.length - 1]['patti1'][3]}-${starmorning[starmorning.length - 1]['patti1'][0]}${starmorning[starmorning.length - 1]['patti2'][0]}-${starmorning[starmorning.length - 1]['patti2'][1]}${starmorning[starmorning.length - 1]['patti2'][2]}${starmorning[starmorning.length - 1]['patti2'][3]}`
            console.log(`sm${s}`);
            document.getElementById('starmorning').innerHTML = s
            document.getElementById('starmorning1').innerHTML = s
            break;
          case 'chitpiti':
            chitpiti.push(...data)
            console.log("hii");
            s = `${chitpiti[chitpiti.length - 1]['patti1'][1]}${chitpiti[chitpiti.length - 1]['patti1'][2]}${chitpiti[chitpiti.length - 1]['patti1'][3]}-${chitpiti[chitpiti.length - 1]['patti1'][0]}${chitpiti[chitpiti.length - 1]['patti2'][0]}-${chitpiti[chitpiti.length - 1]['patti2'][1]}${chitpiti[chitpiti.length - 1]['patti2'][2]}${chitpiti[chitpiti.length - 1]['patti2'][3]}`
            console.log(`cp${s}`);
            document.getElementById('chitpiti').innerHTML = s
            document.getElementById('chitpiti1').innerHTML = s
            break;
          case 'golden':
            golden.push(...data)
            s = `${golden[golden.length - 1]['patti1'][1]}${golden[golden.length - 1]['patti1'][2]}${golden[golden.length - 1]['patti1'][3]}-${golden[golden.length - 1]['patti1'][0]}${golden[golden.length - 1]['patti2'][0]}-${golden[golden.length - 1]['patti2'][1]}${golden[golden.length - 1]['patti2'][2]}${golden[golden.length - 1]['patti2'][3]}`
            document.getElementById('golden').innerHTML = s
            document.getElementById('golden1').innerHTML = s
            break;
          case 'stargold':
            stargold.push(...data)
            s = `${stargold[stargold.length - 1]['patti1'][1]}${stargold[stargold.length - 1]['patti1'][2]}${stargold[stargold.length - 1]['patti1'][3]}-${stargold[stargold.length - 1]['patti1'][0]}${stargold[stargold.length - 1]['patti2'][0]}-${stargold[stargold.length - 1]['patti2'][1]}${stargold[stargold.length - 1]['patti2'][2]}${stargold[stargold.length - 1]['patti2'][3]}`
            document.getElementById('stargold').innerHTML = s
            document.getElementById('stargold1').innerHTML = s
            break;
          case 'kalyan':
            kalyan.push(...data)
            s = `${kalyan[kalyan.length - 1]['patti1'][1]}${kalyan[kalyan.length - 1]['patti1'][2]}${kalyan[kalyan.length - 1]['patti1'][3]}-${kalyan[kalyan.length - 1]['patti1'][0]}${kalyan[kalyan.length - 1]['patti2'][0]}-${kalyan[kalyan.length - 1]['patti2'][1]}${kalyan[kalyan.length - 1]['patti2'][2]}${kalyan[kalyan.length - 1]['patti2'][3]}`
            document.getElementById('kalyan').innerHTML = s
            document.getElementById('kalyan1').innerHTML = s
            break;
          case 'shubhlakshmi':
            shubhlakshmi.push(...data)
            s = `${shubhlakshmi[shubhlakshmi.length - 1]['patti1'][1]}${shubhlakshmi[shubhlakshmi.length - 1]['patti1'][2]}${shubhlakshmi[shubhlakshmi.length - 1]['patti1'][3]}-${shubhlakshmi[shubhlakshmi.length - 1]['patti1'][0]}${shubhlakshmi[shubhlakshmi.length - 1]['patti2'][0]}-${shubhlakshmi[shubhlakshmi.length - 1]['patti2'][1]}${shubhlakshmi[shubhlakshmi.length - 1]['patti2'][2]}${shubhlakshmi[shubhlakshmi.length - 1]['patti2'][3]}`
            document.getElementById('shubhlakshmi').innerHTML = s
            document.getElementById('shubhlakshmi1').innerHTML = s
            break;
          case 'starnight':
            starnight.push(...data)
            s = `${starnight[starnight.length - 1]['patti1'][1]}${starnight[starnight.length - 1]['patti1'][2]}${starnight[starnight.length - 1]['patti1'][3]}-${starnight[starnight.length - 1]['patti1'][0]}${starnight[starnight.length - 1]['patti2'][0]}-${starnight[starnight.length - 1]['patti2'][1]}${starnight[starnight.length - 1]['patti2'][2]}${starnight[starnight.length - 1]['patti2'][3]}`
            document.getElementById('starnight').innerHTML = s
            document.getElementById('starnight1').innerHTML = s
            break;
          case 'mainmatka':
            mainmatka.push(...data)
            s = `${mainmatka[mainmatka.length - 1]['patti1'][1]}${mainmatka[mainmatka.length - 1]['patti1'][2]}${mainmatka[mainmatka.length - 1]['patti1'][3]}-${mainmatka[mainmatka.length - 1]['patti1'][0]}${mainmatka[mainmatka.length - 1]['patti2'][0]}-${mainmatka[mainmatka.length - 1]['patti2'][1]}${mainmatka[mainmatka.length - 1]['patti2'][2]}${mainmatka[mainmatka.length - 1]['patti2'][3]}`
            document.getElementById('mainmatka').innerHTML = s
            document.getElementById('mainmatka1').innerHTML = s
            break;
          default:
            break;
        }
      })
      .catch(error => {
        console.error('fetch error:', error);
      });
}

const getRecordln =
    async (str) => {
      console.log("here");
  await fetch('https://starmatkaagain.onrender.com/getln', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'title': str})
  })
      .then(response => {
        console.log("again");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let s
        switch (str) {
          case 'starmorning':
            starmorningln = data[data.length - 1]
            s = ''
            starmorningln['ln'].forEach(n => {
              s += `${n} `
            });
            document.getElementById('starmorningln').innerHTML = s
            break;
          case 'chitpiti':
            chitpitiln = data[data.length - 1]
            s = ''
            chitpitiln['ln'].forEach(n => {
              s += `${n} `
            });
            document.getElementById('chitpitiln').innerHTML = s
            break;
          case 'golden':
            goldenln = data[data.length - 1]
            s = ''
            goldenln['ln'].forEach(n => {
              s += `${n} `
            });
            document.getElementById('goldenln').innerHTML = s
            break;
          case 'stargold':
            stargoldln = data[data.length - 1]
            s = ''
            stargoldln['ln'].forEach(n => {
              s += `${n} `
            });
            document.getElementById('stargoldln').innerHTML = s
            break;
          case 'kalyan':
            kalyanln = data[data.length - 1]
            s = ''
            kalyanln['ln'].forEach(n => {
              s += `${n} `
            });
            document.getElementById('kalyanln').innerHTML = s
            break;
          case 'shubhlakshmi':
            shubhlakshmiln = data[data.length - 1]
            s = ''
            shubhlakshmiln['ln'].forEach(n => {
              s += `${n} `
            });
            document.getElementById('shubhlakshmiln').innerHTML = s
            break;
          case 'starnight':
            starnightln = data[data.length - 1]
            s = ''
            starnightln['ln'].forEach(n => {
              s += `${n} `
            });
            document.getElementById('starnightln').innerHTML = s
            break;
          case 'mainmatka':
            mainmatkaln = data[data.length - 1]
            s = ''
            mainmatkaln['ln'].forEach(n => {
              s += `${n} `
            });
            document.getElementById('mainmatkaln').innerHTML = s
            break;
          default:
            break;
        }
      })
      .catch(error => {
        console.error('fetch error:', error);
      });
}

                   // for await (const  of namelist) {
                   //     await longRunningTask()
                   //   }

                   namelist.forEach(async name => {
                    await getRecord(name)
                    await getRecordln(name)});


async function openchart(str) {
  // // Get the value entered by the user
  // var input = document.getElementById('value-input');
  // var value = input.value;

  // // Store the value in localStorage
  // // Redirect to the second page
  localStorage.setItem("matkaname", str);

  window.location.href = 'table.html';
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}