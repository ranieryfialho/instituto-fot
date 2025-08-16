import imgAna from '@/assets/testimonials/ana-paula.jpg';
import imgCarlos from '@/assets/testimonials/carlos-eduardo.jpg';
import imgMariana from '@/assets/testimonials/mariana-costa.jpg';

export const testimonials = [
  {
    id: 1,
    name: 'Ana Paula S.',
    role: 'Paciente de Artroscopia',
    // O ID do vídeo do YouTube (a parte depois de "v=")
    videoId: 'dQw4w9WgXcQ', 
    thumbnail: imgAna, 
  },
  {
    id: 2,
    name: 'Carlos Eduardo S.',
    role: 'Paciente de Fisioterapia',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: imgCarlos,
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'Acompanhamento de Coluna',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: imgMariana,
  }
];