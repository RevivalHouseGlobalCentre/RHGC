// Handle form submissions
$(document).ready(function() {
    $('.payment-form').on('submit', function(e) {
        e.preventDefault();
        alert("Payment system will be enabled soon! Thank you for your support.");
    });
});

// Copy account number functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Give page initialized');

    // Enhanced copy functionality with fallback
    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.log('Using fallback copy method');
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                return true;
            } catch (err) {
                console.error('Fallback copy failed:', err);
                return false;
            } finally {
                document.body.removeChild(textArea);
            }
        }
    };

    // Attach click handlers to all copy buttons
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', async function() {
            const accountNumber = this.getAttribute('data-account');
            const successElement = this.nextElementSibling;
            
            const success = await copyToClipboard(accountNumber);
            
            if (success) {
                // Visual feedback
                this.innerHTML = '<i>✓</i> Copied!';
                successElement.style.display = 'inline';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.innerHTML = '<i>📋</i> Copy Account Number';
                    successElement.style.display = 'none';
                }, 2000);
            } else {
                alert('Failed to copy. Please copy manually: ' + accountNumber);
            }
        });
    });
});