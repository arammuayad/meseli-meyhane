const dict={
  tr:{
    brand:"Meşeli Meyhane",menu:"Menü",events:"Canlı Müzik",contact:"İletişim",
    hero:"Geleneksel Meyhane Kültürü",
    cold:"Soğuk Mezeler",coldPrice:"300₺ / Yarım 150₺",
    c1:"Yoğurtlu Semizotu",c2:"Cacık",c3:"Fava",c4:"Atom",c5:"Şakşuka",c6:"Pancar",c7:"Turşu",c8:"Humus",
    hot:"Sıcak Mezeler",hotPrice:"400₺ / Yarım 200₺",
    h1:"Kara Lahana",h2:"Hellim Mantar",h3:"Çıtır Fava",
    main:"Ana Yemekler",et:"Et",e1:"Kuzu Şiş",e2:"Adana",e3:"Izgara Köfte",e4:"Kuzu Pirzola",
    tavuk:"Tavuk",t1:"Tavuk Şiş",t2:"Tavuk Izgara",t3:"Tavuk Kavurma",
    balik:"Balık",b1:"Hamsi Tava",b2:"Levrek Izgara",
    music:"Canlı Müzik",day:"Cumartesi",time:"20:00 – 00:00",reserve:"Rezervasyon",
    cont:"İletişim",addr:"📍 Kızılay / Ankara",phone:"☎️ +90 312 424 06 94",
    resTitle:"Rezervasyon Formu",namePh:"İsim",telPh:"Telefon",guestPh:"Kişi Sayısı",notePh:"Not (opsiyonel)",sendBtn:"Gönder"
  },
  ar:{
    brand:"ميشلي ميهانه",menu:"القائمة",events:"الموسيقى الحية",contact:"تواصل",
    hero:"ثقافة المطعم التركي التقليدي",
    cold:"المقبلات الباردة",coldPrice:"٣٠٠ ليرة / نصف ١٥٠ ليرة",
    c1:"السلق بالزبادي",c2:"الخيار باللبن",c3:"فول مدمس",c4:"فلفل أتوم",c5:"شكشوكة",c6:"الشمندر",c7:"مخلل",c8:"الحمص",
    hot:"المقبلات الساخنة",hotPrice:"٤٠٠ ليرة / نصف ٢٠٠ ليرة",
    h1:"كرنب أسود",h2:"فطر بالحلوم",h3:"فول مقلي مقرمش",
    main:"الأطباق الرئيسية",et:"اللحوم",e1:"كباب الغنم",e2:"أضنة",e3:"كفتة مشوية",e4:"قطع غنم",
    tavuk:"الدجاج",t1:"كباب دجاج",t2:"دجاج مشوي",t3:"دجاج مقلي",
    balik:"السمك",b1:"حمسي مقلي",b2:"لوتريل مشوي",
    music:"الموسيقى الحية",day:"السبت",time:"٢٠:٠٠ – ٠٠:٠٠",reserve:"احجز الآن",
    cont:"تواصل معنا",addr:"📍 كيزيلاي / أنقرة",phone:"☎️ +٩٠ ٣١٢ ٤٢٤ ٠٦ ٩٤",
    resTitle:"نموذج الحجز",namePh:"الاسم",telPh:"الهاتف",guestPh:"عدد الأشخاص",notePh:"ملاحظة (اختياري)",sendBtn:"إرسال"
  },
  en:{
    brand:"Meşeli Meyhane",menu:"Menu",events:"Live Music",contact:"Contact",
    hero:"Traditional Tavern Culture",
    cold:"Cold Mezes",coldPrice:"300₺ / Half 150₺",
    c1:"Purslane with Yogurt",c2:"Cacık",c3:"Fava",c4:"Atom",c5:"Shakshuka",c6:"Beetroot",c7:"Pickles",c8:"Hummus",
    hot:"Hot Mezes",hotPrice:"400₺ / Half 200₺",
    h1:"Black Cabbage",h2:"Halloumi Mushroom",h3:"Crispy Fried Fava",
    main:"Main Courses",et:"Meat",e1:"Lamb Shish",e2:"Adana Kebab",e3:"Grilled Kofta",e4:"Lamb Chops",
    tavuk:"Chicken",t1:"Chicken Shish",t2:"Grilled Chicken",t3:"Chicken Sauté",
    balik:"Fish",b1:"Fried Anchovy",b2:"Grilled Seabass",
    music:"Live Music",day:"Saturday",time:"20:00 – 00:00",reserve:"Reservation",
    cont:"Contact",addr:"📍 Kızılay / Ankara",phone:"☎️ +90 312 424 06 94",
    resTitle:"Reservation Form",namePh:"Name",telPh:"Phone",guestPh:"Guests",notePh:"Note (optional)",sendBtn:"Send"
  }
};

function setLang(l){
  document.documentElement.lang=l;
  document.querySelectorAll("[data-key]").forEach(el=>{
    const k=el.dataset.key;
    if(dict[l][k]) el.textContent=dict[l][k];
  });
  document.querySelectorAll("[data-key-ph]").forEach(el=>{
    const k=el.dataset.keyPh;
    if(dict[l][k]) el.placeholder=dict[l][k];
  });
  document.querySelectorAll(".lang-switch button").forEach(b=>b.classList.remove("active"));
  document.querySelector(`button[onclick="setLang('${l}')"]`).classList.add("active");
  if(l==="ar"){document.body.dir="rtl"}else{document.body.dir="ltr"}
}
setLang("tr");
