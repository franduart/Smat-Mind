function formContato() {
    const form = document.getElementById('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const tel = document.getElementById('tel').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        const message = document.getElementById('message')

        if (!nome || !email || !tel || !mensagem ) {
           return;
        }

            // Enviar para Google Apps Script
            const data = { nome, email, tel, mensagem};
            await fetch('https://script.google.com/macros/s/AKfycbyIxe9Jdx8UykzfrA_5mlFAcjNe7iTLfzwfef524xmCqeby5qNF-euQUJP6o6-1Vaa4/exec', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                mode: 'no-cors'
            });

            // Feedback para o usuário
            message.textContent = "Formulário enviado com sucesso!";
            message.style.color = "green";
            form.reset();

          
            
        
    })
   
}

formContato();
