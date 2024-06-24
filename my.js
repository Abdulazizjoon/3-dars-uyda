let styll=document.querySelector('.styll')
let sty=document.querySelector('.sty')
let s=document.querySelector('.s')
function aaa() {
    document.body.style.color="red"
    styll.style.color="pink"
    styll.style.backgroundColor="white"
}
styll.addEventListener('click',aaa)
function aa() {
    document.body.style.color="#000"
    sty.style.backgroundColor="#000"
    sty.style.color="white"
}
sty.addEventListener('click',aa)
function a() {
    document.body.style.display="none"
    s.style.color="#000"
    s.styl.backgroundColor="white"
}
s.addEventListener('click',a)

//masalalar
//1-masala
// function a(students) {
//   if (!students || students.length === 0) {
//     return null;
//   }

//   let buutton = -1;
//   let b = null;

//   students.forEach((talaba) => {
//     if (talaba.baholar && talaba.baholar.length > 0) {
//       const aa =
//         talaba.baholar.reduce((total, baho) => total + baho, 0) /
//         talaba.baholar.length;
//       if (aa > buutton) {
//         buutton = aa;
//         b = talaba.ism;
//       }
//     }
//   });

//   return b;
// }

// let students = [
//   { ism: "Ali", yosh: 20, baholar: [85, 90, 88] },
//   { ism: "Vali", yosh: 21, baholar: [85, 87, 90] },
//   { ism: "Sami", yosh: 22, baholar: [88, 92, 84] },
// ];

// let d = a(students);
// console.log(d);

//3-masala

// function a(students) {
//   let d = {};
//   students.forEach((b) => {
//     if (b.fanlari && b.fanlari.length > 0) {
//       b.fanlari.forEach((fan) => {
//         if (d[fan]) {
//           d[fan]++;
//         } else {
//           d[fan] = 1;
//         }
//       });
//     }
//   });

//   return d;
// }

// let students = [
//   { ism: "Ali", yosh: 20, fanlari: ["Matematika", "Fizika"] },
//   { ism: "Vali", yosh: 21, fanlari: ["It-dasturlash", "Fizika"] },
//   { ism: "Sami", yosh: 22, fanlari: ["Matematika", "Kimyo", "It-dasturlash"] },
// ];

// let aa = a(students);
// console.log(aa);
