export const getNotas = async () => {
    try {
        const response = await fetch('/api/notas');
        return response.json();

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

    try {
        const response = await fetch('/api/create', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({titulo, conteudo, cor_id, favorito})
        });
        return response.json();

    } catch (error) {
        console.error('Erro ao criar nota: ', error);
        throw error;
    }
}

export const updateNota = async (nota: any) => {

    try {
        const response = await fetch(`/api/atualiza/${nota.id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(nota)
        });
        return response.json();
        
    } catch (error) {
        console.error('Erro ao atualizar nota: ', error);
        throw error;
    }
}

export const deleteNote = async (id: number) => {
    try {
        const response = await fetch(`/api/excluir/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    } catch (error) {
        console.error('Erro ao excluir nota: ', error);
        throw error;
    }
}

export const getCores = async () => {
    try {
        const response = await fetch('/api/cores');
        return response.json();

    } catch (error) {
        console.error('Erro ao buscar cores: ', error);
        throw error;   
    }
}

