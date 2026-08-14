/* ============================================================
   HELEN McCLURG BRIDAL — EDIT EVERYTHING HERE
   ------------------------------------------------------------
   Each photograph has:
     src  the file in /images
     alt  the description Google and screen readers read
     w/h  the real pixel size (stops the page jumping as it loads)
     pos  where to anchor the crop, e.g. 'center 25%' pulls the
          crop upward so faces stay in frame on wide screens
   ============================================================ */

const IMAGES = {

  /* ---------- HOME — hero ---------- */
  'hero': { src:'images/bridal-hero.jpg', alt:"Helen McClurg applying bridal makeup by a window on a wedding morning", w:1800, h:2701, pos:'center 58%' },

  /* ---------- HOME — portfolio carousel ---------- */
  'folio-01': { src:'images/bride-sleek-veil.jpg', alt:"Bride in a sleek crepe gown with a pearl-edged veil", w:1200, h:2133, pos:'center 30%' },
  'folio-02': { src:'images/bride-stairs.jpg', alt:"Bride on the stairs with a bright summer bouquet", w:1066, h:1600, pos:'center 22%' },
  'folio-03': { src:'images/bride-long-curls.jpg', alt:"Bride with long soft curls in an off-the-shoulder gown", w:1179, h:1872, pos:'center 30%' },
  'folio-04': { src:'images/bride-updo.jpg', alt:"Bride with a soft updo and pearl hairpiece", w:1200, h:1800, pos:'center 30%' },
  'folio-05': { src:'images/bride-lace-sleeves.jpg', alt:"Bride in an off-the-shoulder lace gown with a red and pink bouquet", w:1200, h:2133, pos:'center 25%' },
  'folio-06': { src:'images/bride-red-bouquet.jpg', alt:"Bride in a lace gown holding a red and orange bouquet", w:1500, h:2667, pos:'center 25%' },
  'folio-07': { src:'images/party-burgundy.jpg', alt:"Bride and her bridesmaids in burgundy", w:1200, h:1815, pos:'center 32%' },
  'folio-08': { src:'images/bride-peach-bouquet.jpg', alt:"Bride with a soft glowing look and a peach bouquet", w:1200, h:2133, pos:'center 25%' },
  'folio-09': { src:'images/bride-pearl-necklace.jpg', alt:"Bride in a veil wearing a pearl necklace", w:1200, h:1600, pos:'center 25%' },
  'folio-10': { src:'images/party-gold-staircase.jpg', alt:"Bride and bridesmaids in gold satin on a sweeping staircase", w:1160, h:819, pos:'center 32%' },

  /* ---------- HOME — full-bleed bands ---------- */
  'chapter-brides': { src:'images/bride-stairs.jpg', alt:"Bride on the stairs with a bright summer bouquet", w:1066, h:1600, pos:'center 22%' },
  'chapter-party': { src:'images/party-wisteria.jpg', alt:"Bride and her bridesmaids under a wisteria walkway", w:1066, h:1600, pos:'center 48%' },
  'chapter-morning': { src:'images/helen-chandelier.jpg', alt:"Helen applying lip colour to a bride beneath a chandelier", w:1500, h:2250, pos:'center 45%' },

  /* ---------- HOME — instagram strip ---------- */
  'insta-01': { src:'images/bride-long-curls.jpg', alt:"Bride with long soft curls in an off-the-shoulder gown", w:1179, h:1872, pos:'center 30%' },
  'insta-02': { src:'images/helen-kitchen.jpg', alt:"Helen doing bridal makeup at a kitchen island on the wedding morning", w:1130, h:1595, pos:'center 40%' },
  'insta-03': { src:'images/party-burgundy.jpg', alt:"Bride and her bridesmaids in burgundy", w:1200, h:1815, pos:'center 32%' },
  'insta-04': { src:'images/bride-mum-garden.jpg', alt:"Bride with her mother in a walled garden", w:1174, h:1856, pos:'center 35%' },
  'insta-05': { src:'images/bride-sleek-veil.jpg', alt:"Bride in a sleek crepe gown with a pearl-edged veil", w:1200, h:2133, pos:'center 30%' },
  'insta-06': { src:'images/party-gold-staircase.jpg', alt:"Bride and bridesmaids in gold satin on a sweeping staircase", w:1160, h:819, pos:'center 32%' },
  'insta-07': { src:'images/helen-blusher.jpg', alt:"Helen McClurg applying blusher to a bride", w:828, h:1242, pos:'center 40%' },
  'insta-08': { src:'images/bride-updo.jpg', alt:"Bride with a soft updo and pearl hairpiece", w:1200, h:1800, pos:'center 30%' },

  /* ---------- ABOUT ---------- */
  'about-01': { src:'images/helen-blusher.jpg', alt:"Helen McClurg applying blusher to a bride", w:828, h:1242, pos:'center 40%' },
  'about-02': { src:'images/helen-ringlight.jpg', alt:"Helen McClurg at work with her professional kit and ring light", w:1200, h:1800, pos:'center 40%' },

  /* ---------- SERVICES ---------- */
  'services-01': { src:'images/helen-kitchen.jpg', alt:"Helen doing bridal makeup at a kitchen island on the wedding morning", w:1130, h:1595, pos:'center 40%' },
  'services-02': { src:'images/bride-peach-bouquet.jpg', alt:"Bride with a soft glowing look and a peach bouquet", w:1200, h:2133, pos:'center 25%' },

  /* ---------- REVIEWS page ---------- */
  'quotes-01': { src:'images/helen-laughing.jpg', alt:"Helen laughing with a bride on her wedding morning", w:584, h:876, pos:'center 35%' },

  /* ---------- GALLERY — brides ---------- */
  'gal-01': { src:'images/bride-sleek-veil.jpg', alt:"Bride in a sleek crepe gown with a pearl-edged veil", w:1200, h:2133, pos:'center 30%' },
  'gal-02': { src:'images/bride-stairs.jpg', alt:"Bride on the stairs with a bright summer bouquet", w:1066, h:1600, pos:'center 22%' },
  'gal-03': { src:'images/bride-long-curls.jpg', alt:"Bride with long soft curls in an off-the-shoulder gown", w:1179, h:1872, pos:'center 30%' },
  'gal-04': { src:'images/bride-updo.jpg', alt:"Bride with a soft updo and pearl hairpiece", w:1200, h:1800, pos:'center 30%' },
  'gal-05': { src:'images/bride-lace-sleeves.jpg', alt:"Bride in an off-the-shoulder lace gown with a red and pink bouquet", w:1200, h:2133, pos:'center 25%' },
  'gal-06': { src:'images/bride-red-bouquet.jpg', alt:"Bride in a lace gown holding a red and orange bouquet", w:1500, h:2667, pos:'center 25%' },
  'gal-07': { src:'images/bride-peach-bouquet.jpg', alt:"Bride with a soft glowing look and a peach bouquet", w:1200, h:2133, pos:'center 25%' },
  'gal-08': { src:'images/bride-pearl-necklace.jpg', alt:"Bride in a veil wearing a pearl necklace", w:1200, h:1600, pos:'center 25%' },
  'gal-09': { src:'images/bride-mum-garden.jpg', alt:"Bride with her mother in a walled garden", w:1174, h:1856, pos:'center 35%' },

  /* ---------- GALLERY — bridal party ---------- */
  'gal-chapter': { src:'images/party-blue-dresses.jpg', alt:"Bride and her bridesmaids in pale blue, makeup by Helen McClurg", w:1206, h:785, pos:'center 35%' },
  'gal-party-01': { src:'images/party-wisteria.jpg', alt:"Bride and her bridesmaids under a wisteria walkway", w:1066, h:1600, pos:'center 48%' },
  'gal-party-02': { src:'images/party-gold-staircase.jpg', alt:"Bride and bridesmaids in gold satin on a sweeping staircase", w:1160, h:819, pos:'center 32%' },
  'gal-party-03': { src:'images/party-burgundy.jpg', alt:"Bride and her bridesmaids in burgundy", w:1200, h:1815, pos:'center 32%' },
  'gal-party-04': { src:'images/party-blue-dresses.jpg', alt:"Bride and her bridesmaids in pale blue, makeup by Helen McClurg", w:1206, h:785, pos:'center 35%' },
  'gal-party-05': { src:'images/bride-mothers.jpg', alt:"Bride with both mothers on her wedding day", w:1251, h:959, pos:'center 35%' },

  /* ---------- GALLERY — the morning ---------- */
  'gal-bts-01': { src:'images/helen-chandelier.jpg', alt:"Helen applying lip colour to a bride beneath a chandelier", w:1500, h:2250, pos:'center 45%' },
  'gal-bts-02': { src:'images/helen-blusher.jpg', alt:"Helen McClurg applying blusher to a bride", w:828, h:1242, pos:'center 40%' },
  'gal-bts-03': { src:'images/helen-laughing.jpg', alt:"Helen laughing with a bride on her wedding morning", w:584, h:876, pos:'center 35%' },
  'gal-bts-04': { src:'images/helen-kitchen.jpg', alt:"Helen doing bridal makeup at a kitchen island on the wedding morning", w:1130, h:1595, pos:'center 40%' },
  'gal-bts-05': { src:'images/helen-ringlight.jpg', alt:"Helen McClurg at work with her professional kit and ring light", w:1200, h:1800, pos:'center 40%' },
  'gal-bts-06': { src:'images/helen-veil-touchup.jpg', alt:"Helen touching up a bride in her gown and full-length veil", w:1200, h:1800, pos:'center 40%' }
};

