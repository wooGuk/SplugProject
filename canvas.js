
canvas = function(){
	this.boxes = [];
	this.background = "background-color:#eee;";
	this.ctx;
	this.sColor = "blue";
	this.fColor = "yellow";
}

canvas.prototype = {
	draw : function(){

		for(i=0; i<this.boxes.length; i++){
			// gs를 그려줌.
			if($(this.gs).length){
				if(this.gs[i].name!="text"){
					this.gs[i].draw(this.ctx);
				}
			}
			this.boxes[i].draw(this.ctx);
		}
		
		if($(this.selList).length && this.selList.length > 0){
			for(var i in this.selList){
				this.gs[i].drawSelect(this.ctx);
			}
		}
	}
	,selectArea : function(sx, sy, ex, ey){
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
				var pixel = mainC.gctx.getImageData(maxx, maxy, 1, 1);
				if(pixel.data[3] > 0){
					this.select(i);
					break;
				}
			}
		}
		else{
			for(i=this.boxes.length-1; i>=0; i--){
				clear(this.gctx);
				if(this.boxes[i].sx >= minx  && this.boxes[i].sx <= maxx && this.boxes[i].ex >= minx  && this.boxes[i].ex <= maxx && this.boxes[i].sy >= miny  && this.boxes[i].sy <= maxy && this.boxes[i].ey >= miny  && this.boxes[i].ey <= maxy){
					this.select(i);
				}
			}
		}
	}
	,select : function(i){
		this.selList[i] = 1;
	}
	,unSelect : function(i){
		delete this.selList[i];
	}
	,addShape : function(s, gs){
		s.fillColor = this.fColor;
		s.strokeColor = this.sColor;

		if(s.ex>s.sx){
			minx = s.sx;
			maxx = s.ex;
		}else{
			minx = s.ex;
			maxx = s.sx;
		}

		if(s.ey>s.sy){
			miny = s.sy;
			maxy = s.ey;
		}else{
			miny = s.ey;
			maxy = s.sy;
		}

		s.x = minx;
		s.y = miny;
		s.w = maxx-minx;
		s.h = maxy-miny;

		if(gs==1){
			s.alpha = 0.5;
			for (var i = 0; i < 8; i ++) {
				s.selectionHandles[i] = new selHandle();
			}
		}else{
			this.boxes.push(s);
		}

		return s;
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
