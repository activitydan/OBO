/* ONE BY ONE — sito di download. Icone: Lucide (ISC), dalla cartella LIBRERIE. */
const ICONS = {
  "film": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 3v18\"/><path d=\"M3 7.5h4\"/><path d=\"M3 12h18\"/><path d=\"M3 16.5h4\"/><path d=\"M17 3v18\"/><path d=\"M17 7.5h4\"/><path d=\"M17 16.5h4\"/></svg>",
  "printer": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"/><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"/><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\"/></svg>",
  "pencil-line": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M13 21h8\"/><path d=\"m15 5 4 4\"/><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/></svg>",
  "scan-line": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><path d=\"M7 12h10\"/></svg>",
  "crosshair": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\"/><line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\"/><line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\"/></svg>",
  "clapperboard": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m12.296 3.464 3.02 3.956\"/><path d=\"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z\"/><path d=\"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"m6.18 5.276 3.1 3.899\"/></svg>",
  "download": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 15V3\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><path d=\"m7 10 5 5 5-5\"/></svg>",
  "command": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3\"/></svg>",
  "app-window": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><path d=\"M10 4v4\"/><path d=\"M2 8h20\"/><path d=\"M6 4v4\"/></svg>",
  "wifi-off": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 20h.01\"/><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/><path d=\"M5 12.859a10 10 0 0 1 5.17-2.69\"/><path d=\"M19 12.859a10 10 0 0 0-2.007-1.523\"/><path d=\"M2 8.82a15 15 0 0 1 4.177-2.643\"/><path d=\"M22 8.82a15 15 0 0 0-11.288-3.764\"/><path d=\"m2 2 20 20\"/></svg>",
  "languages": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m5 8 6 6\"/><path d=\"m4 14 6-6 2-3\"/><path d=\"M2 5h12\"/><path d=\"M7 2h1\"/><path d=\"m22 22-5-10-5 10\"/><path d=\"M14 18h6\"/></svg>",
  "file-text": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M10 9H8\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/></svg>",
  "check": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"/></svg>",
  "chevron-right": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m9 18 6-6-6-6\"/></svg>"
};

/* ------------------------------------------------------------------
   File da scaricare: dalla Release "Download" del repo GitHub
   activitydan/OBO (deve essere pubblico). Arrivano con il nome che
   hanno su GitHub: il browser ignora "download" per un altro dominio.
   ------------------------------------------------------------------ */
const RELEASE = 'https://github.com/activitydan/OBO/releases/download/Download/';
const DOWNLOADS = {
  windows: { href: RELEASE + 'ONE.BY.ONE.Setup.2.0.exe', name: 'ONE.BY.ONE.Setup.2.0.exe' },
  'mac-arm': { href: RELEASE + 'ONE.BY.ONE.2.0.macOS.Apple.Silicon.zip', name: 'ONE.BY.ONE.2.0.macOS.Apple.Silicon.zip', size: '126 MB' },
  'mac-intel': { href: RELEASE + 'ONE.BY.ONE.2.0.macOS.Intel.zip', name: 'ONE.BY.ONE.2.0.macOS.Intel.zip', size: '129 MB' },
};

