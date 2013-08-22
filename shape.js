function shape(){
	this.name = "rect";
	this.x = 0;
	this.y = 0;
	this.w = 10;
	this.h = 10;
	this.sx = 0;
	this.sy = 0;
	this.ex = 0;
	this.ey = 0;
	this.alpha = 1;
	this.fillColor = null;
	this.strokeColor = null;
	this.lineWidth = 2;
	this.lineCap = "round";
	this.text = "";
	this.selectionHandles = [];
}

shape.prototype = {
	draw : function(ctx){
		ctx.alpha = this.alpha;
		ctx.fillStyle = this.fillColor;
		ctx.strokeStyle = this.strokeColor;
		ctx.lineWidth = this.lineWidth;
		ctx.lineCap = this.lineCap;
		eval(this.name).draw(ctx, this);
	}
}
