import livro from "../models/Livro.js";


class livroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({}); // vai trazer toda a coleção de livros
            res.status(200).json(listaLivros)            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar os Livros`});
        }
    };

    static async listaLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id); // vai trazer o livro pelo id
            res.status(200).json(livroEncontrado)            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição do livro`});
        }
    }

    static async cadastraLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body); // Modelo do mongoose para criar um novo livro no banco
            res.status(201).json({message: "criado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar o Livro`});
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body); // vai trazer o livro pelo id e atualizar pelo req.body
            res.status(200).json({message: "Livro atualizado"});            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização`});
        }
    }
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndRemove(id); // vai deletar pelo id, método do mongoose
            res.status(200).json({message: "Livro excluido com sucesso"});            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao excluir`});
        }
    }
    
};

export default livroController