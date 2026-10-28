const storageKey = "medisync-records-v1";
const preferenceKey = "medisync-preferences-v1";
const remindersKey = "medisync-reminders-v1";
const doctorProfileKey = "medisync-doctor-profile-v1";
const clinicProfileKey = "medisync-clinic-profile-v1";
const patientProfileKey = "medisync-patient-profile-v1";
const patientProfilesKey = "medisync-patient-profiles-v1";
const activePatientKey = "medisync-active-patient-v1";
const campaignsKey = "medisync-campaign-drafts-v1";
const categories = ["prescription", "report", "medicine"];
const languageTags = { English: "en", Bangla: "bn", Urdu: "ur", Hindi: "hi", German: "de", Spanish: "es", Italian: "it" };
const translations = {
  Home: ["হোম", "ہوم", "होम", "Startseite", "Inicio", "Home"],
  "My Health": ["আমার স্বাস্থ্য", "میری صحت", "मेरा स्वास्थ्य", "Meine Gesundheit", "Mi salud", "La mia salute"],
  "Doctor's": ["ডাক্তার", "ڈاکٹرز", "डॉक्टर", "Ärzte", "Médicos", "Medici"],
  "Ads / Promotion": ["বিজ্ঞাপন / প্রচার", "اشتہارات / تشہیر", "विज्ञापन / प्रचार", "Werbung / Promotion", "Anuncios / Promoción", "Annunci / Promozione"],
  Notifications: ["নোটিফিকেশন", "اطلاعات", "सूचनाएं", "Benachrichtigungen", "Notificaciones", "Notifiche"],
  Settings: ["সেটিংস", "ترتیبات", "सेटिंग्स", "Einstellungen", "Ajustes", "Impostazioni"],
  Preferences: ["পছন্দসমূহ", "ترجیحات", "प्राथमिकताएँ", "Einstellungen", "Preferencias", "Preferenze"],
  "Set your language, appearance, and sound.": ["ভাষা, চেহারা ও শব্দ নির্ধারণ করুন।", "اپنی زبان، ظاہری شکل اور آواز منتخب کریں۔", "अपनी भाषा, रूप और ध्वनि चुनें।", "Sprache, Darstellung und Ton festlegen.", "Configura idioma, apariencia y sonido.", "Imposta lingua, aspetto e suoni."],
  "Choose the language you prefer.": ["আপনার পছন্দের ভাষা বেছে নিন।", "اپنی پسند کی زبان منتخب کریں۔", "अपनी पसंद की भाषा चुनें।", "Wählen Sie Ihre bevorzugte Sprache.", "Elige tu idioma preferido.", "Scegli la lingua che preferisci."],
  Appearance: ["চেহারা", "ظاہری شکل", "रूप", "Darstellung", "Apariencia", "Aspetto"],
  "Choose a comfortable theme.": ["পছন্দের থিম বেছে নিন।", "اپنی پسند کا تھیم منتخب کریں۔", "अपनी पसंद की थीम चुनें।", "Wählen Sie ein passendes Design.", "Elige un tema cómodo.", "Scegli un tema adatto."],
  Light: ["হালকা", "روشن", "लाइट", "Hell", "Claro", "Chiaro"],
  Dark: ["গাঢ়", "تاریک", "डार्क", "Dunkel", "Oscuro", "Scuro"],
  Sound: ["শব্দ", "آواز", "ध्वनि", "Ton", "Sonido", "Suono"],
  "Enable interface sounds": ["ইন্টারফেসের শব্দ চালু করুন", "انٹرفیس کی آوازیں فعال کریں", "इंटरफ़ेस ध्वनियाँ चालू करें", "Oberflächentöne aktivieren", "Activar sonidos de interfaz", "Attiva i suoni dell'interfaccia"],
  "Profile saved on this device. Email OTP was demo-only; account login is not enabled.": ["প্রোফাইল এই ডিভাইসে সংরক্ষিত হয়েছে। OTP শুধু ডেমো; অ্যাকাউন্ট লগইন চালু নেই।", "پروفائل اس ڈیوائس پر محفوظ ہے۔ OTP صرف ڈیمو تھا؛ اکاؤنٹ لاگ اِن فعال نہیں۔", "प्रोफ़ाइल इस डिवाइस पर सहेजी गई। OTP केवल डेमो था; खाता लॉगिन उपलब्ध नहीं।", "Profil auf diesem Gerät gespeichert. OTP war nur eine Demo; die Kontoanmeldung ist nicht aktiviert.", "Perfil guardado en este dispositivo. El OTP era solo una demo; el inicio de sesión no está habilitado.", "Profilo salvato su questo dispositivo. L'OTP era solo una demo; l'accesso non è attivo."],
  "Help & Support": ["সহায়তা ও সাপোর্ট", "مدد اور معاونت", "सहायता और समर्थन", "Hilfe & Support", "Ayuda y soporte", "Aiuto e supporto"],
  Language: ["ভাষা", "زبان", "भाषा", "Sprache", "Idioma", "Lingua"],
  "Sign in / Register": ["সাইন ইন / নিবন্ধন", "سائن اِن / رجسٹر", "साइन इन / रजिस्टर", "Anmelden / Registrieren", "Iniciar sesión / Registrarse", "Accedi / Registrati"],
  "Sign in": ["সাইন ইন", "سائن اِن", "साइन इन", "Anmelden", "Iniciar sesión", "Accedi"],
  Explore: ["খুঁজুন", "دریافت کریں", "खोजें", "Entdecken", "Explorar", "Esplora"],
  Saved: ["সংরক্ষিত", "محفوظ", "सहेजे गए", "Gespeichert", "Guardados", "Salvati"],
  Profile: ["প্রোফাইল", "پروفائل", "प्रोफ़ाइल", "Profil", "Perfil", "Profilo"],
  Menu: ["মেনু", "مینو", "मेनू", "Menü", "Menú", "Menu"],
  "FOR DOCTORS & MEDICALS": ["ডাক্তার ও মেডিকেলের জন্য", "ڈاکٹرز اور طبی مراکز کے لیے", "डॉक्टर और मेडिकल के लिए", "FÜR ÄRZTE & MEDIZIN", "PARA MÉDICOS Y CENTROS", "PER MEDICI E CENTRI"],
  "Doctor profile": ["ডাক্তারের প্রোফাইল", "ڈاکٹر کا پروفائل", "डॉक्टर प्रोफ़ाइल", "Arztprofil", "Perfil del médico", "Profilo medico"],
  "Register a medical": ["মেডিকেল নিবন্ধন", "طبی مرکز رجسٹر کریں", "मेडिकल रजिस्टर करें", "Medizinische Einrichtung registrieren", "Registrar centro médico", "Registra struttura medica"],
  "Health assistant": ["স্বাস্থ্য সহায়ক", "ہیلتھ اسسٹنٹ", "स्वास्थ्य सहायक", "Gesundheitsassistent", "Asistente de salud", "Assistente sanitario"],
  "Need a hand?": ["সাহায্য দরকার?", "مدد چاہیے؟", "मदद चाहिए?", "Brauchen Sie Hilfe?", "¿Necesitas ayuda?", "Serve aiuto?"],
  "Your health records stay private and in your control.": ["আপনার স্বাস্থ্য রেকর্ড ব্যক্তিগত এবং আপনার নিয়ন্ত্রণে থাকে।", "آپ کے صحت کے ریکارڈ نجی اور آپ کے اختیار میں رہتے ہیں۔", "आपके स्वास्थ्य रिकॉर्ड निजी और आपके नियंत्रण में रहते हैं।", "Ihre Gesundheitsdaten bleiben privat und unter Ihrer Kontrolle.", "Tus datos de salud son privados y están bajo tu control.", "I tuoi dati sanitari restano privati e sotto il tuo controllo."],
  "Contact support": ["সাপোর্টে যোগাযোগ করুন", "سپورٹ سے رابطہ کریں", "सहायता से संपर्क करें", "Support kontaktieren", "Contactar soporte", "Contatta il supporto"],
  "Patient profile · offline history": ["রোগীর প্রোফাইল · অফলাইন ইতিহাস", "مریض کا پروفائل · آف لائن ہسٹری", "रोगी प्रोफ़ाइल · ऑफ़लाइन इतिहास", "Patientenprofil · Offline-Verlauf", "Perfil del paciente · historial sin conexión", "Profilo paziente · cronologia offline"],
  Workspace: ["কর্মক্ষেত্র", "ورک اسپیس", "कार्यस्थान", "Arbeitsbereich", "Espacio de trabajo", "Area di lavoro"],
  Overview: ["সংক্ষিপ্ত বিবরণ", "جائزہ", "अवलोकन", "Übersicht", "Resumen", "Panoramica"],
  "Search doctors or specialists": ["ডাক্তার বা বিশেষজ্ঞ খুঁজুন", "ڈاکٹر یا اسپیشلسٹ تلاش کریں", "डॉक्टर या विशेषज्ञ खोजें", "Ärzte oder Fachärzte suchen", "Buscar médicos o especialistas", "Cerca medici o specialisti"],
  "YOUR HEALTH, IN SYNC": ["আপনার স্বাস্থ্য, সুশৃঙ্খল", "آپ کی صحت، ایک جگہ", "आपका स्वास्थ्य, व्यवस्थित", "Ihre Gesundheit im Einklang", "Tu salud, en armonía", "La tua salute, in armonia"],
  "Find care that feels right.": ["আপনার জন্য উপযুক্ত চিকিৎসা খুঁজুন।", "اپنے لیے مناسب نگہداشت تلاش کریں۔", "अपने लिए सही देखभाल खोजें।", "Finden Sie die passende Versorgung.", "Encuentra la atención adecuada.", "Trova l’assistenza giusta."],
  "Search doctors near you and keep your health history close.": ["কাছাকাছি ডাক্তার খুঁজুন, স্বাস্থ্য ইতিহাস হাতের কাছে রাখুন।", "قریبی ڈاکٹر تلاش کریں اور اپنی صحت کی ہسٹری ساتھ رکھیں۔", "पास के डॉक्टर खोजें और स्वास्थ्य इतिहास पास रखें।", "Finden Sie Ärzte in Ihrer Nähe und behalten Sie Ihre Krankengeschichte im Blick.", "Busca médicos cerca y ten tu historial a mano.", "Trova medici vicini e tieni la tua storia clinica a portata di mano."],
  "Find a doctor": ["ডাক্তার খুঁজুন", "ڈاکٹر تلاش کریں", "डॉक्टर खोजें", "Arzt finden", "Buscar médico", "Trova un medico"],
  "Health concern": ["স্বাস্থ্য সমস্যা", "صحت کا مسئلہ", "स्वास्थ्य समस्या", "Gesundheitsproblem", "Problema de salud", "Problema di salute"],
  "Any condition": ["যেকোনো সমস্যা", "کوئی بھی مسئلہ", "कोई भी समस्या", "Alle Beschwerden", "Cualquier problema", "Qualsiasi problema"],
  Diabetes: ["ডায়াবেটিস", "ذیابیطس", "मधुमेह", "Diabetes", "Diabetes", "Diabete"],
  "Heart / blood pressure": ["হৃদ্‌যন্ত্র / রক্তচাপ", "دل / بلڈ پریشر", "हृदय / रक्तचाप", "Herz / Blutdruck", "Corazón / presión arterial", "Cuore / pressione sanguigna"],
  "Fever / infection": ["জ্বর / সংক্রমণ", "بخار / انفیکشن", "बुखार / संक्रमण", "Fieber / Infektion", "Fiebre / infección", "Febbre / infezione"],
  "Headache / migraine": ["মাথাব্যথা / মাইগ্রেন", "سر درد / مائیگرین", "सिरदर्द / माइग्रेन", "Kopfschmerzen / Migräne", "Dolor de cabeza / migraña", "Mal di testa / emicrania"],
  "Child health": ["শিশুর স্বাস্থ্য", "بچوں کی صحت", "बच्चों का स्वास्थ्य", "Kindergesundheit", "Salud infantil", "Salute dei bambini"],
  "Skin / hair": ["ত্বক / চুল", "جلد / بال", "त्वचा / बाल", "Haut / Haare", "Piel / cabello", "Pelle / capelli"],
  "Pregnancy / women's health": ["গর্ভাবস্থা / নারীদের স্বাস্থ্য", "حمل / خواتین کی صحت", "गर्भावस्था / महिलाओं का स्वास्थ्य", "Schwangerschaft / Frauengesundheit", "Embarazo / salud de la mujer", "Gravidanza / salute femminile"],
  "Stomach / digestion": ["পেট / হজম", "معدہ / ہاضمہ", "पेट / पाचन", "Magen / Verdauung", "Estómago / digestión", "Stomaco / digestione"],
  "Bone / joint pain": ["হাড় / জয়েন্টের ব্যথা", "ہڈی / جوڑوں کا درد", "हड्डी / जोड़ों का दर्द", "Knochen- / Gelenkschmerzen", "Dolor de huesos / articulaciones", "Dolore osseo / articolare"],
  "Mental health": ["মানসিক স্বাস্থ্য", "ذہنی صحت", "मानसिक स्वास्थ्य", "Psychische Gesundheit", "Salud mental", "Salute mentale"],
  "Search doctors and specialists": ["ডাক্তার ও বিশেষজ্ঞ খুঁজুন", "ڈاکٹر اور ماہرین تلاش کریں", "डॉक्टर और विशेषज्ञ खोजें", "Ärzte und Fachärzte suchen", "Buscar médicos y especialistas", "Cerca medici e specialisti"],
  "Search doctors, specialists...": ["ডাক্তার, বিশেষজ্ঞ খুঁজুন...", "ڈاکٹر، ماہرین تلاش کریں...", "डॉक्टर, विशेषज्ञ खोजें...", "Ärzte, Fachärzte suchen...", "Buscar médicos, especialistas...", "Cerca medici, specialisti..."],
  "Current location: choose district or area": ["বর্তমান অবস্থান: জেলা বা এলাকা বেছে নিন", "موجودہ مقام: ضلع یا علاقہ منتخب کریں", "वर्तमान स्थान: जिला या क्षेत्र चुनें", "Aktueller Standort: Bezirk oder Gebiet wählen", "Ubicación actual: elige distrito o zona", "Posizione attuale: scegli distretto o zona"],
  Location: ["অবস্থান", "مقام", "स्थान", "Standort", "Ubicación", "Posizione"],
  Change: ["পরিবর্তন", "تبدیل کریں", "बदलें", "Ändern", "Cambiar", "Cambia"],
  "Choose district": ["জেলা বেছে নিন", "ضلع منتخب کریں", "जिला चुनें", "Bezirk auswählen", "Elegir distrito", "Scegli distretto"],
  "Add prescription photos": ["প্রেসক্রিপশনের ছবি যোগ করুন", "نسخے کی تصاویر شامل کریں", "पर्चे की तस्वीरें जोड़ें", "Rezeptfotos hinzufügen", "Añadir fotos de recetas", "Aggiungi foto della ricetta"],
  "Add report photos": ["রিপোর্টের ছবি যোগ করুন", "رپورٹ کی تصاویر شامل کریں", "रिपोर्ट की तस्वीरें जोड़ें", "Berichtsfotos hinzufügen", "Añadir fotos de informes", "Aggiungi foto dei referti"],
  "Add medicine photos": ["ওষুধের ছবি যোগ করুন", "دوا کی تصاویر شامل کریں", "दवा की तस्वीरें जोड़ें", "Medikamentenfotos hinzufügen", "Añadir fotos de medicamentos", "Aggiungi foto dei medicinali"],
  "Browse all doctors →": ["সব ডাক্তার দেখুন →", "تمام ڈاکٹرز دیکھیں →", "सभी डॉक्टर देखें →", "Alle Ärzte ansehen →", "Ver todos los médicos →", "Vedi tutti i medici →"],
  "AD · SPONSORED": ["বিজ্ঞাপন · স্পনসরড", "اشتہار · اسپانسرڈ", "विज्ञापन · प्रायोजित", "ANZEIGE · GESPONSERT", "ANUNCIO · PATROCINADO", "ANNUNCIO · SPONSORIZZATO"],
  "Featured health & medicine partner": ["স্বাস্থ্য ও চিকিৎসার বিশেষ অংশীদার", "صحت اور طب کے نمایاں شراکت دار", "स्वास्थ्य और चिकित्सा भागीदार", "Empfohlener Gesundheits- und Medizinpartner", "Socio destacado de salud y medicina", "Partner in evidenza per salute e medicina"],
  "Banner placement · targeted by selected location": ["নির্বাচিত এলাকার জন্য ব্যানার", "منتخب مقام کے لیے بینر", "चुने गए स्थान के लिए बैनर", "Banner für den ausgewählten Standort", "Banner según la ubicación elegida", "Banner per la località selezionata"],
  "No campaign drafts yet.": ["এখনো কোনো বিজ্ঞাপন খসড়া নেই।", "ابھی کوئی مہم کا مسودہ نہیں۔", "अभी कोई अभियान ड्राफ़्ट नहीं।", "Noch keine Kampagnenentwürfe.", "Aún no hay borradores de campañas.", "Nessuna bozza di campagna."],
  "Advertise here →": ["এখানে বিজ্ঞাপন দিন →", "یہاں اشتہار دیں →", "यहाँ विज्ञापन दें →", "Hier werben →", "Anúnciate aquí →", "Fai pubblicità qui →"],
  "PERSONALIZED CARE": ["ব্যক্তিগত চিকিৎসা", "ذاتی نگہداشت", "व्यक्तिगत देखभाल", "INDIVIDUELLE VERSORGUNG", "ATENCIÓN PERSONALIZADA", "ASSISTENZA PERSONALIZZATA"],
  Recommended: ["আপনার জন্য", "تجویز کردہ", "अनुशंसित", "Empfohlen", "Recomendados", "Consigliati"],
  "See all →": ["সব দেখুন →", "سب دیکھیں →", "सभी देखें →", "Alle ansehen →", "Ver todos →", "Vedi tutti →"],
  "HEALTH PROFILE": ["স্বাস্থ্য প্রোফাইল", "صحت کا پروفائل", "स्वास्थ्य प्रोफ़ाइल", "GESUNDHEITSPROFIL", "PERFIL DE SALUD", "PROFILO SANITARIO"],
  "Your health at a glance": ["এক নজরে আপনার স্বাস্থ্য", "ایک نظر میں آپ کی صحت", "एक नज़र में आपका स्वास्थ्य", "Ihre Gesundheit auf einen Blick", "Tu salud de un vistazo", "La tua salute a colpo d'occhio"],
  "Blood group": ["রক্তের গ্রুপ", "بلڈ گروپ", "रक्त समूह", "Blutgruppe", "Grupo sanguíneo", "Gruppo sanguigno"],
  "Not added": ["যোগ করা হয়নি", "شامل نہیں کیا گیا", "जोड़ा नहीं गया", "Nicht hinzugefügt", "No añadido", "Non aggiunto"],
  "Known allergies": ["জানা অ্যালার্জি", "معلوم الرجی", "ज्ञात एलर्जी", "Bekannte Allergien", "Alergias conocidas", "Allergie note"],
  "Add in your profile": ["আপনার প্রোফাইলে যোগ করুন", "اپنے پروفائل میں شامل کریں", "अपनी प्रोफ़ाइल में जोड़ें", "Im Profil hinzufügen", "Añadir a tu perfil", "Aggiungi al profilo"],
  "Your health history stays private on this device.": ["আপনার স্বাস্থ্য ইতিহাস এই ডিভাইসে ব্যক্তিগত থাকে।", "آپ کی صحت کی ہسٹری اس ڈیوائس پر نجی رہتی ہے۔", "आपका स्वास्थ्य इतिहास इस डिवाइस पर निजी रहता है।", "Ihr Gesundheitsverlauf bleibt auf diesem Gerät privat.", "Tu historial de salud permanece privado en este dispositivo.", "La tua storia sanitaria resta privata su questo dispositivo."],
  "CARE REMINDER": ["চিকিৎসার রিমাইন্ডার", "نگہداشت کی یاد دہانی", "देखभाल रिमाइंडर", "ERINNERUNG", "RECORDATORIO DE CUIDADO", "PROMEMORIA DI CURA"],
  "Never miss an appointment.": ["কোনো অ্যাপয়েন্টমেন্ট মিস করবেন না।", "کوئی ملاقات نہ چھوڑیں۔", "कोई अपॉइंटमेंट न चूकें।", "Verpassen Sie keinen Termin.", "No pierdas ninguna cita.", "Non perdere nessun appuntamento."],
  "Add a doctor visit or medicine reminder with a date and time.": ["তারিখ ও সময়সহ ডাক্তার দেখানো বা ওষুধের রিমাইন্ডার যোগ করুন।", "ڈاکٹر کے دورے یا دوا کی تاریخ اور وقت کے ساتھ یاد دہانی شامل کریں۔", "डॉक्टर विज़िट या दवा का दिन और समय वाला रिमाइंडर जोड़ें।", "Erstellen Sie eine Erinnerung für Arzttermine oder Medikamente.", "Añade un recordatorio para citas médicas o medicamentos.", "Aggiungi un promemoria per visite o medicinali."],
  "＋ Add a reminder": ["＋ রিমাইন্ডার যোগ করুন", "＋ یاد دہانی شامل کریں", "＋ रिमाइंडर जोड़ें", "＋ Erinnerung hinzufügen", "＋ Añadir recordatorio", "＋ Aggiungi promemoria"],
  "STAY IN THE KNOW": ["খবর রাখুন", "باخبر رہیں", "जानकारी रखें", "AUF DEM LAUFENDEN", "MANTENTE AL DÍA", "RESTA AGGIORNATO"],
  "Recent medical history": ["সাম্প্রতিক চিকিৎসা ইতিহাস", "حالیہ طبی ہسٹری", "हाल का चिकित्सा इतिहास", "Neueste Krankengeschichte", "Historial médico reciente", "Storia medica recente"],
  "View all records": ["সব রেকর্ড দেখুন", "تمام ریکارڈ دیکھیں", "सभी रिकॉर्ड देखें", "Alle Einträge ansehen", "Ver todos los registros", "Vedi tutti i record"],
  "A LITTLE REMINDER": ["ছোট্ট একটি কথা", "ایک چھوٹی سی یاد دہانی", "एक छोटी सी याद दिलाना", "EINE KLEINE ERINNERUNG", "UN PEQUEÑO RECORDATORIO", "UN PICCOLO PROMEMORIA"],
  "Small steps make a big difference.": ["ছোট ছোট পদক্ষেপেই বড় পরিবর্তন আসে।", "چھوٹے قدم بڑا فرق پیدا کرتے ہیں۔", "छोटे कदम बड़ा बदलाव लाते हैं।", "Kleine Schritte bewirken viel.", "Pequeños pasos marcan la diferencia.", "Piccoli passi fanno la differenza."],
  "Save your prescriptions and reports here, so they're easy to find when you need them.": ["প্রেসক্রিপশন ও রিপোর্ট এখানে রাখুন, যেন দরকারে সহজে পান।", "اپنے نسخے اور رپورٹس یہاں محفوظ کریں تاکہ ضرورت پر آسانی سے ملیں۔", "पर्चे और रिपोर्ट यहाँ रखें ताकि ज़रूरत पर आसानी से मिलें।", "Speichern Sie Rezepte und Berichte hier, damit Sie sie schnell finden.", "Guarda aquí tus recetas e informes para encontrarlos cuando los necesites.", "Salva qui ricette e referti per trovarli quando servono."],
  "QUICK ACTION": ["দ্রুত কাজ", "فوری کارروائی", "त्वरित कार्रवाई", "SCHNELLZUGRIFF", "ACCIÓN RÁPIDA", "AZIONE RAPIDA"],
  "Have a new prescription?": ["নতুন প্রেসক্রিপশন আছে?", "نیا نسخہ ہے؟", "नया पर्चा है?", "Neues Rezept vorhanden?", "¿Tienes una receta nueva?", "Hai una nuova ricetta?"],
  "Add it to your history in just a few steps.": ["কয়েকটি ধাপেই ইতিহাসে যোগ করুন।", "چند مراحل میں اسے اپنی ہسٹری میں شامل کریں۔", "कुछ ही चरणों में इतिहास में जोड़ें।", "Fügen Sie es mit wenigen Schritten Ihrem Verlauf hinzu.", "Añádela a tu historial en pocos pasos.", "Aggiungila alla cronologia in pochi passaggi."],
  "＋ Add a record": ["＋ রেকর্ড যোগ করুন", "＋ ریکارڈ شامل کریں", "＋ रिकॉर्ड जोड़ें", "＋ Eintrag hinzufügen", "＋ Añadir registro", "＋ Aggiungi record"],
  "CARE NEAR YOU": ["আপনার কাছের চিকিৎসা", "آپ کے قریب نگہداشت", "आपके पास देखभाल", "VERSORGUNG IN IHRER NÄHE", "ATENCIÓN CERCANA", "ASSISTENZA VICINO A TE"],
  "Search by doctor, specialist, district, or area.": ["ডাক্তার, বিশেষজ্ঞ, জেলা বা এলাকা দিয়ে খুঁজুন।", "ڈاکٹر، ماہر، ضلع یا علاقے سے تلاش کریں۔", "डॉक्टर, विशेषज्ञ, जिला या क्षेत्र से खोजें।", "Suchen Sie nach Arzt, Fachgebiet, Bezirk oder Gebiet.", "Busca por médico, especialidad, distrito o zona.", "Cerca per medico, specialità, distretto o zona."],
  "Recommended doctors": ["প্রস্তাবিত ডাক্তার", "تجویز کردہ ڈاکٹرز", "अनुशंसित डॉक्टर", "Empfohlene Ärzte", "Médicos recomendados", "Medici consigliati"],
  "No doctors found": ["কোনো ডাক্তার পাওয়া যায়নি", "کوئی ڈاکٹر نہیں ملا", "कोई डॉक्टर नहीं मिला", "Keine Ärzte gefunden", "No se encontraron médicos", "Nessun medico trovato"],
  "Try another name, specialty, or location.": ["অন্য নাম, বিশেষজ্ঞতা বা অবস্থান দিয়ে চেষ্টা করুন।", "کوئی اور نام، مہارت یا مقام آزمائیں۔", "दूसरा नाम, विशेषज्ञता या स्थान आज़माएँ।", "Versuchen Sie einen anderen Namen, Fachbereich oder Standort.", "Prueba con otro nombre, especialidad o ubicación.", "Prova un altro nome, specialità o posizione."],
  "MEDISYNC HEALTH ASSISTANT": ["MEDISYNC স্বাস্থ্য সহায়ক", "MEDISYNC ہیلتھ اسسٹنٹ", "MEDISYNC स्वास्थ्य सहायक", "MEDISYNC GESUNDHEITSASSISTENT", "ASISTENTE DE SALUD MEDISYNC", "ASSISTENTE SANITARIO MEDISYNC"],
  "What kind of care do you need?": ["আপনার কী ধরনের চিকিৎসা দরকার?", "آپ کو کس قسم کی نگہداشت درکار ہے؟", "आपको किस तरह की देखभाल चाहिए?", "Welche Versorgung benötigen Sie?", "¿Qué tipo de atención necesitas?", "Di che tipo di assistenza hai bisogno?"],
  "What are you experiencing?": ["আপনি কী সমস্যায় ভুগছেন?", "آپ کو کیا تکلیف ہے؟", "आपको क्या समस्या हो रही है?", "Welche Beschwerden haben Sie?", "¿Qué síntomas tienes?", "Quali sintomi hai?"],
  "Explore care options →": ["চিকিৎসার বিকল্প দেখুন →", "نگہداشت کے اختیارات دیکھیں →", "देखभाल के विकल्प देखें →", "Versorgungsoptionen ansehen →", "Explorar opciones de atención →", "Esplora le opzioni di assistenza →"],
  "YOUR CARE CALENDAR": ["আপনার চিকিৎসা ক্যালেন্ডার", "آپ کا نگہداشت کیلنڈر", "आपका देखभाल कैलेंडर", "IHR BEHANDLUNGSKALENDER", "TU CALENDARIO DE SALUD", "IL TUO CALENDARIO DI CURA"],
  Reminders: ["রিমাইন্ডার", "یاد دہانیاں", "रिमाइंडर", "Erinnerungen", "Recordatorios", "Promemoria"],
  "＋ Add reminder": ["＋ রিমাইন্ডার যোগ করুন", "＋ یاد دہانی شامل کریں", "＋ रिमाइंडर जोड़ें", "＋ Erinnerung hinzufügen", "＋ Añadir recordatorio", "＋ Aggiungi promemoria"],
  UPCOMING: ["আসন্ন", "آنے والے", "आगामी", "BEVORSTEHEND", "PRÓXIMOS", "IN PROGRAMMA"],
  "Appointments & reminders": ["অ্যাপয়েন্টমেন্ট ও রিমাইন্ডার", "ملاقاتیں اور یاد دہانیاں", "अपॉइंटमेंट और रिमाइंडर", "Termine & Erinnerungen", "Citas y recordatorios", "Appuntamenti e promemoria"],
  "Your calendar is clear": ["আপনার ক্যালেন্ডার খালি", "آپ کا کیلنڈر خالی ہے", "आपका कैलेंडर खाली है", "Ihr Kalender ist leer", "Tu calendario está vacío", "Il calendario è vuoto"],
  "Add a reminder with a date and time to see it here.": ["তারিখ ও সময়সহ রিমাইন্ডার যোগ করলে এখানে দেখা যাবে।", "تاریخ اور وقت کے ساتھ یاد دہانی شامل کریں تاکہ وہ یہاں نظر آئے۔", "तारीख और समय वाला रिमाइंडर जोड़ें, यह यहाँ दिखेगा।", "Fügen Sie eine Erinnerung mit Datum und Uhrzeit hinzu.", "Añade un recordatorio con fecha y hora para verlo aquí.", "Aggiungi un promemoria con data e ora per vederlo qui."],
  "MY HEALTH HISTORY": ["আমার স্বাস্থ্য ইতিহাস", "میری صحت کی ہسٹری", "मेरा स्वास्थ्य इतिहास", "MEINE KRANKENGESCHICHTE", "MI HISTORIAL DE SALUD", "LA MIA STORIA SANITARIA"],
  "Your health, in one place": ["আপনার স্বাস্থ্য, এক জায়গায়", "آپ کی صحت، ایک جگہ", "आपका स्वास्थ्य, एक जगह", "Ihre Gesundheit an einem Ort", "Tu salud, en un solo lugar", "La tua salute, in un unico posto"],
  "Add a new entry, review your saved history, or get a safe summary.": ["নতুন তথ্য যোগ করুন, সংরক্ষিত ইতিহাস দেখুন বা নিরাপদ সারাংশ পান।", "نئی معلومات شامل کریں، اپنی ہسٹری دیکھیں یا محفوظ خلاصہ حاصل کریں۔", "नई जानकारी जोड़ें, इतिहास देखें या सुरक्षित सारांश पाएँ।", "Erstellen Sie Einträge, prüfen Sie Ihren Verlauf oder erhalten Sie eine sichere Zusammenfassung.", "Añade datos, revisa tu historial o consulta un resumen seguro.", "Aggiungi dati, consulta la cronologia o un riepilogo sicuro."],
  "RECENT ENTRIES": ["সাম্প্রতিক তথ্য", "حالیہ اندراجات", "हाल की प्रविष्टियाँ", "LETZTE EINTRÄGE", "REGISTROS RECIENTES", "VOCI RECENTI"],
  "Add": ["যোগ করুন", "شامل کریں", "जोड़ें", "Hinzufügen", "Añadir", "Aggiungi"],
  "Create a new medical entry": ["নতুন মেডিকেল তথ্য যোগ করুন", "نئی طبی معلومات شامل کریں", "नई मेडिकल जानकारी जोड़ें", "Neuen medizinischen Eintrag erstellen", "Crear un nuevo registro médico", "Crea una nuova voce medica"],
  "History": ["ইতিহাস", "ہسٹری", "इतिहास", "Verlauf", "Historial", "Cronologia"],
  "View prescriptions and reports": ["প্রেসক্রিপশন ও রিপোর্ট দেখুন", "نسخے اور رپورٹس دیکھیں", "पर्चे और रिपोर्ट देखें", "Rezepte und Berichte ansehen", "Ver recetas e informes", "Visualizza ricette e referti"],
  "AI Summary": ["AI সারাংশ", "AI خلاصہ", "AI सारांश", "KI-Zusammenfassung", "Resumen de IA", "Riepilogo IA"],
  "Prepare questions for your clinician": ["ডাক্তারের জন্য প্রশ্ন তৈরি করুন", "اپنے ڈاکٹر کے لیے سوالات تیار کریں", "डॉक्टर के लिए सवाल तैयार करें", "Fragen für Ihren Arzt vorbereiten", "Prepara preguntas para tu médico", "Prepara domande per il medico"],
  "Latest medical history": ["সাম্প্রতিক চিকিৎসা ইতিহাস", "حالیہ طبی ہسٹری", "हाल का चिकित्सा इतिहास", "Neueste Krankengeschichte", "Historial médico reciente", "Storia medica recente"],
  "View history →": ["ইতিহাস দেখুন →", "ہسٹری دیکھیں →", "इतिहास देखें →", "Verlauf ansehen →", "Ver historial →", "Visualizza cronologia →"],
  "YOUR PRIVATE LIBRARY": ["আপনার ব্যক্তিগত সংগ্রহ", "آپ کی نجی لائبریری", "आपकी निजी लाइब्रेरी", "IHRE PRIVATE BIBLIOTHEK", "TU BIBLIOTECA PRIVADA", "LA TUA RACCOLTA PRIVATA"],
  "Medical history": ["চিকিৎসা ইতিহাস", "طبی ہسٹری", "चिकित्सा इतिहास", "Krankengeschichte", "Historial médico", "Storia medica"],
  "Prescriptions, reports, and visit notes in one secure place.": ["প্রেসক্রিপশন, রিপোর্ট ও ভিজিটের নোট এক জায়গায় রাখুন।", "نسخے، رپورٹس اور وزٹ نوٹس ایک محفوظ جگہ پر۔", "पर्चे, रिपोर्ट और विज़िट नोट एक सुरक्षित जगह पर।", "Rezepte, Berichte und Besuchsnotizen sicher an einem Ort.", "Recetas, informes y notas en un lugar seguro.", "Ricette, referti e note in un luogo sicuro."],
  "Add medical entry": ["মেডিকেল তথ্য যোগ করুন", "طبی معلومات شامل کریں", "मेडिकल जानकारी जोड़ें", "Medizinischen Eintrag hinzufügen", "Añadir registro médico", "Aggiungi voce medica"],
  "All entries": ["সব তথ্য", "تمام اندراجات", "सभी प्रविष्टियाँ", "Alle Einträge", "Todos los registros", "Tutte le voci"],
  Prescriptions: ["প্রেসক্রিপশন", "نسخے", "पर्चे", "Rezepte", "Recetas", "Ricette"],
  Reports: ["রিপোর্ট", "رپورٹس", "रिपोर्ट", "Berichte", "Informes", "Referti"],
  "No matching records": ["মিলছে এমন কোনো তথ্য নেই", "کوئی مماثل ریکارڈ نہیں", "कोई मेल खाता रिकॉर्ड नहीं", "Keine passenden Einträge", "No hay registros coincidentes", "Nessun risultato corrispondente"],
  "Back to medical history": ["চিকিৎসা ইতিহাসে ফিরুন", "طبی ہسٹری پر واپس جائیں", "चिकित्सा इतिहास पर वापस जाएँ", "Zur Krankengeschichte", "Volver al historial médico", "Torna alla storia medica"],
  "New medical entry": ["নতুন মেডিকেল তথ্য", "نئی طبی معلومات", "नई मेडिकल जानकारी", "Neuer medizinischer Eintrag", "Nuevo registro médico", "Nuova voce medica"],
  Prescription: ["প্রেসক্রিপশন", "نسخہ", "पर्चा", "Rezept", "Receta", "Ricetta"],
  Report: ["রিপোর্ট", "رپورٹ", "रिपोर्ट", "Bericht", "Informe", "Referto"],
  Medicine: ["ওষুধ", "دوا", "दवा", "Medikament", "Medicamento", "Medicinale"],
  "Date of visit": ["ভিজিটের তারিখ", "ملاقات کی تاریخ", "विज़िट की तारीख", "Besuchsdatum", "Fecha de consulta", "Data della visita"],
  "Doctor name": ["ডাক্তারের নাম", "ڈاکٹر کا نام", "डॉक्टर का नाम", "Name des Arztes", "Nombre del médico", "Nome del medico"],
  "Hospital, clinic, or pharmacy": ["হাসপাতাল, ক্লিনিক বা ফার্মেসি", "ہسپتال، کلینک یا فارمیسی", "अस्पताल, क्लिनिक या फ़ार्मेसी", "Krankenhaus, Klinik oder Apotheke", "Hospital, clínica o farmacia", "Ospedale, clinica o farmacia"],
  "Save medical entry": ["মেডিকেল তথ্য সংরক্ষণ করুন", "طبی معلومات محفوظ کریں", "मेडिकल जानकारी सहेजें", "Eintrag speichern", "Guardar registro médico", "Salva voce medica"],
  Cancel: ["বাতিল", "منسوخ", "रद्द करें", "Abbrechen", "Cancelar", "Annulla"],
  "Your health, all together.": ["আপনার স্বাস্থ্য, সব একসাথে।", "آپ کی صحت، سب ایک جگہ۔", "आपका स्वास्थ्य, सब एक साथ।", "Ihre Gesundheit – alles an einem Ort.", "Toda tu salud, en un solo lugar.", "Tutta la tua salute, insieme."],
  "Create your account.": ["আপনার অ্যাকাউন্ট তৈরি করুন।", "اپنا اکاؤنٹ بنائیں۔", "अपना खाता बनाएँ।", "Erstellen Sie Ihr Konto.", "Crea tu cuenta.", "Crea il tuo account."],
  "Welcome to MediSync": ["MediSync-এ স্বাগতম", "MediSync میں خوش آمدید", "MediSync में आपका स्वागत है", "Willkommen bei MediSync", "Te damos la bienvenida a MediSync", "Benvenuto su MediSync"],
  "MAKE IT YOURS": ["নিজের মতো সাজান", "اپنی پسند کے مطابق بنائیں", "अपनी पसंद के अनुसार बनाएँ", "GESTALTEN SIE ES NACH IHREN WÜNSCHEN", "PERSONALÍZALO", "PERSONALIZZALO"],
  "Choose light or dark mode.": ["হালকা বা গাঢ় মোড বেছে নিন।", "روشن یا تاریک موڈ منتخب کریں۔", "लाइट या डार्क मोड चुनें।", "Wählen Sie den hellen oder dunklen Modus.", "Elige el modo claro u oscuro.", "Scegli la modalità chiara o scura."],
  "Play gentle sounds for in-app actions.": ["অ্যাপের কাজের জন্য হালকা শব্দ চালু করুন।", "ایپ کے اندر کارروائیوں کے لیے ہلکی آوازیں چلائیں۔", "ऐप में कार्रवाइयों के लिए हल्की ध्वनियाँ चलाएँ।", "Sanfte Töne für Aktionen in der App abspielen.", "Reproducir sonidos suaves para acciones en la app.", "Riproduci suoni delicati per le azioni nell'app."],
  "Get notified when your health record is updated.": ["আপনার স্বাস্থ্য রেকর্ড হালনাগাদ হলে নোটিফিকেশন পান।", "اپنا صحت کا ریکارڈ اپ ڈیٹ ہونے پر اطلاع پائیں۔", "स्वास्थ्य रिकॉर्ड अपडेट होने पर सूचना पाएँ।", "Lassen Sie sich über Aktualisierungen Ihrer Gesundheitsakte informieren.", "Recibe avisos cuando se actualice tu historial de salud.", "Ricevi una notifica quando la tua cartella sanitaria viene aggiornata."],
  Account: ["অ্যাকাউন্ট", "اکاؤنٹ", "खाता", "Konto", "Cuenta", "Account"],
  Privacy: ["গোপনীয়তা", "رازداری", "गोपनीयता", "Datenschutz", "Privacidad", "Privacy"],
  "Account information": ["অ্যাকাউন্টের তথ্য", "اکاؤنٹ کی معلومات", "खाते की जानकारी", "Kontoinformationen", "Información de la cuenta", "Informazioni account"],
  "Your personal and family profiles.": ["আপনার ব্যক্তিগত ও পরিবারের প্রোফাইল।", "آپ کے ذاتی اور خاندانی پروفائلز۔", "आपकी निजी और पारिवारिक प्रोफ़ाइल।", "Ihre persönlichen und Familienprofile.", "Tus perfiles personales y familiares.", "I tuoi profili personali e familiari."],
  "Edit profile": ["প্রোফাইল সম্পাদনা", "پروفائل میں ترمیم", "प्रोफ़ाइल संपादित करें", "Profil bearbeiten", "Editar perfil", "Modifica profilo"],
  "Manage health profile": ["স্বাস্থ্য প্রোফাইল পরিচালনা করুন", "صحت کا پروفائل منظم کریں", "स्वास्थ्य प्रोफ़ाइल प्रबंधित करें", "Gesundheitsprofil verwalten", "Gestionar perfil de salud", "Gestisci profilo sanitario"],
  "Your health data belongs to you.": ["আপনার স্বাস্থ্য তথ্য আপনারই।", "آپ کا صحت کا ڈیٹا آپ کا ہے۔", "आपका स्वास्थ्य डेटा आपका है।", "Ihre Gesundheitsdaten gehören Ihnen.", "Tus datos de salud te pertenecen.", "I tuoi dati sanitari ti appartengono."],
  "Your records are stored in this browser for this prototype. No information is sent to a server.": ["এই প্রোটোটাইপে আপনার রেকর্ড এই ব্রাউজারে থাকে। কোনো তথ্য সার্ভারে পাঠানো হয় না।", "اس پروٹوٹائپ میں آپ کے ریکارڈ اسی براؤزر میں محفوظ ہیں۔ کوئی معلومات سرور پر نہیں بھیجی جاتی۔", "इस प्रोटोटाइप में आपके रिकॉर्ड इसी ब्राउज़र में रहते हैं। कोई जानकारी सर्वर पर नहीं भेजी जाती।", "In diesem Prototyp werden Ihre Daten im Browser gespeichert. Es werden keine Daten an einen Server gesendet.", "En esta demo, tus registros se guardan en este navegador. No se envía información a un servidor.", "In questa demo i tuoi dati restano nel browser. Nessuna informazione viene inviata a un server."],
  "Light mode": ["হালকা মোড", "روشن موڈ", "लाइट मोड", "Heller Modus", "Modo claro", "Modalità chiara"],
  "Dark mode": ["গাঢ় মোড", "تاریک موڈ", "डार्क मोड", "Dunkler Modus", "Modo oscuro", "Modalità scura"],
  "Home screen": ["হোম স্ক্রিন", "ہوم اسکرین", "होम स्क्रीन", "Startseite", "Inicio", "Schermata iniziale"],
  "Open menu": ["মেনু খুলুন", "مینو کھولیں", "मेनू खोलें", "Menü öffnen", "Abrir menú", "Apri menu"],
  "Close menu": ["মেনু বন্ধ করুন", "مینو بند کریں", "मेनू बंद करें", "Menü schließen", "Cerrar menú", "Chiudi menu"],
  "Main navigation": ["প্রধান নেভিগেশন", "مرکزی نیویگیشن", "मुख्य नेविगेशन", "Hauptnavigation", "Navegación principal", "Navigazione principale"],
  "Close navigation": ["নেভিগেশন বন্ধ করুন", "نیویگیشن بند کریں", "नेविगेशन बंद करें", "Navigation schließen", "Cerrar navegación", "Chiudi navigazione"],
  "Full name": ["পুরো নাম", "پورا نام", "पूरा नाम", "Vollständiger Name", "Nombre completo", "Nome completo"],
  "Mobile number": ["মোবাইল নম্বর", "موبائل نمبر", "मोबाइल नंबर", "Mobilnummer", "Número de móvil", "Numero di cellulare"],
  "Email address": ["ইমেইল ঠিকানা", "ای میل ایڈریس", "ईमेल पता", "E-Mail-Adresse", "Correo electrónico", "Indirizzo email"],
  Password: ["পাসওয়ার্ড", "پاس ورڈ", "पासवर्ड", "Passwort", "Contraseña", "Password"],
  "Confirm password": ["পাসওয়ার্ড নিশ্চিত করুন", "پاس ورڈ کی تصدیق کریں", "पासवर्ड की पुष्टि करें", "Passwort bestätigen", "Confirmar contraseña", "Conferma password"],
  "Verify email with OTP": ["OTP দিয়ে ইমেইল যাচাই করুন", "OTP سے ای میل کی تصدیق کریں", "OTP से ईमेल सत्यापित करें", "E-Mail mit OTP bestätigen", "Verificar correo con OTP", "Verifica email con OTP"],
  "Enter your verification code": ["যাচাইকরণ কোড লিখুন", "تصدیقی کوڈ درج کریں", "सत्यापन कोड दर्ज करें", "Bestätigungscode eingeben", "Introduce tu código de verificación", "Inserisci il codice di verifica"],
  "Verify email": ["ইমেইল যাচাই করুন", "ای میل کی تصدیق کریں", "ईमेल सत्यापित करें", "E-Mail bestätigen", "Verificar correo", "Verifica email"],
  "Resend code": ["কোড আবার পাঠান", "کوڈ دوبارہ بھیجیں", "कोड फिर भेजें", "Code erneut senden", "Reenviar código", "Invia di nuovo il codice"],
  "ASK AI": ["AI-কে জিজ্ঞাসা করুন", "AI سے پوچھیں", "AI से पूछें", "KI fragen", "Preguntar a IA", "Chiedi all'IA"],
};
const translationTextNodes = new WeakMap();
const translationAttributes = new WeakMap();
let activeLanguage = "English";
const categoryLabels = {
  prescription: "Prescription",
  report: "Report",
  medicine: "Medicine",
};

