export default {
  nav: {
    plants: 'My Plants',
    catalog: 'Catalog',
    water: 'Water',
    settings: 'Settings',
  },
  home: {
    time_morning: 'morning',
    time_afternoon: 'afternoon',
    time_evening: 'evening',
    greeting: 'Good {time},',
    title: 'Your Plants',
    empty_title: 'No plants yet',
    empty_body: 'Add your first plant and start tracking its care.',
    add_plant: 'Add a plant',
    add_plant_hint: 'Track a new plant in your collection',
  },
  add: {
    title: 'Add a plant',
    plant_type: 'Plant type',
    required_hint: '*',
    nickname: 'Nickname',
    nickname_placeholder: 'e.g. Living room Monstera',
    location: 'Location',
    location_placeholder: 'e.g. Living room window sill',
    notes: 'Notes',
    notes_placeholder: 'Any extra info about this plant…',
    submit: 'Add plant',
    error_species: 'Please select a plant type',
    error_nickname: 'Please enter a nickname',
    search_species_placeholder: 'Search a plant…',
    search_species_no_results: 'No plants found',
  },
  difficulty: {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
  },
  subcategory: {
    tropical: 'Tropical',
    succulent: 'Succulent',
    palm: 'Palm',
    orchid: 'Orchid',
    herb: 'Herb',
    tree: 'Tree',
  },
  light: {
    low: 'Low light',
    indirect: 'Indirect',
    'bright-indirect': 'Bright indirect',
    direct: 'Direct sun',
  },
  moisture: {
    dry: 'Dry',
    'slightly-dry': 'Slightly dry',
    moist: 'Moist',
    wet: 'Wet',
    waterlogged: 'Waterlogged',
  },
  hardness: {
    'soft-only': 'Soft only',
    'soft-preferred': 'Soft preferred',
    tolerant: 'Tolerant',
    any: 'Any water',
    tooltip_soft_only: 'Requires soft/filtered water. Tap water in Rimini will damage this plant',
    tooltip_soft_preferred: 'Prefers soft water. Rimini tap water may cause brown tips over time',
    tooltip_tolerant: 'Can handle moderately hard water. Rimini tap water is manageable',
    tooltip_any: 'Tolerates any water including hard Rimini tap water',
  },
  catalog: {
    title: 'Plant Catalog',
    subtitle: '{count} common leafy houseplants',
    subtitle_filtered: '{shown} of {total} plants',
    watering: 'Watering',
    light: 'Light',
    temperature: 'Temperature',
    ideal_moisture: 'Ideal moisture',
    every_days: 'Every {min}–{max} days',
    water_hardness: 'Water hardness',
    rimini_tip: 'Rimini water tip',
    search_placeholder: 'Search by name or species…',
    filters: 'Filters',
    filter_difficulty: 'Level',
    filter_water: 'Water',
    filter_pets: 'Pets',
    filter_safe_cats: 'Safe for cats',
    filter_safe_dogs: 'Safe for dogs',
    filter_category: 'Category',
    filter_category_ornamental: 'Ornamental',
    filter_category_culinary: 'Culinary',
    filter_subcategory: 'Type',
    clear_filters: 'Clear filters',
    no_results: 'No plants match the selected filters.',
    add_to_plants: 'Add to my plants',
    cats: 'Cats',
    dogs: 'Dogs',
    safe: 'Safe',
    toxic: 'Toxic',
    safe_label: 'Non-toxic',
    toxic_label: 'Toxic: keep away',
  },
  detail: {
    log_moisture: 'Log moisture',
    mark_watered: 'Mark watered',
    current_status: 'Current status',
    soil_moisture: 'Soil moisture',
    not_logged: 'Not logged yet',
    next_watering: 'Next watering (est.)',
    not_enough_data: 'Not enough data',
    last_watered: 'Last watered',
    location: 'Location',
    watering_section: 'Watering',
    every_days: 'Every {min}–{max} days',
    water_quality: 'Water quality',
    water_tolerance_label: 'This plant tolerates',
    water_warning_title: 'Your tap water may stress this plant',
    water_warning_sub: 'Use softer alternatives when possible',
    water_ok_title: 'Your tap water is fine for this plant',
    water_ok_sub: 'No special preparation needed',
    water_opt_rainwater: 'Rainwater',
    water_opt_distilled: 'Distilled / RO',
    water_opt_filtered: 'Filtered',
    water_opt_tap: 'Tap water',
    water_opt_hard_tap: 'Cold tap (straight)',
    water_tip_soft_only:
      '{city} tap water is too hard for this plant. Use rainwater or distilled water.',
    water_tip_soft_preferred:
      '{city} tap water may cause browning over time. Filtered or rainwater is better.',
    water_tip_tolerant:
      '{city} tap water is borderline for this plant. Letting it rest overnight helps.',
    water_warning:
      'Your tap water ({city}) may be too hard for this plant. Consider using filtered or rainwater.',
    your_tap: 'your tap',
    light_section: 'Light',
    problems_section: 'Common problems',
    history_section: 'Moisture history',
    watering_history_section: 'Watering history',
    no_data_period: 'No data for this period',
    watering_total: '{n} waterings',
    watering_avg: 'Avg every {n} days',
    remove: 'Remove plant',
    not_found: 'Plant not found.',
    confirm_delete: 'Remove "{name}"?',
    delete_title: 'Remove "{name}"?',
    delete_body:
      'All watering logs, moisture records and care data for this plant will be permanently deleted.',
    cancel: 'Cancel',
    days_ago: '{days}d ago',
  },
  plant_card: {
    water_due: 'Water now',
    water_in: 'Water in {days}d',
  },
  moisture_log: {
    title: 'Log moisture for {name}',
    subtitle: 'Check the hygrometer probe and select the current soil moisture level.',
    note_placeholder: 'Optional note…',
    cancel: 'Cancel',
    save: 'Save',
    hints: {
      dry: 'Probe 0–20%',
      'slightly-dry': 'Probe 20–40%',
      moist: 'Probe 40–70%',
      wet: 'Probe 70–90%',
      waterlogged: 'Probe 90–100%',
    },
    hint_too_dry: 'Way below ideal, water now',
    hint_slightly_below: 'Just below ideal, good time to water',
    hint_ideal: 'Right at the ideal level for this plant',
    hint_slightly_above: 'Above ideal, wait before watering',
    hint_too_wet: 'Too wet for this plant, skip watering',
    hint_waterlogged: 'Check drainage, roots may be at risk',
  },
  watering_log: {
    title: 'Log watering for {name}',
    subtitle: 'Select the date you watered this plant.',
    date_label: 'Date watered',
    today: 'Today',
    yesterday: 'Yesterday',
    two_days_ago: '2 days ago',
    three_days_ago: '3 days ago',
    cancel: 'Cancel',
    save: 'Log watering',
  },
  water_guide: {
    title: 'Water Guide',
    subtitle: 'Tailored for your local tap water',
    rimini_title: 'Rimini Tap Water',
    rimini_source: 'Source: Adriatic coastal aquifer',
    very_hard: 'Very Hard',
    slightly_alkaline: 'Slightly alkaline',
    mineral_rich: 'Mineral-rich',
    rimini_desc:
      'Rimini tap water is <strong>very hard</strong>: among the hardest in Italy. This is great for drinking but can stress sensitive houseplants over time, causing white salt deposits on soil, brown leaf tips, and blocked root uptake.',
    which_water: 'Which water to use?',
    quick_reference: 'Quick reference by plant',
    tips_title: 'Practical tips for Rimini',
    tips_title_generic: 'Practical tips',
    tips_title_city: 'Practical tips for {city}',
    profile_card_title: 'Your Tap Water',
    profile_card_title_city: '{city} Tap Water',
    profile_setup_hint: 'Set to get tailored plant advice',
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel',
    hardness_level: 'Hardness level',
    advanced_label: 'Precise values (optional)',
    field_city: 'City / source',
    field_city_placeholder: 'e.g. Rimini, Milan…',
    select_city_db: 'or select a province from the database',
    select_city_placeholder: 'Search a province…',
    select_city_no_results: 'No provinces found',
    field_mgl: 'Hardness (mg/L CaCO₃)',
    field_mgl_placeholder: 'e.g. 400',
    field_ph: 'pH',
    field_ph_placeholder: 'e.g. 7.8',
    field_ca: 'Calcium (Ca²⁺ mg/L)',
    field_ca_placeholder: 'e.g. 108',
    field_mg: 'Magnesium (Mg²⁺ mg/L)',
    field_mg_placeholder: 'e.g. 36',
    ph_acidic: 'Slightly acidic',
    ph_neutral: 'Neutral',
    ph_alkaline: 'Slightly alkaline',
    levels: {
      'very-soft': 'Very soft',
      soft: 'Soft',
      'moderately-hard': 'Medium',
      hard: 'Hard',
      'very-hard': 'Very hard',
    },
    hardness_badge: {
      'very-soft': 'Very Soft',
      soft: 'Soft',
      'moderately-hard': 'Medium',
      hard: 'Hard',
      'very-hard': 'Very Hard',
    },
    mineral_label: {
      'very-soft': 'Low',
      soft: 'Low',
      'moderately-hard': 'Medium',
      hard: 'High',
      'very-hard': 'High',
    },
    mineral_sublabel: {
      'very-soft': 'Mineral-poor',
      soft: 'Low minerals',
      'moderately-hard': 'Medium minerals',
      hard: 'Mineral-rich',
      'very-hard': 'Mineral-rich',
    },
    level_desc: {
      'very-soft':
        'Your tap water is <strong>very soft</strong>: ideal for all plants including the most sensitive ones like Calathea and Fiddle-Leaf Fig. No special precautions needed; you can water directly with tap water.',
      soft: 'Your tap water is <strong>soft</strong>: great for all houseplants. Even sensitive species will thrive. Standard tap water is safe to use without any filtering.',
      'moderately-hard':
        "Your tap water is <strong>moderately hard</strong>: fine for most houseplants. Sensitive species like Calathea may benefit from filtered or rainwater over time, but it won't cause immediate harm.",
      hard: 'Your tap water is <strong>hard</strong>: it can stress sensitive plants over time, causing white deposits and brown leaf tips. Use filtered or rainwater for Calathea and Fiddle-Leaf Fig. Tolerant plants like Pothos and Snake Plant handle it well.',
      'very-hard':
        'Your tap water is <strong>very hard</strong>: among the hardest found anywhere. This is great for drinking but can stress sensitive houseplants over time, causing white salt deposits on soil, brown leaf tips, and blocked root uptake.',
    },
    tips: [
      '<strong>Collect rainwater</strong>: ideal, free, and plants love it. Keep a small container on the balcony.',
      '<strong>Filter tap water</strong>: a basic activated-carbon jug filter (e.g. Brita) removes chlorine and reduces hardness slightly.',
      '<strong>Let water rest overnight</strong>: leave tap water in an open container for 12–24h to let chlorine evaporate. Does NOT reduce hardness but helps sensitive plants.',
      '<strong>Use distilled or RO water</strong> for Calathea and Fiddle-Leaf Fig specifically. These two will suffer with {city} tap water.',
      '<strong>Flush the soil occasionally</strong>: pour plenty of water through the pot every few months to wash out salt/mineral buildup.',
      '<strong>Water at room temperature</strong>: cold water from the tap can shock tropical plants. Let it reach room temp first.',
    ],
    rating_best: 'Best',
    rating_excellent: 'Excellent',
    rating_essential: 'Essential',
    rating_good: 'Good',
    rating_fine: 'Fine',
    rating_acceptable: 'Acceptable',
    rating_sparingly: 'Use sparingly',
    rating_temp_risk: 'Mind temperature',
    rating_avoid: 'Avoid',
    options: [
      {
        name: 'Rainwater',
        title: 'Rainwater: Best',
        desc_soft:
          'Naturally soft and chlorine-free. The gold standard — though your tap is already great too.',
        desc_medium:
          'Naturally soft, free of minerals and chlorine. The gold standard for all plants. Collect from balcony or windowsill.',
        desc_hard:
          'Naturally soft, free of minerals and chlorine. The gold standard for all plants. Collect from balcony or windowsill.',
      },
      {
        name: 'Distilled / RO water',
        title: 'Distilled / RO water: Excellent',
        desc_soft:
          'Not needed for your water — your tap is already very low in minerals. Only worth it for the most demanding plants like Calathea.',
        desc_medium:
          'Good for sensitive plants like Calathea. Not required for tolerant species with your water level.',
        desc_hard:
          'Essential for Calathea and Fiddle-Leaf Fig. Your tap water (~{mgL} mg/L) will damage these plants without it. Available in 5L bottles.',
      },
      {
        name: 'Filtered tap water',
        title: 'Filtered tap water: Good',
        desc_soft:
          'Your water is already very soft — filtering adds no benefit for plants. Skip it.',
        desc_medium:
          'Removes chlorine and slightly reduces hardness. A good default for most plants, recommended for Calathea.',
        desc_hard:
          'Removes chlorine and softens water slightly. Better than straight tap for sensitive plants, but not enough for Calathea.',
      },
      {
        name: 'Tap water (rested)',
        title: 'Tap water (rested): Acceptable',
        desc_soft:
          'Your tap is already gentle. Resting overnight just removes chlorine — safe and fine for all plants.',
        desc_medium:
          'Leave in an open jug overnight to let chlorine evaporate. Safe for most plants including moderately sensitive ones.',
        desc_hard:
          'Reduces chlorine but NOT hardness. OK for tolerant plants (Pothos, Snake Plant). Avoid for Calathea and Fiddle-Leaf Fig.',
      },
      {
        name: 'Straight cold tap water',
        title: 'Straight cold tap water: Use sparingly',
        desc_soft:
          'Your water hardness is fine, but cold temperature can shock tropical plants. Let it reach room temp before watering.',
        desc_medium:
          'Moderate hardness is manageable, but cold temperature adds extra stress. Let it warm to room temp first.',
        desc_hard:
          'High hardness (~{mgL} mg/L) and cold temperature can both shock plants. Only for robust species, never as routine.',
      },
    ],
  },
  species: {
    'monstera-deliciosa': {
      name: 'Monstera',
      description:
        'The iconic split-leaf philodendron. One of the most popular leafy houseplants. Dramatic, fast-growing and forgiving.',
      moistureNotes:
        'Let the top 2–3 cm of soil dry out between waterings. Overwatering is the #1 killer. Roots rot quickly in soggy soil.',
      lightNotes:
        'Thrives in bright, indirect light. Can tolerate lower light but growth will slow. Avoid harsh direct sun which scorches leaves.',
      waterTips:
        'Can handle moderately hard water but will benefit from filtered or rainwater over time. In Rimini (very hard tap water ~400 mg/L) consider using filtered water or letting tap water sit overnight to dissipate chlorine.',
      commonProblems: [
        'Yellow leaves → overwatering or too much direct sun',
        'Brown leaf tips → low humidity or fluoride in hard water',
        'No splits in new leaves → insufficient light',
        'Root rot → waterlogged soil',
      ],
    },
    pothos: {
      name: 'Pothos',
      description:
        'Nearly indestructible trailing vine. Perfect for beginners. Tolerates neglect, low light and irregular watering.',
      moistureNotes:
        'Water when the top half of the soil is dry. Very drought tolerant. It is much better to underwater than overwater.',
      lightNotes:
        'Adapts to almost any light level, including low light. Golden variegation fades in very low light.',
      waterTips:
        'Very tolerant of hard water. Rimini tap water is fine, though the leaves may occasionally show white mineral spots. Wipe with a damp cloth.',
      commonProblems: [
        'Yellow leaves → overwatering or root bound',
        'Pale/washed-out leaves → too much direct sun',
        'Leggy, sparse growth → not enough light',
      ],
    },
    'fiddle-leaf-fig': {
      name: 'Fiddle-Leaf Fig',
      description:
        'Stunning large-leaved statement plant. Notoriously finicky. Hates being moved and is sensitive to drafts and temperature changes.',
      moistureNotes:
        'Keep soil evenly moist but never waterlogged. Water thoroughly then allow the top 2–3 cm to dry before watering again. Use a moisture meter. Do not guess.',
      lightNotes:
        'Needs bright, indirect light. Place near a window but out of harsh direct sun. Once you find its happy spot, do NOT move it.',
      waterTips:
        'Very sensitive to fluoride and salt buildup from hard water. Can cause brown spots and leaf drop. In Rimini, strongly recommended to use filtered or distilled water. At minimum, let tap water sit overnight.',
      commonProblems: [
        'Brown spots → root rot from overwatering, or fluoride toxicity from hard water',
        'Leaf drop → cold draft, moved location, or underwatering',
        'Brown edges → low humidity or hard water minerals',
        'Yellowing lower leaves → overwatering',
      ],
    },
    'peace-lily': {
      name: 'Peace Lily',
      description:
        'Elegant white-flowering plant that dramatically droops when thirsty. Making it a great self-watering-indicator.',
      moistureNotes:
        'Keep consistently moist but not soggy. The plant will visibly droop when it needs water. An unmistakable signal. Water immediately when you see this.',
      lightNotes:
        'One of the best plants for low light. Tolerates shade well. Bright indirect light encourages flowering.',
      waterTips:
        'Sensitive to chlorine and fluoride in hard water, which causes brown leaf tips. In Rimini, use filtered water or leave tap water out for 24 hours before use.',
      commonProblems: [
        'Brown tips → fluoride/chlorine from hard water, or low humidity',
        'Yellow leaves → overwatering or too much direct sun',
        'Drooping despite moist soil → root rot',
        'Not flowering → insufficient light',
      ],
    },
    'snake-plant': {
      name: 'Snake Plant',
      description:
        'Practically immortal succulent-like plant. Extremely drought tolerant and thrives on neglect. Perfect for beginners or forgetful owners.',
      moistureNotes:
        'Let the soil dry out COMPLETELY between waterings. Water very sparingly in winter (once a month is enough). Root rot from overwatering is almost the only way to kill this plant.',
      lightNotes:
        'Adapts to any light from low to bright indirect. Grows fastest in medium to bright light.',
      waterTips: 'Extremely tolerant of hard water. Rimini tap water is absolutely fine.',
      commonProblems: [
        'Mushy base → root rot from overwatering (most common problem)',
        'Wrinkling leaves → very severe underwatering (rare)',
        'Brown tips → inconsistent watering or very low humidity',
      ],
    },
    calathea: {
      name: 'Calathea',
      description:
        'Stunning patterned leaves that fold up at night. Beautiful but demanding. Very sensitive to water quality and humidity.',
      moistureNotes:
        'Keep soil consistently moist but never waterlogged. Very unforgiving of both under- and over-watering. Check moisture every 2–3 days.',
      lightNotes:
        'Prefers medium to bright indirect light. Never direct sun. It fades and scorches the decorative leaves.',
      waterTips:
        'Extremely sensitive to hard water, chlorine, and fluoride. Rimini tap water (very hard, ~400 mg/L) WILL cause brown crispy edges and leaf damage. Always use distilled or filtered water. Rainwater is ideal.',
      commonProblems: [
        'Crispy brown edges → hard water minerals, low humidity (keep above 50%)',
        'Yellow leaves → overwatering',
        'Curling leaves → underwatering or low humidity',
        'Fading pattern → too much light',
        'Leaves not moving → temperature too cold or plant stressed',
      ],
    },
    'rubber-plant': {
      name: 'Rubber Plant',
      description:
        'Bold, glossy-leaved tree that grows tall. One of the easier Ficus species. More forgiving than the fiddle-leaf fig.',
      moistureNotes:
        'Allow the top half of the soil to dry out between waterings. Wipe leaves with a damp cloth occasionally to keep them clean and photosynthesising well.',
      lightNotes:
        'Prefers bright indirect light. Variegated varieties need more light to maintain their coloring.',
      waterTips:
        'Fairly tolerant of hard water. In Rimini, you may notice occasional white mineral deposits on the pot rim. Wipe these off. Consider filtered water to keep leaf shine and avoid tip browning.',
      commonProblems: [
        'Yellow leaves → overwatering or sudden temperature change',
        'Leaf drop → drafts, cold, or moved location',
        'Brown spots → cold water shock or sunburn',
        'Leggy growth → insufficient light',
      ],
    },
    'spider-plant': {
      name: 'Spider Plant',
      description:
        'Cheerful arching plant that produces cascading "spiderettes". Extremely easy, adaptable and great for hanging baskets.',
      moistureNotes:
        'Water when the top 3–4 cm of soil is dry. Very forgiving of occasional missed waterings.',
      lightNotes:
        'Grows in any light from low to bright indirect. Bright indirect light produces the most vigorous spiderettes.',
      waterTips:
        'Somewhat sensitive to fluoride in hard water. Can cause brown tips. In Rimini, using filtered water will keep leaf tips green. However the plant will survive with tap water; just trim brown tips as they appear.',
      commonProblems: [
        'Brown tips → fluoride sensitivity from hard water (most common)',
        'Pale leaves → too much direct sun',
        'No spiderettes → needs to be slightly root-bound',
      ],
    },
    'aloe-vera': {
      name: 'Aloe Vera',
      description:
        'Succulent with thick, fleshy leaves filled with gel. One of the most forgiving houseplants. Tolerates neglect, drought and is practically indestructible.',
      moistureNotes:
        'Water deeply but infrequently. Let the soil dry out completely between waterings. In winter, once a month is enough. Overwatering is the main cause of death.',
      lightNotes:
        "Loves bright light and some direct sun. A south or west-facing windowsill is ideal. Survives lower light but won't thrive. Leaves will become pale and floppy.",
      waterTips:
        'Very tolerant of hard water. Rimini tap water is absolutely fine. The thick leaves buffer against mineral sensitivity.',
      commonProblems: [
        'Mushy leaves or brown base → overwatering or root rot',
        'Wrinkly leaves → severe underwatering (water immediately)',
        'Browning tips → too much direct sun or very dry air',
        'Pale, stretched plant → insufficient light',
      ],
    },
    'zz-plant': {
      name: 'ZZ Plant',
      description:
        'Glossy, dark-leaved beauty that thrives in almost any conditions. Stores water in thick rhizomes. Nearly impossible to kill from neglect.',
      moistureNotes:
        'Allow the soil to dry out completely between waterings. Water every 2–4 weeks in the growing season, monthly in winter. The rhizomes store water. Overwatering is the main risk.',
      lightNotes:
        'Adapts to very low light. Ideal for darker rooms and offices. Grows best in medium indirect light. Will tolerate even fluorescent-lit spaces.',
      waterTips: 'Unfazed by hard water. Rimini tap water is perfectly fine.',
      commonProblems: [
        'Yellow leaves → overwatering (most common issue)',
        'Dropping leaves → overwatering or sudden cold',
        'Leggy growth → insufficient light',
        'Slow growth → normal. This plant just grows slowly',
      ],
    },
    'weeping-fig': {
      name: 'Weeping Fig',
      description:
        "Classic tree with delicate, glossy leaves. Sheds leaves dramatically when stressed. Especially when moved. Once settled, it's elegant and long-lived.",
      moistureNotes:
        'Allow the top 2–3 cm of soil to dry between waterings. Consistent moisture is key. Both overwatering and underwatering cause leaf drop.',
      lightNotes:
        'Needs bright indirect light. South or west-facing windows are ideal. Avoid moving it. Even a small position change triggers leaf drop.',
      waterTips:
        'Tolerates hard water but does better with filtered water over time. In Rimini, flush the soil with plenty of water every few months to remove mineral buildup.',
      commonProblems: [
        'Sudden leaf drop → moved location, drafts, temperature change, or dry air',
        'Yellow leaves → overwatering or insufficient light',
        'Brown crispy leaves → underwatering or very dry air',
        'Scale insects → check stem nodes for small brown bumps',
      ],
    },
    'jade-plant': {
      name: 'Jade Plant',
      description:
        'Long-lived succulent tree with thick, fleshy leaves. Believed to bring good fortune. A staple in Italian homes for generations. Can live for decades.',
      moistureNotes:
        "Water thoroughly then allow the soil to dry out completely. In winter, reduce to once a month. Fat, plump leaves mean a happy plant. Wrinkled leaves mean it's thirsty.",
      lightNotes:
        'Prefers bright light with some direct sun. South-facing windows are ideal. Without enough light the stems become leggy and pale.',
      waterTips:
        'Tolerates hard water well. Rimini tap water is acceptable, though filtered water prevents white mineral deposits on the leaves.',
      commonProblems: [
        'Mushy stem or root rot → overwatering',
        'Wrinkled, shrivelled leaves → severe underwatering',
        'Leggy, pale growth → not enough light',
        'Leaf drop → sudden temperature change or overwatering',
      ],
    },
    'dragon-tree': {
      name: 'Dragon Tree',
      description:
        'Striking narrow-leaved tree with red-edged foliage. Low maintenance, dramatic, and one of the most popular Italian household plants for decades.',
      moistureNotes:
        'Water when the top half of the soil is dry. Do not overwater. The roots sit in pots for years and rot easily in soggy soil.',
      lightNotes:
        'Adapts to indirect to bright indirect light. Better leaf colouring in brighter light, but tolerates lower levels. Avoid harsh direct sun which scorches the narrow leaves.',
      waterTips:
        'Sensitive to fluoride and salt from hard water. Classic symptom is brown leaf tips. In Rimini, filtered or rainwater is recommended. At minimum, let tap water sit overnight.',
      commonProblems: [
        'Brown tips → fluoride toxicity from hard water (very common in Rimini)',
        'Yellow leaves → overwatering or root rot',
        'Leaf drop → cold draft or temperature below 15°C',
        'Pale leaves → not enough light',
      ],
    },
    'heartleaf-philodendron': {
      name: 'Heartleaf Philodendron',
      description:
        'Classic trailing or climbing plant with heart-shaped leaves. Fast-growing, unfussy, and perfect for shelves or hanging baskets. A close cousin of Pothos.',
      moistureNotes:
        'Water when the top 2–3 cm of soil are dry. Much more forgiving of underwatering than overwatering. Yellowing leaves are almost always a sign of too much water.',
      lightNotes:
        'Thrives in medium to bright indirect light. Tolerates lower light better than most but grows fastest in bright indirect. Etiolates in very low light.',
      waterTips:
        'Tolerates hard water well. Rimini tap water is fine. An occasional wipe of leaves with a damp cloth prevents mineral dust buildup.',
      commonProblems: [
        'Yellow leaves → overwatering or root rot',
        'Brown, crispy leaves → underwatering or very low humidity',
        'Leggy vines → not enough light',
        'Small new leaves → needs feeding or more light',
      ],
    },
    syngonium: {
      name: 'Arrowhead Plant',
      description:
        'Compact, fast-growing plant with arrow-shaped leaves that change as the plant matures. Climbs or trails gracefully. A versatile and popular Italian favourite.',
      moistureNotes:
        'Keep soil consistently moist but not waterlogged. Allow only the top centimetre to dry between waterings. Tolerates slightly drier conditions in winter.',
      lightNotes:
        'Does best in medium to bright indirect light. Tolerates low light but grows slowly. Variegated varieties need more light to keep their colour.',
      waterTips:
        'Fairly tolerant of hard water. Rimini tap water is acceptable, though filtered water maintains leaf colour better long-term.',
      commonProblems: [
        'Yellow leaves → overwatering',
        'Brown leaf edges → low humidity or fluoride in hard water',
        'Pale leaves → too much direct sun',
        'Leggy plant → not enough light',
      ],
    },
    dieffenbachia: {
      name: 'Dumb Cane',
      description:
        'Bold tropical plant with large patterned leaves. Very common in Italian homes and offices. Handle with gloves. The sap is irritating to skin and toxic if ingested.',
      moistureNotes:
        'Keep consistently moist, allowing only the top centimetre to dry out. Avoid soggy soil. Yellow lower leaves usually signal overwatering.',
      lightNotes:
        'Prefers medium to bright indirect light. Tolerates lower light but leaf patterns fade. Avoid direct sun which scorches leaves.',
      waterTips:
        'Tolerates moderately hard water. In Rimini, flush the soil every few months to remove mineral buildup that can cause tip browning.',
      commonProblems: [
        'Yellow lower leaves → overwatering or natural aging',
        'Brown leaf tips → dry air, hard water minerals, or drafts',
        'Drooping leaves → underwatering or root bound',
        'Pale, bleached leaves → too much direct sun',
      ],
    },
    aglaonema: {
      name: 'Chinese Evergreen',
      description:
        'Beautifully patterned leaves in green, silver, and red tones. One of the most adaptable houseplants. Tolerates low light, drought, and near-neglect.',
      moistureNotes:
        'Water when the top half of the soil is dry. Very tolerant of irregular watering. Avoid overwatering, especially in winter when growth slows.',
      lightNotes:
        'Excellent low-light plant. Green varieties thrive in near-shade; variegated and red varieties need brighter indirect light to maintain their colour.',
      waterTips:
        'Tolerates hard water well. Rimini tap water is fine. Wipe leaves occasionally to remove mineral dust and keep them glossy.',
      commonProblems: [
        'Yellow leaves → overwatering or root rot',
        'Brown leaf tips → dry air, cold drafts, or fluoride in water',
        'Fading colour → insufficient light (especially red varieties)',
        'Root rot → cold, wet soil in winter',
      ],
    },
    'kentia-palm': {
      name: 'Kentia Palm',
      description:
        'Elegant, slow-growing palm with graceful arching fronds. A timeless classic in Italian homes and hotels. One of the most tolerant palms for indoor growing.',
      moistureNotes:
        'Allow the top few centimetres of soil to dry between waterings. Water thoroughly but never leave in standing water. Yellowing fronds usually mean overwatering.',
      lightNotes:
        'Adapts to medium indirect light but grows best in bright indirect. Tolerates lower light well. Ideal for spaces away from windows. Avoid harsh direct sun.',
      waterTips:
        'Sensitive to fluoride and chlorine in hard water. Causes brown frond tips. In Rimini, filtered or rainwater is preferred. At minimum, let tap water sit overnight.',
      commonProblems: [
        'Brown frond tips → fluoride sensitivity, dry air, or inconsistent watering',
        'Yellow fronds → overwatering or root rot',
        'Brown lower fronds → natural aging. Remove cleanly at the base',
        'Very slow growth → normal for Kentia palms, be patient',
      ],
    },
    yucca: {
      name: 'Yucca',
      description:
        'Bold architectural plant with sword-like leaves on a chunky stem. Thrives in sunny spots with minimal care. One of the most drought-tolerant houseplants.',
      moistureNotes:
        'Allow the soil to dry out completely between waterings. Very drought tolerant. Water every 2–4 weeks in summer, even less in winter. Overwatering causes root rot.',
      lightNotes:
        'Loves bright light and direct sun. South or west-facing windows are ideal. Can handle less light but grows slowly and may look pale and droopy.',
      waterTips: 'Very tolerant of hard water. Rimini tap water is absolutely fine.',
      commonProblems: [
        'Brown tips → cosmetic from dry air. Trim with clean scissors',
        'Mushy stem or base → overwatering and root rot',
        'Yellow leaves → overwatering or natural drop of lower leaves',
        'Pale, drooping leaves → not enough light',
      ],
    },
    schefflera: {
      name: 'Umbrella Plant',
      description:
        'Glossy compound leaves that radiate like an umbrella. Fast-growing and forgiving. A classic Italian living room plant that can grow into an impressive tree.',
      moistureNotes:
        'Allow the top half of soil to dry between waterings. Hates waterlogged soil. Check with a finger before watering. When in doubt, wait another day.',
      lightNotes:
        'Best in bright indirect light. Tolerates medium light but growth slows and any variegation fades. Avoid harsh direct sun which scorches the leaves.',
      waterTips:
        'Tolerates hard water well. Rimini tap water is fine. Flush the soil occasionally to prevent salt buildup around the roots.',
      commonProblems: [
        'Leaf drop → overwatering, cold draft, or sudden position change',
        'Yellow leaves → overwatering or root rot',
        'Brown leaf edges → dry air or underwatering',
        'Pale, leggy growth → insufficient light',
      ],
    },
    anthurium: {
      name: 'Anthurium',
      description:
        'Stunning tropical plant with glossy heart-shaped flowers in red, pink, or white. Long-blooming and popular in Italian homes for its continuous colour.',
      moistureNotes:
        'Keep moist but not soggy. Allow only the top centimetre to dry between waterings. Anthuriums are sensitive to both over- and underwatering. Good drainage is essential.',
      lightNotes:
        'Bright indirect light produces the most flowers. Tolerates medium light. Avoid direct sun which bleaches and burns the waxy spathes.',
      waterTips:
        'Sensitive to salt and mineral buildup from hard water. Causes brown tips and weakens flowering. In Rimini, use filtered or rainwater and flush the soil every few months.',
      commonProblems: [
        'Brown leaf tips → hard water minerals, low humidity, or cold drafts',
        'Yellow leaves → overwatering or root rot',
        'No flowers → insufficient light or temperature too cold',
        'Green spathes → normal aging of older blooms',
      ],
    },
    tradescantia: {
      name: 'Tradescantia',
      description:
        'Fast-growing trailing plant with striking purple and silver striped leaves. Easy and rewarding. One of the most colourful and low-maintenance plants you can grow indoors.',
      moistureNotes:
        'Water when the top 2–3 cm of soil are dry. Fairly drought tolerant. Tolerates missed waterings. Overwatering causes root rot and mushy stems.',
      lightNotes:
        'Best colour in bright indirect light. Purple intensity fades in low light. Tolerates medium light. A little morning direct sun enhances the purple tones.',
      waterTips:
        'Tolerates hard water well. Rimini tap water is fine. The plant grows so fast that mineral sensitivity is rarely a visible issue.',
      commonProblems: [
        'Fading colour → insufficient light (needs bright indirect for best purple)',
        'Leggy, bare stems → normal. Trim regularly and propagate cuttings',
        'Mushy stems → overwatering',
        'Brown leaf tips → dry air or underwatering',
      ],
    },
    ceropegia: {
      name: 'String of Hearts',
      description:
        'Delicate trailing succulent with heart-shaped leaves patterned in silver and green. Grows fast, looks stunning in hanging pots, and is very easy to care for.',
      moistureNotes:
        'Allow the soil to dry out completely between waterings. Treat it like a succulent — it stores water in its tuberous roots and leaves. Overwatering is the main risk.',
      lightNotes:
        'Thrives in bright indirect light. Can tolerate a few hours of gentle direct sun which intensifies the silver leaf pattern. Avoid deep shade which causes sparse growth.',
      waterTips:
        'Very tolerant of tap water. Not fussy about water quality. In Rimini, tap water is fine to use directly. Water sparingly — less is more.',
      commonProblems: [
        'Yellow, mushy stems → overwatering or waterlogged soil',
        'Pale, washed-out leaves → too little light',
        'Sparse, widely spaced leaves → insufficient light or underwatering',
        'Shrivelled leaves → underwatering or very dry air',
      ],
    },
    pilea: {
      name: 'Chinese Money Plant',
      description:
        'Trendy round-leaved plant that produces "pups" at its base. Easy to grow and share. One of the most beloved and recognisable plants in Italian homes today.',
      moistureNotes:
        'Water when the top 2–3 cm of soil are dry. It droops slightly when thirsty then perks back up quickly. Never leave in standing water. Good drainage is essential.',
      lightNotes:
        'Needs bright indirect light. Rotate the pot weekly to prevent asymmetric leaning toward the light. Avoid direct sun which scorches the round leaves.',
      waterTips:
        'Somewhat sensitive to hard water minerals over time. Leaves may develop white spots. In Rimini, filtered or rainwater is preferred. Wipe leaves with a damp cloth to remove mineral dust.',
      commonProblems: [
        'Yellow leaves → overwatering or waterlogged soil',
        'Curling leaves → underwatering or too much sun',
        'White mineral spots on leaves → hard water deposits. Wipe with damp cloth',
        'Leaning heavily to one side → rotate pot regularly toward the light source',
      ],
    },
    strelitzia: {
      name: 'Bird of Paradise',
      description:
        'Bold tropical plant with large paddle-shaped leaves and iconic orange and blue flowers. Slow-growing but impressively dramatic. A statement piece for bright rooms.',
      moistureNotes:
        'Water thoroughly then allow the top 3–4 cm of soil to dry before watering again. Reduce watering in winter. Tolerates some drought but grows best with consistent moisture in summer.',
      lightNotes:
        'Needs as much light as possible — ideally a few hours of direct sun daily. A south or west-facing window is ideal. Insufficient light prevents flowering and slows growth significantly.',
      waterTips:
        'Tolerant of average tap water. Not particularly sensitive to water hardness. In Rimini, tap water is fine. Avoid waterlogging as root rot is the main concern.',
      commonProblems: [
        'Splitting leaves → normal outdoors from wind; indoors means very dry air or physical damage',
        'No flowers → insufficient light or pot too small (it blooms best when root-bound)',
        'Yellow leaves → overwatering or poor drainage',
        'Brown leaf edges → low humidity or fluoride in tap water',
      ],
    },
    'begonia-maculata': {
      name: 'Polka Dot Begonia',
      description:
        'Stunning cane begonia with olive-green leaves spotted in silver and deep red undersides. Highly sought after and surprisingly rewarding once you understand its needs.',
      moistureNotes:
        'Let the top 2–3 cm of soil dry out between waterings. Sensitive to both overwatering and drought. Do not let it sit in soggy soil — root rot develops quickly.',
      lightNotes:
        'Thrives in bright indirect light. Direct sun bleaches the leaves and burns the spots. A north-east or east-facing window is ideal. Good light keeps the silver spots vivid.',
      waterTips:
        'Prefers soft or filtered water. Hard water can cause brown leaf edges over time. In Rimini, use filtered or rainwater when possible. Avoid wetting the leaves — water at soil level to prevent mildew.',
      commonProblems: [
        'Brown leaf edges → hard water minerals, low humidity, or underwatering',
        'Powdery mildew → poor air circulation or wet leaves',
        'Leaf drop → sudden temperature change, cold draft, or overwatering',
        'Leggy growth → not enough light',
      ],
    },
    'begonia-ferox': {
      name: 'Fierce Begonia',
      description:
        'Rare collector begonia from China with dramatic dark green leaves covered in long cone-shaped teeth. A slow-growing showpiece that demands precise care and rewards patience.',
      moistureNotes:
        'Keep the soil consistently moist but never waterlogged. It hates drying out completely but also cannot tolerate standing water. Check every few days and water when the surface just starts to feel dry.',
      lightNotes:
        'Prefers medium to bright indirect light. Avoid direct sun which scorches the leaves. Consistent lighting without dramatic fluctuations is important for steady growth.',
      waterTips:
        'Sensitive to water quality. Soft or filtered water is strongly preferred. Hard tap water causes tip burn and browning over time. In Rimini, use filtered or rainwater. Never let cold water sit on the leaves.',
      commonProblems: [
        'Brown leaf tips → hard water, low humidity, or underwatering',
        'Stem rot → overwatering or poor drainage',
        'Slow or stunted growth → low light or incorrect watering',
        'Leaf crisping → very low humidity; place on a pebble tray with water',
      ],
    },
    phalaenopsis: {
      name: 'Moth Orchid',
      description:
        'The most popular orchid for homes. Produces long-lasting elegant blooms in white, pink, or purple. Easier than its reputation suggests once you understand its rhythm.',
      moistureNotes:
        'Water by soaking the pot for a few minutes then letting it drain completely. Water every 7–10 days in summer, every 14 days in winter. Never let roots sit in standing water. The roots should look green when moist and silvery-white when dry.',
      lightNotes:
        'Needs bright indirect light — no direct sun which scorches leaves. An east-facing window is ideal. Leaves should be a mid-green; dark green means too little light, yellowish means too much.',
      waterTips:
        'Sensitive to mineral salt buildup from hard water, which can damage roots and cause leaf spotting. In Rimini, filtered or rainwater is strongly recommended. Always use room-temperature water — never cold tap water directly.',
      commonProblems: [
        'No flowers → not enough light or temperature drop at night needed to trigger reblooming',
        'Yellow leaves → overwatering, too much sun, or root rot',
        'Shrivelled roots → underwatering or very low humidity',
        'White mineral crust on pot → salt buildup from hard water; flush with filtered water',
      ],
    },
    delosperma: {
      name: 'Delosperma',
      description:
        'Spreading succulent groundcover with bright daisy-like flowers in vivid pink, orange, or yellow. Thrives in full sun and very well-drained soil. Surprisingly frost-hardy.',
      moistureNotes:
        'Water sparingly — let the soil dry out completely between waterings. Extremely drought-tolerant. In pots, water even less frequently in winter. Overwatering is the only real risk.',
      lightNotes:
        'Needs full sun for at least 6 hours a day. More sun means more abundant flowering. Shade causes leggy growth and no flowers. A south-facing windowsill or sunny outdoor space is ideal.',
      waterTips:
        'Very tolerant of any water type. Hard tap water is fine. The key variable is drainage, not water quality — plant in sandy, well-draining cactus mix.',
      commonProblems: [
        'No flowers → insufficient sun',
        'Soft, rotting stems → overwatering or poor drainage; repot into dry, gritty substrate',
        'Pale, washed-out colour → too little light',
        'Leggy growth → needs more direct sun',
      ],
    },
    'carpobrotus-edulis': {
      name: 'Hottentot Fig',
      description:
        'Vigorous coastal succulent with thick triangular leaves and large showy yellow or magenta flowers. Extremely tough, salt-tolerant, and suited to harsh sunny conditions.',
      moistureNotes:
        'Very drought-tolerant. Water deeply and infrequently, letting the soil dry out completely. In pots indoors, water every 3–4 weeks in summer, once a month or less in winter.',
      lightNotes:
        'Needs maximum direct sun. In its natural habitat it grows on exposed coastal cliffs. Indoors it requires the sunniest spot available. Insufficient light completely prevents flowering.',
      waterTips:
        'Highly tolerant of hard water, salt, and minerals. Any water type is fine. Drainage and sun are the only variables that matter for this plant.',
      commonProblems: [
        'Rotting stems → overwatering, poor drainage, or too much shade',
        'No flowers → insufficient light',
        'Wrinkled leaves → excessive drought (though it tolerates significant dry spells)',
        'Invasive spreading outdoors → keep in pots outside its native range',
      ],
    },
    // ─── Culinary herbs ──────────────────────────────────────────────────────────
    basil: {
      name: 'Basil',
      description:
        'The quintessential Italian herb. Fragrant, fast-growing, and deeply rewarding on a sunny windowsill. Best used fresh throughout summer.',
      moistureNotes:
        'Keep the soil consistently moist but not waterlogged. Basil wilts dramatically when thirsty but recovers quickly after watering. Check daily in warm weather. Never let it dry out completely.',
      lightNotes:
        'Needs at least 6 hours of direct sun per day. A south-facing windowsill is ideal. Insufficient light causes pale, sparse, flavourless leaves.',
      waterTips:
        'Not sensitive to water quality. Tap water is fine. Water at the base, not the leaves, to prevent fungal issues. Avoid cold water straight from the tap.',
      commonProblems: [
        'Wilting despite moist soil → root rot from waterlogging; ensure good drainage',
        'Pale or yellow leaves → insufficient light',
        'Leaves turning black → cold damage or fungal disease from wet leaves',
        'Bolting (flowers forming) → pinch off flower buds to extend the harvest',
      ],
    },
    rosemary: {
      name: 'Rosemary',
      description:
        'Woody Mediterranean herb with needle-like leaves and a powerful aroma. Extremely drought-tolerant once established. Loves sun and good airflow.',
      moistureNotes:
        'Water deeply then allow the soil to dry out completely before watering again. Rosemary hates soggy soil — it is much easier to kill with too much water than too little. Reduce watering significantly in winter.',
      lightNotes:
        'Requires full direct sun — at least 6 hours per day. On a bright south-facing windowsill it will thrive. Insufficient light causes sparse, leggy growth and reduces fragrance.',
      waterTips:
        'Tolerant of tap water and water hardness. In Rimini, tap water is fine. The bigger risk is always overwatering, not water quality.',
      commonProblems: [
        'Brown, mushy stems → root rot from overwatering; repot into dry, gritty soil',
        'Grey powdery coating on leaves → powdery mildew from poor airflow',
        'Leaf drop → overwatering, cold draft, or transplant shock',
        'Sparse flavourless growth → not enough light',
      ],
    },
    parsley: {
      name: 'Parsley',
      description:
        'Versatile biennial herb used in Italian cooking. Both flat-leaf (Italian) and curly varieties are easy to grow on a bright windowsill.',
      moistureNotes:
        'Keep the soil evenly moist. Parsley does not like to dry out but equally dislikes waterlogging. Water when the top centimetre of soil feels dry. More frequent watering needed in warm weather.',
      lightNotes:
        'Grows best in bright indirect to some direct light — 4–6 hours per day. Can tolerate less light than most herbs but growth will be slower.',
      waterTips:
        'Not sensitive to water hardness. Tap water is fine. Water at the base to keep leaves dry and reduce the risk of fungal spots.',
      commonProblems: [
        'Yellowing leaves → overwatering, nutrient deficiency, or end of biennial cycle',
        'Slow germination → parsley is notoriously slow to germinate (3–4 weeks)',
        'Bolting → natural in heat or second year; harvest frequently to delay it',
        'Fungal spots on leaves → overhead watering; always water at the base',
      ],
    },
    thyme: {
      name: 'Thyme',
      description:
        'Low-growing woody herb with tiny fragrant leaves. One of the most drought-tolerant culinary herbs. Thrives outdoors but does well on a sunny windowsill too.',
      moistureNotes:
        'Allow the soil to dry out between waterings. Thyme is very drought-tolerant and prefers dry conditions. Overwatering is the main risk indoors.',
      lightNotes:
        'Needs full sun — at least 6 hours of direct light per day. A south-facing windowsill is ideal. Grows leggy and loses flavour in low light.',
      waterTips:
        'Not sensitive to water quality at all. Tap water is perfectly fine. Good drainage matters far more than water quality.',
      commonProblems: [
        'Woody, sparse growth → normal with age; prune regularly to encourage bushy growth',
        'Root rot → overwatering; thyme needs fast-draining soil',
        'Loss of fragrance → insufficient light',
        'Powdery mildew → poor airflow or overhead watering',
      ],
    },
    dill: {
      name: 'Dill',
      description:
        'Feathery annual herb with a distinctive anise-like flavour. Fast-growing and best harvested young. Adds a fresh flavour to fish, potatoes, and salads.',
      moistureNotes:
        'Keep the soil lightly moist. Dill does not like to dry out but is also prone to root rot if waterlogged. Water when the top 1–2 cm of soil feel dry.',
      lightNotes:
        'Needs full sun — 6+ hours per day. A south-facing windowsill is ideal. In low light it becomes tall, leggy, and loses its flavour.',
      waterTips:
        'Not sensitive to water quality. Tap water is fine. Water at the base to keep the feathery foliage dry.',
      commonProblems: [
        'Bolting → normal in heat or long days; bolt-resistant varieties help',
        'Yellowing lower leaves → natural as plant matures, or overwatering',
        'Falling over → insufficient light causing leggy growth; needs staking or more sun',
        'Poor germination → dill dislikes being transplanted; sow directly in final pot',
      ],
    },
    mint: {
      name: 'Mint',
      description:
        'Vigorous spreading herb with a refreshing cool flavour. Grows rapidly and can be harvested repeatedly throughout the season. Best contained in its own pot.',
      moistureNotes:
        'Likes consistently moist soil. Do not let it dry out completely — mint wilts quickly and recovers slowly. Check every day or two in summer. Never leave in standing water.',
      lightNotes:
        'Tolerates partial shade better than most herbs. Bright indirect light or a few hours of direct sun is ideal indoors. Too much direct sun can scorch the leaves.',
      waterTips:
        'Not sensitive to water hardness. Tap water is perfectly fine. Mint appreciates regular watering and will show stress quickly if neglected.',
      commonProblems: [
        'Rust (orange spots) → fungal disease; remove affected leaves and improve airflow',
        'Leggy, pale growth → not enough light',
        'Rapid wilting → dried out; water immediately and it usually recovers',
        'Invasive spreading → always grow in its own contained pot',
      ],
    },
    oregano: {
      name: 'Oregano',
      description:
        'The defining herb of Italian and Mediterranean cooking. Hardy and drought-tolerant. Flavour is most intense when grown in full sun with lean, dry soil.',
      moistureNotes:
        'Allow the soil to dry out fully between waterings. Oregano is drought-tolerant and does much better slightly dry than wet. Reduce watering in winter almost entirely.',
      lightNotes:
        'Needs full sun — at least 6 hours per day. The more sun, the more intense the flavour. A bright south-facing window works well indoors.',
      waterTips:
        'Very tolerant of any water type. Tap water, hard or soft, is fine. Good drainage is the key factor, not water quality.',
      commonProblems: [
        'Root rot → overwatering; plant in gritty well-draining soil',
        'Loss of flavour → insufficient sun; move to brighter location',
        'Woody, bare stems → normal with age; cut back hard in spring',
        'Powdery mildew → poor airflow; space plants well and avoid wetting leaves',
      ],
    },
    sage: {
      name: 'Sage',
      description:
        'Soft-leaved woody herb with a distinctive earthy, peppery flavour. A kitchen staple in Italian cooking, particularly with pasta and meat dishes.',
      moistureNotes:
        'Allow the top half of the soil to dry out before watering. Sage is drought-tolerant and dislikes soggy soil. Water thoroughly then wait. Reduce watering in winter.',
      lightNotes:
        'Needs full sun — 6+ hours per day. On a bright south-facing windowsill it will produce the most flavourful, aromatic leaves. Low light weakens the plant and reduces flavour.',
      waterTips:
        'Not sensitive to water quality. Tap water is fine. Avoid overhead watering as wet leaves can lead to mildew on sage.',
      commonProblems: [
        'Root rot → overwatering or compacted soil with poor drainage',
        'Powdery mildew → wet leaves or poor airflow',
        'Woody, sparse growth → prune in spring to keep compact and productive',
        'Yellow leaves → overwatering or nutrient-depleted soil',
      ],
    },
  },
  settings: {
    title: 'Settings',
    subtitle: 'Preferences & app info',
    section_general: 'General',
    section_data: 'Data',
    section_about: 'About',
    language: 'Language',
    app_name: 'App',
    version: 'Version',
    export_title: 'Export my plants',
    export_desc: 'Download a backup of all your plants and care logs.',
    export_btn: 'Export JSON',
    import_title: 'Import plants',
    import_desc: 'Restore plants from a previously exported backup file.',
    import_btn: 'Choose file…',
    import_success: 'Import successful — {count} plants loaded.',
    import_error: 'Invalid file. Make sure it is a Plant Care backup.',
    import_confirm: 'This will replace all your current plants. Continue?',
  },
}
