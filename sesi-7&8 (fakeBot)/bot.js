const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Halo, perkenalkan nama saya maBot, siapa nama kamu?",
    `halo ${data?.nama}, berapa usia kamu?`,
    `Ooohhh ${data?.umur}, hobi kamu apa ya?`,
    `Woowww sama dong hobi aku ${data?.hobi}, btw kamu punya pacar gak?`,
    `oohhh ${data?.pacar}, yaudah kalo gitu udahan dulu yah....`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  if (jawaban.value.length < 1)return alert("silahkan isi terlebih dahulu!")
  init += 1;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ umur: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [1000]);
  usersData.push(jawaban.value);
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `makasih ya ${usersData[0]} udah mau luangkan waktunya . nanti kita main ${usersData[2]} ya...`;
  jawaban.value = "siap, thanks juga!";
}

function botEnd() {
  alert(`Terima kasih ${usersData[0]} sudah berkunjung. Anda akan dikembalikan ke home page utama. `)
  window.location.reload();
}
