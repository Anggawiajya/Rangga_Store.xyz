document.getElementById('orderLink').addEventListener('click', function() {
      // Mengambil nilai dari formulir
      const item = 'Kfc Original';
      const quantity = document.getElementById("quantity").value;
      const price = 7000; // Harga per unit
      const name = document.getElementById("name").value;
    
      if (quantity && name) {
        const totalPrice = price * quantity;
    
        // Mendapatkan lokasi GPS pengguna
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationMessage = `Lokasi saya adalah: https://www.google.com/maps?q=${latitude},${longitude}`;
    
            // Menyiapkan pesan
            const message = `Hai, saya ingin memesan:\n\nNama barang: ${item}\nJumlah: ${quantity}\nHarga: Rp ${totalPrice}\nNama: ${name}\n\n${locationMessage}`;
    
            // URL API WhatsApp dengan nomor kamu
            const whatsappURL = `https://wa.me/6281261233552?text=${encodeURIComponent(message)}`;
    
            // Mengarahkan ke WhatsApp
            window.location.href = whatsappURL;
          },
          function(error) {
            console.error(error);
            alert('Gagal mendapatkan lokasi. Pastikan GPS diaktifkan dan browser memiliki izin untuk mengakses lokasi.');
          },
          {
            enableHighAccuracy: true
          });
      } else {
        alert('Mohon isi semua data yang diperlukan.');
      }
    });