const starterRecords = [
  {
    id: "visit-2026-02-09",
    date: "2026-02-09",
    doctor: "Dr. Miller",
    facility: "Northside Medical Center",
    prescriptionFiles: ["Prescription-02-09.jpg", "Treatment-plan.jpg"],
    reportFiles: ["Blood-test-report.jpg"],
    medicineFiles: ["Medicine-label.jpg"],
    prescriptionDescription: "Take the prescribed medicine after meals. Follow up if symptoms continue.",
    reportDescription: "Routine blood work. Results reviewed during the visit.",
    medicineDescription: "Medication as directed by the doctor.",
  },
  {
    id: "visit-2019-01-06",
    date: "2019-01-06",
    doctor: "Dr. Ahmed",
    facility: "City Health Clinic",
    prescriptionFiles: ["Clinic-prescription.jpg"],
    reportFiles: ["Health-report.jpg", "Lab-result.jpg"],
    medicineFiles: [],
    prescriptionDescription: "Keep this prescription with your medical history.",
    reportDescription: "Annual check-up results.",
    medicineDescription: "",
  },
];

const doctors = [
  { id: "dr-samia", name: "Dr. Samia Rahman", specialty: "Cardiologist", qualification: "MBBS, FCPS (Cardiology)", district: "Dhaka", area: "Dhanmondi", conditions: ["heart", "diabetes"], facility: "Popular Medical College Hospital", schedule: "Sat–Thu · 5:00–9:00 pm", bmdc: "Demo only · not verified", rating: "4.9", reviews: "126 sample reviews", initials: "SR", color: "mint" },
  { id: "dr-tanvir", name: "Dr. Tanvir Hasan", specialty: "Medicine Specialist", qualification: "MBBS, FCPS (Medicine)", district: "Dhaka", area: "Uttara", conditions: ["diabetes", "fever", "headache", "stomach", "heart", "joint-pain"], facility: "Uttara Crescent Hospital", schedule: "Sun–Thu · 6:00–9:00 pm", bmdc: "Demo only · not verified", rating: "4.8", reviews: "98 sample reviews", initials: "TH", color: "lavender" },
  { id: "dr-nusrat", name: "Dr. Nusrat Jahan", specialty: "Child Specialist", qualification: "MBBS, DCH, FCPS (Pediatrics)", district: "Chattogram", area: "Panchlaish", conditions: ["child-health", "fever"], facility: "Chattogram Medical Centre", schedule: "Sat–Wed · 4:00–8:00 pm", bmdc: "Demo only · not verified", rating: "4.9", reviews: "84 sample reviews", initials: "NJ", color: "peach" },
  { id: "dr-farhan", name: "Dr. Farhan Ahmed", specialty: "Dermatologist", qualification: "MBBS, DDV", district: "Sylhet", area: "Zindabazar", conditions: ["skin"], facility: "Sylhet Central Hospital", schedule: "Sun–Thu · 5:30–8:30 pm", bmdc: "Demo only · not verified", rating: "4.7", reviews: "52 sample reviews", initials: "FA", color: "mint" },
];