/* ---------- GOOGLE RATING (homepage badge) ------------------
   Put Helen's Google Business review link in GOOGLE_REVIEW_URL
   so 'Read our reviews' opens her real Google listing.
------------------------------------------------------------ */
const GOOGLE_RATING = '5.0';
const GOOGLE_REVIEW_URL = '#';

const INSTAGRAM_URL    = 'https://www.instagram.com/helen_mcclurg_makeup';
const INSTAGRAM_HANDLE = '@helen_mcclurg_makeup';

/* ---------- VENUES ------------------------------------------ */
const VENUES = ['Clandeboye','Orangetree','Culloden','Titanic','The Merchant'];

/* ---------- TESTIMONIALS ------------------------------------
   Named reviews come first — they carry far more weight.
   The last five came from messages without a name attached;
   add first names as Helen gets permission.
------------------------------------------------------------ */
const TESTIMONIALS = [
  { stars:5, who:'Lauren', meta:'Google review',
    paras:[
      'The best wedding makeup! As someone who didn\'t really know what to ask for, Helen knew and nailed the brief. My maids, my mum and I were so, so pleased \u2014 we kept saying we felt like us, but elevated.',
      'And Helen is just lovely, and made the whole experience so relaxed. I know word of mouth is so important \u2014 I would recommend her to anybody. Thanks so much, Helen!'
    ]},
  { stars:5, who:'Amy Hawe', meta:'Google review',
    paras:[
      'Cannot thank Helen enough! She managed to do my bridal makeup plus five bridesmaids and my mum, and we all absolutely loved our makeup \u2014 it looked flawless in all the photos. Helen is also so, so lovely. Would highly recommend.'
    ]},
  { stars:5, who:'Ashley Robertson', meta:'Google review',
    paras:[
      'I had the privilege of having Helen do my make up for my wedding. She is absolutely amazing at what she does, and listens and works with you to achieve the look you want.',
      'Helen is also a lovely, chatty and down to earth person who helps keep those nerves at bay during the getting ready process. I can\'t thank Helen enough \u2014 she made the bridesmaids and I look beautiful for my big day, and I will definitely be using her again if I ever need my make up done for an event.'
    ]},
  { stars:5, who:'Bride', meta:'Clandeboye Lodge',
    paras:[
      'I first met Helen briefly at a wedding fair in the Clandeboye Lodge, and I knew straight away that I wanted to book her. She came across as one of the loveliest, most calming people, and her makeup artistry reflects that perfectly.',
      'On the morning of the wedding, Helen created such a relaxed atmosphere and made me, my bridesmaids and my mum feel completely at ease. The makeup she did for all of us was honestly absolutely stunning \u2014 I genuinely didn\'t want to take mine off at the end of the night. It lasted beautifully all day and night, I didn\'t need to touch up my makeup at all. Even after hours of dancing, it still looked fresh, glowing and flawless.',
      'I honestly don\'t think I\'ve ever felt more beautiful. If you\'re considering who to book for your wedding makeup, I couldn\'t recommend Helen highly enough.'
    ]},
  { stars:5, who:'Bride', meta:'Booked without a trial',
    paras:[
      'I was lucky enough to stumble across Helen and hire her as my make up artist for my wedding. Wow, best decision I made. She brought such a calm and cool energy to the morning of my wedding.',
      'The make up was stunning \u2014 I have never seen my eyes the colour they were when Helen did my eyes. Everyone complimented the make up of my bridal party, a range of ages, and it did not budge the entire day. She did all of this without a trial, at my request. I would and will highly recommend her to all future brides.'
    ]},
  { stars:5, who:'Bride', meta:'Bridesmaids and mother of the bride',
    paras:[
      'Attention all brides to be! Let me make a difficult choice easy for you \u2014 book Helen for your wedding makeup.',
      'Helen herself is so lovely, so calm, so joyful and definitely the type of person you want around on your wedding morning. Everyone was so happy with their makeup, and she was so open to making little tweaks and changes if they wanted.',
      'I actually booked a second makeup trial after I changed my idea of what I wanted, and Helen was so accommodating to fit me in close to my wedding date. I teared up when I saw my makeup on my wedding day. I still looked like myself but the most elevated version. She went above and beyond \u2014 she helped the bridesmaids get ready and sorted all of our bouquets, and stayed until the very last second to do touch ups.'
    ]},
  { stars:5, who:'Bride', meta:'Returning family client',
    paras:[
      'I gurned, and then I laughed until I cried, and then I probably gurned some more \u2014 and it stood the test of time.',
      'Helen was the first person I booked after nabbing our date and I was absolutely delighted she was free. She\'d sorted us a few years prior for my sister\'s wedding so I was well aware of how incredible she is at her job.',
      'I felt completely comfortable in my own skin the entire day. We had the loveliest morning \u2014 the best chats and a bit of craic. Cannot recommend Helen enough, from communication to last minute needs, absolutely nothing was too much. Best there is.'
    ]},
  { stars:5, who:'Bride', meta:'Bridal party of four',
    paras:[
      'A massive thank you for yesterday. I can\'t express how much we loved having you there as part of the morning \u2014 you made us all feel so relaxed and you definitely put me at ease.',
      'We absolutely loved our makeup. My bridesmaids and mum were absolutely stunning, and everyone was commenting through the day how fabulous our makeup was. Feeling very lucky to have found you.'
    ]}
];

/* ---------- BRIDAL FAQs ------------------------------------- */
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
