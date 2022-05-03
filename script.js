let nodea = document.querySelectorAll(".cot1");
let itemsl = document.querySelectorAll(".item");
let nodea2 = document.querySelectorAll(".cot2");
let nodea3 = document.querySelectorAll(".cot3");
let  popup=document.querySelector('.pop');
let body=document.querySelector('body');
let container=document.querySelector('container');
const timeEnd = 8000;
const numberLoop = 3;
const vMacDinh1 = 200;
const vMacDinh2 = 250;
const vMacDinh3 = 300;
///////////////
const aPhanTuDau = nodea[0].getBoundingClientRect().top;
const aPhanTuThu2 = nodea[1].getBoundingClientRect().top;
const aPhanTuThu2cot2 = nodea[1].getBoundingClientRect().top;
const aPhanTuCuoi = nodea[9].getBoundingClientRect().top;

function randomColor(el) {
  return (el.style.background = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`);
}
//////////////////////
let v1, v2, v3;

/////////////////////////////
function tinhVanToc(so) {
  let s;
  // console.log(n);

  if (so == 0) {
    s = 1;
  } else if (so == 1) {
    s = 0;
  } else {
    s = 10 - so + 1;
  }
  v = timeEnd / (10 * numberLoop + s + 1);

  console.log(s);

  return v;
}

// function tinhVanToc() {
//   let s;
//   var n = document.getElementById("so").value;
//   if (n) {
//     var tachSo = (n + "").split("");
//     if (Number(tachSo[0]) == 0) {
//       s = 1;
//     } else if (Number(tachSo[0]) == 1) {
//       s = 0;
//     } else {
//       s = 10 - Number(tachSo[0]) + 1;
//     }
//     v1 = timeEnd / (10 * numberLoop + s + 1);

//     console.log(s);

//   } else {
//     v1 = 500;
//   }

// }

/////////////////////////////
function swapel(solangoi, el) {
  const soPhanTu = el.length;

  const solanGoiLaySoDu = solangoi % soPhanTu || el.length;

  for (let i = 0; i < soPhanTu; i++) {
    randomColor(el[i]);
    // console.log(a);

    let bTruocKhiThayDoi = el[i].getBoundingClientRect().top;
    //Hien phan tu sau khi da dua len dau
    if (bTruocKhiThayDoi == aPhanTuCuoi) {
      el[i].style.opacity = "0";
    }

    for (let j = 1; j <= soPhanTu; j++) {
      if (i >= soPhanTu - solanGoiLaySoDu) {
        el[i].style.transform = `translateY(${
          (solanGoiLaySoDu - soPhanTu) * 100
        }%)`;
      } else {
        el[i].style.transform = `translateY(${solanGoiLaySoDu * 100}%)`;
      }
    }

    let b = el[i].getBoundingClientRect().top;

    if (b == aPhanTuDau) {
      el[i].style.opacity = "1";
    }
    //An phan tu cuoi truoc khi dua len dau
    // if(aPhanTuDau==b) {el[i].style.opacity="0";}
  }
}
/////////////////////////////////////

////////////////////////////////////
let ivid1, ivid2, ivid3, iv1Lan2, iv2Lan2, iv3Lan2;

let iv1, iv2, iv3;
////////////////////
function run(v, node, iv, ivid) {
  iv = 0;
  console.log(v);

  ivid = setInterval(
    function () {
      console.log(iv);
      swapel(iv, node);
      iv++;
      return iv;
    },
    v,
    iv
  );
  return [ivid, iv];
  // console.log(`ivid la ${ivid}`);
}

////////////////////////

///////////////CHEAT
document.getElementById("bt3").addEventListener("click", function (e) {
  e.preventDefault();

  let n = document.getElementById("so").value;
  if (n) {
    var tachSo = (n + "").split("");
  } else tachSo = [9, 9, 9];

  v1 = tinhVanToc(Number(tachSo[0]));
  v2 = tinhVanToc(Number(tachSo[1]));
  v3 = tinhVanToc(Number(tachSo[2]));

  [ivid1, iv1] = run(v1, nodea, iv1, ivid1);
  [ivid2, iv2] = run(v2, nodea2, iv2, ivid2);
  [ivid3, iv2] = run(v3, nodea3, iv3, ivid3);
  console.log(tachSo);

  console.log(`ivid1 ${ivid1}`);
  console.log(`ivid2 ${ivid2}`);
  console.log(`ivid3 ${ivid3}`);

  setTimeout(function () {
    clearInterval(ivid1);
    clearInterval(ivid2);
    clearInterval(ivid3);
  }, timeEnd);
});
//////////////

document.getElementById("bt2").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(aPhanTuThu2);
  iv1 = iv2 = iv3 = 0;
  ivid1 = setInterval(() => {
    swapel(iv1, nodea);
    iv1++;
  }, vMacDinh1);

  ivid2 = setInterval(() => {
    swapel(iv2, nodea2);
    iv2++;
  }, vMacDinh2);

  ivid3 = setInterval(() => {
    swapel(iv3, nodea3);
    iv3++;
  }, vMacDinh3);

  // [ivid1,iv1]=run(vMacDinh1,nodea,iv1,ivid1);
  // [ivid2,iv2]=run(vMacDinh2,nodea2,iv2,ivid2);
  // [ivid3,iv2]=run(vMacDinh3,nodea3,iv3,ivid3);
});

iv1Lan2 = iv2Lan2 = iv3Lan2 = 0;

document.getElementById("bt1").addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(ivid1);
  clearInterval(ivid2);
  clearInterval(ivid3);
  console.log("//////////////////");
  

  var ivid1Lan2 = setInterval(() => {
    

    

    swapel(iv1 + iv1Lan2, nodea);

    // console.log(`iv1Lan2 ${iv1Lan2}`);
    // console.log(`iv ${iv1}`);
    iv1Lan2++;
  }, vMacDinh1 * 2);

  var ivid2Lan2 = setInterval(() => {
    swapel(iv2 + iv2Lan2, nodea2);

    // console.log(`iv1Lan2 ${iv1Lan2}`);
    iv2Lan2++;
  }, vMacDinh2 * 2);

  var ivid3Lan2 = setInterval(() => {
    swapel(iv3 + iv3Lan2, nodea3);

    // console.log(`iv1Lan2 ${iv1Lan2}`);
    iv3Lan2++;
  }, vMacDinh3 * 2);

  setTimeout(function () {
    clearInterval(ivid2Lan2);
    clearInterval(ivid1Lan2);
    clearInterval(ivid3Lan2);

    for (let j = 0; j < 10; j++) {
      var a = nodea[j].getBoundingClientRect().top;
      var b = nodea2[j].getBoundingClientRect().top;
      var c = nodea3[j].getBoundingClientRect().top;

      if (aPhanTuThu2+ 100> a&&aPhanTuThu2-100<a) {
        console.log(nodea[j-1]);
        var so1=nodea[j-1].innerHTML;
      }
      if (aPhanTuThu2+ 100> b&&aPhanTuThu2-100<b) {
        console.log(nodea2[j-1]);
        var so2=nodea2[j-1].innerHTML;
      }
      if (aPhanTuThu2+ 100> c&&aPhanTuThu2-100<c) {
        console.log(nodea3[j-1]);
        var so3=nodea3[j-1].innerHTML;
      }
    }
    popup.innerHTML=`🎉🎉🎉Xin chúc mùng số trúng thưởng là
    ${so1}${so2}${so3}`
    
    popup.classList.remove('tat');
    container.style.opacity='0.5';
    popup.style.opacity='1';


  }, 6000);
});

body.addEventListener("click",()=>{
  popup.classList.add('tat')
})