/* ------------------------------------------------------------------ Testi */
const TEXT = {
  it: {
    'nav.features': 'Funzioni', 'nav.how': 'Come funziona', 'nav.screens': 'Schermate', 'nav.download': 'Scarica', 'cta.download': 'Scarica', 'lang.label': 'Lingua',
    'hero.kicker': 'Versione 2.0 · Windows e macOS', 'hero.title': 'Animazione disegnata a mano, un frame alla volta.',
    'hero.lead': "ONE BY ONE trasforma un video o una sequenza di immagini in fogli da stampare. Disegni sulla carta, scansioni, e l'app ricompone l'animazione. Tutto sul tuo computer, senza internet.",
    'hero.shotAlt': "La schermata Revisione di ONE BY ONE: un foglio scansionato con i quattro marcatori d'angolo riconosciuti",
    'dl.win': 'Scarica per Windows', 'dl.winMeta': 'Windows 10 e 11 · 64 bit · 108 MB', 'dl.mac': 'Scarica per macOS', 'dl.macMeta': 'Apple Silicon e Intel · macOS 12 o successivo',
    'dl.armMeta': 'Chip M1, M2, M3, M4 · 126 MB', 'dl.intelMeta': 'Mac fino al 2020 · 129 MB', 'dl.note': 'Download gratuito da GitHub.', 'dl.all': 'Tutte le opzioni ›',
    'statement.a': 'Dal video alla carta.', 'statement.b': 'Dalla carta', 'statement.c': "all'animazione.",
    'features.kicker': 'Funzioni', 'features.title': 'Tutto quello che serve, niente di più.', 'features.intro': 'Il digitale fa il lavoro noioso (estrarre, impaginare, riconoscere, ritagliare), così il tempo resta per disegnare.',
    'f1.t': 'Video o sequenze di immagini', 'f1.d': 'Importa un video ed estrai i frame alla risoluzione originale, oppure parti da una sequenza di immagini già numerata.',
    'f2.t': 'Fogli pronti da stampare', 'f2.d': 'Impagina i frame su A4 o A3, in orizzontale o in verticale, con numeri e margini puliti. Un PDF, pronto per la stampante.',
    'f3.t': 'Disegni tu, a mano', 'f3.d': "Ridisegna ogni frame sulla carta con i tuoi strumenti: matita, china, acquerello. L'app non tocca il tuo segno.",
    'f4.t': 'Scansioni che si riconoscono', 'f4.d': "Ogni foglio porta i suoi codici QR: l'app sa a quale progetto appartiene e in che ordine va, anche da un PDF di molte pagine.",
    'f5.t': 'Allineamento a quattro angoli', 'f5.d': "Quattro marcatori stampati correggono prospettiva e rotazione: ogni frame viene ritagliato esattamente dove l'hai disegnato.",
    'f6.t': 'Export per ogni uso', 'f6.d': 'Sequenza PNG o JPG, GIF animata o video MP4, fino al 4K. Il bordo di carta naturale, se lo vuoi, resta.',
    'badge.offline': 'Funziona senza internet', 'badge.account': 'Nessun account, nessun abbonamento',
    'how.kicker': 'Come funziona', 'how.title': 'Sei passaggi, sempre nello stesso ordine.', 'how.intro': "Gli stessi che trovi in alto nell'app. Puoi tornare indietro in ogni momento: il progetto si salva da solo.",
    's1.t': 'Importa', 's1.d': 'Scegli il video o le immagini di partenza.', 's2.t': 'Frame', 's2.d': "Decidi quanti frame estrarre e guarda l'anteprima.", 's3.t': 'Foglio', 's3.d': 'Scarica il PDF e stampalo.',
    's4.t': 'Scansioni', 's4.d': 'Disegna, scansiona e importa i fogli.', 's5.t': 'Revisione', 's5.d': 'Controlla i marcatori e ricostruisci i frame.', 's6.t': 'Esporta', 's6.d': "Scegli il formato e salva l'animazione.",
    'screens.kicker': 'Schermate', 'screens.title': "L'app, così com'è.", 'screens.intro': 'Schermate reali, con un progetto di prova: una palla che rimbalza in dodici disegni.', 'tab.home': 'Libreria',
    'cap.home.t': 'Libreria progetti', 'cap.home.d': "Ogni progetto con il suo colore, le etichette e il punto in cui l'hai lasciato.",
    'cap.import.t': 'Importa', 'cap.import.d': 'La sequenza di partenza, in ordine: selezioni, aggiungi o togli immagini.',
    'cap.frames.t': 'Frame', 'cap.frames.d': "L'anteprima dell'animazione prima di stampare.",
    'cap.sheet.t': 'Foglio', 'cap.sheet.d': 'Il foglio da stampare, con QR e marcatori per il riallineamento automatico.',
    'cap.review.t': 'Revisione', 'cap.review.d': 'La scansione con i quattro marcatori riconosciuti e le aree di ogni frame.',
    'cap.export.t': 'Esporta', 'cap.export.d': "L'animazione ricostruita, pronta in PNG, JPG, GIF o MP4.",
    'download.kicker': 'Scarica', 'download.title': 'Scarica ONE BY ONE.', 'download.intro': 'Un clic scarica il programma, pronto da installare.',
    'win.req': 'Windows 10 o 11 · 64 bit (Intel o AMD)', 'win.i1': 'Doppio clic su “ONE.BY.ONE.Setup.2.0.exe”.', 'win.i2': "L'app si installa da sola, senza permessi di amministratore, e si apre.", 'win.i3': 'Da quel momento la trovi sul Desktop e nel menu Start.',
    'mac.req': 'macOS 12 Monterey o successivo', 'mac.chipLabel': 'Tipo di Mac', 'mac.chipHelp': 'Non sai quale? Menu Apple › Informazioni su questo Mac: “Chip Apple M…” è Apple Silicon, “Processore Intel” è Intel.',
    'mac.i1': 'Doppio clic sullo zip e trascina “ONE BY ONE” in Applicazioni.', 'mac.i2': 'Primo avvio: Impostazioni di Sistema › Privacy e sicurezza › “Apri comunque”.', 'mac.i3': 'Da quel momento si apre come qualsiasi altra app.',
    'alt.text': 'Il download non parte?', 'alt.link': 'Scaricalo da GitHub ›', 'note.label': 'Nota',
    'note.text': "L'app non è ancora firmata con un certificato Microsoft o Apple, quindi al primo avvio il sistema chiede una conferma (“Esegui comunque” su Windows, “Apri comunque” su Mac).",
    'foot.font': 'Licenza del font', 'foot.made': 'Fatto a mano, un frame alla volta',
    'toast.title': 'Download avviato', 'toast.text': 'Il file arriva da GitHub: lo trovi nella cartella Download.',
  },
  en: {
    'nav.features': 'Features', 'nav.how': 'How it works', 'nav.screens': 'Screens', 'nav.download': 'Download', 'cta.download': 'Download', 'lang.label': 'Language',
    'hero.kicker': 'Version 2.0 · Windows and macOS', 'hero.title': 'Hand-drawn animation, one frame at a time.',
    'hero.lead': 'ONE BY ONE turns a video or an image sequence into sheets ready to print. You draw on paper, you scan, and the app puts the animation back together. All on your computer, no internet needed.',
    'hero.shotAlt': 'The ONE BY ONE Review screen: a scanned sheet with its four corner markers detected',
    'dl.win': 'Download for Windows', 'dl.winMeta': 'Windows 10 and 11 · 64-bit · 108 MB', 'dl.mac': 'Download for macOS', 'dl.macMeta': 'Apple Silicon and Intel · macOS 12 or later',
    'dl.armMeta': 'M1, M2, M3, M4 chips · 126 MB', 'dl.intelMeta': 'Macs up to 2020 · 129 MB', 'dl.note': 'Free download from GitHub.', 'dl.all': 'All options ›',
    'statement.a': 'From video to paper.', 'statement.b': 'From paper', 'statement.c': 'to animation.',
    'features.kicker': 'Features', 'features.title': 'Everything you need, nothing more.', 'features.intro': 'The computer does the tedious part (extracting, laying out, recognising, cropping) so your time goes into drawing.',
    'f1.t': 'Video or image sequences', 'f1.d': 'Import a video and extract its frames at full resolution, or start from an image sequence that is already numbered.',
    'f2.t': 'Sheets ready to print', 'f2.d': 'Lay the frames out on A4 or A3, landscape or portrait, with clean numbers and margins. One PDF, ready for the printer.',
    'f3.t': 'You draw, by hand', 'f3.d': 'Redraw every frame on paper with your own tools: pencil, ink, watercolour. The app never touches your line.',
    'f4.t': 'Scans that recognise themselves', 'f4.d': 'Every sheet carries its own QR codes: the app knows which project it belongs to and where it goes, even from a long multi-page PDF.',
    'f5.t': 'Four-corner alignment', 'f5.d': 'Four printed markers correct perspective and rotation, so every frame is cropped exactly where you drew it.',
    'f6.t': 'Export for any use', 'f6.d': 'PNG or JPG sequence, animated GIF or MP4 video, up to 4K. The natural paper border stays, if you want it.',
    'badge.offline': 'Works offline', 'badge.account': 'No account, no subscription',
    'how.kicker': 'How it works', 'how.title': 'Six steps, always in the same order.', 'how.intro': 'The same ones you see at the top of the app. You can go back at any time: the project saves itself.',
    's1.t': 'Import', 's1.d': 'Pick the starting video or images.', 's2.t': 'Frames', 's2.d': 'Choose how many frames to extract and preview them.', 's3.t': 'Sheet', 's3.d': 'Download the PDF and print it.',
    's4.t': 'Scans', 's4.d': 'Draw, scan and import the sheets.', 's5.t': 'Review', 's5.d': 'Check the markers and rebuild the frames.', 's6.t': 'Export', 's6.d': 'Pick a format and save the animation.',
    'screens.kicker': 'Screens', 'screens.title': 'The app, as it is.', 'screens.intro': 'Real screens, with a sample project: a bouncing ball in twelve drawings. The interface is also available in English and French.', 'tab.home': 'Library',
    'cap.home.t': 'Project library', 'cap.home.d': 'Every project with its colour, its labels and the step where you left it.',
    'cap.import.t': 'Import', 'cap.import.d': 'The starting sequence, in order: select, add or remove images.',
    'cap.frames.t': 'Frames', 'cap.frames.d': 'The animation preview before printing.',
    'cap.sheet.t': 'Sheet', 'cap.sheet.d': 'The printable sheet, with QR codes and markers for automatic realignment.',
    'cap.review.t': 'Review', 'cap.review.d': 'The scan with its four markers detected and the area of each frame.',
    'cap.export.t': 'Export', 'cap.export.d': 'The rebuilt animation, ready as PNG, JPG, GIF or MP4.',
    'download.kicker': 'Download', 'download.title': 'Download ONE BY ONE.', 'download.intro': 'One click downloads the app, ready to install.',
    'win.req': 'Windows 10 or 11 · 64-bit (Intel or AMD)', 'win.i1': 'Double-click “ONE.BY.ONE.Setup.2.0.exe”.', 'win.i2': 'The app installs itself, with no administrator rights, and opens.', 'win.i3': 'From then on you find it on the Desktop and in the Start menu.',
    'mac.req': 'macOS 12 Monterey or later', 'mac.chipLabel': 'Type of Mac', 'mac.chipHelp': 'Not sure which? Apple menu › About This Mac: “Apple M… chip” means Apple Silicon, “Intel processor” means Intel.',
    'mac.i1': 'Double-click the zip and drag “ONE BY ONE” into Applications.', 'mac.i2': 'First launch: System Settings › Privacy & Security › “Open Anyway”.', 'mac.i3': 'From then on it opens like any other app.',
    'alt.text': 'Download not starting?', 'alt.link': 'Get it from GitHub ›', 'note.label': 'Note',
    'note.text': 'The app is not yet signed with a Microsoft or Apple certificate, so on first launch the system asks for confirmation (“Run anyway” on Windows, “Open Anyway” on Mac).',
    'foot.font': 'Font licence', 'foot.made': 'Made by hand, one frame at a time',
    'toast.title': 'Download started', 'toast.text': 'The file comes from GitHub: you will find it in your Downloads folder.',
  },
  fr: {
    'nav.features': 'Fonctions', 'nav.how': 'Comment ça marche', 'nav.screens': 'Écrans', 'nav.download': 'Télécharger', 'cta.download': 'Télécharger', 'lang.label': 'Langue',
    'hero.kicker': 'Version 2.0 · Windows et macOS', 'hero.title': 'Animation dessinée à la main, une image à la fois.',
    'hero.lead': "ONE BY ONE transforme une vidéo ou une séquence d'images en planches à imprimer. Vous dessinez sur papier, vous scannez, et l'application recompose l'animation. Tout sur votre ordinateur, sans internet.",
    'hero.shotAlt': "L'écran Révision de ONE BY ONE : une planche scannée avec ses quatre repères d'angle détectés",
    'dl.win': 'Télécharger pour Windows', 'dl.winMeta': 'Windows 10 et 11 · 64 bits · 108 Mo', 'dl.mac': 'Télécharger pour macOS', 'dl.macMeta': 'Apple Silicon et Intel · macOS 12 ou ultérieur',
    'dl.armMeta': 'Puces M1, M2, M3, M4 · 126 Mo', 'dl.intelMeta': "Mac jusqu'en 2020 · 129 Mo", 'dl.note': 'Téléchargement gratuit depuis GitHub.', 'dl.all': 'Toutes les options ›',
    'statement.a': 'De la vidéo au papier.', 'statement.b': 'Du papier', 'statement.c': "à l'animation.",
    'features.kicker': 'Fonctions', 'features.title': 'Tout ce qu’il faut, rien de plus.', 'features.intro': 'L’ordinateur fait le travail fastidieux (extraire, mettre en page, reconnaître, recadrer) : votre temps va au dessin.',
    'f1.t': "Vidéo ou séquences d'images", 'f1.d': "Importez une vidéo et extrayez ses images en pleine résolution, ou partez d'une séquence d'images déjà numérotée.",
    'f2.t': 'Planches prêtes à imprimer', 'f2.d': 'Mettez les images en page sur A4 ou A3, en paysage ou en portrait, avec numéros et marges nets. Un PDF, prêt pour l’imprimante.',
    'f3.t': 'Vous dessinez, à la main', 'f3.d': "Redessinez chaque image sur papier avec vos outils : crayon, encre, aquarelle. L'application ne touche pas à votre trait.",
    'f4.t': 'Des scans qui se reconnaissent', 'f4.d': "Chaque planche porte ses codes QR : l'application sait à quel projet elle appartient et dans quel ordre, même depuis un long PDF.",
    'f5.t': 'Alignement sur quatre coins', 'f5.d': 'Quatre repères imprimés corrigent la perspective et la rotation : chaque image est recadrée exactement là où vous l’avez dessinée.',
    'f6.t': 'Export pour tous les usages', 'f6.d': "Séquence PNG ou JPG, GIF animé ou vidéo MP4, jusqu'en 4K. Le bord de papier naturel reste, si vous le voulez.",
    'badge.offline': 'Fonctionne sans internet', 'badge.account': 'Sans compte, sans abonnement',
    'how.kicker': 'Comment ça marche', 'how.title': 'Six étapes, toujours dans le même ordre.', 'how.intro': "Les mêmes qu'en haut de l'application. Vous pouvez revenir en arrière à tout moment : le projet s'enregistre tout seul.",
    's1.t': 'Importer', 's1.d': 'Choisissez la vidéo ou les images de départ.', 's2.t': 'Images', 's2.d': "Choisissez combien d'images extraire et regardez l'aperçu.", 's3.t': 'Planche', 's3.d': 'Téléchargez le PDF et imprimez-le.',
    's4.t': 'Scans', 's4.d': 'Dessinez, scannez et importez les planches.', 's5.t': 'Révision', 's5.d': 'Vérifiez les repères et reconstruisez les images.', 's6.t': 'Exporter', 's6.d': "Choisissez le format et enregistrez l'animation.",
    'screens.kicker': 'Écrans', 'screens.title': "L'application, telle qu'elle est.", 'screens.intro': "De vrais écrans, avec un projet d'exemple : une balle qui rebondit en douze dessins. L'interface existe aussi en français.", 'tab.home': 'Bibliothèque',
    'cap.home.t': 'Bibliothèque de projets', 'cap.home.d': "Chaque projet avec sa couleur, ses étiquettes et l'étape où vous l'avez laissé.",
    'cap.import.t': 'Importer', 'cap.import.d': 'La séquence de départ, dans l’ordre : sélectionnez, ajoutez ou retirez des images.',
    'cap.frames.t': 'Images', 'cap.frames.d': "L'aperçu de l'animation avant d'imprimer.",
    'cap.sheet.t': 'Planche', 'cap.sheet.d': 'La planche à imprimer, avec codes QR et repères pour le réalignement automatique.',
    'cap.review.t': 'Révision', 'cap.review.d': 'Le scan avec ses quatre repères détectés et la zone de chaque image.',
    'cap.export.t': 'Exporter', 'cap.export.d': "L'animation reconstruite, prête en PNG, JPG, GIF ou MP4.",
    'download.kicker': 'Télécharger', 'download.title': 'Télécharger ONE BY ONE.', 'download.intro': "Un clic télécharge l'application, prête à installer.",
    'win.req': 'Windows 10 ou 11 · 64 bits (Intel ou AMD)', 'win.i1': 'Double-cliquez sur « ONE.BY.ONE.Setup.2.0.exe ».', 'win.i2': "L'application s'installe toute seule, sans droits d'administrateur, et s'ouvre.", 'win.i3': 'Ensuite, vous la trouvez sur le Bureau et dans le menu Démarrer.',
    'mac.req': 'macOS 12 Monterey ou ultérieur', 'mac.chipLabel': 'Type de Mac', 'mac.chipHelp': 'Vous ne savez pas ? Menu Pomme › À propos de ce Mac : « Puce Apple M… » = Apple Silicon, « Processeur Intel » = Intel.',
    'mac.i1': 'Double-cliquez sur le zip et glissez « ONE BY ONE » dans Applications.', 'mac.i2': 'Premier lancement : Réglages Système › Confidentialité et sécurité › « Ouvrir quand même ».', 'mac.i3': "Ensuite, elle s'ouvre comme n'importe quelle application.",
    'alt.text': 'Le téléchargement ne démarre pas ?', 'alt.link': 'Téléchargez-la depuis GitHub ›', 'note.label': 'Note',
    'note.text': "L'application n'est pas encore signée par un certificat Microsoft ou Apple : au premier lancement, le système demande une confirmation (« Exécuter quand même » sur Windows, « Ouvrir quand même » sur Mac).",
    'foot.font': 'Licence de la police', 'foot.made': 'Fait à la main, une image à la fois',
    'toast.title': 'Téléchargement lancé', 'toast.text': 'Le fichier arrive depuis GitHub : vous le trouverez dans le dossier Téléchargements.',
  },
};

