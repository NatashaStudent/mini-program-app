import ApiRequester from "../ApiRequester";

export default class TrackingService {
    static trackLaunch(data, callback) {
        ApiRequester.makeRequest(
            data,
            "POST",
            callback,
            "http://localhost:3030/db-service"
        );
    }

    static untrackLaunch(id, callback) {
        ApiRequester.makeRequest(
            null,
            "DELETE",
            callback,
            "http://localhost:3030/db-service/" + id
        );
    }

    static getTrackedLaunches(callback) {
        ApiRequester.makeRequest(
            null,
            "GET",
            callback,
            "http://localhost:3030/db-service/"
        );
    }
}
