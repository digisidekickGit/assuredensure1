import QRCode from "qrcode";
import * as jsPDF from "jspdf";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Logo from "./../assets/images/logo2.png";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

/// TO print Dispatch Slip
export default class PrintDispatchService {
  genQR(text) {
    let qr = "";
    QRCode.toDataURL(text, function (err, url) {
      qr = url;
    });
    return qr;
  }

  Printpdf(dispatchData, date) {
    debugger;
    //   const cmp = dispatchData.Cmp;
  
    const company = dispatchData.company;
    //s company.CompanyLogo =this.Logo;

    var doc = {
      pageMargins: [30, 10, 30, 10],
      layout: "",
      pageSize: "A4",

    
      content: [
        {
          text: "Dispatch Invoice",
          alignment: "center",
          fontSize: 18,
          bold: true,
          margin: 5,
        },
        {
          table: {
            widths: ["35%", "45%", "20%"],
            body: [
              [
                {
                  margin: [10, 10, 0, 0],
                  width: 170,
                  height: 60,
                  //rowSpan: 2,
                  image: "data:image/jpeg;base64," + company.CompanyLogo + "",
                }, //fontSize: 16, bold: true,margin:[0,20,0,0]
                {
                  //rowSpan: 2,
                  text: [
                    //this.selectedddl.value.Name
                    // { text: 'Krishi Rasayan' + '\n' + 'Address', fontSize: 12, bold: true, margin: [0, 100, 0, 0], alignment: 'center' },
                    {
                      text: company.CompanyName + "\n" + company.Address,
                      fontSize: 12,
                      bold: true,
                      margin: [0, 70, 0, 0],
                      alignment: "center",
                    },
                    {
                      text:
                        "\n" + company.City + " - " + company.Pincode + "\n",
                      fontSize: 10,
                      alignment: "center",
                    },
                    {
                      text: "Tel :- " + company.Mobile,
                      italics: true,
                      fontSize: 10,
                      alignment: "center",
                    },
                    {
                      text:
                        "\nDispatch Date : " +
                        date +
                        "\n" +
                        "Dispatch No : " +
                        dispatchData.CartonId +
                        "\n",
                      fontSize: 10,
                      alignment: "center",
                    },
                    // { text: 'Krishi Rasayan Exports Pvt. Ltd.' + '\n 1115, Hemkunt Modi Tower, 98, Nehru Place', fontSize: 12, bold: true, margin: [0, 100, 0, 0], alignment: 'center' },
                    // { text: '\n' + "New Delhi 110019" + '\n', fontSize: 10, alignment: 'center' },
                    // { text: 'Tel :- 011 3088 5555', italics: true, fontSize: 10, alignment: 'center' },
                  ],
                },
                {
                  margin: [20, 10, 5, 5],
                  qr: dispatchData.CartonId,
                  fit: "80",
                },
              ],

              [
                //fontSize: 16, bold: true,margin:[0,20,0,0]
                {
                  colSpan: 3,
                  text: [
                    //this.selectedddl.value.Name
                    {
                      bold: true,
                      text:
                        "Customer Details : " +
                        dispatchData.userDetail.FirmName +
                        // ' \nShipping Address : ' + dispatchData.userDetail.ship_Address1 + ' ' + dispatchData.userDetail.ship_Address2 + ' ' + dispatchData.userDetail.ship_CityName + ' ' + dispatchData.userDetail.ship_StateName + ' ' + dispatchData.userDetail.ship_Pincode + ' ' + dispatchData.userDetail.ship_CountryName +
                        "\n Billing Address : " +
                        dispatchData.userDetail.bill_Address1 +
                        " " +
                        dispatchData.userDetail.bill_Address2 +
                        " " +
                        dispatchData.userDetail.bill_CityName +
                        " " +
                        dispatchData.userDetail.bill_StateName +
                        " " +
                        dispatchData.userDetail.bill_Pincode +
                        " " +
                        dispatchData.userDetail.bill_CountryName +
                        " ",
                      fontSize: 10,
                    },
                  ],
                },
                "",
                "",
              ],
            ],
          },

          layout: "",
        },

        {
          //for dispatched data
          marginTop: -1,
          marginBottom: -1,
          fontSize: 9.5,
          table: {
            widths: ["5%", "18%", "50%", "9%", "5%", "13%"],
            body: this.getDispatchedData(dispatchData),
          },
        },
        {
          marginBottom: -1,
          fontSize: 10,
          table: {
            widths: ["10%", "50%", "10%", "15%","15%"],
            body: this.getInfoBody(dispatchData),
          },
        },
        {
          //for special instruction
          table: {
            heights: [10, 90],
            margin: 5,
            widths: ["*"],
            body: [["Other Comments or Special Instructions"], [""]],
          },
        },
      ],
      styles: {
        filledHeader: {
          bold: true,
          fontSize: 14,
          color: "white",
          fillColor: "black",
          alignment: "center",
        },
      },
    };

    pdfMake.createPdf(doc).download(dispatchData.CartonId + ".pdf");
    //this.addDispatch.reset();
  }

  //get special info body
  getInfoBody(dispatchData) {
    const counts = dispatchData.cartonList.reduce(
      (r, { ProductName, BatchNo,TotalQty }) => {
        const key = `${ProductName}-${BatchNo}`;
        r[key] = r[key] || {
          ProductName,
          BatchNo,
          Count: 0,
          Items:0
        };
        r[key].Count += 1;
        r[key].Items += 1*TotalQty;
        return r;
      },
      {}
    );
    const timeTable = Object.values(counts);
    let d = [];
    debugger;
    var i = 1;
    d.push(["S.No.", "Product Specification", "Batch No.", "Carton Counts","Item Counts"]);
    timeTable.forEach((childObj) => {
      d.push([i, childObj.ProductName, childObj.BatchNo, childObj.Count,childObj.Items]);
      i++;
    });
    d.push([
      { alignment: "right", colSpan: 5, text: "Total Quantity : " + dispatchData.Qty },
      {},
    ]);
    return d;
  }

  //to get Dispatched data
  getDispatchedData(data) {
    let d = [];
    var i = 1;
    d.push([
      "S.No.",
      "Carton No",
      "Product Specification",
      "Batch No.",
      "Units",
      "Total Quantity",
    ]);
    data.cartonList.forEach((childObj) => {
      if (childObj.CartonId.length > 0) {
        d.push([
          i,
          childObj.CartonId,
          childObj.ProductName,
          childObj.BatchNo,
          childObj.TotalQty,
          childObj.ProductUOM,
        ]);
        i++;
      }
    
    });
    return d;
  }
}
