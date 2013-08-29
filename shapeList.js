
var line = {
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.sx, shape.sy);
		ctx.lineTo(shape.ex, shape.ey);

		ctx.lineWidth = shape.lineWidth;
		ctx.strokeStyle=shape.strokeColor;
		ctx.stroke();

		ctx.closePath();
	}
}

var rect = {
	draw : function(ctx, shape){
		ctx.beginPath();
//		console.log(shape.x, shape.y, shape.w, shape.h);
		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var oneCuttedRect = {
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x+(shape.w*0.9), shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.1));
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var bonthCuttedRect = {
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.1), shape.y);
		ctx.lineTo(shape.x+(shape.w*0.9), shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.1));
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+(shape.h*0.1));
		ctx.lineTo(shape.x+(shape.w*0.1), shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var counterCuttedRect = {
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x+(shape.w*0.9), shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.1));
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.1), shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+(shape.h*0.9));
		ctx.lineTo(shape.x, shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var cuttedRoundRect = {
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.1), shape.y);
		ctx.lineTo(shape.x+(shape.w*0.9), shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.1));
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+(shape.h*0.1));
		ctx.quadraticCurveTo(shape.x,shape.y,shape.x+(shape.w*0.1),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var oneRoundRect = {
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x+(shape.w*0.9), shape.y);
		ctx.quadraticCurveTo(shape.x+shape.w,shape.y,shape.x+shape.w,shape.y+(shape.h*0.1));
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var twoRoundRect = {
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.1), shape.y);
		ctx.lineTo(shape.x+(shape.w*0.9), shape.y);
		ctx.quadraticCurveTo(shape.x+shape.w,shape.y,shape.x+shape.w,shape.y+(shape.h*0.1));
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+(shape.h*0.1));
		ctx.quadraticCurveTo(shape.x,shape.y,shape.x+(shape.w*0.1),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var counterRoundRect = {
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.1), shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.quadraticCurveTo(shape.x+shape.w,shape.y+shape.h,shape.x+(shape.w*0.9),shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+(shape.h*0.1));
		ctx.quadraticCurveTo(shape.x,shape.y,shape.x+(shape.w*0.1),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var five ={
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var six ={
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var seven ={
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.15),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.55));
		ctx.lineTo(shape.x+(shape.w*0.28),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.72),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.55));
		ctx.lineTo(shape.x+(shape.w*0.85),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var eight ={
	draw : function(ctx, shape){
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var ten= {
	draw : function(ctx, shape) {
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.2),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.1),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.1),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.9),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.9),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var tewelve= {
	draw : function(ctx, shape) {
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.375),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.13),shape.y+(shape.h*0.15));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.13),shape.y+(shape.h*0.85));
		ctx.lineTo(shape.x+(shape.w*0.375),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.625),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.87),shape.y+(shape.h*0.85));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x+(shape.w*0.87),shape.y+(shape.h*0.15));
		ctx.lineTo(shape.x+(shape.w*0.625),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.375),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}



var circle = {
	draw : function(ctx, shape){
		midx = shape.w/2;
		midy = shape.h/2;

		lx = shape.x;
		rx = shape.x+shape.w;
		ty = shape.y;
		by = shape.y+shape.h;
		cx = shape.x+midx;
		cy = shape.y+midy;

		var magic = 0.551784;
		var xmagic = magic*midx;
		var ymagic = midy*magic;

		ctx.beginPath();

		ctx.moveTo(cx,ty);
		ctx.bezierCurveTo(cx+xmagic,ty,rx,cy-ymagic,rx,cy);
		ctx.bezierCurveTo(rx,cy+ymagic,cx+xmagic,by,cx,by);
		ctx.bezierCurveTo(cx-xmagic,by,lx,cy+ymagic,lx,cy);
		ctx.bezierCurveTo(lx,cy-ymagic,cx-xmagic,ty,cx,ty);
	
		ctx.fillStyle=shape.fillColor;
		ctx.fill();
		ctx.lineWidth = shape.lineWidth;
		ctx.strokeStyle=shape.strokeColor;
		ctx.stroke();

		ctx.closePath();
	}
}

