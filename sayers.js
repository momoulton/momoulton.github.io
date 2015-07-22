var people = [];

var Person = function(name, node, options) {
      var me = this;
      this.name = name;
      this.node = node;
      this.options = options;
      Object.keys(options).forEach(function(key) {
        me[key] = options[key];
      });
      people.push(me);
    };

    cournosstuff = {blurb: "John Cournos was a Russian-born American writer who lived in London for a period. He probably met Sayers through the network of friends who lived at 44 Mecklenburgh Square, which was also briefly Sayers' address. Sayers and Cournos had a romantic relationship, which ended badly. They recounted the relationship in two separate novels, <i>Strong Poison</i> and <i>The Devil is an English Gentleman</i>. Cournos later married the American mystery writer Sybil Norton.", themes: ["romance"], places: ["London"], start_date: 1921, end_date: 1926, works: ["Strong Poison (DLS, 1930)", "The Devil is an English Gentleman (JC, 1932)", "Autobiography (JC, 1935)"]};
    cournos = new Person("John Cournos", "London", cournosstuff);

    jaegerstuff = {blurb: "Muriel or Jim Jaeger was a writer. She and Sayers attended Somerville College together and maintained a friendship after going down. They almost lived together in London, but decided against it due to the vagaries of employment in the early postwar period. Her first novel, <i>The Question Mark</i>, was in the socialist utopian tradition, an answer to the unrealistic psychology of writers such as Wells and Bellamy.", places: ["Somerville", "Oxford", "London"], start_date: 1913, works: ["The Question Mark (MJ, 1926)"], themes: ["women's education"]};
    jaeger = new Person("Muriel (Jim) Jaeger", "Somerville", jaegerstuff);

    chancestuff = {blurb: "Alice Chance Carleton was a physician who specialized in dermatology and taught at Oxford. She and Sayers were friends.", places: ["Oxford"], start_date: 1913, themes: ["women's education"]};
    chance = new Person("Alice Chance Carleton", "Oxford", chancestuff)

    whelptonstuff = {blurb: "Eric Whelpton was born in France to English parents and served in World War I. He met Sayers when she was working in Oxford. He arranged for her to come work with him at an international educational bureau based in France at L'Ecole des Roches. There, Sayers' romantic interest in Whelpton became apparent; it was, unfortunately, not reciprocated.", themes: ["romance"], start_date: 1917, end_date: 1921, works: ["The Making of a European (EW, 1974)"], places: ["Oxford", "L'Ecole des Roches, Normandy"]};
    whelpton = new Person("Eric Whelpton", "L'Ecole des Roches", whelptonstuff);

    flemingstuff = {blurb: "Atherton Mac Fleming was a journalist and gourmand. He and Sayers married in 1926.", places: ["London", "Kirkcudbright", "Witham"], themes: ["romance"], start_date: 1925, end_date: 1950, works: ["Five Red Herrings (1931, DLS)", "How to See the Battlefields (AF, 1919)"]};
    fleming = new Person("Atherton (Mac) Fleming", "London", flemingstuff);

    byrnestuff = {blurb: "Muriel St. Clare Byrne was a historian of the Tudor period. She and Sayers were lifelong friends and co-authored the play version of <i>Busman's Honeymoon</i>. She lived most of her life with Marjorie Barber.", places: ["Somerville", "London", "Oxford"], start_date: 1913, end_date: 1957, themes: ["women's education"], works: ["Busman's Honeymoon", "Elizabethan Life in Town and Country (MB, 1925)"]};
    byrne = new Person("Muriel St. Clare Byrne", "Somerville", byrnestuff);

    daveystuff = {blurb: "Norman Davey was a writer. He and Sayers were friends in London.", places: ["London"], start_date: 1921, works: ["The Pilgrim of a Smile (ND, 1921)"]};
    davey = new Person("Norman Davey", "London", daveystuff);

    brittainstuff = {blurb: "Vera Brittain met Sayers at Somerville College just before the war. They both attended the ceremony at which Oxford granted its first degrees to women, in October 1920. Brittain mentions Sayers several times in her celebrated memoir, <i>Testament of Youth</i>.", places: ["Somerville"], start_date: 1914, themes: ["women's education"], works: ["Testament of Youth (VB, 1933)"]};
    brittain = new Person("Vera Brittain", "Somerville", brittainstuff);

    fatherstuff = {blurb: "Rev. Henry Sayers, Dorothy Sayers' father, was a Church of England clergyman who had parishes at St. Mary's, Bluntisham, in Cambridgeshire and at Christchurch in the Fens. He was the headmaster of Christ Church Choir School, in Oxford, when Dorothy was born. He began teaching his daughter Latin when she was only six years old, and he was the model for the gentle Rev. Theodore Venables in <i>The Nine Tailors</i>.", places: ["Bluntisham"], start_date: 1893, end_date: 1928, works: ["The Nine Tailors (DLS, 1934)", "A Short Account of the Bells of St. Mary's Church, Bluntisham-cum-Earith (HS)"]};
    father = new Person("Henry Sayers", "family", fatherstuff);

    motherstuff = {blurb: "Helen (Leigh) Sayers was Dorothy Sayers' mother.", start_date: 1893, end_date: 1929, places: ["Bluntisham"]};
    mother = new Person("Helen (Leigh) Sayers", "family", motherstuff);

    pgfatherstuff = {blurb: "Rev. Robert Sayers was Dorothy Sayers' paternal grandfather."};
    pgfather = new Person("Robert Sayers", "family", pgfatherstuff);

    mgfatherstuff = {blurb: "Percival Leigh was Dorothy Sayers' maternal grandfather. He was a humorist, actor, and friend to novelists Dickens and Thackeray."};
    mgfather = new Person("Robert Sayers", "family", mgfatherstuff);

    mabelstuff = {blurb: "Mabel Leigh was Dorothy Sayers' aunt."};
    mabel = new Person("Mabel Leigh", "family", mabelstuff);

    gertstuff = {blurb: "Gertrude Sayers was Dorothy Sayers' aunt."};
    mabel = new Person("Gertrude Sayers", "family", gertstuff);

    henrystuff = {blurb: "Henry Leigh was Dorothy Sayers' uncle, her mother's brother."};
    henry = new Person("Henry Leigh", "family", henrystuff);

    maudstuff = {blurb: "Maud Leigh was Dorothy Sayers' aunt, Henry Leigh's wife."};
    maud = new Person("Maud Leigh", "family", maudstuff);

    osbornestuff = {blurb: "Betty Osborne and Dorothy Sayers were childhood friends.", places: ["Bluntisham"], start_date: 1897};
    osborne = new Person("Betty Osborne", "Bluntisham", osbornestuff);

    shrimptonstuff = {blurb: "Ivy Shrimpton was Dorothy Sayers's cousin. They were playmates and confidants as adolescents. Later, Ivy raised Dorothy's son, who was born out of wedlock in 1924.", places: ["Oxford"], start_date: 1893};
    shrimpton = new Person("Ivy Shrimpton", "family", shrimptonstuff);

    eleanorstuff = {blurb: "Eleanor Sayers was Dorothy Sayers' elderly cousin."};
    eleanor = new Person("Eleanor Sayers", "family", eleanorstuff);

    geraldstuff = {blurb: "Gerald Sayers was Dorothy Sayers' cousin. They were at Oxford together.", places: ["Oxford"]};
    gerald = new Person("Gerald Sayers", "family", geraldstuff);

    gdixeystuff = {blurb: "Giles Dixey, the son of family friends, was at Oxford with Dorothy Sayers.", places: ["Oxford"]};
    gdixey = new Person("Giles Dixey", "Oxford", gdixeystuff);

    fbrabantstuff = {blurb: "Frank Brabant, the son of family friends, was at Oxford with Dorothy Sayers.", places: ["Oxford"]};
    fbrabant = new Person("Frank Brabant", "Oxford", fbrabantstuff);

    godfreystuff = {blurb: "Catherine (Tony) Godfrey (later Mansfield) was at Somerville College with Dorothy Sayers. Sayers encouraged her writing and maintained a correspondence even after graduation, when both women became teachers for a time.", places: ["Somerville", "Oxford"], start_date: 1913, works: ["Somerville College, 1879-1921 (CG with Muriel St. Clare Byrne, 1922)"], themes: ["women's education"]};
    godfrey = new Person("Catherine (Tony) Godfrey", "Somerville", godfreystuff);

    chasestuff = {blurb: "Eleanor Chase was at the Godolphin School with Sayers.", places: ["Godolphin"], start_date: 1909};
    chase = new Person("Eleanor Chase", "Godolphin", chasestuff);

    hendersonstuff = {blurb: "Elsie Henderson was at Somerville College with Sayers. They travelled to France together in the summer of 1914, but their visit was cut short by the outbreak of war and Henderson's poor health.", places: ["Somerville", "Oxford"]};
    henderson = new Person("Elsie Henderson", "Somerville", hendersonstuff);

    hpastuff = {blurb: "Dr. Hugh Percy Allen, the conductor of the Oxford Bach Choir, was the object of a youthful infatuation for Sayers. She was self-deprecating about her passion, however, and even impersonated him in her Going-Down Play.", places: ["Oxford"], start_date: 1913, themes: ["romance"]};
    hpa = new Person("Hugh Percy Allen", "Oxford", hpastuff);

    forreststuff = {blurb: "A talented musician, Arthur Forrest was at Oxford with Sayers. He fought in World War I and was killed at Dardanelles.", start_date: 1913, end_date: 1915, places: ["Oxford"], themes: ["romance", "World War I"], works: ["\"Epitaph for a Young Musician,\" Op. I (DLS, 1916)"]};
    forrest = new Person("Arthur Forrest", "Oxford", forreststuff);

    middlemorestuff = {blurb: "Amphy Middlemore was at Somerville with Sayers.", start_date: 1913, places: ["Somerville", "Oxford"]};
    middlemore = new Person("Amphy Middlemore", "Somerville", middlemorestuff);

    rowestuff = {blurb: "Dorothy Rowe was at Somerville with Sayers.", places: ["Oxford", "Somerville"], start_date: 1913};
    rowe = new Person("Dorothy Rowe", "Somerville", rowestuff);

    barnettstuff = {blurb: "Charis Barnett (Frankenburg) was at Somerville with Sayers. Her brother Donald was killed in World War I.", places: ["Oxford", "Somerville"], start_date: 1913};
    barnett = new Person("Charis Barnett (Frankenburg)", "Somerville", barnettstuff);

    hodgsonstuff = {blurb: "Rev. Leonard Hodgson met Sayers through Basil Blackwell. He proposed marriage to her repeatedly, but was rebuffed.", themes: ["romance"], places: ["Oxford"], start_date: 1917, end_date: 1917};
    hodgson = new Person("Leonard Hodgson", "Oxford", hodgsonstuff);

    blackwellstuff = {blurb: "Basil Blackwell ran a small publishing house on Broad Street in Oxford. He took Sayers on as an apprentice in 1917, and she worked for him until 1919. He also published her work in various forms at this time.", places: ["Oxford"]};
    blackwell = new Person("Basil Blackwell", "Oxford", blackwellstuff);

    crichtonstuff = {blurb: "Charles Crichton was a teacher at L'Ecole des Roches. His tales of upper-class life and of his loyal batman Bates may have provided raw material for Lord Peter Wimsey and Bunter.", places: ["L'Ecole des Roches"]};
    crichton = new Person("Charles Crichton", "L'Ecole des Roches", crichtonstuff);

    wallacestuff = {blurb: "Doreen Wallace was at Somerville with Sayers. She, too, fell in love with Eric Whelpton.", places: ["Oxford", "Somerville"], start_date: 1913};
    wallace = new Person("Doreen Wallace", "Somerville", wallacestuff);

    holtbystuff = {blurb: "Winifred Holtby was one of the Somerville novelists. She was Vera Brittain's close friend but also, apparently, a member of the Mutual Admiration Society writing group founded in part by Sayers.", places: ["Somerville", "Oxford"]};
    holtby = new Person("Winifred Holtby", "Somerville", holtbystuff);

    barberstuff = {blurb: "Marjorie (Bar) Barber was at Somerville College. Later a lecturer in English, she was a friend of Sayers' and lived with Muriel St. Clare Byrne.", places: ["Oxford", "Somerville"]};
    barber = new Person("Marjorie (Bar) Barber", "Somerville", barberstuff);

    barrystuff = {blurb: "Florence (Jack) Barry was at Somerville with Sayers. She later got Sayers a temporary teaching position at Clapham High School.", places: ["Oxford", "Somerville", "London"] };
    barry = new Person("Florence (Jack) Barry", "Somerville", barrystuff);

    rdixeystuff = {blurb: "Roger Dixey was Giles' younger brother, the son of Sayers family friends. He served in World War I and suffered from shellshock.", places: ["Oxford"], themes: ["World War I"]};
    rdixey = new Person("Roger Dixey", "Oxford", rdixeystuff);

    camonsstuff = {blurb: "Adèle Camons was a servant at L'Ecole des Roches who became pregnant while unmarried. Sayers and Whelpton assisted her in finding a place to stay in Paris and in keeping the child.", places: ["L'Ecole des Roches"], start_date: 1919, end_date: 1920};
    camons = new Person("Adèle Camons", "L'Ecole des Roches", camonsstuff);

    squirestuff = {blurb: "Editor of the <i>London Mercury</i>, J.C. Squire published one of Sayers' poems and socialized with her.", start_date: 1920, places: ["London"]};

    cblackwellstuff = {blurb: "Christine Blackwell was Basil's wife; she became a friend of Sayers'.", places: ["Oxford"]};
    cblackwell = new Person("Christine Blackwell", "Oxford", cblackwellstuff);

    stokesstuff = {blurb: "Dorothy Scott Stokes was a friend in London.", places: ["London"]};
    stokes = new Person("Dorothy Scott Stokes", "London", stokesstuff);

    meyersteinstuff = {blurb: "E.H.W. Meyerstein was a poet. In June 1922, he visited Sayers at her flat and \"read me 2000 odd lines of a mediaeval poem, which took him till 1 a.m. - me sitting sewing and listening, and feeling that tight feeling coming on all over my face! Still, it was quite a jolly poem.\"", places: ["London"]};
    meyerstein = new Person("E.H.W. Meyerstein", "London", meyersteinstuff);

    dakersstuff = {blurb: "Andrew Dakers was Sayers' first agent, probably obtained through Cournos, whose agent he also was. He arranged the sale of the first Lord Peter books.", places: ["London"], start_date: 1921};
    dakers = new Person("Andrew Dakers", "London", dakersstuff);

    pendredstuff = {blurb: "Mrs. Pendred was a friend during the early 1920s.", places: ["London"]};
    pendred = new Person("Mrs. Pendred", "London", pendredstuff);

    whitestuff = {blurb: "Bill White was a motorcycle mechanic who introduced Sayers to the joys of riding motorbikes. They had a brief romantic relationship which resulted in Sayers' pregnancy.", start_date: 1922, end_date: 1925, places: ["London"], themes: ["romance"]};
    white = new Person("Bill White", "London", whitestuff);

    sonstuff = {blurb: "John Anthony (White) Fleming was Sayers' son, born in January 1924. He was raised by Ivy Shrimpton and adopted legally by Mac Fleming. Sayers paid for his upbringing and became increasingly involved in his life as he got older, though she never disclosed his existence to her parents. Fleming attended Oxford (Balliol College).", start_date: 1924, end_date: 1957};
    son = new Person("John Anthony Fleming", "family", sonstuff);


people.forEach(function(n) {
      var div = document.createElement('div');
      var display = n.name + ", " + n.node;
      if (typeof n.options["blurb"] !== "undefined") {
        display = display + "<br>" + "About: " + n.blurb;
      };
      if (typeof n.options["start_date"] !== "undefined") {
        display = display + "<br>" + "Start Date: " + n.start_date;
      };
      if (typeof n.options["end_date"] !== "undefined") {
        display = display + "<br>" + "End Date: " + n.end_date;
      };
      if (typeof n.options["places"] !== "undefined") {
        display = display + "<br>" + "Places: " + n.places;
      };
      if (typeof n.options["themes"] !== "undefined") {
        display = display + "<br>" + "Themes: " + n.themes;
      };
      if (typeof n.options["works"] !== "undefined") {
        display = display + "<br>" + "Related Works: " + n.works;
      };
      div.innerHTML = display + "<br> <br>";
      document.body.appendChild(div);
    })
