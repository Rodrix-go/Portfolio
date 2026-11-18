// Cada álbum aceita qualquer número de fotos. Use caminhos locais e textos alternativos descritivos.
// Exemplo: { src: "fotos/fuzzy/esteira.webp", alt: "Esteira e manipulador XYZ do projeto Fuzzy" }
const fotos = {
  "projetista-eletronico": [
    { src: "fotos/projetista-eletronico/1.webp", alt: "Conjunto eletromecânico com cabos e guias" },
    { src: "fotos/projetista-eletronico/2.webp", alt: "Montagem de teste sob iluminação violeta" },
    { src: "fotos/projetista-eletronico/3.webp", alt: "Placa de circuito impresso azul vista de perto" },
  ],
  "firmware": [
    { src: "fotos/firmware/1.webp", alt: "Tela de teste do sistema na bancada" },
    { src: "fotos/firmware/2.webp", alt: "Protótipo de dispositivo vestível no pulso" },
    { src: "fotos/firmware/3.webp", alt: "Placa eletrônica do dispositivo vestível" },
  ],
  "instrutor": [
    { src: "fotos/instrutor/1.webp", alt: "Turma em atividade de programação e robótica" },
    { src: "fotos/instrutor/2.webp", alt: "Registro de uma turma em aula de robótica" },
    { src: "fotos/instrutor/3.webp", alt: "Aluno montando um projeto em aula de robótica" },
  ],
  "competidor": [
    { src: "fotos/competidor/1.webp", alt: "Participantes trabalhando nas bancadas da competição de eletrônica" },
    { src: "fotos/competidor/2.webp", alt: "Placas eletrônicas organizadas na bancada" },
    { src: "fotos/competidor/3.webp", alt: "Bancada de eletrônica com ferramentas e componentes" },
  ],
  "fuzzy": [
    { src: "fotos/fuzzy/1.webp", alt: "Equipe ao lado da esteira e do manipulador" },
    { src: "fotos/fuzzy/2.webp", alt: "Equipe trabalhando na montagem do manipulador" },
    { src: "fotos/fuzzy/3.webp", alt: "Mosaico de testes de visão computacional do Fuzzy" },
  ],
  "fuzzytech": [
    { src: "fotos/fuzzytech/1.webp", alt: "Tela de entrada da plataforma FuzzyTech" },
    { src: "fotos/fuzzytech/2.webp", alt: "Interface da plataforma FuzzyTech" },
    { src: "fotos/fuzzytech/3.webp", alt: "Tela da plataforma com os treinamentos em cartões" },
  ],
  "skintech": [
    { src: "fotos/skintech/1.webp", alt: "Estrutura do totem SkinTech durante a montagem" },
    { src: "fotos/skintech/2.webp", alt: "Equipe do SkinTech na apresentação do projeto" },
    { src: "fotos/skintech/3.webp", alt: "Tela do totem SkinTech em demonstração" },
  ],
  "garra-robotica": [
    { src: "fotos/garra-robotica/1.webp", alt: "Detalhe da base vermelha do braço robótico" },
    { src: "fotos/garra-robotica/2.webp", alt: "Garra que a equipe adaptou para o braço robótico" },
    { src: "fotos/garra-robotica/3.webp", alt: "Braço robótico vermelho na bancada do SENAI" },
  ],
  "fisioterapia": [
    { src: "fotos/fisioterapia/1.webp", alt: "Demonstração do protótipo de fisioterapia com o computador" },
    { src: "fotos/fisioterapia/2.webp", alt: "Equipe com o protótipo de fisioterapia" },
    { src: "fotos/fisioterapia/3.webp", alt: "Teste do protótipo de fisioterapia na bancada" },
  ],
};

for (const galeria of document.querySelectorAll("[data-album]")) {
  const album = fotos[galeria.dataset.album] ?? [];

  for (const foto of album) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = foto.src;

    const imagem = document.createElement("img");
    imagem.src = foto.src;
    imagem.alt = foto.alt;
    imagem.loading = "lazy";
    imagem.decoding = "async";

    link.append(imagem);
    item.append(link);
    galeria.append(item);
  }
}
