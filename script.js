document.addEventListener('DOMContentLoaded', function() {
    const calculateTaxButton = document.getElementById('calculateTax');
    const taxModal = document.getElementById('taxModal');
    const taxResult = document.getElementById('taxResult');

    calculateTaxButton.addEventListener('click', function() {
        const grossIncome = parseFloat(document.getElementById('grossIncome').value) || 0;
        const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
        const deductions = parseFloat(document.getElementById('deductions').value) || 0;
        const age = document.getElementById('age').value;

         // Validate input
         if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions) || age === '') {
            alert('Please fill in all fields with valid numbers.');
            return;
        }

        let taxableIncome = grossIncome + extraIncome - deductions;
        let taxRate;

        if (taxableIncome <= 8) {
            taxRate = 0;
        } else {
            switch (age) {
                case '<40':
                    taxRate = 0.3;
                    break;
                case '≥40&<60':
                    taxRate = 0.4;
                    break;
                case '≥60':
                    taxRate = 0.1;
                    break;
                default:
                    taxRate = 0.3; // Default tax rate if age is not selected
            }
            taxableIncome -= 8;
        }

        const taxAmount = taxableIncome * taxRate;

        taxResult.textContent = `Tax Amount: ₹${taxAmount.toFixed(2)} Lakh`;
        taxModal.style.display = 'block';
    });

    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', function() {
        taxModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === taxModal) {
            taxModal.style.display = 'none';
        }
    });

    const inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(input => {
        input.addEventListener('input', function() {
            const value = input.value;
            if (isNaN(value)) {
                input.nextElementSibling.style.display = 'block';
            } else {
                input.nextElementSibling.style.display = 'none';
            }
        });
    });
});