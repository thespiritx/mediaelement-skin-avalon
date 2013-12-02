(function($) {
        $.extend(mejs.MepDefaults, {
		// iOS does not have the metadata before calling load()
                iOSDisplayedDuration: -1
        });

        $.extend(MediaElementPlayer.prototype, {
                buildresponsive: function(player, controls, layers, media) {
                        if (mejs.MediaFeatures.isiPhone && player.isVideo) {
                                player.container.on("controlsready", function() {
                                        player.total.parent().css('visibility', 'hidden');
                                        player.currenttime.parent().css('visibility', 'hidden');
                                        player.fullscreenBtn.hide();
                                });
                        }
                        if (mejs.MediaFeatures.isiOS) {
                                player.container.on("controlsready", function() {
                                        if (player.options.iOSDisplayedDuration >= 0) {
                                                player.durationD.text(mejs.Utility.secondsToTimeCode(player.options.iOSDisplayedDuration, player.options.alwaysShowHours || player.options.iOSDisplayedDuration > 3600, player.options.showTimecodeFrameCount, player.options.framesPerSecond || 25));
                                        }
                                });
                        }
                }
        });
})(mejs.$);
