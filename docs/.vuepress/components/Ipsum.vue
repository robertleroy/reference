<script>
  /* npm i lorem-ipsum */
  import { loremIpsum  } from "lorem-ipsum"; 
  
  export default {
    directives: {
      copy: { /* vue2 = bind / vue3 = beforeMount */      
        bind: function (el,binding) {
          const copyToClipboard = function(e) {
            try {
              var elToCopy = el.nextElementSibling;
              var range = document.createRange();  
              range.selectNodeContents(elToCopy);  
              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range); 
              document.execCommand("copy");
              window.getSelection().removeAllRanges(); 
            } catch {
              console.log("error: an error occured");
            }
          }
          el.addEventListener("pointerdown", copyToClipboard);
        }
      }
    },
    data() {
      return {
        qty: 3,
        unit: 'Paragraphs',
        units: ['Paragraphs','Sentences','Words'],
        format: 'Plain',
        formats: ['Plain','Html'],
        sentencesPer: { max: 5, min: 3 },
        wordsPer: { max: 8, min: 4 },
        selectedIpsum: {},
        suffix: "\n\n",       
      }
    },
    computed: {
      ipsums() {
        return [
          { 
            name: "Lorem Ipsum", 
            value: [
              "a", "ab", "abducat", "abhorreant", "accusata", "ad", "adhuc", "adiungimus", "admirer", "admissum", "admodum", "afranius", "agatur", "ait", "albucius", "alia", "alia;", "alias", "alienae", "alios", "aliquid", "aliquos", "an", "andriam", "ante", "anteponant", "antiopam", "antipatrum", "antiquis", "appareat", "apte", "arare", "arbitrantur", "arbitrarer", "arbitrium", "aristotele", "aristotelem", "assentior", "athenis", "atilii", "audeam", "aut", "autem", "avocent", "beateque", "bene", "bonas", "breviter", "brute", "caecilii", "cedentem", "chremes", "chrysippo", "civibus", "coerceri", "cognitionem", "collaudata", "compositis", "consentinis", "constituant", "consumere", "contemnentes", "contemnere", "contra", "conversa", "conversam", "credo", "cum", "cur", "curiosi", "de", "defatigatio", "defensa", "delectamur", "delectari", "delectat", "delectet", "delicatissimi", "denique", "desiderent", "desistunt", "deterius", "deterret", "dicant", "dicat", "dicendum", "dicent", "dici", "dicta", "dictas", "dicunt", "difficile", "difficilem", "difficilius", "dignitatis", "diogenem", "displicet", "disputata", "dissentio", "divina", "docti", "doctrina", "dum", "e", "ea", "ego", "eisque", "elaboraret", "electis", "electram", "elegans", "enim", "ennii", "ennius", "eo", "eorum", "eos", "epicurei", "epicuro", "eram", "erant", "eruditi", "erunt", "esse", "esset", "est", "est;", "et", "etenim", "etiam", "etsi", "euripidis", "ex", "existimo", "explicari", "expressas", "exquisitaque", "fabellas", "fabulas", "fabulis", "facere", "facete", "faciam", "facio", "familiarem", "fastidii", "feci", "ferre", "ferreum", "fieri", "fodere", "fore", "fruenda", "fungimur", "futuros", "genus", "graeca", "graeci", "graecis", "graeco", "graecos", "graecum", "gratissimo", "gravissimis", "graviter", "habent", "haec", "has", "hic", "his", "hoc", "homero", "hominum", "horrida", "hortensio", "id", "idem", "igitur", "ignota", "ii", "iis", "illa", "ille", "illis", "illius", "illum", "in", "inciderint", "inciderit", "inculta", "incurreret", "indoctis", "industria", "industriae", "inertissimae", "infinitis", "ingenia", "ingeniis", "inhumanus", "inimicus", "iniucundus", "inliberali", "inquit", "interdictum", "interpretum", "inveneris", "investigandi", "invidus", "inviti", "ipso", "ipsos", "ipsum", "is", "isdem", "isti", "iudicare", "iudicium", "iustioribus", "labor", "laboramus", "labore", "latina", "latinas", "latine", "latinis", "lectorem", "legam", "legant", "legantur", "legat", "legendam", "legendi", "legendis", "legendos", "legendus", "legimus", "leguntur", "leviora", "liber", "libro", "litteras", "litteris", "locos", "lorem", "Lorem Ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lucilius", "lucilius:", "magis", "maior", "male", "malis", "malle", "mandaremus", "maxime", "me", "mea", "medeam", "mediocris", "mediocritatem", "mediocriterne", "meis", "meliore", "menandri", "menandro", "mererer", "mihi", "minime", "minus", "misisti", "mnesarchum", "moderatius", "modo", "modum", "modus", "movere", "multam", "multo", "multos", "munere", "nam", "ne", "nec", "negent", "nemorenihilo", "neque", "nescius", "nisi", "nobis", "nominavi", "nomini", "non", "nos", "noster", "nostra", "nostri", "nostris", "nostrum", "novum", "nulli", "num", "oderit", "offendit", "omnes", "omnino", "omnis", "operam", "opinor", "optime", "ordinem", "ornateque", "pacuvii", "paene", "panaetium", "paranda", "patrius", "persius", "personae", "perveniri", "philosophari", "philosophi", "philosophia", "philosophiae", "placeat", "placebit", "plane", "platone", "platonem", "plura", "poetae", "poetis", "ponendam", "posidonium", "posse", "possit", "postremo", "postulant", "potest", "potius", "praetermissum", "praetore", "primisque", "primum", "probamus", "probatus", "propemodum", "provocatus", "pulcherrimum", "putem", "putent", "puto", "quae", "quaedam", "quaerendi", "quaeritur", "quam", "quamquam", "quandam", "quem", "qui", "quibus", "quibusdam", "quid", "quidam", "quidem", "quis", "quo", "quod", "quodsi", "quorum", "quos", "quosdam", "ratione", "rebus", "recusabo", "reformidans", "reiciat", "remissius", "reprehendunt", "reprehensiones", "reprimique", "reque", "res", "responsum", "retinere", "romano", "rudem", "rutilius", "salutatus", "sapientia", "sapientiam", "satis", "scaevola", "scipio", "scribendi", "scribere", "scribimus", "scripserit", "scripta", "scriptorem", "scriptorem',", "scriptum", "se", "sed", "segnitiae", "semel", "sermo", "sermone", "si", "sic", "siculis", "sicut", "sin", "sint", "sit", "sive", "solet", "solum", "sophocles", "spernat", "splendide", "statuat", "stoicis", "studia", "studium", "summa", "summis", "sunt", "suscepi", "suspicor", "suum", "synephebos", "tam", "tamen", "tamque", "tantum", "tarentinis", "te", "temperantiam", "terentianus", "terentii", "theophrastus", "tibi", "timeam", "totum", "tractat", "tractatas", "tractatos", "tractavissent", "transferam", "transferrem", "tuemur", "tum", "turpis", "ullus", "urbanitas", "usu", "ut", "utamur", "utinam", "utramque", "varias", "vel", "velit", "venire;", "verbis", "verbum", "veri", "veritus", "vero", "verterem", "verterunt", "verum", "vicinum", "videbitur", "videntur", "viderer", "videretur", "virtute", "vituperata", "vituperatoribus", "vivendo", "vocent", "volunt", "vult",  
            ]
          },
          { 
            name: "Elvish Ipsum", 
            value: [
              "enna", "ada", "adab", "adan", "adel", "aduial", "ae", "aear", "aelin", "aglar", "aha", "aina", "Ainur", "Ainulindalë", "Aiwenórë", "alata", "alda", "Akallabêth", "alph", "alqua", "amar", "amarth", "ambar", "amon", "ampa", "anca", "ando", "anga", "anna", "annabon", "annon", "Anor", "anto", "ar", "aran", "aranel", "aras", "Arda", "arn", "asca", "ast", "asta", "astaldo", "athan", "avari", "band", "bar", "barad", "baran", "bein", "beleg", "Belegaer", "ben", "bereth", "bragol", "brethil", "brith", "cabed", "cabor", "caer", "calma", "cam", "canad", "caran", "Carnil", "celeb", "cennan", "cirith", "condir", "cor", "craban", "crann", "cugu", "dad", "dae", "dagnir", "dagor", "del", "din", "dol", "dor", "doron", "draug", "duin", "dun", "Eärendil", "ech", "edhel", "eithel", "Ekkaia", "Elda", "Eldar", "Elemmire", "elen", "Elrond", "emerwen", "en", "ened", "eneg", "ereb", "ereg", "erin", "ernil", "Eru", "eruanna", "esgal", "esse", "estel", "falas", "falf", "Fanyamar", "faroth", "faun", "feir", "fenn", "fin", "forod", "fuin", "galad", "galen", "‎Gondothlimbar", "gannel", "gaur", "glawar", "glin", "glor", "gloss", "gond", "goth", "grond", "gurth", "gwaith", "gweth", "hal", "harad", "hareth", "harma", "hathel", "haudh", "heir", "heledir", "heleg", "hen", "henneth", "heru", "herven", "herves", "heryn", "Helcaraxë", "him", "hir", "hiril", "hith", "hoth", "hwesta", "iaeth", "iant", "iaur", "idhrin", "Ilmen", "Ilúvatar", "im", "imlad", "Imladris", "ithil", "kemen", "laer", "lain", "lalaith", "lambe", "lanc", "lang", "lass", "laurina", "le", "lebed", "leben", "lenn", "lhach", "lhaw", "lim", "linnod", "lith", "loa", "lond", "lor", "lost", "loth", "luin", "Luinil", "Lúthien", "lyg", "mae", "maeg", "maethor", "Maiar", "malina", "man", "megil", "Melkor", "meleth", "mellon", "menel", "mereth", "mesc", "min", "minas", "mith", "mor", "Morgoth", "moth", "nai", "naith", "nan", "naneth", "nar", "narn", "nathron", "neder", "neled", "neleg", "nell", "nem", "nen", "neth", "nim", "ninn", "ninniach", "nogoth", "nor", "nu", "nuin", "nuquerna", "Númenor", "nwalme", "odog", "ohtar", "or", "orna", "orne", "orod", "orodben", "ost", "panas", "parma", "paur", "peich", "per", "perian", "pethron", "Quenya", "quesse", "raen", "ram", "rana", "ranc", "ras", "rath", "raw", "rhun", "riel", "ril", "rist", "roch", "rochben", "rochir", "rond", "ros", "ross", "ruin", "ruth", "salch", "sarn", "sein", "sereg", "sigil", "silme", "Silindo", "Silmarilli", "tad", "taer", "talagand", "talan", "tathar", "tavor", "tehta", "telu", "tengwa", "thalion", "thavron", "thoron", "tinc", "tol", "toloth", "torech", "tri", "tuilinn", "tumba", "tyuru", "ungol", "unque", "Ur", "Valar", "Valaquenta", "Valinor", "van", "vanwa", "Vingilote", "wen", "wilwarin", "wing", "yanta"
            ] 
          },
          {
            name: "Greek Ipsum",
            value: [
              "μῆνιν", "οὐλομένην", "πολλὰς", "ἡρώων", "5οἰωνοῖσί", "ἐξ", "Ἀτρεΐδης", "τίς", "Λητοῦς", "10νοῦσον", "οὕνεκα", "Ἀτρεΐδης", "λυσόμενός", "στέμματ", "15χρυσέῳ", "Ἀτρεΐδα", "Ἀτρεΐδαι", "ὑμῖν", "ἐκπέρσαι", "20παῖδα", "ἁζόμενοι", "ἔνθ", "αἰδεῖσθαί", "ἀλλ", "25ἀλλὰ", "μή", "ἢ", "μή", "τὴν", "30ἡμετέρῳ", "ἱστὸν", "ἀλλ", "ὣς", "βῆ", "35πολλὰ", "Ἀπόλλωνι", "κλῦθί", "Κίλλάν", "Σμινθεῦ", "40ἢ", "ταύρων", "τίσειαν", "ὣς", "βῆ", "45τόξ", "ἔκλαγξαν", "αὐτοῦ", "ἕζετ", "δεινὴ", "οὐρῆας", "αὐτὰρ", "βάλλ᾽:", "ἐννῆμαρ", "τῇ", "τῷ", "κήδετο", "οἳ", "τοῖσι", "Ἀτρεΐδη", "60ἂψ", "εἰ", "ἀλλ", "ἢ", "ὅς", "65εἴτ", "αἴ", "βούλεται", "ἤτοι", "Κάλχας", "70ὃς", "καὶ", "ἣν", "ὅ", "ὦ", "75μῆνιν", "τοὶ", "ἦ", "ἦ", "Ἀργείων", "80κρείσσων", "εἴ", "ἀλλά", "ἐν", "τὸν", "‘85θαρσήσας", "οὐ", "εὐχόμενος", "οὔ", "σοὶ", "0συμπάντων", "ὃς", "ἄειδε", "ἣ", "δ", "αὐτοὺς", "τε", "οὗ", "τε", "τ", "καὶ", "ἀνὰ", "τὸν", "ὃ", "τε", "ἔχων", "ἀνὰ", "δὲ", "τε", "μὲν", "Πριάμοιο", "δ", "Διὸς", "ἄλλοι", "θ", "οὐκ", "κακῶς", "σε", "νῦν", "νύ", "δ", "ἐνὶ", "ἐποιχομένην", "ἴθι", "ἔφατ᾽,", "δ", "δ", "ἄνακτι", "μευ", "τε", "εἴ", "εἰ", "ἠδ", "Δαναοὶ", "ἔφατ", "δὲ", "ὤμοισιν", "δ", "κινηθέντος", "ἔπειτ", "δὲ", "μὲν", "ἔπειτ", "αἰεὶ", "μὲν", "δεκάτῃ", "γὰρ", "γὰρ", "δ", "δ", "νῦν", "ἀπονοστήσειν", "δὴ", "ἄγε", "καὶ", "κ", "ἄρ", "κέν", "ἀντιάσας", "ὅ", "Θεστορίδης", "ᾔδη", "νήεσσ", "διὰ", "σφιν", "Ἀχιλεῦ", "Ἀπόλλωνος", "γὰρ", "μέν", "γὰρ", "κρατέει", "γὰρ", "περ", "τε", "στήθεσσιν", "δ", "μάλα", "μὰ", "Δαναοῖσι", "τις", "κοίλῃς", "Δαναῶν", "νῦν", "θεὰ", "μυρί", "ἰφθίμους", "δὲ", "πᾶσι", "δὴ", "ἄναξ", "ἄρ", "Διὸς", "στρατὸν", "Χρύσην", "γὰρ", "θύγατρα", "ἐν", "σκήπτρῳ", "μάλιστα", "καὶ", "θεοὶ", "πόλιν", "ἐμοὶ", "υἱὸν", "μὲν", "ἱερῆα", "Ἀτρεΐδῃ", "ἀφίει", "γέρον", "δηθύνοντ", "τοι", "ἐγὼ", "οἴκῳ", "καὶ", "μή", "ἔδεισεν", "ἀκέων", "ἔπειτ", "τὸν", "ἀργυρότοξ᾽,", "ζαθέην", "ποτέ", "δή", "αἰγῶν", "ἐμὰ", "εὐχόμενος", "κατ", "ἔχων", "ἄρ", "ὃ", "ἀπάνευθε", "κλαγγὴ", "πρῶτον", "αὐτοῖσι", "δὲ", "ἀνὰ", "δ", "ἐπὶ", "Δαναῶν", "ἐπεὶ", "ἀνιστάμενος", "ἄμμε", "εἴ", "ὁμοῦ", "δή", "ὀνειροπόλον", "εἴποι", "ὅ", "πως", "ἡμῖν", "γ", "οἰωνοπόλων", "τά", "ἡγήσατ", "μαντοσύνην", "ἐὺ", "κέλεαί", "ἑκατηβελέταο", "ἐγὼν", "μοι", "ὀΐομαι", "καί", "βασιλεὺς", "γάρ", "καὶ", "ἑοῖσι", "ἀπαμειβόμενος", "εἰπὲ", "γὰρ", "θεοπροπίας", "ἐμεῦ", "παρὰ", "οὐδ", "πολλὸν", "Πηληϊάδεω", "Ἀχαιοῖς", "ψυχὰς", "ἑλώρια", "Διὸς", "τὰ", "ἀνδρῶν", "σφωε", "υἱός", "ὄρσε", "ἠτίμασεν", "ἦλθε", "φέρων", "χερσὶν", "καὶ", "δύω", "ἄλλοι", "δοῖεν", "εὖ", "λύσαιτε", "ἑκηβόλον", "πάντες", "καὶ", "Ἀγαμέμνονι", "κρατερὸν", "κοίλῃσιν", "ἢ", "οὐ", "οὐ", "ἐν", "ἐμὸν", "μ", "δ", "παρὰ", "ἀπάνευθε", "ἠΰκομος", "ὃς", "Τενέδοιό", "τοι", "ποτέ", "τὸ", "δάκρυα", "τοῦ", "Οὐλύμποιο", "ἀμφηρεφέα", "ὀϊστοὶ", "δ", "νεῶν", "γένετ", "ἐπῴχετο", "βέλος", "πυραὶ", "στρατὸν", "ἀγορὴν", "φρεσὶ", "ὅτι", "οὖν", "μετέφη", "παλιμπλαγχθέντας", "κεν", "πόλεμός", "τινα", "καὶ", "ὅ", "γ", "ἀρνῶν", "ἀπὸ", "ὣς", "ὄχ", "τ", "Ἀχαιῶν", "τήν", "φρονέων", "με", "ἄνακτος", "ἐρέω", "πρόφρων", "ἄνδρα", "οἱ", "ὅτε", "τε", "μετόπισθεν", "σὺ", "προσέφη", "θεοπρόπιον", "Ἀπόλλωνα", "ἀναφαίνεις", "ζῶντος", "νηυσί", "ἢν", "ἄριστος", "Ἀχιλῆος", "ἄλγε", "Ἄϊδι", "τεῦχε", "δ", "πρῶτα", "καὶ", "θεῶν", "ὃ", "κακήν", "ἀρητῆρα", "θοὰς", "τ", "ἑκηβόλου", "λίσσετο", "κοσμήτορε", "ἐϋκνήμιδες", "Ὀλύμπια", "δ", "φίλην", "Ἀπόλλωνα", "ἐπευφήμησαν", "ἀγλαὰ", "ἥνδανε", "δ", "ἐγὼ", "ὕστερον", "χραίσμῃ", "λύσω", "Ἄργεϊ", "λέχος", "ἐρέθιζε", "ὃ", "θῖνα", "κιὼν", "τέκε", "Χρύσην", "τε", "χαρίεντ", "τοι", "δέ", "σοῖσι", "δ", "καρήνων", "τε", "ἐπ", "ἤϊε", "μετὰ", "ἀργυρέοιο", "καὶ", "ἐχεπευκὲς", "νεκύων", "ᾤχετο", "δὲ", "θῆκε", "ῥα", "ἤγερθεν", "πόδας", "ὀΐω", "θάνατόν", "τε", "μάντιν", "γάρ", "τι", "εὐχωλῆς", "κνίσης", "λοιγὸν", "εἰπὼν", "ἄριστος", "ἐόντα", "Ἴλιον", "οἱ", "ἀγορήσατο", "Διῒ", "σὺ", "ἔπεσιν", "χολωσέμεν", "πείθονται", "χώσεται", "χόλον", "ἔχει", "δὲ", "πόδας", "ὅ", "Διῒ", "καὶ", "βαρείας", "Ἀγαμέμνονα", "Ἀχαιῶν", "ἔθηκε", "προΐαψεν", "κύνεσσιν", "ἐτελείετο", "διαστήτην", "δῖος", "ἔριδι", "γὰρ", "ὀλέκοντο", "ἐπὶ", "ἀπερείσι", "Ἀπόλλωνος", "πάντας", "λαῶν", "Ἀχαιοί", "δώματ", "οἴκαδ", "τὰ", "Ἀχαιοὶ", "δέχθαι", "θυμῷ", "ἐπὶ", "παρὰ", "αὖτις", "σκῆπτρον", "πρίν", "τηλόθι", "ἀντιόωσαν", "σαώτερος", "γέρων", "πολυφλοίσβοιο", "ἠρᾶθ", "Λητώ", "ἀμφιβέβηκας", "ἶφι", "ἐπὶ", "κατὰ", "μοι", "βέλεσσιν", "ἔκλυε", "χωόμενος", "φαρέτρην", "ὤμων", "νυκτὶ", "δ", "βιοῖο", "κύνας", "ἐφιεὶς", "καίοντο", "κῆλα", "καλέσσατο", "θεὰ", "θνήσκοντας", "ὁμηγερέες", "ὠκὺς", "γε", "δαμᾷ", "ἐρείομεν", "τ", "τόσσον", "ἐπιμέμφεται", "αἰγῶν", "ἀμῦναι", "κατ", "τά", "εἴσω", "πόρε", "καὶ", "φίλε", "δὲ", "καὶ", "ὃς", "Ἀχαιοί", "ἀνδρὶ", "γε", "κότον", "φράσαι", "ὠκὺς", "τι", "φίλον", "ἐπὶ", "χεῖρας", "εἴπῃς", "εὔχεται", "βουλή", "ἐρίσαντε", "Ἀχιλλεύς", "ξυνέηκε", "βασιλῆϊ", "δὲ", "νῆας", "ἄποινα", "Ἀχαιούς", "ἔχοντες", "ἱκέσθαι", "δ", "ἄποινα", "μῦθον", "νηυσὶ", "ἰόντα", "καὶ", "μιν", "πάτρης", "ὥς", "καὶ", "θαλάσσης", "ὃ", "ἀνάσσεις", "νηὸν", "πίονα", "κρήηνον", "Φοῖβος", "κῆρ", "χωομένοιο", "ἐοικώς", "ἰὸν", "ἀργούς", "θαμειαί", "θεοῖο", "λαὸν", "λευκώλενος", "ὁρᾶτο", "τε", "Ἀχιλλεύς", "φύγοιμεν", "καὶ", "ἢ", "ὄναρ", "ἐχώσατο", "ἠδ", "τε", "ἄρ", "τ", "Φοῖβος", "μετέειπεν", "μυθήσασθαι", "σύνθεο", "χερσὶν", "μέγα", "χέρηϊ", "καὶ", "ὄφρα", "εἴ", "Ἀχιλλεύς", "οἶσθα", "ᾧ", "χθονὶ", "ἐποίσει", "εἶναι", "μάχεσθαι", "χολωθεὶς", "λαοί", "Ἀχαιῶν", "ἄποινα", "ἔτελλε", "κιχείω", "στέμμα", "καὶ", "κε", "ἐπείθετο", "γεραιὸς", "ἔρεψα", "μηρί", "ἐέλδωρ", "Ἀπόλλων", "ἕηκε", "Ἀχιλλεύς", "Ἥρη", "γένοντο", "λοιμὸς", "ἱερῆα", "ἐκ", "Φοῖβος", "ἑκατόμβης", "τελείων", "ἕζετο", "ἐσσόμενα", "Ἀπόλλων", "καί", "ἀρήξειν", "πάντων", "αὐτῆμαρ", "τελέσσῃ", "με", "τε", "δερκομένοιο"
            ]
          },
          {
            name: "Norse Ipsum",
            value: [
              "Vestr", "en", "munstrandar", "svá", "drók", "við", "hlóðk", "munknarrar", "Buðumk", "ák", "berk", "á", "lofat", "víst", "hljóðs", "þvít", "Hygg", "vel", "hvé", "ef", "flestr", "hvat", "en", "hvar", "Óx", "við", "guðr", "gramr", "þar", "þaut", "malmhríðar", "sú‘s", "Varsa", "vefr", "fyr", "geirvangs", "þars", "i", "vǫllr", "und", "Hné", "við", "Orðstír", "Eirekr", "Fremr", "ef", "frǫ́gum", "til", "æstu", "jǫfurs", "brustu", "við", "Hlam", "við", "beit", "þat", "frák", "fyr", "Óðins", "í", "Þar", "ok", "Orðstír", "Eiríkr", "Rauð", "þar", "fleinn", "flugu", "ól", "fárbjóðr", "trað", "náttverð", "Flugu", "of", "órut", "benmǫ́s", "sleit", "en", "gnúði", "á", "Kom", "at", "bauð", "Eiríkr", "Lætr", "sverð-Freyr", "en", "skíðgarð", "brustu", "en", "bǫ́ru", "af", "Beit", "þá", "vas", "varð", "stózk", "við", "gall", "at", "Jǫfurr", "hrutu", "bauð", "Eiríkr", "Enn", "fyr", "skapleik", "skal", "verpr", "en", "heldr", "hann", "Brýtr", "bjóðr", "munat", "hringbrjótr", "mjǫk's", "haukstrandar", "Glaðar", "við", "Verpr", "með", "hjǫrleiks", "hann's", "þróask", "hugat", "frétt's", "Eiríks", "Jǫfurr", "hvé", "gótt", "es", "hrœrðak", "af", "Óðins", "of", "Bark", "á", "Kannk", "of", "ór", "hróðr", "svá", "at", "Njóti", "sem", "vagna", "eða", "komk", "ek", "mar", "'s", "eik", "ísabrot", "mærðar", "skut", "hilmi", "hróðrs", "Óðins", "Engla", "vísa", "mærik", "biðjum", "hróðr", "vísi", "sómir", "þylja", "þǫgn", "maðr", "fylkir", "Viðrir", "valr", "hjǫrva", "hlífar", "óx", "sótti", "heyrðisk", "mækis", "spǫ́", "mest", "villr", "darraðar", "grams", "rǫðum", "í", "brimils", "of", "véum", "ferð", "fleina", "of", "at", "munk", "firar", "fleira", "frama", "undir", "of", "brandar", "bláar", "hein-sǫðul", "hjalmrǫðul", "bengrefill", "vas", "at", "fetils", "eiki", "járnleiki", "var", "odda", "of", "at", "hilmir", "vas", "sótti", "dreyrug", "flagðs", "Skota", "nipt", "ara", "hjaldrs", "hræs", "blóðs", "granar", "und", "oddbreki", "hrafni", "hǫfuðstafni", "gráðar", "gjalpar", "ulfum", "of", "snót", "vaka", "skers", "braka", "broddar", "bitu", "hǫrvar", "bogum", "fleinn", "vas", "almr", "ulfr", "folkhagi", "fjǫrlagi", "ýbogi", "eggtogi", "sveigði", "unda", "ulfum", "of", "munk", "verum", "skata", "mærð", "ábrǫndum", "jǫfurr", "hornklofi", "'s", "bógvita", "hrammþvita", "hodddofa", "lofa", "hǫnum", "mǫl", "flotna", "Fróða", "broddfleti", "baugseti", "hvati", "baugskati", "hér", "mælik", "austr", "of", "hyggi", "ek", "þykkjumk", "ek", "munni", "munar", "ægi", "jǫru", "þengils", "þagnar", "mála", "manna", "hlátra", "berk", "fór", "flestr", "bauga", "Bragi", "vára", "vili", "of", "Viðris", "mitt", "á", "hlut", "lǫð", "of", "mjǫð", "bjǫð", "vann", "þann", "hann", "of", "at", "þat", "fet", "of", "of", "vá", "sá", "of", "glam", "þrǫm", "of", "fram", "þá", "ǫ́", "of", "staðar", "glǫðum", "blóði", "móði", "þrumði", "glumði", "á", "hnit", "gat", "þat", "segja", "þegja", "þeira", "fundir", "randar", "blóðrefill", "felli", "svelli", "eggja", "gnat", "gat", "þat", "hjǫr", "hrafna", "fjǫr", "spjǫr", "gota", "Nara", "tranar", "lanar", "vanar", "freki", "læ", "skæ", "hræ", "sæ", "saka", "Haka", "oddar", "ǫrvar", "floginn", "friðr", "dreginn", "feginn", "ý", "bý", "hræ", "sæ", "vilja", "skilja", "hvata", "lǫndum", "næstr", "fǫl", "fjǫl", "mjǫl", "sem", "þar", "of", "far", "at", "yrkja", "þat", "þǫgn", "grunni", "fægi", "lof", "rof", "mjǫt", "sjǫt", "ham", "fyr", "þat", "of", "auga", "tára].", "ver", "ber", "far", "of", "flot", "kvǫð", "fann", "get", "frá", "lá", "gram", "lá", "fit", "at", "gǫr", "loginn", "lofi", "hvar", "mar", "fat", "of", "gat", "gram", "fram", "nam"
            ]
          },
          {
            name: "Fruity Ipsum",
            value: [
              "apple", "apricot", "avocado", "banana", "bell pepper", "bilberry", "blackberry", "blackcurrant", "blood orange", "blueberry", "boysenberry", "breadfruit", "canary melon", "cantaloupe", "cherimoya", "cherry", "chili pepper", "clementine", "cloudberry", "coconut", "cranberry", "cucumber", "currant", "damson", "date", "dragonfruit", "durian", "eggplant", "elderberry", "feijoa", "fig", "goji berry", "gooseberry", "grape", "grapefruit", "guava", "honeydew", "huckleberry", "jackfruit", "jambul", "jujube", "kiwi fruit", "kumquat", "lemon", "lime", "loquat", "lychee", "mandarine", "mango", "mulberry", "nectarine", "nut", "olive", "orange", "pamelo", "papaya", "passionfruit", "peach", "pear", "persimmon", "physalis", "pineapple", "plum", "pomegranate", "pomelo", "purple mangosteen", "quince", "raisin", "rambutan", "raspberry", "redcurrant", "rock melon", "salal berry", "satsuma", "star fruit", "strawberry", "tamarillo", "tangerine", "tomato", "ugli fruit", "watermelon"
            ]
          },
          {
            name: "Veggie Ipsum",
            value: [
              "acorn squash", "alfalfa sprout", "amaranth", "anise", "artichoke", "arugula", "asparagus", "aubergine", "azuki bean", "banana squash", "basil", "bean sprout", "beet", "black bean", "black-eyed pea", "bok choy", "borlotti bean", "broad beans", "broccoflower", "broccoli", "brussels sprout", "butternut squash", "cabbage", "calabrese", "caraway", "carrot", "cauliflower", "cayenne pepper", "celeriac", "celery", "chamomile", "chard", "chayote", "chickpea", "chives", "cilantro", "collard green", "corn", "corn salad", "courgette", "cucumber", "daikon", "delicata", "dill", "eggplant", "endive", "fennel", "fiddlehead", "frisee", "garlic", "gem squash", "ginger", "green bean", "green pepper", "habanero", "herbs and spice", "horseradish", "hubbard squash", "jalapeno", "jerusalem artichoke", "jicama", "kale", "kidney bean", "kohlrabi", "lavender", "leek ", "legume", "lemon grass", "lentils", "lettuce", "lima bean", "mamey", "mangetout", "marjoram", "mung bean", "mushroom", "mustard green", "navy bean", "new zealand spinach", "nopale", "okra", "onion", "oregano", "paprika", "parsley", "parsnip", "patty pan", "pea", "pinto bean", "potato", "pumpkin", "radicchio", "radish", "rhubarb", "rosemary", "runner bean", "rutabaga", "sage", "scallion", "shallot", "skirret", "snap pea", "soy bean", "spaghetti squash", "spinach", "squash", "sweet potato", "tabasco pepper", "taro", "tat soi", "thyme", "topinambur", "tubers", "turnip", "wasabi", "water chestnut", "watercress", "white radish", "yam", "zucchini"
            ]
          }
        ]
      },

      myLorem() {
        return loremIpsum({
            format: this.format,         
            paragraphUpperBound: this.sentencesPer.max, 
            paragraphLowerBound: this.sentencesPer.min,   
            random: Math.random,     
            sentenceUpperBound: this.wordsPer.max,   
            sentenceLowerBound: this.wordsPer.min,  
            suffix: this.suffix,            
            units: this.unit.toLowerCase(),      
            words: this.selectedIpsum.value ,
            count: +this.qty          
        });
      },

    },
    methods: {
      updateSelected(obj) {
        this.selectedItem = obj;
        console.log(this.selectedItem.value);
      }
    },
    mounted() {
      // console.log(this.ipsums[0]);
      this.selectedIpsum = this.ipsums[0];
    }
  }
