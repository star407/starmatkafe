var rec = []

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
        rec.push(...data)
      })
      .catch(error => {
        console.error('fetch error:', error);
      });
}




getRecord(localStorage.getItem("matkaname")).then(
data => {
  console.log(rec[0])
  var i = 0;
  var count = 0;
  var arr = []
 while (count <= 7) {
  if(count == 7){
    console.log(arr)
    updatetr(arr)
    arr = []
    count = 0;
  }
  if(count == 0){
    if((rec.length - i) < 7){
      arr.push(...[`${rec[i]['entrydate']||'x'}<br>to<br>${rec[rec.length - 1]['entrydate']||'x'}`])
    } else {
      arr.push(...[`${rec[i]['entrydate']||'x'}<br>to<br>${rec[i + 6]['entrydate']||'x'}`])
    }
  }
  if(i == (rec.length - 1)){
    //
    var date = new Date(rec[i]['entrydate'])
    console.log(`${date.getDay()}  ${count}`);
    console.log(rec[i]);
    if(date.getDay() == count){
      arr.push(...[rec[i]])
    } else {
      arr.push(...[{
        "patti1": ["","","",""],
        "patti2": ["","","",""]
      }])
      count++;
      continue;
    }
 
    console.log(arr)
    updatetr(arr)
    break;
  } else {
    var date = new Date(rec[i]['entrydate'])
    console.log(`w ${date.getDay()}  ${count}`);
    if(date.getDay() == count){
      arr.push(...[rec[i]])
    } else {
      arr.push(...[{
        "patti1": ["","","",""],
        "patti2": ["","","",""]
      }])
      count++;
      continue;
    }
  }
  i++
  count++
 }
}
)

const updatetr = (arr)=> {
let ss = `<tr><td><p>${arr[0] === 0 ?0:arr[0]||'x'}</p></td>`
for (let i = 1; i < arr.length; i++) {
 ss += `								<td class="pt" style="font-weight:900;font-size:28px">${arr[i]["patti1"][1] === 0 ? 0 : arr[i]["patti1"][1]||'x'}<br>${arr[i]["patti1"][2] === 0 ? 0 : arr[i]["patti1"][2]||'x'}<br>${arr[i]["patti1"][3] === 0 ? 0 : arr[i]["patti1"][3]||'x'}</td>
 <td class="jd"><span class="d">${arr[i]["patti1"][0] === 0 ? 0 : arr[i]["patti1"][0]||'x'}${arr[i]["patti2"][0] === 0 ? 0 : arr[i]["patti2"][0]||'x'}</span></td>
 <td class="pt" style="font-weight:900;font-size:28px">${arr[i]["patti2"][1] === 0 ? 0 : arr[i]["patti2"][1]||'x'}<br>${arr[i]["patti2"][2] === 0 ? 0 : arr[i]["patti2"][2]||'x'}<br>${arr[i]["patti2"][3] === 0 ? 0 : arr[i]["patti2"][3]||'x'}</td>`
  
}
ss += `</tr>`

  document.getElementById('chart').innerHTML += ss
}

