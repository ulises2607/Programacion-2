document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const mensajeInput = document.getElementById("mensaje-input");
    const enviarBtn = document.getElementById("btn-enviar");

    enviarBtn.addEventListener("click", () => {
        const mensaje = mensajeInput.value;
        if (mensaje.trim() !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("mensaje");
            messageElement.textContent = mensaje;
            chatBox.appendChild(messageElement);
            mensajeInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });

    mensajeInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            enviarBtn.click();
        }
    });
});