const healthConditions = [
  ["diabetes", "Diabetes"],
  ["heart", "Heart / blood pressure"],
  ["fever", "Fever / infection"],
  ["headache", "Headache / migraine"],
  ["child-health", "Child health"],
  ["skin", "Skin / hair"],
  ["pregnancy", "Pregnancy / women's health"],
  ["stomach", "Stomach / digestion"],
  ["joint-pain", "Bone / joint pain"],
  ["mental-health", "Mental health"],
];
const conditionKeywords = {
  diabetes: ["diabetes", "blood sugar", "glucose", "hyperglycemia"],
  heart: ["heart", "cardiac", "blood pressure", "hypertension", "chest pain"],
  fever: ["fever", "infection", "temperature", "viral"],
  headache: ["headache", "migraine"],
  "child-health": ["child", "pediatric", "baby", "infant"],
  skin: ["skin", "rash", "hair", "eczema"],
  pregnancy: ["pregnancy", "pregnant", "women's health", "obstetric"],
  stomach: ["stomach", "digestion", "gastric", "abdominal"],
  "joint-pain": ["joint", "bone", "arthritis", "back pain"],
  "mental-health": ["mental health", "anxiety", "depression", "stress"],
};
const locationAliases = {
  chattagram: ["Chattogram", "Chittagong"],
  cumilla: ["Comilla"],
  barishal: ["Barisal"],
  jashore: ["Jessore"],
  bogura: ["Bogra"],
};

