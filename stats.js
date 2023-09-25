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
            s = `${starmorning[starmorning.length - 1]['patti1'][1]||"x"}${starmorning[starmorning.length - 1]['patti1'][2]||"x"}${starmorning[starmorning.length - 1]['patti1'][3]||"x"}-${starmorning[starmorning.length - 1]['patti1'][0]||"x"}${starmorning[starmorning.length - 1]['patti2'][0]||"x"}-${starmorning[starmorning.length - 1]['patti2'][1]||"x"}${starmorning[starmorning.length - 1]['patti2'][2]||"x"}${starmorning[starmorning.length - 1]['patti2'][3]||"x"}`
            console.log(`sm${s}`);
            document.getElementById('starmorning').innerHTML = s
            document.getElementById('starmorning1').innerHTML = s
            break;
          case 'chitpiti':
            chitpiti.push(...data)
            console.log("hii");
            s = `${chitpiti[chitpiti.length - 1]['patti1'][1]||"x"}${chitpiti[chitpiti.length - 1]['patti1'][2]||"x"}${chitpiti[chitpiti.length - 1]['patti1'][3]||"x"}-${chitpiti[chitpiti.length - 1]['patti1'][0]||"x"}${chitpiti[chitpiti.length - 1]['patti2'][0]||"x"}-${chitpiti[chitpiti.length - 1]['patti2'][1]||"x"}${chitpiti[chitpiti.length - 1]['patti2'][2]||"x"}${chitpiti[chitpiti.length - 1]['patti2'][3]||"x"}`
            console.log(`cp${s}`);
            document.getElementById('chitpiti').innerHTML = s
            document.getElementById('chitpiti1').innerHTML = s
            break;
          case 'golden':
            golden.push(...data)
            s = `${golden[golden.length - 1]['patti1'][1]||"x"}${golden[golden.length - 1]['patti1'][2]||"x"}${golden[golden.length - 1]['patti1'][3]||"x"}-${golden[golden.length - 1]['patti1'][0]||"x"}${golden[golden.length - 1]['patti2'][0]||"x"}-${golden[golden.length - 1]['patti2'][1]||"x"}${golden[golden.length - 1]['patti2'][2]||"x"}${golden[golden.length - 1]['patti2'][3]||"x"}`
            document.getElementById('golden').innerHTML = s
            document.getElementById('golden1').innerHTML = s
            break;
          case 'stargold':
            stargold.push(...data)
            s = `${stargold[stargold.length - 1]['patti1'][1]||"x"}${stargold[stargold.length - 1]['patti1'][2]||"x"}${stargold[stargold.length - 1]['patti1'][3]||"x"}-${stargold[stargold.length - 1]['patti1'][0]||"x"}${stargold[stargold.length - 1]['patti2'][0]||"x"}-${stargold[stargold.length - 1]['patti2'][1]||"x"}${stargold[stargold.length - 1]['patti2'][2]||"x"}${stargold[stargold.length - 1]['patti2'][3]||"x"}`
            document.getElementById('stargold').innerHTML = s
            document.getElementById('stargold1').innerHTML = s
            break;
          case 'kalyan':
            kalyan.push(...data)
            s = `${kalyan[kalyan.length - 1]['patti1'][1]||"x"}${kalyan[kalyan.length - 1]['patti1'][2]||"x"}${kalyan[kalyan.length - 1]['patti1'][3]||"x"}-${kalyan[kalyan.length - 1]['patti1'][0]||"x"}${kalyan[kalyan.length - 1]['patti2'][0]||"x"}-${kalyan[kalyan.length - 1]['patti2'][1]||"x"}${kalyan[kalyan.length - 1]['patti2'][2]||"x"}${kalyan[kalyan.length - 1]['patti2'][3]||"x"}`
            document.getElementById('kalyan').innerHTML = s
            document.getElementById('kalyan1').innerHTML = s
            break;
          case 'shubhlakshmi':
            shubhlakshmi.push(...data)
            s = `${shubhlakshmi[shubhlakshmi.length - 1]['patti1'][1]||"x"}${shubhlakshmi[shubhlakshmi.length - 1]['patti1'][2]||"x"}${shubhlakshmi[shubhlakshmi.length - 1]['patti1'][3]||"x"}-${shubhlakshmi[shubhlakshmi.length - 1]['patti1'][0]||"x"}${shubhlakshmi[shubhlakshmi.length - 1]['patti2'][0]||"x"}-${shubhlakshmi[shubhlakshmi.length - 1]['patti2'][1]||"x"}${shubhlakshmi[shubhlakshmi.length - 1]['patti2'][2]||"x"}${shubhlakshmi[shubhlakshmi.length - 1]['patti2'][3]||"x"}`
            document.getElementById('shubhlakshmi').innerHTML = s
            document.getElementById('shubhlakshmi1').innerHTML = s
            break;
          case 'starnight':
            starnight.push(...data)
            s = `${starnight[starnight.length - 1]['patti1'][1]||"x"}${starnight[starnight.length - 1]['patti1'][2]||"x"}${starnight[starnight.length - 1]['patti1'][3]||"x"}-${starnight[starnight.length - 1]['patti1'][0]||"x"}${starnight[starnight.length - 1]['patti2'][0]||"x"}-${starnight[starnight.length - 1]['patti2'][1]||"x"}${starnight[starnight.length - 1]['patti2'][2]||"x"}${starnight[starnight.length - 1]['patti2'][3]||"x"}`
            document.getElementById('starnight').innerHTML = s
            document.getElementById('starnight1').innerHTML = s
            break;
          case 'mainmatka':
            mainmatka.push(...data)
            s = `${mainmatka[mainmatka.length - 1]['patti1'][1]||"x"}${mainmatka[mainmatka.length - 1]['patti1'][2]||"x"}${mainmatka[mainmatka.length - 1]['patti1'][3]||"x"}-${mainmatka[mainmatka.length - 1]['patti1'][0]||"x"}${mainmatka[mainmatka.length - 1]['patti2'][0]||"x"}-${mainmatka[mainmatka.length - 1]['patti2'][1]||"x"}${mainmatka[mainmatka.length - 1]['patti2'][2]||"x"}${mainmatka[mainmatka.length - 1]['patti2'][3]||"x"}`
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