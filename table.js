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
  console.log(rec[0]['updatedAt'])
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
      var date1 = new Date(rec[i]['updatedAt'])
      var date2 = new Date(rec[rec.length - 1]['updatedAt'])
      arr.push(...[`${date1.toDateString()} - ${date2.toDateString()}`])
    } else {
      var date1 = new Date(rec[i]['updatedAt'])
      var date2 = new Date(rec[i + 6]['updatedAt'])
      arr.push(...[`${date1.toDateString()} - ${date2.toDateString()}`])
    }
  }
  if(i == (rec.length - 1)){
    //
    arr.push(...[`${rec[i]['numbertop']} - ${rec[i]['numbermiddle']} - ${rec[i]['numberbottom']}`])
    console.log(arr)
    updatetr(arr)
    break;
  } else {
    arr.push(...[`${rec[i]['numbertop']} - ${rec[i]['numbermiddle']} - ${rec[i]['numberbottom']}`])
  }
  i++
  count++
 }
}
)

const updatetr = (arr)=> {

  document.getElementById('chart').innerHTML += `<tr><td><p>${arr[0]}</p></td>
  <td class="jd"><span class="d">${arr[1]}</span></td>
    <td class="jd"><span class="d" style="color:#ff0000">${arr[2]}</span></td>
    <td class="jd"><span class="d">${arr[3]}</span></td>
    <td class="jd"><span class="d">${arr[4]}</span></td>
    <td class="jd"><span class="d" style="color:#ff0000">${arr[5]}</span></td>
<td class="jd"><span class="d">${arr[6]}</span></td>
<td class="jd"><span class="d">${arr[7]}</span></td>`
}



