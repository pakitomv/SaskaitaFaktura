//create jsPDF file
const { jsPDF } = window.jspdf;

let dataURL = null;

$('#imageInput').on('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        convertImageToDataURL(file);
    }
});

$('#deleteImageBtn').on('click', function(event) {
    event.preventDefault();
    deleteImage();
});

// Function to convert image to data URL
function convertImageToDataURL(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        dataURL = e.target.result;
        displayDataURL(dataURL); // Display data URL in textarea
        displayImage(dataURL); // Display image preview
    };
    reader.readAsDataURL(file);
}

// Function to display data URL in textarea
function displayDataURL(dataURL) {
    $('#dataURLResult').val(dataURL); // Assuming there's a textarea with id 'dataURLResult'
}

// Function to display image preview
function displayImage(dataURL) {
    const imgContainer = $('#imageContainer');
    const img = $('#logoPreview');
    img.attr('src', dataURL);
    imgContainer.show();
}

// Function to delete image
function deleteImage() {
    const imgContainer = $('#imageContainer');
    const img = $('#logoPreview');
    const inputFile = $('#imageInput');

    img.attr('src', '#');
    imgContainer.hide();
    inputFile.val(''); // Clear the file input
    dataURL = null; // Clear the data URL
}

//genereate and create PDF file
$('#generate-pdf').click(function() {

    const doc = new jsPDF();

    const sellersName = $("#inputSelersName").val();
    const sellersRegistarationNr = $("#inpuSelersRegistrationNr").val();
    const sellersAdress = $("#inputSelersAddress").val();
    const sellersCode = $("#inputSelersCode").val();
    const sellersAk = $("#inputSelersAk").val();
    const sellersBank = $('#inputSelersAs').val() + ' ' + $('#inputState').val();
    const buyersName = $("#inpuBuyersName").val();
    const BuyersAdress = $("#inputAddress").val();
    const BuyersCode = $("#inputBuyersCode").val();
    const BuyersPMVCode = $("#inputBuyersPVMcode").val();
    const sellerSignature = $('#inputSelerInvoiceSigne').val();
    const buyersSignature = $('#inputBuyersInvoiceSigne').val();
    const seriLet = $('#seriesLetters').val();
    const seriNr = $('#seriesNumber').val();
    const date = $('#datepicker').val();
    const additionalInformation = $('#additionalInformation').val();
    
    //For custom fonts and LT simbols
    doc.addFont("Fonts/HelveticaLT.ttf", "HelveticaLT", "normal");
    doc.addFont("Fonts/HelveticaLT.ttf", "HelveticaLT", "bold");
    doc.setFont("HelveticaLT");

            if(dataURL){
                    doc.addImage(dataURL, 'JPEG', 15, 15, 25, 25); // Adjust position as needed
                }               
            
    //Add title
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text("SĄSKAITA FAKTŪRA", 105, 20, { align: "center" });

    //Add series number
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text("Serija: " + seriLet + " Nr.: " + seriNr, 105, 30, { align: "center" });

    //Add date
    doc.text("Data: " + date, 105, 40, { align: "center" });

    //Draw borders around sections
    //Seller details
    doc.rect(20, 50, 80, 50);
    doc.setFontSize(8);
    doc.text("Pardavėjo rekvizitai", 25, 55);
    doc.text("Pavadinimas / vardas, pavardė: " + sellersName , 25, 60);
    doc.text("Įreg. Nr: " + sellersRegistarationNr, 25, 65);
    doc.text("Adresas: " + sellersAdress, 25, 70);
    doc.text("Kodas: " + sellersCode, 25, 75);
    doc.text("A/k: " + sellersAk, 25, 80);
    doc.text("A/s: " + sellersBank, 25, 85);

    //Buyer details
    doc.rect(110, 50, 80, 50);
    doc.text("Pirkėjo rekvizitai", 115, 55);
    doc.text("Pavadinimas / vardas, pavardė: " + buyersName, 115, 60);
    doc.text("Įmonės kodas / asmens kodas: " + BuyersCode, 115, 65);
    doc.text("Įmonės PVM kodas: " + BuyersPMVCode, 115, 70);
    doc.text("Adresas: " + BuyersAdress , 115, 75);

    //Table headers with adjusted font size and text wrapping
    doc.setFontSize(8);
    doc.setFont(undefined, 'bold');
    const tableStartY = 110; // Adjusted starting y-coordinate for the table
    doc.rect(20, tableStartY, 20, 10);
    doc.text("Eil. Nr.", 22, tableStartY + 5);
    doc.rect(40, tableStartY, 60, 10);
    doc.text("Prekės, turto ar", 42, tableStartY + 4);
    doc.text("paslaugos pavadinimas", 42, tableStartY + 8);
    doc.rect(100, tableStartY, 20, 10);
    doc.text("Mato vnt.", 102, tableStartY + 5);
    doc.rect(120, tableStartY, 20, 10);
    doc.text("Kiekis", 122, tableStartY + 5);
    doc.rect(140, tableStartY, 30, 10);
    doc.text("Kaina", 142, tableStartY + 5);
    doc.rect(170, tableStartY, 20, 10);
    doc.text("Suma", 172, tableStartY + 5);

    //Table rows with separate cells
    doc.setFont(undefined, 'normal');
    var rowCount = $('#productTable tbody tr').length;
        $('#productTable tbody tr').each(function(i, row) {
            let y = tableStartY + 10 + i * 10;
            doc.rect(20, y, 20, 10); // Eil. Nr.
            doc.text((i + 1).toString(), 22, y + 5);
            doc.rect(40, y, 60, 10); // Prekės
            doc.text($(row).find('td:eq(0) input').val(), 42, y + 5);
            doc.rect(100, y, 20, 10); // Mato vnt.
            doc.text($(row).find('td:eq(1) input').val(), 102, y + 5);
            doc.rect(120, y, 20, 10); // Kiekis
            doc.text($(row).find('td:eq(2) input').val(), 122, y + 5);
            doc.rect(140, y, 30, 10); // Kaina
            doc.text($(row).find('td:eq(3) input').val(), 142, y + 5);
            doc.rect(170, y, 20, 10); // Suma
            doc.text($(row).find('td:eq(4) ').text(), 172, y + 5);
        });

    //Total section
    let grandTotal = parseFloat($('#grand-total').text().replace(',', '.')) || 0;
    // Add grand total to PDF
    let yTotal = tableStartY + 10 + rowCount * 10; // Adjusted position for total section
    doc.setFont(undefined, 'bold');
    doc.rect(140, yTotal, 30, 10); // Kaina column cell
    doc.text("Iš viso", 142, yTotal + 5);
    doc.rect(170, yTotal, 20, 10); // Cell for grand total
    doc.text(grandTotal.toFixed(2).replace('.', ','), 172, yTotal + 5); // Display total with two decimal places

    
    let rectHeight = 0;
    //Add lines for additional information
    if($('#additionalInfo').is(':visible')){
        let yAdditional = yTotal + 20; // Adding space between sections

        // Calculate the height needed for the additional information
        const lines = doc.splitTextToSize( additionalInformation, 165);
        rectHeight = 10 + (lines.length * 5); // Calculate the height based on the number of lines

        // Add rectangle for additional information
        doc.setFont(undefined, 'normal');
        doc.rect(20, yAdditional, 170, rectHeight);

        // Add "Papildoma informacija" and the actual information
        doc.text("Papildoma informacija:", 25, yAdditional + 5);
        doc.text(lines, 25, yAdditional + 10);
    }

    //Signature fields
    doc.setFontSize(10);
    let ySignatures = yTotal + 30 + rectHeight; // Adjust position for signature fields
    doc.text("Sąskaitą išrašė: " + sellerSignature, 20, ySignatures);
    doc.text("Sąskaitą priėmė: " + buyersSignature, 20, ySignatures + 10);

    //Save the PDF
    doc.save("saskaita-faktura.pdf");
});