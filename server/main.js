let ESX = null;
emit("esx:getSharedObject", function(obj) { ESX = obj});

ESX.RegisterUsableItem("tunerchip", (source) => {
	emitNet("xgc-tuner:openTuner", source)
});
