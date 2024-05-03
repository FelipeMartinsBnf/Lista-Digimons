class DigimonClass {
  nome: string
  imagemsrc: string
  level: string
  desc: string

  constructor(nome: string, imagemsrc: string, level: string, desc: string) {
    ;(this.nome = nome),
      (this.imagemsrc = imagemsrc),
      (this.level = level),
      (this.desc = desc)
  }
}

export default DigimonClass
