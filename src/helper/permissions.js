class Permissions {
  static validate = (permission) => {
    try {
      const userPermissions = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).permissoes : []
      if (!Array.isArray(userPermissions)) return false
      if (userPermissions[0] === 'administrador') return true

      if (typeof permission === 'string') {
        if (userPermissions.includes(permission)) return true
      } else if (Array.isArray(permission)) {
        let permited = false

        permission.forEach(perm => {
          if (userPermissions.includes(perm)) permited = true
        })

        if (permited) return true
      } else if (typeof permission === 'object') {
        if (permission.actions.length === 0) return false

        let permited = false

        permission.actions.forEach(perm => {
          if (userPermissions.includes(perm.action) && perm.route === permission.routeName) permited = true
        })

        if (permited) return true
      }

      return false
    } catch (error) {
      console.error('Formato de permissão não reconhecido', error)
      return false
    }
  }

  static perfil = (perfil) => {
    try {
      const userPerfil = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).perfil : []
      if (userPerfil === perfil) {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error('Formato de perfil não reconhecido', error)
      return false
    }
  }
}

export default Permissions
