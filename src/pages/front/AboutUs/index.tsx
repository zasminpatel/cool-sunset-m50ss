import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "hi"
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      // headers: {
      //   "X-Requested-With": "XMLHttpRequest",
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      //   //"Content-Type": "text/plain",
      //   "Content-Type": "text/xml"
      // },
      withCredentials: true,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Headers":
      //     "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
      // },
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"
      },
      baseURL:
        "https://websvr.jbbros.com/jbapi.aspx?UserId=haresh.malavia&APIKey=F8783EF8-A200-4F87-8EA0-A655F40DF4A3&Action=S&CaratFrom=0.3&CaratTo=99.99&Lab=ALL&Purity=ALL&Shape=ALL&PG=1"
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        debugger;
        console.log(error);
      });

    return;
    var xmlhttp = new XMLHttpRequest(),
      method = "GET",
      header = {
        "User-Agent":
          "Mozilla/4.0 (Compatible; Windows NT 5.1;MSIE 6.0) (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"
      },
      url =
        "https://websvr.jbbros.com/jbapi.aspx?UserId=haresh.malavia&APIKey=F8783EF8-A100-4F87-8EA0-A655F40DF4A3&Action=S&CaratFrom=0.3&CaratTo=99.99&Lab=ALL&Purity=ALL&Shape=ALL&PG=1";

    xmlhttp.open(method, url, true);
    xmlhttp.onerror = function (error) {
      debugger;
      console.log("** An error occurred during the transaction");
    };
    xmlhttp.send();
    return;

    return;

    axios({
      method: "get",
      // headers: {
      //   // "User-Agent":
      //   //   "Mozilla/4.0 (Compatible; Windows NT 5.1;MSIE 6.0) (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      //   accept: "application/json"
      // },
      url:
        "https://websvr.jbbros.com/jbapi.aspx?UserId=haresh.malavia&APIKey=F8783EF8-A100-4F87-8EA0-A655F40DF4A3&Action=S&CaratFrom=0.3&CaratTo=99.99&Lab=ALL&Purity=ALL&Shape=ALL&PG=1"
      // responseType: "stream",
      // responseType: "json",
      // "Access-Control-Allow-Origin": "*"
    })
      .then(function (response) {
        debugger;
        console.log(response);
        // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
      })
      .catch(function (error) {
        // handle error
        debugger;
        console.log(error);
      });

    // axios
    //   .get(
    //     "https://websvr.jbbros.com/jbapi.aspx?UserId=haresh.malavia&APIKey=F8783EF8-A100-4F87-8EA0-A655F40DF4A3&Action=S&CaratFrom=0.3&CaratTo=99.99&Lab=ALL&Purity=ALL&Shape=ALL&PG=1"
    //   )
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });

    // const Response = await axios.get(http://xxxxx/WebServiceTest/service.svc?wsdl/GetItems, {

    // var xhr = new XMLHttpRequest();
    // xhr.open(
    //   "get",
    //   // "https://demowebsvr.jbbros.com/JBWebInternal.svc/Get_LoginAvailable?SignInId=102660&MailSentBy=1",
    //   "https://websvr.jbbros.com/jbapi.aspx?UserId=haresh.malavia&APIKey=F8783EF8-A100-4F87-8EA0-A655F40DF4A3&Action=S&CaratFrom=0.3&CaratTo=99.99&Lab=ALL&Purity=ALL&Shape=ALL&PG=1",
    //   true
    // );
    // xhr.onload = function () {
    //   var webAPIData = JSON.parse(xhr.responseText);
    //   this.setState({ data: webAPIData });
    // }.bind(this);
    // xhr.send();
  }
  async functionName() {
    debugger;
    let response = () => {
      return new Promise(function (resolve, reject) {
        fetch(
          "https://webapps.jbbros.com/JBWebService.svc?wsdl/Get_AppVersion",
          {
            params: {
              Number: "100",
              Id: "101",
              userName: "11",
              credential: "Test"
            }
          }
        ).then((response) => {
          resolve(response);
        });
      });
    };
    let responseData = await response();
    console.log(responseData.data);
  }

  render() {
    return <h2>Hi, I am a Car! {this.state.data}</h2>;
  }
}
export default AboutUs;
// export default function AboutUs() {
//   return (
//     <>
//       <Button variant="contained">About Us</Button>
//     </>
//   );
// }
