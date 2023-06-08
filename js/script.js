

const userNameElement = document.getElementById("userName");
const userName = prompt("Masukkan nama Anda:");
userNameElement.textContent = userName;


function submitForm(event) {
    event.preventDefault(); // Mencegah form submit secara default
  
    // Mendapatkan nilai dari input
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value;
  
    // Validasi form
    if (name.trim() === "" || birthdate === "" || !gender || message.trim() === "") {
      alert("Harap isi semua bidang!"); // Menampilkan pesan kesalahan jika ada bidang yang kosong
      return;
    }
  
    // Validasi tanggal lahir
    const currentDate = new Date();
    const selectedDate = new Date(birthdate);
    if (selectedDate >= currentDate) {
      alert("Tanggal lahir tidak valid!"); // Menampilkan pesan kesalahan jika tanggal lahir tidak valid
      return;
    }
  
    // Menampilkan data yang dikirim
    document.getElementById("submittedName").textContent = name;
    document.getElementById("submittedBirthdate").textContent = birthdate;
    document.getElementById("submittedGender").textContent = gender.value;
    document.getElementById("submittedMessage").textContent = message;
  
    // Menampilkan div submittedData
    document.getElementById("submittedData").style.display = "block";

  
    // Mengosongkan form setelah data dikirim
    document.getElementById("contactForm").reset();

    
  }
  
  




















































