(function($) {
        $.extend(mejs.MepDefaults, {
		// iOS does not have the metadata before calling load()
                mobileDisplayedDuration: -1
        });

        $.extend(MediaElementPlayer.prototype, {
                buildresponsive: function(player, controls, layers, media) {

			// Hides time rail, elapsed time and fullscreen button because they don't work on the iPhone
                        if (mejs.Features.isiPhone && player.isVideo) {
                                player.container.on("controlsready", function() {
                                        player.total.parent().css('visibility', 'hidden');
                                        player.currenttime.parent().css('visibility', 'hidden');
                                        player.fullscreenBtn.hide();
                                });
                        }

			// Displays a duration because mobile devices don't preload HLS streams
                        if (mejs.Features.isiOS || mejs.Features.isAndroid) {
                                player.container.on("controlsready", function() {
                                        if (player.options.mobileDisplayedDuration >= 0) {
                                                player.durationD.text(mejs.Utils.secondsToTimeCode(player.options.mobileDisplayedDuration,
										player.options.alwaysShowHours || player.options.mobileDisplayedDuration > 3600,
										player.options.showTimecodeFrameCount,
										player.options.framesPerSecond || 25));
                                        }
                                });
                        }
                }
        });
})(mejs.$);