const views = [...document.querySelectorAll(".view")];
const sidebar = document.querySelector("#sidebar");
const mobileMenu = document.querySelector(".mobile-menu");
const toast = document.querySelector("[data-toast]");
const dialogs = [...document.querySelectorAll("dialog")];
const uploadFiles = Object.fromEntries(categories.map((category) => [category, []]));
let records;
let selectedRecord = null;
let toastTimer;
let pendingOtp = null;
const verifiedOtpEmails = new Set();
let reminders = loadLocalList(remindersKey);
let campaigns = loadLocalList(campaignsKey);
let activeDoctor = null;
const bdLocations = window.MEDISYNC_BD_LOCATIONS || [];
const bdDistricts = bdLocations.flatMap((division) => division.districts.map((district) => ({ ...district, division: division.name, divisionBangla: division.bangla })));
const totalUpazilas = bdDistricts.reduce((count, district) => count + district.places.filter((place) => place.type === "upazila").length, 0);
const totalThanas = bdDistricts.reduce((count, district) => count + district.places.filter((place) => place.type === "thana").length, 0);
const defaultPatientProfile = { id: "patient-default", name: "Ayesha Rahman", email: "ayesha@example.com", mobile: "", district: "", bloodGroup: "", allergies: "" };
let patientProfile = { ...defaultPatientProfile };
let patientProfiles = [];

