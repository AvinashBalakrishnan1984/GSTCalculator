document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn') as HTMLButtonElement | null;
    const clearBtn = document.getElementById('clearBtn') as HTMLButtonElement | null;
    const amountInput = document.getElementById('amount') as HTMLInputElement | null;

    if (!calculateBtn || !clearBtn || !amountInput) return;

    calculateBtn.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const selected = document.querySelector<HTMLInputElement>('input[name="gst_rate"]:checked');

        if (isNaN(amount) || !selected) {
            alert('Please enter a valid amount and select a GST rate.');
            return;
        }

        const gstRate = parseFloat(selected.value);
        const gstAmount = (amount * gstRate) / 100;
        const cgst = gstAmount / 2;
        const sgst = gstAmount / 2;
        const totalAmount = amount + gstAmount;

        const baseEl = document.getElementById('baseAmount');
        const cgstEl = document.getElementById('cgstAmount');
        const sgstEl = document.getElementById('sgstAmount');
        const totalGstEl = document.getElementById('totalGst');
        const totalAmountEl = document.getElementById('totalAmount');

        if (baseEl) baseEl.textContent = `₹ ${amount.toFixed(2)}`;
        if (cgstEl) cgstEl.textContent = `₹ ${cgst.toFixed(2)}`;
        if (sgstEl) sgstEl.textContent = `₹ ${sgst.toFixed(2)}`;
        if (totalGstEl) totalGstEl.textContent = `₹ ${gstAmount.toFixed(2)}`;
        if (totalAmountEl) totalAmountEl.textContent = `₹ ${totalAmount.toFixed(2)}`;
    });

    clearBtn.addEventListener('click', () => {
        amountInput.value = '';
        ['baseAmount','cgstAmount','sgstAmount','totalGst','totalAmount'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '';
        });
    });
});
