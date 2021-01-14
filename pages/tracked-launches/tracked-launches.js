Page({
    onLoad(query) {
    },
    onShareAppMessage() {
        // Back to custom sharing information
        return {
            title: "Tracked Launches",
            desc: "Tracked Launches",
            path: "pages/tracked-launches/tracked-launches"
        };
    }
});
