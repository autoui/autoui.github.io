!function(t,n,i){function l(t){return new l.fn.init(t)}n.Global={};var o={list:{},listen:function(t,n){var i=this.list[t];i||(i=this.list[t]=[]),i.push(n)},trigger:function(){var t,n,i,l;for(t=Array.prototype.shift.call(arguments),n=null!=this.list[t]?this.list[t]:this.list[t]=[],i=0,l=n.length;i<l;i++)if(n[i].apply(this,arguments)===!1)return!1},remove:function(t){var n=this.list[t];null!=n&&(n.length=0)}};n.Global.Event=o,l.fn=l.prototype={init:function(t){},test:function(){console.log(1)}},l.fn.init.prototype=l.fn,n.Global.Module=l}(jQuery,window);var test=Global.Module({container:""});test.test();