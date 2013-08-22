function canvas(){
	this.gs = null;
	this.boxes = [];
	this.background = "background-color:#eee;";
	this.ctx;
	this.sColor = "blue";
	this.fColor = "yellow";
}

function selHandle(){
	this.x = 0;
	this.y = 0;
	this.selBoxSize = 6;
}

canvas.prototype = {
	draw : function(){
		for(i=0; i<this.boxes.length; i++){
			this.boxes[i].draw(this.ctx);
		}
		for(i=0; i<this.boxes.length; i++){
			if($(this.selList).length > 0){
				if(this.selList[i]==1){
					this.drawSelect(this.boxes[i]);
				}
			}
		}
		if(this.gs!=null){
			this.gs.draw(this.ctx);
		}
	}
	,drawSelect : function(shape){

		var selBoxSize = shape.selectionHandles[0].selBoxSize;
		var half = selBoxSize/2;

		shape.selectionHandles[0].x = shape.x-half;
		shape.selectionHandles[0].y = shape.y-half;
		 
		shape.selectionHandles[1].x = shape.x+shape.w/2-half;
		shape.selectionHandles[1].y = shape.y-half;
		 
		shape.selectionHandles[2].x = shape.x+shape.w-half;
		shape.selectionHandles[2].y = shape.y-half;
		 
		shape.selectionHandles[3].x = shape.x-half;
		shape.selectionHandles[3].y = shape.y+shape.h/2-half;
		 
		shape.selectionHandles[4].x = shape.x+shape.w-half;
		shape.selectionHandles[4].y = shape.y+shape.h/2-half;
		 
		shape.selectionHandles[6].x = shape.x+shape.w/2-half;
		shape.selectionHandles[6].y = shape.y+shape.h-half;
		 
		shape.selectionHandles[5].x = shape.x-half;
		shape.selectionHandles[5].y = shape.y+shape.h-half;
		 
		shape.selectionHandles[7].x = shape.x+shape.w-half;
		shape.selectionHandles[7].y = shape.y+shape.h-half;

		this.ctx.fillStyle = "#ddd";
		this.ctx.strokeStyle = "#ddd";
		this.ctx.lineWidth = "1";
		this.ctx.strokeRect(shape.x, shape.y, shape.w, shape.h);
		for (var i=0; i<8; i++) {
			var cur = shape.selectionHandles[i];
			this.ctx.fillRect(cur.x, cur.y, selBoxSize, selBoxSize);
		}
	}
	,select : function(sx, sy, ex, ey){
//		clearInterval(timer);
/* 여기서 for문돌면서 selList의 box의 stroke를 바꿔주거나.*/
/* shape.draw에서 자신이 선택된 경우에 stroke를 바꿔주거나 */
		this.selList = [];

		if(ex>sx){
			minx = sx;
			maxx = ex;
		}else{
			minx = ex;
			maxx = sx;
		}

		if(ey>sy){
			miny = sy;
			maxy = ey;
		}else{
			miny = ey;
			maxy = sy;
		}
		
		if(maxx-minx<5 && maxy-miny<5){
			for(i=this.boxes.length-1; i>=0; i--){
				clear(this.gctx);
				this.boxes[i].draw(this.gctx);
				var pixel = c.gctx.getImageData(maxx, maxy, 1, 1);
				if(pixel.data[3] > 0){
					this.selList[i] = 1;
					break;
				}
			}
		}else{
			for(i=this.boxes.length-1; i>=0; i--){
				clear(this.gctx);
				if(this.boxes[i].sx >= minx  && this.boxes[i].sx <= maxx && this.boxes[i].ex >= minx  && this.boxes[i].ex <= maxx && this.boxes[i].sy >= miny  && this.boxes[i].sy <= maxy && this.boxes[i].ey >= miny  && this.boxes[i].ey <= maxy){
					this.selList[i] = 1;
				}
			}
		}
	}
	,addShape : function(name, sx, sy, ex, ey, gs){
		var s = new shape();
		s.fillColor = this.fColor;
		s.strokeColor = this.sColor

		s.name = name;
		s.sx = sx;
		s.sy = sy;
		s.ex = ex;
		s.ey = ey;

		if(ex>sx){
			minx = sx;
			maxx = ex;
		}else{
			minx = ex;
			maxx = sx;
		}

		if(ey>sy){
			miny = sy;
			maxy = ey;
		}else{
			miny = ey;
			maxy = sy;
		}

		s.x = minx;
		s.y = miny;
		s.w = maxx-minx;
		s.h = maxy-miny;

		if(gs==1){
			this.gs = s;
		}else{
			for (var i = 0; i < 8; i ++) {
				s.selectionHandles[i] = new selHandle();
			}
			this.boxes.push(s);
			this.draw();
		}
	}
	,change : function(shape){
		shape.fillColor = this.fColor;
		shape.strokeColor = this.sColor;
	}
	,setFillColor : function(i, color){
		this.boxes[i].fillColor = color;
	}
	,setStrokeColor : function(i, color){
		this.boxes[i].strokeColor = color;
	}
}