var triangle = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		console.log(shape.x, shape.y, shape.w, shape.h);
		//tempPoint=(shape.x+shape.w)/2;
		//if(tempPoint
		ctx.moveTo(shape.x+(shape.w/2), shape.y);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w/2), shape.y);
		//ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var	reverseTriangle = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		//tempPoint=(shape.x+shape.w)/2;
		//if(tempPoint
		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x+(shape.w*0.5), shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.lineTo(shape.x, shape.y);
		//ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var rightAngelTriangle = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		console.log(shape.x, shape.y, shape.w, shape.h);
		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo((shape.x+shape.w), shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var diamond = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+ (shape.w/2) , shape.y);
		ctx.lineTo(shape.x, shape.y + (shape.h/2));
		ctx.lineTo(shape.x+(shape.w/2), shape.y+shape.h);
		ctx.lineTo(shape.x+ shape.w, shape.y + (shape.h/2));
		ctx.lineTo(shape.x+ (shape.w/2) , shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var trapezoid = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h)
		ctx.lineTo(shape.x+((shape.w/3)*2.4),shape.y);
		ctx.lineTo(shape.x+(shape.w/4.5),shape.y);
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var leftArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w/3),shape.y);
		ctx.lineTo(shape.x,shape.y + (shape.h/2));
		ctx.lineTo(shape.x+(shape.w/3), shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w/3), shape.y+((shape.h/3)*2));
		ctx.lineTo(shape.x+shape.w , shape.y+((shape.h/3)*2));
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h/3));
		ctx.lineTo(shape.x+(shape.w/3), shape.y+(shape.h/3));
		ctx.lineTo(shape.x+(shape.w/3),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var heart = {
	draw : function(ctx, shape)
	{
		if(shape.x+shape.w > shape.x){
					maxX = shape.x+shape.w;
					minX = shape.x;
				}else{
					maxX = shape.x;
					minX = shape.x+shape.w;
				}

				if(shape.y+shape.h > shape.y){
					maxY = shape.y+shape.h;
					minY = shape.y;
				}else{
					maxY = shape.sY;
					minY = shape.eY;
				}

			hX = (maxX-minX)/2;
			hY = (maxY-minY)/2;

			d1X = Math.ceil((maxX-minX)/5);
			d1Y = Math.ceil((maxY-minY)/5);

			d2X = Math.ceil((maxX-minX)/6);
			d2Y = Math.ceil((maxY-minY)/6);

			ctx.beginPath();
			ctx.moveTo(minX+hX, minY+d1Y);

			ctx.bezierCurveTo(minX+hX-d2X,minY,minX,minY,minX,minY+hY-d2Y);

			ctx.bezierCurveTo(minX,minY+hY+d2Y,minX+hX-d1X,minY+hY+d1Y,minX+hX,maxY);

			ctx.bezierCurveTo(minX+hX+d1X,minY+hY+d1Y,maxX,minY+hY+d2Y,maxX,minY+hY-d2Y);
			//ctx.bezierCurveTo(100,100,140,90,140,50);

			ctx.bezierCurveTo(maxX,minY,minX+hX+d2X,minY,minX+hX, minY+d1Y);
			//ctx.bezierCurveTo(140,0,90,0,70,30);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
	}
}

var lightening = { 
	draw : function(ctx, shape) {
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.45),shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.43),shape.y+(shape.h*0.45));
		ctx.lineTo(shape.x+(shape.w*0.3),shape.y+(shape.h*0.53));
		ctx.lineTo(shape.x+(shape.w*0.68),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.55),shape.y+(shape.h*0.83));
		ctx.lineTo(shape.x+shape.w,shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.77),shape.y+(shape.h*0.72));
		ctx.lineTo(shape.x+(shape.w*0.9),shape.y+(shape.h*0.64));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.40));
		ctx.lineTo(shape.x+(shape.w*0.78),shape.y+(shape.h*0.32));
		ctx.lineTo(shape.x+(shape.w*0.45),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}