try {
  patientProfile = { ...patientProfile, ...JSON.parse(localStorage.getItem(patientProfileKey) || "{}") };
  patientProfiles = loadLocalList(patientProfilesKey);
  if (!patientProfiles.length) patientProfiles = [patientProfile];
  const activePatientId = localStorage.getItem(activePatientKey) || patientProfile.id;
  patientProfile = patientProfiles.find((profile) => profile.id === activePatientId) || patientProfile;
  if (!patientProfiles.some((profile) => profile.id === patientProfile.id)) patientProfiles.push(patientProfile);
} catch (error) {
  console.error("Could not read patient profiles.", error);
  patientProfiles = [patientProfile];
}
records = loadRecords();

function loadLocalList(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.error(`Could not read ${key}.`, error);
    return [];
  }
}

function renderPatientProfiles() {
  const select = document.querySelector("[data-family-select]");
  select.innerHTML = patientProfiles.map((profile) => `<option value="${escapeHtml(profile.id)}">${escapeHtml(profile.name)}${profile.id === patientProfile.id ? " · active" : ""}</option>`).join("");
  select.value = patientProfile.id;
}

function populatePatientProfileForm(form, profile) {
  form.elements.profileId.value = profile.id || "";
  form.elements.profileSelect.value = profile.id || "";
  ["name", "mobile", "email", "district", "bloodGroup", "allergies"].forEach((name) => {
    form.elements[name].value = profile[name] || "";
  });
}

function updatePatientUi() {
  document.querySelector("[data-patient-name]").textContent = patientProfile.name;
  document.querySelector("[data-patient-email]").textContent = patientProfile.email;
  document.querySelector("[data-patient-blood]").textContent = patientProfile.bloodGroup || "Not added";
  document.querySelector("[data-patient-allergies]").textContent = patientProfile.allergies || "None added";
  document.querySelector(".profile-copy strong").textContent = patientProfile.name;
  const initials = patientProfile.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  document.querySelector(".avatar").textContent = initials;
  document.querySelector(".avatar-initials").textContent = initials;
  document.querySelector(".bottom-profile-icon").textContent = initials;
  renderPatientProfiles();
  renderHomeRecommendations();
}

function loadRecords() {
  try {
    const savedValue = localStorage.getItem(`${storageKey}:${patientProfile.id}`) || (patientProfile.id === defaultPatientProfile.id ? localStorage.getItem(storageKey) : null);
    const saved = JSON.parse(savedValue || "null");
    if (Array.isArray(saved)) return saved;
    return patientProfile.id === defaultPatientProfile.id ? starterRecords : [];
  } catch (error) {
    console.error("Could not read saved medical entries.", error);
    return starterRecords;
  }
}

function saveRecords() {
  try {
    localStorage.setItem(`${storageKey}:${patientProfile.id}`, JSON.stringify(records));
    return true;
  } catch (error) {
    console.error("Could not save medical entries.", error);
    showToast("This entry could not be saved in this browser.");
    return false;
  }
}

function loadPreferences() {
  try {
    return JSON.parse(localStorage.getItem(preferenceKey)) || {};
  } catch (error) {
    console.error("Could not read saved preferences.", error);
    return {};
  }
}

function savePreferences(preferences) {
  try {
    localStorage.setItem(preferenceKey, JSON.stringify(preferences));
  } catch (error) {
    console.error("Could not save preferences.", error);
    showToast("Your preference could not be saved.");
  }
}

function formatDate(dateString) {
  if (!dateString) return "Date not set";
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat(languageTags[activeLanguage] || "en", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function recordCategories(record) {
  return categories.filter((category) => (record[`${category}Files`] || []).length || record[`${category}Description`]);
}

function recordTitle(record) {
  const available = recordCategories(record);
  if (available.length === 1) return categoryLabels[available[0]];
  return "Medical visit";
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}

function recordMarkup(record) {
  const labels = recordCategories(record);
  const tags = labels.map((category) => `<span class="tag">${categoryLabels[category]}</span>`).join("");
  return `
    <article class="record-row">
      <span class="record-symbol" aria-hidden="true">▧</span>
      <div class="record-copy"><h3>${escapeHtml(recordTitle(record))}</h3><p>${escapeHtml(record.doctor || "Doctor not added")} · ${escapeHtml(record.facility || "Facility not added")}</p></div>
      <time class="record-date" datetime="${escapeHtml(record.date)}">${formatDate(record.date)}</time>
      <div class="record-tags">${tags}</div>
      <button class="record-open" type="button" data-open-record="${escapeHtml(record.id)}" aria-label="Open ${escapeHtml(recordTitle(record))} details">→</button>
    </article>`;
}

function closeNavigationDrawer() {
  sidebar.classList.remove("is-open");
  document.querySelector(".sidebar-backdrop").classList.remove("is-visible");
  mobileMenu.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("drawer-open");
}

function renderRecords(query = "", category = "all") {
  const normalizedQuery = query.trim().toLowerCase();
  const matching = records
    .filter((record) => {
      const searchable = [record.doctor, record.facility, record.date, recordTitle(record), ...recordCategories(record)].join(" ").toLowerCase();
      return searchable.includes(normalizedQuery);
    })
    .filter((record) => category === "all" || recordCategories(record).includes(category))
    .sort((a, b) => b.date.localeCompare(a.date));

  document.querySelector("[data-recent-records]").innerHTML = matching.slice(0, 3).map(recordMarkup).join("");
  document.querySelector("[data-health-recent]").innerHTML = matching.slice(0, 3).map(recordMarkup).join("");
  document.querySelector("[data-records-list]").innerHTML = matching.map(recordMarkup).join("");
  document.querySelector("[data-empty-state]").hidden = matching.length > 0;
  document.querySelector("[data-health-empty]").hidden = matching.length > 0;
  document.querySelectorAll("[data-record-count]").forEach((element) => {
    element.textContent = String(records.length).padStart(2, "0");
  });
  document.querySelectorAll("[data-record-total]").forEach((element) => {
    element.textContent = `${records.length} ${records.length === 1 ? "record" : "records"}`;
  });
  renderHomeRecommendations();
}

function showView(name) {
  const target = document.querySelector(`#view-${name}`);
  if (!target) return;
  views.forEach((view) => {
    const isActive = view === target;
    view.classList.toggle("is-visible", isActive);
    view.hidden = !isActive;
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    const activeView = name === "detail" ? "records" : name === "doctor-detail" ? "doctors" : name;
    const isActive = button.dataset.view === activeView;
    button.classList.toggle("is-active", isActive);
    if (button.matches(".side-link, .bottom-tab, .topbar-nav button")) {
      if (isActive) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    }
  });
  document.querySelector(".assistant-fab").hidden = name !== "home";
  const pageNames = { home: "Home", "my-health": "My Health", doctors: "Explore doctors", "doctor-detail": "Doctor profile", assistant: "Health assistant", records: "Medical history", detail: "Medical entry", reminders: "Notifications", settings: "Settings" };
  document.querySelector("[data-current-page]").textContent = pageNames[name] || "Overview";
  closeNavigationDrawer();
  if (name === "records" || name === "my-health") renderRecords(document.querySelector("[data-record-filter]").value, document.querySelector("[data-category-filter]").value);
  if (name === "doctors") renderDoctors();
  if (name === "reminders") renderReminders();
  document.querySelector("#app-main").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function openDialog(dialog) {
  if (!dialog.open) dialog.showModal();
}

function beginOtpVerification(email, returnDialog) {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    showToast("Enter a valid email address first.");
    return;
  }
  pendingOtp = { email: normalizedEmail, returnDialog };
  document.querySelector("[data-otp-email]").textContent = normalizedEmail;
  document.querySelector("[data-otp-message]").textContent = "";
  document.querySelector("[data-otp-form]").reset();
  if (returnDialog.open) returnDialog.close();
  openDialog(document.querySelector("#otp-dialog"));
  document.querySelector('#otp-dialog [name="otp"]').focus();
}

function resetEntryForm() {
  document.querySelector("[data-entry-form]").reset();
  categories.forEach((category) => {
    uploadFiles[category] = [];
    renderFileList(category);
  });
  const dateField = document.querySelector('[name="date"]');
  dateField.value = new Date().toISOString().slice(0, 10);
}

function renderFileList(category) {
  const files = uploadFiles[category];
  document.querySelector(`[data-upload-count="${category}"]`).textContent = `${files.length} / ${category === "prescription" ? 5 : category === "report" ? 10 : 4}`;
  document.querySelector(`[data-file-list="${category}"]`).innerHTML = files.map((file) => `<span class="file-chip" title="${escapeHtml(file.name)}">${escapeHtml(file.name)} · ${Math.max(1, Math.round(file.size / 1024))} KB</span>`).join("");
}

function openRecord(recordId) {
  selectedRecord = records.find((record) => record.id === recordId);
  if (!selectedRecord) {
    showToast("That medical entry is no longer available.");
    renderRecords();
    return;
  }
  document.querySelector("#detail-title").textContent = recordTitle(selectedRecord);
  document.querySelector("[data-detail-meta]").textContent = `${formatDate(selectedRecord.date)} · ${selectedRecord.doctor || "Doctor not added"}`;
  document.querySelector("[data-detail-date]").textContent = formatDate(selectedRecord.date);
  document.querySelector("[data-detail-doctor]").textContent = selectedRecord.doctor || "Not added";
  document.querySelector("[data-detail-facility]").textContent = selectedRecord.facility || "Not added";
  categories.forEach((category) => {
    const files = selectedRecord[`${category}Files`] || [];
    const grid = document.querySelector(`[data-detail-${category}]`);
    const description = document.querySelector(`[data-description-${category}]`);
    grid.innerHTML = files.map((file) => {
      const name = typeof file === "string" ? file : file.name;
      const image = typeof file === "string" ? "" : file.dataUrl;
      return `<button class="document-thumb" type="button" data-preview-image="${escapeHtml(name)}" data-preview-src="${escapeHtml(image || "")}">${image ? `<img src="${escapeHtml(image)}" alt="">` : `<span aria-hidden="true">▧</span>`}<small>${escapeHtml(name)}</small></button>`;
    }).join("");
    grid.hidden = files.length === 0;
    description.textContent = selectedRecord[`${category}Description`] || (files.length ? "" : "No items added.");
    description.hidden = !description.textContent;
  });
  showView("detail");
}

function translatedText(source, language = activeLanguage) {
  if (language === "English") return source;
  const entry = translations[source];
  const languageIndex = { Bangla: 0, Urdu: 1, Hindi: 2, German: 3, Spanish: 4, Italian: 5 }[language];
  return entry && languageIndex !== undefined ? entry[languageIndex] : source;
}

function localizeText(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let textNode = walker.nextNode();
  while (textNode) {
    const parent = textNode.parentElement;
    if (parent && !parent.closest("script, style, [data-no-translate]")) {
      if (!translationTextNodes.has(textNode)) translationTextNodes.set(textNode, textNode.nodeValue);
      const original = translationTextNodes.get(textNode);
      const trimmed = original.trim();
      const translated = translatedText(trimmed);
      if (translated !== trimmed) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        textNode.nodeValue = `${leading}${translated}${trailing}`;
      } else if (textNode.nodeValue !== original) {
        textNode.nodeValue = original;
      }
    }
    textNode = walker.nextNode();
  }

  root.querySelectorAll?.("input[placeholder], textarea[placeholder], [aria-label], [title]").forEach((element) => {
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      let originals = translationAttributes.get(element);
      if (!originals) {
        originals = {};
        translationAttributes.set(element, originals);
      }
      if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
      element.setAttribute(attribute, translatedText(originals[attribute]));
    });
  });
}

function applyLanguage(language = "English") {
  activeLanguage = languageTags[language] ? language : "English";
  document.documentElement.lang = languageTags[activeLanguage];
  document.documentElement.dir = activeLanguage === "Urdu" ? "rtl" : "ltr";
  document.body.dataset.activeLanguage = activeLanguage;
  localizeText();
}

let localizationScheduled = false;
const localizationObserver = new MutationObserver(() => {
  if (localizationScheduled) return;
  localizationScheduled = true;
  queueMicrotask(() => {
    localizationScheduled = false;
    localizeText();
  });
});
localizationObserver.observe(document.body, { childList: true, subtree: true });

function applyPreferences() {
  const preferences = loadPreferences();
  document.body.classList.toggle("theme-dark", preferences.theme === "dark");
  document.querySelectorAll("[data-theme]").forEach((button) => button.classList.toggle("is-selected", button.dataset.theme === (preferences.theme || "light")));
  document.querySelectorAll("[data-language]").forEach((button) => button.classList.toggle("is-selected", button.dataset.language === (preferences.language || "English")));
  applyLanguage(preferences.language || "English");
  document.querySelectorAll("[data-setting-toggle]").forEach((button) => {
    const isOn = preferences[button.dataset.settingToggle] !== false;
    button.classList.toggle("is-on", isOn);
    button.setAttribute("aria-checked", String(isOn));
  });
}

