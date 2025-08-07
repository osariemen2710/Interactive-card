document.getElementById('continueBtn').addEventListener('click', function () {
  document.getElementById('thankYouMessage').classList.add('hidden');
  document.getElementById('cardForm').classList.remove('hidden');
  document.getElementById('cardForm').reset();

  // Reset preview card
  document.getElementById('cardholderName').textContent = 'JANE APPLESEED';
  document.getElementById('cardNumber').textContent = '0000 0000 0000 0000';
  document.getElementById('cardExpiry').textContent = '00/00';
  document.getElementById('cardCVC').textContent = '000';
});

        // Format card number input
        document.getElementById('cardNumberInput').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            if (formattedValue.length <= 19) {
                e.target.value = formattedValue;
                
                // Update card display
                document.getElementById('cardNumber').textContent = 
                    formattedValue.padEnd(19, '0').replace(/(.{4})/g, '$1 ').trim() || '0000 0000 0000 0000';
            }
        });

        document.getElementById('cvc').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    document.getElementById('cardCVC').textContent = e.target.value.padEnd(3, '0') || '000';
});
        // Update cardholder name on card
        document.getElementById('cardholderNameInput').addEventListener('input', function(e) {
            const name = e.target.value.toUpperCase() || 'JANE APPLESEED';
            document.getElementById('cardholderName').textContent = name;
        });

        // Format and update expiry month
        document.getElementById('expMonth').addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^0-9]/g, '');
            if (value.length >= 2) {
                let month = parseInt(value.substring(0, 2));
                if (month > 12) month = 12;
                if (month < 1 && value.length === 2) month = 1;
                e.target.value = month.toString().padStart(2, '0');
            } else {
                e.target.value = value;
            }
            updateCardExpiry();
        });

        // Format and update expiry year
        document.getElementById('expYear').addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^0-9]/g, '');
            e.target.value = value;
            updateCardExpiry();
        });

        // Format CVC input
        document.getElementById('cvc').addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });

        function updateCardExpiry() {
            const month = document.getElementById('expMonth').value.padStart(2, '0');
            const year = document.getElementById('expYear').value.padStart(2, '0');
            document.getElementById('cardExpiry').textContent = `${month}/${year}`;
        }

        // Form submission
   document.getElementById('cardForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear all previous errors
  const inputs = this.querySelectorAll('.form-input');
  inputs.forEach(clearError);

  let isValid = true;

  // --- Field validation ---

  // Cardholder Name
  const cardholderNameInput = document.getElementById('cardholderNameInput');
  if (!cardholderNameInput.value) {
    showError(cardholderNameInput, "Cardholder name is required");
    isValid = false;
  }

  // Card Number
  const cardNumberInput = document.getElementById('cardNumberInput');
  if (!cardNumberInput.value) {
    showError(cardNumberInput, "Card number is required");
    isValid = false;
  } else if (cardNumberInput.value.replace(/\s/g, '').length < 16) {
    showError(cardNumberInput, "Card number must be 16 digits");
    isValid = false;
  }

  // Expiry Date
  const expMonthInput = document.getElementById('expMonth');
  const expYearInput = document.getElementById('expYear');
  if (!expMonthInput.value || !expYearInput.value) {
    // Note: You might want to show a single error message for the date fields
    showError(expMonthInput, "Expiry date is required");
    isValid = false;
  }

  // CVC
  const cvcInput = document.getElementById('cvc');
  if (!cvcInput.value) {
    showError(cvcInput, "CVC is required");
    isValid = false;
  } else if (cvcInput.value.length < 3) {
    showError(cvcInput, "CVC must be 3 digits");
    isValid = false;
  }


  if (isValid) {
    // All validations passed — show thank you message
    document.getElementById('cardForm').classList.add('hidden');
    document.getElementById('thankYouMessage').classList.remove('hidden');
  }
});

        // Add some interactive card animations
        document.querySelector('.card').addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotateY(5deg)';
        });

        document.querySelector('.card').addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0)';
        });
       document.getElementById('continueBtn').addEventListener('click', function () {
  document.getElementById('thankYouMessage').classList.add('hidden');
  document.getElementById('cardForm').classList.remove('hidden');
  document.getElementById('cardForm').reset();

  // Reset preview card
  document.getElementById('cardholderName').textContent = 'JANE APPLESEED';
  document.getElementById('cardNumber').textContent = '0000 0000 0000 0000';
  document.getElementById('cardExpiry').textContent = '00/00';
  document.getElementById('cardCVC').textContent = '000';
});
function showError(inputElement, message) {
  const formGroup = inputElement.parentElement;
  const errorElement = formGroup.querySelector('.error-message');

  if (errorElement) {
    errorElement.innerText = message;
    errorElement.style.display = 'block';
  }
  inputElement.classList.add('error');
}

function clearError(inputElement) {
  const formGroup = inputElement.parentElement;
  const errorElement = formGroup.querySelector('.error-message');

  if (errorElement) {
    errorElement.innerText = '';
    errorElement.style.display = 'none';
  }
  inputElement.classList.remove('error');
}

