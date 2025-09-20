/**
 * Constrói a URL correta para um asset (imagem, etc.) dentro do plugin do WordPress.
 */
export const asset = (path) => {
  // 'fotPluginData' é o objeto que nosso plugin PHP cria.
  // 'pluginUrl' é a URL para a pasta do nosso plugin.
  const baseUrl = window.fotPluginData?.pluginUrl || '/';
  
  const imagePath = path.startsWith('/') ? path.substring(1) : path;
  
  return `${baseUrl}${imagePath}`;
};