var address = [],
    title = [],
    creator = [],
    explanation = [],
    license = [];

function add(a,b,c,d,e){
  address.push(a)
  title.push(b)
  creator.push(c)
  explanation.push(d)
  license.push(e)
}


add('https://playentry.org/uploads/discuss/pa/ck/image/packw2uskaen8yuq00105ac394a2mljx.png','스선로고','avocad5','미리캔버스에서 만든 스선로고입니다.','출처 : designed by Good Ware from flaticon 이라고 남겨주시면 엔트리안에서 쓰실수있습니다.')
add('https://playentry.org/uploads/discuss/cv/r3/image/cvr3biirkaene484000p5ac394e2fm8b.png','인작로고','avocad5','미리캔버스에서 만든 인작로고입니다.','출처 : designed by FreePik from flaticon 이라고 남겨주시면 엔트리안에서 쓰실수있습니다.')
add('https://playentry.org/uploads/discuss/vu/ub/image/vuub54o4k9xalxob00105ac3949m4tnk.png','인작로고','njy08192','그냥 평범한 인작,스선 로고임미다','작품 설명란에 제작자 아이디 남겨주세요')
add('https://playentry.org/uploads/discuss/g8/lv/image/g8lv7vjik9xam4gb00115ac394ai03xs.png','스선로고','njy08192','그냥 평범한 인작,스선 로고임미다','작품 설명란에 제작자 아이디 남겨주세요')
add('https://playentry.org/uploads/discuss/h4/k1/image/h4k14y42kbngzdlt0011a5017b43556s.png','선넘는로고','vz61','(생략)','저작권은 없지만, 비정상적인 방법으로 스인에 올라갔을 경우 사용불가')
add('https://playentry.org/uploads/discuss/7w/xl/image/7wxl6mp4kbngx6s6001pa5017bccunon.png','선넘는로고','vz61','(생략)','저작권은 없지만, 비정상적인 방법으로 스인에 올라갔을 경우 사용불가')


//여기부터는 html을 생성하는 코드
for (var i = 0; i < address.length; i++) {
  document.getElementsByClassName('design')[0].innerHTML += `<div class="item"><img src="${address[i]}"><div class="itemtext"><div class="text1"><p onclick="show(${i})">${title[i]}</p></div><p class="text2"><a href="https://playentry.org/${creator[i]}">${creator[i]}</a></p></div></div>`

}

function show(i) {
  document.write(`<link rel="stylesheet" href="app.css">`)
  document.write(`<div class="imgbox"><img src="${address[i]}"></div><div class="title">${title[i]}</div><div class="creator">made by <a href="https://playentry.org/${creator[i]}">${creator[i]}</a></div><div class="subtitle">설명</div><div class="maintext">${explanation[i]}</div><div class="subtitle">저작권</div><div class="maintext">${license[i]}</div>`)
  document.write(`<div class="btn"><a href="${address[i]}" class="down" download target="_blank">다운로드</a><a class="exit" href="index.html">나가기</a>`)
}
