(function( $, w, u ){
    w.Global = {};

    var Event = {
        list: {},

        listen: function( event, fn ) {
            var events = this.list[ event ];

            if( !events ) {
                events = this.list[ event ] = [];
            }

            events.push( fn );
        },

        trigger: function() {
            var event,
                fns,
                i,
                len;

            event = Array.prototype.shift.call( arguments );

            fns = this.list[ event ] != null ? this.list[ event ] : this.list[ event ] = [];

            for( i=0, len = fns.length; i<len; i++ ) {
                if( fns[ i ].apply( this, arguments ) === false ) {
                    return false;
                }
            }
        },

        remove: function( event ) {
            var fns = this.list[ event ];

            if( fns != null ) {
                fns.length = 0;
            }
        }
    };

    w.Global.Event = Event;

    function Module( opt ) {
        return new Module.fn.init( opt );
    }

    Module.fn = Module.prototype = {
        init: function ( opt ) {},
        test: function() {
            console.log(1);
        }
    }

    Module.fn.init.prototype = Module.fn ;

    w.Global.Module = Module;

})(jQuery, window, undefined);

var test = Global.Module({
    container: ''
});
test.test();