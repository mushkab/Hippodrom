/**
 * Created by moshekabalo on 12/20/15.
 */
angular.module('hippodrom').directive('addQuoteRequest', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/quotes/add-quote-request/add-quote-request.html',
        controllerAs: 'addQuoteRequest',
        controller: function ($scope,$reactive ,$stateParams) {
            $reactive(this).attach($scope);
            console.log("im here");
            this.newQuote = {};

            this.addQuote = () => {
                this.newQuote.owner = Meteor.user()._id;
                Quotes.insert(this.newQuote);
                this.newQuote = {};
            };
        }
    }
});