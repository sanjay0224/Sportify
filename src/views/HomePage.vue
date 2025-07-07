<template>
    <div class="container">
      <h1 class="text-center">Explore Great Sporting Moments</h1>
  
      <div class="card-grid">
  <div class="sport-card" v-for="(item, index) in sportsData" :key="index">
    <img :src="item.image" alt="Sport Image" class="sport-image" />
    <div class="sport-info">
      <h2>{{ item.title }} - {{ item.title2 }}</h2>
      <h4>{{ item.place }}</h4>
      <p>{{ item.description }}</p>
    </div>
  </div>
</div>

    </div>
  </template>
  
  <script setup>
  
  // ✅ Import all images from src/assets/images
  import img1 from '@/assets/images/REAL_MADRID.jpg';
  import img2 from '@/assets/images/2011.jpg';
  import img3 from '@/assets/images/Nba.jpg';
  import img4 from '@/assets/images/serena.jpg';
  import img5 from '@/assets/images/LEWIS HAMILTON.jpg';
  import img6 from '@/assets/images/tokyo2020.jpg';
  import img7 from '@/assets/images/barcelona.jpg';
  import img8 from '@/assets/images/csk-1.jpg';
  import img9 from '@/assets/images/pv_sindhu.jpg';
  import img10 from '@/assets/images/roger.jpg';
  import img11 from '@/assets/images/redbul.jpg';
  import img12 from '@/assets/images/indian hockey.jpg';
  import img13 from '@/assets/images/leicester.jpg';
  import img14 from '@/assets/images/mumbai.jpg';
  import img15 from '@/assets/images/mary kom.jpg';
  import img16 from '@/assets/images/France_2018.jpg';
  import img17 from '@/assets/images/RAFAEL NADAL.jpg';
  import img18 from '@/assets/images/BAJRANG PUNIA.jpg';
  import img19 from '@/assets/images/ARGENTINA.jpg';
  import img20 from '@/assets/images/AUSTRALIA 2023.jpg';
  import img21 from '@/assets/images/brazil 2002.jpg';
  import img22 from '@/assets/images/MICHAEL PHELPS.jpg';
  import img23 from '@/assets/images/USAIN BOLT.jpg';
  import img24 from '@/assets/images/LIVERPOOL.jpg';
  import img25 from '@/assets/images/ENGLAND.jpg';
  import img26 from '@/assets/images/GERMANY.jpg';
  import img27 from '@/assets/images/AUSSIE WOMEN.jpg';
  import img28 from '@/assets/images/INDIA kabbadi.jpg';
  import img29 from '@/assets/images/BRAZIL volleyball.jpg';
  import img30 from '@/assets/images/MANIKA_BATRA.jpg';
  
  // ✅ Now define your sportsData using the imported images
  const sportsData = [
    { title: 'REAL MADRID', title2: 'UEFA CHAMPIONS', place: 'Santiago Bernabéu', description: 'Record 14-time UEFA Champions League winners.', image: img1 },
    { title: 'INDIA 2011', title2: 'WORLD CUP CRICKET', place: 'Mumbai', description: 'India’s historic 2011 Cricket World Cup win.', image: img2 },
    { title: 'CHICAGO BULLS', title2: 'NBA DYNASTY', place: 'United Center', description: 'Six-time NBA champions led by Michael Jordan.', image: img3 },
    { title: 'SERENA WILLIAMS', title2: '23 GRAND SLAMS', place: 'Wimbledon', description: 'One of the greatest athletes of all time.', image: img4 },
    { title: 'LEWIS HAMILTON', title2: 'F1 LEGEND', place: 'Mercedes AMG', description: 'Seven-time F1 World Champion.', image: img5 },
    { title: 'USA OLYMPICS', title2: 'MEDAL LEADERS', place: 'Tokyo 2020', description: 'USA topped the medal table in Tokyo.', image: img6 },
    { title: 'BARCELONA 2009', title2: 'TIKI-TAKA TREBLE', place: 'Camp Nou', description: 'Historic treble-winning side under Guardiola.', image: img7 },
    { title: 'CHENNAI SUPER KINGS', title2: 'IPL TITLES', place: 'Chennai', description: 'Five-time IPL champions led by Dhoni.', image: img8 },
    { title: 'PV SINDHU', title2: 'OLYMPIC MEDALLIST', place: 'Tokyo 2020', description: 'India’s two-time Olympic medalist in badminton.', image: img9 },
    { title: 'ROGER FEDERER', title2: '20 SLAM TITLES', place: 'Wimbledon', description: 'Legendary tennis icon.', image: img10 },
    { title: 'RED BULL RACING', title2: 'F1 CHAMPIONS', place: 'Verstappen Era', description: 'Dominant in modern F1 under Verstappen.', image: img11 },
    { title: 'INDIA HOCKEY', title2: 'TOKYO BRONZE', place: 'Tokyo 2020', description: 'Revived hockey with a 41-year Olympic medal.', image: img12 },
    { title: 'LEICESTER CITY', title2: 'EPL CHAMPIONS', place: 'King Power', description: 'Fairytale 2016 Premier League win.', image: img13 },
    { title: 'MUMBAI INDIANS', title2: 'IPL TITLES', place: 'Mumbai', description: 'Five-time champions of the IPL.', image: img14 },
    { title: 'MARY KOM', title2: 'OLYMPIC MEDAL', place: 'London 2012', description: 'India’s legendary boxer.', image: img15 },
    { title: 'FRANCE', title2: 'WORLD CUP 2018', place: 'Luzhniki', description: 'Dynamic young squad led by Mbappé.', image: img16 },
    { title: 'RAFAEL NADAL', title2: 'CLAY KING', place: 'Roland Garros', description: '14-time French Open champion.', image: img17 },
    { title: 'BAJRANG PUNIA', title2: 'WRESTLING MEDAL', place: 'Tokyo 2020', description: 'Olympic bronze medalist wrestler.', image: img18 },
    { title: 'ARGENTINA', title2: 'WORLD CUP 2022', place: 'Lusail', description: 'Messi’s crowning moment.', image: img19 },
    { title: 'AUSTRALIA', title2: 'WORLD CUP 2023', place: 'Ahmedabad', description: 'Australia wins 6th ICC ODI World Cup.', image: img20 },
    { title: 'BRAZIL', title2: 'WORLD CUP 2002', place: 'Yokohama', description: 'Ronaldo led Brazil to glory.', image: img21 },
    { title: 'MICHAEL PHELPS', title2: 'SWIMMING LEGEND', place: 'Beijing 2008', description: 'Eight golds in a single Olympics.', image: img22 },
    { title: 'USAIN BOLT', title2: 'SPRINT KING', place: 'Rio 2016', description: 'Historic triple-triple Olympic wins.', image: img23 },
    { title: 'LIVERPOOL', title2: 'CHAMPIONS 2019', place: 'Anfield', description: 'UEFA Champions League glory under Klopp.', image: img24 },
    { title: 'ENGLAND', title2: 'WORLD CUP 2019', place: 'Lords', description: 'Epic Super Over win.', image: img25 },
    { title: 'GERMANY', title2: 'WORLD CUP 2014', place: 'Maracanã', description: 'Historic 7–1 demolition of Brazil.', image: img26 },
    { title: 'AUSSIE WOMEN', title2: 'CRICKET DOMINANCE', place: 'Commonwealth 2022', description: 'Australia women’s cricket excellence.', image: img27 },
    { title: 'INDIA', title2: 'KABADDI CHAMPS', place: 'Global Success', description: 'Dominant in both Pro Kabaddi & international play.', image: img28 },
    { title: 'BRAZIL', title2: 'VOLLEYBALL MASTERS', place: 'FIVB', description: 'Volleyball legacy and world-class success.', image: img29 },
    { title: 'MANIKA BATRA', title2: 'TABLE TENNIS HERO', place: 'Commonwealth 2018', description: 'Led India to historic mixed team gold.', image: img30 },
  ];
  </script>

<style scoped>
.container {
  background-color: #111;
  color: #fff;
  padding: 20px;
  min-height: 100vh;
}
.text-center {
  text-align: center;
  font-size: 2rem;
  margin: 20px 0;
  font-weight: bold;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.sport-card {
  background: #222;
  padding: 15px;
  border-radius: 16px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}
.sport-card:hover {
  transform: scale(1.05);
}
.sport-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
}
.sport-info {
  margin-top: 12px;
}
.sport-info h2 {
  font-size: 18px;
  color: #f5b32f;
}
.sport-info h4 {
  font-size: 14px;
  color: #ccc;
}
.footer {
  margin-top: 40px;
  text-align: center;
  color: #aaa;
}
@media (max-width: 1024px) {
.card-grid {
  grid-template-columns: repeat(2, 1fr); /* 👈 2 cards per row on tablets */
}
}

/* Media query for mobile */
@media (max-width: 600px) {
.card-grid {
  grid-template-columns: 1fr; /* 👈 1 card per row on mobile */
}
}
</style>
