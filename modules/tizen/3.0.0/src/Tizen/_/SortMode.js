define(['Ti/_/declare', 'Ti/_/Evented'], function(declare, Evented) {

	var sm = declare(Evented, {

		constructor: function(args) {
			if (args.toString() === '[object SortMode]') {
				this._obj = args;
			} else {
				this._obj = new tizen.SortMode(args.attributeName, args.order);
			}
		},

		properties: {
			attributeName: {
				get: function() {
					return this._obj.attributeName;
				},
				set: function(value) {
					this._obj.attributeName = value;
				}
			},
			order: {
				get: function() {
					return this._obj.order;
				},
				set: function(value) {
					this._obj.order = value;
				}
			}
		}

	});

	sm.prototype.declaredClass = 'Tizen.SortMode';
	return sm;
});