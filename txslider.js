window.onload = function () {
    var here = document.getElementById("tx").childNodes;
    var txdiv = document.getElementById("tx");
    var maindiv = document.createElement("DIV");
    maindiv.setAttribute("id", "tx_slide_main");
    txdiv.appendChild(maindiv);
    var seconddiv = document.createElement("DIV");
    seconddiv.setAttribute("id", "second");
    txdiv.appendChild(seconddiv);
    var first = document.getElementById("tx_slide_main");
    var last = document.getElementById("second");
    var i = 0;
    var many = data.length;
    var css;
    if (!('effect' in tx_conf)) {
        tx_conf.effect = "down"
    }
    if ('dir' in tx_conf) {
        document.getElementById("tx").style.direction = "rtl";
    }    
    if ('timer' in tx_conf) {
        tx_conf.timer = 4;
    }
    if ('infinit' in tx_conf && 'stayIn' in tx_conf) {
        throw "Tx_slide error: you cann't use (infinit) and (stayIn) togheter"
    }
    tx_conf.timer *= 1000;
    if (tx_conf.effect == "down") {
        css = '#tx_slide2 {opacity: .7;transition: 1s; -webkit-transition: 1s; margin-top: 20px; color: darkturquoise}'
    }
    if (tx_conf.effect == "press") {
        css = '#tx_slide2 {opacity: .7;transition: 1s; -webkit-transition: 1s; letter-spacing:-7px; color: darkturquoise}'
    }
    if (tx_conf.effect == "flash") {
        css = ' #tx_slide2 {opacity: .7;transition: .1s; -webkit-transition: .1s; -webkit-transform: skewX(360deg);color: darkturquoise}'
    }
    if (tx_conf.effect == "left") {
        css = ' #tx_slide2 {opacity: .7;transition: .1s; -webkit-transition: .1s; -webkit-transform: translateX(-400px); -ms-transform: translateX(-400px); transform: translateX(-400px);color: darkturquoise}'
    }
    if (tx_conf.effect == "top") {
        css = ' #tx_slide2 {opacity: .7;transition: .1s;-webkit-transform: translate(20px,-100px); -ms-transform: translate(20px,-100px); transform: translate(20px,-100px);color: darkturquoise}'
    }
    if (tx_conf.effect == "rotate") {
        css = ' #tx_slide2 {opacity: .7;transition: 1s;  -webkit-transform:rotateX(290deg); transform:rotateX(290deg);color: darkturquoise}'
    }
    if (tx_conf.effect == "rotate2") {
        css = ' #tx_slide2 {opacity: .7; -webkit-transform:rotateY(280deg); transition: .7s;transform:rotateY(280deg);color: darkturquoise}'
    }
    css += "#tx div {color: black;text-decoration: none;display: block;position: absolute;} #tx_slide3 {opacity: .4s; webkit-transition: 1s; transition: 1s;margin-top: 0px;}"
        //starting styles
    var head = document.head || document.getElementsByTagName('head')[0]
        , style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    }
    else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    //#endig styles
    last.innerHTML = data[0].text;
    last.setAttribute("id", "tx_slide3");
    setTimeout(function () {
        last.setAttribute("id", "tx_slide2");
    }, (tx_conf.timer * 84 / 100)); // time * 84%
    var intv = setInterval(function () {

        i += 1;
        
        last.innerHTML = data[i].text;
        last.setAttribute("id", "tx_slide3");
        last.style.color = data[0].color;
        if(i == many-1){
             if (!(tx_conf.infinit) && !(tx_conf.stayIn))
                {
                
                clean();
                }
        }else {
        setTimeout(function () {
            last.setAttribute("id", "tx_slide2");
        }, (tx_conf.timer * 83 / 100)); //time * 83%
        }
        if (i == many - 1) {
            if (tx_conf.infinit == true) {
                i = -1;
                setTimeout(function () {
                    last.innerHTML = data[0].text;
                }, tx_conf.timer)
               
            }
            else if(tx_conf.stayIn) {
                stop();
                
            }

        }
        

    }, tx_conf.timer);

    function stop() {
        setTimeout(function () {
                first.innerHTML = data[tx_conf.stayIn].text;
                last.innerHTML ="";
            }, (tx_conf.timer + 300 )) //time * 87%
        clearInterval(intv);
       
    }
    
    function clean() {
        clearInterval(intv);
    }
}