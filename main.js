var scene = document.querySelector("a-scene");
var cubei = [document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box")];
var cubem = [document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box")];
var cubed = [document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box"), document.createElement("a-box")];
var speedtxt = document.createElement("a-text");
var i = 0;
var m = 0;
var d = 0;
var spd = 5000;
var COLORS = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "pink"];

speedtxt.setAttribute("position", "-5 8 0");
speedtxt.setAttribute("color", "black");
speedtxt.setAttribute("scale", "5 5 5");
speedtxt.setAttribute("value", "1time: " + (spd/1000) + "seconds");
scene.appendChild(speedtxt);

for(i = 0; i < cubei.length; i++)
{
    cubei[i].setAttribute("position",  (i%7) + " 0.5 " + (2-parseInt(i/7)));
    cubei[i].setAttribute("color",  COLORS[i%8]);
    scene.appendChild(cubei[i]);
}

for(m = 0; m < cubem.length; m++)
{
    cubem[m].setAttribute("position",  ((m+3)%7) + " 0.5 " + (1-parseInt((m+3)/7)));
    cubem[m].setAttribute("color",  COLORS[(i+m)%8]);
    scene.appendChild(cubem[m]);
}

for(d = 0; d < cubed.length; d++)
{
    cubed[d].setAttribute("position",  ((d+2)%7) + " 0.5 " + (-parseInt((d+2)/7)-5));
    cubed[d].setAttribute("color",  COLORS[(i+m+d)%8]);
    scene.appendChild(cubed[d]);
}

var j = 0;
AFRAME.registerComponent('imd-mover', {
    init: function (){
        this.el.addEventListener('click', function (evt){
            if(j == 0)
            {
                for(i = 0; i < cubei.length; i++)
                {
                    cubei[i].setAttribute("animation", "property: position; to: -11 " + (i+0.5) + " -10; dur: " + spd + "; easing: linear");
                }
                for(m = 0; m < cubem.length; m++)
                {
                    if(m < 10)
                    {
                        cubem[m].setAttribute("animation", "property: position; to: -7 " + (m+0.5) + " -10; dur: " + spd + "; easing: linear");
                    }
                    else if(m < 22)
                    {
                        cubem[m].setAttribute("animation", "property: position; to: " + -parseInt((30-m)/3) + " " + ((8.5-parseInt((m-10)/3)*2)-(m-1)%3) + " -10; dur: " + spd + "; easing: linear");
                    }
                    else if(m < 31)
                    {
                        cubem[m].setAttribute("animation", "property: position; to: " + -parseInt((30-m)/3) + " " + ((6.5-parseInt((30-m)/3)*2)+(m-1)%3) + " -10; dur: " + spd + "; easing: linear");
                    }
                    else
                    {
                        cubem[m].setAttribute("animation", "property: position; to: 1 " + (40.5-m) + " -10; dur: " + spd + "; easing: linear");
                    }
                }
                for(d = 0; d < cubed.length; d++)
                {
                    if(d%2 == 0)
                    {
                        if(d/2 < 5)
                        {
                            cubed[d].setAttribute("animation", "property: position; to: 5 " + (d/2+5.5) + " -10; dur: " + spd + "; easing: linear");
                        }
                        else if(d/2 < 9)
                        {
                            cubed[d].setAttribute("animation", "property: position; to: " + ((d/2)+1) + " 9.5 -10; dur: " + spd + "; easing: linear");
                        }
                        else if(d/2 == 9)
                        {
                            cubed[d].setAttribute("animation", "property: position; to: 10 8.5 -10; dur: " + spd + "; easing: linear");
                        }
                        else
                        {
                            cubed[d].setAttribute("animation", "property: position; to: 11 " + (17.5-(d/2)) + " -10; dur: " + spd + "; easing: linear");
                        }
                    }
                    else
                    {
                        if(d/2 < 5)
                        {
                            cubed[d].setAttribute("animation", "property: position; to: 5 " + (4.5-parseInt(d/2)) + " -10; dur: " + spd + "; easing: linear");
                        }
                        else if(d/2 < 9)
                        {
                            cubed[d].setAttribute("animation", "property: position; to: " + (parseInt(d/2)+1) + " 0.5 -10; dur: " + spd + "; easing: linear");
                        }
                        else if(parseInt(d/2) == 9)
                        {
                            cubed[d].setAttribute("animation", "property: position; to: 10 1.5 -10; dur: " + spd + "; easing: linear");
                        }
                        else
                        {
                            cubed[d].setAttribute("animation", "property: position; to: 11 " + (parseInt(d/2)-7.5) + " -10; dur: " + spd + "; easing: linear");
                        }
                    }
                }
                j = 1;
            }
            else
            {
                for(i = 0; i < cubei.length; i++)
                {
                    cubei[i].setAttribute("animation", "property: position; to: " + (i%7) + " 0.5 " + (2-parseInt(i/7)) + "; dur: " + spd + "; easing: linear");
                }
                for(m = 0; m < cubem.length; m++)
                {
                    cubem[m].setAttribute("animation", "property: position; to: " + ((m+3)%7) + " 0.5 " + (1-parseInt((m+3)/7)) + "; dur: " + spd + "; easing: linear");
                }
                for(d = 0; d < cubed.length; d++)
                {
                    cubed[d].setAttribute("animation", "property: position; to: " + ((d+2)%7) + " 0.5 " + (-parseInt((d+2)/7)-5) + "; dur: " + spd + "; easing: linear");
                }
                j = 0;
            }
            
        });
    }
});
AFRAME.registerComponent('spd-down', {
    init: function (){
        this.el.addEventListener('click', function (evt){
            if(spd < 5000)
            {
                spd += 500;
                speedtxt.setAttribute("value", "1time: " + (spd/1000) + "seconds");
            }
            else if(spd < 15000)
            {
                spd += 1000;
                speedtxt.setAttribute("value", "1time: " + (spd/1000) + "seconds");
            }
            else if(spd < 60000)
            {
                spd += 5000;
                speedtxt.setAttribute("value", "1time: " + (spd/1000) + "seconds");
            }
        });
    }
});
AFRAME.registerComponent('spd-up', {
    init: function (){
        this.el.addEventListener('click', function (evt){
            if(spd > 15000)
            {
                spd -= 5000;
                speedtxt.setAttribute("value", "1time: " + (spd/1000) + "seconds");
            }
            else if(spd > 5000)
            {
                spd -= 1000;
                speedtxt.setAttribute("value", "1time: " + (spd/1000) + "seconds");
            }
            else if(spd > 500)
            {
                spd -= 500;
                speedtxt.setAttribute("value", "1time: " + (spd/1000) + "seconds");
            }
        });
    }
});

var k = 0;
AFRAME.registerComponent('color-change', {
    init: function (){
        this.el.addEventListener('click', function (evt){
            if(k == 0){
                for(i = 0; i < cubei.length; i++)
                {
                    cubei[i].setAttribute("color",  "white");
                }

                for(m = 0; m < cubem.length; m++)
                {
                    cubem[m].setAttribute("color",  "white");
                }

                for(d = 0; d < cubed.length; d++)
                {
                    cubed[d].setAttribute("color",  "white");
                }
                k = 1;
            }
            else
            {
                for(i = 0; i < cubei.length; i++)
                {
                    cubei[i].setAttribute("color",  COLORS[i%8]);
                }

                for(m = 0; m < cubem.length; m++)
                {
                    cubem[m].setAttribute("color",  COLORS[(i+m)%8]);
                }

                for(d = 0; d < cubed.length; d++)
                {
                    cubed[d].setAttribute("color",  COLORS[(i+m+d)%8]);
                }
                k = 0;
            }
        });
    }
});