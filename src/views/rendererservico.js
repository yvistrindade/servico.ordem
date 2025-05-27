// Buscar CEP
function buscarCEP() {
    let cep = document.getElementById('inputCEPService').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('inputAddressService').value = dados.logradouro
            document.getElementById('inputNeighborhoodService').value = dados.bairro
            document.getElementById('inputCityService').value = dados.localidade
            document.getElementById('inputUFService').value = dados.uf
        })
        .catch(error => console.log(error))
}

const foco = document.getElementById('searchService')
let arrayService = []

document.addEventListener('DOMContentLoaded', () => {
    btnUpdate.disabled = true
    btnDelete.disabled = true
    btnCreate.disabled = false
    foco.focus()
})

// Inputs do formulário de OS
let frmService = document.getElementById('formService')
let clientName = document.getElementById('inputNameService')
let cpf = document.getElementById('inputCPFService')
let phone = document.getElementById('inputPhoneService')
let email = document.getElementById('inputEmailService')
let equipment = document.getElementById('inputEquipment')
let model = document.getElementById('inputModel')
let problem = document.getElementById('inputProblem')
let serviceDate = document.getElementById('inputDateService')
let cep = document.getElementById('inputCEPService')
let address = document.getElementById('inputAddressService')
let number = document.getElementById('inputNumberService')
let complement = document.getElementById('inputComplementService')
let neighborhood = document.getElementById('inputNeighborhoodService')
let city = document.getElementById('inputCityService')
let uf = document.getElementById('inputUFService')
let idService = document.getElementById('inputIdService')

// Submit: criar ou atualizar OS
frmService.addEventListener('submit', async (event) => {
    event.preventDefault()

    const service = {
        idOS: idService.value,
        name: clientName.value,
        cpf: cpf.value,
        phone: phone.value,
        email: email.value,
        equipment: equipment.value,
        model: model.value,
        problem: problem.value,
        date: serviceDate.value,
        cep: cep.value,
        address: address.value,
        number: number.value,
        complement: complement.value,
        neighborhood: neighborhood.value,
        city: city.value,
        uf: uf.value
    }

    if (idService.value === "") {
        api.newservico(service)
    } else {
        api.updateservico(service)
    }
})

// Buscar ordem por nome ou CPF
function searchService() {
    let search = document.getElementById('searchService').value
    if (search === "") {
        api.validateSearch()
    } else {
        api.searchservico(search)
        api.renderservico((event, service) => {
            const data = JSON.parse(service)
            arrayService = data
            arrayService.forEach((s) => {
                idService.value = s._id
                clientName.value = s.nome
                cpf.value = s.cpf
                phone.value = s.fone
                email.value = s.email
                equipment.value = s.equipamento
                model.value = s.modelo
                problem.value = s.problema
                serviceDate.value = s.data
                cep.value = s.cep
                address.value = s.endereco
                number.value = s.numero
                complement.value = s.complemento
                neighborhood.value = s.bairro
                city.value = s.cidade
                uf.value = s.uf
                restaurarEnter()
                btnCreate.disabled = true
                btnUpdate.disabled = false
                btnDelete.disabled = false
            })
        })
    }
}

// Excluir OS
function removeService() {
    api.deleteService(idService.value)
}

// Reset
function resetForm() {
    location.reload()
}
api.resetForm(() => resetForm())
