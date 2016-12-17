#Txslider
Txslider is js library for sliding text on web pages.
##Demos

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

##Installing

    <script src="tx.js"></script>
##Usage
To put this to work first add this lines of Css (you can add more styles but don't change 'positon' , 'overflow'):

    #tx {
            height: 20px;
            width: 300px;
            position: absolute;
            overflow: hidden;
            border-bottom: 1px solid black;
     }

Then create a div with id of tx:

    <div id="tx">
    </div>

Add you data you want to show in var data:

    var data = [
            {
                text: "Hello world"
        }, {
                text: "Lorem ipsum dolor."
        }, {
                text: "Numbers 1234567"
        }, {
                text: "Hosein2398"
        }, {
                text: "Nice!"
        }
    ];
And config it as you wish:

    var tx_conf = {
            infinit: true,
            effect: "flash", 
            timer: 2
            //dir : "rtl"
            //stayIn: 1
        }

###Paramaters

>**timer** (string): Sets timer for slider.(default value is 4).

<p>
>**infinit** (bolean): Sets the slider to infinite loop.

<p>
>**stayIn** (Int): If you want to stay in one slide after that all slides has been shown. (In most cases no effect would be added to last element)
>e.g. 4 will stay in forth slide.

*Note : You can not use __infinit__ and __stayIn__ together.*
*Note : If you don't define __infinit__ and __stayIn__ both , then slider would stop sliding in last element.*
<p>
>**effect** (string): Sets the effect. list of effects:
>> *  down (default)
>> *  press 
>> *  flash
>> *  left
>> *  top
>> *  rotate
>> *  rotate2

<p>
>**dir** (string): Sets text direction for languages like Persian , Arabic , ...



