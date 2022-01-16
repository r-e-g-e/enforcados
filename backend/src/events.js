export class Events{
  constructor(io){
    this.oi = io
  }

  connection(){
    this.io.on("connection", e => {
      const clientId = e.id

    })
  }

  attempt
}