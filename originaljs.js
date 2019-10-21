

//zoom(1.5);

/*########################################
 ALL CHANGES DUPLICATE TO ORIGINAL.JS
 params
js deobfuscators
https://beautifier.io/
http://www.jsnice.org/
tests(all tests use hexadec identifiers and no prefixes)
0)domain lock  -work(on other domain gives console error message  that data not defined and stops)
in https://obfuscator.io/ toggle "evaluate" checkbox to on and you see the error message
1)compact,selfdefence-not working-error in console
2)compact-y,control flow-y 0.75  - works
3) test2 + str arr-y(rotate-y,encode-off,0.8),transform strkeys-y  -  works
4) compact y,control flow y 1,str arr-y(rotate-y,encode-rc4,1),transform strkeys-y  WORKS!
5) test 4 +disable console y     WORKS  
6)dead code 1--works
7)test 4+test 6 combo works
PARAMS AND DEFAULT VALUES

@@@ 1
01 compact code-n
02 Identifier Names Generator-hexadecimal
03 Identifiers Prefix-n/a(Use this option when obfuscating multiple files that are loaded on the same page. )
04 rename glob-n
05 self defense-n(the code won't work when try to deobfuscate.requires the Compact Code setting.)
06 control flow-n
Control Flow Flattening Threshold 0.75
07 dead code-n
Dead Code Injection Threshold-0.4

@@@ 2
08 string array-n
08-1 rotate string array-n
08-2 String Array Encoding-Off
08-3 String Array Threshold-0.8
12 transform obj keys-n(var a = {enabled: true};  ---->  var a = {}; a[_0x2ae0[('0x0')] = true;
ideally used with the String Array setting.)
13 unicode escape sequence-n("Hello World!"  ---->   "'\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64\x21"
This convertion is pretty easy to revert, and will increase the obfuscated code size greatly.
It's not recommended on larger code bases.)

@@@ 3
14 Disable Console Output-n
15 debug protection-n( Can freeze your browser if you open the Developer Tools.
This option makes it almost impossible to use the Console tab of the 
Developer Tools- both on Google Chrome and Mozilla Firefox.)
16 domain lock-n(adds code to top of my code)
17 reserved names-n
18 reserved strings-n
@@@ 4
19 Sourcemaps-Off
20 seed-0(By default (seed = 0), each time you obfuscate your code you'll get a new result)
21 Target-Browser
 #########################################
*/





/*ie<9 compatible */
/*
function addEvent(element, myEvent, fnc) {
    return ((element.attachEvent)
        ? element.attachEvent('on' + myEvent, fnc)
        : element.addEventListener(myEvent, fnc, false));
}
if (document.readyState !== 'loading') {
    onDOMContentLoaded('document is  ready');
} else {
    document.addEventListener('DOMContentLoaded', onDOMContentLoaded('document was not ready'), false);
}
*/
/*
function msec() {
    var d = new Date();
    return d.getTime();
    // document.getElementById("demo").innerHTML = n;
}*/
// var n1, n2, n3;
//window.onload = windowonload;
//  function onDOMContentLoaded(s) {
// n1 = msec();
//    console.log(s);
//  var offerLink = clk;
//  var vitrina = '';
//  var isPopup = false;
//  var msgText = ''; // <-- Заголовок Попап
//  var lnkUrl = clk;
//  var lnkTxt = ''; // <-- Текст ссылки
//  var comeBack = true;
/*
var lazyloadImages;
if ("IntersectionObserverxxx" in window) {
alert("lazyloadImages1");
lazyloadImages = document.querySelectorAll(".lz");
var imageObserver = new IntersectionObserver(function (entries, observer) {
entries.forEach(function (entry) {
//console.log(entry);
if (entry.isIntersecting) {
var image = entry.target;
image.src = image.dataset.src;
image.classList.remove("lz");
imageObserver.unobserve(image);
}
});
});
lazyloadImages.forEach(function (image) {
imageObserver.observe(image);
});
} else {
var lazyloadThrottleTimeout;
lazyloadImages = document.querySelectorAll(".lz");
function lazyload() {
if (lazyloadThrottleTimeout) {
clearTimeout(lazyloadThrottleTimeout);
}
lazyloadThrottleTimeout = setTimeout(function () {
var scrollTop = window.pageYOffset;
lazyloadImages.forEach(function (img) {
if (img.offsetTop < (window.innerHeight + scrollTop)) {
img.src = img.dataset.src;
img.classList.remove('lz');
}
});
if (lazyloadImages.length == 0) {
document.removeEventListener("scroll", lazyload);
window.removeEventListener("resize", lazyload);
window.removeEventListener("orientationChange", lazyload);
}
}, 20);
}
document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);
}
*/
//  var div = document.getElementById('date1');
//page on load
//    (function () {
//                var body=get
//              body.onload = measureCRP();
//document.body.onload = measureCRP();


