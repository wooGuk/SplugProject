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

function selHandle(){
	this.x = 0;
	this.y = 0;
	this.selBoxSize = 6;
}

shape.prototype = {
	draw : function(ctx){
		ctx.globalAlpha = this.alpha;
		ctx.fillStyle = this.fillColor;
		ctx.strokeStyle = this.strokeColor;
		ctx.lineWidth = this.lineWidth;
		ctx.lineCap = this.lineCap;
		eval(this.name).draw(ctx, this);
	}
	// 0  1  2
    // 3     4
    // 5  6  7
	,drawSelect : function(ctx){
		var selBoxSize = this.selectionHandles[0].selBoxSize;
		var half = selBoxSize/2;

		this.selectionHandles[0].x = this.x-half;
		this.selectionHandles[0].y = this.y-half;
		 
		this.selectionHandles[1].x = this.x+this.w/2-half;
		this.selectionHandles[1].y = this.y-half;
		 
		this.selectionHandles[2].x = this.x+this.w-half;
		this.selectionHandles[2].y = this.y-half;
		 
		this.selectionHandles[3].x = this.x-half;
		this.selectionHandles[3].y = this.y+this.h/2-half;
		 
		this.selectionHandles[4].x = this.x+this.w-half;
		this.selectionHandles[4].y = this.y+this.h/2-half;
		 
		this.selectionHandles[6].x = this.x+this.w/2-half;
		this.selectionHandles[6].y = this.y+this.h-half;
		 
		this.selectionHandles[5].x = this.x-half;
		this.selectionHandles[5].y = this.y+this.h-half;
		 
		this.selectionHandles[7].x = this.x+this.w-half;
		this.selectionHandles[7].y = this.y+this.h-half;

		ctx.globalAlpha = 1;
		ctx.fillStyle = "#ddd";
		ctx.strokeStyle = "#ddd";
		ctx.lineWidth = "1";
		ctx.lineCap = "square";
		ctx.strokeRect(this.x-this.lineWidth, this.y-this.lineWidth, this.w+this.lineWidth*2, this.h+this.lineWidth*2);
		for (var i=0; i<8; i++) {
			var cur = this.selectionHandles[i];
			ctx.fillRect(cur.x, cur.y, selBoxSize, selBoxSize);
		}
	}
}
