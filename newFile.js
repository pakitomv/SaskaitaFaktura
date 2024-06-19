// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'file.xml', true);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var xml = xhr.responseXML;
//         // Now you can work with the XML DOM
//         console.log(xml);
//     }
// };

// xhr.send();

// document.addEventListener('DOMContentLoaded', function () {
//     var dataForm = document.getElementById('dataForm');

//     dataForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         // Get form data
//         var formData = new FormData(dataForm);
//         var Selersname = formData.get('inputSelersName');
//         var SelersRegistrationNr = formData.get('inpuSelersRegistrationNr');
//         var SelersAdress = formData.get('inputSelersAddress');
//         var SelersCode = formData.get('inputSelersCode');
//         var SelersAk = formData.get('inputSelersAk');
//         var Bank = formData.get('inputState');
//         var SelersAs = formData.get('inputSelersAs');
//         var BuyersName = formData.get('inpuBuyersName');
//         var BuyersAdress = formData.get('inputAddress');
//         var BuyersCode = formData.get('inputBuyersCode');
//         var BuyersPVMCode = formData.get('inputBuyersPVMcode');

//         // Create XML document
//         var xmlDoc = document.implementation.createDocument(null, 'form_data');

//         // Create XML elements
//         var rootElement = xmlDoc.documentElement;

//         var SelersnameElement = xmlDoc.createElement('Selersname');
//         SelersnameElement.textContent = Selersname;
//         rootElement.appendChild(SelersnameElement);

//         var SelersRegistrationNrElement = xmlDoc.createElement('SelersRegistrationNr');
//         SelersRegistrationNrElement.textContent = SelersRegistrationNr;
//         rootElement.appendChild(SelersRegistrationNrElement);

//         var SelersAdressElement = xmlDoc.createElement('SelersAdress');
//         SelersAdressElement.textContent = SelersAdress;
//         rootElement.appendChild(SelersAdressElement);

//         var SelersCodeElement = xmlDoc.createElement('SelersCode');
//         SelersCodeElement.textContent = SelersCode;
//         rootElement.appendChild(SelersCodeElement);

//         var SelersAkElement = xmlDoc.createElement('SelersAk');
//         SelersAkElement.textContent = SelersAk;
//         rootElement.appendChild(SelersAkElement);

//         var BankElement = xmlDoc.createElement('Bank');
//         BankElement.textContent = Bank;
//         rootElement.appendChild(BankElement);

//         var SelersAsElement = xmlDoc.createElement('SelersAs');
//         SelersAsElement.textContent = SelersAs;
//         rootElement.appendChild(SelersAsElement);

//         var BuyersNameElement = xmlDoc.createElement('BuyersName');
//         BuyersNameElement.textContent = BuyersName;
//         rootElement.appendChild(BuyersNameElement);

//         var BuyersAdressElement = xmlDoc.createElement('BuyersAdress');
//         BuyersAdressElement.textContent = BuyersAdress;
//         rootElement.appendChild(BuyersAdressElement);

//         var BuyersCodeElement = xmlDoc.createElement('BuyersCode');
//         BuyersCodeElement.textContent = BuyersCode;
//         rootElement.appendChild(BuyersCodeElement);

//         var BuyersPVMCodeElement = xmlDoc.createElement('BuyersPVMCode');
//         BuyersPVMCodeElement.textContent = BuyersPVMCode;
//         rootElement.appendChild(BuyersPVMCodeElement);

//         // Serialize XML to string
//         var serializer = new XMLSerializer();
//         var xmlString = serializer.serializeToString(xmlDoc);

//         // Save XML string to file (assuming you have permission to write to file)
//         saveXMLToFile(xmlString);
//     });

//     function saveXMLToFile(xmlString) {
//         // Here you can use server-side code (e.g., Node.js with fs module) to save XML to file
//         // Example in browser environment (not recommended for security reasons):
//         var xhr = new XMLHttpRequest();
//         xhr.open('POST', 'save_xml.php'); // Example PHP script to handle saving XML to file
//         xhr.setRequestHeader('Content-Type', 'application/xml');
//         xhr.send(xmlString);

