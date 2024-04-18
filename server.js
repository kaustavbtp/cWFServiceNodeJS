const express = require('express')
const app = express()
var request = require('request');
const bodyParser = require('body-parser');

const port = process.env.VCAP_APP_PORT || 5000

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    console.log("how are you!")
    console.log(req.query.user)
    res.send("hellooooooooooo"+' '+req.query.user)
})

// kaustav changes
app.post('/wfpost', (req, res)=>{
    console.log("WF Started ============>>>"+JSON.stringify(req.body));
    // console.log(req.body);

    var value = req.body;

    var request = require('request');
    var options = {
      'method': 'PUT',
      'url': 'https://121580b9trial-dev-appteam-backendproj1-srv.cfapps.us10.hana.ondemand.com/catalog/purchaseRequisition(ID=1)',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ID": 1,
        "productName": value.productName,
        "productCost": value.productCost,
        "productCount": value.productCount,
        "approvalStatus": value.Decision //"Approvedhappy"
      })
    
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });

    res.send("hellooooooooooo");
    
})

app.listen(port, () => {
    console.log('Server is running on port 5000')
})

console.log("welcome ZAPYard");

