export default {
  nav: {
    plants: 'Le mie piante',
    catalog: 'Catalogo',
    water: 'Acqua',
    settings: 'Impostazioni',
  },
  home: {
    time_morning: 'Buongiorno',
    time_afternoon: 'Buon pomeriggio',
    time_evening: 'Buona sera',
    greeting: '{time},',
    title: 'Le tue piante',
    empty_title: 'Ancora nessuna pianta',
    empty_body: 'Aggiungi la tua prima pianta e inizia a seguirne la cura.',
    add_plant: 'Aggiungi una pianta',
  },
  add: {
    title: 'Aggiungi una pianta',
    plant_type: 'Tipo di pianta',
    required_hint: '*',
    nickname: 'Soprannome',
    nickname_placeholder: 'es. Monstera del salotto',
    location: 'Posizione',
    location_placeholder: 'es. Davanzale del salotto',
    notes: 'Note',
    notes_placeholder: 'Altre informazioni su questa pianta…',
    submit: 'Aggiungi pianta',
    error_species: 'Seleziona un tipo di pianta',
    error_nickname: 'Inserisci un soprannome',
    search_species_placeholder: 'Cerca una pianta…',
    search_species_no_results: 'Nessuna pianta trovata',
  },
  difficulty: {
    easy: 'Facile',
    medium: 'Media',
    hard: 'Difficile',
  },
  subcategory: {
    tropical: 'Tropicale',
    succulent: 'Succulenta',
    palm: 'Palma',
    orchid: 'Orchidea',
    herb: 'Erba aromatica',
    tree: 'Albero',
  },
  light: {
    low: 'Poca luce',
    indirect: 'Indiretta',
    'bright-indirect': 'Luminosa indiretta',
    direct: 'Sole diretto',
  },
  moisture: {
    dry: 'Asciutto',
    'slightly-dry': 'Leggermente asciutto',
    moist: 'Umido',
    wet: 'Bagnato',
    waterlogged: 'Saturo',
  },
  hardness: {
    'soft-only': 'Solo acqua dolce',
    'soft-preferred': 'Preferisce acqua dolce',
    tolerant: 'Tollerante',
    any: 'Qualsiasi acqua',
    tooltip_soft_only:
      "Richiede acqua dolce/filtrata. L'acqua del rubinetto di Rimini danneggerà questa pianta",
    tooltip_soft_preferred:
      "Preferisce acqua dolce. L'acqua di Rimini può causare punte brune nel tempo",
    tooltip_tolerant: "Tollera acqua moderatamente dura. L'acqua di Rimini è gestibile",
    tooltip_any: 'Tollera qualsiasi acqua, inclusa quella dura di Rimini',
  },
  catalog: {
    title: 'Catalogo piante',
    subtitle: '{count} piante da appartamento comuni',
    subtitle_filtered: '{shown} di {total} piante',
    watering: 'Irrigazione',
    light: 'Luce',
    temperature: 'Temperatura',
    ideal_moisture: 'Umidità ideale',
    every_days: 'Ogni {min}–{max} giorni',
    water_hardness: 'Durezza acqua',
    rimini_tip: 'Consiglio acqua Rimini',
    search_placeholder: 'Cerca per nome o specie…',
    filters: 'Filtri',
    filter_difficulty: 'Livello',
    filter_water: 'Acqua',
    filter_pets: 'Animali',
    filter_safe_cats: 'Sicura per gatti',
    filter_safe_dogs: 'Sicura per cani',
    filter_category: 'Categoria',
    filter_category_ornamental: 'Ornamentale',
    filter_category_culinary: 'Aromatica / commestibile',
    filter_subcategory: 'Tipo',
    clear_filters: 'Rimuovi filtri',
    no_results: 'Nessuna pianta corrisponde ai filtri selezionati.',
    add_to_plants: 'Aggiungi alle mie piante',
    cats: 'Gatti',
    dogs: 'Cani',
    safe: 'Sicura',
    toxic: 'Tossica',
    safe_label: 'Non tossica',
    toxic_label: 'Tossica: tieni lontana',
  },
  detail: {
    log_moisture: 'Registra umidità',
    mark_watered: 'Annaffiata',
    current_status: 'Stato attuale',
    soil_moisture: 'Umidità del suolo',
    not_logged: 'Non ancora registrata',
    next_watering: 'Prossima annaffiatura (stima)',
    not_enough_data: 'Dati insufficienti',
    last_watered: 'Ultima annaffiatura',
    location: 'Posizione',
    watering_section: 'Irrigazione',
    every_days: 'Ogni {min}–{max} giorni',
    water_quality: "Qualità dell'acqua",
    water_warning_title: "L'acqua del rubinetto potrebbe stressare questa pianta",
    water_warning_sub: 'Usa alternative più delicate quando possibile',
    water_ok_title: "L'acqua del rubinetto va bene per questa pianta",
    water_ok_sub: 'Nessuna preparazione speciale necessaria',
    water_opt_rainwater: 'Acqua piovana',
    water_opt_distilled: 'Distillata / osmosi',
    water_opt_filtered: 'Filtrata',
    water_opt_tap: 'Rubinetto',
    water_opt_hard_tap: 'Rubinetto freddo diretto',
    water_tip_soft_only:
      "L'acqua di {city} è troppo dura per questa pianta. Usa acqua piovana o distillata.",
    water_tip_soft_preferred:
      "L'acqua di {city} può causare punte brune nel tempo. Meglio filtrata o piovana.",
    water_tip_tolerant:
      "L'acqua di {city} è al limite per questa pianta. Lasciarla riposare una notte aiuta.",
    your_tap: 'il tuo rubinetto',
    light_section: 'Luce',
    problems_section: 'Problemi comuni',
    history_section: 'Storico umidità',
    watering_history_section: 'Storico annaffiature',
    no_data_period: 'Nessun dato per questo periodo',
    watering_total: '{n} annaffiature',
    watering_avg: 'Media ogni {n} giorni',
    remove: 'Rimuovi pianta',
    not_found: 'Pianta non trovata.',
    delete_title: 'Rimuovere "{name}"?',
    delete_body:
      'Tutti i dati di annaffiatura, umidità e cura relativi a questa pianta saranno eliminati definitivamente.',
    cancel: 'Annulla',
    days_ago: '{days}g fa',
  },
  plant_card: {
    water_due: 'Annaffia ora',
    water_in: 'Annaffia tra {days}g',
  },
  moisture_log: {
    title: 'Registra umidità per {name}',
    subtitle: 'Controlla la sonda e seleziona il livello di umidità attuale del terreno.',
    note_placeholder: 'Nota opzionale…',
    cancel: 'Annulla',
    save: 'Salva',
    hints: {
      dry: 'Sonda 0–20%',
      'slightly-dry': 'Sonda 20–40%',
      moist: 'Sonda 40–70%',
      wet: 'Sonda 70–90%',
      waterlogged: 'Sonda 90–100%',
    },
    hint_too_dry: 'Troppo sotto il livello ideale, annaffia ora',
    hint_slightly_below: 'Appena sotto il livello ideale, buon momento per annaffiare',
    hint_ideal: 'Esattamente al livello ideale per questa pianta',
    hint_slightly_above: 'Sopra il livello ideale, aspetta prima di annaffiare',
    hint_too_wet: 'Troppo bagnato per questa pianta, salta l’annaffiatura',
    hint_waterlogged: 'Controlla il drenaggio, le radici rischiano',
  },
  watering_log: {
    title: 'Registra annaffiatura per {name}',
    subtitle: 'Seleziona la data in cui hai annaffiato questa pianta.',
    date_label: 'Data annaffiatura',
    today: 'Oggi',
    yesterday: 'Ieri',
    two_days_ago: '2 giorni fa',
    three_days_ago: '3 giorni fa',
    cancel: 'Annulla',
    save: 'Registra annaffiatura',
  },
  water_guide: {
    title: "Guida all'acqua",
    subtitle: 'Personalizzata per la qualità della tua acqua locale',
    which_water: 'Quale acqua usare?',
    tips_title_generic: 'Consigli pratici',
    tips_title_city: 'Consigli pratici per {city}',
    profile_card_title: 'La tua acqua del rubinetto',
    profile_card_title_city: 'Acqua di {city}',
    profile_setup_hint: 'Imposta per ricevere consigli personalizzati',
    edit: 'Modifica',
    save: 'Salva',
    cancel: 'Annulla',
    hardness_level: 'Durezza',
    advanced_label: 'Valori precisi (opzionale)',
    field_city: 'Città / fonte',
    field_city_placeholder: 'es. Rimini, Milano…',
    select_city_db: 'o seleziona una provincia dal database',
    select_city_placeholder: 'Cerca una provincia…',
    select_city_no_results: 'Nessuna provincia trovata',
    field_mgl: 'Durezza (mg/L CaCO₃)',
    field_mgl_placeholder: 'es. 400',
    field_ph: 'pH',
    field_ph_placeholder: 'es. 7.8',
    field_ca: 'Calcio (Ca²⁺ mg/L)',
    field_ca_placeholder: 'es. 108',
    field_mg: 'Magnesio (Mg²⁺ mg/L)',
    field_mg_placeholder: 'es. 36',
    ph_acidic: 'Leggermente acida',
    ph_neutral: 'Neutra',
    ph_alkaline: 'Leggermente alcalina',
    levels: {
      'very-soft': 'Molto dolce',
      soft: 'Dolce',
      'moderately-hard': 'Media',
      hard: 'Dura',
      'very-hard': 'Molto dura',
    },
    hardness_badge: {
      'very-soft': 'Molto dolce',
      soft: 'Dolce',
      'moderately-hard': 'Media',
      hard: 'Dura',
      'very-hard': 'Molto dura',
    },
    mineral_label: {
      'very-soft': 'Basso',
      soft: 'Basso',
      'moderately-hard': 'Medio',
      hard: 'Alto',
      'very-hard': 'Alto',
    },
    mineral_sublabel: {
      'very-soft': 'Povera di minerali',
      soft: 'Pochi minerali',
      'moderately-hard': 'Minerali medi',
      hard: 'Ricca di minerali',
      'very-hard': 'Ricca di minerali',
    },
    level_desc: {
      'very-soft':
        "La tua acqua è <strong>molto dolce</strong>: ideale per tutte le piante, incluse le più sensibili come Calatea e Fico Lyrata. Nessuna precauzione necessaria; puoi innaffiare direttamente con l'acqua del rubinetto.",
      soft: "La tua acqua è <strong>dolce</strong>: ottima per tutte le piante da appartamento. Anche le specie sensibili prospereranno. L'acqua del rubinetto è sicura senza alcun filtraggio.",
      'moderately-hard':
        'La tua acqua è <strong>mediamente dura</strong>: adatta alla maggior parte delle piante. Le specie sensibili come la Calatea possono beneficiare di acqua filtrata o piovana nel tempo, ma non causerà danni immediati.',
      hard: 'La tua acqua è <strong>dura</strong>: può stressare le piante sensibili nel tempo, causando depositi bianchi e punte brune. Usa acqua filtrata o piovana per Calatea e Fico Lyrata. Pothos e Sansevieria la gestiscono bene.',
      'very-hard':
        "La tua acqua è <strong>molto dura</strong>: tra le più dure che si trovano. Ottima da bere, ma può stressare le piante da appartamento sensibili nel tempo, causando depositi di sale bianco, punte brune e blocco dell'assorbimento radicale.",
    },
    tips: [
      '<strong>Raccogli acqua piovana</strong>: ideale, gratuita, le piante la adorano. Tieni un piccolo contenitore sul balcone.',
      "<strong>Filtra l'acqua del rubinetto</strong>: un filtro a caraffa con carbone attivo (es. Brita) rimuove il cloro e riduce leggermente la durezza.",
      "<strong>Lascia riposare l'acqua una notte</strong>: lascia l'acqua in un contenitore aperto per 12–24 ore per far evaporare il cloro. NON riduce la durezza ma aiuta le piante sensibili.",
      "<strong>Usa acqua distillata o osmosi inversa</strong> per Calatea e Fico Lyrata. Queste due soffriranno con l'acqua di {city}.",
      '<strong>Risciacqua il terreno periodicamente</strong>: versa molta acqua nel vaso ogni qualche mese per eliminare accumuli di sali e minerali.',
      "<strong>Annaffia a temperatura ambiente</strong>: l'acqua fredda del rubinetto può scioccare le piante tropicali. Lasciala raggiungere la temperatura ambiente prima dell'uso.",
    ],
    rating_best: 'Ottima',
    rating_excellent: 'Eccellente',
    rating_essential: 'Indispensabile',
    rating_good: 'Buona',
    rating_fine: 'Va bene',
    rating_acceptable: 'Accettabile',
    rating_sparingly: 'Con parsimonia',
    rating_temp_risk: 'Attenzione temperatura',
    rating_avoid: 'Evita',
    options: [
      {
        name: 'Acqua piovana',
        title: 'Acqua piovana: Ottima',
        desc_soft:
          'Naturalmente dolce e priva di cloro. Il massimo — anche se la tua acqua del rubinetto è già ottima.',
        desc_medium:
          'Naturalmente dolce, priva di minerali e cloro. Il massimo per tutte le piante. Raccoglila dal balcone o dal davanzale.',
        desc_hard:
          'Naturalmente dolce, priva di minerali e cloro. Il massimo per tutte le piante. Raccoglila dal balcone o dal davanzale.',
      },
      {
        name: 'Acqua distillata / osmosi inversa',
        title: 'Acqua distillata / osmosi inversa: Eccellente',
        desc_soft:
          'Non necessaria per la tua acqua — è già molto dolce. Vale solo per le piante più esigenti come la Calatea.',
        desc_medium:
          'Buona per le piante sensibili come la Calatea. Non indispensabile per le specie tolleranti con la tua acqua.',
        desc_hard:
          'Indispensabile per Calatea e Fico Lyrata. La tua acqua (~{mgL} mg/L) danneggerà queste piante senza. Disponibile in bottiglie da 5L.',
      },
      {
        name: 'Acqua del rubinetto filtrata',
        title: 'Acqua del rubinetto filtrata: Buona',
        desc_soft:
          'La tua acqua è già molto dolce — filtrare non aggiunge benefici per le piante. Inutile.',
        desc_medium:
          'Rimuove il cloro e riduce leggermente la durezza. Una buona scelta per la maggior parte delle piante, consigliata per la Calatea.',
        desc_hard:
          "Rimuove il cloro e ammorbidisce leggermente l'acqua. Meglio del rubinetto diretto per le piante sensibili, ma non sufficiente per la Calatea.",
      },
      {
        name: 'Acqua del rubinetto (riposata)',
        title: 'Acqua del rubinetto (riposata): Accettabile',
        desc_soft:
          'La tua acqua è già delicata. Lasciarla riposare elimina solo il cloro — sicura e ottima per tutte le piante.',
        desc_medium:
          'Lasciala in una caraffa aperta overnight per far evaporare il cloro. Sicura per la maggior parte delle piante.',
        desc_hard:
          'Riduce il cloro ma NON la durezza. OK per le piante tolleranti (Pothos, Sansevieria). Evita per Calatea e Fico Lyrata.',
      },
      {
        name: 'Acqua fredda diretta dal rubinetto',
        title: 'Acqua fredda diretta dal rubinetto: Usare con parsimonia',
        desc_soft:
          'La durezza è ottima, ma la temperatura fredda può scioccare le piante tropicali. Lasciala raggiungere la temperatura ambiente prima.',
        desc_medium:
          'La durezza moderata è gestibile, ma la temperatura fredda aggiunge ulteriore stress. Lasciala riscaldare prima.',
        desc_hard:
          'Alta durezza (~{mgL} mg/L) e temperatura fredda possono scioccare le piante. Solo per specie robuste, mai come routine.',
      },
    ],
  },
  species: {
    'monstera-deliciosa': {
      name: 'Monstera',
      description:
        "L'iconico filodendro dalle foglie spaccate. Una delle piante da appartamento più popolari. Scenografica, a crescita rapida e tollerante.",
      moistureNotes:
        "Lascia asciugare i primi 2–3 cm di terreno tra un'annaffiatura e l'altra. L'eccesso d'acqua è il killer numero 1. Le radici marciscono rapidamente in un terreno fradicio.",
      lightNotes:
        'Prospera in luce brillante indiretta. Tollera luce più bassa ma la crescita rallenterà. Evita il sole diretto intenso che brucia le foglie.',
      waterTips:
        "Tollera acqua moderatamente dura ma beneficia di acqua filtrata o piovana nel tempo. A Rimini (acqua molto dura ~400 mg/L) considera l'uso di acqua filtrata o lascia riposare l'acqua per una notte per far evaporare il cloro.",
      commonProblems: [
        'Foglie gialle → innaffiatura eccessiva o troppo sole diretto',
        "Punte brune → umidità bassa o fluoro nell'acqua dura",
        'Nessuna spaccatura nelle foglie nuove → luce insufficiente',
        'Marciume radicale → terreno allagato',
      ],
    },
    pothos: {
      name: 'Pothos',
      description:
        'Rampicante quasi indistruttibile. Perfetto per i principianti. Tollera la negligenza, poca luce e annaffiature irregolari.',
      moistureNotes:
        'Annaffia quando la metà superiore del terreno è asciutta. Molto tollerante alla siccità. È molto meglio annaffiare poco che troppo.',
      lightNotes:
        'Si adatta a quasi qualsiasi livello di luce, inclusa la poca luce. La variegatura dorata sbiadisce con poca luce.',
      waterTips:
        "Molto tollerante all'acqua dura. L'acqua di Rimini va benissimo, anche se le foglie possono occasionalmente mostrare macchie bianche di minerali. Pulisci con un panno umido.",
      commonProblems: [
        'Foglie gialle → innaffiatura eccessiva o radici intasate',
        'Foglie pallide/sbiadite → troppo sole diretto',
        'Crescita filante e rada → poca luce',
      ],
    },
    'fiddle-leaf-fig': {
      name: 'Fico Lyrata',
      description:
        "Pianta da esposizione con foglie grandi e spettacolari. Notoriamente capricciosa. Detesta essere spostata ed è sensibile alle correnti d'aria e ai cambi di temperatura.",
      moistureNotes:
        'Mantieni il terreno uniformemente umido ma mai allagato. Annaffia abbondantemente poi lascia asciugare i primi 2–3 cm prima di annaffiare di nuovo. Usa un misuratore di umidità. Non tirare ad indovinare.',
      lightNotes:
        'Ha bisogno di luce brillante indiretta. Posizionala vicino a una finestra ma lontana dal sole diretto intenso. Una volta trovato il suo posto ideale, NON spostarla.',
      waterTips:
        "Molto sensibile al fluoro e all'accumulo di sali dall'acqua dura. Può causare macchie brune e caduta delle foglie. A Rimini, si raccomanda vivamente di usare acqua filtrata o distillata. Come minimo, lascia riposare l'acqua del rubinetto overnight.",
      commonProblems: [
        "Macchie brune → marciume radicale da innaffiatura eccessiva, o tossicità da fluoro nell'acqua dura",
        'Caduta delle foglie → corrente fredda, posizione cambiata, o disidratazione',
        "Bordi bruni → umidità bassa o minerali nell'acqua dura",
        'Ingiallimento foglie inferiori → innaffiatura eccessiva',
      ],
    },
    'peace-lily': {
      name: 'Giglio della Pace',
      description:
        'Elegante pianta fiorita bianca che si abbassa vistosamente quando ha sete. Un ottimo indicatore di annaffiatura autonoma.',
      moistureNotes:
        "Mantieni costantemente umido ma non fradicio. La pianta si abbassa visibilmente quando ha bisogno d'acqua. Un segnale inequivocabile. Annaffia subito quando lo vedi.",
      lightNotes:
        "Una delle migliori piante per poca luce. Tollera bene l'ombra. La luce indiretta brillante favorisce la fioritura.",
      waterTips:
        "Sensibile al cloro e al fluoro nell'acqua dura, che causa punte brune. A Rimini, usa acqua filtrata o lascia l'acqua del rubinetto per 24 ore prima dell'uso.",
      commonProblems: [
        "Punte brune → fluoro/cloro dall'acqua dura, o umidità bassa",
        'Foglie gialle → innaffiatura eccessiva o troppo sole diretto',
        'Abbassamento nonostante terreno umido → marciume radicale',
        'Niente fiori → luce insufficiente',
      ],
    },
    'snake-plant': {
      name: 'Sansevieria',
      description:
        'Pianta praticamente immortale simile a una succulenta. Estremamente tollerante alla siccità e prospera con la negligenza. Perfetta per principianti o chi dimentica di annaffiare.',
      moistureNotes:
        "Lascia asciugare il terreno COMPLETAMENTE tra un'annaffiatura e l'altra. Annaffia molto raramente in inverno (una volta al mese è sufficiente). Il marciume radicale da innaffiatura eccessiva è quasi l'unico modo per uccidere questa pianta.",
      lightNotes:
        'Si adatta a qualsiasi luce, dalla poca alla brillante indiretta. Cresce più velocemente in luce media o brillante.',
      waterTips:
        "Estremamente tollerante all'acqua dura. L'acqua del rubinetto di Rimini va assolutamente bene.",
      commonProblems: [
        'Base molle → marciume radicale da innaffiatura eccessiva (problema più comune)',
        'Foglie avvizzite → disidratazione molto grave (raro)',
        'Punte brune → innaffiatura irregolare o umidità molto bassa',
      ],
    },
    calathea: {
      name: 'Calatea',
      description:
        "Foglie dal pattern spettacolare che si chiudono di notte. Bellissima ma esigente. Molto sensibile alla qualità dell'acqua e all'umidità.",
      moistureNotes:
        "Mantieni il terreno costantemente umido ma mai allagato. Molto intollerante sia alla disidratazione che all'eccesso d'acqua. Controlla l'umidità ogni 2–3 giorni.",
      lightNotes:
        'Preferisce luce indiretta da media a brillante. Mai sole diretto. Sbiadisce e brucia le foglie decorative.',
      waterTips:
        "Estremamente sensibile all'acqua dura, al cloro e al fluoro. L'acqua di Rimini (molto dura, ~400 mg/L) CAUSERÀ bordi croccanti e danni alle foglie. Usa sempre acqua distillata o filtrata. L'acqua piovana è ideale.",
      commonProblems: [
        "Bordi croccanti bruni → minerali dell'acqua dura, umidità bassa (mantieni sopra il 50%)",
        'Foglie gialle → innaffiatura eccessiva',
        'Foglie arricciate → disidratazione o umidità bassa',
        'Pattern sbiadito → troppa luce',
        'Foglie ferme → temperatura troppo fredda o pianta stressata',
      ],
    },
    'rubber-plant': {
      name: 'Ficus Elastica',
      description:
        'Albero dalle foglie lucide e decise che cresce in altezza. Una delle specie Ficus più facili. Più tollerante del Fico Lyrata.',
      moistureNotes:
        "Lascia asciugare la metà superiore del terreno tra un'annaffiatura e l'altra. Pulisci occasionalmente le foglie con un panno umido per mantenerle pulite e favorire la fotosintesi.",
      lightNotes:
        'Preferisce luce indiretta brillante. Le varietà variegate hanno bisogno di più luce per mantenere la colorazione.',
      waterTips:
        "Abbastanza tollerante all'acqua dura. A Rimini, potresti notare depositi bianchi di minerali sul bordo del vaso. Puliscili. Considera l'acqua filtrata per mantenere la lucentezza delle foglie ed evitare l'imbrunimento delle punte.",
      commonProblems: [
        'Foglie gialle → innaffiatura eccessiva o cambio improvviso di temperatura',
        "Caduta delle foglie → correnti d'aria, freddo, o posizione cambiata",
        'Macchie brune → shock da acqua fredda o scottatura solare',
        'Crescita filante → luce insufficiente',
      ],
    },
    'spider-plant': {
      name: 'Pianta Ragno',
      description:
        'Allegra pianta arcuata che produce "ragnetti" a cascata. Estremamente facile, adattabile e ottima per i cestini pensili.',
      moistureNotes:
        'Annaffia quando i primi 3–4 cm di terreno sono asciutti. Molto tollerante alle annaffiature occasionalmente mancate.',
      lightNotes:
        'Cresce con qualsiasi luce, dalla poca alla brillante indiretta. La luce indiretta brillante produce i ragnetti più vigorosi.',
      waterTips:
        "Leggermente sensibile al fluoro nell'acqua dura. Può causare punte brune. A Rimini, l'uso di acqua filtrata manterrà le punte verdi. Tuttavia la pianta sopravvive anche con l'acqua del rubinetto; taglia semplicemente le punte brune quando compaiono.",
      commonProblems: [
        "Punte brune → sensibilità al fluoro dell'acqua dura (il più comune)",
        'Foglie pallide → troppo sole diretto',
        'Niente ragnetti → ha bisogno di essere leggermente a radici strette',
      ],
    },
    'aloe-vera': {
      name: 'Aloe Vera',
      description:
        'Succulenta dalle foglie carnose piene di gel. Una delle piante da appartamento più resistenti. Tollera la negligenza, la siccità ed è praticamente indistruttibile.',
      moistureNotes:
        "Annaffia abbondantemente ma raramente. Lascia asciugare completamente il terreno tra un'annaffiatura e l'altra. In inverno, una volta al mese è sufficiente. L'eccesso d'acqua è la principale causa di morte.",
      lightNotes:
        "Ama la luce intensa e un po' di sole diretto. Un davanzale esposto a sud o ovest è ideale. Sopravvive con meno luce ma non prospererà. Le foglie diventeranno pallide e flaccide.",
      waterTips:
        "Molto tollerante all'acqua dura. L'acqua di Rimini è assolutamente adatta. Le foglie spesse la proteggono dalla sensibilità ai minerali.",
      commonProblems: [
        "Foglie molli o base bruna → eccesso d'acqua o marciume radicale",
        'Foglie raggrinzite → disidratazione grave (annaffia immediatamente)',
        'Punte che imbruniscono → troppo sole diretto o aria molto secca',
        'Pianta pallida e allungata → luce insufficiente',
      ],
    },
    'zz-plant': {
      name: 'Pianta ZZ',
      description:
        'Bellezza dalle foglie lucide e scure che prospera in quasi tutte le condizioni. Accumula acqua nei rizomi. Quasi impossibile da uccidere per negligenza.',
      moistureNotes:
        "Lascia asciugare completamente il terreno tra un'annaffiatura e l'altra. Annaffia ogni 2–4 settimane in stagione di crescita, mensilmente in inverno. I rizomi conservano l'acqua. L'eccesso è il rischio principale.",
      lightNotes:
        'Si adatta a poca luce. Ideale per stanze buie e uffici. Cresce meglio con luce indiretta media. Tollera persino gli ambienti illuminati al neon.',
      waterTips: "Non risente dell'acqua dura. L'acqua di Rimini va benissimo.",
      commonProblems: [
        "Foglie gialle → eccesso d'acqua (problema più comune)",
        "Caduta delle foglie → eccesso d'acqua o freddo improvviso",
        'Crescita filante → luce insufficiente',
        'Crescita lenta → normale. Questa pianta cresce semplicemente piano',
      ],
    },
    'weeping-fig': {
      name: 'Ficus Benjamina',
      description:
        'Albero classico dalle foglie delicate e lucide. Perde le foglie vistosamente quando è stressato. Soprattutto quando viene spostato. Una volta ambientato, è elegante e longevo.',
      moistureNotes:
        "Lascia asciugare i primi 2–3 cm di terreno tra un'annaffiatura e l'altra. L'umidità costante è fondamentale. Sia troppa che troppo poca acqua causano la caduta delle foglie.",
      lightNotes:
        'Ha bisogno di luce indiretta brillante. Le finestre esposte a sud o ovest sono ideali. Evita di spostarlo. Anche un piccolo cambiamento di posizione provoca la caduta delle foglie.',
      waterTips:
        "Tollera l'acqua dura ma si trova meglio con acqua filtrata nel tempo. A Rimini, risciacqua abbondantemente il terreno ogni qualche mese per rimuovere i depositi di minerali.",
      commonProblems: [
        'Caduta improvvisa delle foglie → posizione cambiata, correnti, sbalzi termici o aria secca',
        "Foglie gialle → eccesso d'acqua o luce insufficiente",
        'Foglie brune e croccanti → disidratazione o aria molto secca',
        'Insetti scudetto → controlla i nodi del fusto per piccole protuberanze brune',
      ],
    },
    'jade-plant': {
      name: 'Pianta di Giada',
      description:
        'Albero succulento longevo dalle foglie spesse e carnose. Si crede porti fortuna. Un classico nelle case italiane da generazioni. Può vivere per decenni.',
      moistureNotes:
        'Annaffia abbondantemente poi lascia asciugare completamente il terreno. In inverno, riduci a una volta al mese. Foglie grasse e turgide indicano una pianta felice. Quelle raggrinzite indicano sete.',
      lightNotes:
        "Preferisce luce intensa con un po' di sole diretto. Le finestre a sud sono ideali. Senza luce sufficiente i fusti diventano filanti e pallidi.",
      waterTips:
        "Tollera bene l'acqua dura. L'acqua di Rimini è accettabile, anche se l'acqua filtrata previene i depositi bianchi di minerali sulle foglie.",
      commonProblems: [
        "Fusto molle o marciume radicale → eccesso d'acqua",
        'Foglie raggrinzite e avvizzite → disidratazione grave',
        'Crescita filante e pallida → luce insufficiente',
        "Caduta delle foglie → sbalzo termico improvviso o eccesso d'acqua",
      ],
    },
    'dragon-tree': {
      name: 'Dracena Marginata',
      description:
        "Albero dall'aspetto scenografico con foglie strette dai bordi rossi. Poca manutenzione, molto d'effetto. Una delle piante da appartamento italiane più popolari.",
      moistureNotes:
        'Annaffia quando la metà superiore del terreno è asciutta. Non esagerare. Le radici restano nel vaso per anni e marciscono facilmente in un terreno zuppo.',
      lightNotes:
        'Si adatta dalla luce indiretta a quella indiretta brillante. Colori migliori con più luce, ma tollera livelli più bassi. Evita il sole diretto intenso che brucia le foglie strette.',
      waterTips:
        "Sensibile al fluoro e ai sali dell'acqua dura. Sintomo classico: punte brune. A Rimini si raccomanda acqua filtrata o piovana. Come minimo, lascia riposare l'acqua del rubinetto overnight.",
      commonProblems: [
        "Punte brune → tossicità da fluoro dell'acqua dura (molto comune a Rimini)",
        "Foglie gialle → eccesso d'acqua o marciume radicale",
        'Caduta delle foglie → corrente fredda o temperatura sotto i 15°C',
        'Foglie pallide → luce insufficiente',
      ],
    },
    'heartleaf-philodendron': {
      name: 'Filodendro Cordato',
      description:
        'Pianta rampicante classica con foglie a forma di cuore. A crescita rapida, poco esigente e perfetta per mensole o cestini pensili. Parente stretto del Pothos.',
      moistureNotes:
        "Annaffia quando i primi 2–3 cm di terreno sono asciutti. Molto più tollerante alla siccità che all'eccesso d'acqua. Le foglie gialle sono quasi sempre segno di troppa acqua.",
      lightNotes:
        'Prospera con luce indiretta da media a brillante. Tollera luce più bassa meglio di molte altre ma cresce più velocemente con luce brillante indiretta. Si etiolizza con poca luce.',
      waterTips:
        "Tollera bene l'acqua dura. L'acqua di Rimini va bene. Pulire occasionalmente le foglie con un panno umido previene l'accumulo di polvere minerale.",
      commonProblems: [
        "Foglie gialle → eccesso d'acqua o marciume radicale",
        'Foglie brune e croccanti → disidratazione o umidità molto bassa',
        'Tralci filanti → luce insufficiente',
        'Foglie nuove piccole → ha bisogno di fertilizzante o più luce',
      ],
    },
    syngonium: {
      name: 'Syngonium',
      description:
        "Pianta compatta a crescita rapida con foglie a forma di freccia che cambiano con la maturità. Si arrampica o ricade con grazia. Un'italiana preferita versatile e popolare.",
      moistureNotes:
        'Mantieni il terreno costantemente umido ma non allagato. Lascia asciugare solo il primo centimetro. In inverno tollera condizioni leggermente più secche.',
      lightNotes:
        'Meglio con luce indiretta da media a brillante. Tollera poca luce ma cresce lentamente. Le varietà variegate necessitano di più luce per mantenere il colore.',
      waterTips:
        "Abbastanza tollerante all'acqua dura. L'acqua di Rimini è accettabile, anche se l'acqua filtrata mantiene meglio il colore delle foglie nel lungo periodo.",
      commonProblems: [
        "Foglie gialle → eccesso d'acqua",
        "Bordi bruni → umidità bassa o fluoro nell'acqua dura",
        'Foglie pallide → troppo sole diretto',
        'Pianta filante → luce insufficiente',
      ],
    },
    dieffenbachia: {
      name: 'Dieffenbachia',
      description:
        "Pianta tropicale dall'impatto con grandi foglie variegate. Molto comune in case e uffici italiani. Maneggiala con guanti. La linfa è irritante per la pelle e tossica se ingerita.",
      moistureNotes:
        "Mantieni costantemente umido, lasciando asciugare solo il primo centimetro. Evita il terreno zuppo. Le foglie gialle inferiori segnalano quasi sempre eccesso d'acqua.",
      lightNotes:
        'Preferisce luce indiretta da media a brillante. Tollera poca luce ma i bellissimi pattern delle foglie sbiadiscono. Evita il sole diretto che brucia le foglie.',
      waterTips:
        'Tollera acqua moderatamente dura. A Rimini, risciacqua il terreno ogni qualche mese per rimuovere i depositi di minerali che possono causare imbrunimento delle punte.',
      commonProblems: [
        "Foglie inferiori gialle → eccesso d'acqua o invecchiamento naturale",
        "Punte brune → aria secca, minerali dell'acqua dura o correnti",
        'Foglie ricadenti → disidratazione o radici intasate',
        'Foglie pallide e sbiadite → troppo sole diretto',
      ],
    },
    aglaonema: {
      name: 'Aglaonema',
      description:
        'Foglie dai bellissimi pattern in verde, argento e rosso. Una delle piante da appartamento più adattabili. Tollera poca luce, siccità e la quasi totale negligenza.',
      moistureNotes:
        "Annaffia quando la metà superiore del terreno è asciutta. Molto tollerante alle annaffiature irregolari. Evita l'eccesso d'acqua, specialmente in inverno quando la crescita rallenta.",
      lightNotes:
        "Ottima pianta per poca luce. Le varietà verdi prosperano quasi all'ombra; le variegate e rosse necessitano di luce indiretta più brillante per mantenere il colore.",
      waterTips:
        "Tollera bene l'acqua dura. L'acqua di Rimini va bene. Pulisci occasionalmente le foglie per rimuovere la polvere minerale e mantenerle lucide.",
      commonProblems: [
        "Foglie gialle → eccesso d'acqua o marciume radicale",
        "Punte brune → aria secca, correnti fredde o fluoro nell'acqua",
        'Colore sbiadito → luce insufficiente (soprattutto le varietà rosse)',
        'Marciume radicale → terreno freddo e zuppo in inverno',
      ],
    },
    'kentia-palm': {
      name: 'Palma Kentia',
      description:
        'Palma elegante a crescita lenta con fronde arcuate graziose. Un classico senza tempo nelle case e negli hotel italiani. Una delle palme da appartamento più tolleranti.',
      moistureNotes:
        "Lascia asciugare i primi centimetri di terreno tra un'annaffiatura e l'altra. Annaffia abbondantemente ma non lasciare mai acqua stagnante. Le fronde gialle segnalano quasi sempre eccesso d'acqua.",
      lightNotes:
        'Si adatta a luce indiretta media ma cresce meglio con luce indiretta brillante. Tollera bene livelli di luce più bassi. Ideale per spazi lontani dalle finestre. Evita il sole diretto intenso.',
      waterTips:
        "Sensibile al fluoro e al cloro nell'acqua dura. Causa punte brune sulle fronde. A Rimini si preferisce acqua filtrata o piovana. Come minimo, lascia riposare l'acqua overnight.",
      commonProblems: [
        'Punte brune sulle fronde → sensibilità al fluoro, aria secca o innaffiatura irregolare',
        "Fronde gialle → eccesso d'acqua o marciume radicale",
        'Fronde inferiori brune → invecchiamento naturale. Rimuovi alla base',
        'Crescita molto lenta → normale per la Kentia, sii paziente',
      ],
    },
    yucca: {
      name: 'Yucca',
      description:
        "Pianta architettonica d'impatto con foglie a spada su un fusto robusto. Prospera in luoghi soleggiati con cure minime. Una delle piante da appartamento più resistenti alla siccità.",
      moistureNotes:
        "Lascia asciugare completamente il terreno tra un'annaffiatura e l'altra. Molto resistente alla siccità. Annaffia ogni 2–4 settimane in estate, ancora meno in inverno. L'eccesso d'acqua causa marciume radicale.",
      lightNotes:
        'Ama la luce intensa e il sole diretto. Le finestre a sud o ovest sono ideali. Tollera meno luce ma cresce lentamente e può apparire pallida e ricadente.',
      waterTips: "Molto tollerante all'acqua dura. L'acqua di Rimini va assolutamente bene.",
      commonProblems: [
        "Punte brune → estetiche, causate dall'aria secca. Taglia con forbici pulite",
        "Fusto molle o base → eccesso d'acqua e marciume radicale",
        "Foglie gialle → eccesso d'acqua o caduta naturale delle foglie inferiori",
        'Foglie pallide e ricadenti → luce insufficiente',
      ],
    },
    schefflera: {
      name: 'Schefflera',
      description:
        'Foglie composte lucide che si aprono a ombrello. A crescita rapida e tollerante. Un classico delle sale italiane che può diventare un albero imponente.',
      moistureNotes:
        "Lascia asciugare la metà superiore del terreno tra un'annaffiatura e l'altra. Detesta il terreno allagato. Controlla con un dito prima di annaffiare. In caso di dubbio, aspetta ancora un giorno.",
      lightNotes:
        'Meglio con luce indiretta brillante. Tollera luce media ma la crescita rallenta e la variegatura sbiadisce. Evita il sole diretto intenso che brucia le foglie.',
      waterTips:
        "Tollera bene l'acqua dura. L'acqua di Rimini va bene. Risciacqua il terreno occasionalmente per prevenire l'accumulo di sali intorno alle radici.",
      commonProblems: [
        "Caduta delle foglie → eccesso d'acqua, corrente fredda o cambio di posizione improvviso",
        "Foglie gialle → eccesso d'acqua o marciume radicale",
        'Bordi bruni → aria secca o disidratazione',
        'Crescita pallida e filante → luce insufficiente',
      ],
    },
    anthurium: {
      name: 'Anthurium',
      description:
        'Pianta tropicale spettacolare con fiori a forma di cuore lucidi in rosso, rosa o bianco. A fioritura prolungata e molto amata nelle case italiane per il suo colore continuo.',
      moistureNotes:
        "Mantieni umido ma non zuppo. Lascia asciugare solo il primo centimetro. L'anthurium è sensibile sia all'eccesso che alla carenza d'acqua. Un buon drenaggio è essenziale.",
      lightNotes:
        'La luce indiretta brillante produce più fiori. Tollera luce media. Evita il sole diretto che sbianca e brucia le spate cerose.',
      waterTips:
        "Sensibile all'accumulo di sali e minerali dall'acqua dura. Causa punte brune e indebolisce la fioritura. A Rimini usa acqua filtrata o piovana e risciacqua il terreno ogni qualche mese.",
      commonProblems: [
        "Punte brune → minerali dell'acqua dura, umidità bassa o correnti fredde",
        "Foglie gialle → eccesso d'acqua o marciume radicale",
        'Nessun fiore → luce insufficiente o temperatura troppo bassa',
        'Spate verdi → normale invecchiamento dei fiori più vecchi',
      ],
    },
    tradescantia: {
      name: 'Tradescantia',
      description:
        'Pianta ricadente a crescita rapida con foglie a strisce viola e argento. Facile e gratificante. Una delle piante più colorate e a bassa manutenzione che puoi coltivare in casa.',
      moistureNotes:
        "Annaffia quando i primi 2–3 cm di terreno sono asciutti. Abbastanza resistente alla siccità. Tollera le annaffiature mancate. L'eccesso d'acqua causa marciume e fusti molli.",
      lightNotes:
        "Colori migliori con luce indiretta brillante. L'intensità del viola sbiadisce con poca luce. Tollera luce media. Un po' di sole mattutino esalta i toni viola.",
      waterTips:
        "Tollera bene l'acqua dura. L'acqua di Rimini va bene. La pianta cresce così velocemente che la sensibilità ai minerali è raramente un problema visibile.",
      commonProblems: [
        'Colore sbiadito → luce insufficiente (serve luce indiretta brillante per il viola migliore)',
        'Fusti filanti e spogli → normale. Taglia regolarmente e propaga le talee',
        "Fusti molli → eccesso d'acqua",
        'Punte brune → aria secca o disidratazione',
      ],
    },
    ceropegia: {
      name: 'Catena di Cuori',
      description:
        'Succulenta ricadente con foglie a forma di cuore fantasia argento e verde. Cresce velocemente, è bellissima in vasi pensili e molto semplice da curare.',
      moistureNotes:
        "Lascia asciugare completamente il terreno tra un'annaffiatura e l'altra. Trattala come una succulenta — accumula acqua nelle radici tuberose e nelle foglie. Il rischio principale è l'eccesso d'acqua.",
      lightNotes:
        'Ama la luce indiretta intensa. Tollera qualche ora di sole diretto leggero che intensifica il disegno argentato delle foglie. Evita la penombra che causa una crescita rada.',
      waterTips:
        "Molto tollerante all'acqua del rubinetto. Non è esigente sulla qualità dell'acqua. A Rimini l'acqua del rubinetto va benissimo. Annaffia con parsimonia — meno è meglio.",
      commonProblems: [
        "Steli gialli e molli → eccesso d'acqua o terreno allagato",
        'Foglie pallide e sbiadite → poca luce',
        'Foglie molto distanziate tra loro → luce insufficiente o troppa siccità',
        'Foglie raggrinzite → disidratazione o aria troppo secca',
      ],
    },
    pilea: {
      name: 'Pilea',
      description:
        "Pianta di tendenza dalle foglie rotonde che produce 'cuccioli' alla base. Facile da coltivare e condividere. Una delle piante più amate e riconoscibili nelle case italiane di oggi.",
      moistureNotes:
        "Annaffia quando i primi 2–3 cm di terreno sono asciutti. Si abbassa leggermente quando ha sete poi si riprende subito dopo l'annaffiatura. Non lasciare mai in acqua stagnante. Il drenaggio è essenziale.",
      lightNotes:
        'Ha bisogno di luce indiretta brillante. Ruota il vaso settimanalmente per evitare la crescita asimmetrica verso la luce. Evita il sole diretto che brucia le foglie rotonde.',
      waterTips:
        "Leggermente sensibile ai minerali dell'acqua dura nel tempo. Le foglie possono sviluppare macchie bianche. A Rimini si preferisce acqua filtrata o piovana. Pulisci le foglie con un panno umido per rimuovere i depositi.",
      commonProblems: [
        "Foglie gialle → eccesso d'acqua o terreno allagato",
        'Foglie arriccidate → disidratazione o troppo sole',
        "Macchie bianche sulle foglie → depositi dall'acqua dura. Pulisci con panno umido",
        'Pianta molto inclinata → ruota regolarmente il vaso verso la fonte di luce',
      ],
    },
    strelitzia: {
      name: 'Uccello del Paradiso',
      description:
        'Pianta tropicale imponente con grandi foglie a forma di pagaia e iconici fiori arancioni e blu. A crescita lenta ma dal fascino straordinario. Un elemento scenografico per ambienti luminosi.',
      moistureNotes:
        'Annaffia abbondantemente poi lascia asciugare i primi 3–4 cm di terreno prima di annaffiare di nuovo. Riduci le annaffiature in inverno. Tollera qualche siccità ma cresce meglio con umidità costante in estate.',
      lightNotes:
        "Ha bisogno di quanta più luce possibile — idealmente qualche ora di sole diretto al giorno. Una finestra esposta a sud o ovest è l'ideale. La luce insufficiente impedisce la fioritura e rallenta notevolmente la crescita.",
      waterTips:
        "Tollerante all'acqua del rubinetto. Non è particolarmente sensibile alla durezza. A Rimini l'acqua del rubinetto va bene. Evita il ristagno idrico che è il principale rischio.",
      commonProblems: [
        "Foglie spaccate → normale all'aperto per il vento; in casa indica aria molto secca o danni fisici",
        'Nessun fiore → luce insufficiente o vaso troppo grande (fiorisce meglio con le radici strette)',
        "Foglie gialle → eccesso d'acqua o drenaggio scarso",
        "Bordi fogliari marroni → bassa umidità o fluoro nell'acqua del rubinetto",
      ],
    },
    'begonia-maculata': {
      name: 'Begonia Maculata',
      description:
        'Splendida begonia a canna con foglie verde oliva macchiate di argento e rovescio rosso scuro. Molto ricercata e sorprendentemente gratificante una volta compresi i suoi bisogni.',
      moistureNotes:
        "Lascia asciugare i primi 2–3 cm di terreno tra le annaffiature. Sensibile sia all'eccesso che alla siccità. Non lasciare il terreno fradicio — il marciume radicale si sviluppa rapidamente.",
      lightNotes:
        'Ama la luce indiretta intensa. Il sole diretto sbiadisce le foglie e brucia le macchie. Una finestra esposta a nord-est o est è ideale. La buona luce mantiene vivide le macchie argentate.',
      waterTips:
        "Preferisce acqua dolce o filtrata. L'acqua dura può causare bordi marroni nel tempo. A Rimini usa acqua filtrata o piovana quando possibile. Evita di bagnare le foglie — annaffia al livello del terreno per prevenire la muffa.",
      commonProblems: [
        "Bordi fogliari marroni → minerali dell'acqua dura, bassa umidità o siccità",
        "Oidio → scarsa circolazione d'aria o foglie bagnate",
        "Caduta delle foglie → sbalzo di temperatura, correnti fredde o eccesso d'acqua",
        'Crescita allungata → luce insufficiente',
      ],
    },
    'begonia-ferox': {
      name: 'Begonia Ferox',
      description:
        'Rara begonia da collezione proveniente dalla Cina con foglie verde scuro ricoperte di lunghi denti a forma di cono. A crescita lenta, è un esemplare spettacolare che richiede cure precise.',
      moistureNotes:
        "Mantieni il terreno costantemente umido ma mai allagato. Odia asciugarsi completamente ma non tollera l'acqua stagnante. Controlla ogni qualche giorno e annaffia quando la superficie inizia ad asciugarsi.",
      lightNotes:
        'Preferisce luce indiretta media o intensa. Evita il sole diretto che brucia le foglie. Una luce costante senza forti fluttuazioni è importante per una crescita regolare.',
      waterTips:
        "Sensibile alla qualità dell'acqua. Si preferisce acqua dolce o filtrata. L'acqua dura causa bruciature e imbrunimento nel tempo. A Rimini usa acqua filtrata o piovana. Non lasciare mai acqua fredda sulle foglie.",
      commonProblems: [
        'Punte fogliari marroni → acqua dura, bassa umidità o siccità',
        "Marciume del fusto → eccesso d'acqua o drenaggio insufficiente",
        'Crescita lenta o stentata → poca luce o irrigazione scorretta',
        'Foglie che si accartocciano → umidità molto bassa; posiziona su un vassoio con ghiaia e acqua',
      ],
    },
    phalaenopsis: {
      name: 'Orchidea Falena',
      description:
        "L'orchidea più diffusa nelle case. Produce fiori eleganti e duraturi in bianco, rosa o viola. Più semplice da coltivare di quanto si pensi, una volta capita la sua routine.",
      moistureNotes:
        "Annaffia immergendo il vaso per qualche minuto nell'acqua poi lascialo scolare completamente. Annaffia ogni 7–10 giorni in estate, ogni 14 giorni in inverno. Non lasciare mai le radici in acqua stagnante. Le radici devono essere verdi quando umide e bianco-argentate quando asciutte.",
      lightNotes:
        'Ha bisogno di luce indiretta brillante — niente sole diretto che brucia le foglie. Una finestra esposta a est è ideale. Le foglie devono essere verde medio; verde scuro significa poca luce, giallastre significa troppa.',
      waterTips:
        "Sensibile all'accumulo di sali minerali dall'acqua dura, che può danneggiare le radici e causare macchie fogliari. A Rimini si raccomanda acqua filtrata o piovana. Usa sempre acqua a temperatura ambiente — mai acqua fredda del rubinetto.",
      commonProblems: [
        'Nessun fiore → luce insufficiente o mancanza di sbalzo termico notturno per stimolare la riffioritura',
        "Foglie gialle → eccesso d'acqua, troppo sole o marciume radicale",
        'Radici raggrinzite → siccità o umidità molto bassa',
        "Crosta bianca sul vaso → accumulo di sali dall'acqua dura; sciacqua con acqua filtrata",
      ],
    },
    delosperma: {
      name: 'Delosperma',
      description:
        'Succulenta tappezzante resistente con fiori brillanti simili a margherite in vivido rosa, arancione o giallo. Prospera in pieno sole e terreno molto drenante. Sorprendentemente resistente al gelo.',
      moistureNotes:
        "Annaffia con parsimonia — lascia asciugare completamente il terreno tra le annaffiature. Estremamente resistente alla siccità. In vaso, annaffia ancora meno frequentemente in inverno. L'eccesso d'acqua è l'unico vero rischio.",
      lightNotes:
        "Richiede pieno sole per almeno 6 ore al giorno. Più sole equivale a più fioritura abbondante. L'ombra causa crescita allungata e assenza di fiori. Un davanzale esposto a sud o uno spazio esterno soleggiato è l'ideale.",
      waterTips:
        "Molto tollerante a qualsiasi tipo d'acqua. L'acqua dura del rubinetto va benissimo. La variabile chiave è il drenaggio, non la qualità dell'acqua — pianta in substrato sabbioso e drenante per cactus.",
      commonProblems: [
        'Nessun fiore → sole insufficiente',
        "Steli molli e marci → eccesso d'acqua o ristagno; rinvasa in substrato asciutto e ghiaioso",
        'Colore pallido e sbiadito → poca luce',
        'Crescita allungata → ha bisogno di più sole diretto',
      ],
    },
    'carpobrotus-edulis': {
      name: 'Fico degli Ottentotti',
      description:
        'Succulenta costiera vigorosa con foglie triangolari spesse e grandi fiori vistosi gialli o magenta. Estremamente robusta, resistente al sale e adatta a condizioni difficili e soleggiate.',
      moistureNotes:
        "Molto resistente alla siccità. Annaffia abbondantemente e raramente, lasciando asciugare completamente il terreno. In vaso all'interno, annaffia ogni 3–4 settimane in estate, una volta al mese o meno in inverno.",
      lightNotes:
        'Ha bisogno del massimo di sole diretto. Nel suo habitat naturale cresce su scogliere costiere esposte. In casa richiede il posto più soleggiato disponibile. La luce insufficiente impedisce completamente la fioritura.',
      waterTips:
        "Altamente tollerante all'acqua dura, al sale e ai minerali. Qualsiasi tipo d'acqua va bene. Il drenaggio e il sole sono le uniche variabili che contano per questa pianta.",
      commonProblems: [
        "Steli marci → eccesso d'acqua, drenaggio scarso o troppa ombra",
        'Nessun fiore → luce insufficiente',
        'Foglie raggrinzite → siccità eccessiva (anche se tollera periodi di siccità significativi)',
        "Diffusione invasiva all'aperto → tieni in vaso fuori dal suo areale nativo",
      ],
    }, // ─── Erbe aromatiche ─────────────────────────────────────────────────────────
    basil: {
      name: 'Basilico',
      description:
        "L'erba aromatica italiana per eccellenza. Profumata, a rapida crescita e molto gratificante su un davanzale soleggiato. Migliore consumato fresco durante l'estate.",
      moistureNotes:
        "Mantieni il terreno costantemente umido ma non allagato. Il basilico appassisce drammaticamente quando ha sete ma si riprende velocemente dopo l'annaffiatura. Controlla ogni giorno con il caldo. Non lasciarlo mai asciugare completamente.",
      lightNotes:
        "Ha bisogno di almeno 6 ore di sole diretto al giorno. Un davanzale esposto a sud è l'ideale. La luce insufficiente causa foglie pallide, rade e insapore.",
      waterTips:
        "Non è sensibile alla qualità dell'acqua. L'acqua del rubinetto va bene. Annaffia alla base, non sulle foglie, per prevenire problemi fungini. Evita l'acqua fredda diretta dal rubinetto.",
      commonProblems: [
        'Appassimento nonostante il terreno umido → marciume radicale da ristagno; assicurati un buon drenaggio',
        'Foglie pallide o gialle → luce insufficiente',
        'Foglie che anneriscono → danno da freddo o malattia fungina da foglie bagnate',
        'Fioritura precoce (bolting) → rimuovi i boccioli per prolungare il raccolto',
      ],
    },
    rosemary: {
      name: 'Rosmarino',
      description:
        "Erba aromatica mediterranea con foglie aghiformi e un aroma potente. Estremamente resistente alla siccità una volta radicata. Ama il sole e la buona circolazione d'aria.",
      moistureNotes:
        'Annaffia abbondantemente poi lascia asciugare completamente il terreno prima di annaffiare di nuovo. Il rosmarino odia il terreno fradicio — è molto più facile ucciderlo con troppa acqua che troppo poca. Riduci significativamente le annaffiature in inverno.',
      lightNotes:
        'Richiede pieno sole — almeno 6 ore al giorno. Su un luminoso davanzale esposto a sud crescerà benissimo. La luce insufficiente causa crescita rada e riduce la fragranza.',
      waterTips:
        "Tollerante all'acqua del rubinetto e alla durezza. A Rimini l'acqua del rubinetto va benissimo. Il rischio principale è sempre l'eccesso d'acqua, non la qualità dell'acqua.",
      commonProblems: [
        "Steli marroni e molli → marciume radicale da eccesso d'acqua; rinvasa in substrato secco e sabbioso",
        "Rivestimento grigio polveroso sulle foglie → oidio da scarsa circolazione d'aria",
        "Caduta delle foglie → eccesso d'acqua, correnti fredde o shock da trapianto",
        'Crescita rada e insapore → luce insufficiente',
      ],
    },
    parsley: {
      name: 'Prezzemolo',
      description:
        'Erba biennale versatile fondamentale nella cucina italiana. Sia la varietà a foglia piatta (italiano) che quella riccioluta sono facili da coltivare su un davanzale luminoso.',
      moistureNotes:
        'Mantieni il terreno uniformemente umido. Il prezzemolo non ama asciugarsi ma anche il ristagno è dannoso. Annaffia quando il primo centimetro di terreno si asciuga. Richiede annaffiature più frequenti con il caldo.',
      lightNotes:
        'Cresce meglio con luce indiretta intensa o qualche ora di sole diretto — 4–6 ore al giorno. Tollera meno luce rispetto alla maggior parte delle erbe ma la crescita sarà più lenta.',
      waterTips:
        "Non è sensibile alla durezza dell'acqua. L'acqua del rubinetto va bene. Annaffia alla base per tenere le foglie asciutte e ridurre il rischio di macchie fungine.",
      commonProblems: [
        "Foglie ingiallite → eccesso d'acqua, carenza di nutrienti o fine del ciclo biennale",
        'Germinazione lenta → il prezzemolo è notoriamente lento a germinare (3–4 settimane)',
        'Fioritura precoce → naturale con il caldo o nel secondo anno; raccogli frequentemente per ritardarla',
        "Macchie fungine sulle foglie → annaffiatura dall'alto; annaffia sempre alla base",
      ],
    },
    thyme: {
      name: 'Timo',
      description:
        'Erba aromatica legnosa a portamento basso con foglioline profumatissime. Una delle erbe culinarie più resistenti alla siccità. Ama il sole e si adatta bene a un davanzale soleggiato.',
      moistureNotes:
        "Lascia asciugare completamente il terreno tra le annaffiature. Il timo è molto resistente alla siccità e preferisce condizioni asciutte. L'eccesso d'acqua è il principale rischio in casa.",
      lightNotes:
        "Ha bisogno di pieno sole — almeno 6 ore di luce diretta al giorno. Un davanzale esposto a sud è l'ideale. Con poca luce diventa allungato e perde il sapore.",
      waterTips:
        "Non è sensibile alla qualità dell'acqua. L'acqua del rubinetto va benissimo. Il drenaggio conta molto più della qualità dell'acqua.",
      commonProblems: [
        "Crescita legnosa e rada → normale con l'età; pota regolarmente per stimolare la crescita compatta",
        "Marciume radicale → eccesso d'acqua; il timo ha bisogno di substrato a rapido drenaggio",
        'Perdita di profumo → luce insufficiente',
        "Oidio → scarsa circolazione d'aria o annaffiatura dall'alto",
      ],
    },
    dill: {
      name: 'Aneto',
      description:
        'Erba annuale con foglie piumose e un caratteristico sapore di anice. A rapida crescita, migliore da raccogliere giovane. Aggiunge freschezza a pesce, patate e insalate.',
      moistureNotes:
        "Mantieni il terreno leggermente umido. L'aneto non ama asciugarsi ma è anche soggetto al marciume radicale se allagato. Annaffia quando il primo centimetro di terreno si asciuga.",
      lightNotes:
        "Ha bisogno di pieno sole — 6+ ore al giorno. Un davanzale esposto a sud è l'ideale. Con poca luce diventa alto, allungato e perde il sapore.",
      waterTips:
        "Non è sensibile alla qualità dell'acqua. L'acqua del rubinetto va bene. Annaffia alla base per mantenere asciutto il fogliame piumoso.",
      commonProblems: [
        'Fioritura precoce → normale con il caldo o le giornate lunghe; le varietà resistenti alla bolting aiutano',
        "Foglie inferiori ingiallite → naturale con la maturazione della pianta, o eccesso d'acqua",
        'Pianta che si piega → luce insufficiente causa crescita allungata; serve tutore o più sole',
        "Scarsa germinazione → l'aneto non ama essere trapiantato; semina direttamente nel vaso definitivo",
      ],
    },
    mint: {
      name: 'Menta',
      description:
        'Erba vigorosa e diffusiva con un sapore fresco e rinfrescante. Cresce rapidamente e può essere raccolta più volte durante la stagione. È meglio tenerla in un vaso separato.',
      moistureNotes:
        'Preferisce il terreno costantemente umido. Non lasciarla asciugare completamente — la menta appassisce velocemente e si riprende lentamente. Controlla ogni giorno o due in estate. Non lasciare mai in acqua stagnante.',
      lightNotes:
        "Tollera la penombra meglio della maggior parte delle erbe. La luce indiretta brillante o qualche ora di sole diretto è l'ideale in casa. Troppo sole diretto può scottare le foglie.",
      waterTips:
        "Non è sensibile alla durezza dell'acqua. L'acqua del rubinetto va benissimo. La menta apprezza annaffiature regolari e mostra stress rapidamente se trascurata.",
      commonProblems: [
        'Ruggine (macchie arancioni) → malattia fungina; rimuovi le foglie colpite e migliora la circolazione',
        'Crescita allungata e pallida → luce insufficiente',
        'Appassimento rapido → terreno asciutto; annaffia subito, di solito si riprende',
        'Diffusione invasiva → coltiva sempre in un vaso contenuto separato',
      ],
    },
    oregano: {
      name: 'Origano',
      description:
        "L'erba definitiva della cucina italiana e mediterranea. Rustica e resistente alla siccità. Il sapore è più intenso quando coltivata in pieno sole con un terreno povero e asciutto.",
      moistureNotes:
        "Lascia asciugare completamente il terreno tra le annaffiature. L'origano è resistente alla siccità e sta molto meglio leggermente asciutto che bagnato. Riduci le annaffiature in inverno quasi completamente.",
      lightNotes:
        "Ha bisogno di pieno sole — almeno 6 ore al giorno. Più sole c'è, più il sapore è intenso. Una finestra luminosa esposta a sud funziona bene in casa.",
      waterTips:
        "Molto tollerante a qualsiasi tipo d'acqua. L'acqua del rubinetto, dura o dolce, va bene. Il drenaggio è il fattore chiave, non la qualità dell'acqua.",
      commonProblems: [
        "Marciume radicale → eccesso d'acqua; pianta in substrato sabbioso e ben drenante",
        'Perdita di sapore → sole insufficiente; sposta in una posizione più luminosa',
        "Steli legnosi e spogli → normale con l'età; pota energicamente in primavera",
        "Oidio → scarsa circolazione d'aria; distanzia le piante ed evita di bagnare le foglie",
      ],
    },
    sage: {
      name: 'Salvia',
      description:
        'Erba aromatica dalla foglia morbida con un caratteristico sapore terroso e pepato. Fondamentale nella cucina italiana, particolarmente con pasta e secondi di carne.',
      moistureNotes:
        'Lascia asciugare la metà superiore del terreno prima di annaffiare. La salvia è resistente alla siccità e non ama il terreno fradicio. Annaffia abbondantemente poi aspetta. Riduci le annaffiature in inverno.',
      lightNotes:
        'Ha bisogno di pieno sole — 6+ ore al giorno. Su un luminoso davanzale esposto a sud produrrà le foglie più saporite e aromatiche. La poca luce indebolisce la pianta e riduce il sapore.',
      waterTips:
        "Non è sensibile alla qualità dell'acqua. L'acqua del rubinetto va bene. Evita l'annaffiatura dall'alto poiché le foglie bagnate favoriscono la muffa sulla salvia.",
      commonProblems: [
        "Marciume radicale → eccesso d'acqua o terreno compatto con scarso drenaggio",
        "Oidio → foglie bagnate o scarsa circolazione d'aria",
        'Crescita legnosa e rada → pota in primavera per mantenere la pianta compatta e produttiva',
        "Foglie gialle → eccesso d'acqua o terreno povero di nutrienti",
      ],
    },
  },
  settings: {
    title: 'Impostazioni',
    subtitle: "Preferenze e info sull'app",
    section_general: 'Generale',
    section_data: 'Dati',
    section_about: 'Informazioni',
    language: 'Lingua',
    app_name: 'App',
    version: 'Versione',
    export_title: 'Esporta le mie piante',
    export_desc: 'Scarica un backup di tutte le tue piante e i log di cura.',
    export_btn: 'Esporta JSON',
    import_title: 'Importa piante',
    import_desc: 'Ripristina le piante da un file di backup esportato in precedenza.',
    import_btn: 'Scegli file…',
    import_success: 'Importazione riuscita — {count} piante caricate.',
    import_error: 'File non valido. Assicurati che sia un backup di Plant Care.',
    import_confirm: 'Questo sostituirà tutte le piante attuali. Continuare?',
  },
}
