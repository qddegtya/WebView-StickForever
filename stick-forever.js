/**
 * StickForever
 * Version: 0.0.1
 * Author: Archer
 */

(function(root){
	
	// class StickForever
	function StickForever(ele) {
		this.ele = ele;
		if(!(this instanceof StickForever)) {
			return new StickForever(ele);
		}
	}
	
	StickForever.prototype._stickScrollOnIOS = function(e) {	
		// vars
		var _ele = this;
		var _currentScrollTop = _ele.scrollTop;
		var _bottomFaVal = _ele.scrollHeight - _ele.offsetHeight;

		// top
		if(_currentScrollTop === 0) {
			_ele.scrollTop = _currentScrollTop + 1;
		// bottom
		} else if(_currentScrollTop === _bottomFaVal) {
			_ele.scrollTop = _currentScrollTop - 1;
		} else {
			return;
		}
    	}
	
	StickForever.prototype.stick = function() {
		// store handler
		var _handler = this._stickScrollOnIOS;
		
		// stick it!
        	this.ele.addEventListener('touchstart', _handler);
		
        	// if device is android
		// remove the eventlistener
        	if(/android/i.test(window.navigator.userAgent)) {
            		this.ele.removeEventListener('touchstart', _handler);
        	}
		
		return this;
	};
	
	// exports
	root.StickForever = StickForever;

}(this));
