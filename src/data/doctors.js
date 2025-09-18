import ortopedista1 from '@/assets/doctors/ortopedista-1.jpg';
import fisioterapeuta1 from '@/assets/doctors/fisioterapeuta-1.jpg';
import ortopedista2 from '@/assets/doctors/ortopedista-2.jpg';
import fisioterapeuta2 from '@/assets/doctors/fisioterapeuta-2.jpg';

export const doctors = [
  {
    id: 1,
    name: 'Dr. Heitor Dourado',
    specialty: 'Ortopedista',
    image: ortopedista1,
    experience: '15+ anos',
    rating: 5,
    featured: true,
    certifications: 'CRM 12345-CE, Especialista pela SBO',
    specialties: [
      'Cirurgia do Joelho',
      'Artroscopia',
      'Medicina Esportiva',
      'Ortopedia Geral'
    ]
  },
  {
    id: 2,
    name: 'Ft. Eliomar Nunes',
    specialty: 'Fisioterapeuta',
    image: fisioterapeuta1,
    experience: '12+ anos',
    rating: 5,
    certifications: 'CREFITO 123456-F, Especialista em Ortopedia',
    specialties: [
      'Reabilitação Ortopédica',
      'Fisioterapia Esportiva',
      'Terapia Manual',
      'RPG'
    ]
  },
  {
    id: 3,
    name: 'Dra. Ana Clara',
    specialty: 'Ortopedista',
    image: ortopedista2,
    experience: '10+ anos',
    rating: 5,
    featured: true,
    certifications: 'CRM 67890-CE, Especialista em Coluna',
    specialties: [
      'Cirurgia da Coluna',
      'Dor nas Costas',
      'Escoliose',
      'Hérnia de Disco'
    ]
  },
  {
    id: 4,
    name: 'Ft. Roberto Silva',
    specialty: 'Fisioterapeuta',
    image: fisioterapeuta2,
    experience: '8+ anos',
    rating: 4,
    certifications: 'CREFITO 789012-F, Especialista em Coluna',
    specialties: [
      'Pilates Clínico',
      'Osteopatia',
      'Dor Crônica',
      'Reabilitação Postural'
    ]
  },
];