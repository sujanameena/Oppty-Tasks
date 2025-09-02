let balance = 500;

    function deposit() {
      let amt = parseFloat(document.getElementById("amount").value);
      if (isNaN(amt) || amt <= 0) {
        showMessage("Enter a valid deposit amount!", "low-balance");
        return;
      }
      balance += amt;
      showMessage(`Deposited ₹${amt}. Current Balance: ₹${balance}`, "success");
    }

    function withdraw() {
      let amt = parseFloat(document.getElementById("amount").value);
      if (isNaN(amt) || amt <= 0) {
        showMessage("Enter a valid withdrawal amount!", "low-balance");
        return;
      }
      if (amt > balance) {
        showMessage("Withdrawal failed! Insufficient balance.", "low-balance");
      } else {
        balance -= amt;
        showMessage(`Withdrawn ₹${amt}. Current Balance: ₹${balance}`, "info");
        if (balance < 100) {
          showMessage(`Warning: Low Balance! (₹${balance})`, "low-balance");
        }
      }
    }

    function checkBalance() {
      if (balance < 100 && balance > 0) {
        showMessage(`Balance: ₹${balance} (Low Balance)`, "low-balance");
      } else {
        showMessage(`Current Balance: ₹${balance}`, "info");
      }
    }

    function showMessage(msg, type) {
      let output = document.getElementById("output");
      output.className = `output ${type}`;
      output.textContent = msg;
    }