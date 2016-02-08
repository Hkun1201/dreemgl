define.class("$server/composition",function(require, $ui$, icon, label, view, screen, cadgrid, $widgets$, toolkit) {
	
	this.render = function() {
		return [
			screen(
				{flexdirection:"row", position:'absolute', x:94, y:117.00001525878906, width:484, height:472},
				cadgrid({
						name:"grid", 
						flex:3, 
						overflow:"scroll", 
						bgcolor:"#4e4e4e", 
						gridsize:8, 
						majorevery:5, 
						majorline:vec4(0.34117648005485535,0.34117648005485535,0.34117648005485535,1), 
						minorline:vec4(0.2823529541492462,0.2823529541492462,0.2823529541492462,1), 
						alignitems:'center', 
						alignself:'stretch', 
						flexdirection:'column', 
						justifycontent:'center', 
						anchor:vec3(0,0,0), 
						toolmove:false, 
						toolselect:false
					},
					view({height:473, width:618, bgcolor:vec4(0.608367383480072,0.9318798184394836,0.31568998098373413,1), position:'absolute', x:56, y:244}),
					view({height:257, width:451, bgcolor:vec4(0.26616209745407104,0.7584172487258911,0.5933423042297363,1), position:'absolute', x:650.0001220703125, y:303.0000305175781}),
					icon({fgcolor:vec4(0.9214999079704285,0.3954366147518158,0.7513847947120667,1), icon:'gear', position:'absolute', x:867.0001831054688, y:54.000022888183594, fontsize:80}),
					label({fontsize:90, bgcolor:'transparent', fgcolor:vec4(0.5647059082984924,0.7079114317893982,0.9333333373069763,1), text:'Howdy!', position:'absolute', x:506.94911193847656, y:222.32546997070312, rotate:vec3(0,0,-0.55)}),
					icon({fgcolor:vec4(0.9286824464797974,0.929411768913269,0.3921568691730499,1), icon:'glass', position:'absolute', x:968, y:90.99999237060547, fontsize:68})
				),
				toolkit({flexdirection:"column"})
			)
		]
	}
}
)