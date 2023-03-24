const municipalities = {
  andalucia: ["Sevilla", "Málaga", "Cádiz", "Huelva", "Jaén", "Granada", "Almería", "Córdoba"],
  aragon: ["Zaragoza", "Huesca", "Teruel"],
  asturias: ["Oviedo", "Gijón", "Avilés"]
  // add more municipalities for other provinces
};

const districts = {
  Sevilla: ["Distrito Norte", "Distrito Este-Alcosa-Torreblanca", "Distrito Macarena", "Distrito Sur", "Distrito Casco Antiguo", "Distrito Triana", "Distrito Los Remedios"],
  Málaga: ["Distrito Centro", "Distrito Este", "Distrito Ciudad Jardín", "Distrito Bailén-Miraflores", "Distrito Palma-Palmilla", "Distrito Cruz de Humilladero", "Distrito Carretera de Cádiz"],
  // add more districts for other municipalities
};

function populateMunicipalities() {
  const province = document.getElementById("provinces").value;
  const municipalitiesDropdown = document.getElementById("municipalities");
  municipalitiesDropdown.innerHTML = "<option value=''>--Select Municipality--</option>";
  if (province !== "") {
    const provinceMunicipalities = municipalities[province];
    for (let i = 0; i < provinceMunicipalities.length; i++) {
      const option = document.createElement("option");
      option.value = provinceMunicipalities[i];
      option.text = provinceMunicipalities[i];
      municipalitiesDropdown.add(option);
    }
  }
}

function populateDistricts() {
  const municipality = document.getElementById("municipalities").value;
  const districtsDropdown = document.getElementById("districts");
  districtsDropdown.innerHTML = "<option value=''>--Select District--</option>";
  if (municipality !== "") {
    const municipalityDistricts = districts[municipality];
    for (let i = 0; i < municipalityDistricts.length; i++) {
      const option = document.createElement("option");
      option.value = municipalityDistricts[i];
      option.text = municipalityDistricts[i];
      districtsDropdown.add(option);
    }
  }
}