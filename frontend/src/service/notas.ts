export const getnotas = async () => {
    try {
        const response = await fetch('/api/notas');
        if(!response.ok) {
            throw new Error(`Erro ao buscar notas: ${response.statusText}`);
        }
        return await response.json();

    } catch (error) {
        console.error('Erro ao buscar notas: ', error);
        throw error;   
    }
}

export const createNota =  async (
    titulo: string, 
    conteudo: string, 
    cor_id: number,
    favorito: boolean ) => {

        const response = await fetch('/api/create', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({titulo, conteudo, cor_id, favorito})
        });

        if(!response.ok) {
            throw new Error('Erro ao criar nova nota.');
        }

        return await response.json();
    }

export const getcores = async () => {
    try {
        const response = await fetch('/api/cores');
        if(!response.ok) {
            throw new Error(`Erro ao buscar cores: ${response.statusText}`);
        }
        return await response.json();

    } catch (error) {
        console.error('Erro ao buscar cores: ', error);
        throw error;   
    }
}

