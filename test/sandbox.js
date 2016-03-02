/* DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
 Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License.
 You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and limitations under the License.*/

define.class("$server/composition",function(require,$ui$,textbox,checkbox,icon,button,label,view,screen,cadgrid,$widgets$,toolkit){


this.render=function(){


return [
screen(
{
flexdirection:"row"
},
cadgrid({
name:"grid",
flex:3,
overflow:"scroll",
bgcolor:vec4(0.08853328227996826,0.11556218564510345,0.16508188843727112,1),
gridsize:8,
majorevery:5,
majorline:vec4(0.06671861559152603,0.26168233156204224,0.34268006682395935,1),
minorline:vec4(0.1546473354101181,0.1543203890323639,0.12822513282299042,1),
alignitems:'center',
alignself:'stretch',
flexdirection:'column',
justifycontent:'center',
anchor:vec3(0,0,0),
toolmove:false,
toolrect:false
},
view({
height:391,
width:313,
bgcolor:vec4(0.7796770334243774,0.22304300963878632,0.35580340027809143,1),
position:"absolute",
x:46,
y:96.00015258789062,
borderwidth:vec4(0,0,0,0),
bordercolor:vec4(0.7597017884254456,0.7722791433334351,0.13173383474349976,1),
rotate:{____struct:"vec3",data:[0,0,-6.037205366737908e-7]}
},
view({
height:143,
width:138,
bgcolor:vec4(0,0.501960813999176,0.05704490840435028,1),
position:"absolute",
x:81,
y:174,
borderradius:vec4(10,30,60,80),
rotate:vec3(0,0,0.8099998831748962)
},
icon({
fgcolor:vec4(0.929411768913269,0.7185189723968506,0.3921568691730499,1),
opaque:true,
icon:"flask",
fontsize:80,
position:"absolute",
x:33,
y:9
})
),
icon({
fgcolor:vec4(0.885095477104187,0.8980835676193237,0.9214090704917908,1),
opaque:true,
icon:"ge",
fontsize:80,
position:"absolute",
x:120.17547607421875,
y:26.051101684570312
})
),
view({
height:273,
width:453,
pickalpha:-1,
bgcolor:vec4(0,0.2716766893863678,0.501960813999176,1),
position:"absolute",
x:741.1640625,
y:263.75616455078125,
alignitems:"center",
justifycontent:"center",
bgimage:"$resources/textures/portrait.jpg",
bgimagemode:"aspect-fill",
borderradius:vec4(30,100,50,0),
rotate:vec3(0,0,-0.5300000309944153)
},
button({tooldragroot:true,fontsize:24,pickalpha:-1,fgcolor:'red',label:"Press Me!",position:"absolute",x:37.835906982421875,y:58.24383544921875}),
checkbox({
tooldragroot:true,
toolresize:false,
fontsize:24,
bgcolor:'transparent',
buttoncolor1:'transparent',
buttoncolor2:'transparent',
hovercolor1:'transparent',
hovercolor2:'transparent',
pressedcolor1:'transparent',
pressedcolor2:'transparent',
pickalpha:-1,
fgcolor:'pink',
position:"absolute",
x:211.83590698242188,
y:56.243896484375
})
),
view({
height:100,
width:800,
bgcolor:vec4(0.5372024178504944,0.5082737803459167,0.30220746994018555,1),
position:"absolute",
x:25.034759521484375,
y:695.6854248046875,
opacity:0.7
},
icon({
fgcolor:'cornflowerblue',
pickalpha:-1,
icon:"star-o",
fontsize:80,
position:"absolute",
x:395.9653015136719,
y:-1.685333251953125
})
),
view({
height:343,
width:669,
bgcolor:vec4(0.32335585355758667,0.5324464440345764,0.6069661378860474,1),
position:"absolute",
x:393.8311767578125,
y:44.318634033203125,
bgimage:"$resources/textures/landscape.jpg",
bgimagemode:"aspect-fill"
},
icon({
fgcolor:vec4(0.8,0.9,0.3,1),
opaque:true,
icon:"heart",
fontsize:140,
position:"absolute",
x:175.18701171875,
y:78.7864990234375,
boldness:0.95
}),
icon({
fgcolor:vec4(1,0,0.826327383518219,1),
bgcolor:'transparent',
pickalpha:-1,
icon:"gear",
fontsize:80,
position:"absolute",
x:465.1688232421875,
y:118.68136596679688
})
),
label({
fontsize:84,
pickalpha:-1,
bgcolor:'transparent',
fgcolor:vec4(0.2965516149997711,0.6960710287094116,0.7355074286460876,1),
text:"In-place Text Update",
position:"absolute",
x:62.07366943359375,
y:534.5030517578125,
opacity:0.6
})
),
toolkit({
position:"absolute",
visible:true,
rulers:true,
x:932,
y:24.00011444091797,
width:428,
height:836,
dropmode:"absolute",
mode:"design",
reticlesize:9,
hoverlines:false,
guides:true,
handles:true,
groupreparent:false
})
)
]








	}








	}
);
