$(document).ready(function () {

    var displayText = $('#displayText');
    var operation = '';
    var hasFirstNumEntered = false;
    var hasSecondNumEntered = false;
    var hasSelectedOperator = false;
    var totalValue = 0;
    // Add click event handlers to each button
    $('#clearBtn').click(function () {
        displayText.val('');
        operation = '';
        hasFirstNumEntered = false;
        hasSecondNumEntered = false;
        hasSelectedOperator = false;
        totalValue = 0;
    });

    $('#signBtn').click(function () {
        alert("This button is not working");
    });

    $('#percentageBtn').click(function () {
        alert('This button is not working');
    });

    $('#divideBtn').click(function () {
        operation = 'divide';
        hasSelectedOperator = true;
        hasFirstNumEntered = true;

        if (hasSecondNumEntered) {
            hasSecondNumEntered = false;
        }
        totalValue = displayText.val();
    });

    $('#multiplyBtn').click(function () {
        operation = 'multiply';
        hasSelectedOperator = true;
        hasFirstNumEntered = true;
        if (hasSecondNumEntered) {
            hasSecondNumEntered = false;
        }
        totalValue = displayText.val();
    });

    $('#subtractBtn').click(function () {
        operation = 'subtract';
        hasSelectedOperator = true;
        hasFirstNumEntered = true;
        if (hasSecondNumEntered) {
            hasSecondNumEntered = false;
        }

        totalValue = displayText.val();
    });

    $('#addBtn').click(function () {
        operation = 'add';
        hasSelectedOperator = true;
        hasFirstNumEntered = true;
        if (hasSecondNumEntered) {
            hasSecondNumEntered = false;
        }

        totalValue = displayText.val();
    });

    $('#decimalBtn').click(function () {
        displayText.innerHTML += '.';
    });

    $('#zeroBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 0);
    });

    $('#oneBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }

        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 1);
    });

    $('#twoBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 2);
    });

    $('#threeBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 3);
    });

    $('#fourBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 4);
    });

    $('#fiveBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 5);        
    });

    $('#sixBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 6);
    });

    $('#sevenBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 7);
    });

    $('#eightBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 8);
    });

    $('#nineBtn').click(function () {
        if (hasSelectedOperator && !hasSecondNumEntered) {
            displayText.val('');
        }
        
        if (hasFirstNumEntered) {
            hasSecondNumEntered = true;
        }
        
        var val = displayText.val() !== '' ? displayText.val() : 0;
        displayText.val(val += 9);
    });

    $('#equalBtn').click(function () {

        console.log('Total value before operation: ', totalValue);
        console.log('Display text: ', displayText.val());

        switch(operation) {
            case 'add':
                totalValue = parseFloat(totalValue) + parseFloat(displayText.val());
                break;
            case 'subtract':
                totalValue = parseFloat(totalValue) - parseFloat(displayText.val());
                break;
            case 'multiply':
                totalValue = parseFloat(totalvalue) * parseFloat(displayText.val());
                break;
            case 'divide':
                totalValue = parseFloat(totalValue) / parseFloat(displayText.val());
                break;
        }
        console.log('Total value after operation: ', totalValue);
        displayText.val(totalValue);
    });
});