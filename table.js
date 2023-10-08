var rec = []
let ss = ''

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
  if(localStorage.getItem("mainmatka") === "kalyan"){
    ss += `<tr><td><p>24-06-2013<br>to<br>29-06-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
    <td><span class="d">18</span></td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">4<br>9<br>0</td></tr><tr><td><p>01-07-2013<br>to<br>06-07-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
    <td><span class="d">26</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>2</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td></tr><tr><td><p>08-07-2013<br>to<br>13-07-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
    <td><span class="d">18</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>7</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>8</td></tr><tr><td><p>15-07-2013<br>to<br>20-07-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
    <td><span class="d">56</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>7</td><td style="font-weight:900;font-size:28px">2<br>2<br>6</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>5</td></tr><tr><td><p>22-07-2013<br>to<br>27-07-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
    <td><span class="d">06</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>5</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td></tr><tr><td><p>12-08-2013<br>to<br>17-08-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
    <td><span class="d">73</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td></tr><tr><td><p>19-08-2013<br>to<br>24-08-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
    <td><span class="d" style="color:#ff0000">22</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">8<br>8<br>0</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>8</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td></tr><tr><td><p>26-08-2013<br>to<br>31-08-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
    <td><span class="d">06</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>0<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>0</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td></tr><tr><td><p>02-09-2013<br>to<br>07-09-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
    <td><span class="d">39</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td></tr><tr><td><p>09-09-2013<br>to<br>14-09-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000">**</span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>2<br>0</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td></tr><tr><td><p>16-09-2013<br>to<br>21-09-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
    <td><span class="d">32</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">2<br>2<br>3</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td></tr><tr><td><p>23-09-2013<br>to<br>28-09-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
    <td><span class="d">82</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">9<br>9<br>0</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">8<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td></tr><tr><td><p>30-09-2013<br>to<br>05-10-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
    <td><span class="d">13</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td></tr><tr><td><p>07-10-2013<br>to<br>12-10-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>8</td>
    <td><span class="d" style="color:#ff0000">77</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>0<br>0</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td></tr><tr><td><p>14-10-2013<br>to<br>19-10-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
    <td><span class="d">15</span></td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">8<br>9<br>0</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">1<br>1<br>0</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>5</td></tr><tr><td><p>21-10-2013<br>to<br>26-10-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
    <td><span class="d">35</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td></tr><tr><td><p>28-10-2013<br>to<br>02-11-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
    <td><span class="d" style="color:#ff0000">61</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>11-11-2013<br>to<br>16-11-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
    <td><span class="d">79</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td></tr><tr><td><p>18-11-2013<br>to<br>23-11-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
    <td><span class="d" style="color:#ff0000">61</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>6</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td></tr><tr><td><p>25-11-2013<br>to<br>30-11-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
    <td><span class="d">60</span></td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td></tr><tr><td><p>02-12-2013<br>to<br>07-12-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
    <td><span class="d">08</span></td>
    <td style="font-weight:900;font-size:28px">8<br>0<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>09-12-2013<br>to<br>14-12-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
    <td><span class="d">65</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>6</td><td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>7</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td></tr><tr><td><p>16-12-2013<br>to<br>21-12-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
    <td><span class="d">48</span></td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>6</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td></tr><tr><td><p>23-12-2013<br>to<br>28-12-2013</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
    <td><span class="d" style="color:#ff0000">38</span></td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>6</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td></tr><tr><td><p>30-12-2013<br>to<br>04-01-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
    <td><span class="d">40</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">8<br>8<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>7</td></tr><tr><td><p>06-01-2014<br>to<br>11-01-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>8</td>
    <td><span class="d">78</span></td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>4</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>7</td></tr><tr><td><p>13-01-2014<br>to<br>18-01-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>1<br>2</td>
    <td><span class="d">45</span></td>
    <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td></tr><tr><td><p>20-01-2014<br>to<br>25-01-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td><span class="d">69</span></td>
    <td style="font-weight:900;font-size:28px">6<br>6<br>7</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td></tr><tr><td><p>27-01-2014<br>to<br>01-02-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
    <td><span class="d" style="color:#ff0000">11</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>6</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td></tr><tr><td><p>03-02-2014<br>to<br>08-02-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
    <td><span class="d">17</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td></tr><tr><td><p>10-02-2014<br>to<br>15-02-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
    <td><span class="d">74</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>9</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>0</td></tr><tr><td><p>17-02-2014<br>to<br>22-02-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td><span class="d">69</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td></tr><tr><td><p>24-02-2014<br>to<br>01-03-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>4<br>0</td>
    <td><span class="d">80</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>7</td></tr><tr><td><p>03-03-2014<br>to<br>08-03-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
    <td><span class="d">26</span></td>
    <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>7</td></tr><tr><td><p>10-03-2014<br>to<br>15-03-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
    <td><span class="d">84</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>6</td></tr><tr><td><p>17-03-2014<br>to<br>22-03-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000">**</span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>9</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td></tr><tr><td><p>24-03-2014<br>to<br>29-03-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>8</td>
    <td><span class="d">75</span></td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td></tr><tr><td><p>31-03-2014<br>to<br>05-04-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
    <td><span class="d">51</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>5</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td></tr><tr><td><p>07-04-2014<br>to<br>12-04-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
    <td><span class="d">42</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td></tr><tr><td><p>14-04-2014<br>to<br>19-04-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>6</td>
    <td><span class="d" style="color:#ff0000">05</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td><td style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>2<br>0</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td></tr><tr><td><p>21-04-2014<br>to<br>26-04-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
    <td><span class="d">73</span></td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>2</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td></tr><tr><td><p>28-04-2014<br>to<br>03-05-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
    <td><span class="d">98</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>2</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">8<br>8<br>0</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>9</td></tr><tr><td><p>05-05-2014<br>to<br>10-05-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>9</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td></tr><tr><td><p>12-05-2014<br>to<br>12-05-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
    <td><span class="d">96</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td></tr><tr><td><p>19-05-2014<br>to<br>24-05-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
    <td><span class="d">01</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">1<br>9<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>2</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td></tr><tr><td><p>26-05-2014<br>to<br>31-05-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
    <td><span class="d">81</span></td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>6</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td></tr><tr><td><p>02-06-2014<br>to<br>07-06-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
    <td><span class="d">90</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>7</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td></tr><tr><td><p>09-06-2014<br>to<br>14-06-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
    <td><span class="d">42</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td></tr><tr><td><p>16-06-2014<br>to<br>21-06-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
    <td><span class="d">12</span></td>
    <td style="font-weight:900;font-size:28px">1<br>1<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>5</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td></tr><tr><td><p>23-06-2014<br>to<br>28-06-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
    <td><span class="d">39</span></td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>9<br>9</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>9</td></tr><tr><td><p>30-06-2014<br>to<br>05-07-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
    <td><span class="d">75</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>0</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td></tr><tr><td><p>07-07-2014<br>to<br>12-07-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
    <td><span class="d">90</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td></tr><tr><td><p>14-07-2014<br>to<br>19-07-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
    <td><span class="d">21</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">4<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>1<br>2</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>0<br>0</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td></tr><tr><td><p>21-07-2014<br>to<br>26-07-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
    <td><span class="d">43</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>0</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>6</td></tr><tr><td><p>28-07-2014<br>to<br>02-08-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
    <td><span class="d">85</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">7<br>7<br>8</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>2</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td></tr><tr><td><p>04-08-2014<br>to<br>09-08-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
    <td><span class="d">23</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td></tr><tr><td><p>11-08-2014<br>to<br>16-08-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
    <td><span class="d">08</span></td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">2<br>2<br>2</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>0</td></tr><tr><td><p>18-08-2014<br>to<br>23-08-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
    <td><span class="d" style="color:#ff0000">66</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>7</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>25-08-2014<br>to<br>30-08-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
    <td><span class="d">79</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>7</td></tr><tr><td><p>01-09-2014<br>to<br>06-09-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
    <td><span class="d">07</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td></tr><tr><td><p>08-09-2014<br>to<br>13-09-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
    <td><span class="d">92</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>2</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td></tr><tr><td><p>15-09-2014<br>to<br>20-09-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
    <td><span class="d">46</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">7<br>8<br>8</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td></tr><tr><td><p>22-09-2014<br>to<br>27-09-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
    <td><span class="d">28</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">1<br>1<br>5</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td></tr><tr><td><p>29-09-2014<br>to<br>04-10-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
    <td><span class="d">03</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">4<br>4<br>0</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">5<br>5<br>7</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>7</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td></tr><tr><td><p>06-10-2014<br>to<br>11-10-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
    <td><span class="d" style="color:#ff0000">33</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td></tr><tr><td><p>13-10-2014<br>to<br>18-10-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
    <td><span class="d">46</span></td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td></tr><tr><td><p>20-10-2014<br>to<br>25-10-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
    <td><span class="d">47</span></td>
    <td style="font-weight:900;font-size:28px">9<br>9<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>27-10-2014<br>to<br>01-11-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td><span class="d">12</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td></tr><tr><td><p>03-11-2014<br>to<br>08-11-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
    <td><span class="d">09</span></td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>5</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>6<br>9</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>0</td></tr><tr><td><p>10-11-2014<br>to<br>15-11-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
    <td><span class="d">35</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">7<br>8<br>8</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td></tr><tr><td><p>17-11-2014<br>to<br>22-11-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
    <td><span class="d">10</span></td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>0<br>0</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td></tr><tr><td><p>24-11-2014<br>to<br>29-11-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
    <td><span class="d">59</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>0<br>0</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>1<br>2</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td></tr><tr><td><p>01-12-2014<br>to<br>06-12-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>9</td>
    <td><span class="d" style="color:#ff0000">50</span></td>
    <td style="font-weight:900;font-size:28px">6<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>7</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">4<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>2</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td></tr><tr><td><p>08-12-2014<br>to<br>13-12-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d">98</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>8</td></tr><tr><td><p>15-12-2014<br>to<br>20-12-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
    <td><span class="d">78</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td></tr><tr><td><p>22-12-2014<br>to<br>27-12-2014</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
    <td><span class="d" style="color:#ff0000">61</span></td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td></tr><tr><td><p>29-12-2014<br>to<br>03-01-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
    <td><span class="d">96</span></td>
    <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>6</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>6</td></tr><tr><td><p>05-01-2015<br>to<br>10-01-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
    <td><span class="d">54</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td></tr><tr><td><p>12-01-2015<br>to<br>17-01-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
    <td><span class="d">89</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>5</td></tr><tr><td><p>19-01-2015<br>to<br>24-01-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
    <td><span class="d">01</span></td>
    <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td></tr><tr><td><p>26-01-2015<br>to<br>31-01-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000">**</span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">8<br>9<br>0</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td></tr><tr><td><p>02-02-2015<br>to<br>07-02-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
    <td><span class="d">48</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>4</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td></tr><tr><td><p>09-02-2015<br>to<br>14-02-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
    <td><span class="d">79</span></td>
    <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td></tr><tr><td><p>16-02-2015<br>to<br>21-02-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
    <td><span class="d">41</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>0</td></tr><tr><td><p>23-02-2015<br>to<br>28-02-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
    <td><span class="d" style="color:#ff0000">83</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td></tr><tr><td><p>02-03-2015<br>to<br>07-03-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
    <td><span class="d">47</span></td>
    <td style="font-weight:900;font-size:28px">1<br>1<br>5</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>1<br>0</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td></tr><tr><td><p>09-03-2015<br>to<br>14-03-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
    <td><span class="d">26</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>0<br>0</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>0<br>0</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td></tr><tr><td><p>16-03-2015<br>to<br>21-03-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
    <td><span class="d">47</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>4</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td></tr><tr><td><p>23-03-2015<br>to<br>28-03-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
    <td><span class="d">12</span></td>
    <td style="font-weight:900;font-size:28px">3<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td></tr><tr><td><p>30-03-2015<br>to<br>04-04-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
    <td><span class="d" style="color:#ff0000">72</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td></tr><tr><td><p>06-04-2015<br>to<br>11-04-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>9<br>0</td>
    <td><span class="d">06</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td></tr><tr><td><p>13-04-2015<br>to<br>18-04-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td></tr><tr><td><p>20-04-2015<br>to<br>25-04-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
    <td><span class="d">85</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>5</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>1<br>0</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>27-04-2015<br>to<br>02-05-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
    <td><span class="d">10</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>8</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>6<br>9</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td></tr><tr><td><p>04-05-2015<br>to<br>09-05-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d">95</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td></tr><tr><td><p>11-05-2015<br>to<br>16-05-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
    <td><span class="d">68</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>3<br>7</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td></tr><tr><td><p>18-05-2015<br>to<br>23-05-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
    <td><span class="d">32</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>0</td></tr><tr><td><p>25-05-2015<br>to<br>30-05-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td><span class="d">67</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td></tr><tr><td><p>01-06-2015<br>to<br>06-06-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
    <td><span class="d">15</span></td>
    <td style="font-weight:900;font-size:28px">8<br>8<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td></tr><tr><td><p>08-06-2015<br>to<br>13-06-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
    <td><span class="d">26</span></td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td></tr><tr><td><p>15-06-2015<br>to<br>20-06-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
    <td><span class="d">17</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>9</td></tr><tr><td><p>22-06-2015<br>to<br>27-06-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
    <td><span class="d">19</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td></tr><tr><td><p>29-06-2015<br>to<br>04-07-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
    <td><span class="d">40</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">6<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td></tr><tr><td><p>13-07-2015<br>to<br>18-07-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
    <td><span class="d">26</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>20-07-2015<br>to<br>25-07-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
    <td><span class="d">09</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td></tr><tr><td><p>27-07-2015<br>to<br>01-08-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
    <td><span class="d">64</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td></tr><tr><td><p>03-08-2015<br>to<br>08-08-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d" style="color:#ff0000">94</span></td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td></tr><tr><td><p>10-08-2015<br>to<br>15-08-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
    <td><span class="d">01</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>17-08-2015<br>to<br>22-08-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
    <td><span class="d">53</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>6<br>7</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>4<br>6</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>7</td></tr><tr><td><p>24-08-2015<br>to<br>29-08-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
    <td><span class="d">02</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>9</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">2<br>2<br>0</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td></tr><tr><td><p>31-08-2015<br>to<br>05-09-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
    <td><span class="d">67</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td></tr><tr><td><p>07-09-2015<br>to<br>12-09-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
    <td><span class="d">95</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td></tr><tr><td><p>14-09-2015<br>to<br>19-09-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
    <td><span class="d">82</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>6</td></tr><tr><td><p>21-09-2015<br>to<br>26-09-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
    <td><span class="d">45</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>9</td></tr><tr><td><p>28-09-2015<br>to<br>03-10-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
    <td><span class="d">09</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>05-10-2015<br>to<br>10-10-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
    <td><span class="d" style="color:#ff0000">38</span></td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td></tr><tr><td><p>12-10-2015<br>to<br>17-10-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
    <td><span class="d" style="color:#ff0000">61</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">4<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td></tr><tr><td><p>19-10-2015<br>to<br>24-10-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
    <td><span class="d" style="color:#ff0000">72</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>0</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td></tr><tr><td><p>26-10-2015<br>to<br>31-10-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
    <td><span class="d">60</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>9</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td></tr><tr><td><p>02-11-2015<br>to<br>07-11-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
    <td><span class="d">79</span></td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>16-11-2015<br>to<br>21-11-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
    <td><span class="d">70</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td></tr><tr><td><p>23-11-2015<br>to<br>28-11-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
    <td><span class="d">29</span></td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td></tr><tr><td><p>30-11-2015<br>to<br>05-12-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
    <td><span class="d">03</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td></tr><tr><td><p>07-12-2015<br>to<br>12-12-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
    <td><span class="d">78</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>2</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td></tr><tr><td><p>14-12-2015<br>to<br>19-12-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
    <td><span class="d">75</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td></tr><tr><td><p>21-12-2015<br>to<br>26-12-2015</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
    <td><span class="d">19</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td></tr><tr><td><p>28-12-2015<br>to<br>02-01-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
    <td><span class="d" style="color:#ff0000">66</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>8<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td></tr><tr><td><p>04-01-2016<br>to<br>09-01-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
    <td><span class="d">97</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td></tr><tr><td><p>11-01-2016<br>to<br>16-01-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
    <td><span class="d">15</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">8<br>8<br>0</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>0</td></tr><tr><td><p>18-01-2016<br>to<br>23-01-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
    <td><span class="d">02</span></td>
    <td style="font-weight:900;font-size:28px">3<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">6<br>0<br>0</td></tr><tr><td><p>25-01-2016<br>to<br>30-01-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
    <td><span class="d">51</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>6<br>6</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td></tr><tr><td><p>01-02-2016<br>to<br>06-02-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
    <td><span class="d">06</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>5</td></tr><tr><td><p>08-02-2016<br>to<br>13-02-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
    <td><span class="d">68</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td></tr><tr><td><p>15-02-2016<br>to<br>20-02-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d">90</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>0<br>0</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>9</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td></tr><tr><td><p>22-02-2016<br>to<br>27-02-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
    <td><span class="d">32</span></td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td></tr><tr><td><p>29-02-2016<br>to<br>05-03-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
    <td><span class="d" style="color:#ff0000">38</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>2</td></tr><tr><td><p>07-03-2016<br>to<br>12-03-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
    <td><span class="d">39</span></td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td></tr><tr><td><p>14-03-2016<br>to<br>19-03-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
    <td><span class="d">43</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td></tr><tr><td><p>21-03-2016<br>to<br>26-03-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td><span class="d" style="color:#ff0000">66</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">9<br>9<br>0</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>9<br>0</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td></tr><tr><td><p>28-03-2016<br>to<br>02-04-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
    <td><span class="d" style="color:#ff0000">00</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td></tr><tr><td><p>04-04-2016<br>to<br>09-04-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>9</td>
    <td><span class="d">53</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>9</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td></tr><tr><td><p>11-04-2016<br>to<br>16-04-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
    <td><span class="d" style="color:#ff0000">00</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td></tr><tr><td><p>18-04-2016<br>to<br>23-04-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
    <td><span class="d">57</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>8</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>5</td></tr><tr><td><p>25-04-2016<br>to<br>30-04-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
    <td><span class="d">17</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>6</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>7</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>9</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>9</td></tr><tr><td><p>02-05-2016<br>to<br>07-05-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
    <td><span class="d">65</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td></tr><tr><td><p>09-05-2016<br>to<br>14-05-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>4<br>9</td>
    <td><span class="d">78</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td></tr><tr><td><p>16-05-2016<br>to<br>21-05-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
    <td><span class="d">68</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td></tr><tr><td><p>23-05-2016<br>to<br>28-05-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td><td style="font-weight:900;font-size:28px">6<br>6<br>9</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td></tr><tr><td><p>30-05-2016<br>to<br>04-06-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">8<br>8<br>8</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td></tr><tr><td><p>06-06-2016<br>to<br>11-06-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
    <td><span class="d" style="color:#ff0000">50</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>0</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td></tr><tr><td><p>13-06-2016<br>to<br>18-06-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
    <td><span class="d">93</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td></tr><tr><td><p>20-06-2016<br>to<br>25-06-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td></tr><tr><td><p>27-06-2016<br>to<br>02-07-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
    <td><span class="d">32</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>6<br>6</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td></tr><tr><td><p>04-07-2016<br>to<br>09-07-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
    <td><span class="d">45</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td></tr><tr><td><p>11-07-2016<br>to<br>16-07-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
    <td><span class="d">10</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>0</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>6</td></tr><tr><td><p>18-07-2016<br>to<br>23-07-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
    <td><span class="d">71</span></td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">4<br>4<br>5</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td></tr><tr><td><p>25-07-2016<br>to<br>30-07-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
    <td><span class="d">43</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td></tr><tr><td><p>01-08-2016<br>to<br>06-08-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
    <td><span class="d" style="color:#ff0000">55</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">5<br>5<br>9</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td></tr><tr><td><p>08-08-2016<br>to<br>13-08-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
    <td><span class="d">40</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>7</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>8</td></tr><tr><td><p>15-08-2016<br>to<br>20-08-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d">95</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>0</td><td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>22-08-2016<br>to<br>27-08-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
    <td><span class="d">41</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>1<br>0</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">0<br>0<br>0</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td></tr><tr><td><p>29-08-2016<br>to<br>03-09-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
    <td><span class="d">80</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>9</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td></tr><tr><td><p>05-09-2016<br>to<br>10-09-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
    <td><span class="d">69</span></td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td></tr><tr><td><p>12-09-2016<br>to<br>17-09-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
    <td><span class="d" style="color:#ff0000">49</span></td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>8</td></tr><tr><td><p>19-09-2016<br>to<br>24-09-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
    <td><span class="d">35</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>8<br>8</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td></tr><tr><td><p>26-09-2016<br>to<br>01-10-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
    <td><span class="d">15</span></td>
    <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>4</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td></tr><tr><td><p>03-10-2016<br>to<br>08-10-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
    <td><span class="d" style="color:#ff0000">61</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>7</td><td style="font-weight:900;font-size:28px">1<br>1<br>0</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td></tr><tr><td><p>10-10-2016<br>to<br>15-10-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
    <td><span class="d" style="color:#ff0000">83</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>6</td></tr><tr><td><p>17-10-2016<br>to<br>22-10-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
    <td><span class="d" style="color:#ff0000">94</span></td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>1<br>4</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">6<br>0<br>0</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>4<br>5</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td></tr><tr><td><p>24-10-2016<br>to<br>29-10-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
    <td><span class="d">81</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>7</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>07-11-2016<br>to<br>12-11-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
    <td><span class="d">54</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>9<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td></tr><tr><td><p>14-11-2016<br>to<br>19-11-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
    <td><span class="d">17</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>21-11-2016<br>to<br>26-11-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td><span class="d">12</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td></tr><tr><td><p>28-11-2016<br>to<br>03-12-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>8</td>
    <td><span class="d">30</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td></tr><tr><td><p>05-12-2016<br>to<br>10-12-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
    <td><span class="d">92</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>5<br>9</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td></tr><tr><td><p>12-12-2016<br>to<br>17-12-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
    <td><span class="d">86</span></td>
    <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td></tr><tr><td><p>19-12-2016<br>to<br>24-12-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
    <td><span class="d">85</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">1<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>0</td></tr><tr><td><p>26-12-2016<br>to<br>31-12-2016</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
    <td><span class="d">73</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">8<br>8<br>8</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>7</td></tr><tr><td><p>02-01-2017<br>to<br>07-01-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
    <td><span class="d">56</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td></tr><tr><td><p>09-01-2017<br>to<br>14-01-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
    <td><span class="d">01</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td></tr><tr><td><p>16-01-2017<br>to<br>21-01-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td></tr><tr><td><p>23-01-2017<br>to<br>28-01-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
    <td><span class="d" style="color:#ff0000">50</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>4</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td></tr><tr><td><p>30-01-2017<br>to<br>04-02-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
    <td><span class="d" style="color:#ff0000">83</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td></tr><tr><td><p>06-02-2017<br>to<br>11-02-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
    <td><span class="d">67</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">2<br>2<br>0</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>1<br>0</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td></tr><tr><td><p>13-02-2017<br>to<br>18-02-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
    <td><span class="d">68</span></td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>7</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td></tr><tr><td><p>20-02-2017<br>to<br>25-02-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
    <td><span class="d">40</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td></tr><tr><td><p>27-02-2017<br>to<br>04-03-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
    <td><span class="d">97</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>0<br>0</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td></tr><tr><td><p>06-03-2017<br>to<br>11-03-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
    <td><span class="d">19</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td></tr><tr><td><p>13-03-2017<br>to<br>18-03-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000">**</span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td></tr><tr><td><p>20-03-2017<br>to<br>25-03-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
    <td><span class="d">56</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>0</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>9</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td></tr><tr><td><p>27-03-2017<br>to<br>01-04-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
    <td><span class="d">32</span></td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>9</td></tr><tr><td><p>03-04-2017<br>to<br>08-04-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>9</td>
    <td><span class="d">60</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">4<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td></tr><tr><td><p>10-04-2017<br>to<br>15-04-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>7</td>
    <td><span class="d">59</span></td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td></tr><tr><td><p>17-04-2017<br>to<br>22-04-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
    <td><span class="d">74</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td></tr><tr><td><p>24-04-2017<br>to<br>29-04-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
    <td><span class="d">41</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">5<br>9<br>9</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>6<br>6</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>6<br>9</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">0<br>0<br>0</td></tr><tr><td><p>01-05-2017<br>to<br>06-05-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>9</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>7</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td></tr><tr><td><p>08-05-2017<br>to<br>13-05-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
    <td><span class="d" style="color:#ff0000">66</span></td>
    <td style="font-weight:900;font-size:28px">4<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td></tr><tr><td><p>15-05-2017<br>to<br>20-05-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
    <td><span class="d">40</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td></tr><tr><td><p>22-05-2017<br>to<br>27-05-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
    <td><span class="d">08</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td></tr><tr><td><p>29-05-2017<br>to<br>03-06-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
    <td><span class="d">32</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>8</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td></tr><tr><td><p>05-06-2017<br>to<br>10-06-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
    <td><span class="d">06</span></td>
    <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>9</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>8<br>8</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>6</td></tr><tr><td><p>12-06-2017<br>to<br>17-06-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
    <td><span class="d">97</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>7</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">2<br>9<br>9</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td></tr><tr><td><p>19-06-2017<br>to<br>24-06-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
    <td><span class="d" style="color:#ff0000">27</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">5<br>9<br>9</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td></tr><tr><td><p>26-06-2017<br>to<br>01-07-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000">**</span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>1<br>9</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">4<br>9<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td></tr><tr><td><p>03-07-2017<br>to<br>08-07-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
    <td><span class="d">98</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>9</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td></tr><tr><td><p>10-07-2017<br>to<br>15-07-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>0<br>0</td>
    <td><span class="d" style="color:#ff0000">27</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>9<br>9</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>0</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>6</td></tr><tr><td><p>17-07-2017<br>to<br>22-07-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
    <td><span class="d">21</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>9<br>9</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>7</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>7</td></tr><tr><td><p>24-07-2017<br>to<br>29-07-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
    <td><span class="d">86</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>9</td></tr><tr><td><p>31-07-2017<br>to<br>05-08-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
    <td><span class="d">21</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>3<br>3</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td></tr><tr><td><p>31-07-2017<br>to<br>05-08-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000">**</span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>07-08-2017<br>to<br>12-08-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
    <td><span class="d">21</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td></tr><tr><td><p>14-08-2017<br>to<br>19-08-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
    <td><span class="d">06</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>2</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td></tr><tr><td><p>21-08-2017<br>to<br>26-08-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>7</td>
    <td><span class="d" style="color:#ff0000">11</span></td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td></tr><tr><td><p>28-08-2017<br>to<br>02-09-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
    <td><span class="d">60</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">2<br>2<br>0</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td></tr><tr><td><p>04-09-2017<br>to<br>09-09-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
    <td><span class="d">91</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td></tr><tr><td><p>11-09-2017<br>to<br>16-09-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
    <td><span class="d">64</span></td>
    <td style="font-weight:900;font-size:28px">6<br>9<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>8</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>7</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">1<br>1<br>2</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td></tr><tr><td><p>18-09-2017<br>to<br>23-09-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
    <td><span class="d">92</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>3</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>9</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td></tr><tr><td><p>25-09-2017<br>to<br>30-09-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
    <td><span class="d">86</span></td>
    <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td></tr><tr><td><p>02-10-2017<br>to<br>07-10-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>5</td>
    <td><span class="d">25</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>8</td><td style="font-weight:900;font-size:28px">8<br>8<br>0</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td></tr><tr><td><p>09-10-2017<br>to<br>14-10-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td><span class="d" style="color:#ff0000">11</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">1<br>0<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>2</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>2</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td></tr><tr><td><p>23-10-2017<br>to<br>28-10-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
    <td><span class="d">30</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td></tr><tr><td><p>30-10-2017<br>to<br>04-11-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
    <td><span class="d">85</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>6</td></tr><tr><td><p>06-11-2017<br>to<br>11-11-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td><span class="d">15</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>7</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>2<br>6</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">1<br>1<br>0</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td></tr><tr><td><p>13-11-2017<br>to<br>18-11-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
    <td><span class="d" style="color:#ff0000">38</span></td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>2</td></tr><tr><td><p>20-11-2017<br>to<br>25-11-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
    <td><span class="d">56</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>5</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td></tr><tr><td><p>27-11-2017<br>to<br>02-12-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
    <td><span class="d">90</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>4<br>6</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td></tr><tr><td><p>04-12-2017<br>to<br>09-12-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
    <td><span class="d">82</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td></tr><tr><td><p>11-12-2017<br>to<br>16-12-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>6<br>7</td>
    <td><span class="d" style="color:#ff0000">99</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td></tr><tr><td><p>18-12-2017<br>to<br>23-12-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
    <td><span class="d" style="color:#ff0000">05</span></td>
    <td style="font-weight:900;font-size:28px">4<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td></tr><tr><td><p>25-12-2017<br>to<br>30-12-2017</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>1<br>2</td>
    <td><span class="d">41</span></td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">5<br>5<br>5</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td></tr><tr><td><p>01-01-2018<br>to<br>06-01-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
    <td><span class="d">25</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>6</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">6<br>6<br>9</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>9</td></tr><tr><td><p>08-01-2018<br>to<br>13-01-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
    <td><span class="d">17</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>6</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>7</td><td style="font-weight:900;font-size:28px">8<br>8<br>9</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td></tr><tr><td><p>15-01-2018<br>to<br>20-01-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
    <td><span class="d">07</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>2</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td></tr><tr><td><p>22-01-2018<br>to<br>27-01-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
    <td><span class="d">79</span></td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>8</td></tr><tr><td><p>29-01-2018<br>to<br>03-02-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>6</td>
    <td><span class="d">20</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>8</td><td style="font-weight:900;font-size:28px">7<br>7<br>8</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td></tr><tr><td><p>05-02-2018<br>to<br>10-02-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">6<br>0<br>0</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td></tr><tr><td><p>12-02-2018<br>to<br>17-02-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
    <td><span class="d">26</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>8</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>2</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td></tr><tr><td><p>19-02-2018<br>to<br>24-02-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
    <td><span class="d">32</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td></tr><tr><td><p>26-02-2018<br>to<br>03-03-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
    <td><span class="d">42</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>6</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>1<br>4</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td></tr><tr><td><p>05-03-2018<br>to<br>10-03-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
    <td><span class="d">08</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>5</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td></tr><tr><td><p>12-03-2018<br>to<br>17-03-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
    <td><span class="d">51</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">4<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td></tr><tr><td><p>19-03-2018<br>to<br>24-03-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d" style="color:#ff0000">99</span></td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td></tr><tr><td><p>26-03-2018<br>to<br>31-03-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
    <td><span class="d">25</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td></tr><tr><td><p>02-04-2018<br>to<br>07-04-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
    <td><span class="d">76</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">5<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td></tr><tr><td><p>09-04-2018<br>to<br>14-04-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>7</td>
    <td><span class="d" style="color:#ff0000">16</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>7</td></tr><tr><td><p>16-04-2018<br>to<br>21-04-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
    <td><span class="d">53</span></td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>0</td></tr><tr><td><p>23-04-2018<br>to<br>28-04-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
    <td><span class="d">40</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td></tr><tr><td><p>30-04-2018<br>to<br>05-05-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
    <td><span class="d">14</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>8</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td></tr><tr><td><p>07-05-2018<br>to<br>12-05-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
    <td><span class="d">93</span></td>
    <td style="font-weight:900;font-size:28px">4<br>4<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>7</td></tr><tr><td><p>14-05-2018<br>to<br>19-05-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
    <td><span class="d">78</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>5</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td></tr><tr><td><p>21-05-2018<br>to<br>26-05-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>0</td>
    <td><span class="d">31</span></td>
    <td style="font-weight:900;font-size:28px">3<br>9<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>6</td></tr><tr><td><p>28-05-2018<br>to<br>02-06-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
    <td><span class="d">75</span></td>
    <td style="font-weight:900;font-size:28px">4<br>4<br>7</td><td style="font-weight:900;font-size:28px">5<br>5<br>7</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td></tr><tr><td><p>04-06-2018<br>to<br>09-06-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
    <td><span class="d" style="color:#ff0000">88</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>9</td></tr><tr><td><p>11-06-2018<br>to<br>16-06-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td><span class="d">13</span></td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>0<br>0</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>18-06-2018<br>to<br>23-06-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
    <td><span class="d">08</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">2<br>2<br>2</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">8<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td></tr><tr><td><p>25-06-2018<br>to<br>30-06-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
    <td><span class="d">51</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>6</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td></tr><tr><td><p>02-07-2018<br>to<br>07-07-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
    <td><span class="d">82</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td></tr><tr><td><p>09-07-2018<br>to<br>14-07-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>0</td>
    <td><span class="d">84</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td></tr><tr><td><p>16-07-2018<br>to<br>21-07-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
    <td><span class="d">59</span></td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td></tr><tr><td><p>23-07-2018<br>to<br>28-07-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
    <td><span class="d">31</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td></tr><tr><td><p>30-07-2018<br>to<br>04-08-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
    <td><span class="d" style="color:#ff0000">05</span></td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td></tr><tr><td><p>06-08-2018<br>to<br>11-08-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
    <td><span class="d">68</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>6<br>7</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">36</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td></tr><tr><td><p>13-08-2018<br>to<br>18-08-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
    <td><span class="d">14</span></td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>7</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>6</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td></tr><tr><td><p>20-08-2018<br>to<br>25-08-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
    <td><span class="d">35</span></td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td></tr><tr><td><p>27-08-2018<br>to<br>01-09-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
    <td><span class="d">96</span></td>
    <td style="font-weight:900;font-size:28px">8<br>9<br>9</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>0</td></tr><tr><td><p>03-09-2018<br>to<br>08-09-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
    <td><span class="d">47</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td></tr><tr><td><p>10-09-2018<br>to<br>15-09-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
    <td><span class="d">96</span></td>
    <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td></tr><tr><td><p>17-09-2018<br>to<br>22-09-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
    <td><span class="d">84</span></td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td></tr><tr><td><p>24-09-2018<br>to<br>29-09-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
    <td><span class="d">20</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td></tr><tr><td><p>01-10-2018<br>to<br>06-10-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
    <td><span class="d">65</span></td>
    <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">8<br>0<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>0</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td></tr><tr><td><p>08-10-2018<br>to<br>13-10-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
    <td><span class="d">46</span></td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>1<br>0</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td></tr><tr><td><p>15-10-2018<br>to<br>20-10-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
    <td><span class="d">23</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td></tr><tr><td><p>22-10-2018<br>to<br>27-10-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td><span class="d" style="color:#ff0000">61</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td></tr><tr><td><p>29-10-2018<br>to<br>03-11-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
    <td><span class="d">97</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td></tr><tr><td><p>12-11-2018<br>to<br>17-11-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
    <td><span class="d">53</span></td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td></tr><tr><td><p>19-11-2018<br>to<br>24-11-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d">96</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td></tr><tr><td><p>26-11-2018<br>to<br>01-12-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
    <td><span class="d">37</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">6<br>6<br>9</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">6<br>6<br>7</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td></tr><tr><td><p>03-12-2018<br>to<br>08-12-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
    <td><span class="d">60</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td></tr><tr><td><p>10-12-2018<br>to<br>15-12-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
    <td><span class="d">15</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td></tr><tr><td><p>17-12-2018<br>to<br>22-12-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
    <td><span class="d" style="color:#ff0000">77</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">6<br>6<br>8</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>0</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td></tr><tr><td><p>24-12-2018<br>to<br>29-12-2018</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
    <td><span class="d">53</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td></tr><tr><td><p>31-12-2018<br>to<br>05-01-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
    <td><span class="d">65</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>0<br>0</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td></tr><tr><td><p>07-01-2019<br>to<br>12-01-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d">90</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px">7<br>8<br>8</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td></tr><tr><td><p>14-01-2019<br>to<br>19-01-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
    <td><span class="d">18</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td></tr><tr><td><p>21-01-2019<br>to<br>26-01-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>6</td>
    <td><span class="d" style="color:#ff0000">00</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>5</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>28-01-2019<br>to<br>02-02-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
    <td><span class="d">21</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td></tr><tr><td><p>04-02-2019<br>to<br>09-02-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
    <td><span class="d">79</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td></tr><tr><td><p>11-02-2019<br>to<br>16-02-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
    <td><span class="d">19</span></td>
    <td style="font-weight:900;font-size:28px">6<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>0</td></tr><tr><td><p>18-02-2019<br>to<br>23-02-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
    <td><span class="d">52</span></td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>7</td><td style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td></tr><tr><td><p>25-02-2019<br>to<br>02-03-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>1<br>6</td>
    <td><span class="d">84</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>9</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td></tr><tr><td><p>04-03-2019<br>to<br>09-03-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
    <td><span class="d">54</span></td>
    <td style="font-weight:900;font-size:28px">1<br>1<br>2</td><td style="font-weight:900;font-size:28px">8<br>8<br>0</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td></tr><tr><td><p>11-03-2019<br>to<br>16-03-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
    <td><span class="d">43</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td></tr><tr><td><p>18-03-2019<br>to<br>23-03-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
    <td><span class="d" style="color:#ff0000">72</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>2<br>3</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>5</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td></tr><tr><td><p>25-03-2019<br>to<br>30-03-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
    <td><span class="d">65</span></td>
    <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td></tr><tr><td><p>01-04-2019<br>to<br>06-04-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
    <td><span class="d" style="color:#ff0000">66</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">7<br>7<br>8</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td></tr><tr><td><p>08-04-2019<br>to<br>13-04-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
    <td><span class="d">84</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">2<br>2<br>8</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td></tr><tr><td><p>15-04-2019<br>to<br>20-04-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
    <td><span class="d" style="color:#ff0000">05</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>5<br>5</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td></tr><tr><td><p>22-04-2019<br>to<br>27-04-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
    <td><span class="d" style="color:#ff0000">61</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td></tr><tr><td><p>29-04-2019<br>to<br>04-05-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
    <td><span class="d" style="color:#ff0000">88</span></td>
    <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>4</td></tr><tr><td><p>06-05-2019<br>to<br>11-05-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
    <td><span class="d">21</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td></tr><tr><td><p>13-05-2019<br>to<br>18-05-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>6</td>
    <td><span class="d" style="color:#ff0000">27</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>6</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td></tr><tr><td><p>20-05-2019<br>to<br>25-05-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
    <td><span class="d">18</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td></tr><tr><td><p>27-05-2019<br>to<br>01-06-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
    <td><span class="d">07</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>2</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>6</td></tr><tr><td><p>03-06-2019<br>to<br>08-06-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
    <td><span class="d">45</span></td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>2</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>6</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td></tr><tr><td><p>10-06-2019<br>to<br>15-06-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>3<br>5</td>
    <td><span class="d">13</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>8</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>1<br>2</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>7</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td></tr><tr><td><p>17-06-2019<br>to<br>22-06-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>9<br>9</td>
    <td><span class="d">91</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td></tr><tr><td><p>24-06-2019<br>to<br>29-06-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
    <td><span class="d" style="color:#ff0000">22</span></td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td></tr><tr><td><p>01-07-2019<br>to<br>06-07-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
    <td><span class="d">40</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td></tr><tr><td><p>08-07-2019<br>to<br>13-07-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
    <td><span class="d">59</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">8<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>5<br>5</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td></tr><tr><td><p>15-07-2019<br>to<br>20-07-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
    <td><span class="d" style="color:#ff0000">77</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td></tr><tr><td><p>22-07-2019<br>to<br>27-07-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
    <td><span class="d">92</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>1<br>5</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td></tr><tr><td><p>29-07-2019<br>to<br>03-08-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
    <td><span class="d">84</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td></tr><tr><td><p>05-08-2019<br>to<br>10-08-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
    <td><span class="d">93</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>9<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td></tr><tr><td><p>12-08-2019<br>to<br>17-08-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
    <td><span class="d">60</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>9</td><td style="font-weight:900;font-size:28px">0<br>0<br>0</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td></tr><tr><td><p>19-08-2019<br>to<br>24-08-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
    <td><span class="d">82</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td></tr><tr><td><p>26-08-2019<br>to<br>31-08-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
    <td><span class="d" style="color:#ff0000">11</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td></tr><tr><td><p>02-09-2019<br>to<br>07-09-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
    <td><span class="d">24</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>9</td></tr><tr><td><p>09-09-2019<br>to<br>14-09-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
    <td><span class="d">60</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td></tr><tr><td><p>15-09-2019<br>to<br>21-09-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td><span class="d">17</span></td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td></tr><tr><td><p>23-09-2019<br>to<br>28-09-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
    <td><span class="d">95</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">4<br>4<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td></tr><tr><td><p>30-09-2019<br>to<br>05-10-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>4<br>8</td>
    <td><span class="d">67</span></td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td></tr><tr><td><p>07-10-2019<br>to<br>12-10-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
    <td><span class="d">59</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td></tr><tr><td><p>14-10-2019<br>to<br>19-10-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
    <td><span class="d">67</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>7</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td></tr><tr><td><p>21-10-2019<br>to<br>26-10-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
    <td><span class="d" style="color:#ff0000">11</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>2<br>6</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>28-10-2019<br>to<br>02-11-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000">**</span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td></tr><tr><td><p>04-11-2019<br>to<br>09-11-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
    <td><span class="d">85</span></td>
    <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td></tr><tr><td><p>11-11-2019<br>to<br>16-11-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
    <td><span class="d">37</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td></tr><tr><td><p>18-11-2019<br>to<br>23-11-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
    <td><span class="d">52</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td></tr><tr><td><p>25-11-2019<br>to<br>30-11-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
    <td><span class="d" style="color:#ff0000">05</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>9</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td></tr><tr><td><p>02-12-2019<br>to<br>07-12-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
    <td><span class="d">18</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>9</td></tr><tr><td><p>09-12-2019<br>to<br>14-12-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
    <td><span class="d" style="color:#ff0000">49</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">6<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td></tr><tr><td><p>16-12-2019<br>to<br>21-12-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
    <td><span class="d">80</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">4<br>9<br>9</td><td style="font-weight:900;font-size:28px">8<br>8<br>8</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td></tr><tr><td><p>23-12-2019<br>to<br>28-12-2019</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
    <td><span class="d">57</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>5<br>9</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td></tr><tr><td><p>30-12-2019<br>to<br>04-01-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
    <td><span class="d">40</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>9</td></tr><tr><td><p>06-01-2020<br>to<br>11-01-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
    <td><span class="d">65</span></td>
    <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td></tr><tr><td><p>13-01-2020<br>to<br>18-01-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>6</td>
    <td><span class="d" style="color:#ff0000">38</span></td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>4</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>20-01-2020<br>to<br>25-01-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>5</td>
    <td><span class="d">13</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td></tr><tr><td><p>27-01-2020<br>to<br>01-02-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td></tr><tr><td><p>03-02-2020<br>to<br>08-02-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
    <td><span class="d">41</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">6<br>7<br>0</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td></tr><tr><td><p>10-02-2020<br>to<br>15-02-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
    <td><span class="d">35</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>17-02-2020<br>to<br>22-02-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
    <td><span class="d">89</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td></tr><tr><td><p>24-02-2020<br>to<br>29-02-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
    <td><span class="d">34</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td></tr><tr><td><p>02-03-2020<br>to<br>07-03-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
    <td><span class="d">86</span></td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td></tr><tr><td><p>09-03-2020<br>to<br>14-03-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
    <td><span class="d">12</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td></tr><tr><td><p>16-03-2020<br>to<br>21-03-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
    <td><span class="d">47</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td></tr><tr><td><p>23-03-2020<br>to<br>28-03-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
    <td><span class="d">53</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>30-03-2020<br>to<br>04-04-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
    <td><span class="d">81</span></td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">8<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td></tr><tr><td><p>06-04-2020<br>to<br>11-04-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
    <td><span class="d">24</span></td>
    <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">6<br>0<br>0</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td></tr><tr><td><p>13-04-2020<br>to<br>18-04-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
    <td><span class="d" style="color:#ff0000">77</span></td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td></tr><tr><td><p>20-04-2020<br>to<br>25-04-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
    <td><span class="d">80</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td></tr><tr><td><p>27-04-2020<br>to<br>02-05-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
    <td><span class="d">29</span></td>
    <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>9</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td></tr><tr><td><p>04-05-2020<br>to<br>09-05-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
    <td><span class="d">65</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>8</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td></tr><tr><td><p>11-05-2020<br>to<br>16-05-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
    <td><span class="d">48</span></td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td></tr><tr><td><p>18-05-2020<br>to<br>23-05-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
    <td><span class="d">62</span></td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td></tr><tr><td><p>25-05-2020<br>to<br>30-05-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
    <td><span class="d">75</span></td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>9</td></tr><tr><td><p>01-06-2020<br>to<br>06-06-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td><span class="d">64</span></td>
    <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td></tr><tr><td><p>08-06-2020<br>to<br>13-06-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>0<br>0</td>
    <td><span class="d" style="color:#ff0000">22</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>6</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td></tr><tr><td><p>15-06-2020<br>to<br>20-06-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
    <td><span class="d">03</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">6<br>7<br>7</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>9</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td></tr><tr><td><p>22-06-2020<br>to<br>27-06-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
    <td><span class="d">78</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td></tr><tr><td><p>29-06-2020<br>to<br>04-07-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
    <td><span class="d">54</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>2</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td></tr><tr><td><p>06-07-2020<br>to<br>11-07-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
    <td><span class="d">70</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">1<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td></tr><tr><td><p>13-07-2020<br>to<br>18-07-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
    <td><span class="d">98</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>8</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td></tr><tr><td><p>20-07-2020<br>to<br>25-07-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
    <td><span class="d">20</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td></tr><tr><td><p>27-07-2020<br>to<br>01-08-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
    <td><span class="d">69</span></td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>9</td></tr><tr><td><p>03-08-2020<br>to<br>08-08-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
    <td><span class="d">63</span></td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>8</td></tr><tr><td><p>10-08-2020<br>to<br>15-08-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
    <td><span class="d" style="color:#ff0000">99</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>5</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>17-08-2020<br>to<br>22-08-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
    <td><span class="d">20</span></td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>1<br>4</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td></tr><tr><td><p>24-08-2020<br>to<br>29-08-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
    <td><span class="d">91</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>5</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>2</td><td style="font-weight:900;font-size:28px">6<br>0<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td></tr><tr><td><p>31-08-2020<br>to<br>05-09-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
    <td><span class="d" style="color:#ff0000">49</span></td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>6</td></tr><tr><td><p>07-09-2020<br>to<br>12-09-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
    <td><span class="d">25</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td></tr><tr><td><p>14-09-2020<br>to<br>19-09-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>9<br>0</td>
    <td><span class="d">07</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>9</td><td style="font-weight:900;font-size:28px">2<br>2<br>9</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>3</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td></tr><tr><td><p>21-09-2020<br>to<br>26-09-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
    <td><span class="d">14</span></td>
    <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>0</td></tr><tr><td><p>28-09-2020<br>to<br>03-10-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
    <td><span class="d">12</span></td>
    <td style="font-weight:900;font-size:28px">1<br>1<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td></tr><tr><td><p>05-10-2020<br>to<br>10-10-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
    <td><span class="d">90</span></td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>2</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td></tr><tr><td><p>12-10-2020<br>to<br>17-10-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
    <td><span class="d" style="color:#ff0000">72</span></td>
    <td style="font-weight:900;font-size:28px">1<br>1<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td></tr><tr><td><p>19-10-2020<br>to<br>24-10-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
    <td><span class="d">15</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>9</td></tr><tr><td><p>26-10-2020<br>to<br>31-10-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
    <td><span class="d">80</span></td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td></tr><tr><td><p>02-11-2020<br>to<br>07-11-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
    <td><span class="d">92</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>9</td><td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>8</td></tr><tr><td><p>09-11-2020<br>to<br>14-11-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
    <td><span class="d">43</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td></tr><tr><td><p>16-11-2020<br>to<br>21-11-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000">**</span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>6</td></tr><tr><td><p>23-11-2020<br>to<br>28-11-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td><span class="d">97</span></td>
    <td style="font-weight:900;font-size:28px">2<br>5<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td></tr><tr><td><p>30-11-2020<br>to<br>05-12-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
    <td><span class="d">06</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td><span class="d">86</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>2</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td></tr><tr><td><p>07-12-2020<br>to<br>12-12-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
    <td><span class="d">01</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">59</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">04</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>7</td>
      <td><span class="d">53</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td></tr><tr><td><p>14-12-2020<br>to<br>19-12-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td></tr><tr><td><p>21-12-2020<br>to<br>26-12-2020</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
    <td><span class="d">96</span></td>
    <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">98</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">3<br>9<br>9</td></tr><tr><td><p>28-12-2020<br>to<br>02-01-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
    <td><span class="d" style="color:#ff0000">44</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>4</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td></tr><tr><td><p>04-01-2021<br>to<br>09-01-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
    <td><span class="d" style="color:#ff0000">50</span></td>
    <td style="font-weight:900;font-size:28px">6<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>5</td></tr><tr><td><p>11-01-2021<br>to<br>16-01-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
    <td><span class="d">28</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>0</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">55</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>6</td></tr><tr><td><p>18-01-2021<br>to<br>23-01-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
    <td><span class="d">75</span></td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td></tr><tr><td><p>25-01-2021<br>to<br>30-01-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
    <td><span class="d">13</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000">**</span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>3<br>8</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>8</td></tr><tr><td><p>01-02-2021<br>to<br>06-02-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
    <td><span class="d" style="color:#ff0000">16</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">6<br>6<br>9</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">6<br>0<br>0</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>9<br>0</td></tr><tr><td><p>08-02-2021<br>to<br>13-02-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
    <td><span class="d">43</span></td>
    <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td></tr><tr><td><p>15-02-2021<br>to<br>20-02-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
    <td><span class="d">85</span></td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">8<br>8<br>0</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>7</td><td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>7</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>8</td></tr><tr><td><p>22-02-2021<br>to<br>27-02-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
    <td><span class="d">90</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td></tr><tr><td><p>01-03-2021<br>to<br>06-03-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td><span class="d">13</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">8<br>0<br>0</td><td style="font-weight:900;font-size:28px">4<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td></tr><tr><td><p>08-03-2021<br>to<br>13-03-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
    <td><span class="d">92</span></td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>6</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td></tr><tr><td><p>15-03-2021<br>to<br>20-03-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
    <td><span class="d" style="color:#ff0000">55</span></td>
    <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>4</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td></tr><tr><td><p>22-03-2021<br>to<br>27-03-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
    <td><span class="d">86</span></td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>7</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td></tr><tr><td><p>29-03-2021<br>to<br>03-04-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px"><br><br></td>
    <td><span class="d" style="color:#ff0000"></span></td>
    <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>5</td><td style="font-weight:900;font-size:28px">8<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td></tr><tr><td><p>05-04-2021<br>to<br>10-04-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
    <td><span class="d">41</span></td>
    <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">6<br>6<br>8</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td></tr><tr><td><p>12-04-2021<br>to<br>17-04-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
    <td><span class="d">87</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td></tr><tr><td><p>19-04-2021<br>to<br>24-04-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
    <td><span class="d">39</span></td>
    <td style="font-weight:900;font-size:28px">9<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">6<br>0<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">18</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td></tr><tr><td><p>26-04-2021<br>to<br>01-05-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
    <td><span class="d">60</span></td>
    <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">6<br>6<br>7</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td></tr><tr><td><p>03-05-2021<br>to<br>08-05-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
    <td><span class="d">48</span></td>
    <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>10-05-2021<br>to<br>15-05-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td><span class="d">14</span></td>
    <td style="font-weight:900;font-size:28px">2<br>2<br>0</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">48</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">83</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td></tr><tr><td><p>17-05-2021<br>to<br>22-05-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
    <td><span class="d">69</span></td>
    <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">25</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">3<br>8<br>8</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d">21</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td></tr><tr><td><p>24-05-2021<br>to<br>29-05-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
    <td><span class="d">07</span></td>
    <td style="font-weight:900;font-size:28px">3<br>6<br>8</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td></tr><tr><td><p>31-05-2021<br>to<br>05-06-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
    <td><span class="d" style="color:#ff0000">16</span></td>
    <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">17</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td><span class="d">57</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td></tr><tr><td><p>07-06-2021<br>to<br>12-06-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
    <td><span class="d">96</span></td>
    <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td></tr><tr><td><p>14-06-2021<br>to<br>19-06-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
    <td><span class="d">04</span></td>
    <td style="font-weight:900;font-size:28px">1<br>6<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">14</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>5</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td></tr><tr><td><p>21-06-2021<br>to<br>26-06-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
    <td><span class="d" style="color:#ff0000">27</span></td>
    <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">8<br>0<br>0</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td><span class="d">06</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td></tr>
      <tr>
        <td><p>28-06-2021<br>to<br>03-07-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
        <td><span class="d">67</span></td>
        <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
        <td><span class="d">10</span></td>
        <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">8<br>8<br>0</td>
        <td><span class="d">65</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
        <td><span class="d">43</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
        <td><span class="d">30</span></td>
        <td style="font-weight:900;font-size:28px">2<br>3<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
        <td><span class="d" style="color:#ff0000">16</span></td>
        <td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      </tr>
      <tr>
      <td><p>05-07-2021<br>to<br>10-07-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">5<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>7</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      </tr>
      <tr>
      <td><p>12-07-2021<br>to<br>17-07-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">2<br>2<br>2</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
      </tr><tr>
      <td><p>19-07-2021<br>to<br>24-07-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>6</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d">43</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>8</td></tr>
      
      <tr>
      <td><p>26-07-2021<br>to<br>31-07-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d" style="color:#ff0000">50</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      </tr>
      <tr>
      <td><p>02-08-2021<br>to<br>07-08-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>0</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">62</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">84</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td><td style="font-weight:900;font-size:28px">6<br>6<br>6</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      </tr>
      <tr>
      <td><p>09-08-2021<br>to<br>14-08-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>6</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d">37</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d">19</span></td>
      <td style="font-weight:900;font-size:28px">9<br>0<br>0</td>
      </tr>
      <tr>
      <td><p>16-08-2021<br>to<br>21-08-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">3<br>9<br>9</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      </tr>
      <tr>
      <td><p>23-08-2021<br>to<br>28-08-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">35</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>7</td><td style="font-weight:900;font-size:28px">4<br>4<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      </tr>
      <tr>
      <td><p>30-08-2021<br>to<br>04-09-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>7</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>4</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>5</td><td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td><td style="font-weight:900;font-size:28px">5<br>5<br>7</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>9</td>
      </tr>
      <tr>
      <td><p>06-09-2021<br>to<br>11-09-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td><span class="d">93</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">20</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      </tr>
      <tr>
      <td><p>13-09-2021<br>to<br>18-09-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">6<br>8<br>0</td>
      <td><span class="d">47</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">1<br>8<br>0</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">2<br>6<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      </tr>
      <tr>
      <td><p>20-09-2021<br>to<br>25-09-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d">01</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>0</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      </tr>
      <tr>
      <td><p>27-09-2021<br>to<br>02-10-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">78</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      </tr>
      <tr>
      <td><p>04-10-2021<br>to<br>09-10-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
      <td><span class="d">87</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td><span class="d" style="color:#ff0000">11</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td><span class="d">12</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td>
      </tr>
      <tr>
      <td><p>11-10-2021<br>to<br>16-10-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>0<br>0</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>7</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      </tr>
      <tr>
      <td><p>18-10-2021<br>to<br>23-10-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td><span class="d">28</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>6</td><td style="font-weight:900;font-size:28px">6<br>6<br>6</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>7</td><td style="font-weight:900;font-size:28px">6<br>7<br>0</td>
      <td><span class="d">39</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      </tr>
      <tr>
      <td><p>25-10-2021<br>to<br>30-10-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>5</td><td style="font-weight:900;font-size:28px">3<br>5<br>0</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>8</td><td style="font-weight:900;font-size:28px">6<br>6<br>8</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>9</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td><span class="d">52</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">75</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      </tr>
      <tr>
      <td><p>01-11-2021<br>to<br>06-11-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000"></span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000"></span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000"></span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000"></span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000"></span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000"></span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td>
      </tr>
      <tr>
      <td><p>08-11-2021<br>to<br>13-11-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">95</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td>
      </tr>
      <tr>
      <td><p>15-11-2021<br>to<br>20-11-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">44</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d"><span>4</span>7</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">5<br>6<br>8</td>
      <td><span class="d"><span>9</span>6</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">99</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>6</td>
      </tr>
      <tr>
      <td><p>22-11-2021<br>to<br>27-11-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>3</td><td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">9<br>9<br>0</td><td style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td><span class="d">34</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>7</td><td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">7<br>8<br>0</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      </tr>
      <tr>
      <td><p>29-11-2021<br>to<br>04-12-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>7</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td><span class="d"><span>5</span>9</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>5</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td><span class="d"><span>0</span>1</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>6<br>0</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>3</td>
      </tr>
      <tr>
      <td><p>06-12-2021<br>to<br>11-12-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d" style="color:#ff0000">22</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>8</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">5<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>5</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td><span class="d" style="color:#ff0000">88</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>4</td>
      </tr>
      <tr>
      <td><p>13-12-2021<br>to<br>18-12-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">54</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td><span class="d">31</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>6</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td><span class="d"><span>2</span>6</span></td>
      <td style="font-weight:900;font-size:28px">5<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d"><span>2</span>8</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      </tr>
      <tr>
      <td><p>20-12-2021<br>to<br>25-12-2021</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>5</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d">91</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td><span class="d">80</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td><span class="d">96</span></td>
      <td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      </tr>
      <tr>
      <td><p>27-12-2021<br>to<br>01-01-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">4<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
      <td><span class="d"><span>9</span>0</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td><span class="d"><span>4</span>7</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>0</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>3</td><td style="font-weight:900;font-size:28px">7<br>8<br>8</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">6<br>7<br>0</td>
      </tr>
      <tr>
      <td><p>03-01-2022<br>to<br>08-01-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>5</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td><span class="d" style="color:#ff0000">00</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>0</td>
      <td><span class="d">32</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>4</td><td style="font-weight:900;font-size:28px">4<br>6<br>0</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>4</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">85</span></td>
      <td style="font-weight:900;font-size:28px">3<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d">09</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      </tr>
      <tr>
      <td><p>10-01-2022<br>to<br>15-01-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d" style="color:#ff0000">66</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td><span class="d" style="color:#ff0000">33</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">56</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">4<br>0<br>0</td>
      </tr>
      <tr>
      <td><p>17-01-2022<br>to<br>22-01-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>9<br>0</td>
      <td><span class="d">08</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">24</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">8<br>0<br>0</td><td style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td><span class="d">51</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>7</td><td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td><span class="d">46</span></td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      </tr>
      <tr>
      <td><p>24-01-2022<br>to<br>29-01-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td><span class="d">71</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">16</span></td>
      <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000"></span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">65</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td><span class="d" style="color:#ff0000">72</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">70</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      </tr>
      <tr>
      <td><p>31-01-2022<br>to<br>05-02-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">03</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">7<br>8<br>8</td>
      <td><span class="d">30</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td><span class="d">23</span></td>
      <td style="font-weight:900;font-size:28px">3<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>5</td><td style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td><span class="d">26</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>2</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td><span class="d">41</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      </tr>
      <tr>
      <td><p>07-02-2022<br>to<br>12-02-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">1<br>4<br>9</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">64</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td><span class="d" style="color:#ff0000">38</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
      <td><span class="d" style="color:#ff0000">05</span></td>
      <td style="font-weight:900;font-size:28px">4<br>4<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      </tr>
      <tr>
      <td><p>14-02-2022<br>to<br>19-02-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>7</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
      <td><span class="d">81</span></td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>8</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">3<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td><span class="d">67</span></td>
      <td style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      </tr>
      <tr>
      <td><p>21-02-2022<br>to<br>26-02-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td><span class="d">02</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>0</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td><span class="d">89</span></td>
      <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">6<br>6<br>9</td>
      <td><span class="d">15</span></td>
      <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td><span class="d">68</span></td>
      <td style="font-weight:900;font-size:28px">3<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>0</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">4<br>8<br>0</td>
      </tr>
      <tr>
      <td><p>28-02-2022<br>to<br>05-03-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td><span class="d">92</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td><span class="d">10</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">90</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">1<br>6<br>0</td><td style="font-weight:900;font-size:28px">2<br>6<br>9</td>
      <td><span class="d">76</span></td>
      <td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      </tr>
      <tr>
      <td><p>07-03-2022<br>to<br>12-03-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td><span class="d">69</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">2<br>3<br>4</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
      <td><span class="d">79</span></td>
      <td style="font-weight:900;font-size:28px">1<br>8<br>0</td><td style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td><span class="d">58</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td><span class="d">29</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td><span class="d" style="color:#ff0000">49</span></td>
      <td style="font-weight:900;font-size:28px">3<br>8<br>8</td>
      </tr>
      <tr>
      <td><p>14-03-2022<br>to<br>19-03-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td><span class="d">13</span></td>
      <td style="font-weight:900;font-size:28px">1<br>3<br>9</td><td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td><span class="d" style="color:#ff0000">77</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td><span class="d" style="color:#ff0000">61</span></td>
      <td style="font-weight:900;font-size:28px">5<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">6<br>6<br>8</td><td style="font-weight:900;font-size:28px"><br><br></td>
      <td><span class="d" style="color:#ff0000"></span></td>
      <td style="font-weight:900;font-size:28px"><br><br></td><td style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td><span class="d">40</span></td>
      <td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      </tr>
      <tr>
      <td><p>21-03-2022<br>to<br>26-03-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td><span class="d">74</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">2<br>4<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
      <td><span class="d">97</span></td>
      <td style="font-weight:900;font-size:28px">8<br>9<br>0</td><td style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td><span class="d">45</span></td>
      <td style="font-weight:900;font-size:28px">4<br>5<br>6</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td><span class="d">73</span></td>
      <td style="font-weight:900;font-size:28px">4<br>9<br>0</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td><span class="d">42</span></td>
      <td style="font-weight:900;font-size:28px">3<br>3<br>6</td>
      </tr>
      <tr>
      <td><p>28-03-2022<br>to<br>02-04-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
      <td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td><span class="d" style="color:#ff0000">94</span></td>
      <td style="font-weight:900;font-size:28px">3<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td><span class="d">60</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>9</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td><span class="d">07</span></td>
      <td style="font-weight:900;font-size:28px">2<br>2<br>3</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td><span class="d" style="color:#ff0000">27</span></td>
      <td style="font-weight:900;font-size:28px">5<br>6<br>6</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td><span class="d">63</span></td>
      <td style="font-weight:900;font-size:28px">7<br>8<br>8</td><td style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td><span class="d">82</span></td>
      <td style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      </tr>
      <tr>
        <td><p>04-04-2022<br>to<br>09-04-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
        <td><span class="d">51</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>3<br>9</td>
        <td><span class="d">39</span></td>
        <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
        <td><span class="d">84</span></td>
        <td style="font-weight:900;font-size:28px">7<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
        <td><span class="d">80</span></td>
        <td style="font-weight:900;font-size:28px">3<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>8</td>
        <td><span class="d">79</span></td>
        <td style="font-weight:900;font-size:28px">5<br>5<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>0</td>
        <td><span class="d">18</span></td>
        <td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      </tr>
      <tr>
        <td><p>11-04-2022<br>to<br>16-04-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
        <td><span class="d">26</span></td>
        <td style="font-weight:900;font-size:28px">7<br>9<br>0</td><td style="font-weight:900;font-size:28px">6<br>7<br>9</td>
        <td><span class="d">28</span></td>
        <td style="font-weight:900;font-size:28px">4<br>6<br>8</td><td style="font-weight:900;font-size:28px">3<br>8<br>9</td>
        <td><span class="d">01</span></td>
        <td style="font-weight:900;font-size:28px">1<br>2<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
        <td><span class="d">68</span></td>
        <td style="font-weight:900;font-size:28px">3<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>6</td>
        <td><span class="d">96</span></td>
        <td style="font-weight:900;font-size:28px">2<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
        <td><span class="d">31</span></td>
        <td style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      </tr>
      <tr>
        <td><p>18-04-2022<br>to<br>23-04-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">2<br>4<br>5</td>
        <td><span class="d" style="color:#ff0000">11</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>7<br>9</td>
        <td><span class="d">13</span></td>
        <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>6<br>0</td>
        <td><span class="d" style="color:#ff0000">83</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">5<br>8<br>9</td>
        <td><span class="d">28</span></td>
        <td style="font-weight:900;font-size:28px">1<br>1<br>6</td><td style="font-weight:900;font-size:28px">2<br>7<br>0</td>
        <td><span class="d">95</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
        <td><span class="d" style="color:#ff0000">33</span></td>
        <td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      </tr>
      <tr>
        <td><p>25-04-2022<br>to<br>30-04-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">3<br>6<br>8</td>
        <td><span class="d" style="color:#ff0000">77</span></td>
        <td style="font-weight:900;font-size:28px">1<br>7<br>9</td><td style="font-weight:900;font-size:28px">5<br>6<br>9</td>
        <td><span class="d">06</span></td>
        <td style="font-weight:900;font-size:28px">4<br>4<br>8</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
        <td><span class="d">02</span></td>
        <td style="font-weight:900;font-size:28px">3<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
        <td><span class="d">84</span></td>
        <td style="font-weight:900;font-size:28px">2<br>2<br>0</td><td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
        <td><span class="d">04</span></td>
        <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>2<br>3</td>
        <td><span class="d">71</span></td>
        <td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      </tr>
      <tr>
        <td><p>02-05-2022<br>to<br>07-05-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">2<br>8<br>0</td>
        <td><span class="d">02</span></td>
        <td style="font-weight:900;font-size:28px">2<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>7<br>8</td>
        <td><span class="d">82</span></td>
        <td style="font-weight:900;font-size:28px">6<br>6<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>8</td>
        <td><span class="d">86</span></td>
        <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">2<br>3<br>5</td>
        <td><span class="d">06</span></td>
        <td style="font-weight:900;font-size:28px">1<br>7<br>8</td><td style="font-weight:900;font-size:28px">5<br>7<br>0</td>
        <td><span class="d" style="color:#ff0000"><span class="circle" onclick="Scheem1()">2</span><span class="circle2" onclick="Scheem2()">7</span></span></td>
        <td style="font-weight:900;font-size:28px">5<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
        <td><span class="d">29</span></td>
        <td style="font-weight:900;font-size:28px">3<br>8<br>8</td>
      </tr>
      <tr>
        <td><p>09-05-2022<br>to<br>14-05-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
        <td><span class="d">56</span></td>
        <td style="font-weight:900;font-size:28px">1<br>2<br>3</td><td style="font-weight:900;font-size:28px">3<br>6<br>9</td>
        <td><span class="d">80</span></td>
        <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">3<br>9<br>0</td>
        <td><span class="d">21</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">1<br>5<br>7</td>
        <td><span class="d" style="color:#ff0000"><span class="circle" onclick="Scheem1()">3</span><span class="circle2" onclick="Scheem2()">8</span></span></td>
        <td style="font-weight:900;font-size:28px">4<br>4<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>7</td>
        <td><span class="d">78</span></td>
        <td style="font-weight:900;font-size:28px">2<br>2<br>4</td><td style="font-weight:900;font-size:28px">5<br>5<br>8</td>
        <td><span class="d">84</span></td>
        <td style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      </tr>
      <tr>
        <td><p>16-05-2022<br>to<br>21-05-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
        <td><span class="d">48</span></td>
        <td style="font-weight:900;font-size:28px">2<br>3<br>3</td><td style="font-weight:900;font-size:28px">3<br>4<br>6</td>
        <td><span class="d">31</span></td>
        <td style="font-weight:900;font-size:28px">6<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>4<br>9</td>
        <td><span class="d" style="color:#ff0000"><span class="circle" onclick="Scheem1()">4</span><span class="circle2" onclick="Scheem2()">9</span></span></td>
        <td style="font-weight:900;font-size:28px">4<br>7<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
        <td><span class="d">45</span></td>
        <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">1<br>2<br>8</td>
        <td><span class="d">10</span></td>
        <td style="font-weight:900;font-size:28px">4<br>8<br>8</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
        <td><span class="d">97</span></td>
        <td style="font-weight:900;font-size:28px">3<br>6<br>8</td>	
      </tr>
      <tr>
        <td><p>23-05-2022<br>to<br>28-05-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">1<br>4<br>0</td>
        <td><span class="d">5<span>9</span></span></td>
        <td style="font-weight:900;font-size:28px">4<br>6<br>9</td><td style="font-weight:900;font-size:28px">6<br>9<br>0</td>
        <td><span class="d" style="color:#ff0000"><span class="circle" onclick="Scheem1()">5</span><span class="circle2" onclick="Scheem2()">0</span></span></td>
        <td style="font-weight:900;font-size:28px">3<br>3<br>4</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
        <td><span class="d">57</span></td>
        <td style="font-weight:900;font-size:28px">4<br>5<br>8</td><td style="font-weight:900;font-size:28px">1<br>3<br>8</td>
        <td><span class="d">2<span class="circle3" onclick="Scheem3()">6</span></span></td>
        <td style="font-weight:900;font-size:28px">1<br>5<br>0</td><td style="font-weight:900;font-size:28px">6<br>6<br>6</td>
        <td><span class="d">86</span></td>
        <td style="font-weight:900;font-size:28px">1<br>6<br>9</td><td style="font-weight:900;font-size:28px">3<br>4<br>5</td>
        <td><span class="d">20</span></td>
        <td style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      </tr>
      <tr>
        <td><p>30-05-2022<br>to<br>04-06-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
        <td><span class="d">71</span></td>
        <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">3<br>5<br>0</td>
        <td><span class="d">8<span>6</span></span></td>
        <td style="font-weight:900;font-size:28px">3<br>5<br>8</td><td style="font-weight:900;font-size:28px">5<br>5<br>8</td>
        <td><span class="d">81</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>4</td><td style="font-weight:900;font-size:28px">5<br>6<br>7</td>
        <td><span class="d">8<span class="circle3" onclick="Scheem3()">5</span></span></td>
        <td style="font-weight:900;font-size:28px">4<br>4<br>7</td><td style="font-weight:900;font-size:28px">1<br>4<br>5</td>
        <td><span class="d">0<span class="circle3" onclick="Scheem3()">6</span></span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>0</td>
        <td><span class="d" style="color:#ff0000">83</span></td>
        <td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      </tr>
      <tr>
        <td><p>06-06-2022<br>to<br>11-06-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">1<br>4<br>8</td>
        <td><span class="d">35</span></td>
        <td style="font-weight:900;font-size:28px">6<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>8</td>
        <td><span class="d">52</span></td>
        <td style="font-weight:900;font-size:28px">6<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>7<br>8</td>
        <td><span class="d" style="color:#ff0000">6<span>4</span></span></td>
        <td style="font-weight:900;font-size:28px">3<br>3<br>8</td><td style="font-weight:900;font-size:28px">4<br>4<br>4</td>
        <td><span class="d" style="color:#ff0000">2<span class="circle3" onclick="Scheem3()">2</span></span></td>
        <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">2<br>4<br>7</td>
        <td><span class="d">3<span class="circle3" onclick="Scheem3()">5</span></span></td>
        <td style="font-weight:900;font-size:28px">8<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
        <td><span class="d" style="color:#ff0000">55</span></td>
        <td style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      </tr>
      <tr>
        <td><p>13-06-2022<br>to<br>18-06-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">2<br>3<br>8</td>
        <td><span class="d">34</span></td>
        <td style="font-weight:900;font-size:28px">6<br>9<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
        <td><span class="d" style="color:#ff0000">44</span></td>
        <td style="font-weight:900;font-size:28px">2<br>6<br>6</td><td style="font-weight:900;font-size:28px">4<br>5<br>6</td>
        <td><span class="d">58</span></td>
        <td style="font-weight:900;font-size:28px">1<br>3<br>4</td><td style="font-weight:900;font-size:28px">1<br>8<br>8</td>
        <td><span class="d">7<span class="circle3" onclick="Scheem3()">3</span></span></td>
        <td style="font-weight:900;font-size:28px">1<br>4<br>8</td><td style="font-weight:900;font-size:28px">3<br>5<br>9</td>
        <td><span class="d" style="color:#ff0000">7<span class="circle3" onclick="Scheem3()">2</span></span></td>
        <td style="font-weight:900;font-size:28px">3<br>9<br>0</td><td style="font-weight:900;font-size:28px">3<br>4<br>0</td>
        <td><span class="d">76</span></td>
        <td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      </tr>
      <tr>
        <td><p>20-06-2022<br>to<br>25-06-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
        <td><span class="d">21</span></td>
        <td style="font-weight:900;font-size:28px">5<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>0</td>
        <td><span class="d">59</span></td>
        <td style="font-weight:900;font-size:28px">4<br>5<br>0</td><td style="font-weight:900;font-size:28px">4<br>4<br>0</td>
        <td><span class="d" style="color:#ff0000">83</span></td>
        <td style="font-weight:900;font-size:28px">1<br>5<br>7</td><td style="font-weight:900;font-size:28px">3<br>4<br>7</td>
        <td><span class="d">40</span></td>
        <td style="font-weight:900;font-size:28px">4<br>6<br>0</td><td style="font-weight:900;font-size:28px">1<br>5<br>0</td>
        <td><span class="d">6<span class="circle3" onclick="Scheem3()">3</span></span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>6</td><td style="font-weight:900;font-size:28px">3<br>6<br>7</td>
        <td><span class="d">60</span></td>
        <td style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      </tr>
      <tr>
        <td><p>27-06-2022<br>to<br>02-07-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">2<br>8<br>9</td>
        <td><span class="d">96</span></td>
        <td style="font-weight:900;font-size:28px">4<br>5<br>7</td><td style="font-weight:900;font-size:28px">4<br>5<br>9</td>
        <td><span class="d">80</span></td>
        <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>3</td>
        <td><span class="d">86</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>9</td><td style="font-weight:900;font-size:28px">1<br>9<br>0</td>
        <td><span class="d">02</span></td>
        <td style="font-weight:900;font-size:28px">7<br>7<br>8</td><td style="font-weight:900;font-size:28px">4<br>7<br>0</td>
        <td><span class="d">13</span></td>
        <td style="font-weight:900;font-size:28px">3<br>5<br>5</td><td style="font-weight:900;font-size:28px">2<br>5<br>6</td>
        <td><span class="d">36</span></td>
        <td style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      </tr>
      <tr>
        <td><p>04-07-2022<br>to<br>09-07-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">1<br>6<br>7</td>
        <td><span class="d" style="color:#ff0000">44</span></td>
        <td style="font-weight:900;font-size:28px">7<br>7<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>0</td>
        <td><span class="d" style="color:#ff0000">94</span></td>
        <td style="font-weight:900;font-size:28px">3<br>5<br>6</td><td style="font-weight:900;font-size:28px">2<br>3<br>6</td>
        <td><span class="d">15</span></td>
        <td style="font-weight:900;font-size:28px">3<br>4<br>8</td><td style="font-weight:900;font-size:28px">1<br>2<br>9</td>
        <td><span class="d">26</span></td>
        <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>7<br>8</td>
        <td><span class="d" style="color:#ff0000">99</span></td>
        <td style="font-weight:900;font-size:28px">6<br>6<br>7</td><td style="font-weight:900;font-size:28px">1<br>8<br>9</td>
        <td><span class="d" style="color:#ff0000">83</span></td>
        <td style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      </tr>
      <tr>
        <td><p>11-07-2022<br>to<br>16-07-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">2<br>3<br>4</td>
        <td><span class="d" style="color:#ff0000">99</span></td>
        <td style="font-weight:900;font-size:28px">2<br>8<br>9</td><td style="font-weight:900;font-size:28px">5<br>7<br>8</td>
        <td><span class="d">07</span></td>
        <td style="font-weight:900;font-size:28px">1<br>2<br>4</td><td style="font-weight:900;font-size:28px">1<br>7<br>9</td>
        <td><span class="d">76</span></td>
        <td style="font-weight:900;font-size:28px">8<br>8<br>0</td><td style="font-weight:900;font-size:28px">4<br>5<br>5</td>
        <td><span class="d">47</span></td>
        <td style="font-weight:900;font-size:28px">7<br>0<br>0</td><td style="font-weight:900;font-size:28px">2<br>5<br>0</td>
        <td><span class="d">75</span></td>
        <td style="font-weight:900;font-size:28px">1<br>5<br>9</td><td style="font-weight:900;font-size:28px">2<br>3<br>7</td>
        <td><span class="d">20</span></td>
        <td style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      </tr>
      <tr>
        <td><p>18-07-2022<br>to<br>23-07-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
        <td style="font-weight:900;font-size:28px">1<br>2<br>3</td>
        <td><span class="d">60</span></td>
        <td style="font-weight:900;font-size:28px">1<br>9<br>0</td><td style="font-weight:900;font-size:28px">4<br>6<br>9</td>
        <td><span class="d">92</span></td>
        <td style="font-weight:900;font-size:28px">1<br>4<br>7</td><td style="font-weight:900;font-size:28px">7<br>8<br>9</td>
        <td><span class="d">40</span></td>
        <td style="font-weight:900;font-size:28px">4<br>7<br>9</td><td style="font-weight:900;font-size:28px">4<br>8<br>9</td>
        <td><span class="d">10</span></td>
        <td style="font-weight:900;font-size:28px">3<br>8<br>9</td><td style="font-weight:900;font-size:28px">4<br>4<br>7</td>
        <td><span class="d">58</span></td>
        <td style="font-weight:900;font-size:28px">2<br>7<br>9</td><td style="font-weight:900;font-size:28px">1<br>3<br>0</td>
        <td><span class="d" style="color:#ff0000">49</span></td>
        <td style="font-weight:900;font-size:28px">2<br>2<br>5</td>
      </tr><tr><td><p>25-07-2022<br>to<br>30-07-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td>
    <td class="jd"><span class="d">86</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td class="jd"><span class="d" style="color:#ff0000">88</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td class="jd"><span class="d">26</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>5</td>
      <td class="jd"><span class="d">14</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td class="jd"><span class="d">37</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>0</td>
  <td class="jd"><span class="d" style="color:#ff0000">11</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>5</td></tr><tr><td><p>01-08-2022<br>to<br>06-08-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>4</td>
    <td class="jd"><span class="d">95</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>6</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td class="jd"><span class="d" style="color:#ff0000">49</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>8</td>
      <td class="jd"><span class="d">08</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>4</td><td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>8</td>
      <td class="jd"><span class="d">89</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>8</td>
      <td class="jd"><span class="d">30</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>6</td>
  <td class="jd"><span class="d">28</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>9</td></tr><tr><td><p>08-08-2022<br>to<br>13-08-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>8</td>
    <td class="jd"><span class="d">76</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td class="jd"><span class="d">60</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td class="jd"><span class="d">89</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td class="jd"><span class="d" style="color:#ff0000">22</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>6</td><td class="pt" style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td class="jd"><span class="d">24</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>5</td>
  <td class="jd"><span class="d">04</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">7<br>7<br>0</td></tr><tr><td><p>15-08-2022<br>to<br>20-08-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px"><br><br></td>
    <td class="jd"><span class="d" style="color:#ff0000"></span></td>
    <td class="pt" style="font-weight:900;font-size:28px"><br><br></td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td class="jd"><span class="d">31</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>7</td><td class="pt" style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td class="jd"><span class="d">69</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>5</td><td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>5</td>
      <td class="jd"><span class="d">32</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>6</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td class="jd"><span class="d">48</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>7</td>
  <td class="jd"><span class="d" style="color:#ff0000">66</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>6</td></tr><tr><td><p>22-08-2022<br>to<br>27-08-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td>
    <td class="jd"><span class="d">25</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td class="jd"><span class="d">63</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td class="jd"><span class="d">14</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>0</td>
      <td class="jd"><span class="d">82</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td class="jd"><span class="d">12</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>9</td>
  <td class="jd"><span class="d">69</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td></tr><tr><td><p>29-08-2022<br>to<br>03-09-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>0</td>
    <td class="jd"><span class="d">82</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td class="jd"><span class="d">85</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>7</td>
      <td class="jd"><span class="d" style="color:#ff0000">22</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">44</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">66</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>6</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>7</td>
  <td class="jd"><span class="d">37</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>4</td></tr><tr><td><p>05-09-2022<br>to<br>10-09-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>9</td>
    <td class="jd"><span class="d" style="color:#ff0000">49</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>3</td>
      <td class="jd"><span class="d">95</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>7</td>
      <td class="jd"><span class="d">95</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>8</td>
      <td class="jd"><span class="d">23</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>9</td>
      <td class="jd"><span class="d">47</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>9</td>
  <td class="jd"><span class="d" style="color:#ff0000">27</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>4</td></tr><tr><td><p>12-09-2022<br>to<br>17-09-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>9</td>
    <td class="jd"><span class="d">42</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td class="jd"><span class="d">71</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td class="jd"><span class="d">12</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>6</td><td class="pt" style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">99</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>4</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td class="jd"><span class="d">51</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>4</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>6</td>
  <td class="jd"><span class="d">18</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>3</td></tr><tr><td><p>19-09-2022<br>to<br>24-09-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>8</td>
    <td class="jd"><span class="d">79</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>9</td>
      <td class="jd"><span class="d">68</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td class="jd"><span class="d">71</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">11</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td class="jd"><span class="d" style="color:#ff0000">83</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>6</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>6</td>
  <td class="jd"><span class="d">03</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>7</td></tr><tr><td><p>26-09-2022<br>to<br>01-10-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td class="jd"><span class="d">68</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>3</td>
      <td class="jd"><span class="d">69</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td class="jd"><span class="d">18</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>0</td>
      <td class="jd"><span class="d">14</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td class="jd"><span class="d">04</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>0<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>8</td>
  <td class="jd"><span class="d">96</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>0</td></tr><tr><td><p>03-10-2022<br>to<br>08-10-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>2</td>
    <td class="jd"><span class="d">65</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>9<br>0</td>
      <td class="jd"><span class="d">04</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>6</td><td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td class="jd"><span class="d">07</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>7</td>
      <td class="jd"><span class="d">40</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">88</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>4</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td>
  <td class="jd"><span class="d">15</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">5<br>0<br>0</td></tr><tr><td><p>10-10-2022<br>to<br>15-10-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>9</td>
    <td class="jd"><span class="d" style="color:#ff0000">83</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td class="jd"><span class="d">91</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>9</td><td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td class="jd"><span class="d">97</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">9<br>9<br>0</td>
      <td class="jd"><span class="d">84</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td class="jd"><span class="d">32</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>1<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>0</td>
  <td class="jd"><span class="d">45</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>8</td></tr><tr><td><p>17-10-2022<br>to<br>22-10-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td>
    <td class="jd"><span class="d">21</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>6</td>
      <td class="jd"><span class="d">37</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td class="jd"><span class="d">10</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td class="jd"><span class="d">59</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td class="jd"><span class="d">67</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td>
  <td class="jd"><span class="d" style="color:#ff0000">66</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>9</td></tr><tr><td><p>31-10-2022<br>to<br>05-11-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td>
    <td class="jd"><span class="d" style="color:#ff0000">88</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td class="jd"><span class="d">08</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">66</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td class="jd"><span class="d">62</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>0</td>
      <td class="jd"><span class="d">39</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>9</td>
  <td class="jd"><span class="d">80</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>9</td></tr><tr><td><p>07-11-2022<br>to<br>12-11-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>7</td>
    <td class="jd"><span class="d">28</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>0<br>0</td>
      <td class="jd"><span class="d">32</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td class="jd"><span class="d">20</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>4</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td class="jd"><span class="d">04</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td class="jd"><span class="d">29</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>9</td><td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>7</td>
  <td class="jd"><span class="d">57</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>8</td></tr><tr><td><p>14-11-2022<br>to<br>19-11-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>0</td>
    <td class="jd"><span class="d">59</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td class="jd"><span class="d">07</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td class="jd"><span class="d">48</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>3</td><td class="pt" style="font-weight:900;font-size:28px">3<br>9<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">22</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>9</td>
      <td class="jd"><span class="d">23</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td>
  <td class="jd"><span class="d" style="color:#ff0000">44</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>6</td></tr><tr><td><p>21-11-2022<br>to<br>26-11-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>7</td>
    <td class="jd"><span class="d">46</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">6<br>0<br>0</td><td class="pt" style="font-weight:900;font-size:28px">7<br>9<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">61</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">7<br>7<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">49</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>5</td>
      <td class="jd"><span class="d">25</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">38</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>0</td>
  <td class="jd"><span class="d">19</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>9</td></tr><tr><td><p>28-11-2022<br>to<br>03-12-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>6</td>
    <td class="jd"><span class="d">28</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>4</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>6</td>
      <td class="jd"><span class="d">45</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>0<br>0</td><td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">33</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>8</td><td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td class="jd"><span class="d" style="color:#ff0000">88</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">49</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>9</td>
  <td class="jd"><span class="d">93</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>0</td></tr><tr><td><p>05-12-2022<br>to<br>10-12-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td>
    <td class="jd"><span class="d">39</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td class="jd"><span class="d">84</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td class="jd"><span class="d">01</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>4</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td class="jd"><span class="d">02</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">6<br>8<br>8</td>
      <td class="jd"><span class="d">28</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">8<br>0<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>7</td>
  <td class="jd"><span class="d">59</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>8</td></tr><tr><td><p>12-12-2022<br>to<br>17-12-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>5</td>
    <td class="jd"><span class="d" style="color:#ff0000">00</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>7</td>
      <td class="jd"><span class="d">89</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td class="jd"><span class="d">58</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>1<br>6</td><td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>5</td>
      <td class="jd"><span class="d">41</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td class="jd"><span class="d">40</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>6</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>6</td>
  <td class="jd"><span class="d">21</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td></tr><tr><td><p>19-12-2022<br>to<br>24-12-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>9</td>
    <td class="jd"><span class="d">87</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td class="jd"><span class="d">86</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>6</td><td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>0</td>
      <td class="jd"><span class="d">02</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>0<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>0</td>
      <td class="jd"><span class="d">67</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td class="jd"><span class="d">02</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>0</td>
  <td class="jd"><span class="d">58</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>3</td></tr><tr><td><p>26-12-2022<br>to<br>31-12-2022</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>7</td>
    <td class="jd"><span class="d">20</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">6<br>9<br>0</td>
      <td class="jd"><span class="d">59</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">72</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>7</td>
      <td class="jd"><span class="d">13</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td>
      <td class="jd"><span class="d">68</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>9<br>0</td>
  <td class="jd"><span class="d">04</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td></tr><tr><td><p>02-01-2023<br>to<br>07-01-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>0</td>
    <td class="jd"><span class="d" style="color:#ff0000">16</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>8</td>
      <td class="jd"><span class="d">14</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td class="jd"><span class="d">12</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td class="jd"><span class="d">26</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>2</td><td class="pt" style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td class="jd"><span class="d">48</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>7</td>
  <td class="jd"><span class="d">30</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>4</td></tr><tr><td><p>09-01-2023<br>to<br>14-01-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>9</td>
    <td class="jd"><span class="d">24</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>8</td>
      <td class="jd"><span class="d">30</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>7</td><td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">16</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td class="jd"><span class="d">59</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">33</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>6</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>0</td>
  <td class="jd"><span class="d">39</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>9</td></tr><tr><td><p>16-01-2023<br>to<br>21-01-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>8</td>
    <td class="jd"><span class="d">34</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>0</td>
      <td class="jd"><span class="d">69</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">50</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td class="jd"><span class="d">01</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td class="jd"><span class="d">30</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>4</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>6</td>
  <td class="jd"><span class="d">12</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>0</td></tr><tr><td><p>23-01-2023<br>to<br>28-01-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>8</td>
    <td class="jd"><span class="d">41</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td class="jd"><span class="d">81</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>8</td><td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">00</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px"><br><br></td>
      <td class="jd"><span class="d" style="color:#ff0000"></span></td>
      <td class="pt" style="font-weight:900;font-size:28px"><br><br></td><td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td class="jd"><span class="d">54</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>5</td>
  <td class="jd"><span class="d">80</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>8</td></tr><tr><td><p>30-01-2023<br>to<br>04-02-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>5</td>
    <td class="jd"><span class="d">12</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td class="jd"><span class="d">07</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>9</td>
      <td class="jd"><span class="d">87</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>4</td>
      <td class="jd"><span class="d" style="color:#ff0000">83</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>0</td>
      <td class="jd"><span class="d">59</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td>
  <td class="jd"><span class="d" style="color:#ff0000">49</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>9</td></tr><tr><td><p>06-02-2023<br>to<br>11-02-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>7</td>
    <td class="jd"><span class="d">43</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>8</td>
      <td class="jd"><span class="d">82</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td class="jd"><span class="d">19</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td class="jd"><span class="d">42</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td class="jd"><span class="d">90</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>9</td>
  <td class="jd"><span class="d">78</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>7</td></tr><tr><td><p>13-02-2023<br>to<br>18-02-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>8</td>
    <td class="jd"><span class="d">70</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>5</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td class="jd"><span class="d">47</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td class="jd"><span class="d">36</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td class="jd"><span class="d">45</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td class="jd"><span class="d">35</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td>
  <td class="jd"><span class="d" style="color:#ff0000">27</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>0</td></tr><tr><td><p>20-02-2023<br>to<br>25-02-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>0</td>
    <td class="jd"><span class="d">17</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>7</td>
      <td class="jd"><span class="d">06</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td class="jd"><span class="d">23</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td class="jd"><span class="d" style="color:#ff0000">49</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>9</td>
      <td class="jd"><span class="d">53</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>6</td><td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>9</td>
  <td class="jd"><span class="d">96</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">6<br>0<br>0</td></tr><tr><td><p>27-02-2023<br>to<br>04-03-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td>
    <td class="jd"><span class="d" style="color:#ff0000">99</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>1<br>7</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td class="jd"><span class="d">29</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>9</td><td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>9</td>
      <td class="jd"><span class="d">80</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td class="jd"><span class="d">78</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>7</td>
      <td class="jd"><span class="d">15</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>6</td>
  <td class="jd"><span class="d" style="color:#ff0000">11</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>7</td></tr><tr><td><p>06-03-2023<br>to<br>11-03-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>9</td>
    <td class="jd"><span class="d">80</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>5</td>
      <td class="jd"><span class="d">84</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>8</td><td class="pt" style="font-weight:900;font-size:28px"><br><br></td>
      <td class="jd"><span class="d" style="color:#ff0000"></span></td>
      <td class="pt" style="font-weight:900;font-size:28px"><br><br></td><td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">94</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td class="jd"><span class="d">06</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>0</td>
  <td class="jd"><span class="d">74</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>8</td></tr><tr><td><p>13-03-2023<br>to<br>18-03-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>7</td>
    <td class="jd"><span class="d">86</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>7</td>
      <td class="jd"><span class="d">12</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td class="jd"><span class="d">31</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td class="jd"><span class="d">30</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>4</td><td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td class="jd"><span class="d">36</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>6</td><td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>4</td>
  <td class="jd"><span class="d">89</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>0</td></tr><tr><td><p>20-03-2023<br>to<br>25-03-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td class="jd"><span class="d">65</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>7</td>
      <td class="jd"><span class="d">60</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>4</td>
      <td class="jd"><span class="d">92</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>8<br>9</td>
      <td class="jd"><span class="d">81</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">00</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>6</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>8</td>
  <td class="jd"><span class="d">28</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">8<br>0<br>0</td></tr><tr><td><p>27-03-2023<br>to<br>01-04-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>0</td>
    <td class="jd"><span class="d" style="color:#ff0000">05</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>0<br>0</td><td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>9</td>
      <td class="jd"><span class="d">28</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>6</td>
      <td class="jd"><span class="d">28</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>4</td><td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td>
      <td class="jd"><span class="d">74</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>0</td><td class="pt" style="font-weight:900;font-size:28px">7<br>0<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">77</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>8</td>
  <td class="jd"><span class="d" style="color:#ff0000">99</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>9</td></tr><tr><td><p>03-04-2023<br>to<br>08-04-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>7</td>
    <td class="jd"><span class="d">26</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>0</td><td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>8</td>
      <td class="jd"><span class="d">34</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>6</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td class="jd"><span class="d">97</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td class="jd"><span class="d">58</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>4</td><td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td class="jd"><span class="d">35</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>8</td>
  <td class="jd"><span class="d">45</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>7</td></tr><tr><td><p>10-04-2023<br>to<br>15-04-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td>
    <td class="jd"><span class="d">41</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>6</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>8</td>
      <td class="jd"><span class="d">19</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>0</td>
      <td class="jd"><span class="d">46</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>0</td><td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td class="jd"><span class="d">92</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>7</td>
      <td class="jd"><span class="d">10</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td>
  <td class="jd"><span class="d" style="color:#ff0000">83</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">6<br>8<br>9</td></tr><tr><td><p>17-04-2023<br>to<br>22-04-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>8<br>9</td>
    <td class="jd"><span class="d">86</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>4</td>
      <td class="jd"><span class="d" style="color:#ff0000">72</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>8<br>0</td>
      <td class="jd"><span class="d">09</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>9<br>0</td>
      <td class="jd"><span class="d">13</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td class="jd"><span class="d">45</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td>
  <td class="jd"><span class="d">17</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>9</td></tr><tr><td><p>24-04-2023<br>to<br>29-04-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>0</td>
    <td class="jd"><span class="d">09</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>9<br>0</td>
      <td class="jd"><span class="d">08</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">8<br>0<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>7</td>
      <td class="jd"><span class="d">12</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td><td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">77</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>3</td><td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>0</td>
      <td class="jd"><span class="d">13</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>8</td><td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>0</td>
  <td class="jd"><span class="d">23</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>5</td></tr><tr><td><p>01-05-2023<br>to<br>06-05-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>6</td>
    <td class="jd"><span class="d">12</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>9</td>
      <td class="jd"><span class="d">64</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>9</td>
      <td class="jd"><span class="d">43</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>5</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td class="jd"><span class="d">19</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td class="jd"><span class="d" style="color:#ff0000">11</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>5</td>
  <td class="jd"><span class="d">06</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">8<br>8<br>0</td></tr><tr><td><p>08-05-2023<br>to<br>13-05-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>1<br>8</td>
    <td class="jd"><span class="d" style="color:#ff0000">00</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td class="jd"><span class="d">15</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">66</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>7</td>
      <td class="jd"><span class="d" style="color:#ff0000">38</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>4</td><td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>6</td>
      <td class="jd"><span class="d">69</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>0</td>
  <td class="jd"><span class="d" style="color:#ff0000">88</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>6</td></tr><tr><td><p>15-05-2023<br>to<br>20-05-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>6</td>
    <td class="jd"><span class="d">37</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>8</td>
      <td class="jd"><span class="d">48</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td class="jd"><span class="d" style="color:#ff0000">44</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>0</td>
      <td class="jd"><span class="d">51</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>9<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td>
      <td class="jd"><span class="d">17</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>8</td>
  <td class="jd"><span class="d">51</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>9<br>0</td></tr><tr><td><p>22-05-2023<br>to<br>27-05-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>8</td>
    <td class="jd"><span class="d" style="color:#ff0000">11</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td class="jd"><span class="d">95</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>6</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td class="jd"><span class="d">52</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td class="jd"><span class="d">90</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>9<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>6</td>
      <td class="jd"><span class="d">75</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>0</td><td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>9</td>
  <td class="jd"><span class="d">01</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>0</td></tr><tr><td><p>29-05-2023<br>to<br>03-06-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>8</td>
    <td class="jd"><span class="d">45</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td class="jd"><span class="d">67</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">3<br>9<br>9</td>
      <td class="jd"><span class="d">10</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>0<br>0</td>
      <td class="jd"><span class="d">29</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">94</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>0</td>
  <td class="jd"><span class="d" style="color:#ff0000">77</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>8</td></tr><tr><td><p>05-06-2023<br>to<br>10-06-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>9</td>
    <td class="jd"><span class="d" style="color:#ff0000">00</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>7</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>0</td>
      <td class="jd"><span class="d">24</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">7<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td class="jd"><span class="d">98</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">9<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>7</td>
      <td class="jd"><span class="d">68</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td class="jd"><span class="d">59</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>5</td>
  <td class="jd"><span class="d">13</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>7</td></tr><tr><td><p>12-06-2023<br>to<br>17-06-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>0</td>
    <td class="jd"><span class="d">92</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td><td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">49</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td>
      <td class="jd"><span class="d">28</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>3</td><td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td class="jd"><span class="d">79</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td class="jd"><span class="d" style="color:#ff0000">22</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>7</td><td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>7</td>
  <td class="jd"><span class="d" style="color:#ff0000">61</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>9</td></tr><tr><td><p>19-06-2023<br>to<br>24-06-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>0</td>
    <td class="jd"><span class="d">07</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>3</td><td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>6</td>
      <td class="jd"><span class="d">28</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>3</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">55</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td class="jd"><span class="d">34</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>7</td>
      <td class="jd"><span class="d">25</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td>
  <td class="jd"><span class="d">20</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>8</td></tr><tr><td><p>26-06-2023<br>to<br>01-07-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>8</td>
    <td class="jd"><span class="d">42</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>4</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td>
      <td class="jd"><span class="d">41</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>5</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td class="jd"><span class="d">25</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td class="jd"><span class="d">97</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>4</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td class="jd"><span class="d" style="color:#ff0000">33</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>9</td>
  <td class="jd"><span class="d">96</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>7</td></tr><tr><td><p>03-07-2023<br>to<br>08-07-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>6</td>
    <td class="jd"><span class="d">25</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">05</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td class="jd"><span class="d" style="color:#ff0000">05</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">61</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td class="jd"><span class="d">48</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>8</td>
  <td class="jd"><span class="d">59</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>9</td></tr><tr><td><p>10-07-2023<br>to<br>15-07-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td>
    <td class="jd"><span class="d" style="color:#ff0000">27</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td class="jd"><span class="d">81</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>9</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td class="jd"><span class="d">71</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>9<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td class="jd"><span class="d">23</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>4</td>
      <td class="jd"><span class="d">07</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>3</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>8</td>
  <td class="jd"><span class="d">03</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>8</td></tr><tr><td><p>17-07-2023<br>to<br>22-07-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td class="jd"><span class="d" style="color:#ff0000">94</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>9</td><td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>8</td>
      <td class="jd"><span class="d">79</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>7</td><td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td>
      <td class="jd"><span class="d">34</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>6</td>
      <td class="jd"><span class="d">96</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">8<br>8<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td class="jd"><span class="d" style="color:#ff0000">00</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>0</td>
  <td class="jd"><span class="d">79</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>7</td></tr><tr><td><p>24-07-2023<br>to<br>29-07-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td>
    <td class="jd"><span class="d" style="color:#ff0000">61</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>8</td><td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td class="jd"><span class="d">19</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>4</td><td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td>
      <td class="jd"><span class="d">71</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>8</td>
      <td class="jd"><span class="d">74</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>5</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td>
      <td class="jd"><span class="d">21</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td>
  <td class="jd"><span class="d">84</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>6</td></tr><tr><td><p>31-07-2023<br>to<br>05-08-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">7<br>9<br>0</td>
    <td class="jd"><span class="d">68</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td>
      <td class="jd"><span class="d" style="color:#ff0000">44</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>0<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>5</td>
      <td class="jd"><span class="d" style="color:#ff0000">00</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>8</td>
      <td class="jd"><span class="d">32</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>0</td>
      <td class="jd"><span class="d">97</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>8</td>
  <td class="jd"><span class="d">52</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>7</td></tr><tr><td><p>07-08-2023<br>to<br>12-08-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>8</td>
    <td class="jd"><span class="d">31</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td class="jd"><span class="d" style="color:#ff0000">33</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>2<br>0</td>
      <td class="jd"><span class="d">45</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>6<br>7</td><td class="pt" style="font-weight:900;font-size:28px">5<br>9<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">49</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">77</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>7</td>
  <td class="jd"><span class="d">39</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>8</td></tr><tr><td><p>14-08-2023<br>to<br>19-08-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>5</td>
    <td class="jd"><span class="d">48</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>5</td><td class="pt" style="font-weight:900;font-size:28px"><br><br></td>
      <td class="jd"><span class="d" style="color:#ff0000"></span></td>
      <td class="pt" style="font-weight:900;font-size:28px"><br><br></td><td class="pt" style="font-weight:900;font-size:28px">2<br>7<br>0</td>
      <td class="jd"><span class="d">97</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>6</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>6</td>
      <td class="jd"><span class="d">31</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>9</td>
      <td class="jd"><span class="d">12</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td>
  <td class="jd"><span class="d">69</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>7</td></tr><tr><td><p>21-08-2023<br>to<br>26-08-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>5</td>
    <td class="jd"><span class="d" style="color:#ff0000">16</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>8</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td class="jd"><span class="d">36</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>5</td>
      <td class="jd"><span class="d">18</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>1<br>6</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">72</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>6</td>
      <td class="jd"><span class="d">06</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>0</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>8</td>
  <td class="jd"><span class="d">09</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>8<br>9</td></tr><tr><td><p>28-08-2023<br>to<br>02-09-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>3</td>
    <td class="jd"><span class="d" style="color:#ff0000">61</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">7<br>7<br>0</td>
      <td class="jd"><span class="d">40</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>5</td><td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">88</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>5</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>4</td>
      <td class="jd"><span class="d" style="color:#ff0000">99</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td class="jd"><span class="d" style="color:#ff0000">38</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>4</td>
  <td class="jd"><span class="d" style="color:#ff0000">83</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>6</td></tr><tr><td><p>04-09-2023<br>to<br>09-09-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>5</td>
    <td class="jd"><span class="d">09</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>8<br>9</td>
      <td class="jd"><span class="d">93</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>9</td>
      <td class="jd"><span class="d">71</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>6</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td class="jd"><span class="d">53</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>6</td>
      <td class="jd"><span class="d">59</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>9</td>
  <td class="jd"><span class="d" style="color:#ff0000">00</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>6</td></tr><tr><td><p>11-09-2023<br>to<br>16-09-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>3<br>0</td>
    <td class="jd"><span class="d">48</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td class="jd"><span class="d" style="color:#ff0000">16</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>8</td><td class="pt" style="font-weight:900;font-size:28px">5<br>7<br>8</td>
      <td class="jd"><span class="d">08</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>6<br>9</td><td class="pt" style="font-weight:900;font-size:28px">3<br>3<br>0</td>
      <td class="jd"><span class="d">62</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">7<br>7<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">77</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">8<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>7</td>
  <td class="jd"><span class="d">71</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">2<br>9<br>0</td></tr><tr><td><p>18-09-2023<br>to<br>23-09-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>7</td>
    <td class="jd"><span class="d" style="color:#ff0000">38</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>9</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>6</td>
      <td class="jd"><span class="d">15</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>5</td>
      <td class="jd"><span class="d">02</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>9<br>0</td><td class="pt" style="font-weight:900;font-size:28px">2<br>3<br>6</td>
      <td class="jd"><span class="d">10</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">6<br>6<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">50</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">3<br>7<br>0</td><td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>7</td>
  <td class="jd"><span class="d">20</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>0</td></tr><tr><td><p>25-09-2023<br>to<br>30-09-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">4<br>5<br>6</td>
    <td class="jd"><span class="d" style="color:#ff0000">50</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">2<br>4<br>4</td><td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>4</td>
      <td class="jd"><span class="d" style="color:#ff0000">11</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>8</td><td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">66</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>2<br>3</td><td class="pt" style="font-weight:900;font-size:28px">6<br>8<br>9</td>
      <td class="jd"><span class="d">36</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>4<br>8</td><td class="pt" style="font-weight:900;font-size:28px">7<br>8<br>9</td>
      <td class="jd"><span class="d" style="color:#ff0000">44</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>7</td><td class="pt" style="font-weight:900;font-size:28px">4<br>7<br>8</td>
  <td class="jd"><span class="d">92</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>5</td></tr><tr><td><p>02-10-2023<br>to<br>07-10-2023</p></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td><span class="d">xx</span></td>
    <td style="font-weight:900;font-size:28px">x<br>x<br>x</td>
    <td class="pt" style="font-weight:900;font-size:28px">1<br>8<br>0</td>
    <td class="jd"><span class="d">96</span></td>
    <td class="pt" style="font-weight:900;font-size:28px">5<br>5<br>6</td><td class="pt" style="font-weight:900;font-size:28px">1<br>7<br>9</td>
      <td class="jd"><span class="d">70</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>6<br>0</td><td class="pt" style="font-weight:900;font-size:28px">3<br>5<br>7</td>
      <td class="jd"><span class="d">51</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">4<br>8<br>9</td><td class="pt" style="font-weight:900;font-size:28px">2<br>5<br>8</td>
      <td class="jd"><span class="d" style="color:#ff0000">55</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>5<br>9</td><td class="pt" style="font-weight:900;font-size:28px">5<br>8<br>0</td>
      <td class="jd"><span class="d">32</span></td>
      <td class="pt" style="font-weight:900;font-size:28px">1<br>4<br>7</td><td class="pt" style="font-weight:900;font-size:28px">1<br>6<br>0</td>
  <td class="jd"><span class="d">74</span></td>
  <td class="pt" style="font-weight:900;font-size:28px">3<br>4<br>7</td></tr>`
  }
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
ss += `<tr><td><p>${arr[0] === 0 ?0:arr[0]||'x'}</p></td>`
for (let i = 1; i < arr.length; i++) {
 ss += `<td class="pt" style="font-weight:900;font-size:28px">${arr[i]["patti1"][1] === 0 ? 0 : arr[i]["patti1"][1]||'x'}<br>${arr[i]["patti1"][2] === 0 ? 0 : arr[i]["patti1"][2]||'x'}<br>${arr[i]["patti1"][3] === 0 ? 0 : arr[i]["patti1"][3]||'x'}</td>
 <td class="jd"><span class="d">${arr[i]["patti1"][0] === 0 ? 0 : arr[i]["patti1"][0]||'x'}${arr[i]["patti2"][0] === 0 ? 0 : arr[i]["patti2"][0]||'x'}</span></td>
 <td class="pt" style="font-weight:900;font-size:28px">${arr[i]["patti2"][1] === 0 ? 0 : arr[i]["patti2"][1]||'x'}<br>${arr[i]["patti2"][2] === 0 ? 0 : arr[i]["patti2"][2]||'x'}<br>${arr[i]["patti2"][3] === 0 ? 0 : arr[i]["patti2"][3]||'x'}</td>`
  
}
ss += `</tr>`

  document.getElementById('chart').innerHTML += ss
}

