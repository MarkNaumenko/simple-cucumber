var steps = function() {

    this.Given(/^I am the best$/, function (callback) {
         console.log('\n===========\n=Hooray!!!=\n===========');
         callback(null, 'success');
    });

};

module.exports = steps;