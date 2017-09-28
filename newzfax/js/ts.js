$(function(){
	$('#bto2,#bto3').css('display', 'none');
				$('.product-list .left .sp1').mouseover(function() {
					$(this).siblings("span").css({
						'background-color' : '#fff',
						"color" : '#000'
					});
					$(this).css({
						'background-color' : '#b6262c',
						"color" : '#fff'
					});
					$('.product-list .cli').css('display', 'none');
					$('#bto1').css('display', 'block');

				});

				$('.product-list .left .sp2').mouseover(function() {
					$(this).siblings("span").css({
						'background-color' : '#fff',
						"color" : '#000'
					});
					$(this).css({
						'background-color' : '#b6262c',
						"color" : '#fff'
					});
					$('.product-list .cli').css('display', 'none');
					$('#bto2').css('display', 'block');
				});
				$('.product-list .left .sp3').mouseover(function() {
					$(this).siblings("span").css({
						'background-color' : '#fff',
						"color" : '#000'
					});
					$(this).css({
						'background-color' : '#b6262c',
						"color" : '#fff'
					});
					$('.product-list .cli').css('display', 'none');
					$('#bto3').css('display', 'block');
				});

				$('.sss .s1').css({
					'border' : '1px solid #c7000a',
					'color' : '#c7000a'
				});
				$('.sss .s-span').click(function() {
					$(this).siblings(".s-span").css({
						'border' : '1px solid #e0e0e0',
						'color' : '#000'
					});
					$(this).css({
						'border' : '1px solid #c7000a',
						'color' : '#c7000a'
					});
					var mc = "请输入理财师" + $(this).html();
					$('.shu').attr('placeholder', mc);

				});

				$('.gives').mouseover(function() {
					$(this).siblings(".gives").css('height', '30px');
					$(this).css('height', '86px');
				});
				
				
		//政信研究院		
		$('.school-list .left .bto:eq(0) a').eq(0)
						.addClass('gives-fir');
				$('.school-list .left .bto:eq(1) a').eq(0)
						.addClass('gives-fir');
				$('.school-list .left .bto:eq(2) a').eq(0)
						.addClass('gives-fir');
				$('.school-list .left .bto:eq(3) a').eq(0)
						.addClass('gives-fir');
				$('.school-list .left .bto:eq(4) a').eq(0)
						.addClass('gives-fir');
				$('.school-list .left .bto:eq(5) a').eq(0)
						.addClass('gives-fir');
				$('.gives-fir').css('height', '86px');
				$('.gives').mouseover(function() {
					$(this).siblings(".gives").css('height', '30px');
					$(this).css('height', '86px');
				});
				$('.school-list .left .bto').eq(0).show().siblings(
						'.school-list .left .bto').hide();
				$('.school-list .left .title0 span:eq(0)').css({
					'background-color' : '#b6262c',
					"color" : '#fff'
				});
				$(".school-list .left .title0 span:eq(0) img:eq(0)").css(
						"display", "block");
				$('.school-list .left .title0 span')
						.mouseover(
								function(e) {
									$(this).siblings(
											'.school-list .left .title0 span')
											.css({
												'background-color' : '#fff',
												"color" : '#000'
											});
									$(this).css({
										'background-color' : '#b6262c',
										"color" : '#fff'
									});
									$(".school-list .left .title0 img").css(
											"display", "none");
									$(this).children('img').css("display",
											"inline-block");
									var num = $(this).index();
									$('.school-list .left .bto')
											.eq(num)
											.show()
											.siblings('.school-list .left .bto')
											.hide();
								});
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
})