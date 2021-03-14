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
				document.getElementById("display_message2").innerHTML = '<iframe width="300" height="200" src="https://www.youtube.com/embed/6IPd6SUMXXU?list=PLD9-JbMGWf9OsFfErqlfBMv_Ss5FUELlX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
			   case "eli":
				document.getElementById("display_message3").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "gabi":
				document.getElementById("display_message4").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "sonq":
				document.getElementById("display_message5").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "fani":
				document.getElementById("display_message6").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "neva":
				document.getElementById("display_message7").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "ani":
				document.getElementById("display_message8").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "simona":
				document.getElementById("display_message9").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "hido":
				document.getElementById("display_message10").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
				 case "iwo":
				document.getElementById("display_message11").innerHTML = '<iframe width="200" height="100" src="https://www.youtube.com/embed/e-GqvWZKvq0?list=RDnsHRc8tUIK0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				break;
			  default:
				//document.getElementById("display_message12").innerHTML = 'Try again';
				}
				}

        }