//         // Note: Saving directly to file from client-side JavaScript is generally restricted for security reasons.
//         // Typically, this task is handled by server-side code in real applications.
//     }
// });
//import { jsPDF } from "jspdf";

// const doc = new jsPDF();
// doc.text("Hello world!", 10, 10);
// doc.save("a4.pdf");
//  const { jsPDF } = window.jspdf;

//  document.getElementById('generate-pdf').addEventListener('click', () => {
//     const name = document.getElementById('inputSelersName').value;
//     const adress = document.getElementById('inputSelersAddress').value;

//     if (!name || !adress) {
//         alert("Please fill out all fields.");
//         return;
//     }

//     const doc = new jsPDF();
//     doc.text(`Name: ${name}`, 10, 10);
//     doc.text(`adress: ${adress}`, 10, 20);

//     doc.save('report.pdf');
// });
// Import jsPDF (uncomment if using npm)
// import { jsPDF } from "jspdf";

// module.exports = function (jsPDFAPI) {
//     var font = 'BASE64 HERE';

//     var callAddFont = function () {
//         this.addFileToVFS('Roboto-Regular-normal.ttf', font);
//         this.addFont('Roboto-Regular-normal.ttf', 'Roboto-Regular', 'normal');
//     };

//     jsPDFAPI.events.push(['addFonts', callAddFont]);
// };
// require('./Fonts/Roboto-Regular-normal')(jsPDF.API);
// module.exports = jsPDF;

// const { jsPDF } = window.jspdf;

// // Path to the Roboto font files in your project
// const fontRegularPath = 'Roboto-Regular-normal.js';
// const fontBoldPath = 'Fonts/Roboto-Bold.ttf';
// const fontItalicPath = 'Fonts/Roboto-Italic.ttf';
// const fontBoldItalicPath = 'Fonts/Roboto-BoldItalic.ttf';

// document.getElementById('generate-pdf').addEventListener('click', () => {

//     const doc = new jsPDF();
   
//     // Add each font to the Virtual File System (VFS) and register with jsPDF
// doc.addFileToVFS(fontRegularPath, fontRegularPath);
// // doc.addFileToVFS(fontBoldPath, fontBoldPath);
// // doc.addFileToVFS(fontItalicPath, fontItalicPath);
// // doc.addFileToVFS(fontBoldItalicPath, fontBoldItalicPath);

//  try {
//      doc.addFont(fontRegularPath, 'Roboto-Regular', 'normal');
// //     doc.addFont(fontBoldPath, 'Roboto-Bold', 'bold');
// //     doc.addFont(fontItalicPath, 'Roboto-Italic', 'italic');
// //     doc.addFont(fontBoldItalicPath, 'Roboto-BoldItalic', 'bolditalic');
//  } catch (error) {
//      console.error('Error adding fonts:', error);
//  }

// // Set default font (optional)
// doc.setFont('Roboto-Regular', 'normal');

//     // Set the font


//     // Add title
//     doc.setFontSize(16);
//     doc.setFont(undefined, 'bold');
//     doc.text("SĄSKAITA FAKTŪRA", 105, 20, { align: "center" });

//     // Add series number
//     doc.setFontSize(12);
//     doc.setFont(undefined, 'normal');
//     doc.text("Serija   Nr. _____", 105, 30, { align: "center" });

//     // Add date
//     doc.text("Data: ____ m. __ mėn. __ d.", 105, 40, { align: "center" });

//     // Draw borders around sections
//     // Seller details
//     doc.rect(20, 50, 80, 30);
//     doc.setFontSize(10);
//     doc.text("Pardavėjo rekvizitai", 25, 55);
//     doc.text("Pavadinimas / vardas, pavardė", 25, 60);
//     doc.text("Įmonės kodas", 25, 65);
//     doc.text("Adresas", 25, 70);

