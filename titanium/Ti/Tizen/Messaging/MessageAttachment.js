define(['Ti/_/declare'], function(declare) {
	return declare('Ti.Tizen.Messaging.MessageAttachment', null, {
		constructor: function(args) {
			if (args.toString() === '[object MessageAttachment]') {
				this._obj = args;
			} else {	
				if (args.hasOwnProperty('filePath')) {
					this._obj = new tizen.MessageAttachment(
						args.filePath,
						args.hasOwnProperty('mimeType') ? mimeType : null
					);
				} else {
					Ti.API.error('MessageAttachment\'s with such arguments not found.');
				}
			}
		},

		constants: {
			id: {
				get: function() {
					return this._obj.id;
				}
			},
			messageId: {
				get: function() {
					return this._obj.messageId;
				}
			},
			mimeType: {
				get: function() {
					return this._obj.mimeType;
				}
			},
			filePath: {
				get: function() {
					return this._obj.filePath;
				}
			},
		},
	});
});