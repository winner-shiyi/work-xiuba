$(function(){
	var list=[
		{"id":"1","src":"images/11.jpg","href":"#1","width":"280","height":"300","name":"一朵花"},
		{"id":"2","src":"images/22.jpg","href":"#2","width":"280","height":"300","name":"两朵花"},
		{"id":"3","src":"images/33.jpg","href":"#3","width":"280","height":"300","name":"三朵花"},
		{"id":"4","src":"images/44.jpg","href":"#4","width":"280","height":"300","name":"四朵花"}
		/*{"id":"5","src":"images/55.jpg","href":"#5","width":"280","height":"300","name":"五朵花"},
		{"id":"6","src":"images/66.jpg","href":"#6","width":"280","height":"300","name":"六朵花"}*/
	];
	var $myFlow = $("#myFlow");
	var $btn = $('.btn');
	var html = '';
	var dataId = 0;
	
	$.each(list,function(index,obj){
		html +='';
		//html+= '<img src="' + obj['src'] + '"';
		html +=' <img src="'+ obj.src +'" longdesc="'+ obj.href +'" width="'+ obj.width +'" height="'+ obj.height +'" title="'+ obj.name +'" data-id="'
		+ obj.id +'" />';
	});
	//console.log(html);
	$myFlow.append(html);
    
    //var instanceOne = new ImageFlow();
    window.instanceOne = new ImageFlow();
   
    instanceOne.init({ 
        ImageFlowID: 'myFlow',
        animationSpeed: 55,
        aspectRatio: 2.5,
        imageCursor: 'pointer',
        imageFocusM: 1.0,            
		startID: 3,
		//circular: true,
		imageFocusMax: 3,
	    imagesHeight: 0.65,//0.65默认值 ，图片们的父级div，占整个容器div的高度百分比
	    imagesM: 1.5, //默认值为1，设置为2的时候，所有图片的深度更深的视觉，其实是所有图片的高度，宽度是设为1的时候的一半。
        reflections: true,
        reflectionP: 0.5, //为0每张图片之间的底部对齐,reflections: true的时候 才能生效
        slider: false,//无滚动条
        startAnimation: true,
        xStep:100
    },function(i){
    	//console.log(i);
    	//console.log($myFlow.find('img').eq(i).attr('data-id'));
    	$myFlow.find('img').removeClass('curr').eq(i).addClass('curr');
    	dataId = $myFlow.find('img').eq(i).attr('data-id');
    });
    
    $btn.click(function(){
    	alert(dataId);
    });
});