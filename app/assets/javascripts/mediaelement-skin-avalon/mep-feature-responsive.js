(function($) {
        $.extend(MediaElementPlayer.prototype, {
                buildresponsive: function(player, controls, layers, media) {
			if (mejs.MediaFeatures.isiPhone && player.isVideo) {
	                        player.container.on("controlsready", function() {
        	                        player.total.parent().css('visibility', 'hidden');
                	                player.currenttime.parent().css('visibility', 'hidden');
                	                player.fullscreenBtn.hide();
                        	});
			}
                }
        });
})(mejs.$);

