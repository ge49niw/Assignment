module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    function productPrice(msg, respond) {
        const result=0;
        for (let item of mockData){
            if (item.product_id = msg.product_id){
                result=item;
            }
        }
        return result.productPrice;
    }
}