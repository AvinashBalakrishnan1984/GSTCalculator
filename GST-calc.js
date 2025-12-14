document.addEventListener('DOMContentLoaded', function () {
    var calculateBtn = document.getElementById('calculateBtn');
    var clearBtn = document.getElementById('clearBtn');
    var amountInput = document.getElementById('amount');
    if (!calculateBtn || !clearBtn || !amountInput)
        return;
    calculateBtn.addEventListener('click', function () {
        var amount = parseFloat(amountInput.value);
        var selected = document.querySelector('input[name="gst_rate"]:checked');
        if (isNaN(amount) || !selected) {
            alert('Please enter a valid amount and select a GST rate.');
            return;
        }
        var gstRate = parseFloat(selected.value);
        var gstAmount = (amount * gstRate) / 100;
        var cgst = gstAmount / 2;
        var sgst = gstAmount / 2;
        var totalAmount = amount + gstAmount;
        var baseEl = document.getElementById('baseAmount');
        var cgstEl = document.getElementById('cgstAmount');
        var sgstEl = document.getElementById('sgstAmount');
        var totalGstEl = document.getElementById('totalGst');
        var totalAmountEl = document.getElementById('totalAmount');
        if (baseEl)
            baseEl.textContent = "\u20B9 ".concat(amount.toFixed(2));
        if (cgstEl)
            cgstEl.textContent = "\u20B9 ".concat(cgst.toFixed(2));
        if (sgstEl)
            sgstEl.textContent = "\u20B9 ".concat(sgst.toFixed(2));
        if (totalGstEl)
            totalGstEl.textContent = "\u20B9 ".concat(gstAmount.toFixed(2));
        if (totalAmountEl)
            totalAmountEl.textContent = "\u20B9 ".concat(totalAmount.toFixed(2));
    });
    clearBtn.addEventListener('click', function () {
        amountInput.value = '';
        ['baseAmount', 'cgstAmount', 'sgstAmount', 'totalGst', 'totalAmount'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el)
                el.textContent = '';
        });
    });
});
