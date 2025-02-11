document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    
    if (!file) {
        console.log("❌ Файл не выбран.");
        return;
    }

    console.log(`✅ Файл выбран: ${file.name}, размер: ${file.size} байт`);

    const reader = new FileReader();

    reader.onloadstart = function() {
        console.log("⏳ Чтение файла...");
    };

    reader.onload = function() {
        console.log("✅ Файл загружен успешно!");

        const bytes = new Uint8Array(reader.result);
        let hexString = "";
        
        bytes.forEach((byte, index) => {
            hexString += byte.toString(16).padStart(2, "0") + " ";
            if ((index + 1) % 16 === 0) hexString += "\n"; // Форматирование строк
        });

        document.querySelector(".cube").textContent = hexString.substring(0, 5000); // Ограничиваем размер
        console.log("✅ HEX-код успешно выведен в .cube!");
    };

    reader.onerror = function() {
        console.log("❌ Ошибка при чтении файла.");
    };

    reader.readAsArrayBuffer(file);
});
