/* ============================================================
   HELEN McCLURG — EDIT EVERYTHING HERE
   This is the only file you need to touch to add photographs,
   reviews and venues. Nothing else needs changing.
   ============================================================ */

/* ---------- 1. PHOTOGRAPHS ----------------------------------
   Drop your files into the /images folder, then put the file
   name next to the matching slot below, e.g.

       'hero': 'images/hero.jpg',

   Anything left empty keeps showing a labelled placeholder,
   so the site never breaks while you are still collecting them.
------------------------------------------------------------ */
const IMAGES = {
  /* home */
  'hero':            '',   /* landscape, 2000px wide or more — this is the full first screen */
  'folio-01':        '',   /* portrait 4:5 */
  'folio-02':        '',
  'folio-03':        '',
  'folio-04':        '',
  'folio-05':        '',
  'chapter-brides':  '',   /* landscape, full-bleed */
  'chapter-party':   '',
  'chapter-morning': '',

  /* about */
  'about-01':        '',
  'about-02':        '',

  /* services */
  'services-01':     '',
  'services-02':     '',

  /* gallery */
  'gal-bride-01':'', 'gal-bride-02':'', 'gal-bride-03':'',
  'gal-bride-04':'', 'gal-bride-05':'', 'gal-bride-06':'',
  'gal-chapter':'',
  'gal-party-01':'', 'gal-party-02':'', 'gal-party-03':'',
  'gal-party-04':'', 'gal-party-05':'', 'gal-party-06':'',
  'gal-look-01':'', 'gal-look-02':'', 'gal-look-03':'', 'gal-look-04':''
};

/* ---------- 2. GOOGLE REVIEWS -------------------------------
   Paste Helen's real Google reviews below, and put her Google
   Business review link in GOOGLE_REVIEW_URL.
   To use a live feed instead (Elfsight, Google Places API),
   drop the embed code inside <div id="reviewsGrid"> on
   index.html and delete this array.
------------------------------------------------------------ */
const GOOGLE_REVIEW_URL = '#';

const REVIEWS = [
  { quote:'Paste review text here.', name:'Bride name', meta:'Google review' },
  { quote:'Paste review text here.', name:'Bride name', meta:'Google review' },
  { quote:'Paste review text here.', name:'Bride name', meta:'Google review' }
];

/* ---------- 3. VENUES --------------------------------------- */
const VENUES = ['Clandeboye','Orangetree','Culloden','Titanic','The Merchant'];

/* ---------- 4. BRIDAL FAQs ---------------------------------- */
const FAQS = [
  ['How far in advance should I book my wedding makeup?',
   ['I recommend securing your wedding date as early as possible, particularly for popular summer and Saturday dates. Once your date is booked you can relax knowing your bridal makeup is taken care of.',
    'If your wedding is coming up soon, please still get in touch — I\'m always happy to check my availability.']],
  ['What is included in your bridal package?',
   ['My bridal package is designed to make your wedding morning feel relaxed, organised and completely stress-free. It includes a bridal trial, makeup for the bride and additional members of your bridal party, with the option to add extra people if required.',
    'I\'ll provide you with full package details when you enquire.']],
  ['Do you travel to my wedding or getting-ready location?',
   ['Yes. I travel to your chosen getting-ready location, making your wedding morning as easy and relaxed as possible.',
    'Travel is included for locations within 90 minutes of me. Additional overnight charges may apply for locations further afield, which I\'ll confirm when you enquire.']],
  ['Do you offer bridal trials?',
   ['Absolutely. Your bridal trial is the perfect opportunity for us to chat through your ideas, get to know your skin, and create and tweak until we land your perfect bridal look.',
    'It\'s also a chance to see how your makeup feels and wears, so you can head into your wedding day feeling completely confident.']],
  ['When should I have my bridal trial?',
   ['I generally recommend having your trial around two to three months before your wedding, although this can vary depending on your plans.',
    'If you\'re having your trial earlier, that\'s absolutely fine too. The most important thing is that you have enough time to feel happy and confident with your final look.']],
  ['What should I bring to my bridal trial?',
   ['Any inspiration pictures you love are always helpful, as well as photographs of your dress, flowers or overall wedding style if you have them. Wear tan if you plan to on your wedding day, along with hair styled and a light coloured top.',
    'Most importantly, come with an open mind — I\'ll use my experience to help create a look that suits you, your features and your personal style.']],
  ['How long does bridal makeup take?',
   ['I allow plenty of time in the morning so that your makeup never feels rushed. We always aim to have makeup for everyone completed at least an hour before you plan to leave for your ceremony, which allows time for touch-ups, body makeup, photographs and getting into dresses.',
    'Your exact start time depends on the number of people having makeup and your ceremony time. I\'ll create a timeline for you once I have these details.']],
  ['Will my makeup last all day?',
   ['Absolutely. Long-lasting, photograph-ready makeup is a huge part of my bridal style.',
    'I use only high-quality, tried and tested products, and carefully prepare the skin before applying your makeup. My goal is for your makeup to look beautiful from those first getting-ready photographs right through to the dancing, happy tears and everything in between.']],
  ['Can you create a natural bridal look?',
   ['Of course — bridal makeup doesn\'t have to mean full glam.',
    'Whether you want soft and natural, fresh and glowing, polished and elegant or full bridal glam, I\'ll work with your personal preferences to create a look that still feels completely you, only elevated.']],
  ['Can everyone in my bridal party have a different look?',
   ['Absolutely. Everyone has different features, skin and personal preferences, so I never believe in a one-size-fits-all approach.',
    'I\'ll work with each person individually to create a look they feel comfortable and confident wearing, while keeping the overall bridal party beautifully cohesive.']],
  ['How do I book my wedding date?',
   ['The first step is to get in touch through my bridal enquiry form or by email with your wedding date, getting-ready location and number in your bridal party.',
    'I\'ll then check my availability and send you a bespoke quote. Once you\'re happy to go ahead, a small deposit secures your date, another small payment is due at your bridal trial, and the remaining balance 48 hours before. You\'ll receive package information confirming everything included, along with a booking contract.']],
  ['What happens if my wedding morning runs behind?',
   ['This is where years of bridal experience really come into play.',
    'Wedding mornings don\'t always go exactly to plan, and I\'m very used to working in busy, sometimes high-pressure environments. I\'ll keep a close eye on the timeline and adapt where needed — which is exactly why we allow that extra hour before you leave.',
    'My job isn\'t just to create beautiful makeup, it\'s to bring the calm and the glam, so you can relax and enjoy your morning knowing you\'re in safe hands.']]
];
