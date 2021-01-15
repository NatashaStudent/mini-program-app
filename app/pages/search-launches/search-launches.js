import SpaceXCore from "../../shared/services/spacex-core";
import TrackingService from "../../shared/services/tracking-service";
import moment from "moment";

Page({
    onLoad(query) {
        this.filterLaunches();
    },
    search(e) {
        console.log(e);
    },
    handleTrack(e) {
        console.log({ e });
        const launch_id = e.target.dataset.id.launch_id;
        if (e.detail.value.length > 0) {
            TrackingService.trackLaunch({ launch_id });
        } else {
            TrackingService.untrackLaunch(launch_id);
        }
    },
    filterLaunches() {
        SpaceXCore.filterLaunches(this.data.filter, (results) => {
            TrackingService.getTrackedLaunches((trackedLaunches) => {});
            this.setData({
                launches: results.docs.map((item) => {
                    return {
                        date: moment(item.date_utc).format(
                            "MMMM Do YYYY, h:mm:ss a"
                        ),
                        launch_id: item.id,
                        description: item.details,
                    };
                }),
            });
        });
    },
    data: {
        launches: [],
        filter: {
            query: {
                upcoming: false,
            },
            options: {
                limit: 5,
                sort: {
                    date_utc: "desc",
                },
            },
        },
    },
    onShareAppMessage() {
        // Back to custom sharing information
        return {
            title: "Search Launches",
            desc: "Search and View Launches",
            path: "pages/search-launches/search-launches",
        };
    },
});
