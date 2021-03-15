$(function() {
				var $mybook 		= $('#mybook');
				var $bttn_next		= $('#next_page_button');
				var $bttn_prev		= $('#prev_page_button');
				var $loading		= $('#loading');
				var $mybook_images	= $mybook.find('img');
				var cnt_images		= $mybook_images.length;
				var loaded			= 0;
				 
				$mybook_images.each(function(){
					var $img 	= $(this);
					var source	= $img.attr('src');
					$('<img/>').load(function(){
						++loaded;
						if(loaded == cnt_images){
							$loading.hide();
							$bttn_next.show();
							$bttn_prev.show();
							$mybook.show().booklet({
								name:               null,                            //  
								width:              800,                             //  
								height:             500,                             //   
								speed:              600,                             //  
								direction:          'LTR',                           //  
								                           //  
								next:               $bttn_next,          			//  
								prev:               $bttn_prev,          			//  
								                       
							});
							Cufon.refresh();
						}
					}).attr('src',source);
				});
				
			});
			
		  function showMessage(){
            var message = document.getElementsByClassName("message");
			console.log(message);
					
				var values= '';
			for(var i=0; i<message.length; i++) {
				values+= message[i].value;
				
				switch(message[i].value) {
			  case "алин":
				document.getElementById("display_message1").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/Wg62IkUAs8c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
			  case "бети":
				document.getElementById("display_message2").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/6IPd6SUMXXU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
			   case "иво":
				document.getElementById("display_message3").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/MYhl4vFnTEA?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "неди":
				document.getElementById("display_message4").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/C50f9bVKSQw?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "ани":
				document.getElementById("display_message5").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/cqO2d_9EFPo?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "кери":
				document.getElementById("display_message6").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/Dy1Tp9ml9fQ?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "нева":
				document.getElementById("display_message7").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/JWoF83MFHns?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "пешо":
				document.getElementById("display_message8").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/wJgDebw802M?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "ели":
				document.getElementById("display_message9").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/gJ25a00Kd0o?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "габи":
				document.getElementById("display_message10").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/VDQOCjjf93s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "фани":
				document.getElementById("display_message11").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/Q8sw26hc1YA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "пламена":
				document.getElementById("display_message12").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/tj7gHlY5NIc?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "пеца":
				document.getElementById("display_message13").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/WszH9VaJdbA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "доби":
				document.getElementById("display_message15").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/C5pO3TfpcCo?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "соня":
				document.getElementById("display_message14").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/k1Fj1fR_r_o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "дори":
				document.getElementById("display_message16").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/AsEgoG_h5oQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "дани":
				document.getElementById("display_message17").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/SlEaXxIwr1k?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "хидо":
				document.getElementById("display_message18").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/E3pAOiaRHl4?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "симона":
				document.getElementById("display_message19").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/eop3cPlQkwE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
			  default:
				//document.getElementById("display_message12").innerHTML = 'Try again';
				}
				}

        }