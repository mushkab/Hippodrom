/**
 * Created by moshekabalo on 12/20/15.
 */
Quotes = new Mongo.Collection("quotes");

Quotes.allow({
    insert: function (userId, quote) {
        return userId && quote.owner === userId;
    }});