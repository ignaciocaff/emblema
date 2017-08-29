"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Usuario = (function () {
    function Usuario(id_usuario, n_usuario, password, perfil) {
        if (id_usuario)
            this.id_usuario = id_usuario;
        else
            this.id_usuario = null;
        if (n_usuario)
            this.n_usuario = n_usuario;
        else
            this.n_usuario = null;
        if (password)
            this.password = password;
        else
            this.password = null;
        if (perfil)
            this.perfil = perfil;
        else
            this.perfil = new index_1.Perfil();
    }
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map