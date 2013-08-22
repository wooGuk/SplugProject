
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

		ctx.moveTo(shape.x,shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y);
		ctx.lineTo(shape.x+shape.w, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y+shape.h);
		ctx.lineTo(shape.x, shape.y);
	
		ctx.fillStyle=shape.fillColor;
		ctx.fill();
		ctx.lineWidth = shape.lineWidth;
		ctx.strokeStyle=shape.strokeColor;
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

var text = {
	draw : function(ctx, shape){
	}
}