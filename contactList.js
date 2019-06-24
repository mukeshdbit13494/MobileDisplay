$(document).ready(function(){
		$("input").prop('disabled','true');
		$("input").css('background','white');
		$(".main2").css('display','none');

		$(".key-ok").click(function(){
			var inp=document.querySelector('input').value;
			if(inp.length>0)
			{
			    $(".main1").css('display','none');
			    $(".main2").css('display','block');
			    $('.callie-name').html("");
			    $('.callie-number').html(inp);
			}
			});

		$('#contact1 td:first').click(function(){
			var name=$('#contact1 .name').text();
			var number=$('#contact1 .number').text();
			$(".main1").css('display','none');
			$(".main2").css('display','block');
			$('.callie-name').html(name);
			$('.callie-number').html(number);
			
		});

		$('#contact2 td:first').click(function(){
			var name=$('#contact2 .name').text();
			var number=$('#contact2 .number').text();
			$(".main1").css('display','none');
			$(".main2").css('display','block');
			$('.callie-name').html(name);
			$('.callie-number').html(number);
			
		});

		$('#contact3 td:first').click(function(){
			var name=$('#contact3 .name').text();
			var number=$('#contact3 .number').text();
			$(".main1").css('display','none');
			$(".main2").css('display','block');
			$('.callie-name').html(name);
			$('.callie-number').html(number);
			
		});

		$(".cancel").click(function(){
			   $(".main2").css('display','none');
			   $(".main1").css('display','block');
			});


		$("#key-1").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"1");
			$(".key-ok").css('background','green');
			});

		$("#key-2").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"2");
			$(".key-ok").css('background','green');
			});

		$("#key-3").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"3");
			$(".key-ok").css('background','green');
			});

		$("#key-4").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"4");
			$(".key-ok").css('background','green');
			});

		$("#key-5").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"5");
			$(".key-ok").css('background','green');
			});

		$("#key-6").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"6");
			$(".key-ok").css('background','green');
			});

		$("#key-7").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"7");
			$(".key-ok").css('background','green');
			});

		$("#key-8").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"8");
			$(".key-ok").css('background','green');
			});

		$("#key-9").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"9");
			$(".key-ok").css('background','green');
			});

		$("#key-0").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"0");
			$(".key-ok").css('background','green');
			});

		$("#key-star").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"*");
			$(".key-ok").css('background','green');
			});

		$("#key-hash").click(function(){
			var pre=document.querySelector('input').value;
			$("input").val(pre+"#");
			$(".key-ok").css('background','green');
			});
		});