 function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

var div_main = new Vue({
	el:"#div_main",
	data:{
		play_show:false,scene_show:[],
		scene_videoList:[],ktv_scene:[],scene_ct:[],scene_yht:[]
	},
	mounted(){
		document.getElementsByTagName("body")[0].classList.add('page-loaded');
		window.onresize= ()=>{
			this.resize()
		}
		_this = this
		let timer1;
		timer1 = setTimeout(()=>{
			clearTimeout(timer1);
			_this.sel_navList(GetQueryString('sel_id'))
		},200)
		let timer2;
		timer2 = setTimeout(()=>{
			clearTimeout(timer2);
			$('html,body').animate({scrollTop:$('#content').offset().top},1000)
		},3000)	
	},
	methods:{
		selectImg($event,index){
			var img=$('#ktv_info .left_show_img').children('img')
			img.remove();
			img.attr('src',this.scene_show[index].SRC)
			var _this=this;
			$('#ktv_info .left_show_img b').remove();
			  for (var i = 0; i < ($("#ktv_info .left_show_img").height() / 10); i++) $('#ktv_info .left_show_img').append('<b></b>');
			var psn =0;
			$('#ktv_info .left_show_img b').each(function(){
				$(this).css({
					opacity:0,
					backgroundPosition: "0 " + psn + "px",
					backgroundImage: 'url("' + _this.scene_show[index].SRC + '")' //对应的图片
				});
				psn-=10;
			});
			var time = 0;
			var speed=50;
			$('#ktv_info .left_show_img b').each(function(){
				$(this).delay(time).animate({
					opacity:'1'
				},500);
				time+=speed;
			})
		},
		enter_video(event){
			$(event.target).find('.play').show()
		},
		leave_video(event){
			$(event.target).find('.play').hide()
		},
		play_video(item){
			$('#video').attr({"poster":item.img_url,"src":item.video_url});
			
			$('.videos').show();
		},
		resize(){
			if(window.innerWidth<992){
				var swiper = new Swiper('.swiper-container', {
				  slidesPerView: 3,
				  spaceBetween: 15,
				  freeMode: true
				});
				$('#banner').css("height","450px");
			}else{
				var swiper = new Swiper('.swiper-container', {
				  slidesPerView: 5,
				  spaceBetween: 15,
				  freeMode: true
				});
				$('#banner').css("height","100vh");
			}
		},
		sel_navList(index){
			_this = this;
			$('.project_nav li').eq(index).addClass('active').siblings().removeClass('active');
			var item = $('.project_info>div')[index];
			$(item).show(500).siblings().hide(500);
			switch(parseInt(index)){
				case 0 :
					let timer3;
					timer3 = setTimeout(function(){
						clearTimeout(timer3);
						_this.resize();
					},500)
					_this.scene_videoList = _this.ktv_scene;
				break;
				case 1 :
					_this.scene_videoList = _this.scene_ct;
				break;
				case 2 :
					_this.scene_videoList = _this.scene_yht;
				break;
				case 3 :
				break;
				case 4 :
				break;
			}
		},
		sel_navClick(e){
			if(e.target.getAttribute('class') == 'item'){
				this.sel_navList(e.target.getAttribute('data-index'))
			}else{
				return false;
			}
		},
		close1(){
			var v = document.getElementById('video');//获取视频节点
			$('.videos').hide();//点击关闭按钮关闭暂停视频
			v.pause();
			$('.videos').html();
		}
	}
})
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "./data/video_list.js?3" + (((1 + Math.random()) * 0x10000) | 0).toString(16);
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function () {
	div_main.$data.scene_show = scene_show;
	div_main.$data.ktv_scene = scene_ktv;
	div_main.$data.scene_ct = scene_ct;
	div_main.$data.scene_yht = scene_yht;
}
window.onload=function(){
	let timer4;
	timer4 = setTimeout(function(){
		clearTimeout(timer4);
		const imgs = document.querySelectorAll('img')
		const io = new IntersectionObserver(entries => {
		  entries.forEach(entry => {
			if (entry && entry.isIntersecting) {
			  entry.target.src = entry.target.dataset.src
			  io.unobserve(entry.target)
			}
		  })
		})
		imgs.forEach(item => {
		  io.observe(item)
		})
	},20)
	
}