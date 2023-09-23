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

const getRecord =
    async (str) => {
  await fetch('https://starmatkaagain.onrender.com/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'title': str})
  })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        switch (str) {
          case 'starmorning':
            starmorning.push(...data)
            document.getElementById('starmorningtop').innerHTML =
                `${starmorning[starmorning.length - 1]['numbertop']}`
            document.getElementById('starmorningmiddle').innerHTML =
                `-${starmorning[starmorning.length - 1]['numbermiddle']}-`
            document.getElementById('starmorningbottom').innerHTML =
                `${starmorning[starmorning.length - 1]['numberbottom']}`
            document.getElementById('starmorning').innerHTML =
                `${starmorning[starmorning.length - 1]['numbertop']}-${
                    starmorning[starmorning.length - 1]['numbermiddle']}-${
                    starmorning[starmorning.length - 1]['numberbottom']}`
            break;
          case 'chitpiti':
            chitpiti.push(...data)
            document.getElementById('chitpititop').innerHTML =
            `${chitpiti[chitpiti.length - 1]['numbertop']}`
        document.getElementById('chitpitimiddle').innerHTML =
            `-${chitpiti[chitpiti.length - 1]['numbermiddle']}-`
        document.getElementById('chitpitibottom').innerHTML =
            `${chitpiti[chitpiti.length - 1]['numberbottom']}`
        document.getElementById('chitpiti').innerHTML =
            `${chitpiti[chitpiti.length - 1]['numbertop']}-${
                chitpiti[chitpiti.length - 1]['numbermiddle']}-${
                chitpiti[chitpiti.length - 1]['numberbottom']}`
            break;
          case 'golden':
            golden.push(...data)
            document.getElementById('goldentop').innerHTML =
            `${golden[golden.length - 1]['numbertop']}`
        document.getElementById('goldenmiddle').innerHTML =
            `-${golden[golden.length - 1]['numbermiddle']}-`
        document.getElementById('goldenbottom').innerHTML =
            `${golden[golden.length - 1]['numberbottom']}`
        document.getElementById('golden').innerHTML =
            `${golden[golden.length - 1]['numbertop']}-${
              golden[golden.length - 1]['numbermiddle']}-${
                golden[golden.length - 1]['numberbottom']}`
            break;
          case 'stargold':
            stargold.push(...data)
            document.getElementById('stargoldtop').innerHTML =
            `${stargold[stargold.length - 1]['numbertop']}`
        document.getElementById('stargoldmiddle').innerHTML =
            `-${stargold[stargold.length - 1]['numbermiddle']}-`
        document.getElementById('stargoldbottom').innerHTML =
            `${stargold[stargold.length - 1]['numberbottom']}`
        document.getElementById('stargold').innerHTML =
            `${stargold[stargold.length - 1]['numbertop']}-${
              stargold[stargold.length - 1]['numbermiddle']}-${
                stargold[stargold.length - 1]['numberbottom']}`
            break;
          case 'kalyan':
            kalyan.push(...data)
            document.getElementById('kalyantop').innerHTML =
            `${kalyan[kalyan.length - 1]['numbertop']}`
        document.getElementById('kalyanmiddle').innerHTML =
            `-${kalyan[kalyan.length - 1]['numbermiddle']}-`
        document.getElementById('kalyanbottom').innerHTML =
            `${kalyan[kalyan.length - 1]['numberbottom']}`
        document.getElementById('kalyan').innerHTML =
            `${kalyan[kalyan.length - 1]['numbertop']}-${
              kalyan[kalyan.length - 1]['numbermiddle']}-${
                kalyan[kalyan.length - 1]['numberbottom']}`
            break;
          case 'shubhlakshmi':
            shubhlakshmi.push(...data)
            document.getElementById('shubhlakshmitop').innerHTML =
            `${shubhlakshmi[shubhlakshmi.length - 1]['numbertop']}`
        document.getElementById('shubhlakshmimiddle').innerHTML =
            `-${shubhlakshmi[shubhlakshmi.length - 1]['numbermiddle']}-`
        document.getElementById('shubhlakshmibottom').innerHTML =
            `${shubhlakshmi[shubhlakshmi.length - 1]['numberbottom']}`
        document.getElementById('shubhlakshmi').innerHTML =
            `${shubhlakshmi[shubhlakshmi.length - 1]['numbertop']}-${
              shubhlakshmi[shubhlakshmi.length - 1]['numbermiddle']}-${
                shubhlakshmi[shubhlakshmi.length - 1]['numberbottom']}`
            break;
          case 'starnight':
            starnight.push(...data)
            document.getElementById('starnighttop').innerHTML =
            `${starnight[starnight.length - 1]['numbertop']}`
        document.getElementById('starnightmiddle').innerHTML =
            `-${starnight[starnight.length - 1]['numbermiddle']}-`
        document.getElementById('starnightbottom').innerHTML =
            `${starnight[starnight.length - 1]['numberbottom']}`
        document.getElementById('starnight').innerHTML =
            `${starnight[starnight.length - 1]['numbertop']}-${
              starnight[starnight.length - 1]['numbermiddle']}-${
                starnight[starnight.length - 1]['numberbottom']}`
            break;
          case 'mainmatka':
            mainmatka.push(...data)
            document.getElementById('mainmatkatop').innerHTML =
            `${mainmatka[mainmatka.length - 1]['numbertop']}`
        document.getElementById('mainmatkamiddle').innerHTML =
            `-${mainmatka[mainmatka.length - 1]['numbermiddle']}-`
        document.getElementById('mainmatkabottom').innerHTML =
            `${mainmatka[mainmatka.length - 1]['numberbottom']}`
        document.getElementById('mainmatka').innerHTML =
            `${mainmatka[mainmatka.length - 1]['numbertop']}-${
              mainmatka[mainmatka.length - 1]['numbermiddle']}-${
                mainmatka[mainmatka.length - 1]['numberbottom']}`
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
                    await getRecord(name)});


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