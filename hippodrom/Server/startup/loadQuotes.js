/**
 * Created by moshekabalo on 12/20/15.
 */

    Meteor.startup(function () {
        if (Quotes.find().count() === 0) {
            var quotes = [
                {

                    'description': 'Spain - Israel'
                },
                {

                    'description': 'Bulgaria - Israel'
                },
                {

                    'description': 'Armenia - Kazahastan'
                }
            ];

            for (var i = 0; i < quotes.length; i++) {
                Quotes.insert(quotes[i]);
            }
        }
    });