function doctorCardMarkup(doctor) {
  const verified = doctor.bmdc === "BMDC verified";
  return `<article class="doctor-card panel">
    <div class="doctor-card-top"><span class="doctor-avatar ${doctor.color}">${escapeHtml(doctor.initials)}</span><span class="verification-badge ${verified ? "is-verified" : "is-pending"}">${verified ? "✓ " : "◷ "}${escapeHtml(doctor.bmdc)}</span></div>
    <h3>${escapeHtml(doctor.name)}</h3><p class="doctor-specialty">${escapeHtml(doctor.specialty)}</p><p class="doctor-qualification">${escapeHtml(doctor.qualification)}</p>
    <div class="doctor-location">⌖ ${escapeHtml(doctor.area)}, ${escapeHtml(doctor.district)}</div><div class="doctor-rating">★ ${escapeHtml(doctor.rating)} <span>· ${escapeHtml(doctor.reviews)}</span></div>
    <button class="button button-secondary doctor-open" type="button" data-open-doctor="${escapeHtml(doctor.id)}">View profile</button>
  </article>`;
}

function normalizeLocation(value = "") {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\p{L}\p{N}]+/gu, "").toLowerCase();
}

function locationsMatch(left = "", right = "") {
  const leftKey = normalizeLocation(left);
  const rightKey = normalizeLocation(right);
  const chattogramNames = ["chattogram", "chattagram", "chittagong"];
  if (chattogramNames.includes(leftKey) && chattogramNames.includes(rightKey)) return true;
  return leftKey === rightKey;
}

function renderConditionOptions() {
  document.querySelectorAll("[data-condition]").forEach((select) => {
    select.innerHTML = `<option value="">Any condition</option>${healthConditions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}`;
  });
}

function conditionsFromText(text) {
  const normalized = String(text || "").toLowerCase();
  return healthConditions
    .filter(([condition]) => conditionKeywords[condition].some((keyword) => normalized.includes(keyword)))
    .map(([condition]) => condition);
}

function locationResultMarkup(location) {
  const locationValue = `${location.district}|${location.area || ""}`;
  const kind = location.area ? location.type === "thana" ? "Thana" : "Upazila" : "District";
  const subtitle = location.area ? `${location.district} · ${location.districtBangla}` : `${location.division} Division · ${location.divisionBangla}`;
  const bangla = location.area ? location.areaBangla : location.districtBangla;
  return `<button type="button" class="location-option" role="option" data-select-location="${escapeHtml(locationValue)}"><span class="location-option-icon">⌖</span><span><strong>${escapeHtml(location.area || location.district)}${bangla ? ` · ${escapeHtml(bangla)}` : ""}</strong><small>${escapeHtml(subtitle)}</small></span><em>${kind}</em></button>`;
}

function findLocationSuggestions(query) {
  const normalized = normalizeLocation(query);
  const matches = [];
  for (const district of bdDistricts) {
    const districtNames = [district.name, district.bangla, district.aliases || "", ...(locationAliases[normalizeLocation(district.name)] || [])];
    if (!normalized || districtNames.some((name) => normalizeLocation(name).includes(normalized))) {
      matches.push({ district: district.name, districtBangla: district.bangla, division: district.division, divisionBangla: district.divisionBangla });
    }
    for (const place of district.places) {
      if (!normalized || normalizeLocation(place.name).includes(normalized) || normalizeLocation(place.bangla).includes(normalized)) {
        matches.push({
          district: district.name,
          districtBangla: district.bangla,
          division: district.division,
          area: place.name,
          areaBangla: place.bangla,
          type: place.type,
        });
      }
    }
  }
  matches.sort((a, b) => {
    const aName = normalizeLocation(a.area || a.district);
    const bName = normalizeLocation(b.area || b.district);
    const aExact = aName === normalized ? 0 : 1;
    const bExact = bName === normalized ? 0 : 1;
    return aExact - bExact || aName.localeCompare(bName);
  });
  return matches.slice(0, 8);
}

function updateLocationSuggestions(form) {
  const input = form.elements.locationQuery;
  const suggestions = form.querySelector("[data-location-suggestions]");
  const matches = findLocationSuggestions(input.value.trim());
  suggestions.innerHTML = matches.map(locationResultMarkup).join("");
  suggestions.hidden = matches.length === 0;
}

function setSearchLocation(form, districtName, areaName = "") {
  const district = bdDistricts.find((item) => locationsMatch(item.name, districtName));
  if (!district) {
    showToast("Choose a district from Bangladesh locations.");
    return;
  }
  const area = district.places.find((place) => locationsMatch(place.name, areaName));
  if (areaName && !area) {
    showToast("Choose an upazila or thana from the selected district.");
    return;
  }
  form.elements.district.value = district.name;
  form.elements.area.value = area ? area.name : "";
  form.elements.locationQuery.value = area ? `${area.name}, ${district.name}` : district.name;
  form.querySelector("[data-location-clear]").hidden = false;
  form.querySelector("[data-location-suggestions]").hidden = true;
}

function renderLocationCounts() {
  document.querySelectorAll("[data-location-count]").forEach((element) => {
    element.textContent = `Bangladesh · ${bdDistricts.length} districts · ${totalUpazilas} upazilas${totalThanas ? ` + ${totalThanas} thanas` : ""}`;
  });
}

function renderDoctors(filters = {}) {
  const query = (filters.query || "").trim().toLowerCase();
  const district = filters.district || "";
  const area = filters.area || "";
  const condition = filters.condition || "";
  const matches = doctors.filter((doctor) => {
    const searchable = `${doctor.name} ${doctor.specialty} ${doctor.qualification} ${doctor.facility}`.toLowerCase();
    return (!query || searchable.includes(query)) &&
      (!district || locationsMatch(doctor.district, district)) &&
      (!area || locationsMatch(doctor.area, area)) &&
      (!condition || doctor.conditions.includes(condition));
  });
  document.querySelector("[data-doctor-list]").innerHTML = matches.map(doctorCardMarkup).join("");
  document.querySelector("[data-doctor-empty]").hidden = matches.length > 0;
  document.querySelector("[data-doctor-results]").textContent = `${matches.length} ${matches.length === 1 ? "doctor" : "doctors"} found`;
  const activeLocation = area ? `${area}, ${district}` : district;
  const activeCondition = healthConditions.find(([value]) => value === condition);
  const note = [activeCondition && activeCondition[1], activeLocation].filter(Boolean);
  document.querySelector("[data-directory-note]").textContent = note.length ? `Sample listings matching ${note.join(" · ")}. No credentials are verified.` : "Sample directory only · no doctor credential is verified in this prototype";
}

function renderHomeRecommendations(filters = {}) {
  const form = document.querySelector("#view-home [data-doctor-search]");
  const condition = filters.condition !== undefined ? filters.condition : form.elements.condition.value;
  const district = filters.district !== undefined ? filters.district : (form.elements.district.value || patientProfile.district);
  const area = filters.area !== undefined ? filters.area : form.elements.area.value;
  const historyText = records.map((record) => [
    record.doctor,
    record.facility,
    record.prescriptionDescription,
    record.reportDescription,
    record.medicineDescription,
  ].join(" ")).join(" ");
  const inferredConditions = conditionsFromText(historyText);
  const targetConditions = condition ? [condition] : inferredConditions;
  const matching = doctors.filter((doctor) => !targetConditions.length || targetConditions.some((item) => doctor.conditions.includes(item)));
  const candidates = matching.length ? matching : doctors;
  const ranked = [...candidates].sort((left, right) => {
    const locationScore = (doctor) => {
      if (area && locationsMatch(doctor.area, area) && locationsMatch(doctor.district, district)) return 2;
      if (district && locationsMatch(doctor.district, district)) return 1;
      return 0;
    };
    return locationScore(right) - locationScore(left) || Number.parseFloat(right.rating) - Number.parseFloat(left.rating);
  });
  document.querySelector("[data-home-doctors]").innerHTML = ranked.slice(0, 3).map(doctorCardMarkup).join("");
  const conditionLabel = (condition && healthConditions.find(([value]) => value === condition)?.[1]) ||
    inferredConditions.map((item) => healthConditions.find(([value]) => value === item)?.[1]).filter(Boolean).join(", ");
  const locationLabel = area ? `${area}, ${district}` : district;
  let explanation = conditionLabel
    ? `Suggestions matched to ${conditionLabel}${inferredConditions.length && !condition ? " in your saved notes" : ""}`
    : "No clear condition term was found in saved notes; showing popular sample listings";
  if (locationLabel) explanation += ` · prioritizing ${locationLabel}`;
  if (!matching.length && targetConditions.length) explanation += " · no exact concern match in the sample directory";
  document.querySelector("[data-recommendation-note]").textContent = `${explanation}. Keyword-based demo only—not an AI diagnosis or medical advice.`;
}

function renderCampaignSummary() {
  const summary = document.querySelector("[data-campaign-summary]");
  if (!campaigns.length) {
    summary.textContent = "No campaign drafts yet.";
    return;
  }
  const latest = campaigns[campaigns.length - 1];
  const target = latest.area ? `${latest.area}, ${latest.district}` : latest.district;
  summary.textContent = `${campaigns.length} local draft${campaigns.length === 1 ? "" : "s"} · latest targets ${target}`;
}

function openDoctor(doctorId) {
  activeDoctor = doctors.find((doctor) => doctor.id === doctorId);
  if (!activeDoctor) {
    showToast("This doctor profile is no longer available.");
    return;
  }
  const verified = activeDoctor.bmdc === "BMDC verified";
  document.querySelector("[data-doctor-detail]").innerHTML = `
    <article class="panel doctor-profile-main">
      <div class="doctor-profile-head"><span class="doctor-avatar ${activeDoctor.color}">${escapeHtml(activeDoctor.initials)}</span><div><span class="verification-badge ${verified ? "is-verified" : "is-pending"}">${verified ? "✓ " : "◷ "}${escapeHtml(activeDoctor.bmdc)}</span><h1 id="doctor-detail-name">${escapeHtml(activeDoctor.name)}</h1><p>${escapeHtml(activeDoctor.specialty)} · ${escapeHtml(activeDoctor.qualification)}</p></div></div>
      <div class="profile-rating">★ ${escapeHtml(activeDoctor.rating)} <span>${escapeHtml(activeDoctor.reviews)}</span></div>
      <section class="chamber-block"><p class="eyebrow">CHAMBER & SCHEDULE</p><h2>${escapeHtml(activeDoctor.facility)}</h2><p>⌖ ${escapeHtml(activeDoctor.area)}, ${escapeHtml(activeDoctor.district)}</p><p>◷ ${escapeHtml(activeDoctor.schedule)}</p></section>
      <section class="chamber-block"><p class="eyebrow">CREDENTIALS</p><p>${escapeHtml(activeDoctor.qualification)}</p><p>${verified ? "BMDC registration verified by MediSync." : "Verification is pending. This profile is not promoted as verified."}</p></section>
      <button class="button button-primary" type="button" data-doctor-reminder>＋ Set appointment reminder</button>
    </article>
    <aside class="panel doctor-profile-aside"><p class="eyebrow">YOUR CARE, YOUR CHOICE</p><h2>Keep your visit details together</h2><p>Add the appointment to your calendar, then save your prescription or report after the visit.</p><button class="button button-secondary" type="button" data-view="records">Open medical history</button><button class="button button-secondary" type="button" data-boost-profile data-campaign-name="${escapeHtml(activeDoctor.name)}">Boost this doctor profile · demo draft</button></aside>`;
  showView("doctor-detail");
}

function renderReminders() {
  const list = document.querySelector("[data-reminder-list]");
  const sorted = [...reminders].sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
  list.innerHTML = sorted.map((reminder) => `<article class="reminder-row"><span class="reminder-date"><strong>${new Date(`${reminder.date}T12:00:00`).getDate()}</strong><small>${new Intl.DateTimeFormat("en", { month: "short" }).format(new Date(`${reminder.date}T12:00:00`))}</small></span><div><span class="tag">${escapeHtml(reminder.type)}</span><h3>${escapeHtml(reminder.title)}</h3><p>${formatDate(reminder.date)} · ${escapeHtml(reminder.time)}${reminder.notes ? ` · ${escapeHtml(reminder.notes)}` : ""}</p></div><button class="record-open" type="button" data-delete-reminder="${escapeHtml(reminder.id)}" aria-label="Delete reminder">×</button></article>`).join("");
  document.querySelector("[data-reminder-empty]").hidden = sorted.length > 0;
  document.querySelector("[data-current-month]").textContent = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date());
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    if (!window.createImageBitmap) {
      reject(new Error("Image compression is not supported in this browser."));
      return;
    }
    createImageBitmap(file).then((bitmap) => {
      const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        bitmap.close();
        reject(new Error("Could not prepare this image for compression."));
        return;
      }
      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      bitmap.close();
      let quality = 0.78;
      const exportImage = () => {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Could not compress this image."));
            return;
          }
          if (blob.size > 300 * 1024 && quality > 0.42) {
            quality -= 0.12;
            exportImage();
            return;
          }
          if (blob.size > 700 * 1024) {
            reject(new Error(`${file.name} is still too large after compression. Please choose a smaller photo.`));
            return;
          }
          const reader = new FileReader();
          reader.onload = () => resolve({ name: file.name.replace(/\.[^.]+$/, ".jpg"), dataUrl: reader.result, size: blob.size });
          reader.onerror = () => reject(new Error(`Could not read compressed image ${file.name}.`));
          reader.readAsDataURL(blob);
        }, "image/jpeg", quality);
      };
      exportImage();
    }).catch(() => reject(new Error(`Could not open image ${file.name}.`)));
  });
}

