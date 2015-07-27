function lesscssarrowplease(){
	var inputs = document.getElementsByTagName("input");
	var inputsMapping = {};

	for(var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		// The checkbox position will be processesed later
		if(input.name !== "position"){
			inputsMapping[input.id] = input;
		}
		input.addEventListener('change',function(e){
			this.modBox(input.id);
		}.bind(this),false);
	}
	this.getCheckedPlaceValue = function(){
		var checkedInput = document.querySelectorAll("input[name='position']:checked")[0];
		return checkedInput?checkedInput.value:'top';
	};
	this.modBox = function(){
	  less.modifyVars({
	    '@arrow-border-color' : inputsMapping.border_color.value,
	    '@color': inputsMapping.color.value,
	    '@border-width': inputsMapping.border_width.value,
	    '@arrow-size' : inputsMapping.size.value,
	    '@place' : this.getCheckedPlaceValue()       
	  });
	}
	this.modBox();
}
var lsscssrrwpls = new lesscssarrowplease();