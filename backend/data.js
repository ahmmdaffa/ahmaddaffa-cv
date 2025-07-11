
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika',
    image: 'amikom.jpg'
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'SMA ABBS Surakarta',
    major: 'MIPA',
    image: 'sma.jpg'
  },
];

const skills = [
  {
    name: 'Vue.js',
    level: 'Mahir',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'JavaScript',
    level: 'Mahir',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: "Tailwind CSS",
    level: "Mahir",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  },
  {
    name: 'Fotografi & videografi',
    level: 'Menengah',
    iconUrl: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/camera.svg'
  },
  {
    name: 'Figma',
    level: 'Expert',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'MySQL',
    level: 'Menengah',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Git & GitHub',
    level: 'Mahir',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Mahir',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  }
];

const projects = [
  {
    title: 'Mendesain WEB RENTAL IQRA',
    image: 'rental',
    description: 'Platform Sewa Mobil Termurah ',
    tech: ['Vue.js', 'Bootstrap', 'mySQL'],
    link: 'https://www.figma.com/design/tks9a0C2WzUzghDsGu1JVh/cacomel-trans?node-id=0-1&t=BrM5EhEqVVQWhxSd-1',
  },
  {
    title: 'Analisis Desain Kasir Angkringan',
    image: 'adsi',
    description: 'Aplikasi untuk melacak detail keuangan kasir',
    tech: ['Figma', 'vue.js'],
    link: 'https://www.figma.com/design/nQVUFAHRhQOr6PtpE5lgN7/adsi?t=BrM5EhEqVVQWhxSd-1',
  },
];

module.exports = { educationHistory, skills, projects };
