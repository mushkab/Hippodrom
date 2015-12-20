/**
 * Created by moshekabalo on 12/20/15.
 */
angular.module('hippodrom').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('quotes', {
            url: '/quotes',
            template: '<quotes-list></quotes-list>',
            resolve: {
                currentUser: ($q) => {
                if (Meteor.userId() == null) {
        return $q.reject();
    }
    else {
        return $q.resolve();
    }
}
}
        })
        .state('addQuoteRequest', {
            url: '/addQuoteRequest',
            template: '<add-quote-request></add-quote-request>',
        resolve: {
            currentUser: ($q) => {
            if (Meteor.userId() == null) {
        return $q.reject();
    }
    else {
        return $q.resolve();
    }
}
}
        });

    $urlRouterProvider.otherwise("/");
});