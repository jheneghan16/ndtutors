class ApptModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.data = {};
        this.collection = [];
        this.name = 'Appts';
        this.fields = [
            'id',
            'className',
            'tutorName',
            'tutorEmail',
            'apptDate',
            'apptTime',
            'isAvail',
            'location'
        ];
    }

    New(obj) {
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            return obj;
        }
    }
    getById(id) {
        return new this.Parse.Query(this.New())
            .get(id)
            .then(result => {
                console.log('result', result);
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }

    getAllAppts(className) {
        return new this.Parse.Query(this.New())
            .equalTo('className', className)
            .descending("createdAt")
            .find(results => {
                results.forEach(result =>
                    this.Parse.defineAttributes(result, this.fields)
                );
                this.data = results;
                return Promise.resolve(results);
            })
            .catch(error => Promise.reject(error));
    }

}

angular
    .module('common')
    .service('ApptModel', ApptModel);
