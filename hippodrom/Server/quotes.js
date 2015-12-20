/**
 * Created by moshekabalo on 12/20/15.
 */
Meteor.publish("quotes", function () {
    return Quotes.find({



                $and: [
                    {owner: this.userId},
                    {owner: {$exists: true}}
                ]


    });
});