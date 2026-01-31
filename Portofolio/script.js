const line = document.querySelector('.line');

window.addEventListener('scroll',()=>{
    const scrollY = window.scrollY;
    const height = document.documentElement.scrollHeight - (window.innerHeight);

    const scrollPercent = (scrollY / height) * 100;
    line.style.width = `${Math.min(scrollPercent)}%`;
});

const texts = document.querySelectorAll('.reveal');

texts.forEach(text => {
    const words = text.textContent.split(' ');
    text.textContent = '';

    words.forEach((word,idx) => {
        const span = document.createElement('span')
        span.textContent = word + '\u00A0';
        span.style.transitionDelay = `${idx * 0.02}s`;
        text.appendChild(span);
    })
})

const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
},{threshold:0.5})

texts.forEach(text => obs.observe(text));

/* _.uniq(array) - hapus duplikat 
   _.chunk(array,pecah) - pecah array jadi beberapa bagian
   _.shuffle(array) - acak isi array
   _.difference(data1,data2) - menghapus data di array1 yang ada di array2
   _.isEmpty(tipe or data) - mengecek apakah data kosong
   _.join(array,pemisah) - menggabungkan isi array menjadi string dengan pemisah tertentu
   _.fill(array,nilai,indexAwal,indexAkhir) - mengisi array dengan nilai tertentu dari index awal ke index akhir
   _.reverse(array) - membalik isi array
   _.drop(array,jumlah) - menghapus sejumlah data dari awal array
   _.add(number1,number2) - menjumlahkan dua angka
   _.set(object,path,value) - mengubah nilai properti pada object sesuai path yang ditentukan
   _.get(object,path) - mengambil nilai properti pada object sesuai path yang ditentukan
    _.map(collection,iterasi) - melakukan iterasi pada setiap elemen dalam collection (array atau object) dan mengembalikan array baru dengan hasil iterasi
    _.cloneDeep(value) - clone array lebih dari satu dimensi atau property object
    _.clone(value) - clone array satu dimensi atau property object
    _.isEqual(a,b) - membandingkan dua nilai apakah sama atau tidak
    _.pick(object,paths) - mengambil properti tertentu dari sebuah object dan mengembalikan object baru yang hanya berisi properti tersebut
    _.omit(object,paths) - menghapus properti tertentu dari sebuah object dan mengembalikan object baru tanpa properti tersebut
    _.groupBy(collection,iterasi) - mengelompokkan elemen dalam collection berdasarkan hasil iterasi dan mengembalikan object dengan properti yang merupakan hasil pengelompokan
    _.debounce(func,delay) - membuat fungsi baru yang hanya akan dipanggil setelah periode waktu tertentu, tunggu sesuai delay tersebut dan akan dipanggil lagi.
    _thortle(func,wait) - membuat fungsi baru yang hanya akan dipanggil sekali dalam periode waktu tertentu
*/