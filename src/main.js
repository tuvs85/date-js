
document.write(window.dateJs(new Date()).format('YY-MM-DD'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY-MM-DD'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY-MM-DD hh:mm:ss'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY-MM-DD hh:mm:ss:SS'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY-MM-DD hh:mm:ss:SSS'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY/MM/DD'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY/MM/DD hh:mm:ss'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY/MM/DD hh:mm:ss'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY/MM/DD hh:mm:ss:SS'))
document.write('<br/>')
document.write(window.dateJs(new Date()).format('YYYY/MM/DD hh:mm:ss:SSS'))
document.write('<br/>')
document.write(window.dateJs(new Date()).toZone().format('YYYY/MM/DD hh:mm:ss:SSS'))
document.write('<br/>')
document.write(window.dateJs(new Date()).toZone().stamp())
document.write('<br/>')
document.write(window.dateJs(new Date()).$Y);
const time1 = window.dateJs();
const time2 = window.dateJs();
setInterval(()=>{
  // console.log(window.dateJs(1604503596556).countDown(1605499380, 'DD 天 HH 时 mm 分 ss 秒'))
  // console.log(window.dateJs(1604503596556).countDown(1605499380, 'HH 时 mm 分 ss 秒'))
  // console.log(window.dateJs(1604503596556).countDown(1605499380, 'mm 分 ss 秒'))
  // console.log(window.dateJs(1604503596556).countDown(1605499380, 'ss 秒'))
// console.log(window.dateJs(1604503596556).countDown(1605499380, 'DD 天 HH 时 mm 分 ss 秒', true))
// console.log(window.dateJs(1604503596556).countDown(1605499380, 'HH 时 mm 分 ss 秒', true))
// console.log(window.dateJs(1604503596556).countDown(1605499380, 'mm 分 ss 秒', true))
// console.log(window.dateJs(1604503596556).countDown(1605499380, 'ss 秒', true))
},1000)
console.log(window.dateJs().countDown(1604677380, 'DD 天 HH 时 mm 分 ss 秒', true))
console.log(window.dateJs().countDown(1604677380, 'HH 时 mm 分 ss 秒', true))
console.log(window.dateJs().countDown(1604677380, 'mm 分 ss 秒', true))
console.log(window.dateJs().countDown(1604677380, 'ss 秒', true))
