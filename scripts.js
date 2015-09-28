var panelshown = false;
var panelName;

//move in another panel
function slidePanel(name){
	name = "#"+name;
	if (panelName != name) {

		if (panelshown) {
			
			var num =Math.round(Math.random()*7+1);

			switch(num){
				case 1:
					$(panelName).effect( "blind", {opacity:0},100);
					break;
				case 2:
					$(panelName).effect( "clip",{opacity:0}, 200);
					break;
				case 3:
					$(panelName).effect( "drop",{opacity:0}, 200);
					break;
				case 4:
					$(panelName).effect( "fade",{opacity:0}, 200);
					break;
				case 5:
					$(panelName).effect( "fold",{opacity:0}, 200);
					break;
				case 6:
					$(panelName).effect( "puff",{opacity:0}, 200);
					break;
				case 7:
					$(panelName).effect( "scale",{percent:0, opacity:0}, 200);
					break;
				default:
					break;
			}
		
			$(panelName).animate({right:'-=47%',opacity:1}, 750, function(){});	

		}else{
			$("#cover").animate({left:'-=23%'}, 750,function(){});
			$("#topBar").animate({left:'-=23%'}, 750,function(){});
			$("#bottomBar").animate({left:'-=23%'}, 750,function(){});
		}

		$(name).animate({right:'+=47%',opacity:1, }, 750, function(){});
		panelshown = true;
		$(name).css('display', 'inline').css('width', '').css('height', '').css('border-width', '').css('font-size','');
		panelName=name;
		
	}else{
		var back = "#000";
		$(name).animate({borderTopColor:'#FFF',borderBottomColor:'#FFF',borderLeftColor:'#FFF',borderRightColor:'#FFF'},200, function(){$(name).animate({borderTopColor:back,borderBottomColor:back,borderLeftColor:back,borderRightColor:back}, 200)}) ;
	}
}
function init() {
	//initial animations
	$("#topBar").css('height', '0px').css('top', '45%').css('opacity', '0').animate({opacity:1}, 1000, "easeInBounce").animate({height:'1.5em', width:'50%', top:'6.5%',}, 1000);
	$("#cover").css('height', '0px').css('top', '50%').css('opacity', '0').animate({opacity:1}, 1000, "easeInBounce").animate({height:'75%', width:'50%', top:'12.5%',}, 1000);
	$("#bottomBar").css('height', '0px').css('bottom', '45%').css('opacity', '0').animate({opacity:1}, 1000, "easeInBounce").animate({height:'1.25em', width:'50.2%', bottom:'6.25%',}, 1000, showText(".textInit"));
	var date = new Date();
	document.getElementById("copyLeft").innerHTML="Copyright "+date.getFullYear();
}

function showText(text) {
	//maths for the spacing
	var parentwidth = $("#topBar").width();
	
	var a =((($("#ProgrammingButton").width()/2)/parentwidth)*100);

	var one = 8-((($("#ProgrammingButton").width()/2)/parentwidth)*100);

	var two = 24-((($("#InterestsButton").width()/2)/parentwidth)*100);

	var three = 40-((($("#EducationButton").width()/2)/parentwidth)*100);

	var four = 56-((($("#AchievmentsButton").width()/2)/parentwidth)*100);

	var five = 72-((($("#ExperienceButton").width()/2)/parentwidth)*100);

	var six = 88-((($("#RefereesButton").width()/2)/parentwidth)*100);
	//spacing
	$("#ProgrammingButton").css('left', one+'%');
	$("#InterestsButton").css('left', two+'%');
	$("#EducationButton").css('left', three+'%');
	$("#AchievmentsButton").css('left', four+'%');
	$("#ExperienceButton").css('left', five+'%');
	$("#RefereesButton").css('left', six+'%');
	//animate in other elements
	$("button.buttons").css('font-size', '70%').delay(3000).animate({opacity: '1'},1000);
	$(text).delay(3000).animate({opacity:'1'}, 1000);
}
