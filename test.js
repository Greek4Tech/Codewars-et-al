function coloring () {
  for (let i=0; i<table.row.length; i++) {
    let row = table.row[i]
    row.cells[i]style.backgroundColor= 'red'
  }
}