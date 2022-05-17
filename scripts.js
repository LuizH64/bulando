const AVAILABLE_MEDICINES = ['paracetamol', 'dipirona', 'amoxicilina', 'aspirina'];

const verifyMedicineList = () => {
    const HAS_MEDICINES = document.getElementById('medicines').getElementsByTagName('li').length ? true : false;
    document.getElementById('no-result-img-wrapper').style.display = HAS_MEDICINES ? "none" : "block";
    document.getElementById('result').style.display = HAS_MEDICINES ? "block" : "none";
};

const addMedicine = () => {
    const MAIN_INPUT = document.getElementById('main-input')

    // new_medicine está recebendo o valor do main-input com letras minúsculas
    let new_medicine = MAIN_INPUT.value.toLowerCase();

    // Verifica se new_medicine está na lista de available_medicines
    if (!AVAILABLE_MEDICINES.includes(new_medicine)) {
        document.getElementById('input-group').classList.add("invalid");
    } else {
        // Primeira letra do medicamento maiúscula
        new_medicine = new_medicine.charAt(0).toUpperCase() + new_medicine.slice(1);

        // Retira o invalid e limpa o input
        document.getElementById('input-group').classList.remove("invalid");
        MAIN_INPUT.value = '';

        // Criando ícone
        const I = document.createElement('i');
        I.classList.add('fa-solid', 'fa-xmark');

        // Criando botão
        const BUTTON = document.createElement('button');
        BUTTON.classList.add('delete-medicine-btn');
        BUTTON.onclick = () => { BUTTON.parentNode.remove(); verifyMedicineList() }
        BUTTON.setAttribute('title', `Remover ${new_medicine}`);
        BUTTON.appendChild(I);

        // Colocando elementos dentro de outros elementos
        const LI = document.createElement('li');
        LI.appendChild(document.createTextNode(new_medicine));
        LI.appendChild(BUTTON);

        // Colocando na DOM
        document.getElementById('medicines').appendChild(LI);
    }

    verifyMedicineList();
}

const onKeyPressHandler = event => {
    // Verifica se a tecla precionada foi ENTER
    if (event.keyCode === 13) addMedicine();
    else document.getElementById('input-group').classList.remove("invalid");
}