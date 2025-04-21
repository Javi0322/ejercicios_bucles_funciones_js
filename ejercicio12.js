const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  const found = mutants.filter((mutant) => mutant.power === power)

  if (found.length === 0) {
    return 'No se encontró ningún mutante con el poder de ' + power
  } else if (found.length === 1) {
    return 'Se encontró a ' + found[0].name + ' con el poder de ' + power
  } else {
    const names = found.map((m) => m.name).join(', ')
    return (
      'Se encontraron los siguientes mutantes con el poder de ' +
      power +
      ' : ' +
      names
    )
  }
}

console.log(findMutantByPower(mutants, 'telekinesis'))