function clinicFieldsMarkup(clinic = {}, removable = false) {
  return `<div class="clinic-entry">
    <label>Medical / hospital name<input name="clinicName" type="text" required placeholder="Add a hospital or clinic" value="${escapeHtml(clinic.name || "")}"></label>
    <label>District<select name="clinicDistrict" required>${districtOptionsMarkup(clinic.district || "")}</select></label>
    <label>Area / upazila<input name="clinicArea" type="text" required placeholder="e.g. Dhanmondi" value="${escapeHtml(clinic.area || "")}"></label>
    <label>Chamber days and hours<input name="clinicSchedule" type="text" required placeholder="e.g. Sun–Thu, 5–9 pm" value="${escapeHtml(clinic.schedule || "")}"></label>
    ${removable ? `<button class="text-button remove-clinic" type="button" data-remove-clinic>Remove chamber</button>` : ""}
  </div>`;
}

function districtOptionsMarkup(selected = "") {
  return `<option value="">Choose district</option>${bdDistricts.map((district) => `<option value="${escapeHtml(district.name)}"${district.name === selected ? " selected" : ""}>${escapeHtml(district.name)}</option>`).join("")}`;
}

function populateDistrictSelects(root = document) {
  root.querySelectorAll("[data-bd-district-select]").forEach((select) => {
    const selected = select.value;
    select.innerHTML = districtOptionsMarkup(selected);
    select.value = selected;
  });
}

function openDoctorProfileDialog() {
  const form = document.querySelector("[data-doctor-profile-form]");
  form.reset();
  const clinicList = form.querySelector("[data-clinic-list]");
  clinicList.innerHTML = clinicFieldsMarkup();
  try {
    const saved = JSON.parse(localStorage.getItem(doctorProfileKey) || "null");
    if (saved) {
      form.elements.name.value = saved.name || "";
      form.elements.specialty.value = saved.specialty || "";
      form.elements.bmdc.value = saved.bmdc || "";
      clinicList.innerHTML = (saved.clinics || [{}]).map((clinic, index) => clinicFieldsMarkup(clinic, index > 0)).join("");
    }
  } catch (error) {
    console.error("Could not load doctor profile for editing.", error);
    showToast("Saved doctor profile could not be loaded.");
  }
  openDialog(document.querySelector("#doctor-profile-dialog"));
}

function openCampaignDialog(type, campaignName = "") {
  const form = document.querySelector("[data-campaign-form]");
  form.reset();
  form.elements.type.value = type;
  form.elements.campaignName.value = campaignName;
  form.elements.district.value = "";
  form.elements.area.value = "";
  form.querySelector("[data-location-clear]").hidden = true;
  form.querySelector("[data-location-suggestions]").hidden = true;
  openDialog(document.querySelector("#campaign-dialog"));
  form.elements.locationQuery.focus();
}

document.addEventListener("click", (event) => {
  const menuAction = event.target.closest("#sidebar button");
  if (menuAction && !menuAction.matches("[data-close-sidebar]")) closeNavigationDrawer();

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) showView(viewButton.dataset.view);

  if (event.target.closest("[data-view-link]")) {
    event.preventDefault();
    showView(event.target.closest("[data-view-link]").dataset.viewLink);
  }

  if (event.target.closest("[data-open-entry]")) {
    resetEntryForm();
    openDialog(document.querySelector("#entry-dialog"));
  }

  if (event.target.closest("[data-open-auth]")) openDialog(document.querySelector("#auth-dialog"));
  if (event.target.closest("[data-open-campaign]")) openCampaignDialog("medical-ad");
  if (event.target.closest("[data-logout]")) {
    closeNavigationDrawer();
    openDialog(document.querySelector("#auth-dialog"));
    showToast("You are using the local demo. Connect an account service to log out.");
  }

  if (event.target.closest("[data-open-reminder]")) {
    const form = document.querySelector("[data-reminder-form]");
    form.reset();
    form.elements.date.value = new Date().toISOString().slice(0, 10);
    openDialog(document.querySelector("#reminder-dialog"));
  }

  if (event.target.closest("[data-open-doctor-profile]")) openDoctorProfileDialog();
  if (event.target.closest("[data-ad-info]")) openCampaignDialog("medical-ad");
  const boostButton = event.target.closest("[data-boost-profile]");
  if (boostButton) {
    const profileName = boostButton.dataset.campaignName || document.querySelector("[data-doctor-profile-form]").elements.name.value.trim();
    openCampaignDialog("doctor-boost", profileName);
  }

  if (event.target.closest("[data-open-clinic-profile]")) {
    document.querySelector("[data-clinic-profile-form]").reset();
    openDialog(document.querySelector("#clinic-profile-dialog"));
  }

  if (event.target.closest("[data-add-clinic]")) {
    document.querySelector("[data-clinic-list]").insertAdjacentHTML("beforeend", clinicFieldsMarkup({}, true));
  }

  const removeClinic = event.target.closest("[data-remove-clinic]");
  if (removeClinic) removeClinic.closest(".clinic-entry").remove();

  if (event.target.closest("[data-open-patient-profile]")) {
    const form = document.querySelector("[data-patient-profile-form]");
    document.querySelector("#patient-profile-title").textContent = "Your health profiles";
    renderPatientProfiles();
    populatePatientProfileForm(form, patientProfile);
    openDialog(document.querySelector("#patient-profile-dialog"));
  }

  if (event.target.closest("[data-new-patient-profile]")) {
    const form = document.querySelector("[data-patient-profile-form]");
    form.reset();
    form.elements.profileId.value = "";
    form.elements.profileSelect.value = patientProfile.id;
    document.querySelector("#patient-profile-title").textContent = "Add patient profile";
  }

  if (event.target.closest("[data-activate-profile]")) {
    const profile = patientProfiles.find((item) => item.id === document.querySelector("[data-family-select]").value);
    if (profile) {
      try {
        localStorage.setItem(activePatientKey, profile.id);
        localStorage.setItem(patientProfileKey, JSON.stringify(profile));
        patientProfile = profile;
        records = loadRecords();
        updatePatientUi();
        renderRecords();
        document.querySelector("#patient-profile-dialog").close();
        showToast(`${profile.name}'s profile is active on this device.`);
      } catch (error) {
        console.error("Could not switch patient profile.", error);
        showToast("Could not switch to this profile.");
      }
    }
  }

  if (event.target.closest("[data-send-otp]")) {
    const profileForm = document.querySelector("[data-patient-profile-form]");
    beginOtpVerification(profileForm.elements.email.value, document.querySelector("#patient-profile-dialog"));
  }
  if (event.target.closest("[data-send-auth-otp]")) {
    const authForm = document.querySelector("[data-auth-form]");
    beginOtpVerification(authForm.elements.registerEmail.value, document.querySelector("#auth-dialog"));
  }
  if (event.target.closest("[data-otp-back]")) {
    const returnDialog = pendingOtp?.returnDialog;
    document.querySelector("#otp-dialog").close();
    if (returnDialog) openDialog(returnDialog);
    pendingOtp = null;
  }
  if (event.target.closest("[data-otp-resend]")) {
    document.querySelector("[data-otp-message]").textContent = "Demo code: 123456. Email delivery is not connected.";
  }
  const doctorButton = event.target.closest("[data-open-doctor]");
  if (doctorButton) openDoctor(doctorButton.dataset.openDoctor);

  if (event.target.closest("[data-doctor-reminder]")) {
    const form = document.querySelector("[data-reminder-form]");
    form.reset();
    form.elements.type.value = "Doctor appointment";
    form.elements.title.value = `${activeDoctor.name} appointment`;
    form.elements.date.value = new Date().toISOString().slice(0, 10);
    openDialog(document.querySelector("#reminder-dialog"));
  }

  const deleteReminder = event.target.closest("[data-delete-reminder]");
  if (deleteReminder) {
    reminders = reminders.filter((reminder) => reminder.id !== deleteReminder.dataset.deleteReminder);
    try {
      localStorage.setItem(remindersKey, JSON.stringify(reminders));
      renderReminders();
      showToast("Reminder removed.");
    } catch (error) {
      console.error("Could not remove reminder.", error);
      showToast("This reminder could not be removed.");
    }
  }

  const closeButton = event.target.closest("[data-close-dialog]");
  if (closeButton) closeButton.closest("dialog").close();

  const recordButton = event.target.closest("[data-open-record]");
  if (recordButton) openRecord(recordButton.dataset.openRecord);

  const imageButton = event.target.closest("[data-preview-image]");
  if (imageButton) {
    document.querySelector("[data-image-caption]").textContent = imageButton.dataset.previewImage;
    const preview = document.querySelector(".image-preview");
    const existingImage = preview.querySelector("img");
    if (existingImage) existingImage.remove();
    if (imageButton.dataset.previewSrc) {
      const image = document.createElement("img");
      image.src = imageButton.dataset.previewSrc;
      image.alt = imageButton.dataset.previewImage;
      preview.prepend(image);
    }
    openDialog(document.querySelector("#image-dialog"));
  }

  const languageButton = event.target.closest("[data-language]");
  if (languageButton) {
    const preferences = loadPreferences();
    preferences.language = languageButton.dataset.language;
    savePreferences(preferences);
    applyPreferences();
    showToast(`Language set to ${preferences.language}.`);
  }

  const themeButton = event.target.closest("[data-theme]");
  if (themeButton) {
    const preferences = loadPreferences();
    preferences.theme = themeButton.dataset.theme;
    savePreferences(preferences);
    applyPreferences();
  }

  const toggle = event.target.closest("[data-setting-toggle]");
  if (toggle) {
    const preferences = loadPreferences();
    const name = toggle.dataset.settingToggle;
    preferences[name] = toggle.getAttribute("aria-checked") !== "true";
    savePreferences(preferences);
    applyPreferences();
  }

  const authTab = event.target.closest("[data-auth-mode]");
  if (authTab) {
    const isRegister = authTab.dataset.authMode === "register";
    document.querySelectorAll("[data-auth-mode]").forEach((button) => {
      const isSelected = button === authTab;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-selected", String(isSelected));
    });
    document.querySelector("[data-login-fields]").hidden = isRegister;
    document.querySelector("[data-register-fields]").hidden = !isRegister;
    document.querySelector("#auth-title").textContent = isRegister ? "Create your account." : "Your health, all together.";
    document.querySelector("[data-auth-message]").textContent = "";
  }

  if (event.target === sidebar && sidebar.classList.contains("is-open")) {
    sidebar.classList.remove("is-open");
    document.querySelector(".sidebar-backdrop").classList.remove("is-visible");
    mobileMenu.setAttribute("aria-expanded", "false");
  }

  if (event.target.closest("[data-close-sidebar]")) {
    closeNavigationDrawer();
  }

  const locationOption = event.target.closest("[data-select-location]");
  if (locationOption) {
    const [district, area] = locationOption.dataset.selectLocation.split("|");
    const form = locationOption.closest("[data-location-form]");
    setSearchLocation(form, district, area);
    if (form.id === "home-location-query" || form.closest("#view-home")) renderHomeRecommendations();
  }

  const clearLocation = event.target.closest("[data-location-clear]");
  if (clearLocation) {
    const form = clearLocation.closest("[data-location-form]");
    form.elements.district.value = "";
    form.elements.area.value = "";
    form.elements.locationQuery.value = "";
    clearLocation.hidden = true;
    form.querySelector("[data-location-suggestions]").hidden = true;
    form.elements.locationQuery.focus();
    if (form.closest("#view-home")) renderHomeRecommendations();
  }
});

