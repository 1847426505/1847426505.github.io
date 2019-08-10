var div_main = new Vue({
	el:"#div_main",
	data:{
		scene_show:[
			{ID:1,SRC:"http://asd.oiexi.com/image/default/0E64BE1D87DE48CFA25CC031065271BB-6-2.jpg"},
			{ID:2,SRC:"http://asd.oiexi.com/image/default/D65CE1369B8B4759A318160DA4724113-6-2.jpg"},
			{ID:3,SRC:"http://asd.oiexi.com/image/default/CA65A7EBC4A446E49789B0BC173A5454-6-2.jpg"},
			{ID:4,SRC:"http://asd.oiexi.com/image/default/BF7443B16FE24AF5A03402A6395B4CED-6-2.jpg"},
			{ID:5,SRC:"http://asd.oiexi.com/image/default/715BC55DC0AA43D2973B6F9683E09757-6-2.jpg"},
			{ID:6,SRC:"http://asd.oiexi.com/image/default/8D2B01142CBB409A8C0FEEA921B89E35-6-2.jpg"},
			{ID:7,SRC:"http://asd.oiexi.com/image/default/E2309A5E90EB45A895CB72A264007128-6-2.jpg"},
			{ID:8,SRC:"http://asd.oiexi.com/image/default/08F4D9FF66054AA295861C76590381B5-6-2.jpg"},
			{ID:9,SRC:"http://asd.oiexi.com/image/default/08F4D9FF66054AA295861C76590381B5-6-2.jpg"},
			{ID:10,SRC:"http://asd.oiexi.com/image/default/D135D0118477495EBD4CEB57ADE88A67-6-2.jpg"}
		],
	},
	mounted(){
		document.getElementsByTagName("body")[0].classList.add('page-loaded');
	},
	created(){
		let _this = this
		window.addEventListener("scroll", function(){
			_this.$refs.menu.style.top=this.pageYOffset+'px';
			if(this.pageYOffset<600){
				$('#fiex_top').hide(1000);
			}else{
				$('#fiex_top').show(1000);
			}
		});
	},
	methods:{
		fiex_top(){
			$('html,body').animate({scrollTop:0},1000)
		},
		selectImg($event,index){
			var img=$('.base_in_pic').children('img')
			img.remove();
			img.attr('src',this.play_list[index].src)
			
		   var _this=this
		   //往.box_img 添加每个 <b> 分10层
			$('.base_in_pic b').remove();
			  for (var i = 0; i < ($(".base_in_pic").height() / 10); i++) $('.base_in_pic').append('<b></b>');
			var psn =0;
			$('.base_in_pic b').each(function(){
				$(this).css({
					opacity:0,
					backgroundPosition: "0 " + psn + "px",
					backgroundImage: 'url("' + _this.play_list[index].src + '")' //对应的图片
				});
				psn-=10;
			});
			var time = 0;
			var speed=50;
			$('.base_in_pic b').each(function(){
				$(this).delay(time).animate({
					opacity:'1'
				},500);
				time+=speed;
			})
		},
		toggle(){
			if(!$('.menu').hasClass('open')){
				$('.menu').css('background','rgba(0,0,0,0.9)')
			}else{
				$('.menu').css('background','#4362ca')
			}
			$('.header_list').toggleClass('nav_show');
			$('.menu').toggleClass('open');
			$('.toggle').toggleClass('close');
		},
		toggleClick(){
			this.toggle()
		},
		scene_listClick(e){
			location.href="./src/qj_ktv.html?sel_id="+ e.target.getAttribute('data-index');
		},
		header_listClick(e){
			let $this = e.target
			e.target.classList.add('active')
			$($this).addClass('active').siblings().removeClass('active');
			let targetName = e.target.getAttribute('data-title')
			let scrol_top = $('#'+targetName).offset().top;
			$('html,body').animate({scrollTop:scrol_top},1000)
			this.toggle()
		}
	}
})
  window.onload = function(){
	 if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	 	new WOW().init();
	 };
	
	 var swiper = new Swiper('.swiper-container.swiper1', {
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  loop:true
	});
	
	var swiper = new Swiper('.swiper-container.swiper2', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		pagination: {
		el: '.swiper-pagination',
		clickable: true,
		},
		 navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	});
}





