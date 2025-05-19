exports.login = (req, res) => {
       const { nome, senha } = req.body;
   
       if (!nome || !senha) {
           return res.status(400).json({ message: "O campo de usuário ou senha não foi preenchido!" });
       }
   
       if (nome !== "admin" || senha !== "123456") {
           return res.status(401).json({ message: "O nome de usuário ou senha está incorreto ou não foi cadastrado!" });
       }
   
       return res.status(200).json({
           id: 1,
           nome: "admin",
           email: "admin@email.com"
       });
   };
   