(() => {
  const LANGS = ['it', 'en', 'fr'];
  const read = () => { try { return localStorage.getItem('obo-site-lang'); } catch { return null; } };
  const store = (v) => { try { localStorage.setItem('obo-site-lang', v); } catch {} };
  const system = String(navigator.language || 'it').slice(0, 2).toLowerCase();
  let lang = LANGS.includes(read()) ? read() : (LANGS.includes(system) ? system : 'en');
  const t = (key) => TEXT[lang][key] ?? TEXT.it[key] ?? '';

  // Icone (Lucide, dalla cartella LIBRERIE)
  document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = ICONS[el.dataset.icon] || ''; });

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => { const v = t(el.dataset.i18n); if (v) el.textContent = v; });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => { const [attr, key] = pair.split(':'); const v = t(key); if (v) el.setAttribute(attr, v); });
    });
    document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    updateCaption();
  }
  document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => { lang = b.dataset.lang; store(lang); applyLang(); }));

  /* ---------- Download ---------- */
  const toast = document.getElementById('toast'); let toastTimer = null;
  function showToast() {
    toast.innerHTML = ''; const strong = document.createElement('strong'); strong.textContent = t('toast.title'); const span = document.createElement('span'); span.textContent = t('toast.text');
    toast.append(strong, span); toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 6500);
  }
  function download(file) {
    const a = document.createElement('a'); a.href = file.href; a.download = file.name;
    document.body.append(a); a.click(); a.remove();
    showToast();
  }

  // Mac: Apple Silicon o Intel
  let macChoice = 'mac-arm';
  function setMac(choice) {
    macChoice = choice;
    document.querySelectorAll('[data-chip]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.chip === choice)));
    const zip = DOWNLOADS[choice];
    document.getElementById('mac-file').textContent = zip.name; document.getElementById('mac-size').textContent = zip.size;
  }
  document.querySelectorAll('[data-chip]').forEach((b) => b.addEventListener('click', () => setMac(b.dataset.chip)));
  document.querySelectorAll('[data-download]').forEach((b) => b.addEventListener('click', () => {
    const key = b.dataset.download === 'mac-selected' ? macChoice : b.dataset.download;
    if (key.startsWith('mac-')) setMac(key);
    download(DOWNLOADS[key]);
  }));
  const macToggle = document.querySelector('[data-mac-toggle]'); const macPanel = document.getElementById('mac-choice');
  macToggle.addEventListener('click', () => { const open = !macPanel.classList.contains('open'); macPanel.classList.toggle('open', open); macToggle.setAttribute('aria-expanded', String(open)); });

  // Sistema del visitatore: il pulsante giusto in evidenza, il chip giusto già scelto
  const ua = navigator.userAgent; const platform = (navigator.userAgentData?.platform || navigator.platform || '').toLowerCase();
  const isMac = /mac/.test(platform) || /Macintosh/.test(ua);
  const winButton = document.querySelector('.downloads [data-download="windows"]');
  if (isMac) { macToggle.classList.add('primary'); winButton.parentElement.insertBefore(macToggle, winButton); macToggle.after(macPanel); }
  else winButton.classList.add('primary');
  navigator.userAgentData?.getHighEntropyValues?.(['architecture']).then((v) => { if (v.architecture === 'x86') setMac('mac-intel'); }).catch(() => {});

  /* ---------- Galleria ---------- */
  const galleryImg = document.getElementById('gallery-img'); let shot = 'home';
  function updateCaption() {
    document.getElementById('gallery-title').textContent = t(`cap.${shot}.t`);
    document.getElementById('gallery-text').textContent = t(`cap.${shot}.d`);
    galleryImg.alt = `${t(`cap.${shot}.t`)} — ${t(`cap.${shot}.d`)}`;
  }
  document.querySelectorAll('[data-shot]').forEach((b) => b.addEventListener('click', () => {
    shot = b.dataset.shot;
    document.querySelectorAll('[data-shot]').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
    galleryImg.style.opacity = '0.25';
    const next = new Image(); next.src = `assets/img/screens/${shot}-1440.webp`;
    const swap = () => { galleryImg.src = `assets/img/screens/${shot}-1440.webp`; galleryImg.srcset = `assets/img/screens/${shot}-1440.webp 1440w, assets/img/screens/${shot}-2880.webp 2880w`; galleryImg.style.opacity = '1'; updateCaption(); };
    next.decode ? next.decode().then(swap, swap) : (next.onload = swap);
  }));

  /* ---------- Comparsa discreta ---------- */
  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    reveal.forEach((el) => io.observe(el));
  } else reveal.forEach((el) => el.classList.add('in'));

  applyLang();
})();