var roundRect = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.1),shape.y);
		ctx.quadraticCurveTo(shape.x,shape.y,shape.x,shape.y+(shape.h*0.1));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.9));
		ctx.quadraticCurveTo(shape.x,shape.y+shape.h, shape.x+(shape.w*0.1),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.9),shape.y+shape.h);
		ctx.quadraticCurveTo(shape.x+shape.w,shape.y+shape.h,shape.x+shape.w,shape.y+(shape.h*0.9));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.1));
		ctx.quadraticCurveTo(shape.x+shape.w,shape.y, shape.x+(shape.w*0.9),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.1),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartBasic = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.8));
		ctx.quadraticCurveTo(shape.x,shape.y+(shape.h*1.05),shape.x+(shape.w/2),shape.y+(shape.h*0.8));
		ctx.lineCap="round";
		//ctx.moveTo(shape.x+(shape.w/2),shape.y+(shape.h*0.8));
		ctx.quadraticCurveTo(shape.x+shape.w,shape.y+(0.58*shape.h),shape.x+shape.w,shape.y+shape.h);
		//ctx.bezierCurveTo(shape.x+shape.w,shape.y+shape.h, shape.x+shape.w,shape.y+(shape.h*0.8), shape.x,shape.y+shape.h, shape.x,shape.y+(shape.h*0.8));
		ctx.moveTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.lineTo(shape.x,shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var bothFlowChart = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.8));
		ctx.quadraticCurveTo(shape.x,shape.y+(shape.h*1.05),shape.x+(shape.w/2),shape.y+(shape.h*0.8));
		//ctx.moveTo(shape.x+(shape.w/2),shape.y+(shape.h*0.8));
		ctx.quadraticCurveTo(shape.x+shape.w,shape.y+(0.58*shape.h),shape.x+shape.w,shape.y+(shape.h*0.8));
		//ctx.bezierCurveTo(shape.x+shape.w,shape.y+shape.h, shape.x+shape.w,shape.y+(shape.h*0.8), shape.x,shape.y+shape.h, shape.x,shape.y+(shape.h*0.8));
		ctx.moveTo(shape.x+shape.w, shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.quadraticCurveTo(shape.x+shape.w,shape.y-(0.2*shape.h),shape.x+(shape.w/2),shape.y);
		ctx.quadraticCurveTo(shape.x,shape.y+(0.2*shape.h),shape.x,shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartDdfined = {
	draw : function(ctx, shape)
	{
			ctx.beginPath();
		
		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y);
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.moveTo(shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartInnerSavaSpace = {
	draw : function(ctx,shape)
	{
			ctx.beginPath();
		
		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y);
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.moveTo(shape.x,shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.25));
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartFinal = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.bezierCurveTo(shape.x,shape.y,shape.x,shape.y+shape.h,shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.bezierCurveTo(shape.x+shape.w,shape.y+shape.h, shape.x+shape.w,shape.y,shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartReady = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartHandWork = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+shape.w,shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h * 0.25));
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartHandWork2 = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y);
		ctx.lineTo(shape.x,shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartCard = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartTotal = {
	draw : function(ctx, shape)
		{
			if(shape.x+shape.w > shape.x){
					maxX = shape.x+shape.w;
					minX = shape.x;
				}else{
					maxX = shape.x;
					minX = shape.x+shape.w;
				}

				if(shape.y+shape.h > shape.y){
					maxY = shape.y+shape.h;
					minY = shape.y;
				}else{
					maxY = shape.sY;
					minY = shape.eY;
				}
				midX = (maxX-minX)/2;
				midY = (maxY-minY)/2;

				lx = minX;
				rx = maxX;
				ty = minY;
				by = maxY;
				cx = minX+midX;
				cy = minY+midY;

				var magic = 0.551784;
				var xmagic = magic*midX;
				var ymagic = midY*magic;

				ctx.beginPath();

				ctx.moveTo(cx,ty);
				ctx.bezierCurveTo(cx+xmagic,ty,rx,cy-ymagic,rx,cy);
				ctx.bezierCurveTo(rx,cy+ymagic,cx+xmagic,by,cx,by);
				ctx.bezierCurveTo(cx-xmagic,by,lx,cy+ymagic,lx,cy);
				ctx.bezierCurveTo(lx,cy-ymagic,cx-xmagic,ty,cx,ty);
				ctx.moveTo(shape.x+(shape.w*0.07),shape.y+(shape.h*0.24));
				ctx.lineTo(shape.x+(shape.w*0.93),shape.y+(shape.h*0.76));
				ctx.moveTo(shape.x+(shape.w*0.93),shape.y+(shape.h*0.24));
				ctx.lineTo(shape.x+(shape.w*0.07),shape.y+(shape.h*0.76));
				ctx.fill();
				ctx.stroke();
				ctx.closePath();
		}
}

var flowChartOr = {
	draw : function(ctx, shape)
		{
			if(shape.x+shape.w > shape.x){
					maxX = shape.x+shape.w;
					minX = shape.x;
				}else{
					maxX = shape.x;
					minX = shape.x+shape.w;
				}

				if(shape.y+shape.h > shape.y){
					maxY = shape.y+shape.h;
					minY = shape.y;
				}else{
					maxY = shape.sY;
					minY = shape.eY;
				}
				midX = (maxX-minX)/2;
				midY = (maxY-minY)/2;

				lx = minX;
				rx = maxX;
				ty = minY;
				by = maxY;
				cx = minX+midX;
				cy = minY+midY;

				var magic = 0.551784;
				var xmagic = magic*midX;
				var ymagic = midY*magic;

				ctx.beginPath();

				ctx.moveTo(cx,ty);
				ctx.bezierCurveTo(cx+xmagic,ty,rx,cy-ymagic,rx,cy);
				ctx.bezierCurveTo(rx,cy+ymagic,cx+xmagic,by,cx,by);
				ctx.bezierCurveTo(cx-xmagic,by,lx,cy+ymagic,lx,cy);
				ctx.bezierCurveTo(lx,cy-ymagic,cx-xmagic,ty,cx,ty);
				ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
				ctx.lineTo(shape.x+(shape.w*0.5),shape.y+shape.h);
				ctx.moveTo(shape.x,shape.y+(shape.h*0.5));
				ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
				ctx.fill();
				ctx.stroke();
				ctx.closePath();
		}
}

var flowChartData = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartDataArray = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y);
		ctx.lineTo(shape.x+shape.w,shape.y+shape.h);
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y);
		ctx.lineTo(shape.x,shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartArray = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y);
		ctx.moveTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartStoredData = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.bezierCurveTo(shape.x,shape.y,shape.x,shape.y+shape.h,shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+shape.h);
		ctx.bezierCurveTo(shape.x+(shape.w*0.75),shape.y+shape.h, shape.x+(shape.w*0.75),shape.y,shape.x+shape.w,shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartDelay = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y);
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y+shape.h);
		ctx.bezierCurveTo(shape.x+shape.w,shape.y+shape.h, shape.x+shape.w,shape.y,shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x,shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartDisk = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		
		ctx.moveTo(shape.x,shape.y+(shape.h*0.125));
		ctx.bezierCurveTo(shape.x,shape.y, shape.x+shape.w,shape.y,shape.x+shape.w,shape.y+(shape.h*0.125));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.875));
		ctx.bezierCurveTo(shape.x+shape.w,shape.y+shape.h, shape.x,shape.y+shape.h,shape.x,shape.y+(shape.h*0.875));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.125));
		ctx.bezierCurveTo(shape.x,shape.y+(shape.h*0.375), shape.x+shape.w,shape.y+(shape.h*0.375),shape.x+shape.w,shape.y+(shape.h*0.125));
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartDirectAccessDisk = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.125),shape.y);
		ctx.bezierCurveTo(shape.x,shape.y,shape.x,shape.y+shape.h,shape.x+(shape.w*0.125),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.875),shape.y+shape.h);
		ctx.bezierCurveTo(shape.x+shape.w,shape.y+shape.h, shape.x+shape.w,shape.y,shape.x+(shape.w*0.875),shape.y);
		ctx.bezierCurveTo(shape.x+(shape.w*0.75),shape.y, shape.x+(shape.w*0.75),shape.y+shape.h,shape.x+(shape.w*0.875),shape.y+shape.h);
		ctx.moveTo(shape.x+(shape.w*0.875),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.125),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var flowChartCheck= {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.875),shape.y+shape.h);
		ctx.bezierCurveTo(shape.x+shape.w,shape.y+shape.h, shape.x+shape.w,shape.y,shape.x+(shape.w*0.875),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

var rightArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.625),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.625),shape.y + (shape.h*0.25));
		ctx.lineTo(shape.x, shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x, shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.625) , shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.625), shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.625),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var upArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x,shape.y + (shape.h*0.375));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+(shape.h*0.375));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75) , shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75), shape.y+shape.h*0.375);
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.375));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var downArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y + (shape.h*0.675));
		ctx.lineTo(shape.x+(shape.w*0.75), shape.y+(shape.h*0.675));
		ctx.lineTo(shape.x+(shape.w*0.75), shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25) , shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+shape.h*0.675);
		ctx.lineTo(shape.x, shape.y+(shape.h*0.675));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y+shape.h);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var bothSideArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y + (shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y);
		ctx.lineTo(shape.x , shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.75), shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.75), shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var upDownArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x,shape.y + (shape.h*0.375));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+(shape.h*0.375));
		ctx.lineTo(shape.x+(shape.w*0.25) , shape.y+(shape.h*0.625));
		ctx.lineTo(shape.x, shape.y+shape.h*0.625);
		ctx.lineTo(shape.x+(shape.w*0.5), shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.625));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.625));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.375));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.375));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var fourArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.3),shape.y + (shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.4), shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.4) ,shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x+(shape.w*0.2), shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x+(shape.w*0.2), shape.y+(shape.h*0.21));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.2), shape.y+(shape.h*0.79));
		ctx.lineTo(shape.x+(shape.w*0.2), shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.4), shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.4), shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.3), shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.5), shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.7),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.6), shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.6), shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.8), shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.8), shape.y+(shape.h*0.79));
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.8), shape.y+(shape.h*0.21));
		ctx.lineTo(shape.x+(shape.w*0.8), shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x+(shape.w*0.6), shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x+(shape.w*0.6), shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.7), shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var threewayArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.3),shape.y + (shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.4), shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.4) ,shape.y+(shape.h*0.625));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+(shape.h*0.625));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x, shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.25), shape.y+(shape.h*0.875));
		ctx.lineTo(shape.x+(shape.w*0.75), shape.y+(shape.h*0.875));
		ctx.lineTo(shape.x+(shape.w*0.75), shape.y+shape.h);
		ctx.lineTo(shape.x+shape.w, shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.75), shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.625));
		ctx.lineTo(shape.x+(shape.w*0.6), shape.y+(shape.h*0.625));
		ctx.lineTo(shape.x+(shape.w*0.6), shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.7), shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var rightCurveArrorw = {
	draw : function(ctx ,shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.23));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.46));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.33));
		ctx.lineTo(shape.x+(shape.w*0.47),shape.y+(shape.h*0.33));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.33),shape.x+(shape.w*0.25),shape.y+(shape.h*0.5),30);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.quadraticCurveTo(shape.x,shape.y+(shape.h*0.15),shape.x+(shape.w*0.47),shape.y+(shape.h*0.15),30);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.15));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y);
		//arcTo를 사용하여 곡선 표현!!				
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var uturnCurveArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.4));
		ctx.quadraticCurveTo(shape.x,shape.y,shape.x+(shape.w*0.48),shape.y,30);
		ctx.quadraticCurveTo(shape.x+(shape.w*0.88),shape.y,shape.x+(shape.w*0.88),shape.y+(shape.h*0.4),1);
		ctx.lineTo(shape.x+(shape.w*0.88),shape.y+(shape.h*0.52));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.52));
		ctx.lineTo(shape.x+(shape.w*0.74),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.49),shape.y+(shape.h*0.52));
		ctx.lineTo(shape.x+(shape.w*0.62),shape.y+(shape.h*0.52));
		ctx.lineTo(shape.x+(shape.w*0.62),shape.y+(shape.h*0.3));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.62),shape.y+(shape.h*0.18),shape.x+(shape.w*0.45),shape.y+(shape.h*0.18),30);
		ctx.quadraticCurveTo(shape.x+(shape.w*0.31),shape.y+(shape.h*0.18),shape.x+(shape.w*0.31),shape.y+(shape.h*0.3),30);
		ctx.lineTo(shape.x+(shape.w*0.31),shape.y+shape.h);
		ctx.closePath();
		
		//arcTo를 사용하여 곡선 표현!!	
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var leftUpArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.85));
		ctx.lineTo(shape.x+(shape.w*0.85),shape.y+(shape.h*0.85));
		ctx.lineTo(shape.x+(shape.w*0.85),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.2));
		ctx.closePath();
		

		//arcTo를 사용하여 곡선 표현!!
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var UpforwordArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.7),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.75));
		ctx.closePath();
		

		//arcTo를 사용하여 곡선 표현!!
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var rightBendArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+shape.w,shape.y);
		//ctx.lineTo(shape.x,shape.y+(shape.h*0.9));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.4),shape.y,shape.x,shape.y+(shape.h*0.4),30);
		ctx.quadraticCurveTo(shape.x+(shape.w*0.7),shape.y+(shape.h*0.6),shape.x+(shape.w*0.8),shape.y+(shape.h*0.6),30);
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.876));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.876),shape.x,shape.y+(shape.h*0.7),30);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.4));
		
		ctx.moveTo(shape.x+(shape.w*0.235),shape.y+(shape.h*0.47));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.5),shape.y+(shape.h*0.25),shape.x+shape.w,shape.y+(shape.h*0.23),30);
		ctx.lineTo(shape.x+shape.w,shape.y);
		

		//arcTo를 사용하여 곡선 표현!!
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var leftBendArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y);
		//ctx.lineTo(shape.x,shape.y+(shape.h*0.9));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.4),shape.y,shape.x+shape.w,shape.y+(shape.h*0.4),40);
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.6));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.9),shape.x+(shape.w*0.25),shape.y+(shape.h*0.9),40);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.6));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.6),shape.x+(shape.w*0.73),shape.y+(shape.h*0.45),40);
		ctx.moveTo(shape.x,shape.y);
		ctx.lineTo(shape.x,shape.y+(shape.h*0.25));
		ctx.quadraticCurveTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.25),shape.x+shape.w,shape.y+(shape.h*0.6),40);
		

		//arcTo를 사용하여 곡선 표현!!
		ctx.fill();	
		ctx.stroke();
		ctx.closePath();

	}
}

var explainRightArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x,shape.y);
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.28));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.72));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+shape.h);
		ctx.lineTo(shape.x,shape.y+shape.h);
		ctx.lineTo(shape.x,shape.y);
		

		//arcTo를 사용하여 곡선 표현!!
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var explainRightLeftArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.25),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y);
		

		//arcTo를 사용하여 곡선 표현!!								
		
		//ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var explainRightLeftUpDownArrorw = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y);
		ctx.lineTo(shape.x+(shape.w*0.3),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.3));
		ctx.lineTo(shape.x,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.7));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.25),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.3),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y+shape.h);
		ctx.lineTo(shape.x+(shape.w*0.7),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.75));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.7));
		ctx.lineTo(shape.x+shape.w,shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.3));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.75),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.25));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.7),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y);

		

		//arcTo를 사용하여 곡선 표현!!								
		
		
		//ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var plus = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.6),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.2));
		
		

		//arcTo를 사용하여 곡선 표현!!								
		
		
		//ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var minus = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.4));
		
		
		

		//arcTo를 사용하여 곡선 표현!!								
		
		
		//ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var multiple = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x+(shape.w*0.35),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x+(shape.w*0.35),shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.35),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.65));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.5));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.35));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y+(shape.h*0.35));
		
		

		//arcTo를 사용하여 곡선 표현!!								
		
		
		//ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var division = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();
		
		ctx.arc(12.5,12.5,10.3,0,360*Math.PI / 180);
		ctx.moveTo(shape.x+(shape.w*0.45),shape.y+(shape.h*0.2));
		ctx.bezierCurveTo(shape.x+(shape.w*0.45),shape.y+(shape.h*0.4),shape.x+(shape.w*0.55),shape.y+(shape.h*0.4),20);
		//ctx.arc(shape.x+(shape.w*0.5),shape.y+(shape.h*0.25),(shape.x+(shape.w*0.55))-(shape.x+(shape.w*0.45)),0,2*Math.PI,false);
		ctx.moveTo(shape.x+(shape.w*0.5),shape.y+(shape.h*0.7));
		ctx.arc(shape.x+(shape.w*0.5),shape.y+(shape.h*0.75),10.3,0,360*Math.PI / 180);
		ctx.moveTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.6));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.4));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.4));
		
		console.log((shape.x+(shape.w*0.5))-(shape.x+(shape.w*0.45)));
		

		//arcTo를 사용하여 곡선 표현!!								
		
		
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var equal = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();

		
		ctx.moveTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.45));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.45));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.2));
		ctx.moveTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.55));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.55));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.55));
		
		

		//arcTo를 사용하여 곡선 표현!!								
		
		//ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var notEqual = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();

		ctx.moveTo(shape.x+(shape.w*0.55),shape.y+(shape.h*0.05));
		ctx.lineTo(shape.x+(shape.w*0.5),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.45));
		ctx.lineTo(shape.x+(shape.w*0.45),shape.y+(shape.h*0.45));
		ctx.lineTo(shape.x+(shape.w*0.4),shape.y+(shape.h*0.55));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.55));
		ctx.lineTo(shape.x+(shape.w*0.2),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.3),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.24),shape.y+(shape.h*0.9));
		ctx.lineTo(shape.x+(shape.w*0.44),shape.y+(shape.h*0.95));
		ctx.lineTo(shape.x+(shape.w*0.51),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.8));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.55));
		ctx.lineTo(shape.x+(shape.w*0.60),shape.y+(shape.h*0.55));
		ctx.lineTo(shape.x+(shape.w*0.65),shape.y+(shape.h*0.45));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.45));
		ctx.lineTo(shape.x+(shape.w*0.8),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.7),shape.y+(shape.h*0.2));
		ctx.lineTo(shape.x+(shape.w*0.74),shape.y+(shape.h*0.10));
		ctx.lineTo(shape.x+(shape.w*0.55),shape.y+(shape.h*0.05));

	
		

		//arcTo를 사용하여 곡선 표현!!
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}

