module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    function productURL(msg, respond) {
        //Loop over products to find the one with id
        const result=0;
        for (let item of mockData){
            if (item.product_id = msg.product_id){
                result=item;
            }
        }
        return result.productURL;
    }

    function productName(msg, respond) {
        const result=0;
        for (let item of mockData){
            if (item.product_id = msg.product_id){
                result=item;
            }
        }
        return result.productName;
    }

}