</script>

<template>
  <div id="appgrid" v-cloak>
    <header>
      <h1>{{selectedIpsum.name}}</h1>
    </header>

    <div class="main">
      <div class="wrapper">
        <section class="input">   
          <div class="metric">
            <label>Qty</label>
            <Number v-model="qty" 
              :min="1" :max="10"/>
          </div>

          <div class="metric">
            <label>Unit</label>
            <select class="select"  v-model="unit">
              <option v-for="(unit,i) of units" 
                      :value="unit"
                      :key="i">{{unit}}</option>
            </select>
          </div>

          <div class="metric">
            <label>Ipsum</label>
            <select class="select"  
              v-model="selectedIpsum">
              <option v-for="(ipsum,i) of ipsums" 
                :value="ipsum"
                :key="i">{{ipsum.name}}</option>
            </select>
          </div>

          <div class="metric">
            <label>Format</label>
            <select class="select"  v-model="format">
              <option v-for="(format,i) of formats" 
                      :value="format"
                      :key="i">{{format}}</option>
            </select>
          </div>
        </section> <!-- input -->

        <section class="output">
          
          <div class="my-icon btn" v-copy title="copy">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          </div> 

          <pre class="outputText">{{myLorem}}</pre>

        </section> <!-- output -->
      </div> <!-- wrapper -->
      
    </div>
  </div> 
