import ApiRequester from "../ApiRequester";

const baseUrl = "https://api.spacexdata.com/v4/";

export default class SpaceXCore {
    static getUpcomingLaunces(callback) {
        ApiRequester.makeRequest(
            null,
            "Get",
            callback,
            `${baseUrl}launches/upcoming`
        );
    }

    static filterLaunches(filter, callback) {
        ApiRequester.makeRequest(
            filter,
            "Post",
            callback,
            `${baseUrl}launches/query`
        );
    }
}
