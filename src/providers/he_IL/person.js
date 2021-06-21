var glues = [".", "-", "_", null];

var provider = {
  phone_formats: ["###-###-####"],

  first_name_male: [
    "אביאל",
    "אביגדור",
    "אביה",
    "אביחי",
    "אבינועם",
    "אביעד",
    "אבירם",
    "אבירן",
    "אבישי",
    "אביתר",
    "אברהם",
    "אבשלום",
    "אגם",
    "אדיר",
    "אדם",
    "אדר",
    "אהוד",
    "אהרון",
    "אוהד",
    "אופיר",
    "אופק",
    "אור",
    "אורי",
    "אוריאל",
    "אוריה",
    "אורן",
    "אושרי",
    "אחיה",
    "אייל",
    "איל",
    "אילון",
    "אילן",
    "אימרי",
    "איתי",
    "איתם",
    "איתמר",
    "איתן",
    "אלדד",
    "אלדר",
    "אלון",
    "אלחי",
    "אלחנן",
    "אליאב",
    "אליאור",
    "אליאס",
    "אליה",
    "אליהו",
    "אלימלך",
    "אליסף",
    "אלירז",
    "אלירן",
    "אלישיב",
    "אלישמע",
    "אלישע",
    "אלכס",
    "אלכסנדר",
    "אלמוג",
    "אלעד",
    "אלקנה",
    "אלרועי",
    "אמור",
    "אמיר",
    "אמיתי",
    "אמנון",
    "אסיף",
    "אסף",
    "אפיק",
    "אפרים",
    "אראל",
    "ארבל",
    "ארז",
    "ארטיום",
    "ארי",
    "אריאל",
    "אריה",
    "ארנון",
    "ארתור",
    "אשד",
    "אשל",
    "אשר",
    "בארי",
    "בועז",
    "בן אל",
    "בן ציון",
    "בניה",
    "בנימין",
    "בצלאל",
    "בר",
    "בראל",
    "ברוך",
    "ברי",
    "ברק",
    "גד",
    "גדעון",
    "גוון",
    "ג'וי",
    "גולן",
    "ג'ון",
    "גוני",
    "גור",
    "גורן",
    "גיא",
    "גיורא",
    "גיל",
    "גילי",
    "גל",
    "גלבוע",
    "גלעד",
    "גפן",
    "דביר",
    "דגן",
    "דוד",
    "דולב",
    "דור",
    "דורון",
    "דן",
    "דני",
    "דניאל",
    "דקל",
    "דרור",
    "הדר",
    "הוד",
    "הלל",
    "הראל",
    "ולדימיר",
    "זאב",
    "זבולון",
    "זוהר",
    "זיו",
    "חביב",
    "חגי",
    "חושן",
    "חי",
    "חיים",
    "חמי",
    "חן",
    "חנוך",
    "חנן",
    "חסד",
    "טל",
    "טנא",
    "יאיר",
    "יאן",
    "יגאל",
    "יגל",
    "ידיד",
    "ידידיה",
    "יהב",
    "יהודה",
    "יהונתן",
    "יהורם",
    "יהושע",
    "יהל",
    "יהלום",
    "יהלי",
    "יואב",
    "יואל",
    "יובל",
    "יוגב",
    "יוחאי",
    "יונתן",
    "יוסף",
    "יורם",
    "יותם",
    "יחזקאל",
    "ים",
    "ינון",
    "יניב",
    "יעקב",
    "יפתח",
    "יצחק",
    "יקיר",
    "ירדן",
    "ירון",
    "יריב",
    "ישי",
    "ישראל",
    "יששכר",
    "יאיר",
    "יאן",
    "יגאל",
    "יגל",
    "ידיד",
    "ידידיה",
    "יהב",
    "יהודה",
    "יהונתן",
    "יהורם",
    "יהושע",
    "יהל",
    "יהלום",
    "יהלי",
    "יואב",
    "יואל",
    "יובל",
    "יוגב",
    "יוחאי",
    "יונתן",
    "יוסף",
    "יורם",
    "יותם",
    "יחזקאל",
    "ים",
    "ינון",
    "יניב",
    "יעקב",
    "יפתח",
    "יצחק",
    "יקיר",
    "ירדן",
    "ירון",
    "יריב",
    "ישי",
    "ישראל",
    "יששכר",
    "כוכב",
    "כליל",
    "כפיר",
    "כרם",
    "כרמי",
    "כרמל",
    "לב",
    "לביא",
    "לוטם",
    "לוטן",
    "לוי",
    "לי",
    "ליאון",
    "ליאור",
    "ליאל",
    "ליאם",
    "לידור",
    "ליעד",
    "ליר",
    "לירוי",
    "לירון",
    "לירז",
    "לירן",
    "מאור",
    "מאיר",
    "מגל",
    "מור",
    "מורן",
    "מיטב",
    "מיכאל",
    "מירן",
    "מלאכי",
    "מנחם",
    "מנשה",
    "מעיין",
    "מרדכי",
    "משה",
    "מתן",
    "נבו",
    "נדב",
    "נהוראי",
    "נוב",
    "נוי",
    "נועם",
    "נח",
    "נחשון",
    "נטע",
    "ניב",
    "ניסן",
    "ניצן",
    "ניקולס",
    "ניר",
    "ניתאי",
    "נמרוד",
    "נפתלי",
    "נרי",
    "נריה",
    "נתיב",
    "נתן",
    "נתנאל",
    "סביון",
    "סהר",
    "סול",
    "סטפן",
    "סיני",
    "סער",
    "סרגיי",
    "סשה",
    "סתיו",
    "עברי",
    "עדי",
    "עדן",
    "עודד",
    "עוז",
    "עוזיה",
    "עומר",
    "עומרי",
    "עופר",
    "עופרי",
    "עידו",
    "עידן",
    "עילאי",
    "עלי",
    "עמוס",
    "עמיחי",
    "עמית",
    "עמנואל",
    "עקיבא",
    "ערן",
    "פלא",
    "פלג",
    "צבי",
    "צדק",
    "צוף",
    "צוק",
    "צור",
    "צח",
    "צחי",
    "ציון",
    "צליל",
    "קסם",
    "ראובן",
    "ראם",
    "רביב",
    "רביד",
    "רגב",
    "רון",
    "רוני",
    "רועי",
    "רותם",
    "רז",
    "ריי",
    "רימון",
    "רם",
    "רן",
    "רעי",
    "רפאל",
    "שאול",
    "שגב",
    "שגיא",
    "שובל",
    "שוהם",
    "שחף",
    "שחק",
    "שחר",
    "שי",
    "שי לי",
    "שילה",
    "שיר",
    "שלום",
    "שלומי",
    "שלמה",
    "שמאי",
    "שמואל",
    "שמחה",
    "שמעון",
    "שקד",
    "שרון",
    "תבור",
    "תו",
    "תום",
    "תומר",
    "תיאו",
    "תמיר",
  ],
  first_name_female: [
    "אביב",
    "אביבית",
    "אביגיל",
    "אביה",
    "אביטל",
    "אבישג",
    "אגם",
    "אדווה",
    "אדל",
    "אדר",
    "אהבה",
    "אודיה",
    "אודליה",
    "אווה",
    "אופיר",
    "אופירה",
    "אופל",
    "אופק",
    "אור",
    "אביגיל",
    "אורטל",
    "אורי",
    "אוריה",
    "אורית",
    "אורלי",
    "אושרי",
    "איב",
    "איה",
    "איילה",
    "איילת",
    "אילנה",
    "אילנית",
    "אימרי",
    "אירית",
    "אלה",
    "אלומה",
    "אליאנה",
    "אליה",
    "אלין",
    "אלינור",
    "אליענה",
    "אלירז",
    "אלישבע",
    "אלכס",
    "אלמוג",
    "אמונה",
    "אמור",
    "אן",
    "אנאבל",
    "אנה",
    "אסיף",
    "אסנת",
    "אסתר",
    "אפיק",
    "אפריל",
    "אפרת",
    "אראלה",
    "ארבל",
    "אריאל",
    "אריאלה",
    "אריאנה",
    "ארייה",
    "בארי",
    "בל",
    "בלה",
    "בר",
    "ברית",
    "ברקת",
    "בת",
    "בת אל",
    "בת חן",
    "בת שבע",
    "בתיה",
    "גאיה",
    "גבריאל",
    "גבריאלה",
    "גוון",
    "ג'וי",
    "ג'ון",
    "גוני",
    "גורן",
    "גיל",
    "גילי",
    "גילת",
    "גל",
    "גלי",
    "גליה",
    "גלית",
    "גפן",
    "דבורה",
    "דגן",
    "דגנית",
    "דור",
    "דורון",
    "דורין",
    "דורית",
    "דיאנה",
    "דינה",
    "דליה",
    "דנה",
    "דניאל",
    "דניאלה",
    "דנית",
    "דפנה",
    "דקל",
    "דקלה",
    "הגר",
    "הדס",
    "הדסה",
    "הדר",
    "הודיה",
    "הילה",
    "הלל",
    "ויויאן",
    "ויטה",
    "ויקטוריה",
    "ורד",
    "זהבה",
    "זוהר",
    "זיו",
    "חגית",
    "חושן",
    "חיננית",
    "חירות",
    "חמוטל",
    "חן",
    "חנה",
    "חנית",
    "טובה",
    "טופז",
    "טל",
    "טלי",
    "טליה",
    "טנא",
    "יהב",
    "יהודית",
    "יהל",
    "יהלום",
    "יהלי",
    "יובל",
    "יודפת",
    "יוכבד",
    "יוליה",
    "יונית",
    "יונת",
    "ים",
    "ימית",
    "יסכה",
    "יסמין",
    "יעל",
    "יעלה",
    "יערה",
    "יפה",
    "יפית",
    "יפעת",
    "ירדן",
    "כוכב",
    "כליל",
    "כרם",
    "כרמי",
    "כרמית",
    "כרמל",
    "לאה",
    "לבנה",
    "לוטם",
    "לוטן",
    "לוסי",
    "לי",
    "ליאור",
    "ליאורה",
    "ליאל",
    "ליאם",
    "ליאן",
    "ליאת",
    "ליב",
    "ליבי",
    "לידור",
    "ליה",
    "ליהיא",
    "ליזה",
    "ליטל",
    "לילי",
    "ליליה",
    "לילך",
    "לימור",
    "ליעד",
    "ליר",
    "לירון",
    "לירז",
    "לירן",
    "לשם",
    "מאור",
    "מאי",
    "מאיה",
    "מגי",
    "מגל",
    "מור",
    "מוריה",
    "מורן",
    "מיה",
    "מיטב",
    "מיטל",
    "מיכאל",
    "מיכאלה",
    "מיכל",
    "מיקה",
    "מירן",
    "מלכה",
    "מעיין",
    "מצדה",
    "מרב",
    "מריה",
    "מרים",
    "מרינה",
    "מתנה",
    "מתת",
    "נאוה",
    "נגה",
    "נוי",
    "נויה",
    "נועה",
    "נועם",
    "נופר",
    "נורית",
    "נטלי",
    "נטע",
    "נטעלי",
    "ניב",
    "נילי",
    "נינט",
    "ניצן",
    "נעמה",
    "נעמי",
    "נרי",
    "נריה",
    "סביון",
    "סהר",
    "סול",
    "סופיה",
    "סיגלית",
    "סיון",
    "סמדר",
    "ספיר",
    "סשה",
    "סתיו",
    "עדי",
    "עדן",
    "עדנה",
    "עומר",
    "עופרי",
    "עיינה",
    "עינב",
    "עינת",
    "עלמא",
    "עלמה",
    "עמית",
    "עמליה",
    "עמנואל",
    "ענבל",
    "ענבר",
    "ענהאל",
    "ענת",
    "עפרה",
    "ערגה",
    "פלג",
    "צאלה",
    "צוף",
    "צופיה",
    "צליל",
    "צמרת",
    "קורין",
    "קורל",
    "קטיה",
    "קליה",
    "קמה",
    "קסם",
    "קסניה",
    "קרן",
    "קשת",
    "רביד",
    "רבקה",
    "רויטל",
    "רוית",
    "רומי",
    "רון",
    "רונהלי",
    "רוני",
    "רונית",
    "רות",
    "רותם",
    "רז",
    "רחל",
    "ריטה",
    "רימון",
    "רינת",
    "רננה",
    "רעות",
    "שגב",
    "שגית",
    "שובל",
    "שוהם",
    "שולמית",
    "שונית",
    "שושנה",
    "שחף",
    "שחר",
    "שי",
    "שי לי",
    "שיר",
    "שיראל",
    "שירה",
    "שירז",
    "שירי",
    "שלהבת",
    "שלומית",
    "שלי",
    "שמחה",
    "שמרית",
    "שני",
    "שקד",
    "שקמה",
    "שרה",
    "שרון",
    "שרית",
    "תאיר",
    "תאנה",
    "תבור",
    "תהילה",
    "תו",
    "תום",
    "תומר",
    "תכלת",
    "תלמה",
    "תמר",
    "תמרה",
    "תפארת",
    "תקווה",
  ],
  last_name: [
    "עברות",
    "אביב",
    "אביבי",
    "אביגור",
    "אבידור",
    "אבידן",
    "אביטל",
    "אבינועם",
    "אבינר",
    "אבינרי",
    "אביעד",
    "אביעזר",
    "אבירם",
    "אבישי",
    "אבישר",
    "אביתר",
    "אבן",
    "אבן זהב",
    "אבן חן",
    "אבן צור",
    "אבן שושן",
    "אבנון",
    "אבני",
    "אבניאל",
    "אבנר",
    "אבנרי",
    "אברהם",
    "אברהמי",
    "אברון",
    "אבריאל",
    "אגוז",
    "אגוזי",
    "אגמון",
    "אגרון",
    "אדוני",
    "אדיב",
    "אדירי",
    "אדם",
    "אדמון",
    "אדמוני",
    "אדר",
    "אהרוני",
    "אהרן",
    "אוהד",
    "און",
    "אופיר",
    "אופק",
    "אור",
    "אורון",
    "אוריאל",
    "אוריה",
    "אוריון",
    "אוריין",
    "אורן",
    "אזרחי",
    "אחז",
    "אחיטוב",
    "אחרון",
    "אייל",
    "איילון",
    "אילון",
    "אילן",
    "אילני",
    "אילת",
    "איש כסית",
    "איששלום",
    "איתם",
    "איתן",
    "אלדד",
    "אלדד",
    "אלדן",
    "אלול",
    "אלון",
    "אלוני",
    "אלוף",
    "אלחנני",
    "אליאב",
    "אליהו",
    "אליעז",
    "אליעזר",
    "אליצור",
    "אליקים",
    "אלישיב",
    "אלמגור",
    "אלמוג",
    "אלעד",
    "אלעזר",
    "אלרום",
    "אלרון",
    "אמיר",
    "אמית",
    "אמיתי",
    "אנקורי",
    "אסא",
    "אסיא",
    "אסיף",
    "אסף",
    "אפעל",
    "אפק",
    "אפרת",
    "אראל",
    "ארבל",
    "ארגוב",
    "ארגמן",
    "ארד",
    "ארדון",
    "ארוך",
    "ארז",
    "ארזי",
    "אריאב",
    "אריאל",
    "אריאלי",
    "ארידור",
    "אריה",
    "אריכא",
    "ארם",
    "ארמוני",
    "ארנון",
    "ארצי",
    "אשבל",
    "אשד",
    "אשור",
    "אשכול",
    "אשכנזי",
    "אשל",
    "אשר",
    "אשרי",
    "אשרת",
    "אתגר",
    "אתר",
    "אתרוג",
    "ב׳׳ק",
    "באב׳׳ד",
    "באר",
    "בארי",
    "בבלי",
    "בהט",
    "בוצר",
    "בורר",
    "בחור",
    "ביצור",
    "בית הלחמי",
    "בית יוסף",
    "בית לחם",
    "בכור",
    "בן",
    "בן אברהם",
    "בן אליעזר",
    "בן אמוץ",
    "בן ארי",
    "בן אריה",
    "בן ארצי",
    "בן אשר",
    "בן ברוך",
    "בן ברק",
    "בן גל",
    "בן גרא",
    "בן דב",
    "בן דוד",
    "בן דור",
    "בן דיין",
    "בן זאב",
    "בן זכאי",
    "בן זקן",
    "בן חור",
    "בן חיים",
    "בן חנן",
    "בן חנניה",
    "בן יהודה",
    "בן יעקב",
    "בן יצחק",
    "בן ישי",
    "בן ישראל",
    "בן מלך",
    "בן מנחם",
    "בן נון",
    "בן נחום",
    "בן נר",
    "בן נתן",
    "בן עמי",
    "בן ענת",
    "בן פורת",
    "בן צבי",
    "בן צור",
    "בן ציון",
    "בן ראובן",
    "בן שאול",
    "בן שחר",
    "בן שלום",
    "בן שמחון",
    "בן שמעון",
    "בןגוריון",
    "בןחורין",
    "בןמאיר",
    "בןסירה",
    "בןתור",
    "בנאי",
    "משפחת בנאי",
    "בנטוב",
    "בנימין",
    "בנימיני",
    "בצלאל",
    "בר",
    "בר אור",
    "בר גיורא",
    "בר זוהר",
    "בר יהודה",
    "בר יעקב",
    "בר נתן",
    "בר שלום",
    "בראון",
    "בראילן",
    "ברהלל",
    "בריוסף",
    "ברלב",
    "ברעוז",
    "בראל",
    "ברוך",
    "ברוש",
    "ברושי",
    "ברזילי",
    "ברזל",
    "ברטוב",
    "ברטל",
    "ברנע",
    "ברעם",
    "ברק",
    "ברקאי",
    "ברקין",
    "ברקן",
    "ברקת",
    "בשן",
    "גאון",
    "גבאי",
    "גביש",
    "גבע",
    "גבעול",
    "גבעון",
    "גבעתי",
    "גבתון",
    "גד",
    "גדות",
    "גדיש",
    "גדליה",
    "גדרון",
    "גודר",
    "גולן",
    "גונן",
    "גופר",
    "גור אריה",
    "גוריון",
    "גורלי",
    "גורן",
    "גושן",
    "גזית",
    "גיא",
    "גידור",
    "גיל",
    "גילון",
    "גילת",
    "גינוסר",
    "גינת",
    "גינתון",
    "גל",
    "גלבוע",
    "גליל",
    "גלילי",
    "גלעד",
    "גלעדי",
    "גלרון",
    "גמזו",
    "גמליאל",
    "גנור",
    "גפן",
    "גפני",
    "גרא",
    "גרינבלט",
    "גרנות",
    "גרשון",
    "גת",
    "דביר",
    "דברת",
    "דגן",
    "דגני",
    "דוד",
    "דוידי",
    "דולב",
    "דור",
    "דורי",
    "דותן",
    "דן",
    "דניאלי",
    "דקל",
    "דר",
    "דרומי",
    "דרור",
    "דרורי",
    "דשא",
    "הדס",
    "הדר",
    "הלוי",
    "הללי",
    "המאירי",
    "הנגבי",
    "העצני",
    "הר נוי",
    "הר שפי",
    "הראבן",
    "הראבן",
    "הראובני",
    "הראל",
    "הרטוב",
    "הרפז",
    "הררי",
    "הללי",
    "המאירי",
    "הנגבי",
    "העצני",
    "הר נוי",
    "הר שפי",
    "הראבן",
    "הראבן",
    "הראובני",
    "הראל",
    "הרטוב",
    "הרפז",
    "הררי",
    "וילנאי",
    "ורד",
    "ורדי",
    "ורדימון",
    "זזאב",
    "זאבי",
    "זבולון",
    "זהבי",
    "זוהר",
    "זורע",
    "זיו",
    "זיואב",
    "זכאי",
    "זכות",
    "זכריה",
    "זמורה",
    "זמיר",
    "זמר",
    "זמרי",
    "זעירא",
    "זק",
    "זק׳׳ש",
    "זר",
    "זר",
    "זרובבל",
    "זרטל",
    "חדש",
    "חובה",
    "חורש",
    "חזן",
    "חזני",
    "חזקיה",
    "חי",
    "חייט",
    "חיים",
    "חכם",
    "חלד",
    "חלמיש",
    "חן",
    "חנוך",
    "חנוכה",
    "חנני",
    "חסון",
    "חסיד",
    "חפץ",
    "חפר",
    "חץ",
    "חצור",
    "חצרוני",
    "חרובי",
    "חרותי",
    "חריף",
    "חרל׳׳פ",
    "חרמון",
    "חרמוני",
    "חת",
    "טבת",
    "טוביה",
    "טלמור",
    "טלשיר",
    "יאיר",
    "יבין",
    "יגור",
    "ידיד",
    "ידין",
    "ידעיה",
    "יהב",
    "יהודאי",
    "יהודה",
    "יהושע",
    "יהלום",
    "יובל",
    "יוגב",
    "יוטבת",
    "יונה",
    "יוסף",
    "יושע",
    "יחזקאל",
    "יחיאל",
    "יכין",
    "ימיני",
    "ינון",
    "יניב",
    "יעקבי",
    "יער",
    "יערי",
    "יפה",
    "יפרח",
    "יפת",
    "יצחק",
    "יצחקי",
    "יקיר",
    "ירדני",
    "ירוחם",
    "ירום",
    "ירון",
    "ירושלמי",
    "יריב",
    "ירקוני",
    "ישורון",
    "ישי",
    "ישר",
    "ישראל",
    "ישראלי",
    "יששכר",
    "כהן",
    "משפחות כהן",
    "משפחת כהןסקלי",
    "כוכבי",
    "כנען",
    "כנעני",
    "כנר",
    "כספי",
    "כפיר",
    "כפרי",
    "כרמון",
    "כרמי",
    "כרמל",
    "כרמלי",
    "לאור",
    "לב",
    "לב ארי",
    "לבבי",
    "לביא",
    "לבנון",
    "לבני",
    "לבנת",
    "להב",
    "להבי",
    "לוטם",
    "לוטן",
    "לוי (יהדות)",
    "לוי (שם משפחה)",
    "לוי נחום",
    "לויתן",
    "לחמן",
    "ליאור",
    "לידור",
    "ליטאי",
    "לימור",
    "ליש",
    "לשם",
    "מאור",
    "מאיר",
    "מאירי",
    "מגד",
    "מגל",
    "מואב",
    "מוקד",
    "מוקדי",
    "מורג",
    "מוריה",
    "מורשת",
    "מזא׳׳ה",
    "מזור",
    "מזל",
    "מזר",
    "מאיר מיבר",
    "מיכה",
    "מילוא",
    "מישורי",
    "מלכה",
    "מלכי",
    "מלמד",
    "מנור",
    "מנחם",
    "מנשה",
    "מעוז",
    "מעיין",
    "מעייני",
    "מערבי",
    "מרגליות",
    "מרגלית",
    "מרגנית",
    "מרום",
    "מרון",
    "מרידור",
    "משה",
    "משולח",
    "משיח",
    "משעול",
    "משעל",
    "משען",
    "משעני",
    "מתניה",
    "מתתיהו",
    "נאור",
    "נאמן",
    "נבון",
    "נגבי",
    "נוב",
    "נווה",
    "נוימרק",
    "נועם",
    "נוריאל",
    "נחום",
    "נחושתן",
    "נחשון",
    "ניב",
    "ניסני",
    "ניצן",
    "נמרי",
    "נסים",
    "נץ",
    "נריה",
    "נשר",
    "נשרי",
    "נתיב",
    "נתן",
    "נתנאל",
    "נתניהו",
    "סבוראי",
    "סביר",
    "סגל",
    "סדן",
    "סהר",
    "סופר",
    "סימן טוב",
    "סיני",
    "סכנין",
    "סלע",
    "סמדר",
    "סנונית",
    "סעד",
    "סער",
    "ספיר",
    "סתוי",
    "סתיו",
    "עברון",
    "עברי",
    "עדיני",
    "עדר",
    "עובד",
    "עובדיה",
    "עובדיהו",
    "עוגן",
    "עוז",
    "עוזר",
    "עומר",
    "עופר",
    "עופרים",
    "עזוז",
    "עזריאל",
    "עזריה",
    "עזרתי",
    "עידן",
    "עילם",
    "עינב",
    "עמוס",
    "עמיאל",
    "עמיקם",
    "עמיר",
    "עמירן",
    "עמית",
    "עמרמי",
    "ענבל",
    "ענבר",
    "עסיס",
    "עפרת",
    "עצמון",
    "ערד",
    "ערמון",
    "ערן",
    "עשת",
    "פאר",
    "פדהצור",
    "פולני",
    "פורת",
    "פז",
    "פלאי",
    "פלד",
    "פלס",
    "פניני",
    "פסח",
    "פרג",
    "פרוש",
    "פרח",
    "פרי",
    "פריגת",
    "פרימור",
    "פרץ",
    "פת",
    "צבר",
    "צדוק",
    "צדקה",
    "צדקיהו",
    "צוק",
    "צור",
    "צורי",
    "צוריאל",
    "צורף",
    "צידון",
    "צמח",
    "צפיר",
    "צפריר",
    "קדמון",
    "קדמי",
    "קדר",
    "קדרון",
    "קהת",
    "קורח",
    "קורן",
    "קטן",
    "קידר",
    "קינן",
    "קיסרי",
    "קישון",
    "קם",
    "קמה",
    "קמחי",
    "קנר",
    "קנת",
    "קצב",
    "קצין",
    "קציר",
    "קשת",
    "קשתי",
    "ראובני",
    "רבי",
    "רביב",
    "רביד",
    "רגב",
    "רהב",
    "רוגל",
    "רווה",
    "רווח",
    "רוח",
    "רום",
    "רועה",
    "רז",
    "רזיאל",
    "רחמים",
    "רכס",
    "רם",
    "רמון",
    "רמז",
    "רמתי",
    "רן",
    "רענן",
    "רשף",
    "שאול",
    "שאולי",
    "שאלתיאל",
    "שבח",
    "שביב",
    "שבת",
    "שבתאי",
    "שבתי",
    "שגב",
    "שגיא",
    "שדה",
    "שדר",
    "שוב",
    "שובל",
    "שוהם",
    "שוחט",
    "שומרון",
    "שוער",
    "שופט",
    "שור",
    "שורק",
    "שושן",
    "שושני",
    "שחור",
    "שחורי",
    "שחל",
    "שחם",
    "שחף",
    "שחק",
    "שחר",
    "שילה",
    "שילוח",
    "שילון",
    "שילוני",
    "שיר",
    "שיש",
    "שלג",
    "שלו",
    "שלום",
    "שלומי",
    "שלח",
    "שלם",
    "שלמון",
    "שם אור",
    "שםטוב",
    "שמואל",
    "שמואלי",
    "שמחון",
    "שמחוני",
    "שמחי",
    "שמעון",
    "שמרון",
    "שמש (שם משפחה)",
    "שמשון",
    "שמשוני",
    "שמשי",
    "שנהר",
    "שני",
    "שנער",
    "שער",
    "שפיר",
    "שפע",
    "שץ",
    "שקד",
    "שקדי",
    "שקלים",
    "שרביט",
    "שרון",
    "שרוני",
    "שריג",
    "שריד",
    "שריף",
    "שריר",
    "ששון",
    "תאומים",
    "תאני",
    "תבור",
    "תבורי",
    "תגר",
    "תדמור",
    "תומר",
    "תורן",
    "תירוש",
    "תל צור",
    "תלם",
    "תמוז",
    "תמיר",
    "תמרי",
    "תקווה",
    "תקוע",
    "תרשיש",
    "תשבי",
  ],
  username_formats: [
    "{{last_name}}.{{first_name_male}}",
    "{{first_name_male}}.{{last_name}}",
    "{{first_name_male}}_{{last_name}}",
    "{{last_name}}_{{first_name_male}}",

	"{{last_name}}.{{first_name_female}}",
    "{{first_name_female}}.{{last_name}}",
    "{{first_name_female}}_{{last_name}}",
    "{{last_name}}_{{first_name_female}}",
  ],

  name_male_formats: ["{{first_name_male}} {{last_name}}"],
  name_female_formats: ["{{first_name_female}} {{last_name}}"],

  male_name: function () {
    return this.populate_one_of(this.name_male_formats);
  },
  female_name: function () {
    return this.populate_one_of(this.name_female_formats);
  },
  last_name: function () {
    return this.random_element(this.last_names);
  },
  username: function () {
    return this.populate_one_of(this.username_formats);
  },

  password: function () {
    return this.numerify("#" + this.first_name + "##");
  },

  phone: function () {
    return this.numerify(this.random_element(this.phone_formats));
  },
};

module.exports = provider;
