/**
 * Created by moshekabalo on 12/20/15.
 */
angular.module('hippodrom').directive('quotesList', function () {
    return{
        restrict: 'E',
        templateUrl: 'client/quotes/quotes-list/quotes-list.html',
        controllerAs: 'quotesList',
        controller: function($scope, $reactive) {
            $reactive(this).attach($scope);

            this.subscribe('quotes');

            this.helpers({
                    quotes: () => {
                    return Quotes.find({});
        }
        });
        }

    }

});