$(document).ready(function() {
    //add new row to table
    $('#addRow').click(function() {
        var table = $('#productTable tbody');
        var rowCount = table.find('tr').length;
        var newRow = `
            <tr>
                <th scope="row">${rowCount + 1}</th>
                <td><input type="text" class="form-control"></td>
                <td><input type="text" class="form-control"></td>
                <td><input type="number" class="form-control quantity"></td>
                <td><input type="number" class="form-control price"></td>
                <td class="total-price"></td>
                <td><button type="button" class="btn btn-danger remove-row"><i class="bi bi-trash"></i></button></td>
            </tr>
        `;
        table.append(newRow);
    });
    //remove new row from table
    $(document).on('click', '.remove-row', function() {
        $(this).closest('tr').remove();
        updateRowNumbers(); // Update row numbers after removing
        calculateGrandTotal(); // Recalculate grand total after removing
    });
    // Update row number index
    function updateRowNumbers() {
        $('#productTable tbody tr').each(function(index) {
            $(this).find('th').first().text(index + 1);
        });
    }
    // Parse numbert with , to . 
    function parseNumber(value) {
        return parseFloat(value.replace(',', '.')) || 0;
    }
    // Calculate quantity and price to total
    function calculateRowTotal(row) {
        var quantity = parseNumber(row.find('.quantity').val());
        var price = parseNumber(row.find('.price').val());
        var total = quantity * price;
        row.find('.total-price').text(total.toFixed(2));
        return total;
    }
    // calculate all rows totals to one in the back as total of all totals
    function calculateGrandTotal() {
        var grandTotal = 0;
        $('#productTable tbody tr').each(function() {
            grandTotal += calculateRowTotal($(this));
        });
        $('#grand-total').text(grandTotal.toFixed(2));
    }
    // Insert grand total in to  table
    $('#productTable').on('input', '.quantity, .price', function() {
        calculateRowTotal($(this).closest('tr'));
        calculateGrandTotal();
    });

    //To pick data  from a calendar
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd"  // Set desired date format
    });
    // show  or hide additional information field
    $('#additionalInformationBTN').on('click', function(){
        if($('#additionalInfo').is(":hidden")){
            $('#additionalInfo').show(); }
        else{$('#additionalInfo').hide();}
    });
    // Uppercase letters only for seriesLetters
    $('#seriesLetters').on('input', function() {
        this.value = this.value.toUpperCase().replace(/[^A-Z]/g, ''); // Replace non-uppercase letters
    });

    // 3 numbers only for seriesNumber
    $('#seriesNumber').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, ''); // Replace non-digits
        if (this.value.length > 3) {
            this.value = this.value.slice(0, 3); // Limit to 3 characters
        }
    });
});