mobileMenu.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");
  document.querySelector(".sidebar-backdrop").classList.toggle("is-visible", isOpen);
  document.body.classList.toggle("drawer-open", isOpen);
  mobileMenu.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  if (isOpen) document.querySelector(".drawer-close").focus();
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelectorAll("[data-upload]").forEach((input) => {
  input.addEventListener("change", async () => {
    const category = input.dataset.upload;
    const limit = Number(input.dataset.limit);
    const selected = [...input.files];
    if (selected.some((file) => !file.type.startsWith("image/"))) {
      showToast("Please choose image files only.");
      input.value = "";
      return;
    }
    try {
      const processed = await Promise.all(selected.slice(0, limit).map(compressImage));
      const allFiles = categories.flatMap((name) => name === category ? processed : uploadFiles[name]);
      const totalBytes = allFiles.reduce((sum, file) => sum + file.size, 0);
      if (totalBytes > 1.5 * 1024 * 1024) {
        showToast("Keep compressed attachments under 1.5 MB per visit in this browser prototype.");
        input.value = "";
        return;
      }
      uploadFiles[category] = processed;
      const originalBytes = selected.slice(0, limit).reduce((sum, file) => sum + file.size, 0);
      const compressedBytes = processed.reduce((sum, file) => sum + file.size, 0);
      showToast(`Photos compressed: ${Math.max(1, Math.round(originalBytes / 1024))} KB → ${Math.max(1, Math.round(compressedBytes / 1024))} KB.`);
    } catch (error) {
      console.error("Could not compress uploaded images.", error);
      showToast(error.message || "Could not compress the selected images.");
      input.value = "";
      return;
    }
    if (selected.length > limit) showToast(`You can add up to ${limit} ${category} photos.`);
    renderFileList(category);
  });
});

document.querySelector("[data-entry-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const record = {
    id: `visit-${Date.now()}`,
    date: formData.get("date"),
    doctor: formData.get("doctor").trim(),
    facility: formData.get("facility").trim(),
  };
  categories.forEach((category) => {
    record[`${category}Files`] = uploadFiles[category];
    record[`${category}Description`] = formData.get(`${category}Description`).trim();
  });
  records.push(record);
  if (!saveRecords()) {
    records.pop();
    return;
  }
  renderRecords();
  form.closest("dialog").close();
  showToast("Medical entry saved in this browser.");
  openRecord(record.id);
});

document.querySelector("[data-record-filter]").addEventListener("input", (event) => {
  renderRecords(event.currentTarget.value, document.querySelector("[data-category-filter]").value);
});

document.querySelector("[data-category-filter]").addEventListener("change", (event) => {
  renderRecords(document.querySelector("[data-record-filter]").value, event.currentTarget.value);
});

document.querySelectorAll("[data-location-form]").forEach((form) => {
  const input = form.elements.locationQuery;
  input.addEventListener("focus", () => updateLocationSuggestions(form));
  input.addEventListener("input", () => {
    form.elements.district.value = "";
    form.elements.area.value = "";
    form.querySelector("[data-location-clear]").hidden = !input.value;
    updateLocationSuggestions(form);
    if (form.closest("#view-home")) renderHomeRecommendations();
  });
  const conditionSelect = form.querySelector("[data-condition]");
  if (conditionSelect) conditionSelect.addEventListener("change", () => renderHomeRecommendations());
});

document.querySelectorAll("[data-doctor-search]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const filters = Object.fromEntries(new FormData(form));
    document.querySelectorAll("[data-doctor-search]").forEach((otherForm) => {
      otherForm.elements.query.value = filters.query || "";
      otherForm.elements.condition.value = filters.condition || "";
      otherForm.elements.district.value = filters.district || "";
      otherForm.elements.area.value = filters.area || "";
      otherForm.elements.locationQuery.value = filters.locationQuery || "";
      otherForm.querySelector("[data-location-clear]").hidden = !filters.district;
    });
    showView("doctors");
    renderDoctors(filters);
    renderHomeRecommendations(filters);
  });
});

document.querySelector("[data-campaign-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.elements.district.value) {
    showToast("Choose a target district or area from the location suggestions.");
    form.elements.locationQuery.focus();
    updateLocationSuggestions(form);
    return;
  }
  const campaign = {
    ...Object.fromEntries(new FormData(form)),
    id: `campaign-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "draft",
  };
  campaigns.push(campaign);
  try {
    localStorage.setItem(campaignsKey, JSON.stringify(campaigns));
    renderCampaignSummary();
    form.closest("dialog").close();
    showToast(`Campaign draft saved for ${campaign.area ? `${campaign.area}, ` : ""}${campaign.district}. It is not live.`);
  } catch (error) {
    campaigns.pop();
    console.error("Could not save campaign draft.", error);
    showToast("This campaign draft could not be saved in this browser.");
  }
});

document.querySelector("[data-reminder-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget));
  reminders.push({ ...values, id: `reminder-${Date.now()}` });
  try {
    localStorage.setItem(remindersKey, JSON.stringify(reminders));
    event.currentTarget.closest("dialog").close();
    renderReminders();
    showToast("Reminder saved on this device.");
    showView("reminders");
  } catch (error) {
    reminders.pop();
    console.error("Could not save reminder.", error);
    showToast("This reminder could not be saved in this browser.");
  }
});

document.querySelector("[data-doctor-profile-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(event.currentTarget);
  const bmdc = String(formData.get("bmdc") || "").trim();
  if (!bmdc) {
    form.elements.bmdc.setCustomValidity("BMDC registration number is required.");
    form.elements.bmdc.reportValidity();
    return;
  }
  form.elements.bmdc.setCustomValidity("");
  const clinics = [...form.querySelectorAll(".clinic-entry")].map((clinic) => ({
    name: clinic.querySelector('[name="clinicName"]').value.trim(),
    district: clinic.querySelector('[name="clinicDistrict"]').value,
    area: clinic.querySelector('[name="clinicArea"]').value.trim(),
    schedule: clinic.querySelector('[name="clinicSchedule"]').value.trim(),
  }));
  const profile = {
    name: String(formData.get("name") || "").trim(),
    specialty: String(formData.get("specialty") || "").trim(),
    bmdc,
    certificateName: formData.get("certificate").name || "",
    clinics,
  };
  profile.status = "verification-pending";
  profile.published = false;
  try {
    localStorage.setItem(doctorProfileKey, JSON.stringify(profile));
    form.closest("dialog").close();
    showToast("Profile saved as pending review. It is not publicly listed.");
  } catch (error) {
    console.error("Could not save doctor profile.", error);
    showToast("This profile could not be saved in this browser.");
  }
});

document.querySelector("[data-clinic-profile-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = Object.fromEntries(new FormData(event.currentTarget));
  profile.status = "verification-pending";
  profile.published = false;
  try {
    localStorage.setItem(clinicProfileKey, JSON.stringify(profile));
    event.currentTarget.closest("dialog").close();
    showToast("Medical profile saved as pending review. It is not publicly listed.");
  } catch (error) {
    console.error("Could not save medical profile.", error);
    showToast("This medical profile could not be saved in this browser.");
  }
});

document.querySelector("[data-patient-profile-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!verifiedOtpEmails.has(email)) {
    beginOtpVerification(email, document.querySelector("#patient-profile-dialog"));
    return;
  }
  const profileId = String(formData.get("profileId") || `patient-${Date.now()}`);
  const updatedProfile = {
    id: profileId,
    name: String(formData.get("name") || "").trim(),
    mobile: String(formData.get("mobile") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    district: String(formData.get("district") || "").trim(),
    bloodGroup: String(formData.get("bloodGroup") || ""),
    allergies: String(formData.get("allergies") || "").trim(),
  };
  const updatedProfiles = [...patientProfiles];
  const index = updatedProfiles.findIndex((profile) => profile.id === profileId);
  if (index === -1) updatedProfiles.push(updatedProfile);
  else updatedProfiles[index] = updatedProfile;
  try {
    localStorage.setItem(patientProfilesKey, JSON.stringify(updatedProfiles));
    localStorage.setItem(patientProfileKey, JSON.stringify(updatedProfile));
    localStorage.setItem(activePatientKey, updatedProfile.id);
    patientProfile = updatedProfile;
    patientProfiles = updatedProfiles;
    records = loadRecords();
    updatePatientUi();
    renderRecords();
    document.querySelector("#patient-profile-title").textContent = "Your health profiles";
    event.currentTarget.closest("dialog").close();
    verifiedOtpEmails.delete(email);
    showToast("Profile saved on this device. Email OTP was demo-only; account login is not enabled.");
  } catch (error) {
    console.error("Could not save patient profile.", error);
    showToast("This profile could not be saved in this browser.");
  }
});

document.querySelector("[data-otp-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!pendingOtp) {
    document.querySelector("[data-otp-message]").textContent = "Start verification again from the profile form.";
    return;
  }
  if (form.elements.otp.value !== "123456") {
    document.querySelector("[data-otp-message]").textContent = "That demo code is not correct. Enter 123456.";
    return;
  }
  const { email, returnDialog } = pendingOtp;
  verifiedOtpEmails.add(email);
  pendingOtp = null;
  document.querySelector("#otp-dialog").close();
  openDialog(returnDialog);
  const authForm = document.querySelector("[data-auth-form]");
  const isRegistration = !document.querySelector("[data-register-fields]").hidden;
  if (returnDialog.id === "auth-dialog" && isRegistration && authForm.elements.registerEmail.value.trim().toLowerCase() === email) {
    document.querySelector("[data-auth-message]").textContent = "Demo email verified. This is not a real email verification.";
  }
  if (returnDialog.id === "patient-profile-dialog" && document.querySelector("[data-patient-profile-form]").elements.email.value.trim().toLowerCase() === email) {
    document.querySelector("[data-send-otp]").textContent = "Email verified (demo)";
  }
  showToast("Demo code accepted. No real email was verified.");
});

document.querySelector("[data-family-select]").addEventListener("change", (event) => {
  const profile = patientProfiles.find((item) => item.id === event.currentTarget.value);
  if (profile) populatePatientProfileForm(document.querySelector("[data-patient-profile-form]"), profile);
});

document.querySelector("[data-assistant-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const concern = String(new FormData(event.currentTarget).get("concern") || "").trim();
  const matchedConditions = conditionsFromText(concern);
  const matchedDoctors = doctors.filter((doctor) => !matchedConditions.length || matchedConditions.some((condition) => doctor.conditions.includes(condition)));
  const recommendations = (matchedDoctors.length ? matchedDoctors : doctors).slice(0, 3);
  const conditionLabels = matchedConditions.map((condition) => healthConditions.find(([value]) => value === condition)?.[1]).filter(Boolean);
  const result = document.querySelector("[data-assistant-result]");
  result.innerHTML = `<strong>Care options · keyword-based demo</strong><p>This does not diagnose or prescribe. You can discuss your concern${conditionLabels.length ? ` (${escapeHtml(conditionLabels.join(", "))})` : ""} with a licensed clinician${concern ? `: “${escapeHtml(concern)}”` : ""}.</p><p>Suggested sample listings only; credentials are not verified.</p><div class="doctor-grid assistant-recommendations">${recommendations.map(doctorCardMarkup).join("")}</div><button class="text-button" type="button" data-view="doctors">Browse all doctors →</button>`;
  result.hidden = false;
});

document.querySelector("[data-search]").addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  const searchTerm = event.currentTarget.value.trim();
  if (!searchTerm) return;
  const form = document.querySelector("#view-home [data-doctor-search]");
  form.elements.query.value = searchTerm;
  const directoryForm = document.querySelector("#view-doctors [data-doctor-search]");
  directoryForm.elements.query.value = searchTerm;
  const filters = Object.fromEntries(new FormData(form));
  ["condition", "district", "area", "locationQuery"].forEach((name) => {
    directoryForm.elements[name].value = filters[name] || "";
  });
  directoryForm.querySelector("[data-location-clear]").hidden = !filters.district;
  showView("doctors");
  renderDoctors({ ...filters, query: searchTerm });
  directoryForm.elements.query.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sidebar.classList.contains("is-open")) closeNavigationDrawer();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("[data-search]").focus();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-location-query], [data-location-suggestions]")) return;
  document.querySelectorAll("[data-location-suggestions]").forEach((suggestions) => {
    suggestions.hidden = true;
  });
});

document.querySelector("[data-auth-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const registerMode = !document.querySelector("[data-register-fields]").hidden;
  const message = document.querySelector("[data-auth-message]");
  if (registerMode) {
    const email = document.querySelector('[name="registerEmail"]').value.trim().toLowerCase();
    if (!verifiedOtpEmails.has(email)) {
      beginOtpVerification(email, document.querySelector("#auth-dialog"));
      return;
    }
    const password = document.querySelector('[name="registerPassword"]').value;
    const confirmation = document.querySelector('[name="registerConfirm"]').value;
    if (password !== confirmation) {
      message.textContent = "Your passwords do not match.";
      return;
    }
  }
  message.textContent = registerMode ? "Demo account details are ready. Account creation and email verification are not connected." : "You are signed in to this local prototype.";
  if (registerMode) verifiedOtpEmails.delete(document.querySelector('[name="registerEmail"]').value.trim().toLowerCase());
});

document.querySelector(".google-button").addEventListener("click", () => showToast("Google sign-in is not connected in this prototype."));

renderRecords();
renderConditionOptions();
renderLocationCounts();
populateDistrictSelects();
renderDoctors();
renderReminders();
renderCampaignSummary();
applyPreferences();
updatePatientUi();
