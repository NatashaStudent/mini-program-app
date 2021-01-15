export default class ApiRequester {
    static makeRequest(data, action, callback, url) {
        console.log(`Making ${action} call on ${url} with data: `, data);
        
        my.request({
            url: url, // just an example address
            method: action,
            data: data,
            header: {
                "content-type": "application/json"
            },
            success: (res) => {
                console.log('DATA', res.data);
                if (callback != null && callback != undefined) {
                    callback(res.data);
                }
            },
            fail: (res) => {
                this.handleError(res);
            },
            complete: (res) => {
            }
        });
    }

    static handleError(error) {
        console.log('An Error Occured', error);
    }
}
