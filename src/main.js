import DateJs from './index.js';
document.write(new DateJs(new Date()).format('YY-MM-DD'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY-MM-DD'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY-MM-DD hh:mm:ss'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY-MM-DD hh:mm:ss:SS'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY-MM-DD hh:mm:ss:SSS'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY/MM/DD'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY/MM/DD hh:mm:ss'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY/MM/DD hh:mm:ss'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY/MM/DD hh:mm:ss:SS'))
document.write('<br/>')
document.write(new DateJs(new Date()).format('YYYY/MM/DD hh:mm:ss:SSS'))
document.write('<br/>')
document.write(new DateJs(new Date()).toZone().format('YYYY/MM/DD hh:mm:ss:SSS'))
document.write('<br/>')
