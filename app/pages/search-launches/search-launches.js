import SpaceXCore from "../../shared/services/spacex-core";
import moment from "moment";

Page({
    onLoad(query) {
        this.filterLaunches();
    },
    search(e) {
        console.log(e);
    },
    handleCheck(e) {
         this.setData({
                filter: {
                    query: {
                         upcoming: true
                        },
                },
        });
        console.log(this.data);
    },
    filterLaunches() {
        SpaceXCore.filterLaunches(this.data.filter, results => {
            this.setData({
                launches: results.docs.map(item => {
                    return {
                        date: moment(item.date_utc).format(
                            "MMMM Do YYYY, h:mm:ss a"
                        ),
                        description: item.details
                    };
                })
            });
        });
    },
    data: {
        launches: [],
        filter: {
            query: {
                upcoming: false
            },
            options: {
                limit: 5,
                sort: {
                    date_utc: "desc"
                }
            }
        }
    },
    onShareAppMessage() {
        // Back to custom sharing information
        return {
            title: "Search Launches",
            desc: "Search and View Launches",
            path: "pages/search-launches/search-launches"
        };
    }
});
