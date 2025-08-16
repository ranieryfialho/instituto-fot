// src/data/tracking.js
import imgOrtopedista from '@/assets/tracking-orthopedist.jpg';
import imgFisioterapeuta from '@/assets/tracking-physio.jpg';
import imgEducadorFisico from '@/assets/tracking-trainer.jpg';

export const trackingJourney = [
  {
    id: 'ortopedista',
    title: 'Ortopedista',
    description: 'Responsável pelo diagnóstico, prescrição de tratamentos e, se necessário, procedimentos cirúrgicos.',
    image: imgOrtopedista,
  },
  {
    id: 'fisioterapeuta',
    title: 'Fisioterapeuta',
    description: 'Focado na reabilitação, recuperação de movimentos, fortalecimento e alívio da dor.',
    image: imgFisioterapeuta,
  },
  {
    id: 'educador-fisico',
    title: 'Profissional de Educação Física',
    description: 'Atua no acompanhamento do paciente em seu ganho final de performance após este ter sido liberado para o retorno às suas atividades normais.',
    image: imgEducadorFisico,
  },
];