</template>

<style scoped>

:root {
  --base: 16px;
  --root: calc(var(--base) * 0.75);
  --h1: 2.666666667rem;
  --h2: 2.333333333rem;
  --h3: 2rem;
  --h4: 1.666666667rem;
  --h5: 1.5rem;
  --h6: 1.333333333rem;
  --h7: 1.166666667rem;
  --h8: 1rem;
  --h9: 0.889333333rem;
  --lh: 2rem;
  --fgColor: #1b1e23;
  --bgColor: #f7f7f7;
  --headingColor: #333;
  --linkColor: #0277bd;
  --linkHover: #0277bd;
}
@media (min-width: 480px) {
  :root { --base: 17px; }
}
@media (min-width: 768px) {
  :root { --base: 18px; }
}
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
}
::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}
html {
  cursor: default;
  line-height: 1.5;
  -moz-tab-size: 2;
  tab-size: 2;
  -webkit-tap-highlight-color: transparent;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
}
main {
  display: block;
}
button,
#appgrid >>> input,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
}
button,
#appgrid >>> input,
input {
  overflow: visible;
  text-transform: none;
}
select {
  text-transform: none;
}
#appgrid >>> ::-webkit-input-placeholder,
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
#appgrid >>> ::-moz-focus-inner,
::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
#appgrid >>> ::-moz-focusring,
::-moz-focusring {
  outline: 1px dotted #000;
}
#appgrid >>> ::-moz-ui-invalid,
::-moz-ui-invalid {
  box-shadow: none;
}
a,
area,
button,
#appgrid >>> input,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
[hidden] {
  display: none;
}
html {
  font-family: 'Helvetica', 'Arial', 'sans-serif';
  font-size: var(--root);
}
body {
  font-family: inherit;
  font-size: var(--h6);
  line-height: 2rem;
  background-color: inherit;
  color: inherit;
  height: 100%;
}
h1, h2, h3,
h4, h5, h6 {
  color: var(--headingColor);
  font-family: 'arial';
  font-style: normal;
  font-weight: bolder;
}
h1, .h1 {
  font-size: var(--h1);
  line-height: 3rem;
}
h2, .h2 {
  font-size: var(--h2);
  line-height: 2.5rem;
}
h3, .h3 {
  font-size: var(--h3);
  line-height: 2.5rem;
}
h4, .h4 {
  font-size: var(--h4);
  line-height: 2rem;
}
pre,
code,
kbd,
samp {
  font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace", "Noto Mono", "Oxygen Mono", "Liberation Mono", "monospace", "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace", "Noto Mono", "Oxygen Mono", "Liberation Mono", "monospace";
  font-size: var(--h7);
}
code {
  line-height: 1;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  white-space: pre-wrap;
  word-break: normal;
  word-wrap: break-word;
  overflow-wrap: normal;
}
pre {
  line-height: 1;
  padding: 0 2rem 1.5rem;
  background: transparent;
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
  word-break: normal;
  word-wrap: break-word;
  overflow-wrap: normal;
  overflow-y: auto;
}
button,
#appgrid >>> input,
input,
select,
textarea {
  font-family: inherit;
  font-size: var(--h7);
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  background-color: transparent;
  background-color: rgba(255,255,255,0);
  border: 0 solid;
  outline: none;
  margin: 0;
  padding: 0.25em 0.5em;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 0px 1px inset var(--gray-500);
  overflow: hidden;
  transition: all 0.1s;
}
select {
  position: relative;
  height: 2.583334rem;
  display: inline-block;
  text-transform: none;
  -webkit-appearance: menulist-button;
  cursor: pointer;
}
@media (-width: 640px) {
select { height: 2.576923rem; }
}
@media (min-width: 800px) {
select { height: 2.571429rem; }
}
@media (min-width: 1600px) {
select { height: 2.566667rem; }
}

