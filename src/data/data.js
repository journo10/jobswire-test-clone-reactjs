import image_1 from "../images/png/Cristiano_Ronaldo.png";
import image_2 from "../images/png/lionel-messi.png";
import image_3 from "../images/png/neymar.jpg";
import image_4 from "../images/png/benzema.png";
import image_5 from "../images/png/Mohamed_Salah.png";
import image_6 from "../images/png/drogba.png";
import image_7 from "../images/png/lampard.png";
import image_8 from "../images/png/gerrrard.png";
import image_9 from "../images/png/selçuk.png";
import image_10 from "../images/png/kevin.png";
import image_11 from "../images/png/wesley-sneijder.png";
import image_12 from "../images/png/hagi.png";
import img_hiring_1 from "../images/svg/HiringE.83d6e6e4.svg";
import img_hiring_2 from "../images/svg/HiringK.bc63dbc9.svg";

export const data = [
  {
    id: 1,
    name: "Cristiano Ronaldo",
    title: "Real Madrid",
    desc: "Cristiano Ronaldo dos Santos Aveiro, Premier League ekiplerinden Manchester United için forvet olarak oynayan ve Portekiz millî takımının kaptanlığını yapan Portekizli profesyonel bir futbolcudur.",
    image: image_1,
  },
  {
    id: 2,
    name: "Lionel Messi",
    title: "Barcelona",
    desc: "Lionel Andrés Messi Cuccittini[3] 24 Haziran 1987, Rosario), ayrıca Leo Messi olarak da bilinir, Ligue 1 takımlarından Paris Saint-Germain'de forma giyen ve Arjantin millî takımının kaptanlığını yapan Arjantinli futbolcudur.",
    image: image_2,
  },
  {
    id: 3,
    name: "Neymar da Silva Santos Júnior",
    title: "Barcelona",
    desc: "2009 Campeonato Paulista'da Yılın Genç Futbolcusu ödülünün sahibi olmuştur.[5] 2011 ve 2012 yılında Güney Amerika'da Yılın Futbolcusu seçilmiştir.",
    image: image_3,
  },
  {
    id: 4,
    name: "Karim Benzema",
    title: "Real Madrid",
    desc: "1996 yılında şehrin en büyük takımlarından Lyon'un çatısı altında genç kulüp akademisine katılmıştır. İlk profesyonel maçına 2004-05 sezonunda çıkmıştır.",
    image: image_4,
  },
  {
    id: 5,
    name: "Muhammed Salah",
    title: "Liverpool",
    desc: "Muhammed Salah veya tam adıyla Muhammed Salah Hamid Mahrus Gali (Arapça: محمد صلاح حامد غالي‎; d. 15 Haziran 1992, Necric, Basyun), orta saha pozisyonunda oynayan Mısırlı millî futbolcudur.",
    image: image_5,
  },
  {
    id: 6,
    name: "Didier Drogba",
    title: "Galatasaray",
    desc: "Didier Yves Drogba Tébily[1] (11 Mart 1978, Abican) Fildişi Sahilli eski millî futbolcudur. 2012-2013 ve 2013-2014 sezonlarında Süper Lig ekiplerinden Galatasaray'da forma giymiştir.",
    image: image_6,
  },
  {
    id: 7,
    name: "Frank Lampard",
    title: "Chelsea",
    desc: "Frank James Lampard İngiliz eski futbolcu ve teknik direktör. İngiltere'nin orta saha oyuncusuydu. Dünyanın en iyi oyuncularından biri olarak gösterilen Lampard atak orta saha oynamıştır",
    image: image_7,
  },
  {
    id: 8,
    name: "Steven Gerrard",
    title: "Liverpool",
    desc: "Steven George Gerrard, İngiliz eski futbolcu ve teknik direktördür. Aston Villa'yı çalıştırmaktadır. Kariyerinin büyük bir bölümünde İngiltere Premier League kulübü Liverpool'da forma giymiştir ve kaptanlık görevi yapmıştır.",
    image: image_8,
  },
  {
    id: 9,
    name: "Selçuk İnan",
    title: "Galatasaray",
    desc: "Selçuk İnan, 1985 yılında İskenderun'un Karaağaç Mahallesi'nde bakkal bir babanın çocuğu olarak dünyaya geldi. ",
    image: image_9,
  },
  {
    id: 10,
    name: "Kevin De Bruyne",
    title: "Manchester City",
    desc: "Kevin De Bruyne, futbola 1997 yılında yaşadığı bölgenin takımlarından olan KVV Drongen takımıyla başladı. İki yıl bu takımın altyapısında futbol oynadıktan sonra ailesinden uzaklaşıp Gent'e transfer oldu.",
    image: image_10,
  },
  {
    id: 11,
    name: "Wesley Sneijder",
    title: "Galatasaray",
    desc: "Wesley Sneijder, Hollandalı eski futbolcudur. Ofansif orta saha pozisyonunda görev yapan oyuncu, En son Katar ligi ekiplerinden El-Ğarafe takımında forma giydikten sonra başka bir takımla anlaşmayıp futbolu 2019 yazında bıraktığını açıklamıştır",
    image: image_11,
  },
  {
    id: 12,
    name: "Gheorghe Hagi",
    title: "Galatasaray",
    desc: "Gheorghe Hagi (d. 5 Şubat 1965, Săcele), orta saha mevkiisinde oynamış Rumen eski futbolcu, teknik direktördür. Karpatların Maradonası lakabı ile anılsa da bundan hiç hoşlanmamıştır.",
    image: image_12,
  },
];

export const hiringData = [
  {
    id: 1,
    title: "Back End Developer",
    text: [
      { id: 1, name: "Gönüllü" },
      { id: 2, name: "Remote" },
      { id: 3, name: "1 Yıl Deneyim" },
    ],
    desc: [
      { id: 1, name: "Node Js" },
      { id: 2, name: "Express Js" },
      { id: 3, name: "Rest API" },
      { id: 4, name: "Mango DB" },
    ],
    image: img_hiring_1,
  },
  {
    id: 2,
    title: "Front End Developer",
    text: [
      { id: 1, name: "Gönüllü" },
      { id: 2, name: "Remote" },
      { id: 3, name: "1 Yıl Deneyim" },
    ],
    desc: [
      { id: 1, name: "React Js" },
      { id: 2, name: "Html Html5" },
      { id: 3, name: "CSS SCSS" },
      { id: 4, name: "Rest API" },
    ],
    image: img_hiring_1,
  },
  {
    id: 3,
    title: "Sosyal Medya Stajyeri",
    text: [
      { id: 1, name: "Gönüllü" },
      { id: 2, name: "Remote" },
      { id: 3, name: "1 Yıl Deneyim" },
    ],
    desc: [
      { id: 1, name: "Adobe Ps" },
      { id: 2, name: "Adobe Ai" },
      { id: 3, name: "Google Ads" },
      { id: 4, name: "Facebook BM" },
    ],
    image: img_hiring_2,
  },
];
