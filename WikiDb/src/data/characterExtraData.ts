export interface CharacterExtraData {
  height: number; 
  weight: number; 
  transformations: string[];
  techniques: string[];
  family: string[];
}

export const characterExtraData: Record<string, CharacterExtraData> = {
  "Goku": {
    height: 175,
    weight: 62,
    transformations: ["Super Saiyajin (SSJ)", "Super Saiyajin 2 (SSJ2)", "Super Saiyajin 3 (SSJ3)", "Super Saiyajin God (SSG)"],
    techniques: ["Kamehameha", "Genki Dama", "Teletransporte", "Kaioken"],
    family: ["Bardock (pai)", "Gine (mãe)", "Raditz (irmão)", "Chi-Chi (esposa)", "Gohan (filho)", "Goten (filho)"]
  },
  "Vegeta": {
    height: 164,
    weight: 56,
    transformations: ["Super Saiyajin (SSJ)", "Super Saiyajin 2 (SSJ2)", "Super Saiyajin God (SSG)", "Super Saiyajin Blue Evolution"],
    techniques: ["Galick Gun", "Final Flash", "Big Bang Attack", "Explosão Final"],
    family: ["Rei Vegeta (pai)", "Bulma (esposa)", "Trunks (filho)", "Bra (filha)"]
  },

  "Piccolo": {
    height: 226,
    weight: 79,
    transformations: ["Forma Gigante", "Fusão com Nail", "Fusão com Kami", "Orange Piccolo"],
    techniques: ["Makankosappo", "Regeneração", "Makkyo Ho", "Multiplicação"],
    family: ["Piccolo Daimaoh (criador)", "Gohan (discípulo)"]
  },

  "Bulma": {
    height: 165,
    weight: 48,
    transformations: [],
    techniques: ["Invenção de Tecnologia", "Radar do Dragão", "Criação de Cápsulas"],
    family: ["Dr. Brief (pai)", "Panchy (mãe)", "Tights (irmã)", "Vegeta (esposo)", "Trunks (filho)", "Bra (filha)"]
  },

  "Freezer": {
    height: 158,
    weight: 70,
    transformations: ["Segunda Forma", "Terceira Forma", "Forma Final", "Golden Freezer"],
    techniques: ["Death Beam", "Supernova", "Death Ball", "Prisão da Morte"],
    family: ["King Cold (pai)", "Cooler (irmão)"]
  },

  "Zarbon": {
    height: 184,
    weight: 82,
    transformations: ["Forma Base", "Transformação Monstruosa"],
    techniques: ["Elegant Blaster", "Shooting Star Arrow", "Zarbon Breaker"],
    family: []
  },

  "Dodoria": {
    height: 195,
    weight: 98,
    transformations: [],
    techniques: ["Maximum Buster", "Dodoria Head Ramming", "Explosion Wave"],
    family: []
  },

  "Ginyu": {
    height: 188,
    weight: 75,
    transformations: ["Corpo de Goku (troca)"],
    techniques: ["Troca de Corpos", "Milky Cannon", "Galaxy Dynamite"],
    family: ["Líder Forças Especiais Ginyu"]
  },

  "Celula": {
    height: 213,
    weight: 85,
    transformations: ["Semi-Perfeito", "Perfeito", "Super Perfeito"],
    techniques: ["Kamehameha", "Regeneração", "Absorção de Energia", "Death Beam"],
    family: ["Dr. Gero (criador)"]
  },
  "Gohan": {
    height: 176,
    weight: 61,
    transformations: ["Super Saiyajin (SSJ)", "Super Saiyajin 2 (SSJ2)", "Místico/Ultimate", "Beast Gohan"],
    techniques: ["Kamehameha", "Masenko", "Makankosappo", "Special Beam Cannon"],
    family: ["Goku (pai)", "Chi-Chi (mãe)", "Goten (irmão)", "Videl (esposa)", "Pan (filha)"]
  },
  "Krillin": {
    height: 153,
    weight: 45,
    transformations: [],
    techniques: ["Kienzan (Disco Destruidor)", "Kamehameha", "Taiyoken (Técnica Solar)"],
    family: ["Androide 18 (esposa)", "Marron (filha)", "Mestre Kame (mestre)"]
  },

  "Tenshinhan": {
    height: 187,
    weight: 75,
    transformations: [],
    techniques: ["Kikoho (Canhão de Ki)", "Taiyoken", "Shiyoken (Quatro Braços)"],
    family: ["Chaos (melhor amigo)", "Mestre Tsuru (mestre)"]
  },

  "Yamcha": {
    height: 183,
    weight: 68,
    transformations: [],
    techniques: ["Sokidan (Bola Espiritual)", "Rogafufuken (Punho do Lobo)"],
    family: ["Pual (melhor amigo)"]
  },

  "Chi-Chi": {
    height: 163,
    weight: 51,
    transformations: [],
    techniques: ["Artes marciais básicas"],
    family: ["Gyuma (pai)", "Goku (esposo)", "Gohan (filho)", "Goten (filho)"]
  },

  "Gotenks": {
    height: 135,
    weight: 55,
    transformations: ["Super Saiyajin (SSJ)", "Super Saiyajin 3 (SSJ3)"],
    techniques: ["Super Ghost Kamikaze Attack", "Die Die Missile", "Galactic Donut"],
    family: ["Fusão: Goten e Trunks"]
  },

  "Trunks": {
    height: 170,
    weight: 60,
    transformations: ["Super Saiyajin (SSJ)", "Super Saiyajin 2 (SSJ2)", "Super Saiyajin Rage"],
    techniques: ["Burning Attack", "Final Flash", "Finish Buster", "Shining Sword Attack"],
    family: ["Vegeta (pai)", "Bulma (mãe)", "Bra (irmã)", "Goten (melhor amigo)"]
  },

  "Master Roshi": {
    height: 165,
    weight: 44,
    transformations: ["Max Power (Músculos)"],
    techniques: ["Kamehameha", "Mafuba (Onda do Mal)"],
    family: ["Vidente Baba (irmã)", "Goku (aluno)", "Krillin (aluno)", "Yamcha (aluno)"]
  },

  "Bardock": {
    height: 178,
    weight: 63,
    transformations: ["Grande Macaco (Oozaru)", "Super Saiyajin"],
    techniques: ["Final Spirit Cannon", "Riot Javelin", "Tyrant Lancer"],
    family: ["Gine (esposa)", "Goku/Kakarotto (filho)", "Raditz (filho)"]
  },

  "Launch": {
    height: 168,
    weight: 49,
    transformations: ["Personalidade Doce (azul)", "Personalidade Violenta (loira)"],
    techniques: ["Uso de armas de fogo", "Combate armado"],
    family: ["Tenshinhan (interesse amoroso)"]
  },

  "Mr. Satan": {
    height: 188,
    weight: 94,
    transformations: [],
    techniques: ["Megaton Punch", "Dynamite Kick"],
    family: ["Videl (filha)", "Gohan (genro)", "Pan (neta)"]
  },

  "Dende": {
    height: 122,
    weight: 35,
    transformations: [],
    techniques: ["Cura", "Criação de Esferas do Dragão"],
    family: ["Grande Patriarca (pai)", "Scargo (irmão)", "Kami (predecessor)"]
  },
  "Android 17": {
    height: 169,
    weight: 68,
    transformations: ["Power Awakening"],
    techniques: ["Barrier", "Super Electric Strike", "Energy Blast"],
    family: ["Android 18 (irmã gêmea)", "Dr. Gero (criador)", "Esposa e filhos adotivos"]
  },

  "Android 16": {
    height: 223,
    weight: 145,
    transformations: [],
    techniques: ["Hell's Flash", "Rocket Punch", "Self-Destruct"],
    family: ["Dr. Gero (criador)", "Baseado no filho de Gero"]
  },

  "Android 19": {
    height: 165,
    weight: 78,
    transformations: [],
    techniques: ["Absorção de Energia", "Eye Laser"],
    family: ["Dr. Gero (criador)"]
  },

  "Android 20 (Dr. Gero)": {
    height: 177,
    weight: 70,
    transformations: ["Humano para Androide"],
    techniques: ["Absorção de Energia", "Eye Beam"],
    family: ["Filho falecido (base do Android 16)"]
  },

  "Android 13": {
    height: 195,
    weight: 85,
    transformations: ["Super Android 13 (fusão com 14 e 15)"],
    techniques: ["S.S. Deadly Bomber", "Energy Beam", "Power Blitz"],
    family: ["Dr. Gero (criador)"]
  },

  "Android 14": {
    height: 205,
    weight: 92,
    transformations: [],
    techniques: ["Energy Blast", "Brute Force"],
    family: ["Dr. Gero (criador)"]
  },

  "Android 15": {
    height: 172,
    weight: 76,
    transformations: [],
    techniques: ["Energy Shot", "Quick Attack"],
    family: ["Dr. Gero (criador)"]
  },

  "Nail": {
    height: 213,
    weight: 72,
    transformations: ["Fusão com Piccolo"],
    techniques: ["Mystic Attack", "Regeneração", "Explosão de Ki"],
    family: ["Protetor do Grande Patriarca"]
  },

  "Raditz": {
    height: 185,
    weight: 73,
    transformations: ["Grande Macaco (Oozaru)"],
    techniques: ["Double Sunday", "Saturday Crush", "Dynamite Monday"],
    family: ["Bardock (pai)", "Gine (mãe)", "Goku/Kakarotto (irmão)"]
  },

  "Babidi": {
    height: 118,
    weight: 40,
    transformations: [],
    techniques: ["Controle Mental (Marca M)", "Magia Negra", "Teletransporte"],
    family: ["Bibbidi (pai)"]
  },

  "Majin Buu": {
    height: 170,
    weight: 85,
    transformations: ["Buu Malvado", "Super Buu", "Kid Buu"],
    techniques: ["Transformação de Doces", "Raio de Conversão", "Kamehameha", "Regeneração"],
    family: ["Bibbidi (criador)", "Mr. Satan (amigo)"]
  },

  "Bills": {
    height: 182,
    weight: 55,
    transformations: ["Modo de Destruição"],
    techniques: ["Hakai (Destruição)", "Sphere of Destruction", "God of Destruction's Wrath"],
    family: ["Champa (irmão)", "Whis (assistente)"]
  },
  "Whis": {
    height: 190,
    weight: 58,
    transformations: [],
    techniques: ["Temporal Do-Over", "Ultra Instinto", "Reversão Temporal"],
    family: ["Grande Sacerdote (pai)", "Vados (irmã)", "Korn e Kus (irmãos)"]
  },

  "Zeno": {
    height: 94,
    weight: 15,
    transformations: [],
    techniques: ["Apagamento de Universos", "Criação/Destruição Absoluta"],
    family: ["Futuro Zeno (linha temporal)", "Grande Sacerdote (guardião)"]
  },

  "Kibito-Shin": {
    height: 168,
    weight: 62,
    transformations: ["Desfusão (volta Shin e Kibito)"],
    techniques: ["Kai-Kai", "Cura", "Kiai"],
    family: ["Fusão: Shin e Kibito"]
  },

  "Jiren": {
    height: 195,
    weight: 102,
    transformations: ["Full Power", "Limit Breaker", "Burning Ultimate Warrior"],
    techniques: ["Power Impact", "Infinity Rush", "Overheat Magnetron"],
    family: ["Gicchin (mestre falecido)", "Pride Troopers (equipe)"]
  },

  "Toppo": {
    height: 205,
    weight: 98,
    transformations: ["Deus da Destruição (candidato)"],
    techniques: ["Justice Flash", "Hakai", "Justice Rear Naked Choke"],
    family: ["Pride Troopers (equipe)", "Marcarita (mestre)"]
  },

  "Dyspo": {
    height: 168,
    weight: 64,
    transformations: ["Super Maximum Light Speed Mode"],
    techniques: ["Justice Kick", "Light Bullet", "Circle Flash"],
    family: ["Pride Troopers (equipe)"]
  },

  "Marcarita ": {
    height: 175,
    weight: 50,
    transformations: [],
    techniques: ["Ultra Instinto", "Reversão Temporal", "Técnicas Angelicais"],
    family: ["Grande Sacerdote (pai)", "Whis e Vados (irmãos)"]
  },

  "Vermoudh": {
    height: 188,
    weight: 82,
    transformations: ["Modo de Destruição"],
    techniques: ["Hakai", "Técnicas de Destruição"],
    family: ["Marcarita (assistente)", "Ex-Pride Troopers"]
  },

  "Grand Priest ": {
    height: 185,
    weight: 52,
    transformations: [],
    techniques: ["Ultra Instinto Dominado", "Manipulação Espaço-Tempo", "Poderes Angelicais"],
    family: ["13 Anjos (filhos)", "Whis, Vados, Marcarita (alguns filhos)"]
  },

  "Kaio del norte (Kaito)": {
    height: 140,
    weight: 58,
    transformations: [],
    techniques: ["Kaioken", "Genki Dama (ensinou)", "Kai-Kai"],
    family: ["Grande Kaio (superior)", "Bubbles (macaco)", "Gregory (gafanhoto)"]
  },

  "Android 18": {
    height: 169,
    weight: 56,
    transformations: ["Power Awakening"],
    techniques: ["Power Blitz", "Energy Wave", "Destructo-Disc"],
    family: ["Android 17 (irmão gêmeo)", "Dr. Gero (criador)", "Krillin (esposo)", "Marron (filha)"]
  },

  "Gogeta": {
    height: 170,
    weight: 62,
    transformations: ["Super Saiyajin", "Super Saiyajin Blue", "Super Saiyajin 4 (GT)"],
    techniques: ["Big Bang Kamehameha", "Stardust Breaker", "Soul Punisher"],
    family: ["Fusão: Goku e Vegeta (Dança)"]
  },

  "Vegetto": {
    height: 172,
    weight: 65,
    transformations: ["Super Saiyajin", "Super Saiyajin Blue", "Super Saiyajin 4 (Heroes)"],
    techniques: ["Final Kamehameha", "Spirit Sword", "Big Bang Attack"],
    family: ["Fusão: Goku e Vegeta (Potara)"]
  },

  "Janemba": {
    height: 210,
    weight: 95,
    transformations: ["Forma Gorda", "Super Janemba"],
    techniques: ["Dimension Sword", "Portal Creation", "Bunkai Teleport"],
    family: ["Psyche Ogre (possuído)"]
  },

  "Broly": {
    height: 215,
    weight: 100,
    transformations: ["Super Saiyajin", "Super Saiyajin Lendário", "Super Saiyajin Full Power"],
    techniques: ["Eraser Cannon", "Gigantic Meteor", "Blaster Shell"],
    family: ["Paragus (pai)"]
  },

  "Kaio del Sur": {
    height: 158,
    weight: 62,
    transformations: [],
    techniques: ["Técnicas de Ki", "Kai-Kai"],
    family: ["Grande Kaio (superior)"]
  },

  "Kaio del este": {
    height: 152,
    weight: 48,
    transformations: [],
    techniques: ["Treinamento de Velocidade", "Técnicas de Ki"],
    family: ["Grande Kaio (superior)", "Chapuchai (discípulo)"]
  },

  "Kaio del Oeste": {
    height: 165,
    weight: 70,
    transformations: [],
    techniques: ["Técnicas de Ki", "Rival do Kaio Norte"],
    family: ["Grande Kaio (superior)"]
  },

  "Gran Kaio": {
    height: 135,
    weight: 55,
    transformations: [],
    techniques: ["Técnicas Avançadas de Ki", "Administração dos Kaios"],
    family: ["4 Kaios (subordinados)"]
  },

  "Kaio-shin del Este": {
    height: 127,
    weight: 48,
    transformations: ["Fusão com Kibito"],
    techniques: ["Kai-Kai", "Kiai", "Materializações"],
    family: ["Grande Patriarca Namek (origem)", "Kibito (assistente)", "Grande Kaioshin (superior)"]
  },

  "Kaio-shin del Norte": {
    height: 135,
    weight: 52,
    transformations: [],
    techniques: ["Técnicas de Criação", "Kai-Kai"],
    family: ["Morto por Majin Buu"]
  },

  "Kaio-shin del Sur": {
    height: 175,
    weight: 85,
    transformations: [],
    techniques: ["Técnicas de Combate Superiores"],
    family: ["Absorvido por Majin Buu"]
  },

  "Kaio-shin del Oeste": {
    height: 130,
    weight: 45,
    transformations: [],
    techniques: ["Técnicas de Criação"],
    family: ["Morta por Majin Buu (primeira vítima)"]
  },

  "Gran Kaio-shin": {
    height: 165,
    weight: 92,
    transformations: [],
    techniques: ["Técnicas Supremas de Criação"],
    family: ["Absorvido por Majin Buu", "Superior dos Kaioshin"]
  },

  "Kibito": {
    height: 202,
    weight: 68,
    transformations: ["Fusão com Shin"],
    techniques: ["Kai-Kai", "Cura Suprema", "Materializações"],
    family: ["Kaioshin do Leste/Shin (mestre)"]
  }
};

export const getCharacterExtraData = (characterName: string): CharacterExtraData | null => {
  return characterExtraData[characterName] || null;
};

export const mergeCharacterData = (apiCharacter: any) => {
  const extraData = getCharacterExtraData(apiCharacter.name);
  
  return {
    ...apiCharacter,
    height: extraData?.height || 0,
    weight: extraData?.weight || 0,
    transformations: extraData?.transformations || [],
    techniques: extraData?.techniques || [],
    family: extraData?.family || []
  };
};