#appgrid >>> .btn,
.btn, [btn] { cursor: pointer; }
.btn:hover,
[btn]:hover { opacity: 0.8; }
.btn:active,
[btn]:active { opacity: 0.6; }
.select {
  display: inline-block;
  font-family: inherit;
  font-size: var(--h7);
  color: #444;
  padding: 0.25rem 2rem 0.25rem 0.5rem;
  box-shadow: 0 1px 0 rgba(0,0,0,0.3);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' width='24px' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z' fill='%23555555'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 0rem top 55%, 0 0;
  min-width: 8rem;
  border-radius: 0;
}
.select::-ms-expand { display: none; }
.select:hover { border-color: #888; }
.select:focus {
  border-color: #aaa;
  box-shadow: 0 1px 0 rgba(0,0,0,0.3);
  color: #222;
  outline: none;
}
.select option { font-weight: normal; }
[v-cloak] {
  position: relative;

  > * { display:none }
  &::before { 
    content: "loading…";
    position: absolute;
    top: 2rem;
    left: 4rem;
  }
}
#appgrid {
  position: relative;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: auto 1fr;
} 
h1 { font-size: 1.5rem; }
h1, .wrapper {
  max-width: 960px;
  height: 0 auto;
}
.outputText {
  height: 100% !important;
  padding: 0 0.5rem 1rem 0 !important;
  line-height: 1.15;
  overflow: hidden;
}
.main {
  padding-top: 1.5rem;
}
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 3rem 4rem;
}
@media (min-width: 1000px) {
  .wrapper { grid-template-columns: 1fr 2fr; }
}
.input {
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  grid-gap: 1rem 2rem;
}
.input .metric {
  display: grid;
  grid-template-columns: 5rem 1fr;
  align-items: baseline;
}
.metric label {
  /* font-size: var(--h8); */
  font-size: 85%;
  font-weight: bold;
}
.output {
  position: relative;
  padding-right: 2rem;
  padding-left: 0;
}
@media (min-width: 500px) {
.output { padding-left: 5rem; }
}
@media (min-width: 768px) {
  .output { padding-left: 0; }
}
.output pre {
  max-width: 500px;
  padding-left: 0;
  padding: initial;

  background: initial;
  margin: 0; 
}
.output .my-icon svg {
  color: inherit;
  height: 1em;
  width: 1em;
  font-size: 24px;
  border: none;
  outline: none;
  user-select: none;
  vertical-align: text-bottom;
  cursor: pointer;
}
.output .my-icon {
  position: absolute;
  top: 0;
  right: -0.5rem;
  color: rgba(51,51,51,0.9);
}



#appgrid >>> [type="number"] {
  -moz-appearance: textfield;
}
#appgrid >>> [type="number"]::-webkit-inner-spin-button,
#appgrid >>> [type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#appgrid >>> .number {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.3rem 0 0.5rem;
  box-shadow: 0 1px 0 rgba(0,0,0,0.3);
}
#appgrid >>> .number input {
  font-size: initial;
  width: 100%;
  min-width: 3rem;
}
#appgrid >>> .my-icon svg {
    color: inherit;
    height: 1em;
    width: 1em;
    font-size: 24px;
    border: none;
    outline: none;
    user-select: none;
    vertical-align: text-bottom;
    cursor: pointer;
}

#appgrid >>> .number .my-icon svg {
  font-size: 16px !important;
}

</style>