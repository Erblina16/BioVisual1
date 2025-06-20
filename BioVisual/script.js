  
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let emri = document.getElementById("emri").value.trim();
    let email = document.getElementById("email").value.trim();
    let mesazhi = document.getElementById("mesazhi").value.trim();

    
    if (emri === "" || email === "" || mesazhi === "") {
      alert("Ju lutem plotësoni të gjitha fushat!");
      return;
    }

    
    let gjatesiaMesazhit = mesazhi.length;

    
    for (let i = 0; i < emri.length; i++) {
      console.log("Shkronja " + (i + 1) + ": " + emri[i]);
    }

    
    alert("Faleminderit, " + emri + "! Mesazhi juaj me " + gjatesiaMesazhit + " shkronja u dërgua me sukses!");

    
    document.querySelector("form").reset();
  });