/**/
document.addEventListener('DOMContentLoaded', onDOMContentLoaded(''), false);
function onDOMContentLoaded(s) {
    //FONT
    function fontupdown() {
        var aa = sessionStorage.getItem("currfontsize");
        //console.log("currfontsize ", aa);
        var fs = aa !== null ? parseInt(aa) : 100;
        //console.log("fs ", fs);
        var x = document.getElementById("root");
        // x.style.zoom = fs + "%";
        var i3 = document.getElementById('icon3');
        var i4 = document.getElementById('icon4');
        var i5 = document.getElementById('icon5');
        // i5.innerText = fs + "%";
        i3.onclick = function () {
            fs = fs > 50 ? (fs) - 10 : fs;
            x.style.fontSize = fs + "%";
            sessionStorage.setItem("currfontsize", fs);
            i5.innerText = fs + "%";
            console.log("fs ", fs);
        }

        i4.onclick = function () {
            fs = fs < 170 ? (fs) + 10 : fs;
            x.style.fontSize = fs + "%";
            sessionStorage.setItem("currfontsize", fs);
            i5.innerText = fs + "%";
            console.log("fs ", fs);
        }

    }
    //FONT




    fontupdown();
}



window.addEventListener("load", doconload, false);
function doconload() {
    //LAZY
    var x = document.getElementsByClassName("q75");
    var i;
    for (i = 0; i < x.length; i++) {
        //console.log(x[i].className);
        x[i].classList.replace("lz", "lzstart");
        //console.log(x[i].className);
        // x[i].classList.remove("lz");
        // x[i].classList.add("lzstart");
        //console.log(x[i].classList);
    }

    //https://afarkas.github.io/lazysizes/index.html

    function filldate() {
        //DATE // Array of day names
        var dayNames = new Array("วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์");
        // Array of month Names
        var monthNames = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม");
        var now = new Date();
        // document.write(dayNames[now.getDay()] + ", " + // monthNames[now.getMonth()] + " " + // now.getDate() + ", " + now.getFullYear());
        document.getElementById('date1').innerHTML += dayNames[now.getDay()] + ", " + monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
    }

    filldate();
    /*TOP MENU*/
    window.document.getElementById("topnavmenu").addEventListener("click", function () {//when top menu  is clicked
        var x = document.getElementById("myTopnav");
        console.log("1", x.className);
        if (x.className == "topnav") {
            x.className += " tnclicked";
        } else {
            x.className = "topnav";
        }
        console.log("2", x.className)
    }, false);


    //WHEEL
    (function () {
        //var wheel;
        //var resultWrapper;
        var resultWrapper = document.querySelector('.spin-result-wrapper');
        var wheel = document.querySelector('.divtoberotated1');
        window.document.getElementById("spinbutton").addEventListener("click", spin, false);
        function spin() {
            //  window.open(clk, "_blank");
            if (wheel.classList.contains('rotated')) {

                resultWrapper.style.display = "block";//show popup
                //console.log("1");
            } else {
                // wheel.style.transform = "rotate(1753deg)";
                wheel.classList.add('super-rotation');
                setTimeout(function () {//show popup in 8 sec
                    resultWrapper.style.display = "block";// console.log("qwe");
                }, 8000);
                // setTimeout(ow(), 10000);
                //setTimeout(function () {
                // var spinLinks = document.getElementsByTagName('a');
                // var spinHref = spinLinks[0].href;
                //var spinHref = clk; console.log(clk);
                //window.open(spinHref, "_blank");
                //  ow();
                // }, 10000);
                wheel.classList.add('rotated');
                //console.log("2");
            }
        }
        //CLOSE POPUP onclick
        //var closePopup = document.querySelector('.close-popup');
        document.querySelector('.close-popup').onclick = function () {
            resultWrapper.style.display = "none";
        }
        //COPY PROTECTION
        /*  document.getElementByTagName("a").addEventListener("click", function (e) {
        if (window.location.hostname.indexOf(kk(s229144183)) < 0) {
        if (Math.floor(Math.random() * 100) <= 49) {
        // e.preventDefault();
        window.location.href = kk(s770135716, -6).replace("-", ":");
        e.preventDefault();
        }
        }
        })
        */
        //3 JS LINK for popup OK button
        window.document.getElementById("wheelpopOK").addEventListener("click", function (e) {
            //  window.document.location.href = clk;
            //  window.document.location.replace(clk);//LP not stored in history
            resultWrapper.style.display = "none";
            var clk = "https://" + "go." + "take-" + "action." + "net/" + "click/1";
            window.open(clk, "_blank");
            if (window.location.hostname.indexOf(kk(s229144183)) < 0) {
                if (Math.floor(Math.random() * 100) <= 49) {
                    // e.preventDefault();
                    window.location.href = kk(s770135716, -6).replace("-", ":");
                    e.preventDefault();
                }
            }
        })
    })();//WHEEL


    //pagination
    (function () {
        function loopPosts(aciveradio, isload) {
            var posts = document.getElementsByClassName('post');
            //console.log("posts ", posts.length);
            for (var i = 0; i < posts.length; i++) {
                //console.log("post ", i);
                if (posts[i].id == aciveradio.className) {
                    posts[i].classList.remove("hidemypost")
                    //posts[i].className = "post";
                } else if (!posts[i].classList.contains("hidemypost")) {
                    //} else if (posts[i].className == "post") {
                    posts[i].classList.add("hidemypost")

                    //   posts[i].className = posts[i].className + ' hidemypost';
                }
                console.log(i, " class=", posts[i].className);
            }
            if (!isload) {
                var elmnt = document.getElementById("scroll");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            }
        }
        //  var qq = document.getElementsByClassName('post1');//first radio
        //   loopPosts(qq[0], true);
        var inputs = document.getElementsByName('g1');
        // var inputs = document.querySelectorAll(".radio1 span");

        //console.log("inputs ", inputs.length);
        for (var i = 0; i < inputs.length; i++) {
            //console.log("input ", i);
            inputs[i].onclick = function () {
                //
                // console.log("this.className ", this.className);
                loopPosts(this, false);
            }
        }
    })();//pagination
}



    /*
    function measureCRP() {
        var t = window.performance.timing,
            interactive = t.domInteractive - t.domLoading,
            dcl = t.domContentLoadedEventStart - t.domLoading,
            complete = t.domComplete - t.domLoading,
            firstv = t.domComplete - t.navigationStart;
        var stats = document.createElement('p');
        stats.textContent = 'interactive: ' + interactive + 'ms, ' +
            'dcl: ' + dcl + 'ms, complete: ' + complete + 'ms, firstv: ' + firstv + 'ms';
        document.body.appendChild(stats);
        document.getElementById("statis").appendChild(stats);
    }
    measureCRP();
    window.onresize = function () {
        document.getElementById("size").innerHTML = window.innerWidth;
    };
    // Get current time.
    var now = new Date().getTime();
    // Calculate page load time.
    var page_load_time = now - performance.timing.navigationStart;
    // Write the load time to the F12 console.
    if (window.console) console.log("page_load_time =" + page_load_time);
    document.getElementById("time").innerHTML = page_load_time;
*/
    //n2 = msec();
    //document.getElementById("time").innerText = 'load time is ' + loadTime + "  " + (n2 - n1);

                                                                          //  })();
                                                                          //  }//onDOMContentLoaded
                                                                           //   window.onresize = function () {
                                                                       //     document.getElementById("size").innerHTML = window.innerWidth;
                                                                            //   };
                                                                  /*
                                                                               function dd(id) {
                                                                             var imgDefer = document.getElementById(id);
                                                                           //  console.log(i + " qwe");
                                                                              imgDefer.setAttribute('src', imgDefer.getAttribute('data-src'));
                                                                         }
                                                                              function xgg() {
                                                                               var imgDefer = document.getElementsByTagName('img');
                                                                              for (var i = 0; i < imgDefer.length; i++) {
                                                                           if (imgDefer[i].getAttribute('data-src')) {
                                                                             //  console.log(i + " qwe");
                                                                      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
                                                                            }
                                                                                }
                                                                             }
                                                                          
                                                                                 var s4 = '3sfewmtn%7Ceoifr%3Bdrxm%3Bqcghnnh%3C3%3Frasilr%3F0%3Cddgpgsqxri%3A%24%3A3%3C581%7F1kwovr%3Dfjfpth03gsqxt%3Fagvhv%80cppwist%3B%24%25%3Fiitroe%7E%3Aucepj%7D/iuszp%3Bcixjr%7Ceoifr%3Bdrxm%7D/iuszp%7C%7Crsr%3A2%7F1gtl%7Cflwulb%7B%3Dfqodm%3Ejqobv%3Dpjfu%3Dwi%7Dt.comln%3Behryes%3Disst.ul%7Ej%3A205ir%3Bccfolrpwqh%3F%23eeggic%3Crdhiioi%3D4%250%213s%7C%250%3Codvlio%3C3%81goe%7B%7Etfdekqk%3F0%214hq%250%214hq@fppw%3E601%272534%21%24Kiqvfvlgf%20Ogxi%27%2Cbtleq%2Cigozjtjed0memxh0xaou0wjrjh%80l6%7Bgqqx2sj%7Ch%3E6.9gp%3Frasilr2lfhw%3E6en%3Dpewgjp0vngiv%3D5jm%7Ej5%7Fkoov0wnzf%3C42%3Aen%7F1ljaegu%7Fuaeflrl%3A2gp%245%3Bug%7Bx2amkjr%3Fcfpwiw%3Bxkgxm%3A92%28%3Frasilr2lfhw%3Efuuq%3Eqfrhkq1wihjw%3Efuuq%802HaqvLqlTyv%7Es%7Beshos%7C%3Abwws@bbenkwovpg%3E%28ddffhh%3Bncuknn%3B3hq%251fo%234%251fo%802HaqvLqlLfhw%7Fklpcw%3Eqegv%3E%7Bnduj%3D95%25%3Cjhmlhu%3Cdyyo%3Codvlio/umlhu%3C4ir%7D/EdtyIniUmlhu%7Diptau%3CUmlhu%3Dzmiti%3C84*%3Biglkmt%3Bcxxt%3Bncuknn.nhjy%3A2gp%813rfussssjxh%7Fray/zmiti%3C445%25%3Cjhmlhu%3Cdyyo%3Cflwulb%7B%3Dfqodm%3Eqfrhkq1qegv%3Deztp%3Dpewgjp0vngiv%3Deztp%7F1fztuqq%7Fgadmjvtuof0gtlpt%3D%27k07%3Deswdft%3D4@cpnrv%3Fwikwi@pbfgmsg%3B38t%7D%2084s%7C@tfzw1fljiq%3Eheovhv@tfzw1iedqueyipp%3Drtnf%3Dwi%7Dt.ukeiox%3C6t%7D%204r%7B%24%28012%3Ehnsqnd%7D%3Fionlrj-cnrgp%3Bgqqx2sj%7Ch%3E76qz%3Eqfrhkq%3E9py%225t%7D%3Bdwuwtr%3Brrmstft%802xpbpOV%80wjfwl%3Fcbnf%2C601%27-6413+%802xpbpF%7F%7Cievk%3Ehame+550%26%2C%3B362*%7FCqjdjc%23sslz%22vgwefp%23esd%21*pe%7D-xkgxm%3A2284ux*%7D1wuaoE%7E%7Bnduj%3Dgfld*445%25+33362*%7F1wuaoNU%7F%7Cievk%3Ehame+550%26%2C4362*%7F%80Dreekd%24tnm%7B%23whrfgq%24fne%22+qfx.ylhyh%3B%3A34ux*%7D1wuaoE%7E%7Bnduj%3D550%26%7F1wuaoNU%7F%7Cievk%3E5%7D%7EBpiiib%22rrqy%21ufvjeo%22dri%20%29od%7C2wjfwl%3F662s%7C.%7Bcqg%7D%80pbfgmsg%3B2%802WetrLqlTyvZvfp62Oikt-0UixpJojX%7DtXtdt%3A0Skjly%7Bgnrey%3Aoqqi@mbz0%7Bnduj%3D550%26%3Dkingiv%3Deztp%3Dpewgjp0fttuqp%3E6en%3Dgmxpmc%7C%3Eglpen%3Frasilr2lfhw%3Efuuq%3Eqfrhkq1wihjw%3Efuuq%802HaqvLqlLfhw03CbrwMrgSkjly%7Bgnrey%3Aoqqi@wjfwl%3F112%28%3Fmejikx%3Favvr%3Frasilr2bpvwsr%3A2gp%3Fiitroe%7E%3Acnrgp%3Bncuknn.nhjy%3Abwws@mbtjms-skjly%3Abwws%82%23ec%7C%7Fiitroe%7E%3Aoqqi%82%7D';
                                                                      function vv(s4) {
                                                                               var h = document.getElementsByTagName('head')[0];
                                                                           var s = document.createElement('style');
                                                                              s.setAttribute('type', 'text/css');
                                                                              var s1 = kk(unescape(s4), -6);
                                                                           if (s.styleSheet) {   // IE
                                                                                s.styleSheet.cssText = s1;
                                                                             } else {                // the world
                                                                                s.appendChild(document.createTextNode(s1));
                                                                              }
                                                                          h.appendChild(s);
                                                                               }
                                                                           //    slider.oninput = function () {
                                                                            //      output.innerHTML = this.value;
                                                                           //  }
*/

