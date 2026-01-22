const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://script.google.com/macros/s/AKfycbx_vHq-MHyMulpfY7sj19G6-nEX6s5Y5oFyF_hRYA6YhSTW-KmBFKtizr5J7zFPIdS7/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...formData,
            code: formData.code || "FREE"
        })
    });

    const result = await response.json();

    if (result.success) {
        alert("Gracias 💛 Tu respuesta fue registrada");
        setFormData({
            name: '',
            email: '',
            phone: '',
            attendance: 'yes',
            companion: '',
            diet: '',
            message: ''
        });
    } else {
        alert("Error al enviar RSVP");
    }
};