//     // Buyer details
//     doc.rect(110, 50, 80, 30);
//     doc.text("Pirkėjo rekvizitai", 115, 55);
//     doc.text("Pavadinimas / vardas, pavardė", 115, 60);
//     doc.text("Įmonės kodas / asmens kodas", 115, 65);
//     doc.text("Adresas", 115, 70);

//     // Table headers with adjusted font size and text wrapping
//     doc.setFontSize(8);
//     doc.setFont(undefined, 'bold');
//     doc.rect(20, 90, 20, 10);
//     doc.text("Eil. Nr.", 22, 95);
//     doc.rect(40, 90, 60, 10);
//     doc.text("Prekės, turto ar", 42, 94);
//     doc.text("paslaugos pavadinimas", 42, 98);
//     doc.rect(100, 90, 20, 10);
//     doc.text("Mato vnt.", 102, 95);
//     doc.rect(120, 90, 20, 10);
//     doc.text("Kiekis", 122, 95);
//     doc.rect(140, 90, 30, 10);
//     doc.text("Kaina", 142, 95);
//     doc.rect(170, 90, 20, 10);
//     doc.text("Suma", 172, 95);

//     // Table rows with separate cells
//     doc.setFont(undefined, 'normal');
//     for (let i = 0; i < 6; i++) {
//       let y = 100 + i * 10;
//       doc.rect(20, y, 20, 10); // Eil. Nr.
//       doc.rect(40, y, 60, 10); // Prekės
//       doc.rect(100, y, 20, 10); // Mato vnt.
//       doc.rect(120, y, 20, 10); // Kiekis
//       doc.rect(140, y, 30, 10); // Kaina
//       doc.rect(170, y, 20, 10); // Suma
//     }

//     // Total section
//     let yTotal = 160; // Position for total section
//     doc.setFont(undefined, 'bold');
//     doc.rect(140, yTotal, 30, 10); // Kaina column cell
//     doc.text("Iš viso", 142, yTotal + 5);
//     doc.rect(170, yTotal, 20, 10); // Empty cell below Suma column

//     // Additional information section
//     let yAdditional = yTotal + 20; // Adding space between sections
//     doc.setFont(undefined, 'normal');
//     doc.rect(20, yAdditional, 170, 20);
//     doc.text("Papildoma informacija", 25, yAdditional + 5);
    
//     // Add lines for additional information
//     for (let i = 1; i <= 3; i++) {
//       doc.line(25, yAdditional + 5 + i * 5, 185, yAdditional + 5 + i * 5);
//     }

//     // Signature fields
//     doc.setFontSize(10);
//     let ySignatures = yAdditional + 30;
//     doc.text("Sąskaitą išrašė: ___________________________________________", 20, ySignatures);
//     doc.text("Sąskaitą priėmė: ___________________________________________", 20, ySignatures + 10);
//     doc.text("(asmens parašušo dokumentas, pareigos, vardas ir pavardė, vardas ir pirmoji vardo raidė, pavardė, parašas)", 20, ySignatures + 20);

//     // Save the PDF
//     doc.save("saskaita-faktura.pdf");
// });

// Assuming you have already converted Roboto-Regular.ttf to Roboto-Regular-normal.js using the FontConverter tool

// const { jsPDF } = window.jspdf;

// Path to the converted font JavaScript file
// const fontRegularPath = 'Fonts/Roboto-Regular-normal.js';

// document.getElementById('generate-pdf').addEventListener('click', async  () => {
//     const doc = new jsPDF();

//     Add the font to the Virtual File System (VFS) and register with jsPDF
//     try {
//         Fetch the font data using fetch
//         const response = await fetch(fontRegularPath);
//         const fontData = await response.text();

//         Add font to VFS
//         doc.addFileToVFS('Roboto-Regular.ttf', fontData);

//         Register the font
//         doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
//     } catch (error) {
//         console.error('Error adding font:', error);
//     }

//     Set default font
//     doc.setFont('Roboto-Regular', 'normal');


