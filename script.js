// =======================
// 🌿 Plant Data
// =======================
const plants = [
  {
    name: "Areca Palm",
    scientific: "Chrysalidocarpus lutescens (syn. Dypsis lutescens)",
    type: "Evergreen ornamental palm",
    height: "6–12 meters",
    lifespan: "40–50 years",
    water: "High",
    desc: "The Areca Palm is a clump-forming tropical palm native to Madagascar. It is one of the most popular indoor plants worldwide due to its lush, feathery fronds and air-purifying qualities. The plant prefers bright indirect sunlight and regular watering but should not be overwatered. Indoors it is often used as a natural humidifier since it releases moisture into the air.",
    wiki: "https://en.m.wikipedia.org/wiki/Chrysalidocarpus_lutescens",
    video: "https://youtu.be/j7oFXUTRZR8?si=5T8APq2WsRXxBZWz",
    origin: "Madagascar"
  },
  {
    name: "Dumb Cane",
    scientific: "Dieffenbachia seguine",
    type: "Evergreen tropical perennial",
    height: "4–5 meters",
    lifespan: "5–10 years",
    water: "Medium",
    desc: "Dieffenbachia is a perennial herbaceous plant with a straight stem and simple, alternate leaves containing white spots and flecks, making it attractive as indoor foliage. It is popular as a houseplant because of its tolerance of shade. The English names dumb cane and mother-in-law's tongue refer to the poisoning effect of raphides, which can cause temporary inability to speak.",
    wiki: "https://en.wikipedia.org/wiki/Dieffenbachia",
    video: "https://youtu.be/kBjyKcwhMK8?si=Ivcnginp4duylq_l",
    origin: "Tropical America"
  },
  {
    name: "Night-flowering Jasmine",
    scientific: "Nyctanthes arbor-tristis",
    type: "Shrub",
    height: "3–10 meters",
    lifespan: "20–40 years",
    water: "Medium",
    desc: "Nyctanthes arbor-tristis is native to South and Southeast Asia. Commonly called night-blooming jasmine, tree of sadness, hengra bubar, or shiuli, it is not a true jasmine but belongs to the genus Nyctanthes.",
    wiki: "https://en.wikipedia.org/wiki/Nyctanthes_arbor-tristis",
    video: "https://youtu.be/IoSnV1yPiC0?si=3ErrUi6JXyvneh1r",
    origin: "South Asia, India, Nepal"
  },
  {
    name: "Headache Tree",
    scientific: "Premna serratifolia",
    type: "Shrub (medicinal plant)",
    height: "3–10 meters",
    lifespan: "20–30 years",
    water: "Medium",
    desc: "Premna serratifolia is a small tree or shrub from the mint family, used in Ayurveda as Agnimantha, one of the Dashamoola plants. Traditionally, its bark, leaves, and roots treat headaches, fever, digestive disorders, and asthma.",
    wiki: "https://en.wikipedia.org/wiki/Premna_serratifolia",
    video: "https://youtu.be/n0Cd_G5d97U?si=G73DkaMn6uWspxlV",
    origin: "Maharashtra, Karnataka, India"
  },
  {
    name: "Jamun - Java Plum",
    scientific: "Syzygium cumini",
    type: "Evergreen tropical fruit tree",
    height: "10–30 meters",
    lifespan: "50–100 years",
    water: "High",
    desc: "Native to the Indian subcontinent, Jamun produces purple-black fruits rich in vitamin C and is widely used in Ayurveda for controlling diabetes.",
    wiki: "https://en.wikipedia.org/wiki/Syzygium_cumini",
    video: "https://youtu.be/XlvnQ7qONpU?si=JwK0KL7OJnsqVLw9",
    origin: "Indian Subcontinent, India"
  },
  {
    name: "Mersawa Tree",
    scientific: "Anisoptera costata",
    type: "Tropical tree",
    height: "40–65 meters",
    lifespan: "60–200 years",
    water: "High",
    desc: "An endangered dipterocarp tree valued for its hardwood timber. Native to South and Southeast Asia, it plays a vital role in rainforest ecosystems.",
    wiki: "https://en.wikipedia.org/wiki/Anisoptera_costata",
    video: "https://youtu.be/R4TCC1nm02M?si=osSynRuup5Y9kvDY",
    origin: "Borneo, Malaysia"
  },
  {
    name: "Guava",
    scientific: "Psidium guajava",
    type: "Shrub",
    height: "3–10 meters",
    lifespan: "30–40 years",
    water: "Medium",
    desc: "Native to tropical America, Guava produces fruits rich in vitamin C and antioxidants. Its leaves are widely used in herbal medicine.",
    wiki: "https://en.wikipedia.org/wiki/Psidium_guajava",
    video: "https://youtu.be/3lZMgPILM_k?si=CmXZe0RTCx7XnVKL",
    origin: "Mexico, Central America"
  },
  {
    name: "Blackboard Tree",
    scientific: "Alstonia scholaris",
    type: "Tropical tree",
    height: "12–40 meters",
    lifespan: "50–100 years",
    water: "High",
    desc: "Native to South Asia, considered sacred in India. Its bark treats malaria and respiratory ailments. It produces fragrant flowers and latex.",
    wiki: "https://en.wikipedia.org/wiki/Alstonia_scholaris",
    video: "https://youtu.be/zFyWoYSCVvI?si=2NPL6vwJGEcV4_43",
    origin: "Assam, India"
  },
  {
    name: "Indian Almond - Tropical Almond",
    scientific: "Terminalia catappa",
    type: "Tropical tree",
    height: "15–35 meters",
    lifespan: "50–60 years",
    water: "High",
    desc: "A coastal tree with edible almond-like seeds. Its leaves are used in medicine and aquaculture. The tree is hardy and salt-tolerant.",
    wiki: "https://en.wikipedia.org/wiki/Terminalia_catappa",
    video: "https://youtu.be/Tsfymm8e7bI?si=ZmDlhktnVmzblvgr",
    origin: "Kerala, India"
  },
  {
  name: "African Nutmeg",
  scientific: "Monodora myristica",
  type: "Tropical tree",
  height: "18–35 meters",
  lifespan: "40–80 years",
  water: "High",
  desc: "Native to tropical Africa, its seeds are used as a spice similar to nutmeg. It is also used in medicine for treating headaches and digestive issues. Belongs to the Annonaceae family.",
  wiki: "https://en.wikipedia.org/wiki/Monodora_myristica",
  video: "https://youtu.be/HnPJp4b94V0?si=dWrlWVrJr5Agxl9v",
  origin: "West Africa, Nigeria"
},
{
  name: "Red Sanders",
  scientific: "Pterocarpus santalinus",
  type: "Deciduous tree",
  height: "8 meters",
  lifespan: "100–200 years",
  water: "High",
  desc: "Commonly known as Red Sandalwood or Raktachandan, native to the Southeastern Ghats of India. Valued for its deep red heartwood used in furniture, carvings, dyes, and medicine. Considered sacred, used in rituals, but endangered due to overexploitation. Protected by law.",
  wiki: "https://en.wikipedia.org/wiki/Pterocarpus_santalinus",
  video: "https://youtu.be/od_hfQYQVQc?si=QlcPgrtw4P-gnVNG",
  origin: "Andhra Pradesh, India"
},
{
  name: "Soapnut",
  scientific: "Sapindus mukorossi",
  type: "Deciduous tree",
  height: "10–20 meters",
  lifespan: "50–70 years",
  water: "Medium",
  desc: "Also called Reetha, native to the Indian subcontinent. Its fruits are rich in saponins, natural surfactants that lather in water, making them a traditional eco-friendly soap alternative. Used in Ayurveda as shampoo and cleanser. Antifungal, antibacterial, and anti-inflammatory properties.",
  wiki: "https://en.wikipedia.org/wiki/Sapindus_mukorossi",
  video: "https://youtu.be/-1f4AZKHoU4?si=62NXM3s8QUE2toAD",
  origin: "Uttarakhand, India"
},
{
  name: "Mango Tree",
  scientific: "Mangifera indica",
  type: "Fruit tree",
  height: "10–40 meters",
  lifespan: "100–300 years",
  water: "Very High",
  desc: "Native to South Asia, especially India and Myanmar. Known as the King of Fruits. Widely cultivated for sweet, juicy mangoes. Evergreen foliage provides shade and oxygen. Used in Ayurveda for various treatments. Economically and culturally important.",
  wiki: "https://en.wikipedia.org/wiki/Mangifera_indica",
  video: "https://youtu.be/Jwvua1c9thw?si=MnsPFDiIEC6nz45q",
  origin: "Meghalaya, India"
},
{
  name: "Chinese Ixora",
  scientific: "Ixora chinensis",
  type: "Shrub",
  height: "1–2 meters",
  lifespan: "15–20 years",
  water: "Medium",
  desc: "A small evergreen shrub native to Southern China and tropical Asia. Grown for its dense clusters of red, orange, or pink flowers that bloom year-round. Popular in gardens and hedges. In traditional medicine, used for treating diarrhea, fever, and skin infections.",
  wiki: "https://en.wikipedia.org/wiki/Ixora_chinensis",
  video: "https://youtu.be/YV3LGKRcEHQ?si=IGhlsykf8_c7EQQb",
  origin: "Southern China"
},
{
  name: "Thai Rosewood",
  scientific: "Sindora siamensis",
  type: "Deciduous tree (timber and medicinal)",
  height: "10–15 meters (up to 25 in favorable conditions)",
  lifespan: "80–120 years",
  water: "High",
  desc: "Native to Southeast Asia. Valued for its dense, durable hardwood used in furniture and construction. Bark and seeds are used in medicine for skin and digestive issues. Nitrogen-fixing, improves soil fertility. Holds cultural significance as a symbol of strength.",
  wiki: "https://en.wikipedia.org/wiki/Sindora_siamensis",
  video: "https://youtu.be/n6McapWk98g?si=OcsUi7y47GJv378-",
  origin: "Vietnam, Cambodia, Laos, Thailand"
},
{
  name: "Jackfruit Tree",
  scientific: "Artocarpus heterophyllus",
  type: "Evergreen fruit tree",
  height: "10–20 meters",
  lifespan: "60–100 years",
  water: "High",
  desc: "Produces the world’s largest edible fruit, up to 30–40 kg. Native to South and Southeast Asia. Flesh eaten fresh or cooked, unripe fruit used as vegetable or meat substitute. Highly nutritious. Wood is durable and used in furniture and instruments.",
  wiki: "https://en.wikipedia.org/wiki/Jackfruit",
  video: "https://youtu.be/jjugVvQrNC0?si=EhMgaNUpgK3PNIJX",
  origin: "Kerala, India"
},
{
  name: "Blue Porterweed",
  scientific: "Stachytarpheta jamaicensis",
  type: "Shrub",
  height: "0.5–1.5 meters",
  lifespan: "3–5 years",
  water: "Medium",
  desc: "A medicinal and ornamental plant native to the Caribbean and tropical Americas. Produces slender spikes of blue-purple flowers that attract butterflies and hummingbirds. Used in herbal medicine for fever, digestive issues, and inflammation.",
  wiki: "https://en.wikipedia.org/wiki/Stachytarpheta_jamaicensis",
  video: "https://youtu.be/LUkT1KwYgJg?si=SgXXuPqG4o2QA9kI",
  origin: "Caribbean, Jamaica"
},
{
  name: "Ashoka Tree",
  scientific: "Polyalthia longifolia",
  type: "Evergreen ornamental tree",
  height: "12–20 meters",
  lifespan: "40–60 years",
  water: "High",
  desc: "Often mistaken for the sacred Ashoka tree. Widely cultivated as an ornamental avenue tree due to its tall, narrow shape. Acts as a pollution and noise barrier. Produces greenish-yellow flowers and black drupes. Bark and leaves have medicinal uses.",
  wiki: "https://en.wikipedia.org/wiki/Monoon_longifolium",
  video: "https://youtu.be/X8QMGM001LI?si=LhAxelrwIyWPYISP",
  origin: "Odisha, India"
},
{
  name: "Crofton Weed",
  scientific: "Ageratina adenophora",
  type: "Shrub",
  height: "1–2 meters",
  lifespan: "1 year",
  water: "Medium",
  desc: "A fast-growing perennial shrub native to Mexico and Central America. Now an invasive weed in Asia, Africa, and Australia. Produces allelopathic chemicals that inhibit nearby plants. Toxic to grazing animals but has some medicinal potential.",
  wiki: "https://en.wikipedia.org/wiki/Ageratina_adenophora",
  video: "https://youtu.be/oWIpD38raOU?si=sv6JXtdR-AeeAVrR",
  origin: "Mexico, Central America"
},
{
  name: "Madagascar Dragon Tree",
  scientific: "Dracaena marginata",
  type: "Shrub",
  height: "2–5 meters",
  lifespan: "15–25 years",
  water: "High",
  desc: "Commonly called the Madagascar Dragon Tree, popular ornamental plant native to Madagascar. Slender upright stems with narrow green leaves edged with red or purple. Low-maintenance, drought-tolerant, purifies indoor air.",
  wiki: "https://en.wikipedia.org/wiki/Dracaena_reflexa#Dracaena_reflexa_var._angustifolia",
  video: "https://youtu.be/-cVp9gtdoM4?si=pUMqBlZrYsFobdAw",
  origin: "Madagascar"
},
{
  name: "Japanese Fern Tree",
  scientific: "Filicium decipiens",
  type: "Evergreen ornamental",
  height: "10–15 meters",
  lifespan: "40–60 years",
  water: "High",
  desc: "Attractive evergreen tree, native to India, Sri Lanka, and East Africa. Widely planted as ornamental and shade tree. Finely divided, fern-like foliage gives graceful appearance. Hardy, drought-resistant, low-maintenance.",
  wiki: "https://en.wikipedia.org/wiki/Filicium_decipiens",
  video: "https://youtu.be/G2KilDL_JZY?si=cFddNIET5uUgT0o2",
  origin: "Sri Lanka, India"
},
{
  name: "Ti Plant",
  scientific: "Cordyline fruticosa",
  type: "Shrub",
  height: "1–4 meters",
  lifespan: "15–20 years",
  water: "Medium",
  desc: "Tropical evergreen shrub with striking foliage in shades of green, red, purple, and pink. Native to Southeast Asia, Papua New Guinea, and Polynesia. Widely grown as ornamental indoors and outdoors. Considered sacred in Polynesian and Hawaiian culture.",
  wiki: "https://en.wikipedia.org/wiki/Cordyline_fruticosa",
  video: "https://youtu.be/lD8wOa2WJWE?si=JouT1nIHk_LfYzST",
  origin: "Polynesia, Southeast Asia"
},
{
  name: "Frangipani",
  scientific: "Plumeria obtusa",
  type: "Evergreen flowering tree",
  height: "3–10 meters",
  lifespan: "40–50 years",
  water: "Medium to High",
  desc: "Small evergreen tree native to the Caribbean and Central America. Highly fragrant white flowers with yellow centers. Drought-tolerant, retains leaves year-round. Used in religious offerings, garlands, perfumes. Popular ornamental in tropical/subtropical regions.",
  wiki: "https://en.wikipedia.org/wiki/Plumeria_obtusa",
  video: "https://youtu.be/MHfFjkEGTLw?si=YjlMv7RN2XoWgEnv",
  origin: "Caribbean, Central America"
},
{
  name: "Indian Laurel",
  scientific: "Ficus microcarpa",
  type: "Evergreen tree (shade & ornamental)",
  height: "10–25 meters",
  lifespan: "100–200 years",
  water: "Very High",
  desc: "Large evergreen tree native to Asia and the Pacific. Dense glossy foliage, aerial roots, broad canopy. Widely planted for shade and urban cooling. Tolerant of pruning. Sacred in parts of Asia. Roots prevent soil erosion but can damage pavements.",
  wiki: "https://en.wikipedia.org/wiki/Ficus_microcarpa",
  video: "https://youtu.be/ubHwCWkUyCE?si=pXD95bT6sXU1yONC",
  origin: "Tamil Nadu, India"
},
{
  name: "Weeping Bottlebrush",
  scientific: "Melaleuca viminalis (syn. Callistemon viminalis)",
  type: "Evergreen ornamental flowering tree/shrub",
  height: "4–10 meters",
  lifespan: "40–60 years",
  water: "Medium to High",
  desc: "Graceful small tree or large shrub native to Australia. Striking bright red, brush-like flowers attract birds, bees, and butterflies. Evergreen foliage and weeping branches make it excellent ornamental. Tolerates pruning, urban pollution, and various soils.",
  wiki: "https://en.wikipedia.org/wiki/Melaleuca_viminalis",
  video: "https://youtu.be/yEYHNKcaPTQ?si=Rwi1bmoz06ysmaNL",
  origin: "Queensland, Australia"
},
{
  name: "Ravenia",
  scientific: "Ravenia spectabilis",
  type: "Ornamental flowering shrub",
  height: "2–5 meters",
  lifespan: "20–30 years",
  water: "Medium",
  desc: "Ornamental shrub/small tree native to Central and South America. Clusters of vibrant pink to purple flowers. Hardy, tolerates variety of soils. Popular for hedges, borders, decorative planting. Mainly valued for aesthetic appeal.",
  wiki: "https://en.wikipedia.org/wiki/Ravenia_spectabilis",
  video: "https://youtu.be/gpsm5mNtbV4?si=XbsyiJxNGHF-oURT",
  origin: "Brazil, South America"
},
{
  name: "Mock Lemon",
  scientific: "Aglaia odorata",
  type: "Shrub",
  height: "2–5 meters",
  lifespan: "30–50 years",
  water: "Medium",
  desc: "Also called Chinese Perfume Plant, native to Southeast Asia and Southern China. Tiny yellow fragrant flowers with citrus-like scent. Grown as ornamental shrub, bonsai, and garden plant. Drought-tolerant once established. Occasionally used in traditional medicine.",
  wiki: "https://en.wikipedia.org/wiki/Aglaia_odorata",
  video: "https://youtu.be/1EC6v6ZIqp4?si=TrlBWL6CwUGREbnE",
  origin: "Southern China, Vietnam"
},
{
  name: "Spiral Ginger",
  scientific: "Chamaecostus",
  type: "Herbaceous perennial",
  height: "0.5–2 meters",
  lifespan: "1 year",
  water: "Medium",
  desc: "Small genus of perennial plants in the Costaceae family, related to gingers. Native to Central and South America. Known for spiral stems and lush foliage. Cultivated ornamentally and occasionally medicinally. Prefers warm, humid partial shade.",
  wiki: "https://en.wikipedia.org/wiki/Costaceae",
  video: "https://youtu.be/mxdVRx4sx9M?si=jTRhOKKr8PIT3Qy5",
  origin: "Brazil, Central America"
},
{
  name: "Golden Trumpet",
  scientific: "Allamanda cathartica",
  type: "Shrub",
  height: "2–6 meters",
  lifespan: "15–20 years",
  water: "Medium",
  desc: "Fast-growing evergreen climber native to Brazil. Large bright yellow trumpet-shaped flowers. Thrives in full sun, well-drained soil. Used to cover fences, trellises, garden walls. Contains toxic compounds; handle with care. Attracts pollinators.",
  wiki: "https://en.wikipedia.org/wiki/Allamanda_cathartica",
  video: "https://youtu.be/flfw-idxBmg?si=Y1CiZ0yneI55c6yr",
  origin: "Brazil, South America"
},
{
  name: "Fukien Tea Tree",
  scientific: "Ehretia microphylla",
  type: "Shrub",
  height: "2–4 meters",
  lifespan: "30–50 years",
  water: "Medium",
  desc: "Ornamental hedge plant popular in bonsai culture. Small leaves, gnarled bark, and year-round greenery. Produces small white flowers and red-to-black drupes attracting birds. Used in folk medicine for coughs, stomach ailments, and skin problems.",
  wiki: "https://en.wikipedia.org/wiki/Ehretia_microphylla",
  video: "https://youtu.be/7YSQL03Wbs0?si=8pUJUtT-mKaMTzRM",
  origin: "Fujian, China"
},
{
  name: "Copperleaf",
  scientific: "Acalypha wilkesiana",
  type: "Shrub",
  height: "2–3 meters",
  lifespan: "10–20 years",
  water: "Medium",
  desc: "Tropical evergreen shrub with colorful foliage in shades of copper, red, green, and bronze. Fast-growing, easy to propagate, responds well to pruning. Used as ornamental hedges, borders, or decorative accents. Also used in traditional medicine for skin conditions.",
  wiki: "https://en.wikipedia.org/wiki/Acalypha_wilkesiana",
  video: "https://youtu.be/ZqJ-YAqyYIw?si=bNRfL_RzbmjG95MX",
  origin: "Fiji, Pacific Islands"
},
{
  name: "Bamboo (subfamily)",
  scientific: "Bambusoideae",
  type: "Herbaceous",
  height: "Ranges widely — from 1 m dwarf varieties to over 30 m giant bamboos",
  lifespan: "50–120 years",
  water: "Very High",
  desc: "Subfamily of grasses including ~1,600 species. Fast-growing, some up to 1 m/day. Plays ecological role in soil stabilization, carbon sequestration, and habitat provision. Used for construction, furniture, paper, textiles, food, biofuel. Holds cultural and spiritual significance.",
  wiki: "https://en.wikipedia.org/wiki/Bamboo",
  video: "https://youtu.be/bGdMTIxU9Uc?si=FXXcFHbOXxXmORSP",
  origin: "Assam, India"
},
{
  name: "Banyan",
  scientific: "Ficus benghalensis",
  type: "Evergreen",
  height: "15–25 meters",
  lifespan: "200–500 years",
  water: "Very High",
  desc: "Iconic and sacred tree of India. Extensive aerial roots grow into new trunks. Symbol of immortality, wisdom, and shelter. Supports wildlife, prevents soil erosion. National tree of India, social gathering point in villages.",
  wiki: "https://en.wikipedia.org/wiki/Ficus_benghalensis",
  video: "https://youtu.be/WmeIKCVZAjE?si=7lgk4YfP2-Hqs5s1",
  origin: "West Bengal, India"
},
{
  name: "Traveller’s Tree",
  scientific: "Ravenala madagascariensis",
  type: "Evergreen ornamental",
  height: "7–10 meters",
  lifespan: "40–50 years",
  water: "Medium to High",
  desc: "Striking ornamental tree from Madagascar. Fan-shaped large leaves collect rainwater. Supports biodiversity for birds and insects. Dramatic architectural form popular in tropical landscaping.",
  wiki: "https://en.wikipedia.org/wiki/Ravenala_madagascariensis",
  video: "https://youtu.be/hkCYTM-iZ-8?si=gFbvWoPPiJh3Obq1",
  origin: "Madagascar"
},
{
  name: "Purple Joyweed",
  scientific: "Alternanthera brasiliana",
  type: "Shrub",
  height: "0.5–1.2 meters",
  lifespan: "1 year",
  water: "Medium",
  desc: "Colorful ornamental plant with purple-to-bronze foliage. Small clustered flowers. Used in folk medicine for anti-inflammatory and antimicrobial purposes. Popular for borders, ground cover, and decorative beds. Attracts pollinators.",
  wiki: "https://en.wikipedia.org/wiki/Alternanthera_brasiliana",
  video: "https://youtu.be/-1_ha-exNPg?si=fiAGOjjnKiXzR30W",
  origin: "Brazil, South America"
},
{
  name: "Chinese Croton",
  scientific: "Excoecaria cochinchinensis",
  type: "Shrub",
  height: "1–2 meters",
  lifespan: "1 year",
  water: "Medium",
  desc: "Colorful ornamental shrub with glossy green leaves and deep red-to-purple undersides. Native to Southeast Asia. Used in landscaping and folk medicine, though sap is toxic. Grown as hedge, border, or container plant.",
  wiki: "https://en.wikipedia.org/wiki/Excoecaria_cochinchinensis",
  video: "https://youtu.be/c6i8jtvqSx8?si=oRvB_yJ8mC-Ns8fD",
  origin: "Thailand, Southeast Asia"
},
{
  name: "Bengal Quince",
  scientific: "Aegle marmelos",
  type: "Deciduous tree",
  height: "8–12 meters",
  lifespan: "50–80 years",
  water: "High",
  desc: "Sacred and medicinal tree. Fruits, leaves, roots used in Ayurveda for digestive, respiratory ailments. Religious significance in Hinduism. Fruit edible fresh or in sherbet/preserves. Drought-tolerant.",
  wiki: "https://en.wikipedia.org/wiki/Aegle_marmelos",
  video: "https://youtu.be/zPekXjpFhDI?si=5mqaMMJ4BZk0xdqV",
  origin: "Bihar, India"
},
{
  name: "Mound Lily Yucca",
  scientific: "Yucca gloriosa",
  type: "Shrub",
  height: "1–3 meters",
  lifespan: "20–50 years",
  water: "Medium",
  desc: "Hardy, drought-resistant ornamental plant. Sword-shaped leaves, tall spikes of white flowers. Architectural form, tolerant of heat, wind, salt. Traditionally used for soap-making and fibers.",
  wiki: "https://en.wikipedia.org/wiki/Yucca_gloriosa",
  video: "https://youtu.be/zb5McUW8stU?si=fWVvafmeNDJZna9I",
  origin: "Southeastern United States, Florida"
},
{
  name: "Pine",
  scientific: "Pinus spp.",
  type: "Ornamental",
  height: "10–50 meters",
  lifespan: "100–1,000 years",
  water: "Very High",
  desc: "Evergreen conifers. Valued for timber, resin, ecological role. Stabilizes soils, provides habitat, acts as carbon sink. Needle-like leaves, woody cones. Symbolize longevity and resilience.",
  wiki: "https://en.wikipedia.org/wiki/Pine",
  video: "https://youtu.be/bQs7novlvtA?si=PSN924Kd_co5I8fC",
  origin: "Himachal Pradesh, India"
},
{
  name: "Mexican Calabash Tree",
  scientific: "Crescentia alata",
  type: "Small deciduous tree",
  height: "6–10 meters",
  lifespan: "30–50 years",
  water: "Medium to High",
  desc: "Produces hard spherical fruits used for bowls, containers, instruments. Medicinal uses for respiratory and digestive issues. Winged branches and gourd-like fruits. Resilient, culturally and ecologically important.",
  wiki: "https://en.wikipedia.org/wiki/Crescentia_alata",
  video: "https://youtu.be/9TnUgl4wvts?si=8O0oUbEXrdIDlFgt",
  origin: "Mexico, Central America"
},
{
  name: "Neem",
  scientific: "Azadirachta indica",
  type: "Evergreen tree",
  height: "15–20 meters",
  lifespan: "150–200 years",
  water: "High",
  desc: "Medicinal tree with antibacterial, antifungal, anti-inflammatory properties. Used for shade, timber, soil enrichment. Drought-tolerant, sacred in India. Supports biodiversity.",
  wiki: "https://en.wikipedia.org/wiki/Azadirachta_indica",
  video: "https://youtu.be/7f4Tt8Nfy4A?si=ShGhE_MkOFi7gAcI",
  origin: "Uttar Pradesh, India"
},
{
  name: "Sasa Bamboo",
  scientific: "Sasa spp.",
  type: "Dwarf bamboo",
  height: "0.3–3 meters",
  lifespan: "Varies",
  water: "Medium to High",
  desc: "Dense foliage for ground cover, erosion control, and ornamental planting. Some species have edible shoots and are used for weaving and handicrafts. Evergreen and fast-growing. Native to Japan, China, and Korea.",
  wiki: "https://en.wikipedia.org/wiki/Sasa_(plant)",
  video: "https://youtu.be/YsjzDRS4nyk",
  origin: "Japan, China, Korea"
},
{
  name: "Sea Grape",
  scientific: "Coccoloba uvifera",
  type: "Shrub",
  height: "3–10 meters",
  lifespan: "10–20 years",
  water: "Medium to High",
  desc: "Coastal plant tolerant of salt spray, sandy soils, winds. Produces grape-like edible fruits. Provides shade, aesthetic appeal, supports wildlife, stabilizes coastal ecosystems.",
  wiki: "https://en.wikipedia.org/wiki/Coccoloba_uvifera",
  video: "https://youtu.be/Ms1a6wj0zIw?si=re4MeLFkR6vDluG9",
  origin: "Florida, USA"
},
{
  name: "Mussaenda",
  scientific: "Mussaenda spp",
  type: "Shrub",
  height: "1–3 meters",
  lifespan: "10–20 years",
  water: "Medium",
  desc: "Flowering shrubs with large showy bracts in pink, red, yellow, or white. Decorative hedges, garden borders, potted ornamentals. Thrive in sunny, warm climates. Attract pollinators. Some species used in traditional medicine.",
  wiki: "https://en.wikipedia.org/wiki/Mussaenda",
  video: "https://youtu.be/-MOu1ujLnCY?si=rv979Ndba8YMXq2P",
  origin: "Karnataka, India"
},
{
  name: "Council Tree",
  scientific: "Ficus altissima",
  type: "Ornamental",
  height: "15–30 meters",
  lifespan: "100–200 years",
  water: "Very High",
  desc: "Ornamental and shade tree with broad canopy, aerial roots, glossy leaves. Supports biodiversity, drought-tolerant once established. Used in urban landscaping, parks, and gardens. Valuable ecologically and aesthetically.",
  wiki: "https://en.wikipedia.org/wiki/Ficus_altissima",
  video: "https://youtu.be/BWmx5BnKUx0?si=KCgafb9zOKJdLSFx",
  origin: "Assam, India"
},
{
  name: "Ixoroideae",
  scientific: "Ixoroideae",
  type: "Shrubs",
  height: "10–20 meters",
  lifespan: "Live decades",
  water: "High",
  desc: "Large subfamily in Rubiaceae (coffee family) with 4,000+ species. Tropical and subtropical evergreen plants, including Ixora and Coffea. Valued for flowers, fruits, medicinal properties. Bright blooms attract pollinators.",
  wiki: "https://en.wikipedia.org/wiki/Ixoroideae",
  video: "https://youtu.be/T-dKYvd0pOs?si=zLn94gqQL4LMe9Bj",
  origin: "Tamil Nadu, India"
},
{
  name: "Calathea",
  scientific: "Calathea spp. (family Marantaceae)",
  type: "Ornamental",
  height: "0.3–1 meters",
  lifespan: "2–5 years",
  water: "Medium",
  desc: "Tropical plants grown for strikingly patterned foliage. Leaves fold upward at night ('Prayer Plants'). Popular as indoor decorative plants. Thrive in warm, humid environments with indirect light. Help improve indoor air quality.",
  wiki: "https://en.wikipedia.org/wiki/Calathea",
  video: "https://youtu.be/WXxhf7M86iI?si=KRMsYzrpTwy54a-v",
  origin: "Brazil, South America"
},
{
  name: "Holy Basil",
  scientific: "Ocimum tenuiflorum",
  type: "Evergreen medicinal herb",
  height: "0.3–0.6 meters",
  lifespan: "1–2 years",
  water: "Medium",
  desc: "Sacred and medicinal plant native to Indian subcontinent. Aromatic leaves used in Ayurveda for respiratory, digestive, and immune conditions. Easy to grow, tolerates partial shade. Acts as natural air purifier, attracts bees.",
  wiki: "https://en.wikipedia.org/wiki/Ocimum_tenuiflorum",
  video: "https://youtu.be/-ZGjFGaQHoo?si=eIrhZ6U5EgHA8sE3",
  origin: "Uttar Pradesh, India"
},
{
  name: "Melampodium",
  scientific: "Melampodium spp. (family Asteraceae)",
  type: "Herb (ornamental)",
  height: "0.3–1 meters",
  lifespan: "2–3 years",
  water: "Medium",
  desc: "Flowering plants with bright yellow, daisy-like flowers. Easy to cultivate, bloom profusely. Used in garden beds, borders, containers. Attract pollinators. Minor traditional medicinal uses.",
  wiki: "https://en.wikipedia.org/wiki/Melampodium",
  video: "https://youtu.be/FtdvrqbsD6w?si=GbgjPt7Zw1woGaS9",
  origin: "Mexico, Central America"
}
];

