// Swiper Rules
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '0': {
        slidesPerView: 2
      },
      '480': {
        slidesPerView: 3
      },
      '640': {
        slidesPerView: 4
      },
      '900': {
        slidesPerView: 5
      },
      '1000': {
        slidesPerView: 6
      },
      '1300': {
        slidesPerView: 8
      },
    },
  });

// Owl Carousel 2 Rules
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: false,
    rtl: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fal fa-chevron-circle-left'></i>", "<i class='fal fa-chevron-circle-right'></i>"],
    dots: false,
    responsive: {
        0: {
            slideBy: 1,
            items: 1
        },
        340:{
            slideBy: 1,
            items: 2
        },
        600: {
            items: 4,
            slideBy: 4
        },
        800: {
            slideBy: 5,
            items: 5
        },
        1000: {
            items: 6,
            slideBy: 6
        },
        1100: {
            items: 7,
            slideBy: 7
        },
        1300: {
            items: 8,
            slideBy: 8
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


// costumize

// Show Details of any category when mouseover it 
type = document.querySelector(".category").querySelectorAll("span");
type.forEach(element => {
    element.addEventListener("mouseover",function(){
        type.forEach(type=>type.classList.remove("selected"))
        this.classList.add("selected")
        show = document.querySelector(".selected").querySelector("a").innerHTML;
        if(show==="الإلكترونيات والموبايلات"){
            let detail = '';
            detail = '<div class="topBar">الإلكترونيات والموبايلات</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/mobiles/">الموبايلات</a><a href="/uae-ar/laptops/">اللابتوبات والكمبيوترات</a><a href="/uae-ar/gaminghub/">ألعاب الفيديو</a><a href="/uae-ar/audio-video/">التلفزيونات</a><a href="/uae-ar/power-banks/">باور بانك</a><a href="/uae-ar/audio-store/">سماعات الرأس</a><a href="/uae-ar/all-speakers/">سماعات</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/wearables-store/">إكسسوارات للارتداء</a><a href="/uae-ar/cameras/">كاميرات وتصوير وفيديو</a><a href="/uae-ar/electronics-and-mobiles/computers-and-accessories/tablets/">أجهزة التابلت</a></div></div><div class="column"><div class="subtitle">أفضل الماركات</div><div class="list"><a href="/uae-ar/samsung/">سامسونج</a><a href="/uae-ar/sony/">سوني</a><a href="/uae-ar/dell/">ديل</a><a href="/uae-ar/hp/">إتش بي</a><a href="/uae-ar/kenwood/">كينوود</a><a href="/uae-ar/canon/">كانون</a><a href="/uae-ar/philips/">فيليبس</a><a href="/uae-ar/honor/?f[is_fbn]=1">هونور</a><a href="/uae-ar/huawei/?f[is_fbn]=1">هواوي</a><a href="/uae-ar/logitech/">لوجيتيك</a></div></div></div>'
            document.getElementById("detail").innerHTML = detail;
        }
        if(show==="الأزياء"){
            let detail = '';
            detail = '<div class="topBar">الأزياء</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/fashion-women/">الأزياء النسائية</a><a href="/uae-ar/fashion/women-31229/shoes-16238/">أحذية نسائية</a><a href="/uae-ar/fashion-men/">أزياء رجالية</a><a href="/uae-ar/fashion/men-31225/shoes-17421/">أحذية رجالية</a><a href="/uae-ar/mens-watches/">الساعات</a><a href="/uae-ar/jewellery-store/">المجوهرات</a><a href="/uae-ar/eyewear-men/">النظارات</a><a href="/uae-ar/fashion/women-31229/handbags-16699/">حقائب يد للنساء</a><a href="/uae-ar/fashion/girls-31223/">أزياء البنات</a><a href="/uae-ar/fashion/boys-31221/">أزياء الأولاد</a></div></div><div class="column"><div class="subtitle">أفضل الماركات</div><div class="list"><a href="/uae-ar/nike/">نايكي</a><a href="/uae-ar/adidas/adidas_originals/">أديداس</a><a href="/uae-ar/reebok/">ريبوك</a><a href="/uae-ar/puma/">بوما</a><a href="/uae-ar/trendyol/">ترينديول</a><a href="/uae-ar/skechers/">سكيتشرز</a><a href="/uae-ar/shoexpress/"> شو إكسبريس</a><a href="/uae-ar/rayban/ray_ban/">راي بان</a><a href="/uae-ar/hayat/">حياة</a><a href="/uae-ar/casio/">كاسيو</a></div></div></div>'
            document.getElementById("detail").innerHTML = detail;
        }
        if(show==="المنزل والمطبخ"){
            let detail = '';
            detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
            document.getElementById("detail").innerHTML = detail;
        }
        if(show==="الجمال والعطور"){
            let detail = '';
            detail = '<div class="topBar">الجمال والعطور</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/beauty-and-health/beauty/fragrance/?f[is_fbn]=1">عطور</a><a href="/uae-ar/beauty-and-health/beauty/makeup-16142/?f[is_fbn]=1">مستحضرات تجميل</a><a href="/uae-ar/beauty-and-health/beauty/hair-care/?f[is_fbn]=1">العناية بالشعر</a><a href="/uae-ar/beauty-and-health/beauty/skin-care-16813/?f[is_fbn]=1">عناية بالبشرة</a><a href="/uae-ar/beauty-and-health/beauty/personal-care-16343/?f[is_fbn]=1">العناية الشخصية</a><a href="/uae-ar/men-grooming/">منتجات العناية بالرجال</a><a href="/uae-ar/health-personal-care/">منتجات الرعاية الصحية</a></div></div><div class="column"><div class="subtitle">أفضل الماركات</div><div class="list"><a href="/uae-ar/burberry/">بربري</a><a href="/uae-ar/calvin_klein/">كلفن كلاين</a><a href="/uae-ar/davidoff/">دافيدوف</a><a href="/uae-ar/babyliss/?f[is_fbn]=1">بيبي ليس</a><a href="/uae-ar/essence/">ايسنس</a><a href="/uae-ar/hugo_boss/">هوغو بوس</a><a href="/uae-ar/maybelline_new_york/">ميبلين نيويورك</a><a href="/uae-ar/max_factor/">ماكس فاكتور</a><a href="/uae-ar/thebalm/">ذي بالم</a><a href="/uae-ar/yves_saint_laurent/">إيف سان لوران</a></div></div></div>'
            document.getElementById("detail").innerHTML = detail;
        }
        if(show==="الرياضة والأنشطة الخارجية"){
            let detail = '';
            detail = '<div class="topBar">الرياضة والأنشطة الخارجية</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/sports-and-outdoors/exercise-and-fitness/cardio-training/">تمارين الكارديو</a><a href="/uae-ar/sports-and-outdoors/exercise-and-fitness/strength-training-equipment/">معدات القوة البدنية</a><a href="/uae-ar/sports-and-outdoors/exercise-and-fitness/yoga-16328/">اليوجا</a><a href="/uae-ar/sports-and-outdoors/team-sports/">الرياضات الجماعية</a><a href="/uae-ar/running-store/">الجري والتمرين</a><a href="/uae-ar/sports-and-outdoors/other-sports/">الملاكمة والمصارعة</a><a href="/uae-ar/sports-and-outdoors/cycling-16009/">ركوب الدراجات</a><a href="/uae-ar/sports-and-outdoors/outdoor-recreation/camping-and-hiking-16354/">التخييم والرحلات</a><a href="/uae-ar/sports-and-outdoors/boating-and-water-sports/">السباحة والرياضات المائية</a><a href="/uae-ar/sports-and-outdoors/action-sports/skateboarding-20415/">رياضات التزلج</a><a href="/uae-ar/sports-outdoors/">عرض الكل</a></div></div><div class="column"><div class="subtitle">أفضل الماركات</div><div class="list"><a href="/uae-ar/sports-and-outdoors/marshal_fitness/">مارشال فيتنس</a><a href="/uae-ar/sports-and-outdoors/reebok/">ريبوك</a><a href="/uae-ar/sports-and-outdoors/adidas/">أديداس</a><a href="/uae-ar/sports-and-outdoors/nike/">نايكي</a><a href="/uae-ar/sports-and-outdoors/xiaomi/">شاومي</a><a href="/uae-ar/speedo/">سبيدو</a><a href="/uae-ar/sports-and-outdoors/skyland/?f[partner]=p_11805&amp;f[partner]=p_18391&amp;f[partner]=p_15204">سكاي لاند</a></div></div></div> '
            document.getElementById("detail").innerHTML = detail;
        }
        if(show==="الألعاب"){
            let detail = '';
            detail = '<div class="topBar">الألعاب</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/toys-and-games/building-toys/">ألعاب البناء</a><a href="/uae-ar/toys-and-games/arts-and-crafts/">الفنون والحرف</a><a href="/uae-ar/toys-and-games/dolls-and-accessories/">الدُمى وإكسسواراتها</a><a href="/uae-ar/toys-and-games/action-figures-and-statues/">شخصيات وتماثيل</a><a href="/uae-ar/toys-and-games/sports-and-outdoor-play/">الرياضة والألعاب الخارجية</a><a href="/uae-ar/toys-and-games/toy-remote-control-and-play-vehicles/">مركبات بجهاز تحكم عن بُعد</a><a href="/uae-ar/toys-and-games/tricycles-scooters-and-wagons/">دراجات وسكوترات وعربات</a><a href="/uae-ar/toys-and-games/baby-and-toddler-toys/">ألعاب الأطفال</a><a href="/uae-ar/toys-and-games/games-18311/board-games-26000/">ألعاب الطاولة</a></div></div><div class="column"><div class="subtitle">أفضل الماركات</div><div class="list"><a href="/uae-ar/toys-and-games/intex/">اينتكس</a><a href="/uae-ar/lego/">ليجو</a><a href="/uae-ar/funko/">فانكو</a><a href="/uae-ar/sylvanian_families/">سلفينيان فاميليز</a><a href="/uae-ar/nerf/">نيرف</a><a href="/uae-ar/shopkins/">شوبكينز</a><a href="/uae-ar/disney/">ديزني</a><a href="/uae-ar/fisher_price/">فيشر برايس</a><a href="/uae-ar/play_doh/">بلاي دوه</a></div></div></div>'
            document.getElementById("detail").innerHTML = detail;
        }
        // if(show==="المأكولات و لوازم المنزل"){
        //     let detail = '';
        //     detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
        //     document.getElementById("detail").innerHTML = detail;
        // }
        // if(show==="مستلزمات السيارات"){
        //     let detail = '';
        //     detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
        //     document.getElementById("detail").innerHTML = detail;
        // }
        // if(show==="أدوات وتحسينات المنزل"){
        //     let detail = '';
        //     detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
        //     document.getElementById("detail").innerHTML = detail;
        // }
        // if(show==="الكتب"){
        //     let detail = '';
        //     detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
        //     document.getElementById("detail").innerHTML = detail;
        // }
        // if(show==="لوازم الحيوانات الأليفة"){
        //     let detail = '';
        //     detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
        //     document.getElementById("detail").innerHTML = detail;
        // }
        // if(show==="لوازم مكتبية"){
        //     let detail = '';
        //     detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
        //     document.getElementById("detail").innerHTML = detail;
        // }
        // if(show==="الموسيقى والأفلام"){
        //     let detail = '';
        //     detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
        //     document.getElementById("detail").innerHTML = detail;
        // }
        // if(show==="محلي"){
        //     let detail = '';
        //     detail = ' <div class="topBar">المنزل والمطبخ</div><div class="subCats"><div class="column"><div class="subtitle">الأكثر شهرة</div><div class="list"><a href="/uae-ar/home-and-kitchen/bedding-16171/">مستلزمات السرير</a><a href = "/uae-ar/home-and-kitchen/bath-16182/" > الحمامات</a ><a href="/uae-ar/home-and-kitchen/home-decor/">ديكورات المنازل</a><a href="/uae-ar/kitchen-dining/">مطبخ وأدوات طعام</a><a href="/uae-ar/home-appliances/">أجهزة منزلية</a><a href="/uae-ar/furniture/">الأثاث</a><a href="/uae-ar/home-and-kitchen/storage-and-organisation/">تخزين وتنظيم منزلي</a><a href="/uae-ar/pet-store/">مستلزمات الحيوانات الأليفة</a><a href="/uae-ar/home-and-kitchen/home-appliances-31235/large-appliances/">الأجهزة الكبيرة</a></div > </div ><div class="column"> <div class="subtitle">أفضل الماركات</div> <div class="list"><a href="/uae-ar/penguen/">بينجوين</a><a href="/uae-ar/home-and-kitchen/intex/">اينتكس</a><a href="/uae-ar/opalina/">أوبالينا</a><a href="/uae-ar/lock_and_lock/">لوك آند لوك</a><a href="/uae-ar/raj/">راج</a><a href="/uae-ar/luminarc/">لومينارك</a><a href="/uae-ar/prestige/">برستيج</a><a href="/uae-ar/dinewell/">دينويل</a><a href="/uae-ar/bosch/">بوش</a></div></div> </div > '
        //     document.getElementById("detail").innerHTML = detail;
        // }
    })
});


  
  // Show Details in dropdown menu for any content from content section when mouseover it
  content = document.querySelector(".categories").querySelectorAll(".swiper-slide");
  content.forEach(element => {
    element.addEventListener("mouseout", function () {
      document.getElementById("dropmenu-content").style.display = 'none';
    })
    element.addEventListener("mouseover", function () {
      content.forEach(type => type.classList.remove("swiper-slide-over"))
      this.classList.add("swiper-slide-over")
      display = document.querySelector(".swiper-slide-over").querySelector("a").innerHTML;
      document.getElementById("dropmenu-content").style.display = 'flex';
      if (display === "الإلكترونيات") {
        let dropmenu = '';
        dropmenu = '<ul class="list"><li>الفئات</li><li><a href="#">الموبايلات والمحاقتها</a></li><li><a href="#">اللابتوبات والكمبيوترات</a></li><li><a href="#">ألعاب الفيديو</a></li><li><a href="#">تلفزيونات</a></li><li><a href="#">أجهزة منزلية</a></li><li><a href="#">سماعات</a></li><li><a href="#">سماعات رأس وسماعات اذن</a></li><li><a href="#">باور بانك</a></li><li><a href="#">اكسسوارات للارتداء</a></li><li><a href="#">كاميرات تصوير وفيديو</a></li><li><a href="#">اجهزة التابلت</a></li></ul><div class="best-company"><div class="title">أفضل الماركات</div><table class="image"><tr><td><a href="#"><img src="assest/img/elctronics/best company/bose.png"></a></td><td><a href="#"><img src="assest/img/elctronics/best company/en_logo-01.png"></a></td><td><a href="#"><img src="assest/img/elctronics/best company/en_sony.png"></a></td></tr><tr><td><a href="#"><img src="assest/img/elctronics/best company/en_Xiaomi.png"></a></td><td><a href="#"><img src="assest/img/elctronics/best company/lenovo-elec.png"></a></td><td><a href="#"><img src="assest/img/elctronics/best company/noon-elec.png"></a></td></tr><tr><td><a href="#"><img src="assest/img/elctronics/best company/philips.png"></a></td><td><a href="#"><img src="assest/img/elctronics/best company/Samsung-logo (1).png"></a></td><td><a href="#"><img src="assest/img/elctronics/best company/Samsung-logo.png"></a></td></tr></table></div><div class="best-section"><a href=""><img src="assest/img/elctronics/ar-top-electronics-1.jpg"></a><a href=""><img src="assest/img/elctronics/ar-top-electronics-2.jpg"></a></div>'
        document.getElementById("dropmenu-content").innerHTML = dropmenu;
      }
      if (display === "رجالية") {
        let dropmenu = '';
        dropmenu = ' <ul class="list"> <li>الفئات</li> <li><a href="#">اخر ما وصل</a></li> <li><a href="#">ملابس</a></li> <li><a href="#">احذية </a></li> <li><a href="#">شنط</a></li> <li><a href="#">ساعات </a></li> <li><a href="#">سماعات</a></li> <li><a href="#">سماعات رأس وسماعات اذن</a></li> <li><a href="#">باور بانك</a></li> <li><a href="#">اكسسوارات للارتداء</a></li> <li><a href="#">كاميرات تصوير وفيديو</a></li> <li><a href="#">اجهزة التابلت</a></li> </ul> <div class="best-company"> <div class="title">أفضل الماركات</div> <table class="image"> <tr> <td><a href="#"><img src="assest/img/men/best company/Converse.png"></a></td> <td><a href="#"><img src="assest/img/men/best company/en_logo-06.png"></a></td> <td><a href="#"><img src="assest/img/men/best company/en_nav-01.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/men/best company/en_nav-03.png"></a></td> <td><a href="#"><img src="assest/img/men/best company/en_nav-04.png"></a></td> <td><a href="#"><img src="assest/img/men/best company/en_nav-05.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/men/best company/en_nav-12.png"></a></td> <td><a href="#"><img src="assest/img/men/best company/en_nav-Jacknjones.png"></a></td> <td><a href="#"><img src="assest/img/men/best company/en_nav-Nike.png"></a></td> </tr> </table> </div> <div class="best-section"> <a href=""> <img src="assest/img/men/ar_fashion-03.png"> </a> <a href=""> <img src="assest/img/men/ar-top-men-2.jpg"> </a> </div>'
        document.getElementById("dropmenu-content").innerHTML = dropmenu;
      }
      if (display === "نسائية") {
        let dropmenu = '';
        dropmenu = ' <ul class="list"> <li>الفئات</li> <li><a href="#">اخر ما وصل</a></li> <li><a href="#">ملابس</a></li> <li><a href="#">احذية </a></li> <li><a href="#">شنط</a></li> <li><a href="#">ساعات </a></li> <li><a href="#">سماعات</a></li> <li><a href="#">سماعات رأس وسماعات اذن</a></li> <li><a href="#">اكسسوارات للارتداء</a></li> <li><a href="#">كاميرات تصوير وفيديو</a></li> <li><a href="#">اجهزة التابلت</a></li> </ul> <div class="best-company"> <div class="title">أفضل الماركات</div> <table class="image"> <tr> <td><a href="#"><img src="assest/img/women/best company/en_logo-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-01.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-03.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-05.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-07.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-08.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-12.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-Nike.png"></a></td> </tr> </table> </div> <div class="best-section"> <a href=""> <img src="assest/img/women/ar_fashion-01.png"> </a> <a href=""> <img src="assest/img/women/ar-top-women-2.jpg"> </a> </div>'
        document.getElementById("dropmenu-content").innerHTML = dropmenu;
      }
      if (display === "المنزل") {
        let dropmenu = '';
        dropmenu = ' <ul class="list"> <li>الفئات</li> <li><a href="#">اخر ما وصل</a></li> <li><a href="#">ملابس</a></li> <li><a href="#">احذية </a></li> <li><a href="#">شنط</a></li> <li><a href="#">ساعات </a></li> <li><a href="#">سماعات</a></li> <li><a href="#">سماعات رأس وسماعات اذن</a></li> <li><a href="#">اكسسوارات للارتداء</a></li> <li><a href="#">كاميرات تصوير وفيديو</a></li> <li><a href="#">اجهزة التابلت</a></li> </ul> <div class="best-company"> <div class="title">أفضل الماركات</div> <table class="image"> <tr> <td><a href="#"><img src="assest/img/women/best company/en_logo-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-01.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-03.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-05.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-07.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-08.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-12.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-Nike.png"></a></td> </tr> </table> </div> <div class="best-section"> <a href=""> <img src="assest/img/women/ar_fashion-01.png"> </a> <a href=""> <img src="assest/img/women/ar-top-women-2.jpg"> </a> </div>'
        document.getElementById("dropmenu-content").innerHTML = dropmenu;
      }
      if (display === "الجمال والعطور") {
        let dropmenu = '';
        dropmenu = ' <ul class="list"> <li>الفئات</li> <li><a href="#">اخر ما وصل</a></li> <li><a href="#">ملابس</a></li> <li><a href="#">احذية </a></li> <li><a href="#">شنط</a></li> <li><a href="#">ساعات </a></li> <li><a href="#">سماعات</a></li> <li><a href="#">سماعات رأس وسماعات اذن</a></li> <li><a href="#">اكسسوارات للارتداء</a></li> <li><a href="#">كاميرات تصوير وفيديو</a></li> <li><a href="#">اجهزة التابلت</a></li> </ul> <div class="best-company"> <div class="title">أفضل الماركات</div> <table class="image"> <tr> <td><a href="#"><img src="assest/img/women/best company/en_logo-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-01.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-03.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-05.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-07.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-08.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-12.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-Nike.png"></a></td> </tr> </table> </div> <div class="best-section"> <a href=""> <img src="assest/img/women/ar_fashion-01.png"> </a> <a href=""> <img src="assest/img/women/ar-top-women-2.jpg"> </a> </div>'
        document.getElementById("dropmenu-content").innerHTML = dropmenu;
      }
      if (display === "المواليد والألعاب") {
        let dropmenu = '';
        dropmenu = ' <ul class="list"> <li>الفئات</li> <li><a href="#">اخر ما وصل</a></li> <li><a href="#">ملابس</a></li> <li><a href="#">احذية </a></li> <li><a href="#">شنط</a></li> <li><a href="#">ساعات </a></li> <li><a href="#">سماعات</a></li> <li><a href="#">سماعات رأس وسماعات اذن</a></li> <li><a href="#">اكسسوارات للارتداء</a></li> <li><a href="#">كاميرات تصوير وفيديو</a></li> <li><a href="#">اجهزة التابلت</a></li> </ul> <div class="best-company"> <div class="title">أفضل الماركات</div> <table class="image"> <tr> <td><a href="#"><img src="assest/img/women/best company/en_logo-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-01.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-03.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-05.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-07.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-08.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-12.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-Nike.png"></a></td> </tr> </table> </div> <div class="best-section"> <a href=""> <img src="assest/img/women/ar_fashion-01.png"> </a> <a href=""> <img src="assest/img/women/ar-top-women-2.jpg"> </a> </div>'
        document.getElementById("dropmenu-content").innerHTML = dropmenu;
      }
      if (display === "البقالة") {
        let dropmenu = '';
        dropmenu = ' <ul class="list"> <li>الفئات</li> <li><a href="#">اخر ما وصل</a></li> <li><a href="#">ملابس</a></li> <li><a href="#">احذية </a></li> <li><a href="#">شنط</a></li> <li><a href="#">ساعات </a></li> <li><a href="#">سماعات</a></li> <li><a href="#">سماعات رأس وسماعات اذن</a></li> <li><a href="#">اكسسوارات للارتداء</a></li> <li><a href="#">كاميرات تصوير وفيديو</a></li> <li><a href="#">اجهزة التابلت</a></li> </ul> <div class="best-company"> <div class="title">أفضل الماركات</div> <table class="image"> <tr> <td><a href="#"><img src="assest/img/women/best company/en_logo-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-01.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-03.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-05.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-06.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-07.png"></a></td> </tr> <tr> <td><a href="#"><img src="assest/img/women/best company/en_nav-08.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-12.png"></a></td> <td><a href="#"><img src="assest/img/women/best company/en_nav-Nike.png"></a></td> </tr> </table> </div> <div class="best-section"> <a href=""> <img src="assest/img/women/ar_fashion-01.png"> </a> <a href=""> <img src="assest/img/women/ar-top-women-2.jpg"> </a> </div>'
        document.getElementById("dropmenu-content").innerHTML = dropmenu;
      }
    })
  });
  flexeble =  document.getElementById("dropmenu-content");
  flexeble.addEventListener("mouseover",function(){
    document.getElementById("dropmenu-content").style.display = 'flex';
  })
  flexeble.addEventListener("mouseout",function(){
    document.getElementById("dropmenu-content").style.display = 'none';
  })