//     Add title
//     doc.setFontSize(16);
//     doc.setFont(undefined, 'bold');
//     doc.text("SĄSKAITA FAKTŪRA", 105, 20, { align: "center" });

//     Add series number
//     doc.setFontSize(12);
//     doc.setFont(undefined, 'normal');
//     doc.text("Serija   Nr. _____", 105, 30, { align: "center" });

//     Add date
//     doc.text("Data: ____ m. __ mėn. __ d.", 105, 40, { align: "center" });

//     Draw borders around sections
//     Seller details
//     doc.rect(20, 50, 80, 30);
//     doc.setFontSize(10);
//     doc.text("Pardavėjo rekvizitai", 25, 55);
//     doc.text("Pavadinimas / vardas, pavardė", 25, 60);
//     doc.text("Įmonės kodas", 25, 65);
//     doc.text("Adresas", 25, 70);

//     Buyer details
//     doc.rect(110, 50, 80, 30);
//     doc.text("Pirkėjo rekvizitai", 115, 55);
//     doc.text("Pavadinimas / vardas, pavardė", 115, 60);
//     doc.text("Įmonės kodas / asmens kodas", 115, 65);
//     doc.text("Adresas", 115, 70);

//     Table headers with adjusted font size and text wrapping
//     doc.setFontSize(8);
//     doc.setFont(undefined, 'bold');
//     doc.rect(20, 90, 20, 10);
//     doc.text("Eil. Nr.", 22, 95);
//     doc.rect(40, 90, 60, 10);
//     doc.text("Prekės, turto ar", 42, 94);
//     doc.text("paslaugos pavadinimas", 42, 98);
//     doc.rect(100, 90, 20, 10);
//     doc.text("Mato vnt.", 102, 95);
//     doc.rect(120, 90, 20, 10);
//     doc.text("Kiekis", 122, 95);
//     doc.rect(140, 90, 30, 10);
//     doc.text("Kaina", 142, 95);
//     doc.rect(170, 90, 20, 10);
//     doc.text("Suma", 172, 95);

//     Table rows with separate cells
//     doc.setFont(undefined, 'normal');
//     for (let i = 0; i < 6; i++) {
//       let y = 100 + i * 10;
//       doc.rect(20, y, 20, 10); // Eil. Nr.
//       doc.rect(40, y, 60, 10); // Prekės
//       doc.rect(100, y, 20, 10); // Mato vnt.
//       doc.rect(120, y, 20, 10); // Kiekis
//       doc.rect(140, y, 30, 10); // Kaina
//       doc.rect(170, y, 20, 10); // Suma
//     }

//     Total section
//     let yTotal = 160; // Position for total section
//     doc.setFont(undefined, 'bold');
//     doc.rect(140, yTotal, 30, 10); // Kaina column cell
//     doc.text("Iš viso", 142, yTotal + 5);
//     doc.rect(170, yTotal, 20, 10); // Empty cell below Suma column

//     Additional information section
//     let yAdditional = yTotal + 20; // Adding space between sections
//     doc.setFont(undefined, 'normal');
//     doc.rect(20, yAdditional, 170, 20);
//     doc.text("Papildoma informacija", 25, yAdditional + 5);
    
//     Add lines for additional information
//     for (let i = 1; i <= 3; i++) {
//       doc.line(25, yAdditional + 5 + i * 5, 185, yAdditional + 5 + i * 5);
//     }

//     Signature fields
//     doc.setFontSize(10);
//     let ySignatures = yAdditional + 30;
//     doc.text("Sąskaitą išrašė: ___________________________________________", 20, ySignatures);
//     doc.text("Sąskaitą priėmė: ___________________________________________", 20, ySignatures + 10);
//     doc.text("(asmens parašušo dokumentas, pareigos, vardas ir pavardė, vardas ir pirmoji vardo raidė, pavardė, parašas)", 20, ySignatures + 20);

//     Save the PDF
//     doc.save("saskaita-faktura.pdf");
// });
