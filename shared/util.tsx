import fs from 'fs';
import path from 'path';

export function getPostList(){
    try {
        // concatenar a raiz do projeto onde está rodando com pages e post, não pode usar o __dirname no nodejs, então se usar process.cwd();
        const postsDir = path.join(process.cwd(), 'pages/post');
        return fs
        .readdirSync(postsDir) // ler o diretorio dos posts
        .map(filename => (  // Irá receber um array com os nomes dos arquivos, então irá mapear e remover a extensão do arquivos
            filename.substring(0, filename.indexOf('.'))
        ));
    } catch (error) {
        console.warn('🎇 There are no Post!');
        return[];
    }
}