// =======================
// 🌱 Quotes
// =======================
const quotes = [
  { text: "🌱 The clearest way into the Universe is through a forest wilderness.", author: "John Muir" },
  { text: "🌱 Plants give us oxygen for the lungs and for the soul.", author: "Linda Solegato" },
  { text: "🌱 To plant a garden is to believe in tomorrow.", author: "Audrey Hepburn" },
  { text: "🌱 A garden is a friend you can visit anytime.", author: "Gertrude Jekyll" },
  { text: "🌱 The love of gardening is a seed once sown that never dies.", author: "Lucy Larcom" },
  { text: "🌱 Nature does not hurry, yet everything is accomplished.", author: "Lao Tzu" },
  { text: "🌱 Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
  { text: "🌱 He who plants a tree plants hope.", author: "Greek proverb" },
  { text: "🌱 A society grows great when old men plant trees whose shade they know they shall never sit in.", author: "Unknown" },
  { text: "🌱 Even the tiniest seed can grow into a mighty tree.", author: "Gerard De Nerval" },
  { text: "🌱 Nature always wears the colors of the spirit.", author: "Ralph Waldo Emerson" },
  { text: "🌱 Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts.", author: "Rachel Carson" },
  { text: "🌱 A tree is known by its fruit; a man by his deeds.", author: "Edwin Curran" },
  { text: "🌱 Let your life lightly dance on the edges of time like dew on the tip of a leaf.", author: "Unknown" },
  { text: "🌱 Where flowers bloom so does hope.", author: "Lady Bird Johnson" },
  { text: "🌱 The creation of a thousand forests is in one acorn.", author: "Unknown" },
  { text: "🌱 The earth laughs in flowers.", author: "Ralph Waldo Emerson" },
  { text: "🌱 In every walk with nature one receives far more than he seeks.", author: "John Muir" },
  { text: "🌱 The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese proverb" },
  { text: "🌱 From tiny seeds grow mighty trees.", author: "Unknown" },
  { text: "🌱 If you have a garden and a library, you have everything you need.", author: "Marcus Tullius Cicero" },
  { text: "🌱 It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
  { text: "🌱 God has cared for these trees, saved them from drought, disease, avalanches, and a thousand tempests.", author: "Saint Basil" },
  { text: "🌱 Just living is not enough… one must have sunshine, freedom, and a little flower.", author: "Hans Christian Andersen" },
  { text: "🌱 Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "🌱 Every flower is a soul blossoming in nature.", author: "Saint Francis de Sales" },
  { text: "🌱 The earth has music for those who listen.", author: "Unknown" },
  { text: "🌱 Life begins the day you start a garden.", author: "Unknown" },
  { text: "🌱 Trees are poems that the earth writes upon the sky.", author: "Khalil Gibran" }

  // Add more quotes here
];

// =======================
// Search by text
// =======================
function searchPlant() {
  const term = document.getElementById("searchBar").value.toLowerCase().trim();
  const result = plants.find(p => p.name.toLowerCase().includes(term));
  displayResult(result);
}

// =======================
// Search by dropdown
// =======================
function dropdownSearch(plantName) {
  if (!plantName) return;
  const result = plants.find(p => p.name === plantName);

  // Scroll to card if exists
  const cardEl = document.querySelector(`.card[data-name="${plantName}"]`);
  if (cardEl) cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

  displayResult(result);
}

// =======================
// Display plant in modal
// =======================
function displayResult(plant) {
  const modal = document.getElementById("plantModal");
  const body = document.getElementById("modalBody");
  body.innerHTML = "";

  if (!plant) {
    body.innerHTML = "<p>No plant found.</p>";
    modal.style.display = "block";
    return;
  }

  const card = document.createElement("div");
  card.innerHTML = `
    <img src="images/${plant.name}.jpg" alt="${plant.name}"
         onerror="this.onerror=null; this.src='images/${plant.name}.png'; this.onerror=null; this.src='images/${plant.name}.jpeg';">
    <h2>${plant.name}</h2>
    <p><em>${plant.scientific}</em></p>
    <p><strong>Type:</strong> ${plant.type}</p>
    <p><strong>Height:</strong> ${plant.height}</p>
    <p><strong>Lifespan:</strong> ${plant.lifespan}</p>
    <p><strong>Water Needs:</strong> ${plant.water}</p>
    <p>${plant.desc}</p>
    <p><strong>Origin:</strong> ${plant.origin}</p>
    <p>
      <a href="${plant.wiki}" target="_blank">Wikipedia</a> | 
      <a href="${plant.video}" target="_blank">Video</a>
    </p>
  `;
  body.appendChild(card);
  modal.style.display = "block";
}

// =======================
// Close modal
// =======================
function closeModal() {
  document.getElementById("plantModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("plantModal");
  if (event.target === modal) modal.style.display = "none";
};

// =======================
// Show random quote
// =======================
function newQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = `"${q.text}"`;
  document.getElementById("author").textContent = `- ${q.author}`;
}

// =======================
// Populate custom dropdown
// =======================
function populateDropdown() {
  const dropdownSelected = document.querySelector(".dropdown-selected");
  const dropdownOptions = document.getElementById("dropdownOptions");
  dropdownOptions.innerHTML = "";

  plants.forEach(p => {
    const opt = document.createElement("div");
    opt.className = "option";
    opt.textContent = p.name;
    opt.onclick = function() {
      dropdownSelected.textContent = p.name;
      dropdownOptions.style.display = "none";
      dropdownSearch(p.name);
    };
    dropdownOptions.appendChild(opt);
  });

  dropdownSelected.onclick = function() {
    dropdownOptions.style.display = dropdownOptions.style.display === "flex" ? "none" : "flex";
  };
}

// =======================
// On page load
// =======================
document.addEventListener("DOMContentLoaded", function() {
  newQuote();
  populateDropdown();
});