var cloud = {
	draw : function(ctx, shape)
	{
		ctx.beginPath();

		ctx.moveTo(shape.x+(shape.w*0.1),shape.y+(shape.h*0.4));
		ctx.bezierCurveTo(shape.x,shape.y+(shape.h*0.4), shape.x,shape.y+(shape.h*0.6),shape.x+(shape.w*0.11),shape.y+(shape.h*0.63),20);
		//ctx.moveTo(shape.x+(shape.w*0.06),shape.y+(shape.h*0.59));
		ctx.bezierCurveTo(shape.x,shape.y+(shape.h*0.57), shape.x+(shape.w*0.03),shape.y+(shape.h*0.8),shape.x+(shape.w*0.3),shape.y+(shape.h*0.75),20);
		//ctx.moveTo(shape.x+(shape.w*0.28),shape.y+(shape.h*0.75));
		ctx.bezierCurveTo(shape.x+(shape.w*0.28),shape.y+(shape.h*0.85), shape.x+(shape.w*0.7),shape.y+(shape.h*0.9),shape.x+(shape.w*0.7),shape.y+(shape.h*0.75),20);
		//ctx.moveTo(shape.x+(shape.w*0.66),shape.y+(shape.h*0.75));
		ctx.bezierCurveTo(shape.x+shape.w,shape.y+(shape.h*0.76), shape.x+(shape.w*0.97),shape.y+(shape.h*0.57),shape.x+(shape.w*0.92),shape.y+(shape.h*0.57),20);
		//ctx.moveTo(shape.x+(shape.w*0.89),shape.y+(shape.h*0.58));
		ctx.bezierCurveTo(shape.x+shape.w,shape.y+(shape.h*0.6), shape.x+shape.w,shape.y+(shape.h*0.2),shape.x+(shape.w*0.7),shape.y+(shape.h*0.3),20);
		//ctx.moveTo(shape.x+(shape.w*0.74),shape.y+(shape.h*0.29));
		ctx.bezierCurveTo(shape.x+(shape.w*0.7),shape.y+(shape.h*0.15), shape.x+(shape.w*0.4),shape.y,shape.x+(shape.w*0.35),shape.y+(shape.h*0.27),20);
		//ctx.moveTo(shape.x+(shape.w*0.36),shape.y+(shape.h*0.24));
		ctx.bezierCurveTo(shape.x+(shape.w*0.3),shape.y+(shape.h*0.17), shape.x,shape.y+(shape.h*0.1),shape.x+(shape.w*0.1),shape.y+(shape.h*0.42),20);
		ctx.fill();
		ctx.stroke();
		
		ctx.closePath();
	}
}

var text = {
	draw : function(ctx, shape){
		ctx.beginPath();

		ctx.moveTo(shape.x, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y);

		ctx.stroke();
		ctx.closePath();

		var t = $("<textarea>");
		t.css("position", "absolute");
		t.css("top", shape.sy);
		t.css("left", shape.sx);
		t.css("width", shape.w);
		t.css("height", shape.h);
		t.text(shape.text);

		t.focusout(function() {
			shape.text = $(this).text();
		});

		$("#textDiv").append(t);
   }
}